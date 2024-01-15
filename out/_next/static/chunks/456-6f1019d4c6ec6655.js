"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[456],{50456:function(e,n,t){t.d(n,{Z:function(){return M}});var r=t(87462),i=t(63366),l=t(67294),o=t(20539),s=t(2734),u=t(58974),a=t(98396),d=t(85893);let p=["initialWidth","width"],m=["xs","sm","md","lg","xl"],f=(e,n,t=!0)=>t?m.indexOf(e)<=m.indexOf(n):m.indexOf(e)<m.indexOf(n),c=(e,n,t=!1)=>t?m.indexOf(n)<=m.indexOf(e):m.indexOf(n)<m.indexOf(e);var w=((e={})=>n=>{let{withTheme:t=!1,noSSR:m=!1,initialWidth:f}=e;return function(e){let c=(0,s.Z)(),w=e.theme||c,x=(0,o.Z)({theme:w,name:"MuiWithWidth",props:e}),{initialWidth:h,width:Z}=x,y=(0,i.Z)(x,p),[k,U]=l.useState(!1);(0,u.Z)(()=>{U(!0)},[]);let D=w.breakpoints.keys.slice().reverse(),b=D.reduce((e,n)=>{let t=(0,a.Z)(w.breakpoints.up(n));return!e&&t?n:e},null),v=(0,r.Z)({width:Z||(k||m?b:void 0)||h||f},t?{theme:w}:{},y);return void 0===v.width?null:(0,d.jsx)(n,(0,r.Z)({},v))}})()(function(e){let{children:n,only:t,width:r}=e,i=(0,s.Z)(),o=!0;if(t){if(Array.isArray(t))for(let u=0;u<t.length;u+=1){let a=t[u];if(r===a){o=!1;break}}else t&&r===t&&(o=!1)}if(o)for(let p=0;p<i.breakpoints.keys.length;p+=1){let m=i.breakpoints.keys[p],w=e[`${m}Up`],x=e[`${m}Down`];if(w&&f(m,r)||x&&c(m,r)){o=!1;break}}return o?(0,d.jsx)(l.Fragment,{children:n}):null}),x=t(63961),h=t(94780),Z=t(98216),y=t(90948),k=t(1588),U=t(34867);function D(e){return(0,U.Z)("PrivateHiddenCss",e)}(0,k.Z)("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);let b=["children","className","only"],v=e=>{let{classes:n,breakpoints:t}=e,r={root:["root",...t.map(({breakpoint:e,dir:n})=>"only"===n?`${n}${(0,Z.Z)(e)}`:`${e}${(0,Z.Z)(n)}`)]};return(0,h.Z)(r,D,n)},g=(0,y.ZP)("div",{name:"PrivateHiddenCss",slot:"Root"})(({theme:e,ownerState:n})=>{let t={display:"none"};return(0,r.Z)({},n.breakpoints.map(({breakpoint:n,dir:r})=>"only"===r?{[e.breakpoints.only(n)]:t}:"up"===r?{[e.breakpoints.up(n)]:t}:{[e.breakpoints.down(n)]:t}).reduce((e,n)=>(Object.keys(n).forEach(t=>{e[t]=n[t]}),e),{}))});var O=function(e){let{children:n,className:t,only:l}=e,o=(0,i.Z)(e,b),u=(0,s.Z)(),a=[];for(let p=0;p<u.breakpoints.keys.length;p+=1){let m=u.breakpoints.keys[p],f=o[`${m}Up`],c=o[`${m}Down`];f&&a.push({breakpoint:m,dir:"up"}),c&&a.push({breakpoint:m,dir:"down"})}if(l){let w=Array.isArray(l)?l:[l];w.forEach(e=>{a.push({breakpoint:e,dir:"only"})})}let h=(0,r.Z)({},e,{breakpoints:a}),Z=v(h);return(0,d.jsx)(g,{className:(0,x.Z)(Z.root,t),ownerState:h,children:n})};let j=["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"];var M=function(e){let{implementation:n="js",lgDown:t=!1,lgUp:l=!1,mdDown:o=!1,mdUp:s=!1,smDown:u=!1,smUp:a=!1,xlDown:p=!1,xlUp:m=!1,xsDown:f=!1,xsUp:c=!1}=e,x=(0,i.Z)(e,j);return"js"===n?(0,d.jsx)(w,(0,r.Z)({lgDown:t,lgUp:l,mdDown:o,mdUp:s,smDown:u,smUp:a,xlDown:p,xlUp:m,xsDown:f,xsUp:c},x)):(0,d.jsx)(O,(0,r.Z)({lgDown:t,lgUp:l,mdDown:o,mdUp:s,smDown:u,smUp:a,xlDown:p,xlUp:m,xsDown:f,xsUp:c},x))}},98396:function(e,n,t){t.d(n,{Z:function(){return p}});var r,i=t(67294),l=t(34168),o=t(20539),s=t(58974);function u(e,n,t,r,l){let[o,u]=i.useState(()=>l&&t?t(e).matches:r?r(e).matches:n);return(0,s.Z)(()=>{let n=!0;if(!t)return;let r=t(e),i=()=>{n&&u(r.matches)};return i(),r.addListener(i),()=>{n=!1,r.removeListener(i)}},[e,t]),o}let a=(r||(r=t.t(i,2))).useSyncExternalStore;function d(e,n,t,r,l){let o=i.useCallback(()=>n,[n]),s=i.useMemo(()=>{if(l&&t)return()=>t(e).matches;if(null!==r){let{matches:n}=r(e);return()=>n}return o},[o,e,r,l,t]),[u,d]=i.useMemo(()=>{if(null===t)return[o,()=>()=>{}];let n=t(e);return[()=>n.matches,e=>(n.addListener(e),()=>{n.removeListener(e)})]},[o,t,e]),p=a(d,u,s);return p}function p(e,n={}){let t=(0,l.Z)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:i=!1,matchMedia:s=r?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:m=!1}=(0,o.Z)({name:"MuiUseMediaQuery",props:n,theme:t}),f="function"==typeof e?e(t):e;f=f.replace(/^@media( ?)/m,"");let c=(void 0!==a?d:u)(f,i,s,p,m);return c}}}]);