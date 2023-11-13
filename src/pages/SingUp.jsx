import styled from "styled-components"
import {SingupTempledes,Spinner,UseContext1} from "../index"
const SingUp = () => {
  const {intro,setIntro} = UseContext1();
  setTimeout(()=>{
    setIntro(false);
  },2500)
  if (intro) return <Spinner/>
  return (
    <>
      <SingupTempledes/>
    </>
  )
}

export default SingUp;
