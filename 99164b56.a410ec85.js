(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{176:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return m}));var n=t(2),r=t(9),i=(t(0),t(204)),o=t(209),s=t(210),l={id:"comparison",title:"Comparison",sidebar_label:"Comparison"},c={id:"getting_started/comparison",isDocsHomePage:!1,title:"Comparison",description:"There's a reason we started investing so many hours and so many new grey hairs into writing PopGen.jl when there was an existing ecosystem in R to perform these same tasks. Like we explain in the home page of these docs, we want a platform that is:",source:"@site/docs/getting_started/comparison.md",permalink:"/PopGen.jl/docs/getting_started/comparison",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/getting_started/comparison.md",lastUpdatedAt:1592688695,sidebar_label:"Comparison",sidebar:"docs",previous:{title:"A quick Julia primer",permalink:"/PopGen.jl/docs/getting_started/julia_primer"},next:{title:"PopObj and PopData types",permalink:"/PopGen.jl/docs/getting_started/types"}},p=[{value:"Benchmarks",id:"benchmarks",children:[{value:"Reading in data",id:"reading-in-data",children:[]},{value:"<code>PopData</code> vs <code>genind</code> size",id:"popdata-vs-genind-size",children:[]},{value:"Summary statistics",id:"summary-statistics",children:[]},{value:"Chi-squared test for HWE",id:"chi-squared-test-for-hwe",children:[]}]}],b={rightToc:p};function m(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There's a reason we started investing so many hours and so many new grey hairs into writing PopGen.jl when there was an existing ecosystem in R to perform these same tasks. Like we explain in the home page of these docs, we want a platform that is:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"fast(er)"),Object(i.b)("li",{parentName:"ol"},"written in a single language"),Object(i.b)("li",{parentName:"ol"},"easy to use")),Object(i.b)("p",null,"So, we'd like to prove that Julia and PopGen.jl actually achieves that by showing a few benchmarks comparing PopGen.jl to ",Object(i.b)("inlineCode",{parentName:"p"},"adegenet")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pegas"),", which along with ",Object(i.b)("inlineCode",{parentName:"p"},"ape")," are arguably the most commonly used and robust population genetic packages available. It's worth mentioning that we ourselves use and have published work incorporating these packages, and are tremendously grateful for the work invested in those packages. We appreciate those folks and have tremendous respect and envy for the work they continue to do! Here are links to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thibautjombart/adegenet"}),"adegenet"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://academic.oup.com/bioinformatics/article/26/3/419/215731/"}),"pegas"),", and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cran.r-project.org/package=ape"}),"ape"),".  "),Object(i.b)("h2",{id:"benchmarks"},"Benchmarks"),Object(i.b)("p",null,"To make this a practical comparison, we're going to use the ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks")," data because it is considerably larger (212 samples x 2213 loci) than ",Object(i.b)("inlineCode",{parentName:"p"},"nancycats"),' (237 x 9) and a bit more of a "stress test".  All benchmarks in R are performed using the ',Object(i.b)("inlineCode",{parentName:"p"},"microbenchmark")," package, and  ",Object(i.b)("inlineCode",{parentName:"p"},"BenchmarkTools")," are used for Julia."),Object(i.b)(o.a,{block:!0,defaultValue:"j",values:[{label:"load Julia packages",value:"j"},{label:"load R packages",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"using BenchmarkTools, PopGen\n"))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),"library(adegenet)\nlibrary(pegas)\nlibrary(hierfstat)\nlibrary(microbenchmark)\n")))),Object(i.b)("p",null,"As a note, the reported benchmarks are being performed on a 64-bit Manjaro Linux system on a nothing-special Lenovo Thinkbook 14S  with 8gigs of RAM and a 8th gen Intel i5 mobile processor. ",Object(i.b)("strong",{parentName:"p"},"Note:")," all of the Julia benchmarks, unless explicitly stated, are performed single-threaded (i.e. not parallel, distributed, or GPU)."),Object(i.b)("h3",{id:"reading-in-data"},"Reading in data"),Object(i.b)("p",null,"Since ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks")," is shamelessly provided in PopGen.jl, we will just load it with ",Object(i.b)("inlineCode",{parentName:"p"},"genepop()"),".  If you would like to try this yourself in R, find the ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks.gen")," file in the package repository under ",Object(i.b)("inlineCode",{parentName:"p"},"/data/source/gulfsharks.gen"),". Since the file importer now uses CSV.jl to read files, there is one step of the genepop parser that is multithreaded. However, the majority of the data parsing (formatting the raw data into a correct PopData structure) occurs using a single thread. This R benchmark will take a few minutes. Consider making some tea while you wait."),Object(i.b)(o.a,{block:!0,defaultValue:"j",values:[{label:"Julia",value:"j"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'@benchmark sharks = genepop("data/source/gulfsharks.gen", silent = true)\nBenchmarkTools.Trial:\n  memory estimate:  330.58 MiB\n  allocs estimate:  6905285\n  --------------\n  minimum time:     806.202 ms (5.91% GC)\n  median time:      884.887 ms (5.61% GC)\n  mean time:        910.722 ms (5.41% GC)\n  maximum time:     1.071 s (4.82% GC)\n  --------------\n  samples:          6\n  evals/sample:     1\n'))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'> microbenchmark(read.genepop(file = "/home/pdimens/gulfsharks.gen", ncode = 3L, quiet = TRUE))\nUnit: seconds\n read.genepop(file = "/home/pdimens/gulfsharks.gen", ncode = 3L, quiet = FALSE)\n      min       lq     mean   median       uq      max neval\n 5.670637 6.218719 6.745065 6.387936 7.019667 9.173005   100\nmicrobenchmark)\n')))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/PopGen.jl/img/speedplot.png",alt:"import plot"}))),Object(i.b)("p",null,"Comparing averages, PopGen.jl clocks in at ",Object(i.b)("inlineCode",{parentName:"p"},"910ms")," versus adegenet's ",Object(i.b)("inlineCode",{parentName:"p"},"6.745s")," , so ~7.4x faster."),Object(i.b)("h3",{id:"popdata-vs-genind-size"},Object(i.b)("inlineCode",{parentName:"h3"},"PopData")," vs ",Object(i.b)("inlineCode",{parentName:"h3"},"genind")," size"),Object(i.b)("p",null,'It was pretty tricky to come up with a sensible/efficient/convenient data structure for PopGen.jl, and while the two-DataFrames design might not seem like it took a lot of effort, we ultimately decided that the column-major style and available tools, combined with careful genotype Typing was a decent "middle-ground" of ease-of-use vs performance.'),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Anyway"),", it's important to understand how much space your data will take up in memory (your RAM) when you load it in, especially since data's only getting bigger! Keep in mind that ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks")," in PopGen.jl also provides lat/long data, which ",Object(i.b)("em",{parentName:"p"},"should")," inflate the size of the object somewhat compared to the ",Object(i.b)("inlineCode",{parentName:"p"},"genind"),", which we won't add any location data to."),Object(i.b)(o.a,{block:!0,defaultValue:"j",values:[{label:"Julia",value:"j"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> Base.summarysize(sharks)\n3527765\n#bytes\n"))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),"> object.size(gen)\n5331536 bytes\n")))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/PopGen.jl/img/objectplot.png",alt:"data structure plot"}))),Object(i.b)("p",null,"The original file is ",Object(i.b)("inlineCode",{parentName:"p"},"3.2mb")," (the horizontal line), and our ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," object takes up ~",Object(i.b)("inlineCode",{parentName:"p"},"3.5mb")," in memory (300kb larger than the source file) versus the ~",Object(i.b)("inlineCode",{parentName:"p"},"5.3mb")," of a ",Object(i.b)("inlineCode",{parentName:"p"},"genind"),", which is ~1.5x larger than the source file. That's quite a big difference!"),Object(i.b)("h3",{id:"summary-statistics"},"Summary statistics"),Object(i.b)("p",null,"The obvious hallmark of population genetics is heterozygosity values and F-statistics. Here we'll compare the basic summary statistics that can be produced using ",Object(i.b)("inlineCode",{parentName:"p"},"hierfstat")," and ",Object(i.b)("inlineCode",{parentName:"p"},"PopGenjl"),"."),Object(i.b)(o.a,{block:!0,defaultValue:"j",values:[{label:"Julia",value:"j"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'julia> @benchmark summary(sharks, by = "global")\nBenchmarkTools.Trial:\n  memory estimate:  88.42 MiB\n  allocs estimate:  1307128\n  --------------\n  minimum time:     151.963 ms (0.00% GC)\n  median time:      171.484 ms (7.60% GC)\n  mean time:        172.456 ms (6.08% GC)\n  maximum time:     186.606 ms (7.04% GC)\n  --------------\n  samples:          29\n  evals/sample:     1\n'))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),"> microbenchmark(basic.stats(gen))\nUnit: seconds\n             expr      min       lq     mean\n basic.stats(gen) 4.276996 4.425934 4.618796\n   median       uq      max neval\n 4.609901 4.706666 5.292831   100\n")))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/PopGen.jl/img/sumstatplot.png",alt:"summary statistics plot"}))),Object(i.b)("p",null,"Comparing averages, PopGen.jl clocks in at ~",Object(i.b)("inlineCode",{parentName:"p"},"171ms")," versus hierfstat's ",Object(i.b)("inlineCode",{parentName:"p"},"4.6s"),", which is ~",Object(i.b)("strong",{parentName:"p"},"27x")," faster on these data. However, when testing on a data that was 401 samples x 5331 loci (not shown), PopGen.jl performed 36.6x faster. This gap seems to increase the larger the data is, but we have not tested the upper limits of this."),Object(i.b)("h3",{id:"chi-squared-test-for-hwe"},"Chi-squared test for HWE"),Object(i.b)("p",null,"This is a classic population genetics test and a relatively simple one. The R benchmark will take a while again, so if you're following along, this would be a good time to reconnect with an old friend."),Object(i.b)(o.a,{block:!0,defaultValue:"j",values:[{label:"Julia",value:"j"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> @benchmark hwe_test(sharks)\nBenchmarkTools.Trial:\n  memory estimate:  46.22 MiB\n  allocs estimate:  1050525\n  --------------\n  minimum time:     145.476 ms (0.00% GC)\n  median time:      179.146 ms (4.35% GC)\n  mean time:        176.142 ms (3.56% GC)\n  maximum time:     204.813 ms (0.00% GC)\n  --------------\n  samples:          29\n  evals/sample:     1\n"))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),"> microbenchmark(hw.test(gen, B = 0))\nUnit: seconds\n                expr      min       lq     mean   median       uq      max neval\n hw.test(gen, B = 0) 5.100298 5.564807 6.265948 5.878842 6.917006 8.815179   100\n")))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/PopGen.jl/img/chisqplot.png",alt:"chi squared plot"}))),Object(i.b)("p",null,"Comparing averages, PopGen.jl clocks in at ~",Object(i.b)("inlineCode",{parentName:"p"},"176ms")," versus adegenet's ",Object(i.b)("inlineCode",{parentName:"p"},"6.3s"),", so ~",Object(i.b)("strong",{parentName:"p"},"35.8x")," faster on these data(!)"))}m.isMDXComponent=!0},204:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},b=function(e){var a=p(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=n,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return t?r.a.createElement(d,s(s({ref:a},c),{},{components:t})):r.a.createElement(d,s({ref:a},c))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},205:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},207:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});a.a=r},208:function(e,a,t){"use strict";var n=t(0),r=t(207);a.a=function(){return Object(n.useContext)(r.a)}},209:function(e,a,t){"use strict";t(24),t(20),t(19);var n=t(0),r=t.n(n),i=t(208),o=t(205),s=t(129),l=t.n(s),c=37,p=39;a.a=function(e){var a=e.block,t=e.children,s=e.defaultValue,b=e.values,m=e.groupId,u=Object(i.a)(),d=u.tabGroupChoices,h=u.setTabGroupChoices,j=Object(n.useState)(s),g=j[0],f=j[1];if(null!=m){var O=d[m];null!=O&&O!==g&&b.some((function(e){return e.value===O}))&&f(O)}var y=function(e){f(e),null!=m&&h(m,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a})},b.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===a,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===a}),key:a,ref:function(e){return v.push(e)},onKeyDown:function(e){return function(e,a,t){switch(t.keyCode){case p:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case c:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(v,e.target,e)},onFocus:function(){return y(a)},onClick:function(){return y(a)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===g}))[0]))}},210:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}}}]);