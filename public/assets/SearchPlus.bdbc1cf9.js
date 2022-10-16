var O=Object.defineProperty;var z=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var L=(r,a,n)=>a in r?O(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,b=(r,a)=>{for(var n in a||(a={}))T.call(a,n)&&L(r,n,a[n]);if(z)for(var n of z(a))B.call(a,n)&&L(r,n,a[n]);return r};import{u as G}from"./chakra-ui-checkbox.esm.81782b43.js";import{h as V,o as q,z as K,r as t,d as y,c as m,E as N,s as v,j as c,F as A,a as o,R as D,G as M,a1 as j,a2 as Q,a3 as W}from"./index.cd855817.js";import{u as I,S as H}from"./StatusHandler.f06412e9.js";import{c as R,d as F,S as J}from"./StyledLabel.b53e3e2c.js";import{u as P,c as U,s as X}from"./store.3b893529.js";import{I as Y}from"./ErrorWarning.8a17f604.js";function g(){return g=Object.assign||function(r){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},g.apply(this,arguments)}function Z(r,a){if(r==null)return{};var n={},i=Object.keys(r),e,l;for(l=0;l<i.length;l++)e=i[l],!(a.indexOf(e)>=0)&&(n[e]=r[e]);return n}var ee=["spacing","children"],ge=V(function(r,a){var n=q("Switch",r),i=K(r),e=i.spacing,l=e===void 0?"0.5rem":e,p=i.children,u=Z(i,ee),d=G(u),f=d.state,s=d.getInputProps,S=d.getCheckboxProps,w=d.getRootProps,_=d.getLabelProps,k=t.exports.useMemo(function(){return g({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0},n.container)},[n.container]),C=t.exports.useMemo(function(){return g({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},n.track)},[n.track]),h=t.exports.useMemo(function(){return g({userSelect:"none",marginStart:l},n.label)},[l,n.label]);return t.exports.createElement(y.label,g({},w(),{className:m("chakra-switch",r.className),__css:k}),t.exports.createElement("input",g({className:"chakra-switch__input"},s({},a))),t.exports.createElement(y.span,g({},S(),{className:"chakra-switch__track",__css:C}),t.exports.createElement(y.span,{__css:n.thumb,className:"chakra-switch__thumb","data-checked":N(f.isChecked),"data-hover":N(f.isHovered)})),p&&t.exports.createElement(y.span,g({className:"chakra-switch__label"},_(),{__css:h}),p))});function se({data:r}){const a=P(U),n=P(X),i=e=>{a.setStack(e),n.setOption("actualizar")};return c(A,{children:c(re,{children:Array.isArray(r)?r==null?void 0:r.map((e,l)=>c("ul",{className:"list",onClick:()=>i(e),children:o("li",{className:e!=null&&e.enabled?"list__item":"disabled",children:[o("p",{children:[" ",(e==null?void 0:e.name)&&`nombre: ${e==null?void 0:e.name}`]}),o("p",{children:[" ",(e==null?void 0:e.ci)&&`dni: ${e==null?void 0:e.ci}`]}),o("p",{children:[" ",(e==null?void 0:e.tome)&&`tomo: ${e==null?void 0:e.tome}`]}),o("p",{children:[" ",(e==null?void 0:e.folio)&&`folio: ${e==null?void 0:e.folio}`]}),o("p",{children:[" ",(e==null?void 0:e.email)&&`correo: ${e==null?void 0:e.email}`," "]}),o("p",{children:[" ",(e==null?void 0:e.price)&&`precio: ${e==null?void 0:e.price}`]}),o("p",{children:[" ",(e==null?void 0:e.range)&&`rango: ${e==null?void 0:e.range}`]}),o("p",{children:[" ",(e==null?void 0:e.phone)&&`tel: ${e==null?void 0:e.phone}`]}),o("p",{children:[" ",(e==null?void 0:e.enabled)==="true"?"Estado: habilitado":"Estado: desabilitado"]})]})},l)):c("p",{className:"default-message",children:"no data available"})})})}const re=v.div`
  width: 100%;
  margin: 2em 0;
  padding: 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .default-message {
    color: #ff0000;
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
  }

  .list {
    cursor: pointer;
    width: 320px;
    padding: 1em;
    margin: 0.1em;
    border-radius: 10px;
    background-color: #e7e9eb;
  }
  .list__item {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.7em;

    padding: 0.7em;
    color: #009966;
    text-align: left;
    list-style-type: none;
  }
  .disabled {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.7em;

    padding: 0.7em;
    color: #999999;
    text-align: left;
    list-style-type: none;
  }

  .list:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.05, 0.9, 1);
    }
    40% {
      transform: scale3d(0.85, 1.05, 1);
    }
    50% {
      transform: scale3d(1.05, 0.9, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;function xe(r){var f,s;const[a,n]=t.exports.useState(""),{url:i,queryKey:e}=r,{data:l,isLoading:p,isError:u}=I(e,()=>F(i)),d=((s=(f=l==null?void 0:l.response)==null?void 0:f.data)==null?void 0:s.message)||(l==null?void 0:l.message);return D.useEffect(()=>{R(d,n)},[d]),o(ne,{children:[u&&c("div",{children:"An error ocurred..."}),p&&o("div",{children:[c(M,{size:"sm",color:"white"}),c(j,{color:"white",children:"Loading..."})]}),c(se,{data:l==null?void 0:l.result}),a&&c(H,{message:a})]})}const ne=v.div`
  width: 100%;
`,ae=({data:r})=>{const a=r==null?void 0:r.map(h=>h.name),[n,i]=t.exports.useState([""]),[e,l]=t.exports.useState(0),[p,u]=t.exports.useState(!1),[d,f]=t.exports.useState(""),[s,S]=t.exports.useState(),w=h=>{const x=h.target.value.toLowerCase();if(f(x),x.length>1){const E=a==null?void 0:a.filter($=>($==null?void 0:$.toLowerCase().indexOf(x))>-1);i(E),u(!0)}else u(!1)},_=h=>{i([]),f(h.target.innerHTML),u(!1)},k=h=>{if(h.keyCode===38){if(e===0)return;l(e-1)}else if(h.keyCode===40){if(e-1===n.length)return;l(e+1)}else h.keyCode===13&&(f(n[e]),l(0),u(!1))},C=()=>c("ul",{className:"suggestions",children:n==null?void 0:n.map((h,x)=>c("li",{className:x===e?"active":"",onClick:E=>_(E),style:{listStyleType:"none",cursor:"pointer"},children:h},x))});return t.exports.useEffect(()=>{S(r==null?void 0:r.find(h=>h.name===d))},[d]),o(oe,{children:[c(Y,{className:"searchbox__input",type:"text",value:d,variant:"flushed",onChange:w,onKeyDown:k}),p&&c(C,{}),!p&&c(le,{children:c("ul",{className:"list",children:o("li",{className:"list__item",children:[o("span",{children:[" ",(s==null?void 0:s.name)&&`Nombre: ${s==null?void 0:s.name}`]}),o("span",{children:[" ",(s==null?void 0:s.ci)&&`Carnet: ${s==null?void 0:s.ci}`]}),o("span",{children:[" ",(s==null?void 0:s.tome)&&`Tomo: ${s==null?void 0:s.tome}`]}),o("span",{children:[" ",(s==null?void 0:s.folio)&&`Folio: ${s==null?void 0:s.folio}`]}),o("span",{children:[" ",(s==null?void 0:s.email)&&`Correo: ${s==null?void 0:s.email}`," "]}),o("span",{children:[" ",(s==null?void 0:s.price)&&`Precio: ${s==null?void 0:s.price}`]}),o("span",{children:[" ",(s==null?void 0:s.range)&&`Rango: ${s==null?void 0:s.range}`]}),o("span",{children:[" ",(s==null?void 0:s.phone)&&`Tel: ${s==null?void 0:s.phone}`]}),o("span",{children:[" ",(s==null?void 0:s.address)&&`domicilio: ${s==null?void 0:s.address}`]}),o("span",{children:[" ",(s==null?void 0:s.enabled)&&(s==null?void 0:s.enabled)===!0&&"Estado: habilitado"]})]})})})]})},oe=v.div`
.suggestions {
  color: #0F5BFF;
  font-weight: bolder;
}
`,le=v.div`
  margin: 1em 0;
  .list {
    display: flex;
    flex-direction: column;
  }
  .list__item {
    list-style-type: none;
    span {
      display: block;
    }
    font-style: italic;
    font-weight: bolder;
  }
`;function ve(r){const{allnames:a}=r,[n,i]=t.exports.useState(""),{data:e,isError:l,isLoading:p}=I("all-names",()=>F(a)),u=e==null?void 0:e.result,d=(e==null?void 0:e.message)||e;return t.exports.useEffect(()=>{R(d,i)},[d]),c(A,{children:c(Q,{p:"1em",children:o(W,{children:[c(J,{m:"0.5em 0",color:"#009966",upper:!0,children:"B\xFAsqueda por nombre."}),c(ae,{data:u}),o(te,{children:[l&&c("div",{children:"An error ocurred..."}),p&&o("div",{children:[c(M,{size:"sm",color:"white"}),c(j,{color:"white",children:"Loading..."})]}),n&&c(H,{message:n})]})]})})})}const te=v.div`
  width: 100%;
`;function be(r){return t.exports.createElement("svg",b({viewBox:"0 0 576 512",width:r.width||"1em",length:r.height||"auto"},r),t.exports.createElement("path",{fill:r.color,d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}))}function ye(r){return t.exports.createElement("svg",b({viewBox:"0 0 512 512",width:r.width||"1em",length:r.height||"auto"},r),t.exports.createElement("path",{fill:r.color,d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))}function Se(r){return t.exports.createElement("svg",b({viewBox:"0 0 512 512",width:r.width||"1em",length:r.height||"auto"},r),t.exports.createElement("path",{fill:r.color,d:"M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"}))}export{se as A,be as E,xe as G,Se as S,ye as a,ve as b,ge as c};
