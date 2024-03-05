(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7139],{47017:function(e,t,i){"use strict";var n=i(64836);t.Z=void 0;var r=n(i(64938)),s=i(85893),a=(0,r.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");t.Z=a},62023:function(e,t,i){"use strict";i.d(t,{Z:function(){return Z}});var n=i(63366),r=i(87462),s=i(67294),a=i(63961),o=i(94780),d=i(90948),c=i(71657),l=i(1588),h=i(34867);function u(e){return(0,h.Z)("MuiCardActions",e)}(0,l.Z)("MuiCardActions",["root","spacing"]);var g=i(85893);let x=["disableSpacing","className"],m=e=>{let{classes:t,disableSpacing:i}=e;return(0,o.Z)({root:["root",!i&&"spacing"]},u,t)},p=(0,d.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver(e,t){let{ownerState:i}=e;return[t.root,!i.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,r.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),f=s.forwardRef(function(e,t){let i=(0,c.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:s=!1,className:o}=i,d=(0,n.Z)(i,x),l=(0,r.Z)({},i,{disableSpacing:s}),h=m(l);return(0,g.jsx)(p,(0,r.Z)({className:(0,a.Z)(h.root,o),ownerState:l,ref:t},d))});var Z=f},83965:function(e,t,i){"use strict";i.d(t,{Z:function(){return j}});var n=i(63366),r=i(87462),s=i(67294),a=i(63961),o=i(94780),d=i(71657),c=i(90948),l=i(1588),h=i(34867);function u(e){return(0,h.Z)("MuiCardMedia",e)}(0,l.Z)("MuiCardMedia",["root","media","img"]);var g=i(85893);let x=["children","className","component","image","src","style"],m=e=>{let{classes:t,isMediaComponent:i,isImageComponent:n}=e;return(0,o.Z)({root:["root",i&&"media",n&&"img"]},u,t)},p=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver(e,t){let{ownerState:i}=e,{isMediaComponent:n,isImageComponent:r}=i;return[t.root,n&&t.media,r&&t.img]}})(({ownerState:e})=>(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),f=["video","audio","picture","iframe","img"],Z=["picture","img"],v=s.forwardRef(function(e,t){let i=(0,d.Z)({props:e,name:"MuiCardMedia"}),{children:s,className:o,component:c="div",image:l,src:h,style:u}=i,v=(0,n.Z)(i,x),j=-1!==f.indexOf(c),b=!j&&l?(0,r.Z)({backgroundImage:`url("${l}")`},u):u,w=(0,r.Z)({},i,{component:c,isMediaComponent:j,isImageComponent:-1!==Z.indexOf(c)}),k=m(w);return(0,g.jsx)(p,(0,r.Z)({className:(0,a.Z)(k.root,o),as:c,role:!j&&l?"img":void 0,ref:t,style:b,ownerState:w,src:j?l||h:void 0},v,{children:s}))});var j=v},42735:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ship-list",function(){return i(17184)}])},17184:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return P}});var n=i(85893),r=i(9008),s=i.n(r),a=i(67346),o=i(86886),d=i(15861),c=i(11057),l=i(41664),h=i.n(l),u=i(47017),g=i(98396),x=function(){let e=(0,g.Z)(e=>e.breakpoints.down("sm")),t=(0,g.Z)(e=>e.breakpoints.between("sm","md")),i=(0,g.Z)(e=>e.breakpoints.up("lg")),r=e?12:t?14:i?18:16;return(0,n.jsxs)(o.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,n.jsx)(o.ZP,{item:!0,children:(0,n.jsx)(d.Z,{variant:"subtitle2",sx:{fontSize:r},children:"Ship List"})}),(0,n.jsx)(o.ZP,{item:!0,children:(0,n.jsx)(h(),{href:"/ship-list/add-ship",passHref:!0,children:(0,n.jsx)(c.Z,{variant:"contained",startIcon:(0,n.jsx)(u.Z,{sx:{fontSize:r}}),children:(0,n.jsx)(d.Z,{sx:{fontSize:r},children:"Add Ship"})})})})]})},m=i(69598),p=i(65582),f=i(1573),Z=i(67294),v=i(66242),j=i(83965),b=i(44267),w=i(62023);let k=e=>{let{shipInfo:t,entriesPerRow:i}=e,[r,s]=(0,Z.useState)([{cardWidth:"100%",imageHeight:"80%",textHeight:"10%",actionHeight:"10%",padding:"5%"},{cardWidth:"48%",imageHeight:"80%",textHeight:"10%",actionHeight:"10%",padding:"3%"},{cardWidth:"32%",imageHeight:"75%",textHeight:"12.5%",actionHeight:"12.5%",padding:"2%"},{cardWidth:"23%",imageHeight:"75%",textHeight:"12.5%",actionHeight:"12.5%",padding:"1%"}]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(v.Z,{sx:{width:r[i-1].cardWidth,height:"35vh",aspectRatio:"1/1",minHeight:{xs:300},maxHeight:{xs:300,sm:350},background:"#FFFFFF",padding:r[i-1].padding,boxSizing:"border-box"},children:[(0,n.jsx)(j.Z,{sx:{height:r[i-1].imageHeight},image:null==t?void 0:t.picture,title:t.vesselName}),(0,n.jsx)(b.Z,{sx:{height:r[i-1].textHeight},children:(0,n.jsx)(d.Z,{gutterBottom:!0,variant:"h5",component:"div",align:"left",color:"#000000",children:null==t?void 0:t.vesselName})}),(0,n.jsx)(w.Z,{sx:{height:r[i-1].actionHeight},children:(0,n.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-end"},children:(0,n.jsx)(h(),{href:"/dashboards/ship-details?id=".concat(t.id),passHref:!0,children:(0,n.jsx)(c.Z,{size:"small",width:"50%",variant:"contained",color:"primary",className:"text-3xl font-bold underline",children:"See Details"})})})})]})})};var H=i(87357),y=i(21737),S=i(92401),C=i(6154),M=i(33299),N=function(){let[e,t]=(0,Z.useState)([]),[i,r]=(0,Z.useState)(null),{data:s}=(0,M.useSession)(),a=async()=>{await C.Z.get("https://batera.synology.me:82/api/v2/ship",{headers:{Authorization:"Bearer ".concat(null==s?void 0:s.user.accessToken)}}).then(e=>t(e.data.data.results)).catch(e=>r(e.message))};(0,Z.useEffect)(()=>{C.Z.defaults.headers.common.Authorization="Bearer ".concat(null==s?void 0:s.user.accessToken),a()},[]);let o=(0,g.Z)(e=>e.breakpoints.down("sm")),d=(0,g.Z)(e=>e.breakpoints.between("sm","md")||e.breakpoints.equals("sm")||e.breakpoints.equals("lg")),c=(0,g.Z)(e=>e.breakpoints.up("lg")),l=o?1:d?2:c?4:3,h=t=>{let{index:i}=t;return(0,n.jsx)("div",{style:{display:"flex",width:"100%",flexDirection:"row",gap:"2%",marginBottom:"2%"},children:Array(l).fill().map((t,r)=>{let s=i+r;return s<e.length?(0,n.jsx)(k,{shipInfo:e[s],entriesPerRow:l},r):null})})};return(0,n.jsx)(H.Z,{width:"100%",height:"100%",children:i?(0,n.jsxs)(y.Z,{severity:"error",children:[(0,n.jsx)(S.Z,{children:"Error"}),i,(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"check it out!"})]}):e.map((e,t)=>{if(t%l==0)return(0,n.jsx)(h,{index:t},t)})})};function _(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{children:(0,n.jsx)("title",{children:"Ship List"})}),(0,n.jsx)(m.Z,{children:(0,n.jsx)(x,{})}),(0,n.jsx)(p.Z,{width:"100%",height:"100%",children:(0,n.jsx)(o.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",width:"100%",height:"100%",children:(0,n.jsx)(o.ZP,{item:!0,xs:12,width:"100%",height:"100%",children:(0,n.jsx)(N,{width:"100%",height:"100%"})})})}),(0,n.jsx)(f.Z,{})]})}_.getLayout=e=>(0,n.jsx)(a.Z,{children:e});var P=_}},function(e){e.O(0,[2456,896,5951,4738,1133,135,456,1529,8977,6236,1201,8955,9774,2888,179],function(){return e(e.s=42735)}),_N_E=e.O()}]);