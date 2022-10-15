import{j as t,r as i,F as a,a as s,s as n}from"./index.1cf69feb.js";import{t as m}from"./constants.c1eecf01.js";import{C as l}from"./Toast.04994ca2.js";import{D as p}from"./SubmitButton.cfb19273.js";import{C as d,F as c}from"./Card.282e01ce.js";import{R as f,G as g}from"./Rocket.51104c79.js";import{E as e,S as u,G as b,a as x,b as h}from"./SearchPlus.413b24de.js";import{U as y}from"./Updater.1b8c08c9.js";import{C as v}from"./Creator.fe38f423.js";import{b as w}from"./StyledLabel.9d006209.js";import"./store.92adffe8.js";import"./StatusHandler.030b3462.js";import"./chakra-ui-button.esm.52b76647.js";import"./chakra-ui-checkbox.esm.c85d60d2.js";import"./index.esm.5ce669bf.js";import"./ErrorWarning.e1fd16fa.js";import"./TextInput.e8c80f6a.js";const r=[{option:"a\xF1adir",icon:t(e,{}),comp:t(v,{url:"entidades-registro"})},{option:"mostrar",icon:t(u,{}),comp:t(b,{url:"entidades-registro",queryKey:"entidad-reg-all"})},{option:"buscar",icon:t(x,{}),comp:t(h,{allnames:"entidades-registro"})},{option:"habilitados",icon:t(f,{}),comp:t(g,{queryKey:"ent-reg-active",url:"entidades-registro/enabled/true"})},{option:"actualizar",icon:t(e,{}),comp:t(y,{url:"entidades-registro"})}];function N(){const o=localStorage.getItem("jwt");return i.exports.useEffect(()=>{o&&(w.defaults.headers.common.jwt=o)},[]),t(a,{children:s(E,{children:[t(l,{linear:m.green,color:"#ffffff"}),t(p,{children:t(d,{name:"Entidad registro",options:r,children:t(c,{options:r})})})]})})}const E=n.div`
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
