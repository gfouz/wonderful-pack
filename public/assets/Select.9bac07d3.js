var s=Object.defineProperty,d=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var n=(r,e,o)=>e in r?s(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,c=(r,e)=>{for(var o in e||(e={}))h.call(e,o)&&n(r,o,e[o]);if(i)for(var o of i(e))u.call(e,o)&&n(r,o,e[o]);return r},l=(r,e)=>d(r,S(e));import{j as t,F as f}from"./index.f022ae99.js";import{S as x}from"./chakra-ui-select.esm.bc9f2787.js";function A({list:r,register:e,label:o,required:m}){return t(f,{children:t(x,l(c({},e(o,{required:m})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(r)&&r.map((a,p)=>t("option",{value:a.id,children:a.name},p))}))})}export{A as S};
