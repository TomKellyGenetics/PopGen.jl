#=
These are commands that are for the general manipulation and viewing of the
PopData type. The appear in alphabetical order.
=#
export locations, locations!, loci, locus, get_genotypes, get_genotypes, populations, population, populations!, population!, exclude, remove, omit, exclude!, remove!, omit!, samples

"""
    locations(data::PopData)
View the longitude and latitude data in a `PopData` object. Returns a table
derived from the PopData. Changes made to this table will not alter the source
`PopData` object.

Use `locations!` to add spatial data to a `PopData` object.
"""
function locations(data::PopData)
    @view data.meta[!, [:longitude, :latitude]]
end


"""
    locations!(data::PopData; long::Vector{Float64}, lat::Vector{Float64})
Replaces existing `PopData` location data (longitude `long`, latitude `lat`).
Takes **decimal degrees** as a `Vector` of any `AbstractFloat`.
## Formatting requirements
- Decimal Degrees format: `-11.431`
- **Must** use negative sign `-` instead of cardinal directions
- Location data must be in the order that samples appear in your `PopData`
- Missing data should be coded as `missing` values of type `Missing` (can be accomplished with `replace!()`)
### Example
```
ncats = nancycats() ;
x = rand(237) ; y = rand(237)
locations!(ncats, long = x, lat = y)
```
"""
function locations!(data::PopData, long::Vector{Union{Missing,T}}, lat::Vector{Union{Missing,T}}) where T <: AbstractFloat
    long_len = length(long)
    lat_len = length(lat)
    long_len != lat_len && error("latitude ($lat_len) and longitude ($long_len) arrays not equal in length")
    long_len != length(data.meta.name) && error("lat/long array length ($long_len) and number of samples in PopData ($long_len) are not equal")

    data.meta.longitude .= long
    data.meta.latitude .= lat
    return
end

function locations!(data::PopData, long::Vector{T}, lat::Vector{T}) where T <: AbstractFloat
    # convert to the right type and use locations!()
    lat_adjust = lat |> Vector{Union{Missing, Float32}}
    long_adjust = long |> Vector{Union{Missing, Float32}}
    locations!(data, long = long_adjust, lat = lat_adjust)
end


"""
    locations!(data::PopData; long::Vector{String}, lat::Vector{String})
Replaces existing `PopData` location data (longitude `long`, latitude `lat`). Takes
**decimal minutes** or **degrees minutes seconds** format as a `Vector` of `String`. Recommended to use `CSV.read`
from `CSV.jl` to import your spatial coordinates from a text file.
## Formatting requirements
- Coordinates as a `String` separated by spaces (`"11 43 41"`) or colons (`"11:43:41"`)
- Must use negative sign (`"-11 43.52"`) or single-letter cardinal direction (`"11 43.52W"`)
- Missing data should be coded as the string `"missing"` (can be accomplished with `replace!()`)
- Can mix colons and spaces (although it's bad practice)
### NOTE
If you read in the coordinate data as 4 vectors (longitude degrees, longitude minutes, latitude degrees, latitude minutes),
then the easiest course of action would be to merge them into two vectors of strings
(one for longitude, one for latitude):
```
long_string = string.(lat_deg, " ", lat_min)
lat_string = string.(long_deg, " ", long_min)
```
and use these as inputs into `locations!`

### Example
```
ncats = nancycats();
x = fill("11 22.33W", 237) ; y = fill("-41 31.52", 237)
locations!(ncats, long = x, lat = y)
```
"""
function locations!(data::PopData, long::Vector{String}, lat::Vector{String})
    long_len = length(long)
    lat_len = length(lat)
    lat_len != long_len && error("latitude ($lat_len) and longitude ($long_len) arrays not equal in length")
    lat_len != length(data.meta.name) && error("lat/long array length ($lat_len) and number of samples in PopData ($long_len) are not equal")
    @info "Converting decimal minutes to decimal degrees"
    # convert coordinates to decimal degrees
    data.meta.longitude .= convert_coord.(long)
    data.meta.latitude .= convert_coord.(lat)
    return
end

function locations!(data::PopData; kwargs...)
    kwargs = Dict(kwargs)
    # check for matching lat and long keywords
    if all([haskey(kwargs, :lat), haskey(kwargs, :long)])
        locations!(data, kwargs[:long], kwargs[:lat])
    else
        error("keyword arguments \"lat\" and \"long\" must be supplied together")
    end
end


"""
    loci(data::PopData)
Returns an array of strings of the loci names in a `PopData` object.
"""
function loci(data::PopData)
    levels(data.loci.locus)
end

"""
    get_genotypes(data::PopObj; samples::Union{String, Vector{String}}, loci::Union{String, Vector{String}})
Return the genotype(s) of one or more `samples` for one or more
specific `loci` (both as keywords) in a `PopData` object.
### Examples
```
cats = nancycats();
get_genotype(cats, sample = "N115" , locus = "fca8")
get_genotypes(cats, sample = ["N1", "N2"] , locus = "fca8")
get_genotype(cats, sample = "N115" , locus = ["fca8", "fca37"])
get_genotype(cats, sample = ["N1", "N2"] , locus = ["fca8", "fca37"])
```
"""
function get_genotypes(data::PopData, sample::Union{String, Vector{String}}, locus::Union{String, Vector{String}})
    if typeof(sample) == String
        sample = [sample]
    end
    if typeof(locus) == String
        locus = [locus]
    end
    @view data.loci[(data.loci.name .∈ Ref(sample)) .& (data.loci.locus .∈ Ref(locus)), :] 
end


"""
    get_genotypes(data::PopData, sample::String)
Return all the genotypes of a specific sample in a `PopData` object.
```
cats = nancycats()
get_sample_genotypes(cats, "N115")
```
"""
function get_genotypes(data::PopObj, sample::String)
    @view data.loci[data.loci.name .== sample, :genotype]
end


"""
    locus(data::PopData, locus::Union{String, Symbol})
Convenience wrapper to return a vector of all the genotypes of a single locus

### Example
```
locus(gulfsharks(), "contig_475")
```
"""
function locus(data::PopData, locus::String)
    @view data.loci[data.loci.locus .== locus, :genotype]
    #@where(data.loci, :locus .== locus)[! , :genotype]
end


"""
    populations(data::PopData; listall::Bool = false)
View unique population ID's and their counts in a `PopData`.

- `listall = true` displays all samples and their `population` instead (default = `false`)
"""
@inline function populations(data::PopData; listall::Bool = false)
    if all(ismissing.(data.meta.population)) == true
        @info "no population data present in PopData"
        return
    elseif listall == true
        return @view data.meta[!, [:name, :population]]
    else
        DataFrames.combine(
            DataFrames.groupby(data.meta, :population),
            nrow => :count
        )
    end
end

"""
```
# Replace by matching
populations!(data::PopData, rename::Dict)
populations!(data::PopData, rename::Vector{String})
populations!(data::PopData, samples::Vector{String}, populations::Vector{String})
```
Multiple methods to rename or reassign population names to a `PopData`.

## Rename using a Dictionary
Rename existing population ID's of `PopData` using a `Dict` of
`population_name => replacement`
\n**Example**
```
potatopops = Dict("1" => "Idaho", "2" => "Russet")
populations!(potatoes, potatopops)
```

## Rename using a Vector of Strings
`Vector` of new unique population names in the order that they appear in the PopData.meta
\n**Example**
```
potatopops = ["Idaho", "Russet"]
populations!(potatoes, potatopops)
```
## Reassign using samples and new population assignments
Completely reassign populations for each individual. Takes two vectors of strings
as input: one of the sample names, and the other with their new corresponding
population name. This can be useful to change population names for only some individuals.

\n**Example**
```
populations!(potatoes, ["potato_1", "potato_2"], ["north_russet", "south_russet"])
```

"""
function populations!(data::PopData, rename::Dict)
    msg = ""
    @inbounds for key in keys(rename)
        if key ∉ levels(data.loci.population)
            msg *= "  Population \"$key\" not found in PopData\n"
        else
            replace!(data.meta.population, key => rename[key])
        end
    end
    msg != "" && printstyled("Warnings:", color = :yellow) ; print("\n"*msg)
    recode!(data.loci.population,rename...)
    return
end

function populations!(data::PopData, rename::Vector{String})
    current_popnames = unique(data.meta.population)
    rn_dict = Dict{String, String}()
    [rn_dict[string(i)] = j for (i,j) in zip(current_popnames, rename)]
    populations!(data, rn_dict)
    return
end

function populations!(data::PopData, samples::Vector{String}, populations::Vector{String})
    meta_pops = deepcopy(populations)
    meta_df = groupby(data.meta, :name)
    loci_df = groupby(data.loci, :name)
    for (sample, new_pop) in zip(samples, populations)
        meta_df[(name = sample,)].population .= new_pop
        loci_df[(name = sample,)].population .= new_pop
    end
    droplevels!(data.loci.population)
    return
end

const population = populations
const population! = populations!
const popnames! = populations!

##### Exclusion #####
"""
    exclude!(data::PopData, kwargs...)
Edit a `PopData` object in-place by excluding all occurences of the specified information.
The keywords can be used in any combination. Synonymous with `omit!` and `remove!`.

### Keyword Arguments
#### `locus`
A `String` or `Vector{String}` of loci you want to remove from the `PopData`.
The keyword `loci` also works.

#### `population`
A `String` or `Vector{String}` of populations you want to remove from the `PopData`
The keyword `populations` also works.

#### `name`
A `String` or `Vector{String}` of samples you want to remove from the `PopData`
The keywords `names`, `sample`, and `samples` also work.

**Examples**
```
cats = nancycats();
exclude!(cats, name = "N100", population = ["1", "15"])
exclude!(cats, samples = ["N100", "N102", "N211"], locus = ["fca8", "fca23"])
exclude!(cats, names = "N102", loci = "fca8", population = "3")
```
"""
function exclude!(data::PopData; kwargs...)
    filter_by = Dict(kwargs...)
    tmp = data
    filter_params = keys(filter_by) |> collect
    notices = ""
    # populations
    # check for keywords
    filt_pop = get.(Ref(filter_by), [:population, :populations], nothing)
    filt_pop = filt_pop[filt_pop .!== nothing]
    if length(filt_pop) != 0
        filt_pop = filt_pop[begin]
        if typeof(filt_pop) == String
            filt_pop = [filt_pop]
        end
        err = filt_pop[filt_pop .∉ Ref(unique(tmp.meta.population))]
        if length(err) > 0
            [notices *= "\n  population \"$i\" not found" for i in err]
        end
        # choose the cheaper method
        all_pops = levels(tmp.loci.population)
        if length(filt_pop) < length(all_pops)/2
            filter!(:population => x -> x ∉ filt_pop, tmp.loci)
            filter!(:population => x -> x ∉ filt_pop, tmp.meta)
        else
            keep = all_pops[all_pops .∉ Ref(filt_pop)]
            filter!(:population => x -> x in filt_pop, tmp.loci)
            filter!(:population => x -> x in filt_pop, tmp.meta)
        end
        droplevels!(tmp.loci.population)
    end

    # samples
    # check for keywords
    filt_name = get.(Ref(filter_by), [:name, :names, :sample, :samples], nothing)
    filt_name = filt_name[filt_name .!== nothing]
    if length(filt_name) != 0
        filt_name = filt_name[begin]
        if typeof(filt_name) == String
            filt_name = [filt_name]
        end
        err = filt_name[filt_name .∉ Ref(tmp.meta.name)]
        if length(err) > 0
            [notices *= "\n  sample \"$i\" not found" for i in err]
        end
        # choose the cheaper method
        all_samples = tmp.meta.name
        if length(filt_name) < length(all_samples)/2
            filter!(:name => x -> x ∉ filt_name, tmp.loci)
            filter!(:name => x -> x ∉ filt_name, tmp.meta)
        else
            keep = all_samples[all_samples .∉ Ref(filt_name)]
            filter!(:name => x -> x in keep, tmp.loci)
            filter!(:name => x -> x in keep, tmp.meta)
        end
        droplevels!(tmp.loci.name)
    end

    # loci
    # check for keywords
    filt_loci = get.(Ref(filter_by), [:locus, :loci], nothing)
    filt_loci = filt_loci[filt_loci .!= nothing]
    if length(filt_loci) != 0
        filt_loci = filt_loci[begin]
        if typeof(filt_loci) == String
            filt_loci = [filt_loci]
        end
        err = filt_loci[filt_loci .∉ Ref(loci(tmp))]
        if length(err) > 0
            [notices *= "\n  locus \"$i\" not found" for i in err]
        end
        # choose the cheaper method
        all_loci = loci(tmp)
        if length(filt_loci) < length(all_loci)/2
            filter!(:locus => x -> x ∉ filt_loci, tmp.loci)
        else
            keep = all_loci[all_loci .∉ Ref(filt_loci)]
            filter!(:locus => x -> x in keep, tmp.loci)
        end
        droplevels!(tmp.loci.locus)
    end

    # print the notices, if any
    if notices != ""
        printstyled("Notices:", bold = true, color = :blue)
        print(notices, "\n\n")
    end
    return tmp
end

const omit! = exclude!
const remove! = exclude!

"""
    exclude(data::PopData, kwargs...)
Returns a new `PopData` object excluding all occurrences of the specified keywords.
The keywords can be used in any combination. Synonymous with `omit` and `remove`.

### Keyword Arguments
#### `locus`
A `String` or `Vector{String}` of loci you want to remove from the `PopData`.
The keyword `loci` also works.

#### `population`
A `String` or `Vector{String}` of populations you want to remove from the `PopData`.
The keyword `populations` also works.

#### `name`
A `String` or `Vector{String}` of samples you want to remove from the `PopData`.
The keywords `names`, `sample`, and `samples` also work.

**Examples**
```
cats = nancycats();
exclude(cats, name = "N100", population = ["1", "15"])
exclude(cats, samples = ["N100", "N102", "N211"], locus = ["fca8", "fca23"])
exclude(cats, names = "N102", loci = "fca8", population = "3")
```
"""
function exclude(data::PopData; kwargs...)
    tmp = copy(data)
    exclude!(tmp; kwargs...)
    return tmp
end

const omit = exclude
const remove = exclude

"""
    samples(data::PopData)
View individual/sample names in a `PopData`
"""
function samples(data::PopData)
    @view data.meta[!, :name]
end
