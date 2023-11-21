import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import {SingUp,Home,Login,UseContext1,ErrorsingUp,Categorias,Layout2,Configuracion,Perfil, Mapa} from "../index"
export const MyRoutes = ()=>{
    const {data} = props;
    const {token} = UseContext1();
    const MyRuta = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
            errorElement: <Navigate to={"/"}/>
        },
        {
            path: "/SingUp",
            element:<SingUp/>
        },
        {
            path:"/ErrorSingUp",
            element: <ErrorsingUp/>
        },
        {
            path:'/Home',
           element:<Layout2/>,
           children:[
            {
                index:true,
                element: token ? <Home/> : <div>No encontrado</div>
            }
           ]
        },
        {
            path:"/categorias",
            element:<Layout2/>,
            children:[
                {
                    index:true,
                    element:<Categorias/>
                }
            ]
        },
        {
            path:"/configurar",
            element: <Layout2/>,
            children:[
                {
                    index:true,
                    element: <Configuracion data={data}/>
                }
            ]
        },
        {
            path:"/miperfil",
            element: <Layout2/>,
            children:[
                {
                    index:true,
                    element: <Perfil/>
                }
            ]
        }
       
    ])
    return(
        <RouterProvider router={MyRuta}/>
    )
}