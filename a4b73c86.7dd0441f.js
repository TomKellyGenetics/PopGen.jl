(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),o=a(9),i=(a(0),a(204)),r={id:"vcf",title:"Variant Call Format",sidebar_label:"Variant Call Format"},l={id:"io/vcf",isDocsHomePage:!1,title:"Variant Call Format",description:"Import a BCF/VCF file as PopData",source:"@site/docs/io/variantcall.md",permalink:"/PopGen.jl/docs/io/vcf",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/io/variantcall.md",lastUpdatedAt:1591291083,sidebar_label:"Variant Call Format",sidebar:"docs",previous:{title:"Genepop format",permalink:"/PopGen.jl/docs/io/genepop"},next:{title:"Start here",permalink:"/PopGen.jl/docs/tutorials/manipulate"}},c=[{value:"Import a BCF/VCF file as <code>PopData</code>",id:"import-a-bcfvcf-file-as-popdata",children:[{value:"Example",id:"example",children:[]},{value:"Format",id:"format",children:[]},{value:"What BCF/VCF files contain and lack",id:"what-bcfvcf-files-contain-and-lack",children:[]}]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],p={rightToc:c};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"import-a-bcfvcf-file-as-popdata"},"Import a BCF/VCF file as ",Object(i.b)("inlineCode",{parentName:"h2"},"PopData")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"vcf(infile::String)\nbcf(infile::String)\n")),Object(i.b)("p",null,"PopGen.jl provides the commands ",Object(i.b)("inlineCode",{parentName:"p"},"vcf")," and ",Object(i.b)("inlineCode",{parentName:"p"},"bcf")," to import a variant call format files into ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),", which requires only the name of the file and nothing else. While not strictly necessary, if you have polyploid or mixed-ploidy samples, this import method may be most efficient."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'potato = vcf("/home/data/russet_potatoes.vcf")\ncabbage = bcf("/home/data/nappa_cabbage.bcf")\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Windows users")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure to change your backslashes ",Object(i.b)("inlineCode",{parentName:"p"},"\\")," to forward slashes ",Object(i.b)("inlineCode",{parentName:"p"},"/")," "))),Object(i.b)("h3",{id:"format"},"Format"),Object(i.b)("p",null,"Variant Call Format files follow a format standard, and while there is some wiggle-room for optional values, PopGen.jl only requires the core/mandatory components of a BCF/VCF, meaning problems should hopefully not arise regardless of which variant caller you are using (although we use ",Object(i.b)("inlineCode",{parentName:"p"},"Freebayes")," ourselves). Please open an issue if they do, or reach out to us on the community Slack."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Filter files beforehand")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Keep in mind, BCF/VCF files need to be filtered ",Object(i.b)("strong",{parentName:"p"},"before")," importing them into PopGen.jl. There is no and will be no VCF-filtering functionality to this package, as it is outside of the purpose of PopGen.jl. Refer to ",Object(i.b)("inlineCode",{parentName:"p"},"vcftools"),", ",Object(i.b)("inlineCode",{parentName:"p"},"bcftools"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"vcflib")," to filter your sequence data. "))),Object(i.b)("h3",{id:"what-bcfvcf-files-contain-and-lack"},"What BCF/VCF files contain and lack"),Object(i.b)("p",null,"Due to the nature of the file format, importing variant call files ",Object(i.b)("strong",{parentName:"p"},"will")," provide:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"sample names"),Object(i.b)("li",{parentName:"ul"},"ploidy of each sample"),Object(i.b)("li",{parentName:"ul"},"locus names"),Object(i.b)("li",{parentName:"ul"},"genotypes")),Object(i.b)("p",null,"but they ",Object(i.b)("strong",{parentName:"p"},"will not")," provide:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"population information"),Object(i.b)("li",{parentName:"ul"},"geographical coordinate information")),Object(i.b)("p",null,"This means you will need to add that information separately afterwards. Location data (which is optional!) can be added to the ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," with the ",Object(i.b)("inlineCode",{parentName:"p"},"locations!")," command. Population names (mandatory!) can be added using ",Object(i.b)("inlineCode",{parentName:"p"},"populations!()")),Object(i.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(i.b)("p",null,"The majority of the BCF/VCF reader is thanks to the tremendous efforts of Ben J. Ward and the BioJulia contributors involved in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/BioJulia/GeneticVariation.jl"}),"GeneticVariation.jl"),", which we use to parse your files into ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," format. If you love the file importer, then give those folks your thanks. If something is wrong and/or you hate the importer, blame us first (and please ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pdimens/PopGen.jl/issues"}),"open up an issue")," \ud83d\ude05). "))}s.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,u=b["".concat(r,".").concat(d)]||b[d]||m[d]||i;return a?o.a.createElement(u,l(l({ref:t},p),{},{components:a})):o.a.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);