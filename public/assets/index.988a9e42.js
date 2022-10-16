import{j as t,r as i,F as a,a as s,s as n}from"./index.cd855817.js";import{t as m}from"./constants.c1eecf01.js";import{C as l}from"./Toast.7a72855a.js";import{D as p}from"./SubmitButton.0c7ba62a.js";import{C as d,F as c}from"./Card.2fe35139.js";import{R as f,G as g}from"./Rocket.62c50808.js";import{E as e,S as u,G as b,a as x,b as h}from"./SearchPlus.bdbc1cf9.js";import{U as y}from"./Updater.2a0c4878.js";import{C as v}from"./Creator.53d8bda5.js";import{b as w}from"./StyledLabel.b53e3e2c.js";import"./store.3b893529.js";import"./StatusHandler.f06412e9.js";import"./chakra-ui-button.esm.cd5b4e33.js";import"./chakra-ui-checkbox.esm.81782b43.js";import"./index.esm.6af966ec.js";import"./ErrorWarning.8a17f604.js";import"./TextInput.dd6a4a67.js";const r=[{option:"a\xF1adir",icon:t(e,{}),comp:t(v,{url:"entidades-registro"})},{option:"mostrar",icon:t(u,{}),comp:t(b,{url:"entidades-registro",queryKey:"entidad-reg-all"})},{option:"buscar",icon:t(x,{}),comp:t(h,{allnames:"entidades-registro"})},{option:"habilitados",icon:t(f,{}),comp:t(g,{queryKey:"ent-reg-active",url:"entidades-registro/enabled/true"})},{option:"actualizar",icon:t(e,{}),comp:t(y,{url:"entidades-registro"})}];function N(){const o=localStorage.getItem("jwt");return i.exports.useEffect(()=>{o&&(w.defaults.headers.common.jwt=o)},[]),t(a,{children:s(E,{children:[t(l,{linear:m.green,color:"#ffffff"}),t(p,{children:t(d,{name:"Entidad registro",options:r,children:t(c,{options:r})})})]})})}const E=n.div`
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
