import {supabase2,ObtenerIdAuthSupabase} from "../index";
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