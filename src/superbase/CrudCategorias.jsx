import {supabase2} from "../index";
import Swal from "sweetalert2";
export const InsertarCategorias = async(p)=>{
   try {
    const {data,error} = await supabase2.from("categorias").insert(p).select();
    if(error){
        Swal.fire({
          icon: "error",
          title: "Fallo...",
          text:"Ya existe un registro con la base de datos" + p.categorias,
          timer: 1500,
          footer:`<a href="">Agrega una nueva descripcion..<a/>`
        });
    }
    if(data){
        Swal.fire({
            position:"top-end",
            icon: "success",
            title: "Datos Guardados",
            showConfirmButton: false,
            timer: 1500,
          });
      }
   } catch (error) {
    alert(error.error_description || error.message + "insertar categorias")
   }

}

export const MostrarCategorias = async(p)=>{
    try {
        const{data} = await supabase2.from("categorias").select().eq("idusuario",p.idusario).eq("tipo",p.tipo).order("id",{ascending:true});
        return data;
    } catch (error) {
        alert("Error al mostrar las categorias");
    }
}

export const BorrarCategorias = async(p)=>{
    try {
        const {error} = await supabase2.from("categorias").delete().eq("idusuario",p.idusuario).eq("id",p.id);
        if(error){
            alert("error al eliminar",error);
        }
    } catch (error) {
        alert(error.error_description || error.message + "eliminar categorias")   
    }
}

export const EditarCategorias = async(p)=>{
    try {
        const {data,error} = await supabase2.from("categorias").update().eq("idusuario",p.idusuario).eq("id",p.id);
        if(error){
            alert("error al editar",error)
        }
    } catch (error) {
        alert(error.error_description || error.message + "editar");
        
    }
}