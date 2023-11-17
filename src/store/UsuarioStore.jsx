import {create} from "zustand";
import {MostrarUsuarios} from "../index";
export const UseUsuarioStore = create((set)=>({
    usuarios: [],
    showUsers: async()=>{
        const reponse = await MostrarUsuarios();
        set(()=>({usuarios:reponse}));
        return reponse;
    }
}));