"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8955],{1573:function(n,e,t){var r=t(85893),o=t(90948),a=t(65582),i=t(87357);let s=(0,o.ZP)(a.Z)(n=>{let{theme:e}=n;return"\n        margin-top: ".concat(e.spacing(4),";\n")});e.Z=function(){return(0,r.jsx)(s,{className:"footer-wrapper",children:(0,r.jsx)(i.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between"})})}},52437:function(n,e,t){var r=t(85893),o=t(67294),a=t(45697),i=t.n(a),s=t(86010),c=t(11163),l=t(41664),d=t.n(l),p=t(23795),h=t(90948);let x=(0,h.ZP)("a")({}),u=o.forwardRef(function(n,e){let{to:t,linkAs:o,replace:a,scroll:i,shallow:s,prefetch:c,locale:l,...p}=n;return(0,r.jsx)(d(),{href:t,prefetch:c,as:o,replace:a,scroll:i,shallow:s,passHref:!0,locale:l,children:(0,r.jsx)(x,{ref:e,...p})})});u.propTypes={href:i().any,linkAs:i().oneOfType([i().object,i().string]),locale:i().string,passHref:i().bool,prefetch:i().bool,replace:i().bool,scroll:i().bool,shallow:i().bool,to:i().oneOfType([i().object,i().string]).isRequired};let g=o.forwardRef(function(n,e){let{activeClassName:t="active",as:o,className:a,href:i,linkAs:l,locale:d,noLinkStyle:h,prefetch:g,replace:m,role:j,scroll:f,shallow:b,...Z}=n,y=(0,c.useRouter)(),k="string"==typeof i?i:null==i?void 0:i.pathname,v=(0,s.Z)(a,{[t]:y.pathname===k&&t}),w="string"==typeof i&&(0===i.indexOf("http")||0===i.indexOf("mailto:"));if(w)return h?(0,r.jsx)(x,{className:v,href:i,ref:e,...Z}):(0,r.jsx)(p.Z,{className:v,href:i,ref:e,...Z});let P={to:i,linkAs:l||o,replace:m,scroll:f,shallow:b,prefetch:g,locale:d};return h?(0,r.jsx)(u,{className:v,ref:e,...P,...Z}):(0,r.jsx)(p.Z,{component:u,className:v,ref:e,...P,...Z})});g.propTypes={activeClassName:i().string,as:i().oneOfType([i().object,i().string]),className:i().string,href:i().any,linkAs:i().oneOfType([i().object,i().string]),locale:i().string,noLinkStyle:i().bool,prefetch:i().bool,replace:i().bool,role:i().string,scroll:i().bool,shallow:i().bool},e.C=g},75134:function(n,e,t){var r=t(85893),o=t(90948),a=t(87357),i=t(82302),s=t(48999),c=t(2734),l=t(21239),d=t(52437);let p=(0,o.ZP)(d.C)(n=>{let{theme:e}=n;return"\n        color: ".concat(e.palette.text.primary,";\n        display: flex;\n        text-decoration: none;\n        width: 53px;\n        margin: 0 auto;\n        font-weight: ").concat(e.typography.fontWeightBold,";\n")}),h=(0,o.ZP)(a.Z)(()=>"\n        width: 52px;\n        height: 38px;\n"),x=(0,o.ZP)(a.Z)(n=>{let{theme:e}=n;return"\n        background: ".concat(e.general.reactFrameworkColor,";\n        width: 18px;\n        height: 18px;\n        border-radius: ").concat(e.general.borderRadiusSm,';\n        position: relative;\n        transform: rotate(45deg);\n        top: 3px;\n        left: 17px;\n\n        &:after, \n        &:before {\n            content: "";\n            display: block;\n            width: 18px;\n            height: 18px;\n            position: absolute;\n            top: -1px;\n            right: -20px;\n            transform: rotate(0deg);\n            border-radius: ').concat(e.general.borderRadiusSm,";\n        }\n\n        &:before {\n            background: ").concat(e.palette.primary.main,";\n            right: auto;\n            left: 0;\n            top: 20px;\n        }\n\n        &:after {\n            background: ").concat(e.palette.secondary.main,";\n        }\n")}),u=(0,o.ZP)(a.Z)(n=>{let{theme:e}=n;return"\n        width: 16px;\n        height: 16px;\n        position: absolute;\n        top: 12px;\n        left: 12px;\n        z-index: 5;\n        border-radius: ".concat(e.general.borderRadiusSm,";\n        background: ").concat(e.header.background,";\n")}),g=(0,o.ZP)(n=>{let{className:e,...t}=n;return(0,r.jsx)(i.Z,{...t,classes:{popper:e}})})(n=>{let{theme:e}=n;return{["& .".concat(s.Z.tooltip)]:{backgroundColor:e.colors.alpha.trueWhite[100],color:e.palette.getContrastText(e.colors.alpha.trueWhite[100]),fontSize:e.typography.pxToRem(12),fontWeight:"bold",borderRadius:e.general.borderRadiusSm,boxShadow:"0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)"},["& .".concat(s.Z.arrow)]:{color:e.colors.alpha.trueWhite[100]}}});e.Z=function(){let n=(0,c.Z)();return(0,r.jsx)(g,{title:"Tokyo Free Black Next.js Javascript Admin Dashboard",arrow:!0,children:(0,r.jsx)(p,{href:"/",children:(0,r.jsx)(l.Z,{sx:{".MuiBadge-badge":{fontSize:n.typography.pxToRem(11),right:-2,top:8}},overlap:"circular",color:"success",badgeContent:"1.0",children:(0,r.jsx)(h,{children:(0,r.jsx)(x,{children:(0,r.jsx)(u,{})})})})})})}},69598:function(n,e,t){var r=t(85893),o=t(45697),a=t.n(o),i=t(90948),s=t(87357),c=t(65582);let l=(0,i.ZP)(s.Z)(n=>{let{theme:e}=n;return"\n        padding-top: ".concat(e.spacing(4),";\n        padding-bottom: ").concat(e.spacing(4),";\n")}),d=n=>{let{children:e}=n;return(0,r.jsx)(l,{className:"MuiPageTitle-wrapper",children:(0,r.jsx)(c.Z,{maxWidth:"100%",children:e})})};d.propTypes={children:a().node.isRequired},e.Z=d},25593:function(n,e,t){var r=t(85893),o=t(45697),a=t.n(o),i=t(86658),s=t(2734),c=t(87357);let l=n=>{let{className:e,children:t,...o}=n,a=(0,s.Z)();return(0,r.jsx)(i.$B,{autoHide:!0,universal:!0,renderThumbVertical:()=>(0,r.jsx)(c.Z,{sx:{width:5,background:"".concat(a.colors.alpha.black[10]),borderRadius:"".concat(a.general.borderRadiusLg),transition:"".concat(a.transitions.create(["background"])),"&:hover":{background:"".concat(a.colors.alpha.black[30])}}}),...o,children:t})};l.propTypes={children:a().node,className:a().string},e.Z=l},67346:function(n,e,t){t.d(e,{Z:function(){return nC}});var r=t(85893),o=t(2734),a=t(87357),i=t(41796),s=t(67294),c=t(25593),l=t(95519),d=t(90948),p=t(67720),h=t(58826),x=t(41664),u=t.n(x),g=t(11163),m=t(78462),j=t(75438),f=t(97212),b=t(11057),Z=t(4712),y=t(10344),k=t(27430),v=t(92198),w=t(71245),P=t(60246),M=t(4879),S=t(86590),C=t(79771),T=t(6198);let R=(0,d.ZP)(a.Z)(n=>{let{theme:e}=n;return"\n  .MuiList-root {\n    padding: ".concat(e.spacing(1),";\n\n    & > .MuiList-root {\n      padding: 0 ").concat(e.spacing(0)," ").concat(e.spacing(1),";\n    }\n  }\n\n    .MuiListSubheader-root {\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: ").concat(e.typography.pxToRem(12),";\n      color: ").concat(e.colors.alpha.black[50],";\n      padding: ").concat(e.spacing(0,2.5),";\n      line-height: 1.4;\n    }\n")}),B=(0,d.ZP)(a.Z)(n=>{let{theme:e}=n;return"\n    .MuiList-root {\n\n      .MuiListItem-root {\n        padding: 1px 0;\n\n        .MuiBadge-root {\n          position: absolute;\n          right: ".concat(e.spacing(3.2),";\n\n          .MuiBadge-standard {\n            background: ").concat(e.colors.primary.main,";\n            font-size: ").concat(e.typography.pxToRem(10),";\n            font-weight: bold;\n            text-transform: uppercase;\n            color: ").concat(e.palette.primary.dark,";\n          }\n        }\n    \n        .MuiButton-root {\n          display: flex;\n          color: ").concat(e.colors.alpha.black[80],";\n          background-color: transparent;\n          width: 100%;\n          justify-content: flex-start;\n          padding: ").concat(e.spacing(1.2,3),";\n\n          .MuiButton-startIcon,\n          .MuiButton-endIcon {\n            transition: ").concat(e.transitions.create(["color"]),";\n\n            .MuiSvgIcon-root {\n              font-size: inherit;\n              transition: none;\n            }\n          }\n\n          .MuiButton-startIcon {\n            color: ").concat(e.colors.alpha.black[50],";\n            font-size: ").concat(e.typography.pxToRem(20),";\n            margin-right: ").concat(e.spacing(1),";\n          }\n          \n          .MuiButton-endIcon {\n            color: ").concat(e.colors.alpha.black[90],";\n            margin-left: auto;\n            opacity: .8;\n            font-size: ").concat(e.typography.pxToRem(20),";\n          }\n\n          &.active,\n          &:hover {\n            background-color: ").concat((0,i.Fq)(e.colors.alpha.black[100],.06),";\n            color: ").concat(e.colors.alpha.black[100],";\n\n            .MuiButton-startIcon,\n            .MuiButton-endIcon {\n              color: ").concat(e.colors.alpha.black[100],";\n            }\n          }\n        }\n\n        &.Mui-children {\n          flex-direction: column;\n\n          .MuiBadge-root {\n            position: absolute;\n            right: ").concat(e.spacing(7),";\n          }\n        }\n\n        .MuiCollapse-root {\n          width: 100%;\n\n          .MuiList-root {\n            padding: ").concat(e.spacing(1,0),";\n          }\n\n          .MuiListItem-root {\n            padding: 1px 0;\n\n            .MuiButton-root {\n              padding: ").concat(e.spacing(.8,3),";\n\n              .MuiBadge-root {\n                right: ").concat(e.spacing(3.2),";\n              }\n\n              &:before {\n                content: ' ';\n                background: ").concat(e.colors.alpha.black[100],";\n                opacity: 0;\n                transition: ").concat(e.transitions.create(["transform","opacity"]),";\n                width: 6px;\n                height: 6px;\n                transform: scale(0);\n                transform-origin: center;\n                border-radius: 20px;\n                margin-right: ").concat(e.spacing(1.8),";\n              }\n\n              &.active,\n              &:hover {\n\n                &:before {\n                  transform: scale(1);\n                  opacity: 1;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n")});var z=function(){let{closeSidebar:n}=(0,s.useContext)(l.l),{pathname:e}=(0,g.useRouter)(),t=[{menu:"Dashboards",subMenu:[{title:"Ships Details",href:"/dashboards/ship-details",icon:(0,r.jsx)(y.Z,{})},{title:"Scheduled Job",href:"/dashboards/scheduled-job",icon:(0,r.jsx)(k.Z,{})},{title:"Unscheduled Job",href:"/dashboards/unscheduled-job",icon:(0,r.jsx)(v.Z,{})}]},{menu:"EQUIPMENT",subMenu:[{title:"Data Sheet",href:"/equipment/data-sheet",icon:(0,r.jsx)(w.Z,{})},{title:"Stock",href:"/equipment/stock",icon:(0,r.jsx)(P.Z,{})}]},{menu:"Members",subMenu:[{title:"Title Settings",href:"/members/title-settings",icon:(0,r.jsx)(T.Z,{})},{title:"Users",href:"/members/users",icon:(0,r.jsx)(M.Z,{})},{title:"Departments",href:"/members/departments",icon:(0,r.jsx)(S.Z,{})}]},{menu:"Notifications",subMenu:[{title:"Inbox",href:"/notification/inbox",icon:(0,r.jsx)(C.Z,{})},{title:"Approvesd",href:"/notification/approved",icon:(0,r.jsx)(Z.Z,{})}]}];return(0,r.jsx)(R,{children:t.map((t,o)=>{let{menu:a,subMenu:i}=t;return(0,r.jsx)(m.Z,{component:"div",subheader:(0,r.jsx)(j.Z,{component:"div",disableSticky:!0,children:a}),children:(0,r.jsx)(B,{children:(0,r.jsx)(m.Z,{component:"div",children:i.map((t,o)=>{let{title:a,href:i,icon:s}=t;return(0,r.jsx)(f.ZP,{component:"div",children:(0,r.jsx)(u(),{href:i,passHref:!0,style:{textDecoration:"none"},children:(0,r.jsx)(b.Z,{className:e.includes(i)?"active":"",disableRipple:!0,onClick:n,startIcon:s,children:a})})},o)})},o)})},o)})})};t(75134);let I=(0,d.ZP)(a.Z)(n=>{let{theme:e}=n;return"\n        color: ".concat(e.colors.alpha.black[70],";\n        width: ").concat(e.sidebar.width,";\n        min-width: ").concat(e.sidebar.width,";\n        position: relative;\n        z-index: 7;\n        height: 100%;\n        padding-bottom: 68px;\n")});var W=function(){let{sidebarToggle:n,toggleSidebar:e}=(0,s.useContext)(l.l),t=()=>e(),d=(0,o.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{sx:{display:{xs:"none",lg:"inline-block"},width:{xs:"210px",sm:d.sidebar.width},position:"fixed",left:0,top:0,background:"dark"===d.palette.mode?(0,i._j)(d.colors.alpha.black[100],.5):(0,i.Fq)((0,i.$n)(d.header.background,.1),1),boxShadow:"dark"===d.palette.mode?"none":d.sidebar.boxShadow},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(a.Z,{mt:3,children:(0,r.jsx)(a.Z,{mx:2,sx:{width:"100%"},children:(0,r.jsx)(u(),{href:"/ship-list",passHref:!0,children:(0,r.jsx)("img",{src:"/static/images/logo/logo-batera.svg",alt:"Logo Batera",height:"70px",style:{marginLeft:"1rem",cursor:"pointer"}})})})}),(0,r.jsx)(p.Z,{sx:{mt:d.spacing(3),mx:d.spacing(2),background:d.colors.alpha.black[20]}}),(0,r.jsx)(z,{})]})}),(0,r.jsx)(h.ZP,{sx:{boxShadow:"".concat(d.sidebar.boxShadow)},anchor:"rtl"===d.direction?"right":"left",open:n,onClose:t,variant:"temporary",elevation:9,children:(0,r.jsx)(I,{sx:{background:"dark"===d.palette.mode?(0,i._j)(d.colors.alpha.black[100],.5):d.colors.alpha.white[100]},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(a.Z,{mt:3,children:(0,r.jsx)(a.Z,{mx:2,sx:{width:52},children:(0,r.jsx)(u(),{href:"/ship-list",passHref:!0,children:(0,r.jsx)("img",{src:"/static/images/logo/logo-batera.svg",alt:"Logo Batera",height:"70px",style:{marginLeft:"1rem",cursor:"pointer"}})})})}),(0,r.jsx)(p.Z,{sx:{mt:d.spacing(3),mx:d.spacing(2),background:d.colors.alpha.trueWhite[10]}}),(0,r.jsx)(z,{})]})})})]})},F=t(51233),N=t(82302),D=t(93946),q=t(5196),L=t(83419),A=t(54776),H=t(50657),O=t(50135),$=t(37645),E=t(87109),_=t(6514),J=t(15861),U=t(23795),V=t(50456),Q=t(18987),G=t(87952),K=t(42701),X=t(98051),Y=t(27397);let nn=(0,s.forwardRef)(function(n,e){return(0,r.jsx)(A.Z,{direction:"down",ref:e,...n})}),ne=(0,d.ZP)(H.Z)(()=>"\n    .MuiDialog-container {\n        height: auto;\n    }\n    \n    .MuiDialog-paperScrollPaper {\n        max-height: calc(100vh - 64px)\n    }\n"),nt=(0,d.ZP)(O.Z)(n=>{let{theme:e}=n;return"\n    background: ".concat(e.colors.alpha.white[100],";\n\n    .MuiInputBase-input {\n        font-size: ").concat(e.typography.pxToRem(17),";\n    }\n")}),nr=(0,d.ZP)($.Z)(n=>{let{theme:e}=n;return"\n    background: ".concat(e.colors.alpha.black[5],";\n    padding: ").concat(e.spacing(3),"\n")});var no=function(){let[n,e]=(0,s.useState)(!1),[t,o]=(0,s.useState)(""),c=t=>{o(t.target.value),t.target.value?n||e(!0):e(!1)},[l,d]=(0,s.useState)(!1),h=()=>{d(!0)},x=()=>{d(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N.Z,{arrow:!0,title:"Search",children:(0,r.jsx)(D.Z,{color:"primary",onClick:h,children:(0,r.jsx)(K.Z,{})})}),(0,r.jsxs)(ne,{open:l,TransitionComponent:nn,keepMounted:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:x,children:[(0,r.jsx)(nr,{children:(0,r.jsx)(nt,{value:t,autoFocus:!0,onChange:c,InputProps:{startAdornment:(0,r.jsx)(E.Z,{position:"start",children:(0,r.jsx)(K.Z,{})})},placeholder:"Search terms here...",fullWidth:!0,label:"Search"})}),(0,r.jsx)(p.Z,{}),n&&(0,r.jsxs)(_.Z,{children:[(0,r.jsxs)(a.Z,{sx:{pt:0,pb:1},display:"flex",justifyContent:"space-between",children:[(0,r.jsxs)(J.Z,{variant:"body2",component:"span",children:["Search results for"," ",(0,r.jsx)(J.Z,{sx:{fontWeight:"bold"},variant:"body1",component:"span",children:t})]}),(0,r.jsx)(U.Z,{href:"#",variant:"body2",underline:"hover",children:"Advanced search"})]}),(0,r.jsx)(p.Z,{sx:{my:1}}),(0,r.jsxs)(m.Z,{disablePadding:!0,children:[(0,r.jsxs)(f.ZP,{button:!0,children:[(0,r.jsx)(V.Z,{smDown:!0,children:(0,r.jsx)(Q.Z,{children:(0,r.jsx)(G.Z,{sx:{background:n=>n.palette.secondary.main},children:(0,r.jsx)(X.Z,{})})})}),(0,r.jsxs)(a.Z,{flex:"1",children:[(0,r.jsx)(a.Z,{display:"flex",justifyContent:"space-between",children:(0,r.jsx)(U.Z,{href:"#",underline:"hover",sx:{fontWeight:"bold"},variant:"body2",children:"Dashboard for Healthcare Platform"})}),(0,r.jsx)(J.Z,{component:"span",variant:"body2",sx:{color:n=>(0,i.$n)(n.palette.secondary.main,.5)},children:"This page contains all the necessary information for managing all hospital staff."})]}),(0,r.jsx)(Y.Z,{})]}),(0,r.jsx)(p.Z,{sx:{my:1},component:"li"}),(0,r.jsxs)(f.ZP,{button:!0,children:[(0,r.jsx)(V.Z,{smDown:!0,children:(0,r.jsx)(Q.Z,{children:(0,r.jsx)(G.Z,{sx:{background:n=>n.palette.secondary.main},children:(0,r.jsx)(X.Z,{})})})}),(0,r.jsxs)(a.Z,{flex:"1",children:[(0,r.jsx)(a.Z,{display:"flex",justifyContent:"space-between",children:(0,r.jsx)(U.Z,{href:"#",underline:"hover",sx:{fontWeight:"bold"},variant:"body2",children:"Example Projects Application"})}),(0,r.jsx)(J.Z,{component:"span",variant:"body2",sx:{color:n=>(0,i.$n)(n.palette.secondary.main,.5)},children:"This is yet another search result pointing to a app page."})]}),(0,r.jsx)(Y.Z,{})]}),(0,r.jsx)(p.Z,{sx:{my:1},component:"li"}),(0,r.jsxs)(f.ZP,{button:!0,children:[(0,r.jsx)(V.Z,{smDown:!0,children:(0,r.jsx)(Q.Z,{children:(0,r.jsx)(G.Z,{sx:{background:n=>n.palette.secondary.main},children:(0,r.jsx)(X.Z,{})})})}),(0,r.jsxs)(a.Z,{flex:"1",children:[(0,r.jsx)(a.Z,{display:"flex",justifyContent:"space-between",children:(0,r.jsx)(U.Z,{href:"#",underline:"hover",sx:{fontWeight:"bold"},variant:"body2",children:"Search Results Page"})}),(0,r.jsx)(J.Z,{component:"span",variant:"body2",sx:{color:n=>(0,i.$n)(n.palette.secondary.main,.5)},children:"Choose if you would like to show or not this typography section here..."})]}),(0,r.jsx)(Y.Z,{})]})]}),(0,r.jsx)(p.Z,{sx:{mt:1,mb:2}}),(0,r.jsx)(a.Z,{sx:{textAlign:"center"},children:(0,r.jsx)(b.Z,{color:"primary",children:"View all search results"})})]})]})]})},na=t(21239),ni=t(14564),ns=t(90212),nc=t(96556),nl=t(7069);let nd=(0,d.ZP)(na.Z)(n=>{let{theme:e}=n;return"\n    \n    .MuiBadge-badge {\n        background-color: ".concat((0,i.Fq)(e.palette.error.main,.1),";\n        color: ").concat(e.palette.error.main,";\n        min-width: 16px; \n        height: 16px;\n        padding: 0;\n\n        &::after {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            border-radius: 50%;\n            box-shadow: 0 0 0 1px ").concat((0,i.Fq)(e.palette.error.main,.3),';\n            content: "";\n        }\n    }\n')});var np=function(){let n=(0,s.useRef)(null),[e,t]=(0,s.useState)(!1),o=()=>{t(!0)},i=()=>{t(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N.Z,{arrow:!0,title:"Notifications",children:(0,r.jsx)(D.Z,{color:"primary",ref:n,onClick:o,children:(0,r.jsx)(nd,{badgeContent:1,anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,r.jsx)(ns.Z,{})})})}),(0,r.jsxs)(ni.ZP,{anchorEl:n.current,onClose:i,open:e,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,r.jsx)(a.Z,{sx:{p:2},display:"flex",alignItems:"center",justifyContent:"space-between",children:(0,r.jsx)(J.Z,{variant:"h5",children:"Notifications"})}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(m.Z,{sx:{p:0},children:(0,r.jsx)(f.ZP,{sx:{p:2,minWidth:350,display:{xs:"block",sm:"flex"}},children:(0,r.jsxs)(a.Z,{flex:"1",children:[(0,r.jsxs)(a.Z,{display:"flex",justifyContent:"space-between",children:[(0,r.jsx)(J.Z,{sx:{fontWeight:"bold"},children:"Messaging Platform"}),(0,r.jsx)(J.Z,{variant:"caption",sx:{textTransform:"none"},children:(0,nc.Z)((0,nl.Z)(new Date,3),new Date,{addSuffix:!0})})]}),(0,r.jsxs)(J.Z,{component:"span",variant:"body2",color:"text.secondary",children:[" ","new messages in your inbox"]})]})})})]})]})},nh=function(){return(0,r.jsxs)(a.Z,{sx:{mr:1},children:[(0,r.jsx)(no,{}),(0,r.jsx)(a.Z,{sx:{mx:.5},component:"span",children:(0,r.jsx)(np,{})})]})},nx=t(59334),nu=t(28847),ng=t(79126),nm=t(86754),nj=t(32321),nf=t(77227);let nb=(0,d.ZP)(b.Z)(n=>{let{theme:e}=n;return"\n        padding-left: ".concat(e.spacing(1),";\n        padding-right: ").concat(e.spacing(1),";\n")}),nZ=(0,d.ZP)(a.Z)(n=>{let{theme:e}=n;return"\n        background: ".concat(e.colors.alpha.black[5],";\n        padding: ").concat(e.spacing(2),";\n")}),ny=(0,d.ZP)(a.Z)(n=>{let{theme:e}=n;return"\n        text-align: left;\n        padding-left: ".concat(e.spacing(1),";\n")}),nk=(0,d.ZP)(J.Z)(n=>{let{theme:e}=n;return"\n        font-weight: ".concat(e.typography.fontWeightBold,";\n        color: ").concat(e.palette.secondary.main,";\n        display: block;\n")}),nv=(0,d.ZP)(J.Z)(n=>{let{theme:e}=n;return"\n        color: ".concat((0,i.$n)(e.palette.secondary.main,.5),"\n")});var nw=function(){let n={name:"Catherine Pike",avatar:"/static/images/avatars/1.jpg",jobtitle:"Project Manager"},e=(0,s.useRef)(null),[t,o]=(0,s.useState)(!1),i=()=>{o(!0)},c=()=>{o(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(nb,{color:"secondary",ref:e,onClick:i,children:[(0,r.jsx)(G.Z,{variant:"rounded",alt:n.name,src:n.avatar}),(0,r.jsx)(V.Z,{mdDown:!0,children:(0,r.jsxs)(ny,{children:[(0,r.jsx)(nk,{variant:"body1",children:n.name}),(0,r.jsx)(nv,{variant:"body2",children:n.jobtitle})]})}),(0,r.jsx)(V.Z,{smDown:!0,children:(0,r.jsx)(ng.Z,{sx:{ml:1}})})]}),(0,r.jsxs)(ni.ZP,{anchorEl:e.current,onClose:c,open:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,r.jsxs)(nZ,{sx:{minWidth:210},display:"flex",children:[(0,r.jsx)(G.Z,{variant:"rounded",alt:n.name,src:n.avatar}),(0,r.jsxs)(ny,{children:[(0,r.jsx)(nk,{variant:"body1",children:n.name}),(0,r.jsx)(nv,{variant:"body2",children:n.jobtitle})]})]}),(0,r.jsx)(p.Z,{sx:{mb:0}}),(0,r.jsxs)(m.Z,{sx:{p:1},component:"nav",children:[(0,r.jsx)(u(),{href:"/management/profile",passHref:!0,children:(0,r.jsxs)(f.ZP,{button:!0,children:[(0,r.jsx)(nm.Z,{fontSize:"small"}),(0,r.jsx)(nx.Z,{primary:"My Profile"})]})}),(0,r.jsx)(u(),{href:"/applications/messenger",passHref:!0,children:(0,r.jsxs)(f.ZP,{button:!0,children:[(0,r.jsx)(nu.Z,{fontSize:"small"}),(0,r.jsx)(nx.Z,{primary:"Messenger"})]})}),(0,r.jsx)(u(),{href:"/management/profile/settings",passHref:!0,children:(0,r.jsxs)(f.ZP,{button:!0,children:[(0,r.jsx)(nf.Z,{fontSize:"small"}),(0,r.jsx)(nx.Z,{primary:"Account Settings"})]})})]}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(a.Z,{sx:{m:1},children:(0,r.jsxs)(b.Z,{color:"primary",fullWidth:!0,children:[(0,r.jsx)(nj.Z,{sx:{mr:1}}),"Sign out"]})})]})]})};let nP=(0,d.ZP)(a.Z)(n=>{let{theme:e}=n;return"\n    color: ".concat(e.header.textColor,";\n    padding: ").concat(e.spacing(0,2),";\n    right: 0;\n    z-index: 6;\n    background-color: ").concat((0,i.Fq)(e.header.background,.95),";\n    backdrop-filter: blur(3px);\n    position: fixed;\n    justify-content: space-between;\n    width: 100%;\n    @media (max-height: 600px) {\n      height: 18%;\n    }\n    @media (min-height: 601px) and (max-height: 800px) {\n        height: 12%;\n    }\n    @media (min-height: 801px) and (max-height: 1000px) {\n        height: 10%;\n    }\n    @media (min-height: 1001px) {\n        height: 8%;\n    }\n  ")});var nM=function(){let{sidebarToggle:n,toggleSidebar:e}=(0,s.useContext)(l.l),t=(0,o.Z)();return(0,r.jsxs)(nP,{display:"flex",alignItems:"center",sx:{boxShadow:"dark"===t.palette.mode?"0 1px 0 ".concat((0,i.Fq)((0,i.$n)(t.colors.primary.main,.7),.15),", 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)"):"0px 2px 8px -3px ".concat((0,i.Fq)(t.colors.alpha.black[100],.2),", 0px 5px 22px -4px ").concat((0,i.Fq)(t.colors.alpha.black[100],.1))},children:[(0,r.jsx)(F.Z,{direction:"row",divider:(0,r.jsx)(p.Z,{orientation:"vertical",flexItem:!0}),alignItems:"center",spacing:2,children:(0,r.jsx)(u(),{href:"/ship-list",passHref:!0,children:(0,r.jsx)("img",{src:"/static/images/logo/logo-batera.svg",alt:"Logo Batera",height:"50px",style:{marginLeft:"1rem",cursor:"pointer"}})})}),(0,r.jsxs)(a.Z,{display:"flex",alignItems:"center",children:[(0,r.jsx)(nh,{}),(0,r.jsx)(nw,{}),(0,r.jsx)(a.Z,{component:"span",sx:{ml:2,display:{lg:"none",xs:"inline-block"}},children:(0,r.jsx)(N.Z,{arrow:!0,title:"Toggle Menu",children:(0,r.jsx)(D.Z,{color:"primary",onClick:e,children:n?(0,r.jsx)(L.Z,{fontSize:"small"}):(0,r.jsx)(q.Z,{fontSize:"small"})})})})]})]})};let nS=n=>{let{children:e}=n,t=(0,o.Z)(),{pathname:s}=(0,g.useRouter)(),c="/ship-list"==s||"/ship-list/add-ship"==s;return(0,r.jsxs)(a.Z,{sx:{flex:1,height:"100%",".MuiPageTitle-wrapper":{background:"dark"===t.palette.mode?t.colors.alpha.trueWhite[5]:t.colors.alpha.white[50],marginBottom:"".concat(t.spacing(4)),boxShadow:"dark"===t.palette.mode?"0 1px 0 ".concat((0,i.Fq)((0,i.$n)(t.colors.primary.main,.7),.15),", 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)"):"0px 2px 4px -3px ".concat((0,i.Fq)(t.colors.alpha.black[100],.1),", 0px 5px 12px -4px ").concat((0,i.Fq)(t.colors.alpha.black[100],.05))}},children:[(0,r.jsx)(nM,{}),c?"":(0,r.jsx)(W,{}),(0,r.jsx)(a.Z,{sx:{position:"relative",zIndex:5,display:"block",flex:1,pt:"".concat(t.header.height),[t.breakpoints.up("lg")]:{ml:c?null:"".concat(t.sidebar.width)}},children:(0,r.jsx)(a.Z,{display:"block",children:e})})]})};var nC=nS}}]);