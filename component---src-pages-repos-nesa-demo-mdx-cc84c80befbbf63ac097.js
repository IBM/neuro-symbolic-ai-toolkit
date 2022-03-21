"use strict";(self.webpackChunkneuro_symbolic_ai_toolkit_site=self.webpackChunkneuro_symbolic_ai_toolkit_site||[]).push([[5483],{1418:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return i},default:function(){return s}});var n=r(3366),a=(r(7294),r(4983)),l=r(9985),o=["components"],i={},c={_frontmatter:i},u=l.Z;function s(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)(u,Object.assign({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"Description"),(0,a.kt)("p",null,"This is the HCI component of NeSA. It allows the user to visualize the logical facts, learned policy, accuracy and other metrics. In the future, this will also allow the user to edit the knowledge and the learned policy. It also supports a general purpose visualization and editing tool for any LNN based network."),(0,a.kt)("h2",null,"Main Contributors"),(0,a.kt)("p",null,"Daiki Kimura, Steve Carrow, Stefan Zecevic"))}s.isMDXComponent=!0},6156:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(36),l=function(e){var t=e.date,r=new Date(t);return t?n.createElement(a.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(a.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null}},9985:function(e,t,r){r.d(t,{Z:function(){return C}});var n=r(7294),a=r(8650),l=r.n(a),o=r(5444),i=r(4983),c=r(5426),u=r(4311),s=r(808),m=r(8318),d=r(4275),f=r(9851),p=r(2881),b=r(6958),g=r(6156),y=r(2565);function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=function(e){return y.find((function(t){return t.key===e}))||!1},k=function(e){for(var t,r=e.frontmatter,a=r.url,l=[],i=v(r.tags.entries());!(t=i()).done;){var c=t.value,u=c[0],s=c[1];l.push(n.createElement(o.Link,{to:"/repos#"+s,key:u},n.createElement("button",{class:"bx--tag bx--tag--green"}," ",n.createElement("span",{class:"bx--tag__label",title:E(s).name},s)," ")))}return n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-1"},"Repository: "),n.createElement("div",{className:"bx--col-lg-4"},n.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},a))),n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-1 category-header"},"Categories:"),n.createElement("div",{className:"bx--col-lg-4"},n.createElement("div",{className:"RepoHeader-module--flex_sm--FX8Eh"},l))))},x=r(6258);function w(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S=function(e){return y.find((function(t){return t.key===e}))||!1},_=function(e,t){var r=function(e,t){var r=t.replace("/repos/","");return e.allMdx.edges.filter((function(e){return e.node.slug===r}))[0].node}(e,t),a=r.frontmatter,l="/repos/"+r.slug,i=n.createElement("div",null,n.createElement("div",{className:x.pb},n.createElement("h4",null,a.title),n.createElement("p",{className:x.pU},a.description)),n.createElement("p",{className:x.pt},function(e){for(var t,r=[],a=w(e);!(t=a()).done;){var l=t.value;r.push(n.createElement("button",{class:"bx--tag bx--tag--green"}," ",n.createElement("span",{class:"bx--tag__label",title:S(l).name},l)," "))}return r}(a.tags)));return n.createElement(o.Link,{to:l,className:x.Gg},i)},Z=function(e){return n.createElement(o.StaticQuery,{query:"3281138953",render:function(t){return _(t,e.to)}})},A=function(e){return n.createElement("div",{className:x.fU},e.children)},C=function(e){var t=e.pageContext,r=e.children,a=e.location,y=e.Title,v=t.frontmatter,h=void 0===v?{}:v,E=t.relativePagePath,x=t.titleType,w=h.tabs,N=h.title,S=h.theme,_=h.description,C=h.keywords,T=h.date,I=(0,b.Z)().interiorTheme,L={RepoLink:Z,RepoLinkList:A},j=(0,o.useStaticQuery)("2102389209").site.pathPrefix,D=j?a.pathname.replace(j,""):a.pathname,P=w?D.split("/").filter(Boolean).slice(-1)[0]||l()(w[0],{lower:!0}):"",M=S||I;return n.createElement(u.Z,{tabs:w,homepage:!1,theme:M,pageTitle:N,pageDescription:_,pageKeywords:C,titleType:x},n.createElement(s.Z,{title:y?n.createElement(y,null):N,label:"label",tabs:w,theme:M}),w&&n.createElement(f.Z,{title:N,slug:D,tabs:w,currentTab:P}),n.createElement(p.Z,{padded:!0},n.createElement(k,{frontmatter:h}),n.createElement(i.Zo,{components:L},r),n.createElement(m.Z,{relativePagePath:E}),n.createElement(g.Z,{date:T})),n.createElement(d.Z,{pageContext:t,location:a,slug:D,tabs:w,currentTab:P}),n.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-repos-nesa-demo-mdx-cc84c80befbbf63ac097.js.map