var N=Object.defineProperty,P=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var j=(r,o,t)=>o in r?N(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,w=(r,o)=>{for(var t in o||(o={}))M.call(o,t)&&j(r,t,o[t]);if(T)for(var t of T(o))O.call(o,t)&&j(r,t,o[t]);return r},L=(r,o)=>P(r,V(o));import{j as e,F as S,a,r as I,a2 as c,a3 as d,s as Q}from"./index.0a1fd8e2.js";import{t as W}from"./constants.c1eecf01.js";import{C as J}from"./Toast.43d36438.js";import{S as _,D as X}from"./SubmitButton.4ac3e961.js";import{C as Y,F as Z}from"./Card.bdbeb858.js";import{R as ee,G as te}from"./Rocket.73e16626.js";import{c as re,E as B,S as oe,G as ae,a as ie,b as ne}from"./SearchPlus.b1f8ac3a.js";import{u as G,c as se,s as ce}from"./store.776d197a.js";import{u as $,a as D}from"./index.esm.8980f8df.js";import{u as v,S as K}from"./StatusHandler.ce7c9739.js";import{a as le,S as l,i as F,b as ue}from"./StyledLabel.8b96bed9.js";import{S as de}from"./chakra-ui-select.esm.0dd67711.js";import{T as U}from"./TextInput.1a30d100.js";import{T as me,I as pe,E as fe}from"./ErrorWarning.5bf6ef0a.js";import{G as he}from"./GetByParams.5587cd89.js";import{C as be}from"./CodeBranch.8109a713.js";import"./chakra-ui-button.esm.203856fc.js";import"./chakra-ui-checkbox.esm.dde300a3.js";const ge="http://localhost:5000",A=le.create({baseURL:ge,withCredentials:!1});A.defaults.headers.common["Content-Type"]="application/json";async function Se(r,o){try{const t=await A.post(r,o);return t==null?void 0:t.data}catch(t){return t}}async function ye(r,o,t){try{return(await A.put(`/${o}/${t}`,r)).data}catch(i){return i}}async function C(r){try{const o=await A.get(r),{data:t}=o;return t}catch(o){return o}}function E({list:r,register:o,label:t,required:i}){return e(S,{children:e(de,L(w({},o(t,{required:i})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(r)&&r.map((n,s)=>e("option",{value:n.id,children:n.name},s))}))})}const H=({label:r,register:o,required:t,errors:i,defaultValue:n,info:s})=>a(S,{children:[e(me,{label:s,hasArrow:!0,arrowSize:15,children:e(pe,w({size:"sm",type:"tel",cursor:"pointer",variant:"flushed",defaultValue:n},o(r,{required:t,pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im})))}),e(fe,{label:r,errors:i,info:s})]});function xe(r){var R;const o=G(se),t=G(ce),{stack:i}=o,{setOption:n}=t,[s,h]=I.exports.useState(""),{register:m,handleSubmit:k,formState:{errors:u}}=$(),g="/users/enabled/true",b="/entidades-registro/enabled/true",{data:y}=v("entidad-actived",()=>C(b)),{data:p}=v("users-act",()=>C(g)),f=D(q=>ye(q,r.url,i.id)),x=(R=f==null?void 0:f.data)==null?void 0:R.message;return I.exports.useEffect(()=>{x&&h(x),x==="updated"&&n("mostrar")},[x]),a(S,{children:[a("form",{onSubmit:k(async q=>{f.mutateAsync(q),console.log(q)}),children:[e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Actualice nombre"}),e(U,{info:F.name,required:!0,label:"name",register:m,errors:u,defaultValue:i.name})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Tel\xE9fono del funcionario de registro."}),e(H,{required:!0,info:F.tel,label:"phone",errors:u,register:m,defaultValue:i.phone})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(E,{list:y==null?void 0:y.result,label:"erId",register:m,required:!0}),u.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(E,{list:p==null?void 0:p.result,label:"userId",register:m,required:!0}),u.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),a(c,{m:"1em 2em",children:[e(l,{capit:!0,children:"Deshabilitar o habilitar"}),e(re,L(w({},m("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(i.enabled)}))]}),e(_,{buttonstate:f==null?void 0:f.isLoading})]}),s&&e(K,{message:s})]})}function qe(r){const{url:o}=r,[t,i]=I.exports.useState(""),{register:n,handleSubmit:s,formState:{errors:h}}=$(),m="/users/enabled/true",k="/entidades-registro/enabled/true",{data:u}=v("entidad-actived",()=>C(k)),{data:g}=v("users-act",()=>C(m)),b=D(p=>Se(o,p));return a(S,{children:[a("form",{onSubmit:s(async p=>{b.mutateAsync(p)}),children:[e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Nombre del funcionario"}),e(U,{info:F.name,required:!0,label:"name",register:n,errors:h})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Tel\xE9fono del funcionario"}),e(H,{required:!0,info:F.tel,label:"phone",errors:h,register:n})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(E,{list:u==null?void 0:u.result,label:"erId",register:n,required:!0}),h.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(E,{list:g==null?void 0:g.result,label:"userId",register:n,required:!0}),h.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(_,{buttonstate:b==null?void 0:b.isLoading})]}),t&&e(K,{message:t})]})}const z=[{option:"a\xF1adir",icon:e(B,{}),comp:e(qe,{url:"funcionarios-registro"})},{option:"mostrar",icon:e(oe,{}),comp:e(ae,{url:"funcionarios-registro",queryKey:"funcReg-all"})},{option:"buscar",icon:e(ie,{}),comp:e(ne,{allnames:"funcionarios-registro"})},{option:"habilitados",icon:e(ee,{}),comp:e(te,{queryKey:"funcReg-act",url:"funcionarios-registro/enabled/true"})},{option:"asociado",icon:e(be,{}),comp:e(he,{path:"funcionarios-registro/entidad-registro",attached:"entidades-registro",queryKey:"func-reg"})},{option:"actualizar",icon:e(B,{}),comp:e(xe,{url:"funcionarios-registro"})}];function Ne(){const r=localStorage.getItem("jwt");return I.exports.useEffect(()=>{r&&(ue.defaults.headers.common.jwt=r)},[]),e(S,{children:a(we,{children:[e(J,{linear:W.green,color:"#ffffff"}),e(X,{children:e(Y,{name:"Funcinario..regist",options:z,children:e(Z,{options:z})})})]})})}const we=Q.div`
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
`;export{Ne as default};
