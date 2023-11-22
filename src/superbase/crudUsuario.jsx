import {supabase2,ObtenerIdAuthSupabase} from "../index";
import Swal from "sweetalert2";
export const InsertarUsuarios = async(p)=>{
    try {
        const {data} = await supabase2.from("Usuarios").insert(p).select();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const MostrarUsuarios = async()=>{
    try {
        const idaouthsupabase = await ObtenerIdAuthSupabase();
        const {error,data} = await supabase2.from("Usuarios").select().eq("idaouthsupabase",idaouthsupabase)
        if(error){
            alert("MostrarUusarios",error);
        }
        if(data){
            return data[0];
        }
    } catch (error) {
        alert(error.error_description || error.message + "MostrarUsuarios")
    }
}

export const editarUsuarios = async(p)=>{
    try {
        const { error } = await supabase2.from("Usuarios").update(p).eq("id", p.id);
        if (error) {
          alert("Error al editar usuarios", error);
        }
        Swal.fire({
          icon: "success",
          title: "Datos modificados",
          showConfirmButton: false,
          timer: 1500,
        });
    } catch (error) {
        alert(error.error_description || error.message + "editarUsuarios")
    }
}