import {MyRoutes} from "./index"
import {ThemeProvider} from "styled-components"
import {UseContext1} from "./index"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useQuery } from "@tanstack/react-query";
import {UseUsuarioStore,Light,Dark,LoaderSpinner} from "./index";
function App() {
    const {showUsers,usuarios} = UseUsuarioStore();
    const {theme,setThem} = UseContext1();
    const tema = usuarios.tema ==="0"?"light":"dark";
    const changeTheme = tema === "light" ? Light : Dark;
    const {isLoading,isError,data} = useQuery({queryKey:["Mostrar"],queryFn:()=>showUsers()});
   if(isLoading){
        return <LoaderSpinner/>
    }
    if(isError){
        return <h1>Error...</h1>
        
    }
return (
<>
<ThemeProvider theme={changeTheme}>
<MyRoutes data={usuarios}/>
<ReactQueryDevtools initialIsOpen={true}/>
</ThemeProvider>
</>

)
}

export default App;
