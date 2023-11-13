import {create} from "zustand";
import {MostrarUsuarios} from "../index";
export const UseUsuarioStore = create((get,set)=>({
    usuarios: [],
    showUsers: async()=>{
        const reponse = await MostrarUsuarios();
        set(()=>({usuarios:reponse}));
        return reponse;
    }
}));