import{j as o,r as i,F as a,a as s,s as n}from"./index.f022ae99.js";import{t as l}from"./constants.c1eecf01.js";import{C as m}from"./Toast.70369b00.js";import{D as f}from"./SubmitButton.18840195.js";import{C as p,F as d}from"./Card.0351a09c.js";import{G as c}from"./Getter.1256fd36.js";import{U as u}from"./Updater.1312b582.js";import{C as x}from"./Creator.8626352d.js";import{E as r,S as g,a as b,G as h}from"./SearchPlus.aa76161b.js";import{b as y}from"./StyledLabel.15a4e9de.js";import"./store.d72acdd4.js";import"./StatusHandler.6c4b40fd.js";import"./index.esm.35511c71.js";import"./TextInput.34f7b766.js";import"./ErrorWarning.c5617eea.js";import"./chakra-ui-checkbox.esm.4c8ea808.js";const e=[{option:"a\xF1adir",icon:o(r,{}),comp:o(x,{url:"finalidades"})},{option:"mostrar",icon:o(g,{}),comp:o(c,{url:"finalidades",queryKey:"finalidades-all"})},{option:"buscar",icon:o(b,{}),comp:o(h,{allnames:"finalidades"})},{option:"actualizar",icon:o(r,{}),comp:o(u,{url:"finalidades"})}];function B(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(y.defaults.headers.common.jwt=t)},[]),o(a,{children:s(v,{children:[o(m,{linear:l.green,color:"#ffffff"}),o(f,{children:o(p,{name:"finalidades",options:e,children:o(d,{options:e})})})]})})}const v=n.div`
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
`;export{B as default};
