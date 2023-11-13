import React from 'react';
import {LoginTempledes,UseContext1,Spinner} from '../index';
const Login = () => {
  const {intro,setIntro} = UseContext1();
  setTimeout(()=>{
    setIntro(false);
  },2500)
  if (intro) return <Spinner/>
  return (
    <>
    <LoginTempledes/>
    </>
  )
}

export default Login;
