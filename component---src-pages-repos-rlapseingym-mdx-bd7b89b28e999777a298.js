"use strict";(self.webpackChunkneuro_symbolic_ai_toolkit_site=self.webpackChunkneuro_symbolic_ai_toolkit_site||[]).push([[5289],{7721:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return s}});var r=n(3366),a=(n(7294),n(4983)),o=n(9985),l=["components"],i={},c={_frontmatter:i},u=o.Z;function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)(u,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"Description"),(0,a.kt)("p",null,"This repo contain the code for an orchestrator that decide which RL algorithm to use depending on the environment {Bandit, contextual Bandit and Reinforcement learning}"),(0,a.kt)("h2",null,"Main Contributors"),(0,a.kt)("p",null,"Djallel Bouneffouf"))}s.isMDXComponent=!0},6156:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(36),o=function(e){var t=e.date,n=new Date(t);return t?r.createElement(a.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(a.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null}},9985:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(7294),a=n(8650),o=n.n(a),l=n(5444),i=n(4983),c=n(5426),u=n(4311),s=n(808),m=n(8318),d=n(4275),f=n(9851),p=n(2881),b=n(6958),g=n(6156),h=n(2565);function v(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=function(e){return h.find((function(t){return t.key===e}))||!1},x=function(e){for(var t,n=e.frontmatter,a=n.url,o=[],i=v(n.tags.entries());!(t=i()).done;){var c=t.value,u=c[0],s=c[1];o.push(r.createElement(l.Link,{to:"/repos#"+s,key:u},r.createElement("button",{class:"bx--tag bx--tag--green"}," ",r.createElement("span",{class:"bx--tag__label",title:E(s).name},s)," ")))}return r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-1"},"Repository: "),r.createElement("div",{className:"bx--col-lg-4"},r.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},a))),r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-1 category-header"},"Categories:"),r.createElement("div",{className:"bx--col-lg-4"},r.createElement("div",{className:"RepoHeader-module--flex_sm--FX8Eh"},o))))},k=n(6258);function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=function(e){return h.find((function(t){return t.key===e}))||!1},Z=function(e,t){var n=function(e,t){var n=t.replace("/repos/","");return e.allMdx.edges.filter((function(e){return e.node.slug===n}))[0].node}(e,t),a=n.frontmatter,o="/repos/"+n.slug,i=r.createElement("div",null,r.createElement("div",{className:k.pb},r.createElement("h4",null,a.title),r.createElement("p",{className:k.pU},a.description)),r.createElement("p",{className:k.pt},function(e){for(var t,n=[],a=w(e);!(t=a()).done;){var o=t.value;n.push(r.createElement("button",{class:"bx--tag bx--tag--green"}," ",r.createElement("span",{class:"bx--tag__label",title:N(o).name},o)," "))}return n}(a.tags)));return r.createElement(l.Link,{to:o,className:k.Gg},i)},S=function(e){return r.createElement(l.StaticQuery,{query:"3281138953",render:function(t){return Z(t,e.to)}})},A=function(e){return r.createElement("div",{className:k.fU},e.children)},T=function(e){var t=e.pageContext,n=e.children,a=e.location,h=e.Title,v=t.frontmatter,y=void 0===v?{}:v,E=t.relativePagePath,k=t.titleType,w=y.tabs,_=y.title,N=y.theme,Z=y.description,T=y.keywords,C=y.date,j=(0,b.Z)().interiorTheme,L={RepoLink:S,RepoLinkList:A},D=(0,l.useStaticQuery)("2102389209").site.pathPrefix,P=D?a.pathname.replace(D,""):a.pathname,I=w?P.split("/").filter(Boolean).slice(-1)[0]||o()(w[0],{lower:!0}):"",M=N||j;return r.createElement(u.Z,{tabs:w,homepage:!1,theme:M,pageTitle:_,pageDescription:Z,pageKeywords:T,titleType:k},r.createElement(s.Z,{title:h?r.createElement(h,null):_,label:"label",tabs:w,theme:M}),w&&r.createElement(f.Z,{title:_,slug:P,tabs:w,currentTab:I}),r.createElement(p.Z,{padded:!0},r.createElement(x,{frontmatter:y}),r.createElement(i.Zo,{components:L},n),r.createElement(m.Z,{relativePagePath:E}),r.createElement(g.Z,{date:C})),r.createElement(d.Z,{pageContext:t,location:a,slug:P,tabs:w,currentTab:I}),r.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-repos-rlapseingym-mdx-bd7b89b28e999777a298.js.map