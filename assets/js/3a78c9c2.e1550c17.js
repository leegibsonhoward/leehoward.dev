"use strict";(self.webpackChunkleehoward_dev=self.webpackChunkleehoward_dev||[]).push([[660],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const i={id:"nvmwindows",title:"NVM for Windows",sidebar_label:"NVM for Windows"},l=void 0,a={unversionedId:"software-dev/nodejs/nvmwindows",id:"software-dev/nodejs/nvmwindows",title:"NVM for Windows",description:"tl;dr Install node on Windows without getting Access Denied errors.",source:"@site/docs/software-dev/nodejs/nvmwindows.md",sourceDirName:"software-dev/nodejs",slug:"/software-dev/nodejs/nvmwindows",permalink:"/docs/software-dev/nodejs/nvmwindows",draft:!1,tags:[],version:"current",frontMatter:{id:"nvmwindows",title:"NVM for Windows",sidebar_label:"NVM for Windows"},sidebar:"docs",previous:{title:"Escape Sequences",permalink:"/docs/software-dev/c/escape"},next:{title:"Style Guide",permalink:"/docs/software-dev/docusaurus/style-guide"}},s={},d=[{value:"Install NVM for Windows",id:"install-nvm-for-windows",level:2},{value:"Install a Node Version",id:"install-a-node-version",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"tl;dr Install node on Windows without getting Access Denied errors."),(0,o.kt)("h2",{id:"install-nvm-for-windows"},"Install NVM for Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"run ",(0,o.kt)("inlineCode",{parentName:"li"},"nvm-setup.exe")," as Admin to install nvm-windows")),(0,o.kt)("p",null,"I did not change the default install location."),(0,o.kt)("h2",{id:"install-a-node-version"},"Install a Node Version"),(0,o.kt)("p",null,"After installation you need to run cmd as Admin to install a node version\nand then use it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"run ",(0,o.kt)("inlineCode",{parentName:"li"},"cmd.exe")," as Admin",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nvm install X.X.X")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nvm use X.X.X"))))),(0,o.kt)("p",null,"Now node should work in cmd.exe, Powershell, and Git Bash."))}u.isMDXComponent=!0}}]);