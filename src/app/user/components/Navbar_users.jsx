import React, { useState } from "react";
import styled from "styled-components"
import Burguerbttn from './Burguerbttn';
import MiLogo from './logo_user';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);
  const handleLogout = () => {
    // Eliminar token y datos de usuario del almacenamiento local
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setClicked(!clicked)
    window.location.href = '/';
  };

  return (
    <>
      <NavContainer>
          <header className="bg-gray-900 text-white fixed top-8 right-0 z-50">
            <div className={`links ${clicked ? 'active' : ''}`}>
              <div className="z-50">
                <a className='hover:underline text-white' onClick= {handleClick} href="/user/inicio">Inicio</a>
                <a className='hover:underline text-white' onClick= {handleClick} href="/user/produccion">Producción</a>
                <a className='hover:underline text-white' onClick= {handleClick} href="/user/reportes">Reportes</a>
                <a className='hover:underline text-white' onClick= {handleClick} href="/user/perfil">Perfil</a>
                <a className='hover:underline text-white' onClick= {handleLogout} href="/">Cerrar sesión</a>
              </div>
            </div>
            <div className='burguer'>
              <Burguerbttn clicked={clicked} handleClick={handleClick} />
              <BgDiv className={`initial ${clicked ? ' active' : ''}` }>
                <MiLogo />
              </BgDiv>
            </div>  
          </header> 
          <MiLogo />
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  padding: .2rem;
  background-color: #111827;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 2rem;
  }
  .links{
    position: fixed;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 880px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: fixed;
    margin-left: auto;
    margin-right: 200;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 880px){
      display: none;
      z-index: 1;
    }
  }
`
const BgDiv = styled.div`
  background-color: #111827;
  position: fixed;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 90% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
