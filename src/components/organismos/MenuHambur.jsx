import React from 'react'
import {UseContext1,Light,LinksArray,v} from "../../index"
import styled from 'styled-components';
import Logo from "../../assets/Logo1.jpg";
import { NavLink } from 'react-router-dom';
const MenuHambur = () => {
  const {openslider,SetOpenslider} = UseContext1();
  return (
    <Main>
     <button className='siderbutton'>
      {<v.iconoFlechabajo/>}
     </button>
    <Container>
      <div className='imgcontent'>
        <img className="imagen"src={Logo} alt="Logo" />
      </div>
      <h3 className='titutlo'>Menu</h3>
     <div className='iconos'>
     {
        LinksArray.map((link,index)=>{
          return <div key={index} className={openslider ? 'LinkContainer activate': 'LinkContainer'}>
                 <NavLink to={link.to} className={({isActivate})=>`link${isActivate? ` active`:``}`}>
                 <div className="linkin">{link.icon}</div>
                 <span className='Span'>{link.label}</span>
                </NavLink>
                </div>
        })
      }
     </div>
    </Container>
    </Main>
  )
}
const Container = styled.div`
color:black;
background-color: "rgb(255,255,255)";
position: fixed;
padding-top: 20px;
z-index: 100;
height: 100%;
.imgcontent{
  width: 100%;
}
.imgcontent>.imagen{
  width: 35px;
  height:35px;
  border-radius: 100%;
  display: block;
  margin:auto;
  transition: all 0.5s ease-in-out;
  transform: ${({openslider})=>(openslider ? `scale(0.7)`:`scale(1.5)`)} 
  rotate(${({theme})=>theme.logorotate});
  animation: flotar infinite 1.7s ease-in-out alternate;
  @keyframes flotar {
    0%{
      transform: translate(0, 0px);
    }
    50%{
      transform: translate(0, 4px);
    }
    100%{
      transform: translate(0, -0px);
    }
    
  }
}
.titutlo{
  margin-top:15px;
  text-align:center;
}
.iconos{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:8px;
  .link{
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:10px 10px 10px 10px;
    cursor:pointer;
    text-decoration:none;
    color:back;
    &.activate{
      color:yellow;
    }
  }
  .linkactive{
    color:yellow;
  }
  .linkactivate{
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:10px 10px 10px 10px;
    cursor:pointer;
    text-decoration:none;
    color:yellow;
  }
  .linkin{
    text-align: center;
    color: black;
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;
    svg{
      font-size:20px;
    }
  }
  .Span{
    text-align:center;
    text-decoration: none;
    color: black;
    font-size: 15px;
    font-weight: bold;
    &:hover{
      color:purple;
    }
  }
}
`;
const Main = styled.div`
.siderbutton{
  position: fixed;
  top: 70px;
  left:42px;

}
`
const divider = styled.div`
height: 1px;
width: 100%;
background-color: "#eaeaea";
margin:24px 0;
margin:${()=>v.lgSpacing} 0`
;

export default MenuHambur
