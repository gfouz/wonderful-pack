import{j as o,r as a,F as i,a as s,s as n}from"./index.1cf69feb.js";import{t as m}from"./constants.c1eecf01.js";import{C as l}from"./Toast.04994ca2.js";import{D as p}from"./SubmitButton.cfb19273.js";import{C as c,F as f}from"./Card.282e01ce.js";import{R as d,G as g}from"./Rocket.51104c79.js";import{E as t,S as u,G as b,a as x,b as h}from"./SearchPlus.413b24de.js";import{U as y}from"./Updater.1b8c08c9.js";import{C as v}from"./Creator.fe38f423.js";import{b as w}from"./StyledLabel.9d006209.js";import"./store.92adffe8.js";import"./StatusHandler.030b3462.js";import"./chakra-ui-button.esm.52b76647.js";import"./chakra-ui-checkbox.esm.c85d60d2.js";import"./index.esm.5ce669bf.js";import"./ErrorWarning.e1fd16fa.js";import"./TextInput.e8c80f6a.js";const e=[{option:"a\xF1adir",icon:o(t,{}),comp:o(v,{url:"organismos"})},{option:"mostrar",icon:o(u,{}),comp:o(b,{url:"organismos",queryKey:"all-organism"})},{option:"buscar",icon:o(x,{}),comp:o(h,{allnames:"organismos"})},{option:"habilitados",icon:o(d,{}),comp:o(g,{queryKey:"organismos-enabled",url:"organismos/enabled/true"})},{option:"actualizar",icon:o(t,{}),comp:o(y,{url:"organismos"})}];function B(){const r=localStorage.getItem("jwt");return a.exports.useEffect(()=>{r&&(w.defaults.headers.common.jwt=r)},[]),o(i,{children:s(j,{children:[o(l,{linear:m.green,color:"#ffffff"}),o(p,{children:o(c,{name:"Organismos",options:e,children:o(f,{options:e})})})]})})}const j=n.div`
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
`;export{B as default};