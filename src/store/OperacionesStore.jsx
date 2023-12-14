import {create} from "zustand";
import {v} from "../index"
export const UseOperaciones = create((set,get)=>({
    titulo: "i",
    titulosBTN: "Categorias ingresos",
    colorCategoria: ()=>v.colorIngresos,
    bgCategoerias: ()=>v.colorbgingresos,
    setTipo: (p)=>{
      set({titulo:p.tipo});
      set({titulosBTN: p.text});
      set({colorCategoria: p.color});
      set({bgCategoerias:p.bgcolor});
    }})); 