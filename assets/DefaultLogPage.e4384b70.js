import{E as o,Q as a}from"./ExampleComponent.81e39780.js";import{u as n}from"./payload-store.237ec135.js";import{_ as s,B as r,W as p,C as m,D as c,E as l,S as d}from"./index.5f6306cc.js";import"./render.85a8d868.js";const u=r({name:"DefaultLogPage",components:{ExampleComponent:o},setup(){return{payloadStore:n()}},mounted(){this.payloadStore.updateByteBits([{bytesIndex:[0],bitsIndex:[0],value:"0"},{bytesIndex:[0],bitsIndex:[6,7],value:"1"}])},unmounted(){this.payloadStore.$reset()}});function i(e,f,_,x,y,g){const t=p("example-component");return m(),c(a,{class:"row items-center justify-evenly"},{default:l(()=>[d(t,{title:"Default Log",active:""})]),_:1})}var $=s(u,[["render",i]]);export{$ as default};
