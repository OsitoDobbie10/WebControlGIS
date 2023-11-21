import {MyRoutes} from "./index"
import {ThemeProvider} from "styled-components"
import {UseContext1} from "./index"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useQuery } from "@tanstack/react-query";
import {UseUsuarioStore} from "./index"
function App() {
    const {changeTheme} = UseContext1()
    const {showUsers} = UseUsuarioStore();
    const {isLoading,isError,data} = useQuery({queryKey:["Mostrar usuarios"],queryFn:()=>showUsers()});
    if(isLoading){
        return <h1>Cargando...</h1>
    }
    if(isError){
        return <h1>Errore...</h1>
    }
  
return (
<>
<ThemeProvider theme={changeTheme}>
<MyRoutes data={data}/>
<ReactQueryDevtools initialIsOpen={true}/>
</ThemeProvider>
</>

)
}

export default App
