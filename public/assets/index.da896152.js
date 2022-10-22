import{j as t,r as i,F as a,a as s,s as n}from"./index.0a1fd8e2.js";import{t as m}from"./constants.c1eecf01.js";import{C as l}from"./Toast.43d36438.js";import{D as p}from"./SubmitButton.4ac3e961.js";import{C as d,F as c}from"./Card.bdbeb858.js";import{R as f,G as g}from"./Rocket.73e16626.js";import{E as e,S as u,G as b,a as x,b as h}from"./SearchPlus.b1f8ac3a.js";import{U as y}from"./Updater.48506556.js";import{C as v}from"./Creator.2dce0cfc.js";import{b as w}from"./StyledLabel.8b96bed9.js";import"./store.776d197a.js";import"./StatusHandler.ce7c9739.js";import"./chakra-ui-button.esm.203856fc.js";import"./chakra-ui-checkbox.esm.dde300a3.js";import"./index.esm.8980f8df.js";import"./ErrorWarning.5bf6ef0a.js";import"./TextInput.1a30d100.js";const r=[{option:"a\xF1adir",icon:t(e,{}),comp:t(v,{url:"entidades-registro"})},{option:"mostrar",icon:t(u,{}),comp:t(b,{url:"entidades-registro",queryKey:"entidad-reg-all"})},{option:"buscar",icon:t(x,{}),comp:t(h,{allnames:"entidades-registro"})},{option:"habilitados",icon:t(f,{}),comp:t(g,{queryKey:"ent-reg-active",url:"entidades-registro/enabled/true"})},{option:"actualizar",icon:t(e,{}),comp:t(y,{url:"entidades-registro"})}];function N(){const o=localStorage.getItem("jwt");return i.exports.useEffect(()=>{o&&(w.defaults.headers.common.jwt=o)},[]),t(a,{children:s(E,{children:[t(l,{linear:m.green,color:"#ffffff"}),t(p,{children:t(d,{name:"Entidad registro",options:r,children:t(c,{options:r})})})]})})}const E=n.div`
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
