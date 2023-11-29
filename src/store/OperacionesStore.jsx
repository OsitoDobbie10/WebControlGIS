import {create} from "zustand";
import {v} from "../index"
export const UseOperaciones = create((set,get)=>({
    titulo: "i",
    titulosBTN: "Categorias ingresos",
    colorCategoria: ()=>v.colorIngresos,
    bgCategoerias: ()=>v.colorbgingresos,
    setTipo: (p)=>{
      set({titulo:p});
      const {titulo} = get();
      set({titulosBTN: titulo == "i" ? "Categorias ingresos" : "Categorias egresos"});
      set({colorCategoria: titulo == "i" ? v.colorIngresos : v.colorGastos});
      set({bgCategoerias: titulo == "i" ? v.colorbgingresos : v.colorbgGastos});
    }}
    )); 