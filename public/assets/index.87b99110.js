import{j as o,r as i,F as s,a,s as p}from"./index.0a1fd8e2.js";import{t as n}from"./constants.c1eecf01.js";import{C as m}from"./Toast.43d36438.js";import{D as l}from"./SubmitButton.4ac3e961.js";import{C as c,F as f}from"./Card.bdbeb858.js";import{R as d,G as u}from"./Rocket.73e16626.js";import{E as r,S as b,G as x,a as g,b as h}from"./SearchPlus.b1f8ac3a.js";import{U as y}from"./Updater.48506556.js";import{C as v}from"./Creator.2dce0cfc.js";import{b as w}from"./StyledLabel.8b96bed9.js";import"./store.776d197a.js";import"./StatusHandler.ce7c9739.js";import"./chakra-ui-button.esm.203856fc.js";import"./chakra-ui-checkbox.esm.dde300a3.js";import"./index.esm.8980f8df.js";import"./ErrorWarning.5bf6ef0a.js";import"./TextInput.1a30d100.js";const e=[{option:"a\xF1adir",icon:o(r,{}),comp:o(v,{url:"propositos"})},{option:"mostrar",icon:o(b,{}),comp:o(x,{url:"propositos",queryKey:"propositos"})},{option:"buscar",icon:o(g,{}),comp:o(h,{allnames:"propositos"})},{option:"habilitados",icon:o(d,{}),comp:o(u,{queryKey:"propositos-enabled",url:"propositos/enabled/true"})},{option:"actualizar",icon:o(r,{}),comp:o(y,{url:"propositos"})}];function L(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(w.defaults.headers.common.jwt=t)},[]),o(s,{children:a(j,{children:[o(m,{linear:n.green,color:"#ffffff"}),o(l,{children:o(c,{name:"provincia",options:e,children:o(f,{options:e})})})]})})}const j=p.div`
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
