(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),o=(n(0),n(204)),r=n(209),l=n(210),c={id:"exclusion",title:"Data exclusion",sidebar_label:"Data Exclusion"},s={id:"tutorials/exclusion",isDocsHomePage:!1,title:"Data exclusion",description:"This section covers situations where one may want to selectively remove information from PopData. Using standard Julia conventions, exclude() will create a copy of your",source:"@site/docs/tutorials/exclusion.md",permalink:"/PopGen.jl/docs/tutorials/exclusion",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/tutorials/exclusion.md",lastUpdatedAt:1593487264,sidebar_label:"Data Exclusion",sidebar:"docs",previous:{title:"Accessing elements",permalink:"/PopGen.jl/docs/tutorials/accessing"},next:{title:"Location and population data",permalink:"/PopGen.jl/docs/tutorials/populations"}},p=[{value:"Exclude samples, loci, or entire populations",id:"exclude-samples-loci-or-entire-populations",children:[{value:"Keyword Arguments",id:"keyword-arguments",children:[]}]}],u={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section covers situations where one may want to selectively remove information from ",Object(o.b)("inlineCode",{parentName:"p"},"PopData"),". Using standard Julia conventions, ",Object(o.b)("inlineCode",{parentName:"p"},"exclude()")," will create a copy of your\n",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," excluding the specific criteria, whereas ",Object(o.b)("inlineCode",{parentName:"p"},"exclude!()")," will edit the input\n",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," in-place."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"alias functions")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The exclusion commands are interchangeable with ",Object(o.b)("inlineCode",{parentName:"p"},"omit")," and ",Object(o.b)("inlineCode",{parentName:"p"},"remove"),", both with and\nwithout the bang (",Object(o.b)("inlineCode",{parentName:"p"},"!"),"). This was done so you can use the function comfortably without\nneeding to remember the specific name to perform it. Maybe you just prefer the word ",Object(o.b)("inlineCode",{parentName:"p"},"omit")," to ",Object(o.b)("inlineCode",{parentName:"p"},"remove"),". We're not here to judge."),Object(o.b)("p",{parentName:"div"},"The examples below use any combination of ",Object(o.b)("inlineCode",{parentName:"p"},"omit"),", ",Object(o.b)("inlineCode",{parentName:"p"},"remove"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"exclude"),", and are\nsimilarly using varied keyword synonyms to demonstrate the flexibility of this\nfunction's syntax, along with demonstrating that it doesn't matter whether the\nkeyword is singular or plural (like ",Object(o.b)("inlineCode",{parentName:"p"},"locus")," vs ",Object(o.b)("inlineCode",{parentName:"p"},"loci"),")."))),Object(o.b)("h2",{id:"exclude-samples-loci-or-entire-populations"},"Exclude samples, loci, or entire populations"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"exclude(data::PopObj, kwargs...)\nomit(data::PopObj, kwargs...)\nremove(data::PopObj, kwargs...)\n")),Object(o.b)("p",null,"Returns a new ",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," object without the sample or samples provided. Input can be a\nsingle sample, or an array of samples. This command will inform you if your criteria\nwere not found in the ",Object(o.b)("inlineCode",{parentName:"p"},"PopData"),"."),Object(o.b)("h3",{id:"keyword-arguments"},"Keyword Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"locus"),": A ",Object(o.b)("inlineCode",{parentName:"li"},"String")," or ",Object(o.b)("inlineCode",{parentName:"li"},"Vector{String}")," of loci you want to remove from the ",Object(o.b)("inlineCode",{parentName:"li"},"PopData"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The keyword ",Object(o.b)("inlineCode",{parentName:"li"},"loci")," also works."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"population"),": A ",Object(o.b)("inlineCode",{parentName:"li"},"String")," or ",Object(o.b)("inlineCode",{parentName:"li"},"Vector{String}")," of populations you want to remove from the ",Object(o.b)("inlineCode",{parentName:"li"},"PopData"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The keyword ",Object(o.b)("inlineCode",{parentName:"li"},"populations")," also works."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name"),": A ",Object(o.b)("inlineCode",{parentName:"li"},"String")," or ",Object(o.b)("inlineCode",{parentName:"li"},"Vector{String}")," of samples you want to remove from the ",Object(o.b)("inlineCode",{parentName:"li"},"PopData"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The keywords ",Object(o.b)("inlineCode",{parentName:"li"},"names"),", ",Object(o.b)("inlineCode",{parentName:"li"},"sample"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"samples")," also work.")))),Object(o.b)(r.a,{block:!0,defaultValue:"s",values:[{label:"samples",value:"s"},{label:"loci",value:"m"},{label:"populations",value:"p"},{label:"combination",value:"c"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"s",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'julia> fewer_sharks = exclude(sharks, sample = "cc_001")\nPopData Object\n  Marker: SNP\n  Ploidy: 2\n  Samples: 211\n  Loci: 2213\n  Populations: 7\n  Longitude: present with 0 missing\n  Latitude: present with 0 missing\n\n# multiple samples\njulia> lots_fewer_sharks = remove(sharks, name = ["cc_001", "cc_002", "cc_003"])\nPopData Object\n  Marker: SNP\n  Ploidy: 2\n  Samples: 209\n  Loci: 2213\n  Populations: 7\n  Longitude: present with 0 missing\n  Latitude: present with 0 missing\n'))),Object(o.b)(l.a,{value:"m",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'julia> fewer_shark_loci = exclude(sharks, loci = "contig_475")\nPopData Object\n  Marker: SNP\n  Ploidy: 2\n  Samples: 212\n  Loci: 2212\n  Populations: 7\n  Longitude: present with 0 missing\n  Latitude: present with 0 missing\n\n# multiple loci  \njulia> lots_fewer_loci = remove(sharks, locus = ["contig_475", "contig_2784", "contig_8065"])\nPopData Object\n  Marker: SNP\n  Ploidy: 2\n  Samples: 212\n  Loci: 2210\n  Populations: 7\n  Longitude: present with 0 missing\n  Latitude: present with 0 missing\n'))),Object(o.b)(l.a,{value:"p",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'julia> fewer_shark_pops = exclude(sharks, population = "Georgia")\nPopData Object\n  Markers: SNP\n  Ploidy: 2\n  Samples: 182\n  Loci: 2213\n  Populations: 6\n  Longitude: present with 0 missing\n  Latitude: present with 0 missing\n\n# multiple populations\njulia> lots_fewer_pops = remove(sharks, population = ["Florida Keys", "Mideast Gulf"])\nPopData Object\n  Markers: SNP\n  Ploidy: 2\n  Samples: 119\n  Loci: 2213\n  Populations: 5\n  Longitude: present with 0 missing\n  Latitude: present with 0 missing\n'))),Object(o.b)(l.a,{value:"c",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'julia> tiny_shark = exclude(sharks, loci = "contig_475", name = ["cc_001", "neg_021", "mango_111"], population = ["Cape Canaveral", "kiwi"])\nNotices:\n  sample "mango_111" not found\n  population "kiwi" not found\n\nPopData Object\n  Markers: SNP\n  Ploidy: 2\n  Samples: 190\n  Loci: 2212\n  Populations: 6\n  Longitude: present with 0 missing\n  Latitude: present with 0 missing\n')))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(o.b)("strong",{parentName:"h5"},"__")," not found!")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If removing a single thing and it is not found in the PopData, an error will be returned. However, if attempting removing multiple things, you will receive a notice above the PopData output indicating which things were not found, while still removing the ones that were present."))),Object(o.b)("p",null,"The in-place variant ",Object(o.b)("inlineCode",{parentName:"p"},"exclude!()")," follows all the same syntax as ",Object(o.b)("inlineCode",{parentName:"p"},"exclude()"),", therefore all examples above would be identical for ",Object(o.b)("inlineCode",{parentName:"p"},"exclude!()"),"."))}b.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(r,".").concat(m)]||u[m]||b[m]||o;return n?i.a.createElement(d,l(l({ref:t},s),{},{components:n})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},205:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},207:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=i},208:function(e,t,n){"use strict";var a=n(0),i=n(207);t.a=function(){return Object(a.useContext)(i.a)}},209:function(e,t,n){"use strict";n(24),n(20),n(19);var a=n(0),i=n.n(a),o=n(208),r=n(205),l=n(129),c=n.n(l),s=37,p=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,u=e.values,b=e.groupId,m=Object(o.a)(),d=m.tabGroupChoices,j=m.setTabGroupChoices,O=Object(a.useState)(l),f=O[0],h=O[1];if(null!=b){var g=d[b];null!=g&&g!==f&&u.some((function(e){return e.value===g}))&&h(g)}var v=function(e){h(e),null!=b&&j(b,e)},w=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},210:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);