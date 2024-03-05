(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7479],{38321:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/equipment/stock",function(){return n(65725)}])},65725:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var i=n(85893),r=n(9008),s=n.n(r),l=n(67346),a=n(86886),o=n(15861),c=n(11057),d=n(41664),x=n.n(d),u=n(47017),h=n(83454),m=function(){let e=h.env.PUBLIC_URL||"";return(0,i.jsxs)(a.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,i.jsxs)(a.ZP,{item:!0,children:[(0,i.jsx)(o.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:"Stock"}),(0,i.jsx)(o.Z,{variant:"subtitle2",children:"Equipment / Stock"})]}),(0,i.jsx)(a.ZP,{item:!0,children:(0,i.jsx)(x(),{href:e+"/batera/equipment/stock/add-stock",passHref:!0,children:(0,i.jsx)(c.Z,{sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,i.jsx)(u.Z,{fontSize:"small"}),children:"Add Stock"})})})]})},p=n(69598),g=n(65582),j=n(1573),Z=n(66242),f=n(67294);n(92077);var y=n(45697),v=n.n(y),P=n(2734),b=n(78445),C=n(67720),k=n(72882),q=n(7906),w=n(53184),S=n(53816),E=n(53252),O=n(295),B=n(87357),F=n(47171);let W=(e,t)=>e.filter(e=>{let n=!0;return t.status&&e.status!==t.status&&(n=!1),n}),_=(e,t,n)=>e.slice(t*n,t*n+n),I=e=>{let{stockList:t,handleOpen:n}=e,[r,s]=(0,f.useState)(0),[l,a]=(0,f.useState)(5),[c,d]=(0,f.useState)({status:null}),x=(e,t)=>{s(t)},u=e=>{a(parseInt(e.target.value))},h=W(t,c),m=_(h,r,l);return(0,P.Z)(),(0,i.jsxs)(Z.Z,{children:[(0,i.jsx)(b.Z,{title:"Stock"}),(0,i.jsx)(C.Z,{}),(0,i.jsx)(k.Z,{children:(0,i.jsxs)(q.Z,{children:[(0,i.jsx)(w.Z,{children:(0,i.jsxs)(S.Z,{children:[(0,i.jsx)(E.Z,{align:"left",children:"No."}),(0,i.jsx)(E.Z,{align:"left",children:"Equipment Code"}),(0,i.jsx)(E.Z,{align:"left",children:"Category"}),(0,i.jsx)(E.Z,{align:"left",children:"Equipment"}),(0,i.jsx)(E.Z,{align:"left",children:"Department"}),(0,i.jsx)(E.Z,{align:"left",children:"Status Part"})]})}),(0,i.jsx)(O.Z,{children:m.map((e,t)=>(0,i.jsxs)(S.Z,{hover:!0,onClick:()=>n(e),children:[(0,i.jsx)(E.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:t+1})}),(0,i.jsx)(E.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.equipmentCode})}),(0,i.jsx)(E.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.category})}),(0,i.jsx)(E.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.equipment})}),(0,i.jsx)(E.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.department})}),(0,i.jsx)(E.Z,{align:"left",children:(0,i.jsx)(o.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.statusPart})})]},t))})]})}),(0,i.jsx)(B.Z,{p:2,children:(0,i.jsx)(F.Z,{component:"div",count:h.length,onPageChange:x,onRowsPerPageChange:u,page:r,rowsPerPage:l,rowsPerPageOptions:[5,10,25,30]})})]})};I.propTypes={stockList:v().array.isRequired},I.defaultProps={stockList:[]};var z=n(93946),D=n(44267),N=n(83419),A=n(50657);n(87998);var U=n(51446),L=n(28558);function T(e){let{onClose:t,selectedValue:n,open:r,handleUpdate:s,confirmUpdate:l}=e,d=()=>{t(n)},x=[6,6,5,6,6,7];return(0,i.jsx)(A.Z,{onClose:d,open:r,maxWidth:"md",children:(0,i.jsx)("div",{children:(0,i.jsxs)(Z.Z,{children:[(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"2% 2% 2% 3%"},children:[(0,i.jsx)(o.Z,{align:"left",variant:"h3",style:{width:"100%",height:"100%",fontWeight:"bold"},sx:{fontSize:{xs:"15px",sm:"25px"}},children:"Stock Details"}),(0,i.jsx)(z.Z,{align:"right",onClick:d,variant:"contained",color:"primary",style:{height:"50%",backgroundColor:"#FF5AD9"},children:(0,i.jsx)(N.Z,{fontSize:"small",style:{color:"white"}})})]}),(0,i.jsx)(C.Z,{}),(0,i.jsxs)(D.Z,{children:[(0,i.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row",gap:"5%",padding:"1%"},children:[(0,i.jsx)(o.Z,{variant:"subtitle2",sx:{display:{xs:"none",sm:"block"},width:"50%"},children:(0,i.jsxs)(a.ZP,{container:!0,spacing:0,alignItems:"stretch",children:[(0,i.jsx)(U.Z,{title:"Equipment Code:",value:n.equipmentCode}),(0,i.jsx)(U.Z,{title:"Category:",value:n.category}),(0,i.jsx)(U.Z,{title:"Equipment:",value:n.equipment})]})}),(0,i.jsx)(o.Z,{variant:"subtitle2",sx:{display:{xs:"none",sm:"block"},width:"50%"},children:(0,i.jsxs)(a.ZP,{container:!0,spacing:0,alignItems:"stretch",children:[(0,i.jsx)(L.Z,{title:"Department:",value:n.department,handleEntryUpdate:e=>s("department",e),gridSizes:x}),(0,i.jsx)(U.Z,{title:"Status Part:",value:n.statusPart})]})}),(0,i.jsx)(o.Z,{variant:"subtitle2",sx:{display:{xs:"block",sm:"none"},width:"100%"},children:(0,i.jsxs)(a.ZP,{container:!0,spacing:0,alignItems:"stretch",children:[(0,i.jsx)(U.Z,{title:"Equipment Code:",value:n.equipmentCode,gridSizes:x}),(0,i.jsx)(U.Z,{title:"Category:",value:n.category,gridSizes:x}),(0,i.jsx)(U.Z,{title:"Equipment:",value:n.equipment,gridSizes:x}),(0,i.jsx)(L.Z,{title:"Department:",value:n.department,handleEntryUpdate:e=>s("department",e),gridSizes:x}),(0,i.jsx)(U.Z,{title:"Status Part:",value:n.statusPart,gridSizes:x})]})})]}),(0,i.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row",gap:"5%",padding:"1%",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(c.Z,{variant:"contained",color:"primary",style:{width:"45%"},onClick(){l(0),d()},children:"Update"}),(0,i.jsx)(c.Z,{variant:"contained",color:"primary",style:{width:"45%",backgroundColor:"#FF5AD9"},children:"Delete"})]})]})]})})})}n(83454).env.PUBLIC_URL,T.propTypes={onClose:v().func.isRequired,open:v().bool.isRequired};var H=function(){let[e,t]=(0,f.useState)([{equipmentCode:"41040-10190",category:"Oil Filter",equipment:"Element Kit",department:"Engine",statusPart:"On Board"},{equipmentCode:"F4202-16000",category:"Oil Filter",equipment:"Gasket",department:"Engine",statusPart:"Borrowing"},{equipmentCode:"35740-02100",category:"Oil System",equipment:"Cartridge Assembly",department:"Engine",statusPart:"Oredering"},{equipmentCode:"41062-02103",category:"Fuel Filter",equipment:"Cartridge",department:"Engine",statusPart:"On Board"},{equipmentCode:"41040-10190",category:"Oil Filter",equipment:"Element Kit",department:"Engine",statusPart:"Ordering"}]),[n,r]=(0,f.useState)(!1),[s,l]=(0,f.useState)({equipmentCode:"41040-10190",category:"Oil Filter",equipment:"Element Kit",department:"Engine",statusPart:"Ordering"}),[a,o]=(0,f.useState)(0),c=(e,t)=>{l(e),o(t),r(!0)},d=e=>{r(!1),l(e)},x=(e,t)=>{l(n=>({...n,[e]:t}))},u=()=>{t(e=>{let t=[...e];return t[a]=s,t})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Z.Z,{children:(0,i.jsx)(I,{stockList:e,handleOpen:c})}),(0,i.jsx)(T,{selectedValue:s,open:n,onClose:d,handleUpdate:x,confirmUpdate:u})]})};function R(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{children:(0,i.jsx)("title",{children:"Stock"})}),(0,i.jsx)(p.Z,{children:(0,i.jsx)(m,{})}),(0,i.jsx)(g.Z,{maxWidth:"lg",children:(0,i.jsx)(a.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(H,{})})})}),(0,i.jsx)(j.Z,{})]})}R.getLayout=e=>(0,i.jsx)(l.Z,{children:e});var G=R},28558:function(e,t,n){"use strict";var i=n(85893),r=n(86886),s=n(87357),l=n(50135);n(41664),n(87998),n(67294);let a=e=>{let{title:t,value:n,handleEntryUpdate:a,gridSizes:o=[6,6,5,6,6,7],options:c=[{text:"A",value:"A"},{text:"B",value:"B"}]}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{item:!0,xs:o[0],sm:o[1],md:o[2],textAlign:{sm:"left"},children:(0,i.jsx)(s.Z,{pr:3,pb:2,minHeight:"5vh",children:t})}),(0,i.jsx)(r.ZP,{item:!0,xs:o[3],sm:o[4],md:o[5],children:(0,i.jsx)(s.Z,{minHeight:"5vh",children:(0,i.jsx)("div",{children:(0,i.jsx)(l.Z,{id:"outlined-select-currency-native",select:!0,value:n,onChange(e){console.log("ON CHANGE Grid"),console.log(e.target.value),a(e.target.value)},SelectProps:{native:!0},size:"small",sx:{width:"100%",marginBottom:"5%"},children:c.map(e=>(0,i.jsx)("option",{value:e.value,children:e.text},e.text))})})})})]})};t.Z=a},51446:function(e,t,n){"use strict";var i=n(85893),r=n(86886),s=n(87357);n(41664);var l=n(87998);n(67294);let a=e=>{let{title:t,value:n,gridSizes:a=[6,6,5,6,6,7]}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{item:!0,xs:a[0],sm:a[1],md:a[2],textAlign:{sm:"left"},children:(0,i.jsx)(s.Z,{pr:3,pb:2,minHeight:"5vh",children:t})}),(0,i.jsx)(r.ZP,{item:!0,xs:a[3],sm:a[4],md:a[5],children:(0,i.jsx)(s.Z,{minHeight:"5vh",children:(0,i.jsx)(l.Z,{color:"black",width:"100%",children:(0,i.jsx)("b",{children:n})})})})]})};t.Z=a},87998:function(e,t,n){"use strict";var i=n(85893),r=n(45697),s=n.n(r),l=n(90948),a=n(86010);let o=(0,l.ZP)("span")(e=>{let{theme:t}=e;return"\n      display: inline-block;\n      align-items: center;\n\n      &.flexItem {\n        display: inline-flex;\n      }\n      \n      &.MuiText {\n\n        &-black {\n          color: ".concat(t.palette.common.black,"\n        }\n\n        &-primary {\n          color: ").concat(t.palette.primary.main,"\n        }\n        \n        &-secondary {\n          color: ").concat(t.palette.secondary.main,"\n        }\n        \n        &-success {\n          color: ").concat(t.palette.success.main,"\n        }\n        \n        &-warning {\n          color: ").concat(t.palette.warning.main,"\n        }\n              \n        &-error {\n          color: ").concat(t.palette.error.main,"\n        }\n        \n        &-info {\n          color: ").concat(t.palette.info.main,"\n        }\n      }\n")}),c=e=>{let{className:t,color:n="secondary",flex:r,children:s,...l}=e;return(0,i.jsx)(o,{className:(0,a.Z)("MuiText-"+n,{flexItem:r}),...l,children:s})};c.propTypes={children:s().node,className:s().string,color:s().oneOf(["primary","secondary","error","warning","success","info","black"])},t.Z=c}},function(e){e.O(0,[2456,896,5951,4738,1133,135,456,1529,8977,659,687,7171,8177,8955,9774,2888,179],function(){return e(e.s=38321)}),_N_E=e.O()}]);