import{j as o,r as a,F as s,a as i,s as n}from"./index.0a1fd8e2.js";import{t as m}from"./constants.c1eecf01.js";import{C as l}from"./Toast.43d36438.js";import{D as p}from"./SubmitButton.4ac3e961.js";import{C as c,F as d}from"./Card.bdbeb858.js";import{R as f,G as u}from"./Rocket.73e16626.js";import{E as e,S as b,G as x,a as g,b as h}from"./SearchPlus.b1f8ac3a.js";import{U as y}from"./Updater.48506556.js";import{C as v}from"./Creator.2dce0cfc.js";import{b as w}from"./StyledLabel.8b96bed9.js";import"./store.776d197a.js";import"./StatusHandler.ce7c9739.js";import"./chakra-ui-button.esm.203856fc.js";import"./chakra-ui-checkbox.esm.dde300a3.js";import"./index.esm.8980f8df.js";import"./ErrorWarning.5bf6ef0a.js";import"./TextInput.1a30d100.js";const r=[{option:"a\xF1adir",icon:o(e,{}),comp:o(v,{url:"estados"})},{option:"mostrar",icon:o(b,{}),comp:o(x,{url:"estados",queryKey:"all-estados"})},{option:"buscar",icon:o(g,{}),comp:o(h,{allnames:"estados"})},{option:"habilitados",icon:o(f,{}),comp:o(u,{queryKey:"estados-enabled",url:"estados/enabled/true"})},{option:"actualizar",icon:o(e,{}),comp:o(y,{url:"estados"})}];function L(){const t=localStorage.getItem("jwt");return a.exports.useEffect(()=>{t&&(w.defaults.headers.common.jwt=t)},[]),o(s,{children:i(j,{children:[o(l,{linear:m.green,color:"#ffffff"}),o(p,{children:o(c,{name:"estados",options:r,children:o(d,{options:r})})})]})})}const j=n.div`
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
`;export{L as default};
