import {supabase2} from "../index";
export const ObtenerIdAuthSupabase = async()=>{
    const {data:{session}} = await supabase2.auth.getSession();
    if(session!= null){
        const {user} = session;
        const IdauthSupabase = user.id;
        return IdauthSupabase;
    }
};
