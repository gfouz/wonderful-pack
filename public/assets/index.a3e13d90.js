var Q=Object.defineProperty,W=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var B=(t,o,r)=>o in t?Q(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,A=(t,o)=>{for(var r in o||(o={}))V.call(o,r)&&B(t,r,o[r]);if(L)for(var r of L(o))X.call(o,r)&&B(t,r,o[r]);return t},v=(t,o)=>W(t,J(o));import{j as e,F as g,s as k,r as a,R as Y,a as b,H as P,a2 as U,a3 as ee,G as te,a1 as re}from"./index.1cf69feb.js";import{t as oe}from"./constants.c1eecf01.js";import{C as se}from"./Toast.04994ca2.js";import{S as H,D as ae}from"./SubmitButton.cfb19273.js";import{C as ne,F as ie}from"./Card.282e01ce.js";import{R as le,G as ce}from"./Rocket.51104c79.js";import{c as ue,A as de,E as R,S as me,G as pe,a as he,b as fe}from"./SearchPlus.413b24de.js";import{u as G,c as be,s as Se}from"./store.92adffe8.js";import{S as N}from"./chakra-ui-select.esm.c6f4c64e.js";import{u as _,a as M}from"./index.esm.5ce669bf.js";import{u as z,S as ge}from"./StatusHandler.030b3462.js";import{d as q,p as xe,S as p,i as F,a as ye,e as we,f as Ae,b as Ee}from"./StyledLabel.9d006209.js";import{T,I as D,E as I}from"./ErrorWarning.e1fd16fa.js";import{C as ze}from"./CodeBranch.3f7731d7.js";import"./chakra-ui-button.esm.52b76647.js";import"./chakra-ui-checkbox.esm.c85d60d2.js";function K({list:t,register:o,label:r,required:s}){return e(g,{children:e(N,v(A({},o(r,{required:s})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(t)&&t.map((l,u)=>e("option",{value:l.id,children:l.name},u))}))})}const Ce=["ok","updated","enabled","associated","created","accepted","not-authorized","bad-request","Bad Request","Forbidden","Network Error","unprocessable","Unprocessable-data","not-found","Not Found","found by id","gotten-by-id"];function Z({message:t}){const[o,r]=a.exports.useState("");return a.exports.useEffect(()=>{Ce.map(s=>{switch(t){case s:r(s);break;default:{r(t);break}}})},[t]),e(g,{children:e(ve,{children:e("p",{className:t,children:o})})})}const ve=k.div`
  margin: 2em;
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
  p {
    font-size: 0.7em;
  }
  .ok {
    color: green;
  }
  .accepted {
    color: green;
  }
  .not-authorized {
    color: red;
  }
  .not-found {
    color: #222222;
  }
  .bad-request {
    color: red;
  }
  .unprocessable {
    color: yellow;
  }
  .enabled {
    color: #446344;
  }
`;function Fe(t){return a.exports.createElement("svg",A({viewBox:"0 0 576 512",width:t.width||"1em",length:t.height||"auto"},t),a.exports.createElement("path",{fill:t.color,d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}))}function ke(t){return a.exports.createElement("svg",A({viewBox:"0 0 640 512",width:t.width||"1em",length:t.height||"auto"},t),a.exports.createElement("path",{fill:t.color,d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}))}const $=({label:t,register:o,required:r,errors:s,defaultValue:l,info:u})=>{const[c,n]=Y.useState(!1),h=()=>n(!c);return b(g,{children:[e(T,{label:u,hasArrow:!0,arrowSize:15,children:e(D,A({size:"sm",type:c?"text":"password",cursor:"pointer",variant:"flushed",defaultValue:l},o(t,{required:r})))}),e("div",{style:{margin:"1em 0"},onClick:h,children:c?e(Fe,{}):e(ke,{})}),e(I,{label:t,errors:s,info:u})]})},O=({register:t,errors:o,defaultValue:r,info:s})=>b(g,{children:[e(T,{label:s,hasArrow:!0,arrowSize:15,children:e(D,A({size:"sm",type:"email",cursor:"pointer",variant:"flushed",defaultValue:r},t("email",{required:!0,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})))}),e(I,{label:"email",errors:o,m:"0 2em",info:s})]});function qe(t){var w;const o=G(be),r=G(Se),{stack:s}=o,{setOption:l}=r;a.exports.useState("");const[u,c]=a.exports.useState(""),[n,h]=a.exports.useState(""),{register:i,handleSubmit:E,formState:{errors:S}}=_(),x="/rols/enabled/true",{data:f}=z("enabled-rolls",()=>q(x)),d=M(C=>xe(C,t.url,s.id),{retry:2}),y=(w=d==null?void 0:d.data)==null?void 0:w.message;return a.exports.useEffect(()=>{y&&c(y),y==="updated"&&l("mostrar"),h(s.name)},[y,s]),e(g,{children:e("form",{onSubmit:E(async C=>{d.mutateAsync(C)}),children:b(P,{direction:"column",p:"0 1em",children:[e(p,{color:"#009966",m:"1em 0",children:"Actualizar usuario"}),e(p,{capit:!0,children:"Correo electr\xF3nico."}),e(O,{info:F.email,register:i,errors:S}),e(p,{capit:!0,children:"Escriba una contrase\xF1a."}),e($,{label:"password",register:i,errors:S,required:!0}),e(p,{color:"#009966",capit:!0,children:"Seleccione un rol"}),e(K,{list:f==null?void 0:f.result,label:"rolId",register:i,required:!0}),e(I,{label:"rolId",errors:S,info:F.select}),b(U,{m:"2em 0",children:[e(p,{capit:!0,color:"#444444",children:"Deshabilitar o habilitar."}),e(ue,v(A({defaultChecked:Boolean(s.enabled)},i("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]}),e(H,{buttonstate:d==null?void 0:d.isLoading}),u&&e(Z,{message:u})]})})})}const Ie="http://localhost:5000",Le=ye.create({baseURL:Ie,withCredentials:!1});Le.defaults.headers.common["Content-Type"]="application/json";function Be(t){var x;const{path:o}=t,[r,s]=a.exports.useState("");a.exports.useState([]);const{register:l,handleSubmit:u,formState:{errors:c}}=_(),n="/rols/enabled/true",{data:h}=z("all-enabled-rolls",()=>q(n)),i=M(f=>we(o,f)),E=(x=i==null?void 0:i.data)==null?void 0:x.message;return a.exports.useEffect(()=>{s(E)},[E]),e(g,{children:e("form",{onSubmit:u(async f=>{i==null||i.mutateAsync(f)}),children:b(P,{direction:"column",children:[e(p,{color:"#009966",m:"1em 0",upper:!0,children:"A\xF1adir usuario"}),e(p,{capit:!0,children:"Correo electr\xF3nico."}),e(O,{register:l,errors:c,info:F.email}),e(p,{capit:!0,children:"Escriba contrase\xF1a."}),e($,{label:"password",register:l,errors:c,required:!0}),e(p,{color:"#009966",capit:!0,children:"Seleccione rol de usuario."}),e(K,{list:h==null?void 0:h.result,label:"rolId",register:l,required:!0}),c.rolId&&e("span",{style:{color:"red"},children:"Field is required"}),e(H,{buttonstate:i==null?void 0:i.isLoading}),r&&e(Z,{message:r})]})})})}function Re(){var d,y;const t="users/rol",o="rols",[r,s]=a.exports.useState(""),[l,u]=a.exports.useState(""),{data:c}=z("rols-all",()=>q(o)),{data:n,isLoading:h,isError:i,refetch:E}=z("users-by-rols",()=>Ae(t,l));n==null||n.result;const S=c==null?void 0:c.result,x=((y=(d=n==null?void 0:n.response)==null?void 0:d.data)==null?void 0:y.message)||(n==null?void 0:n.message);a.exports.useEffect(()=>{s(x)},[x]);const f=m=>{var w;u((w=m==null?void 0:m.target)==null?void 0:w.value)};return a.exports.useEffect(()=>{E()},[l]),e(g,{children:e(U,{p:"1em",children:b(ee,{children:[e("label",{htmlFor:"association",children:e(p,{m:"2em 0",color:"#009966",children:"Buscar usuario por rols:"})}),e(N,{placeholder:"Select option",size:"xm",color:"#000000",onChange:m=>f(m),children:S==null?void 0:S.map((m,w)=>e("option",{value:m.id,children:m.email||m.name},w))}),b(Ge,{children:[i&&e("div",{children:"An error ocurred..."}),h&&b("div",{children:[e(te,{size:"sm",color:"white"}),e(re,{color:"white",children:"Loading..."})]}),e(de,{data:n==null?void 0:n.result}),r&&e(ge,{message:r})]})]})})})}const Ge=k.div`
  width: 100%;
`,j=[{option:"a\xF1adir",icon:e(R,{}),comp:e(Be,{path:"users"})},{option:"mostrar",icon:e(me,{}),comp:e(pe,{url:"users",queryKey:"all-users"})},{option:"buscar",icon:e(he,{}),comp:e(fe,{allnames:"users"})},{option:"habilitados",icon:e(le,{}),comp:e(ce,{queryKey:"users-enabled",url:"users/enabled/true"})},{option:"asociado",icon:e(ze,{}),comp:e(Re,{})},{option:"actualizar",icon:e(R,{}),comp:e(qe,{queryKey:"user-update",url:"users"})}];function Ye(){const t=localStorage.getItem("jwt");return a.exports.useEffect(()=>{t&&(Ee.defaults.headers.common.jwt=t)},[]),e(g,{children:b(je,{children:[e(se,{linear:oe.green,color:"#ffffff"}),e(ae,{children:e(ne,{name:"usuarios",options:j,children:e(ie,{options:j})})})]})})}const je=k.div`
  width: 100%;
  position: relative;
  background-color: #ffffff;
  .province {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .province__divider {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-grey {
    background-color: #3a3839;
  }
  .btn-backwards {
    align-self: flex-start;
    display: flex;
    text-transform: uppercase;
    font-weight: bolder;
    color: #0660b1;
    margin: 1em;
    span {
      position: relative;
      top: 0.5rem;
      left: 1rem;
      color: #009fff;
    }
  }
  .btn-backwards__text {
    font-weight: bolder;
    position: relative;
    top: 8px;
    left: 5px;
  }
`;export{Ye as default};
