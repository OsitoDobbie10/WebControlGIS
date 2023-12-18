import {create} from "zustand";
import {MostrarUsuarios,editarUsuarios} from "../index";
export const UseUsuarioStore = create((set,get)=>({
    idusuario:null,
    usuarios: [],
    showUsers: async()=>{
        const reponse = await MostrarUsuarios();
        set({usuarios:reponse});
        if(Response){
            set({idusuario:reponse.id});
            return reponse;
        }
        else{
            return [];
        }
        
    },
    editarmonedauser:async(p)=>{
        await editarUsuarios(p);
        const {showUsers} = get();
        set(showUsers);
    }
})); 