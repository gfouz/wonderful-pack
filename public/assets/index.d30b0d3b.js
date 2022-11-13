import{j as o,r as a,F as s,a as i,s as n}from"./index.f022ae99.js";import{t as m}from"./constants.c1eecf01.js";import{C as l}from"./Toast.70369b00.js";import{D as p}from"./SubmitButton.18840195.js";import{C as c,F as f}from"./Card.0351a09c.js";import{R as d,G as u}from"./Rocket.4f820f39.js";import{G as b}from"./Getter.1256fd36.js";import{U as x}from"./Updater.1312b582.js";import{C as g}from"./Creator.8626352d.js";import{E as e,S as h,a as y,G as v}from"./SearchPlus.aa76161b.js";import{b as w}from"./StyledLabel.15a4e9de.js";import"./store.d72acdd4.js";import"./StatusHandler.6c4b40fd.js";import"./chakra-ui-button.esm.2a2eabde.js";import"./index.esm.35511c71.js";import"./TextInput.34f7b766.js";import"./ErrorWarning.c5617eea.js";import"./chakra-ui-checkbox.esm.4c8ea808.js";const r=[{option:"a\xF1adir",icon:o(e,{}),comp:o(g,{url:"estados"})},{option:"mostrar",icon:o(h,{}),comp:o(b,{url:"estados",queryKey:"all-estados"})},{option:"buscar",icon:o(y,{}),comp:o(v,{allnames:"estados"})},{option:"habilitados",icon:o(d,{}),comp:o(u,{queryKey:"estados-enabled",url:"estados/enabled/true"})},{option:"actualizar",icon:o(e,{}),comp:o(x,{url:"estados"})}];function N(){const t=localStorage.getItem("jwt");return a.exports.useEffect(()=>{t&&(w.defaults.headers.common.jwt=t)},[]),o(s,{children:i(j,{children:[o(l,{linear:m.green,color:"#ffffff"}),o(p,{children:o(c,{name:"estados",options:r,children:o(f,{options:r})})})]})})}const j=n.div`
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
