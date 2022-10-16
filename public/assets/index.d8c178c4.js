import{j as o,r as a,F as s,a as n,s as m}from"./index.cd855817.js";import{b as c}from"./StyledLabel.b53e3e2c.js";import{t as p}from"./constants.c1eecf01.js";import{C as l}from"./Toast.7a72855a.js";import{D as f}from"./SubmitButton.0c7ba62a.js";import{C as d,F as u}from"./Card.2fe35139.js";import{R as b,G as v}from"./Rocket.62c50808.js";import{E as i,S as g,G as x,a as h,b as y}from"./SearchPlus.bdbc1cf9.js";import{U as w}from"./Updater.2a0c4878.js";import{C as j}from"./Creator.53d8bda5.js";import"./store.3b893529.js";import"./StatusHandler.f06412e9.js";import"./chakra-ui-button.esm.cd5b4e33.js";import"./chakra-ui-checkbox.esm.81782b43.js";import"./index.esm.6af966ec.js";import"./ErrorWarning.8a17f604.js";import"./TextInput.dd6a4a67.js";const t={id:"Escriba nro de Id",name:"Escriba un nombre de provincia."},e=[{option:"a\xF1adir",icon:o(i,{}),comp:o(j,{url:"provincias",msg:t.name})},{option:"mostrar",icon:o(g,{}),comp:o(x,{url:"provincias",queryKey:"provincias"})},{option:"buscar",icon:o(h,{}),comp:o(y,{allnames:"provincias"})},{option:"habilitados",icon:o(b,{}),comp:o(v,{queryKey:"provincias-enabled",url:"provincias/enabled/true"})},{option:"actualizar",icon:o(i,{}),comp:o(w,{url:"provincias",msg:t.name})}];function N(){const r=localStorage.getItem("jwt");return a.exports.useEffect(()=>{r&&(c.defaults.headers.common.jwt=r)},[]),o(s,{children:n(k,{children:[o(l,{linear:p.green,color:"#ffffff"}),o(f,{children:o(d,{name:"provincia",options:e,children:o(u,{options:e})})})]})})}const k=m.div`
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
`;export{N as default};
