"use strict";(self.webpackChunkneuro_symbolic_ai_toolkit_site=self.webpackChunkneuro_symbolic_ai_toolkit_site||[]).push([[5277],{8383:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return i},default:function(){return s}});var n=r(3366),a=(r(7294),r(4983)),o=r(9985),l=["components"],i={},c={_frontmatter:i},u=o.Z;function s(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)(u,Object.assign({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"Description"),(0,a.kt)("p",null,"Implemention of the Sobolev Independence Criterion (SIC), an interpretable dependency measure that provides feature importance scores and hence can be used for nonlinear feature selection."),(0,a.kt)("h2",null,"Main Contributors"),(0,a.kt)("p",null,"Mroueh, Sercu, Rigotti, Padhi, dos Santos"))}s.isMDXComponent=!0},6156:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a=r(36),o=function(e){var t=e.date,r=new Date(t);return t?n.createElement(a.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(a.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null}},9985:function(e,t,r){r.d(t,{Z:function(){return C}});var n=r(7294),a=r(8650),o=r.n(a),l=r(5444),i=r(4983),c=r(5426),u=r(4311),s=r(808),m=r(8318),d=r(4275),f=r(9851),p=r(2881),b=r(6958),g=r(6156),v=r(2565);function y(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=function(e){return v.find((function(t){return t.key===e}))||!1},x=function(e){for(var t,r=e.frontmatter,a=r.url,o=[],i=y(r.tags.entries());!(t=i()).done;){var c=t.value,u=c[0],s=c[1];o.push(n.createElement(l.Link,{to:"/repos#"+s,key:u},n.createElement("button",{class:"bx--tag bx--tag--green"}," ",n.createElement("span",{class:"bx--tag__label",title:E(s).name},s)," ")))}return n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-1"},"Repository: "),n.createElement("div",{className:"bx--col-lg-4"},n.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},a))),n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-1 category-header"},"Categories:"),n.createElement("div",{className:"bx--col-lg-4"},n.createElement("div",{className:"RepoHeader-module--flex_sm--FX8Eh"},o))))},k=r(6258);function S(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w=function(e){return v.find((function(t){return t.key===e}))||!1},N=function(e,t){var r=function(e,t){var r=t.replace("/repos/","");return e.allMdx.edges.filter((function(e){return e.node.slug===r}))[0].node}(e,t),a=r.frontmatter,o="/repos/"+r.slug,i=n.createElement("div",null,n.createElement("div",{className:k.pb},n.createElement("h4",null,a.title),n.createElement("p",{className:k.pU},a.description)),n.createElement("p",{className:k.pt},function(e){for(var t,r=[],a=S(e);!(t=a()).done;){var o=t.value;r.push(n.createElement("button",{class:"bx--tag bx--tag--green"}," ",n.createElement("span",{class:"bx--tag__label",title:w(o).name},o)," "))}return r}(a.tags)));return n.createElement(l.Link,{to:o,className:k.Gg},i)},Z=function(e){return n.createElement(l.StaticQuery,{query:"3281138953",render:function(t){return N(t,e.to)}})},A=function(e){return n.createElement("div",{className:k.fU},e.children)},C=function(e){var t=e.pageContext,r=e.children,a=e.location,v=e.Title,y=t.frontmatter,h=void 0===y?{}:y,E=t.relativePagePath,k=t.titleType,S=h.tabs,_=h.title,w=h.theme,N=h.description,C=h.keywords,T=h.date,I=(0,b.Z)().interiorTheme,P={RepoLink:Z,RepoLinkList:A},j=(0,l.useStaticQuery)("2102389209").site.pathPrefix,L=j?a.pathname.replace(j,""):a.pathname,M=S?L.split("/").filter(Boolean).slice(-1)[0]||o()(S[0],{lower:!0}):"",D=w||I;return n.createElement(u.Z,{tabs:S,homepage:!1,theme:D,pageTitle:_,pageDescription:N,pageKeywords:C,titleType:k},n.createElement(s.Z,{title:v?n.createElement(v,null):_,label:"label",tabs:S,theme:D}),S&&n.createElement(f.Z,{title:_,slug:L,tabs:S,currentTab:M}),n.createElement(p.Z,{padded:!0},n.createElement(x,{frontmatter:h}),n.createElement(i.Zo,{components:P},r),n.createElement(m.Z,{relativePagePath:E}),n.createElement(g.Z,{date:T})),n.createElement(d.Z,{pageContext:t,location:a,slug:L,tabs:S,currentTab:M}),n.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-repos-sic-mdx-b5cc22fcdedd697f43e8.js.map