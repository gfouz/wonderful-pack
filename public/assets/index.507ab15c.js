import{j as o,r as a,F as s,a as n,s as m}from"./index.f022ae99.js";import{b as c}from"./StyledLabel.15a4e9de.js";import{t as p}from"./constants.c1eecf01.js";import{C as l}from"./Toast.70369b00.js";import{D as f}from"./SubmitButton.18840195.js";import{C as d,F as u}from"./Card.0351a09c.js";import{R as b,G as v}from"./Rocket.4f820f39.js";import{G as g}from"./Getter.1256fd36.js";import{U as x}from"./Updater.1312b582.js";import{C as h}from"./Creator.8626352d.js";import{E as i,S as y,a as w,G as j}from"./SearchPlus.aa76161b.js";import"./store.d72acdd4.js";import"./StatusHandler.6c4b40fd.js";import"./chakra-ui-button.esm.2a2eabde.js";import"./index.esm.35511c71.js";import"./TextInput.34f7b766.js";import"./ErrorWarning.c5617eea.js";import"./chakra-ui-checkbox.esm.4c8ea808.js";const t={id:"Escriba nro de Id",name:"Escriba un nombre de provincia."},e=[{option:"a\xF1adir",icon:o(i,{}),comp:o(h,{url:"provincias",msg:t.name})},{option:"mostrar",icon:o(y,{}),comp:o(g,{url:"provincias",queryKey:"provincias"})},{option:"buscar",icon:o(w,{}),comp:o(j,{allnames:"provincias"})},{option:"habilitados",icon:o(b,{}),comp:o(v,{queryKey:"provincias-enabled",url:"provincias/enabled/true"})},{option:"actualizar",icon:o(i,{}),comp:o(x,{url:"provincias",msg:t.name})}];function T(){const r=localStorage.getItem("jwt");return a.exports.useEffect(()=>{r&&(c.defaults.headers.common.jwt=r)},[]),o(s,{children:n(k,{children:[o(l,{linear:p.green,color:"#ffffff"}),o(f,{children:o(d,{name:"provincia",options:e,children:o(u,{options:e})})})]})})}const k=m.div`
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
`;export{T as default};
