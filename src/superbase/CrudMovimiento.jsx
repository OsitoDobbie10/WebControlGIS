import {supabase2} from "../index";
import Swal from "sweetalert2";
export const InsertarMovimiento = async(p)=>{
    try {
        const { data, error } = await supabase2
          .from("movimientos")
          .insert(p)
          .select();
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ya existe un registro con " + p.descripcion,
            footer: '<a href="">Agregue una nueva descripcion</a>',
          });
        }
        if (data) {
          Swal.fire({
            icon: "success",
            title: "Registrado",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        alert(error.error_description || error.message + " insertar movimientos");
      }
}

export const EliminarMovimiento = async(p)=>{
    try {
        const { error } = await supabase2
          .from("movimientos")
          .delete()
          .eq("id", p.id);
        if (error) {
          alert("Error al eliminar", error);
        }
      } catch (error) {
        alert(error.error_description || error.message + " eliminar movimientos");
      }
}
//llamado a funciones hechas en el editor de SQL 
export const MostrarMovimientosPorMesAño = async(p)=>{
    try {
      const { data } = await supabase2.rpc("mmovimientosmesanio", {
        anio: p.año,
        mes: p.mes,
        iduser: p.idusuario,
        tipocategoria: p.tipocategoria,
      });
      return data;
    } catch (error) {}
  }