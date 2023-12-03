import { create } from "zustand";
import {InsertarCategorias,MostrarCategorias,EditarCategorias,BorrarCategorias} from "../index";

export const UseCategorias = create((set,get)=>({
    datacategorias: [],
    mostrarcategorias: async(p)=>{
    const mostrar = await MostrarCategorias(p);
    set({datacategorias:mostrar});
    return mostrar;},
    insertarcategorias: async(p)=>{
        await InsertarCategorias(p);
        const {mostrarcategorias} = get();
        set(mostrarcategorias(p))
    },
    editarcategorias:async(p)=>{
        await EditarCategorias(p);
        const {mostrarcategorias} = get();
        set(mostrarcategorias(p)); 
    },
    eliminarcategorias: async(p)=>{
        await BorrarCategorias(p);
        const {mostrarcategorias} = get();
        location.reload();
        set(mostrarcategorias(p));
    }

}))