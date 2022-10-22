import{j as o,r as a,F as s,a as n,s as m}from"./index.0a1fd8e2.js";import{b as c}from"./StyledLabel.8b96bed9.js";import{t as p}from"./constants.c1eecf01.js";import{C as l}from"./Toast.43d36438.js";import{D as f}from"./SubmitButton.4ac3e961.js";import{C as d,F as u}from"./Card.bdbeb858.js";import{R as b,G as v}from"./Rocket.73e16626.js";import{E as i,S as g,G as x,a as h,b as y}from"./SearchPlus.b1f8ac3a.js";import{U as w}from"./Updater.48506556.js";import{C as j}from"./Creator.2dce0cfc.js";import"./store.776d197a.js";import"./StatusHandler.ce7c9739.js";import"./chakra-ui-button.esm.203856fc.js";import"./chakra-ui-checkbox.esm.dde300a3.js";import"./index.esm.8980f8df.js";import"./ErrorWarning.5bf6ef0a.js";import"./TextInput.1a30d100.js";const t={id:"Escriba nro de Id",name:"Escriba un nombre de provincia."},e=[{option:"a\xF1adir",icon:o(i,{}),comp:o(j,{url:"provincias",msg:t.name})},{option:"mostrar",icon:o(g,{}),comp:o(x,{url:"provincias",queryKey:"provincias"})},{option:"buscar",icon:o(h,{}),comp:o(y,{allnames:"provincias"})},{option:"habilitados",icon:o(b,{}),comp:o(v,{queryKey:"provincias-enabled",url:"provincias/enabled/true"})},{option:"actualizar",icon:o(i,{}),comp:o(w,{url:"provincias",msg:t.name})}];function N(){const r=localStorage.getItem("jwt");return a.exports.useEffect(()=>{r&&(c.defaults.headers.common.jwt=r)},[]),o(s,{children:n(k,{children:[o(l,{linear:p.green,color:"#ffffff"}),o(f,{children:o(d,{name:"provincia",options:e,children:o(u,{options:e})})})]})})}const k=m.div`
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
