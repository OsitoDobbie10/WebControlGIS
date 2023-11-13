import React from 'react';
import {UseContext1} from "../../index"
import "./Sucess.css"
const Success = (props) => {
    const {mensaje} = props; 
    const {animandoModal} = UseContext1();
  return (
    <div className='modal'>
       <h1 className={`mensajito ${animandoModal ? 'animar': 'cerrar'}`}>{mensaje}</h1>
    </div>
  )
}

export default Success;
