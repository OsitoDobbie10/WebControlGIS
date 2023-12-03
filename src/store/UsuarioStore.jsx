import {create} from "zustand";
import {MostrarUsuarios,editarUsuarios} from "../index";
export const UseUsuarioStore = create((set,get)=>({
    usuarios: [],
    showUsers: async()=>{
        const reponse = await MostrarUsuarios();
        set({usuarios:reponse});
        return reponse;
    },
    editarmonedauser:async(p)=>{
        await editarUsuarios(p);
        const {showUsers} = get();
        set(showUsers);
    }
})); 