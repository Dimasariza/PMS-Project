"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9364],{52437:function(n,e,t){var o=t(85893),r=t(67294),s=t(45697),a=t.n(s),i=t(86010),c=t(11163),l=t(41664),d=t.n(l),p=t(23795),h=t(90948);let x=(0,h.ZP)("a")({}),m=r.forwardRef(function(n,e){let{to:t,linkAs:r,replace:s,scroll:a,shallow:i,prefetch:c,locale:l,...p}=n;return(0,o.jsx)(d(),{href:t,prefetch:c,as:r,replace:s,scroll:a,shallow:i,passHref:!0,locale:l,children:(0,o.jsx)(x,{ref:e,...p})})});m.propTypes={href:a().any,linkAs:a().oneOfType([a().object,a().string]),locale:a().string,passHref:a().bool,prefetch:a().bool,replace:a().bool,scroll:a().bool,shallow:a().bool,to:a().oneOfType([a().object,a().string]).isRequired};let j=r.forwardRef(function(n,e){let{activeClassName:t="active",as:r,className:s,href:a,linkAs:l,locale:d,noLinkStyle:h,prefetch:j,replace:u,role:Z,scroll:g,shallow:f,...b}=n,y=(0,c.useRouter)(),v="string"==typeof a?a:null==a?void 0:a.pathname,k=(0,i.Z)(s,{[t]:y.pathname===v&&t}),w="string"==typeof a&&(0===a.indexOf("http")||0===a.indexOf("mailto:"));if(w)return h?(0,o.jsx)(x,{className:k,href:a,ref:e,...b}):(0,o.jsx)(p.Z,{className:k,href:a,ref:e,...b});let P={to:a,linkAs:l||r,replace:u,scroll:g,shallow:f,prefetch:j,locale:d};return h?(0,o.jsx)(m,{className:k,ref:e,...P,...b}):(0,o.jsx)(p.Z,{component:m,className:k,ref:e,...P,...b})});j.propTypes={activeClassName:a().string,as:a().oneOfType([a().object,a().string]),className:a().string,href:a().any,linkAs:a().oneOfType([a().object,a().string]),locale:a().string,noLinkStyle:a().bool,prefetch:a().bool,replace:a().bool,role:a().string,scroll:a().bool,shallow:a().bool},e.C=j},75134:function(n,e,t){var o=t(85893),r=t(90948),s=t(87357),a=t(82302),i=t(48999),c=t(2734),l=t(21239),d=t(52437);let p=(0,r.ZP)(d.C)(n=>{let{theme:e}=n;return"\n        color: ".concat(e.palette.text.primary,";\n        display: flex;\n        text-decoration: none;\n        width: 53px;\n        margin: 0 auto;\n        font-weight: ").concat(e.typography.fontWeightBold,";\n")}),h=(0,r.ZP)(s.Z)(()=>"\n        width: 52px;\n        height: 38px;\n"),x=(0,r.ZP)(s.Z)(n=>{let{theme:e}=n;return"\n        background: ".concat(e.general.reactFrameworkColor,";\n        width: 18px;\n        height: 18px;\n        border-radius: ").concat(e.general.borderRadiusSm,';\n        position: relative;\n        transform: rotate(45deg);\n        top: 3px;\n        left: 17px;\n\n        &:after, \n        &:before {\n            content: "";\n            display: block;\n            width: 18px;\n            height: 18px;\n            position: absolute;\n            top: -1px;\n            right: -20px;\n            transform: rotate(0deg);\n            border-radius: ').concat(e.general.borderRadiusSm,";\n        }\n\n        &:before {\n            background: ").concat(e.palette.primary.main,";\n            right: auto;\n            left: 0;\n            top: 20px;\n        }\n\n        &:after {\n            background: ").concat(e.palette.secondary.main,";\n        }\n")}),m=(0,r.ZP)(s.Z)(n=>{let{theme:e}=n;return"\n        width: 16px;\n        height: 16px;\n        position: absolute;\n        top: 12px;\n        left: 12px;\n        z-index: 5;\n        border-radius: ".concat(e.general.borderRadiusSm,";\n        background: ").concat(e.header.background,";\n")}),j=(0,r.ZP)(n=>{let{className:e,...t}=n;return(0,o.jsx)(a.Z,{...t,classes:{popper:e}})})(n=>{let{theme:e}=n;return{["& .".concat(i.Z.tooltip)]:{backgroundColor:e.colors.alpha.trueWhite[100],color:e.palette.getContrastText(e.colors.alpha.trueWhite[100]),fontSize:e.typography.pxToRem(12),fontWeight:"bold",borderRadius:e.general.borderRadiusSm,boxShadow:"0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)"},["& .".concat(i.Z.arrow)]:{color:e.colors.alpha.trueWhite[100]}}});e.Z=function(){let n=(0,c.Z)();return(0,o.jsx)(j,{title:"Tokyo Free Black Next.js Javascript Admin Dashboard",arrow:!0,children:(0,o.jsx)(p,{href:"/",children:(0,o.jsx)(l.Z,{sx:{".MuiBadge-badge":{fontSize:n.typography.pxToRem(11),right:-2,top:8}},overlap:"circular",color:"success",badgeContent:"1.0",children:(0,o.jsx)(h,{children:(0,o.jsx)(x,{children:(0,o.jsx)(m,{})})})})})})}},25593:function(n,e,t){var o=t(85893),r=t(45697),s=t.n(r),a=t(86658),i=t(2734),c=t(87357);let l=n=>{let{className:e,children:t,...r}=n,s=(0,i.Z)();return(0,o.jsx)(a.$B,{autoHide:!0,universal:!0,renderThumbVertical:()=>(0,o.jsx)(c.Z,{sx:{width:5,background:"".concat(s.colors.alpha.black[10]),borderRadius:"".concat(s.general.borderRadiusLg),transition:"".concat(s.transitions.create(["background"])),"&:hover":{background:"".concat(s.colors.alpha.black[30])}}}),...r,children:t})};l.propTypes={children:s().node,className:s().string},e.Z=l},69364:function(n,e,t){t.d(e,{Z:function(){return n_}});var o=t(85893),r=t(2734),s=t(87357),a=t(41796),i=t(45697),c=t.n(i),l=t(67294),d=t(25593),p=t(95519),h=t(90948),x=t(67720),m=t(11057),j=t(58826),u=t(11163),Z=t(78462),g=t(97212),f=t(75438),b=t(41664),y=t.n(b),v=t(54870),k=t(75972),w=t(76971),P=t(71987),C=t(4879),M=t(9798),R=t(64521),I=t(71599),S=t(49602),T=t(68165),W=t(53747),N=t(72840),H=t(92122),z=t(66486),B=t(4712),F=t(87736),L=t(75594),O=t(67803),A=t(51033);let q=(0,h.ZP)(s.Z)(n=>{let{theme:e}=n;return"\n  .MuiList-root {\n    padding: ".concat(e.spacing(1),";\n\n    & > .MuiList-root {\n      padding: 0 ").concat(e.spacing(0)," ").concat(e.spacing(1),";\n    }\n  }\n\n    .MuiListSubheader-root {\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: ").concat(e.typography.pxToRem(12),";\n      color: ").concat(e.colors.alpha.trueWhite[50],";\n      padding: ").concat(e.spacing(0,2.5),";\n      line-height: 1.4;\n    }\n")}),D=(0,h.ZP)(s.Z)(n=>{let{theme:e}=n;return"\n    .MuiList-root {\n\n      .MuiListItem-root {\n        padding: 1px 0;\n\n        .MuiBadge-root {\n          position: absolute;\n          right: ".concat(e.spacing(3.2),";\n\n          .MuiBadge-standard {\n            background: ").concat(e.colors.primary.main,";\n            font-size: ").concat(e.typography.pxToRem(10),";\n            font-weight: bold;\n            text-transform: uppercase;\n            color: ").concat(e.palette.primary.contrastText,";\n          }\n        }\n    \n        .MuiButton-root {\n          display: flex;\n          color: ").concat(e.colors.alpha.trueWhite[70],";\n          background-color: transparent;\n          width: 100%;\n          justify-content: flex-start;\n          padding: ").concat(e.spacing(1.2,3),";\n\n          .MuiButton-startIcon,\n          .MuiButton-endIcon {\n            transition: ").concat(e.transitions.create(["color"]),";\n\n            .MuiSvgIcon-root {\n              font-size: inherit;\n              transition: none;\n            }\n          }\n\n          .MuiButton-startIcon {\n            color: ").concat(e.colors.alpha.trueWhite[30],";\n            font-size: ").concat(e.typography.pxToRem(20),";\n            margin-right: ").concat(e.spacing(1),";\n          }\n          \n          .MuiButton-endIcon {\n            color: ").concat(e.colors.alpha.trueWhite[50],";\n            margin-left: auto;\n            opacity: .8;\n            font-size: ").concat(e.typography.pxToRem(20),";\n          }\n\n          &.active,\n          &:hover {\n            background-color: ").concat((0,a.Fq)(e.colors.alpha.trueWhite[100],.06),";\n            color: ").concat(e.colors.alpha.trueWhite[100],";\n\n            .MuiButton-startIcon,\n            .MuiButton-endIcon {\n              color: ").concat(e.colors.alpha.trueWhite[100],";\n            }\n          }\n        }\n\n        &.Mui-children {\n          flex-direction: column;\n\n          .MuiBadge-root {\n            position: absolute;\n            right: ").concat(e.spacing(7),";\n          }\n        }\n\n        .MuiCollapse-root {\n          width: 100%;\n\n          .MuiList-root {\n            padding: ").concat(e.spacing(1,0),";\n          }\n\n          .MuiListItem-root {\n            padding: 1px 0;\n\n            .MuiButton-root {\n              padding: ").concat(e.spacing(.8,3),";\n\n              .MuiBadge-root {\n                right: ").concat(e.spacing(3.2),";\n              }\n\n              &:before {\n                content: ' ';\n                background: ").concat(e.colors.alpha.trueWhite[100],";\n                opacity: 0;\n                transition: ").concat(e.transitions.create(["transform","opacity"]),";\n                width: 6px;\n                height: 6px;\n                transform: scale(0);\n                transform-origin: center;\n                border-radius: 20px;\n                margin-right: ").concat(e.spacing(1.8),";\n              }\n\n              &.active,\n              &:hover {\n\n                &:before {\n                  transform: scale(1);\n                  opacity: 1;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n")});var E=function(){let{closeSidebar:n}=(0,l.useContext)(p.l),e=(0,u.useRouter)(),t=e.pathname;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(q,{children:[(0,o.jsx)(Z.Z,{component:"div",children:(0,o.jsx)(D,{children:(0,o.jsx)(Z.Z,{component:"div",children:(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/",passHref:!0,children:(0,o.jsx)(m.Z,{className:'="/'===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(v.Z,{}),children:"Overview"})})})})})}),(0,o.jsx)(Z.Z,{component:"div",subheader:(0,o.jsx)(f.Z,{component:"div",disableSticky:!0,children:"Dashboards"}),children:(0,o.jsx)(D,{children:(0,o.jsxs)(Z.Z,{component:"div",children:[(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/dashboards/tasks",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/dashboards/tasks"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(k.Z,{}),children:"Manage Tasks"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/applications/messenger",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/applications/messenger"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(w.Z,{}),children:"Messenger"})})})]})})}),(0,o.jsx)(Z.Z,{component:"div",subheader:(0,o.jsx)(f.Z,{component:"div",disableSticky:!0,children:"Management"}),children:(0,o.jsx)(D,{children:(0,o.jsx)(Z.Z,{component:"div",children:(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/management/transactions",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/management/transactions"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(P.Z,{}),children:"Transactions List"})})})})})}),(0,o.jsx)(Z.Z,{component:"div",subheader:(0,o.jsx)(f.Z,{component:"div",disableSticky:!0,children:"Accounts"}),children:(0,o.jsx)(D,{children:(0,o.jsxs)(Z.Z,{component:"div",children:[(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/management/profile",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/management/profile"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(C.Z,{}),children:"User Profile"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/management/profile/settings",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/management/profile/settings"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(A.Z,{}),children:"Account Settings"})})})]})})}),(0,o.jsx)(Z.Z,{component:"div",subheader:(0,o.jsx)(f.Z,{component:"div",disableSticky:!0,children:"Components"}),children:(0,o.jsx)(D,{children:(0,o.jsxs)(Z.Z,{component:"div",children:[(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/components/buttons",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/components/buttons"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(M.Z,{}),children:"Buttons"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/components/modals",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/components/modals"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(R.Z,{}),children:"Modals"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/components/accordions",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/components/accordions"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(I.Z,{}),children:"Accordions"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/components/tabs",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/components/tabs"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(S.Z,{}),children:"Tabs"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/components/badges",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/components/badges"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(T.Z,{}),children:"Badges"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/components/tooltips",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/components/tooltips"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(W.Z,{}),children:"Tooltips"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/components/avatars",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/components/avatars"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(N.Z,{}),children:"Avatars"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/components/cards",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/components/cards"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(H.Z,{}),children:"Cards"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/components/forms",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/components/forms"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(z.Z,{}),children:"Forms"})})})]})})}),(0,o.jsx)(Z.Z,{component:"div",subheader:(0,o.jsx)(f.Z,{component:"div",disableSticky:!0,children:"Extra Pages"}),children:(0,o.jsx)(D,{children:(0,o.jsxs)(Z.Z,{component:"div",children:[(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/status/404",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/status/404"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(B.Z,{}),children:"Error 404"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/status/500",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/status/500"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(O.Z,{}),children:"Error 500"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/status/coming-soon",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/status/coming-soon"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(F.Z,{}),children:"Coming Soon"})})}),(0,o.jsx)(g.ZP,{component:"div",children:(0,o.jsx)(y(),{href:"/status/maintenance",passHref:!0,children:(0,o.jsx)(m.Z,{className:"/status/maintenance"===t?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,o.jsx)(L.Z,{}),children:"Maintenance"})})})]})})})]})})},$=t(75134);let _=(0,h.ZP)(s.Z)(n=>{let{theme:e}=n;return"\n        width: ".concat(e.sidebar.width,";\n        min-width: ").concat(e.sidebar.width,";\n        color: ").concat(e.colors.alpha.trueWhite[70],";\n        position: relative;\n        z-index: 7;\n        height: 100%;\n        padding-bottom: 68px;\n")});var U=function(){let{sidebarToggle:n,toggleSidebar:e}=(0,l.useContext)(p.l),t=()=>e(),i=(0,r.Z)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(_,{sx:{display:{xs:"none",lg:"inline-block"},position:"fixed",left:0,top:0,background:"dark"===i.palette.mode?(0,a.Fq)((0,a.$n)(i.header.background,.1),.5):(0,a._j)(i.colors.alpha.black[100],.5),boxShadow:"dark"===i.palette.mode?i.sidebar.boxShadow:"none"},children:[(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(s.Z,{mt:3,children:(0,o.jsx)(s.Z,{mx:2,sx:{width:52},children:(0,o.jsx)($.Z,{})})}),(0,o.jsx)(x.Z,{sx:{mt:i.spacing(3),mx:i.spacing(2),background:i.colors.alpha.trueWhite[10]}}),(0,o.jsx)(E,{})]}),(0,o.jsx)(x.Z,{sx:{background:i.colors.alpha.trueWhite[10]}}),(0,o.jsx)(s.Z,{p:2,children:(0,o.jsx)(m.Z,{href:"https://bloomui.com",target:"_blank",rel:"noopener noreferrer",variant:"contained",color:"success",size:"small",fullWidth:!0,children:"Upgrade to PRO"})})]}),(0,o.jsx)(j.ZP,{sx:{boxShadow:"".concat(i.sidebar.boxShadow)},anchor:"rtl"===i.direction?"right":"left",open:n,onClose:t,variant:"temporary",elevation:9,children:(0,o.jsx)(_,{sx:{background:"dark"===i.palette.mode?i.colors.alpha.white[100]:(0,a._j)(i.colors.alpha.black[100],.5)},children:(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(s.Z,{mt:3,children:(0,o.jsx)(s.Z,{mx:2,sx:{width:52},children:(0,o.jsx)($.Z,{})})}),(0,o.jsx)(x.Z,{sx:{mt:i.spacing(3),mx:i.spacing(2),background:i.colors.alpha.trueWhite[10]}}),(0,o.jsx)(E,{})]})})})]})},V=t(51233),J=t(82302),G=t(93946),K=t(5196),Q=t(83419),X=t(54776),Y=t(50657),nn=t(50135),ne=t(37645),nt=t(87109),no=t(6514),nr=t(15861),ns=t(23795),na=t(50456),ni=t(18987),nc=t(87952),nl=t(42701),nd=t(98051),np=t(27397);let nh=(0,l.forwardRef)(function(n,e){return(0,o.jsx)(X.Z,{direction:"down",ref:e,...n})}),nx=(0,h.ZP)(Y.Z)(()=>"\n    .MuiDialog-container {\n        height: auto;\n    }\n    \n    .MuiDialog-paperScrollPaper {\n        max-height: calc(100vh - 64px)\n    }\n"),nm=(0,h.ZP)(nn.Z)(n=>{let{theme:e}=n;return"\n    background: ".concat(e.colors.alpha.white[100],";\n\n    .MuiInputBase-input {\n        font-size: ").concat(e.typography.pxToRem(17),";\n    }\n")}),nj=(0,h.ZP)(ne.Z)(n=>{let{theme:e}=n;return"\n    background: ".concat(e.colors.alpha.black[5],";\n    padding: ").concat(e.spacing(3),"\n")});var nu=function(){let[n,e]=(0,l.useState)(!1),[t,r]=(0,l.useState)(""),i=t=>{r(t.target.value),t.target.value?n||e(!0):e(!1)},[c,d]=(0,l.useState)(!1),p=()=>{d(!0)},h=()=>{d(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(J.Z,{arrow:!0,title:"Search",children:(0,o.jsx)(G.Z,{color:"primary",onClick:p,children:(0,o.jsx)(nl.Z,{})})}),(0,o.jsxs)(nx,{open:c,TransitionComponent:nh,keepMounted:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:h,children:[(0,o.jsx)(nj,{children:(0,o.jsx)(nm,{value:t,autoFocus:!0,onChange:i,InputProps:{startAdornment:(0,o.jsx)(nt.Z,{position:"start",children:(0,o.jsx)(nl.Z,{})})},placeholder:"Search terms here...",fullWidth:!0,label:"Search"})}),(0,o.jsx)(x.Z,{}),n&&(0,o.jsxs)(no.Z,{children:[(0,o.jsxs)(s.Z,{sx:{pt:0,pb:1},display:"flex",justifyContent:"space-between",children:[(0,o.jsxs)(nr.Z,{variant:"body2",component:"span",children:["Search results for"," ",(0,o.jsx)(nr.Z,{sx:{fontWeight:"bold"},variant:"body1",component:"span",children:t})]}),(0,o.jsx)(ns.Z,{href:"#",variant:"body2",underline:"hover",children:"Advanced search"})]}),(0,o.jsx)(x.Z,{sx:{my:1}}),(0,o.jsxs)(Z.Z,{disablePadding:!0,children:[(0,o.jsxs)(g.ZP,{button:!0,children:[(0,o.jsx)(na.Z,{smDown:!0,children:(0,o.jsx)(ni.Z,{children:(0,o.jsx)(nc.Z,{sx:{background:n=>n.palette.secondary.main},children:(0,o.jsx)(nd.Z,{})})})}),(0,o.jsxs)(s.Z,{flex:"1",children:[(0,o.jsx)(s.Z,{display:"flex",justifyContent:"space-between",children:(0,o.jsx)(ns.Z,{href:"#",underline:"hover",sx:{fontWeight:"bold"},variant:"body2",children:"Dashboard for Healthcare Platform"})}),(0,o.jsx)(nr.Z,{component:"span",variant:"body2",sx:{color:n=>(0,a.$n)(n.palette.secondary.main,.5)},children:"This page contains all the necessary information for managing all hospital staff."})]}),(0,o.jsx)(np.Z,{})]}),(0,o.jsx)(x.Z,{sx:{my:1},component:"li"}),(0,o.jsxs)(g.ZP,{button:!0,children:[(0,o.jsx)(na.Z,{smDown:!0,children:(0,o.jsx)(ni.Z,{children:(0,o.jsx)(nc.Z,{sx:{background:n=>n.palette.secondary.main},children:(0,o.jsx)(nd.Z,{})})})}),(0,o.jsxs)(s.Z,{flex:"1",children:[(0,o.jsx)(s.Z,{display:"flex",justifyContent:"space-between",children:(0,o.jsx)(ns.Z,{href:"#",underline:"hover",sx:{fontWeight:"bold"},variant:"body2",children:"Example Projects Application"})}),(0,o.jsx)(nr.Z,{component:"span",variant:"body2",sx:{color:n=>(0,a.$n)(n.palette.secondary.main,.5)},children:"This is yet another search result pointing to a app page."})]}),(0,o.jsx)(np.Z,{})]}),(0,o.jsx)(x.Z,{sx:{my:1},component:"li"}),(0,o.jsxs)(g.ZP,{button:!0,children:[(0,o.jsx)(na.Z,{smDown:!0,children:(0,o.jsx)(ni.Z,{children:(0,o.jsx)(nc.Z,{sx:{background:n=>n.palette.secondary.main},children:(0,o.jsx)(nd.Z,{})})})}),(0,o.jsxs)(s.Z,{flex:"1",children:[(0,o.jsx)(s.Z,{display:"flex",justifyContent:"space-between",children:(0,o.jsx)(ns.Z,{href:"#",underline:"hover",sx:{fontWeight:"bold"},variant:"body2",children:"Search Results Page"})}),(0,o.jsx)(nr.Z,{component:"span",variant:"body2",sx:{color:n=>(0,a.$n)(n.palette.secondary.main,.5)},children:"Choose if you would like to show or not this typography section here..."})]}),(0,o.jsx)(np.Z,{})]})]}),(0,o.jsx)(x.Z,{sx:{mt:1,mb:2}}),(0,o.jsx)(s.Z,{sx:{textAlign:"center"},children:(0,o.jsx)(m.Z,{color:"primary",children:"View all search results"})})]})]})]})},nZ=t(21239),ng=t(14564),nf=t(90212),nb=t(96556),ny=t(7069);let nv=(0,h.ZP)(nZ.Z)(n=>{let{theme:e}=n;return"\n    \n    .MuiBadge-badge {\n        background-color: ".concat((0,a.Fq)(e.palette.error.main,.1),";\n        color: ").concat(e.palette.error.main,";\n        min-width: 16px; \n        height: 16px;\n        padding: 0;\n\n        &::after {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            border-radius: 50%;\n            box-shadow: 0 0 0 1px ").concat((0,a.Fq)(e.palette.error.main,.3),';\n            content: "";\n        }\n    }\n')});var nk=function(){let n=(0,l.useRef)(null),[e,t]=(0,l.useState)(!1),r=()=>{t(!0)},a=()=>{t(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(J.Z,{arrow:!0,title:"Notifications",children:(0,o.jsx)(G.Z,{color:"primary",ref:n,onClick:r,children:(0,o.jsx)(nv,{badgeContent:1,anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,o.jsx)(nf.Z,{})})})}),(0,o.jsxs)(ng.ZP,{anchorEl:n.current,onClose:a,open:e,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,o.jsx)(s.Z,{sx:{p:2},display:"flex",alignItems:"center",justifyContent:"space-between",children:(0,o.jsx)(nr.Z,{variant:"h5",children:"Notifications"})}),(0,o.jsx)(x.Z,{}),(0,o.jsx)(Z.Z,{sx:{p:0},children:(0,o.jsx)(g.ZP,{sx:{p:2,minWidth:350,display:{xs:"block",sm:"flex"}},children:(0,o.jsxs)(s.Z,{flex:"1",children:[(0,o.jsxs)(s.Z,{display:"flex",justifyContent:"space-between",children:[(0,o.jsx)(nr.Z,{sx:{fontWeight:"bold"},children:"Messaging Platform"}),(0,o.jsx)(nr.Z,{variant:"caption",sx:{textTransform:"none"},children:(0,nb.Z)((0,ny.Z)(new Date,3),new Date,{addSuffix:!0})})]}),(0,o.jsxs)(nr.Z,{component:"span",variant:"body2",color:"text.secondary",children:[" ","new messages in your inbox"]})]})})})]})]})},nw=function(){return(0,o.jsxs)(s.Z,{sx:{mr:1},children:[(0,o.jsx)(nu,{}),(0,o.jsx)(s.Z,{sx:{mx:.5},component:"span",children:(0,o.jsx)(nk,{})})]})},nP=t(59334),nC=t(28847),nM=t(79126),nR=t(86754),nI=t(32321),nS=t(77227);let nT=(0,h.ZP)(m.Z)(n=>{let{theme:e}=n;return"\n        padding-left: ".concat(e.spacing(1),";\n        padding-right: ").concat(e.spacing(1),";\n")}),nW=(0,h.ZP)(s.Z)(n=>{let{theme:e}=n;return"\n        background: ".concat(e.colors.alpha.black[5],";\n        padding: ").concat(e.spacing(2),";\n")}),nN=(0,h.ZP)(s.Z)(n=>{let{theme:e}=n;return"\n        text-align: left;\n        padding-left: ".concat(e.spacing(1),";\n")}),nH=(0,h.ZP)(nr.Z)(n=>{let{theme:e}=n;return"\n        font-weight: ".concat(e.typography.fontWeightBold,";\n        color: ").concat(e.palette.secondary.main,";\n        display: block;\n")}),nz=(0,h.ZP)(nr.Z)(n=>{let{theme:e}=n;return"\n        color: ".concat((0,a.$n)(e.palette.secondary.main,.5),"\n")});var nB=function(){let n={name:"Catherine Pike",avatar:"/static/images/avatars/1.jpg",jobtitle:"Project Manager"},e=(0,l.useRef)(null),[t,r]=(0,l.useState)(!1),a=()=>{r(!0)},i=()=>{r(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(nT,{color:"secondary",ref:e,onClick:a,children:[(0,o.jsx)(nc.Z,{variant:"rounded",alt:n.name,src:n.avatar}),(0,o.jsx)(na.Z,{mdDown:!0,children:(0,o.jsxs)(nN,{children:[(0,o.jsx)(nH,{variant:"body1",children:n.name}),(0,o.jsx)(nz,{variant:"body2",children:n.jobtitle})]})}),(0,o.jsx)(na.Z,{smDown:!0,children:(0,o.jsx)(nM.Z,{sx:{ml:1}})})]}),(0,o.jsxs)(ng.ZP,{anchorEl:e.current,onClose:i,open:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,o.jsxs)(nW,{sx:{minWidth:210},display:"flex",children:[(0,o.jsx)(nc.Z,{variant:"rounded",alt:n.name,src:n.avatar}),(0,o.jsxs)(nN,{children:[(0,o.jsx)(nH,{variant:"body1",children:n.name}),(0,o.jsx)(nz,{variant:"body2",children:n.jobtitle})]})]}),(0,o.jsx)(x.Z,{sx:{mb:0}}),(0,o.jsxs)(Z.Z,{sx:{p:1},component:"nav",children:[(0,o.jsx)(y(),{href:"/management/profile",passHref:!0,children:(0,o.jsxs)(g.ZP,{button:!0,children:[(0,o.jsx)(nR.Z,{fontSize:"small"}),(0,o.jsx)(nP.Z,{primary:"My Profile"})]})}),(0,o.jsx)(y(),{href:"/applications/messenger",passHref:!0,children:(0,o.jsxs)(g.ZP,{button:!0,children:[(0,o.jsx)(nC.Z,{fontSize:"small"}),(0,o.jsx)(nP.Z,{primary:"Messenger"})]})}),(0,o.jsx)(y(),{href:"/management/profile/settings",passHref:!0,children:(0,o.jsxs)(g.ZP,{button:!0,children:[(0,o.jsx)(nS.Z,{fontSize:"small"}),(0,o.jsx)(nP.Z,{primary:"Account Settings"})]})})]}),(0,o.jsx)(x.Z,{}),(0,o.jsx)(s.Z,{sx:{m:1},children:(0,o.jsxs)(m.Z,{color:"primary",fullWidth:!0,children:[(0,o.jsx)(nI.Z,{sx:{mr:1}}),"Sign out"]})})]})]})},nF=t(44347),nL=t(18972),nO=t(52437);let nA=(0,h.ZP)(s.Z)(n=>{let{theme:e}=n;return"\n        .MuiTouchRipple-root {\n            display: none;\n        }\n        \n        .MuiListItem-root {\n            transition: ".concat(e.transitions.create(["color","fill"]),";\n            \n            &.MuiListItem-indicators {\n                padding: ").concat(e.spacing(1,2),";\n            \n                .MuiListItemText-root {\n                    .MuiTypography-root {\n                        &:before {\n                            height: 4px;\n                            width: 22px;\n                            opacity: 0;\n                            visibility: hidden;\n                            display: block;\n                            position: absolute;\n                            bottom: -10px;\n                            transition: all .2s;\n                            border-radius: ").concat(e.general.borderRadiusLg,';\n                            content: "";\n                            background: ').concat(e.colors.primary.main,";\n                        }\n                    }\n                }\n\n                &.active,\n                &:active,\n                &:hover {\n                \n                    background: transparent;\n                \n                    .MuiListItemText-root {\n                        .MuiTypography-root {\n                            &:before {\n                                opacity: 1;\n                                visibility: visible;\n                                bottom: 0px;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n")});var nq=function(){let n=(0,l.useRef)(null),[e,t]=(0,l.useState)(!1),r=()=>{t(!0)},a=()=>{t(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(nA,{sx:{display:{xs:"none",md:"block"}},children:(0,o.jsxs)(Z.Z,{disablePadding:!0,component:s.Z,display:"flex",children:[(0,o.jsx)(g.ZP,{classes:{root:"MuiListItem-indicators"},button:!0,component:nO.C,href:"/components/buttons",children:(0,o.jsx)(nP.Z,{primaryTypographyProps:{noWrap:!0},primary:"Buttons"})}),(0,o.jsx)(g.ZP,{classes:{root:"MuiListItem-indicators"},button:!0,component:nO.C,href:"/components/forms",children:(0,o.jsx)(nP.Z,{primaryTypographyProps:{noWrap:!0},primary:"Forms"})}),(0,o.jsx)(g.ZP,{classes:{root:"MuiListItem-indicators"},button:!0,ref:n,onClick:r,children:(0,o.jsx)(nP.Z,{primaryTypographyProps:{noWrap:!0},primary:(0,o.jsxs)(s.Z,{display:"flex",alignItems:"center",children:["Others",(0,o.jsx)(s.Z,{display:"flex",alignItems:"center",pl:.3,children:(0,o.jsx)(nM.Z,{fontSize:"small"})})]})})})]})}),(0,o.jsxs)(nF.Z,{anchorEl:n.current,onClose:a,open:e,children:[(0,o.jsx)(nL.Z,{sx:{px:3},component:nO.C,href:"/",children:"Overview"}),(0,o.jsx)(nL.Z,{sx:{px:3},component:nO.C,href:"/components/tabs",children:"Tabs"}),(0,o.jsx)(nL.Z,{sx:{px:3},component:nO.C,href:"/components/cards",children:"Cards"}),(0,o.jsx)(nL.Z,{sx:{px:3},component:nO.C,href:"/components/modals",children:"Modals"})]})]})};let nD=(0,h.ZP)(s.Z)(n=>{let{theme:e}=n;return"\n        height: ".concat(e.header.height,";\n        color: ").concat(e.header.textColor,";\n        padding: ").concat(e.spacing(0,2),";\n        right: 0;\n        z-index: 6;\n        background-color: ").concat((0,a.Fq)(e.header.background,.95),";\n        backdrop-filter: blur(3px);\n        position: fixed;\n        justify-content: space-between;\n        width: 100%;\n        @media (min-width: ").concat(e.breakpoints.values.lg,"px) {\n            left: ").concat(e.sidebar.width,";\n            width: auto;\n        }\n")});var nE=function(){let{sidebarToggle:n,toggleSidebar:e}=(0,l.useContext)(p.l),t=(0,r.Z)();return(0,o.jsxs)(nD,{display:"flex",alignItems:"center",sx:{boxShadow:"dark"===t.palette.mode?"0 1px 0 ".concat((0,a.Fq)((0,a.$n)(t.colors.primary.main,.7),.15),", 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)"):"0px 2px 8px -3px ".concat((0,a.Fq)(t.colors.alpha.black[100],.2),", 0px 5px 22px -4px ").concat((0,a.Fq)(t.colors.alpha.black[100],.1))},children:[(0,o.jsx)(V.Z,{direction:"row",divider:(0,o.jsx)(x.Z,{orientation:"vertical",flexItem:!0}),alignItems:"center",spacing:2,children:(0,o.jsx)(nq,{})}),(0,o.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,o.jsx)(nw,{}),(0,o.jsx)(nB,{}),(0,o.jsx)(s.Z,{component:"span",sx:{ml:2,display:{lg:"none",xs:"inline-block"}},children:(0,o.jsx)(J.Z,{arrow:!0,title:"Toggle Menu",children:(0,o.jsx)(G.Z,{color:"primary",onClick:e,children:n?(0,o.jsx)(Q.Z,{fontSize:"small"}):(0,o.jsx)(K.Z,{fontSize:"small"})})})})]})]})};let n$=n=>{let{children:e}=n,t=(0,r.Z)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(s.Z,{sx:{flex:1,height:"100%",".MuiPageTitle-wrapper":{background:"dark"===t.palette.mode?t.colors.alpha.trueWhite[5]:t.colors.alpha.white[50],marginBottom:"".concat(t.spacing(4)),boxShadow:"dark"===t.palette.mode?"0 1px 0 ".concat((0,a.Fq)((0,a.$n)(t.colors.primary.main,.7),.15),", 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)"):"0px 2px 4px -3px ".concat((0,a.Fq)(t.colors.alpha.black[100],.1),", 0px 5px 12px -4px ").concat((0,a.Fq)(t.colors.alpha.black[100],.05))}},children:[(0,o.jsx)(nE,{}),(0,o.jsx)(U,{}),(0,o.jsx)(s.Z,{sx:{position:"relative",zIndex:5,display:"block",flex:1,pt:"".concat(t.header.height),[t.breakpoints.up("lg")]:{ml:"".concat(t.sidebar.width)}},children:(0,o.jsx)(s.Z,{display:"block",children:e})})]})})};n$.propTypes={children:c().node};var n_=n$}}]);