import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import {UseContext1,v,LinksArray,SecondarylinksArray, SidebarCard} from '../../index';
const Slidebar = () => {
  const {openslider,SetOpenslider} = UseContext1();
  const click = ()=>{
    SetOpenslider(!openslider);
  }
  return (
    <Main isopen={openslider}>
      <button className='siderbutton' onClick={click}>
        {<v.flechaarribalarga/>}
      </button>
      <Container isopen={openslider} className={openslider ? "active": ""}>
      <div className="logocontent">
       <div className='imgcontent'>
         <img src={v.GIS} alt="Logo"/>
      </div>
      <h3>Menu</h3>
      </div>
      {
        LinksArray.map((link,index)=>{
          return <div 
                 className={openslider? "LinkContainer active" : "LinkContainer"}
                 key={index}>
                 <NavLink to={link.to} 
                 className={({isActive})=>`Links${isActive?` active`:``}`}>
                 <div className="linkincon">{link.icon}</div>
                 {openslider && <span className='Span'>{link.label}</span>}
                </NavLink>
                </div>
        })
      }
      <Divider/>
      {
        SecondarylinksArray.map((link,index)=>{
          return <div 
                 className={openslider? "LinkContainer active" : "LinkContainer"}
                 key={index}>
                 <NavLink to={link.to} 
                 className={({isActive})=>`Links${isActive?` active`:``}`}>
                 <div className="linkincon">{link.icon}</div>
                 {openslider && <span className='Span'>{link.label}</span>}
                </NavLink>
                </div>
        })
      }
      <Divider/>
      {
        openslider && <SidebarCard/>
      }
      </Container>
    </Main>
  )
}
const Container = styled.div`
color: ${(props)=>props.theme.text};
background-color: ${(props)=>props.theme.bg};
position: fixed;
padding-top: 20px;
z-index: 100;
height:100%;
width:75px;
transition: 0.3s ease-in-out;
overflow-y: auto;
overflow-x:hidden;
&::-webkit-scrollbar{
  width: 6px;
  border-radius: 10px;
}
&::-webkit-scrollbar-thumb{
  background-color: rgb(21 20 26/ 23%);
  border-radius: 10px;
}
&.active{
width: 230px;
}
.logocontent{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
.imgcontent{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  height: 50px;
  transform:  ${({ isopen }) => (isopen ? `scale(0.7)` : `scale(1.5)`)} rotate(${(props)=>props.theme.logorotate});

}
.imgcontent>img{
  width: 35px;
  height: 35px;
  animation:flotar 1.7s infinite ease-in-out alternate;
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

h3{
  display: ${({ isopen }) => (isopen ? `block` : `none`)};
}
.LinkContainer{
  margin: 4px 0;
  transition: all 0.3s;
  padding: 0 4%;
  position:relative;
  &:hover{
    background: ${(props)=>props.theme.bgAlpha};
  }
  .Links{
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: calc(${()=>v.smSpacing} - 2px) 0;
    color: ${(props)=>props.theme.text};
    height:50px;
   .Span{
    font-size:10px;
   }
   .linkincon{
    padding:${()=>v.smSpacing} ${()=>v.mdSpacing};
    display:flex;
    svg{
      font-size:25px;
    }
   }
   &.active{
    &::before{
    content:"";
    position:absolute;
    height:100%;
    background-color:purple;
    width:4px;
    border-radius:10px;
    left:0;
   }
   color:${(props)=>props.theme.bg5}
   }
  
  }
}

`
const Main = styled.div`
.siderbutton{
  position: fixed;
  top:80px;
  left: 20px;
  width:22px;
  height: 22px;
  border-radius: 50%;
  background: ${(props)=>props.theme.bgtgderecha};
  box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 200;
    transform: ${({ isopen }) =>
      isopen ? `translateX(162px) rotate(3.142rad)` : `initial`};
    color: ${(props) => props.theme.text};
}

` 
const Divider = styled.div`
height: 1px;
width: 100%;
background-color:purple;
margin:${()=>v.lgSpacing} 0;
`;
export default Slidebar
