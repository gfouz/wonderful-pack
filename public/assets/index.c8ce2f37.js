import{j as o,r as a,F as i,a as s,s as n}from"./index.0a1fd8e2.js";import{t as l}from"./constants.c1eecf01.js";import{C as m}from"./Toast.43d36438.js";import{D as f}from"./SubmitButton.4ac3e961.js";import{C as d,F as p}from"./Card.bdbeb858.js";import{E as r,S as c,G as u,a as x,b}from"./SearchPlus.b1f8ac3a.js";import{U as g}from"./Updater.48506556.js";import{C as h}from"./Creator.2dce0cfc.js";import{b as y}from"./StyledLabel.8b96bed9.js";import"./store.776d197a.js";import"./chakra-ui-checkbox.esm.dde300a3.js";import"./index.esm.8980f8df.js";import"./StatusHandler.ce7c9739.js";import"./ErrorWarning.5bf6ef0a.js";import"./TextInput.1a30d100.js";const e=[{option:"a\xF1adir",icon:o(r,{}),comp:o(h,{url:"finalidades"})},{option:"mostrar",icon:o(c,{}),comp:o(u,{url:"finalidades",queryKey:"finalidades-all"})},{option:"buscar",icon:o(x,{}),comp:o(b,{allnames:"finalidades"})},{option:"actualizar",icon:o(r,{}),comp:o(g,{url:"finalidades"})}];function z(){const t=localStorage.getItem("jwt");return a.exports.useEffect(()=>{t&&(y.defaults.headers.common.jwt=t)},[]),o(i,{children:s(v,{children:[o(m,{linear:l.green,color:"#ffffff"}),o(f,{children:o(d,{name:"finalidades",options:e,children:o(p,{options:e})})})]})})}const v=n.div`
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
