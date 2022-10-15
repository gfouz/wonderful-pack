import{j as o,r as a,F as i,a as s,s as n}from"./index.1cf69feb.js";import{t as l}from"./constants.c1eecf01.js";import{C as m}from"./Toast.04994ca2.js";import{D as f}from"./SubmitButton.cfb19273.js";import{C as d,F as p}from"./Card.282e01ce.js";import{E as r,S as c,G as u,a as x,b}from"./SearchPlus.413b24de.js";import{U as g}from"./Updater.1b8c08c9.js";import{C as h}from"./Creator.fe38f423.js";import{b as y}from"./StyledLabel.9d006209.js";import"./store.92adffe8.js";import"./chakra-ui-checkbox.esm.c85d60d2.js";import"./index.esm.5ce669bf.js";import"./StatusHandler.030b3462.js";import"./ErrorWarning.e1fd16fa.js";import"./TextInput.e8c80f6a.js";const e=[{option:"a\xF1adir",icon:o(r,{}),comp:o(h,{url:"finalidades"})},{option:"mostrar",icon:o(c,{}),comp:o(u,{url:"finalidades",queryKey:"finalidades-all"})},{option:"buscar",icon:o(x,{}),comp:o(b,{allnames:"finalidades"})},{option:"actualizar",icon:o(r,{}),comp:o(g,{url:"finalidades"})}];function z(){const t=localStorage.getItem("jwt");return a.exports.useEffect(()=>{t&&(y.defaults.headers.common.jwt=t)},[]),o(i,{children:s(v,{children:[o(m,{linear:l.green,color:"#ffffff"}),o(f,{children:o(d,{name:"finalidades",options:e,children:o(p,{options:e})})})]})})}const v=n.div`
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
