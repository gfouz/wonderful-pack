var A=Object.defineProperty,B=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var p=(a,t,e)=>t in a?A(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,b=(a,t)=>{for(var e in t||(t={}))L.call(t,e)&&p(a,e,t[e]);if(h)for(var e of h(t))w.call(t,e)&&p(a,e,t[e]);return a},f=(a,t)=>B(a,H(t));import{s as z,r as S,j as o,F as C,a as i,a2 as c,a1 as I,a3 as T}from"./index.cd855817.js";import{u as g,c as U,s as D}from"./store.3b893529.js";import{u as E,a as M,F as O}from"./index.esm.6af966ec.js";import{S as R}from"./StatusHandler.f06412e9.js";import{p as V}from"./StyledLabel.b53e3e2c.js";import{T as v}from"./TextInput.dd6a4a67.js";import{S as G}from"./SubmitButton.0c7ba62a.js";import{c as J}from"./SearchPlus.bdbc1cf9.js";function et(a){var u;const t="se requiere nombres compuestos sin n\xFAmeros",e=g(U),x=g(D),{stack:r}=e,{url:F,msg:N}=a,[l,y]=S.exports.useState(""),{register:d,handleSubmit:j,formState:{errors:k}}=E(),s=M(m=>V(m,F,r.id)),q=async m=>{s.mutateAsync(m)},n=((u=s==null?void 0:s.data)==null?void 0:u.message)||(s==null?void 0:s.data);return S.exports.useEffect(()=>{n&&y(n),n==="updated"&&x.setOption("mostrar")},[n]),o(C,{children:i("form",{onSubmit:j(q),children:[o(c,{p:"2em",children:o(I,{size:"md",color:"#009966",children:r.name})}),o(c,{p:"1em",children:i(T,{children:[o(K,{children:"Actualice nombre"}),o(v,{info:t,required:!0,label:"name",errors:k,register:d,defaultValue:r.name})]})}),i(c,{children:[o(O,{htmlFor:"enabled",m:"0 0 0 2em",color:"#333333",children:"Deshabilitar o habilitar"}),o(J,f(b({},d("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(r.enabled)}))]}),o(G,{buttonstate:s==null?void 0:s.isLoading}),l&&o(R,{message:l})]})})}const K=z.h4`
  color: #888888;
  font-weight: bolder;
`;export{et as U};