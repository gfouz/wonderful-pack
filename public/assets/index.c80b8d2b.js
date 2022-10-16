import{j as o,r as a,F as i,a as s,s as l}from"./index.cd855817.js";import{t as n}from"./constants.c1eecf01.js";import{C as m}from"./Toast.7a72855a.js";import{D as p}from"./SubmitButton.0c7ba62a.js";import{C as c,F as f}from"./Card.2fe35139.js";import{R as d,G as u}from"./Rocket.62c50808.js";import{E as t,S as b,G as x,a as g,b as h}from"./SearchPlus.bdbc1cf9.js";import{U as y}from"./Updater.2a0c4878.js";import{C as v}from"./Creator.53d8bda5.js";import{b as w}from"./StyledLabel.b53e3e2c.js";import"./store.3b893529.js";import"./StatusHandler.f06412e9.js";import"./chakra-ui-button.esm.cd5b4e33.js";import"./chakra-ui-checkbox.esm.81782b43.js";import"./index.esm.6af966ec.js";import"./ErrorWarning.8a17f604.js";import"./TextInput.dd6a4a67.js";const e=[{option:"a\xF1adir",icon:o(t,{}),comp:o(v,{url:"rols"})},{option:"mostrar",icon:o(b,{}),comp:o(x,{url:"rols",queryKey:"rols"})},{option:"buscar",icon:o(g,{}),comp:o(h,{allnames:"rols"})},{option:"habilitados",icon:o(d,{}),comp:o(u,{queryKey:"rols-enabled",url:"rols/enabled/true"})},{option:"actualizar",icon:o(t,{}),comp:o(y,{url:"rols"})}];function N(){const r=localStorage.getItem("jwt");return a.exports.useEffect(()=>{r&&(w.defaults.headers.common.jwt=r)},[]),o(i,{children:s(j,{children:[o(m,{linear:n.green,color:"#ffffff"}),o(p,{children:o(c,{name:"rol",options:e,children:o(f,{options:e})})})]})})}const j=l.div`
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
