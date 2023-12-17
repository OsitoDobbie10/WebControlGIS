import {create} from "zustand";
import {v} from "../index"
export const UseOperaciones = create((set,get)=>({
    titulo: "i",
    titulosBTN: "Categorias ingresos",
    mes:null,
    year:null,
    setMes:(p)=>{
    set({mes:p})
    },
    setYear:(p)=>{
      set({year:p})
    },
    colorCategoria: ()=>v.colorIngresos,
    bgCategoerias: ()=>v.colorbgingresos,
    setTipo: (p)=>{
      set({titulo:p.tipo});
      set({titulosBTN: p.text});
      set({colorCategoria: p.color});
      set({bgCategoerias:p.bgcolor});
    }})); 