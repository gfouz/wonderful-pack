import{j as o,r as a,F as i,a as s,s as n}from"./index.cd855817.js";import{t as l}from"./constants.c1eecf01.js";import{C as m}from"./Toast.7a72855a.js";import{D as f}from"./SubmitButton.0c7ba62a.js";import{C as d,F as p}from"./Card.2fe35139.js";import{E as r,S as c,G as u,a as x,b}from"./SearchPlus.bdbc1cf9.js";import{U as g}from"./Updater.2a0c4878.js";import{C as h}from"./Creator.53d8bda5.js";import{b as y}from"./StyledLabel.b53e3e2c.js";import"./store.3b893529.js";import"./chakra-ui-checkbox.esm.81782b43.js";import"./index.esm.6af966ec.js";import"./StatusHandler.f06412e9.js";import"./ErrorWarning.8a17f604.js";import"./TextInput.dd6a4a67.js";const e=[{option:"a\xF1adir",icon:o(r,{}),comp:o(h,{url:"finalidades"})},{option:"mostrar",icon:o(c,{}),comp:o(u,{url:"finalidades",queryKey:"finalidades-all"})},{option:"buscar",icon:o(x,{}),comp:o(b,{allnames:"finalidades"})},{option:"actualizar",icon:o(r,{}),comp:o(g,{url:"finalidades"})}];function z(){const t=localStorage.getItem("jwt");return a.exports.useEffect(()=>{t&&(y.defaults.headers.common.jwt=t)},[]),o(i,{children:s(v,{children:[o(m,{linear:l.green,color:"#ffffff"}),o(f,{children:o(d,{name:"finalidades",options:e,children:o(p,{options:e})})})]})})}const v=n.div`
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
`;export{z as default};
