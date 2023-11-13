import { useContext } from "react"
import {ThemeContext} from "../context/ContextLogin1";
const UseContext1 = () => {
    const context = useContext(ThemeContext);
  return context;
}

export default UseContext1;
