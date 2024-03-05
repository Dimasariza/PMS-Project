(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4933],{32951:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboards/scheduled-job",function(){return t(93361)}])},93361:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var i=t(85893),r=t(9008),l=t.n(r),s=t(67346),a=t(86886),o=t(15861);t(41664);var c=t(83454),d=function(){return c.env.PUBLIC_URL,(0,i.jsx)(a.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:(0,i.jsxs)(a.ZP,{item:!0,children:[(0,i.jsx)(o.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:"Scheduled Job"}),(0,i.jsx)(o.Z,{variant:"subtitle2",children:"Dashboard / Scheduled Job"})]})})},m=t(69598),h=t(65582),x=t(1573),p=t(66242),j=t(67294);t(92077);var u=t(45697),g=t.n(u),Z=t(2734),y=t(78445),b=t(67720),f=t(72882),v=t(7906),C=t(53184),w=t(53816),k=t(53252),P=t(295),N=t(87357),E=t(47171);let S=(e,n)=>e.filter(e=>{let t=!0;return n.status&&e.status!==n.status&&(t=!1),t}),W=(e,n,t)=>e.slice(n*t,n*t+t),F=e=>{let{scheduledJobList:n,handleOpen:t}=e,[r,l]=(0,j.useState)(0),[s,a]=(0,j.useState)(5),[c,d]=(0,j.useState)({status:null}),m=(e,n)=>{l(n)},h=e=>{a(parseInt(e.target.value))},x=S(n,c),u=W(x,r,s);return(0,Z.Z)(),(0,i.jsxs)(p.Z,{children:[(0,i.jsx)(y.Z,{title:"Scheduled Job"}),(0,i.jsx)(b.Z,{}),(0,i.jsx)(f.Z,{children:(0,i.jsxs)(v.Z,{children:[(0,i.jsx)(C.Z,{children:(0,i.jsxs)(w.Z,{children:[(0,i.jsx)(k.Z,{align:"left",children:"No."}),(0,i.jsx)(k.Z,{align:"left",children:"Job Name"}),(0,i.jsx)(k.Z,{align:"left",children:"Component Code"}),(0,i.jsx)(k.Z,{align:"left",children:"Department"}),(0,i.jsx)(k.Z,{align:"left",children:"System"}),(0,i.jsx)(k.Z,{align:"left",children:"Component Name"}),(0,i.jsx)(k.Z,{align:"left",children:"Part"})]})}),(0,i.jsx)(P.Z,{children:u.map((e,n)=>(0,i.jsxs)(w.Z,{hover:!0,onClick:()=>t(e,n),children:[(0,i.jsx)(k.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:n+1})}),(0,i.jsx)(k.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.jobName})}),(0,i.jsx)(k.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.componentCode})}),(0,i.jsx)(k.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.department})}),(0,i.jsx)(k.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.system})}),(0,i.jsx)(k.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.component})}),(0,i.jsx)(k.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.part})})]},e.id))})]})}),(0,i.jsx)(N.Z,{p:2,children:(0,i.jsx)(E.Z,{component:"div",count:x.length,onPageChange:m,onRowsPerPageChange:h,page:r,rowsPerPage:s,rowsPerPageOptions:[5,10,25,30]})})]})};F.propTypes={scheduledJobList:g().array.isRequired},F.defaultProps={scheduledJobList:[]};var _=t(93946),B=t(44267),D=t(11057),I=t(83419),R=t(50657);t(87998);var J=t(98236),O=t(51446);function U(e){let{onClose:n,selectedValue:t,open:r,handleUpdate:l,confirmUpdate:s}=e,c=()=>{n(t)};return(0,i.jsx)(R.Z,{onClose:c,open:r,maxWidth:"md",children:(0,i.jsx)("div",{children:(0,i.jsxs)(p.Z,{children:[(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"2% 2% 2% 3%"},children:[(0,i.jsx)(o.Z,{align:"left",variant:"h3",style:{width:"100%",height:"100%",fontWeight:"bold"},sx:{fontSize:{xs:"15px",sm:"25px"}},children:"Scheduled Job Details"}),(0,i.jsx)(_.Z,{align:"right",onClick:c,variant:"contained",color:"primary",style:{height:"50%",backgroundColor:"#FF5AD9"},children:(0,i.jsx)(I.Z,{fontSize:"small",style:{color:"white"}})})]}),(0,i.jsx)(b.Z,{}),(0,i.jsxs)(B.Z,{children:[(0,i.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row",gap:"5%",padding:"1%"},children:[(0,i.jsx)(o.Z,{variant:"subtitle2",sx:{display:{xs:"none",sm:"block"},width:"50%"},children:(0,i.jsxs)(a.ZP,{container:!0,spacing:0,alignItems:"stretch",children:[(0,i.jsx)(J.Z,{title:"Job Name:",value:t.jobName,handleEntryUpdate:e=>l("jobName",e)}),(0,i.jsx)(O.Z,{title:"Component Code:",value:t.componentCode}),(0,i.jsx)(O.Z,{title:"Department:",value:t.department})]})}),(0,i.jsx)(o.Z,{variant:"subtitle2",sx:{display:{xs:"none",sm:"block"},width:"50%"},children:(0,i.jsxs)(a.ZP,{container:!0,spacing:0,alignItems:"stretch",children:[(0,i.jsx)(O.Z,{title:"System:",value:t.system}),(0,i.jsx)(O.Z,{title:"Component:",value:t.component}),(0,i.jsx)(O.Z,{title:"Part:",value:t.part})]})}),(0,i.jsx)(o.Z,{variant:"subtitle2",sx:{display:{xs:"block",sm:"none"},width:"100%"},children:(0,i.jsxs)(a.ZP,{container:!0,spacing:0,alignItems:"stretch",children:[(0,i.jsx)(J.Z,{title:"Job Name:",value:t.jobName,handleEntryUpdate:e=>l("jobName",e)}),(0,i.jsx)(O.Z,{title:"Component Code:",value:t.componentCode}),(0,i.jsx)(O.Z,{title:"Department:",value:t.department}),(0,i.jsx)(O.Z,{title:"System:",value:t.system}),(0,i.jsx)(O.Z,{title:"Component Name:",value:t.component}),(0,i.jsx)(O.Z,{title:"Part:",value:t.part})]})})]}),(0,i.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row",gap:"5%",padding:"1%",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(D.Z,{variant:"contained",color:"primary",style:{width:"45%"},children:"Approve"}),(0,i.jsx)(D.Z,{variant:"contained",color:"primary",style:{width:"45%",backgroundColor:"#FF5AD9"},onClick(){s(0),c()},children:"Update"})]})]})]})})})}t(83454).env.PUBLIC_URL,U.propTypes={onClose:g().func.isRequired,open:g().bool.isRequired,selectedValue:g().string.isRequired,shipName:g().string.isRequired};var L=function(){let[e,n]=(0,j.useState)([{jobName:"Replace",componentCode:"41040-10190",department:"Engine",system:"Main Engine",component:"Oil Filter",part:"Element Kit"},{jobName:"Replace",componentCode:"F4202-16000",department:"Engine",system:"Main Engine",component:"Oil Filter",part:"Gasket"},{jobName:"Check And Drain Water",componentCode:"35740-02100",department:"Engine",system:"Main Engine",component:"Oil System",part:"Cartridge Assembly"},{jobName:"Drain Water",componentCode:"41062-02103",department:"Engine",system:"Main Engine",component:"Fuel Filter",part:"Cartridge"},{jobName:"Check and Replace",componentCode:"41040-10190",department:"Engine",system:"Main Engine",component:"Oil Filter",part:"Element Kit"}]),[t,r]=(0,j.useState)(!1),[l,s]=(0,j.useState)({jobName:"Check and Replace",componentCode:"41040-10190",department:"Engine",system:"Main Engine",component:"Oil Filter",part:"Element Kit"}),[a,o]=(0,j.useState)(0),c=(e,n)=>{s(e),o(n),r(!0)},d=e=>{r(!1),s(e)},m=(e,n)=>{s(t=>({...t,[e]:n}))},h=()=>{n(e=>{let n=[...e];return n[a]=l,n})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p.Z,{children:(0,i.jsx)(F,{scheduledJobList:e,handleOpen:c})}),(0,i.jsx)(U,{selectedValue:l,open:t,onClose:d,handleUpdate:m,confirmUpdate:h})]})};function M(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l(),{children:(0,i.jsx)("title",{children:"Scheduled Job"})}),(0,i.jsx)(m.Z,{children:(0,i.jsx)(d,{})}),(0,i.jsx)(h.Z,{maxWidth:"lg",children:(0,i.jsx)(a.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(L,{})})})}),(0,i.jsx)(x.Z,{})]})}M.getLayout=e=>(0,i.jsx)(s.Z,{children:e});var q=M},98236:function(e,n,t){"use strict";var i=t(85893),r=t(86886),l=t(87357),s=t(50135),a=t(93946),o=t(83419);t(41664);var c=t(87998),d=t(67294),m=t(17176);let h=e=>{let{title:n,value:t,handleEntryUpdate:h,gridSizes:x=[6,6,5,6,6,7],typeIsNumber:p=!1}=e,[j,u]=(0,d.useState)(!1),[g,Z]=(0,d.useState)(t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{item:!0,xs:x[0],sm:x[1],md:x[2],textAlign:{sm:"left"},children:(0,i.jsx)(l.Z,{pr:3,pb:2,minHeight:"5vh",children:n})}),(0,i.jsx)(r.ZP,{item:!0,xs:x[3],sm:x[4],md:x[5],children:(0,i.jsxs)(l.Z,{minHeight:"5vh",children:[(0,i.jsx)("div",{style:{display:j?"none":"block"},onClick:()=>u(e=>!e),children:(0,i.jsx)(c.Z,{color:"black",width:"100%",children:(0,i.jsx)("b",{children:t})})}),(0,i.jsxs)("div",{style:{display:j?"block":"none"},children:[(0,i.jsx)(s.Z,{sx:{width:{xs:"60%",md:"76%"},paddingBottom:"2%"},required:!0,id:"standard-required",variant:"standard",defaultValue:t,onChange:e=>Z(e.target.value),type:p?"number":"text"}),(0,i.jsx)(a.Z,{sx:{width:{xs:"20%",md:"12%"},paddingBottom:"2%"},onClick(){u(!1),h(g)},children:(0,i.jsx)(m.Z,{})}),(0,i.jsx)(a.Z,{sx:{width:{xs:"20%",md:"12%"},paddingBottom:"2%"},onClick:()=>u(!1),children:(0,i.jsx)(o.Z,{})})]})]})})]})};n.Z=h},51446:function(e,n,t){"use strict";var i=t(85893),r=t(86886),l=t(87357);t(41664);var s=t(87998);t(67294);let a=e=>{let{title:n,value:t,gridSizes:a=[6,6,5,6,6,7]}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{item:!0,xs:a[0],sm:a[1],md:a[2],textAlign:{sm:"left"},children:(0,i.jsx)(l.Z,{pr:3,pb:2,minHeight:"5vh",children:n})}),(0,i.jsx)(r.ZP,{item:!0,xs:a[3],sm:a[4],md:a[5],children:(0,i.jsx)(l.Z,{minHeight:"5vh",children:(0,i.jsx)(s.Z,{color:"black",width:"100%",children:(0,i.jsx)("b",{children:t})})})})]})};n.Z=a},87998:function(e,n,t){"use strict";var i=t(85893),r=t(45697),l=t.n(r),s=t(90948),a=t(86010);let o=(0,s.ZP)("span")(e=>{let{theme:n}=e;return"\n      display: inline-block;\n      align-items: center;\n\n      &.flexItem {\n        display: inline-flex;\n      }\n      \n      &.MuiText {\n\n        &-black {\n          color: ".concat(n.palette.common.black,"\n        }\n\n        &-primary {\n          color: ").concat(n.palette.primary.main,"\n        }\n        \n        &-secondary {\n          color: ").concat(n.palette.secondary.main,"\n        }\n        \n        &-success {\n          color: ").concat(n.palette.success.main,"\n        }\n        \n        &-warning {\n          color: ").concat(n.palette.warning.main,"\n        }\n              \n        &-error {\n          color: ").concat(n.palette.error.main,"\n        }\n        \n        &-info {\n          color: ").concat(n.palette.info.main,"\n        }\n      }\n")}),c=e=>{let{className:n,color:t="secondary",flex:r,children:l,...s}=e;return(0,i.jsx)(o,{className:(0,a.Z)("MuiText-"+t,{flexItem:r}),...s,children:l})};c.propTypes={children:l().node,className:l().string,color:l().oneOf(["primary","secondary","error","warning","success","info","black"])},n.Z=c}},function(e){e.O(0,[2456,896,5951,4738,1133,135,456,1529,8977,659,687,7171,217,8955,9774,2888,179],function(){return e(e.s=32951)}),_N_E=e.O()}]);