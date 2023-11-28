import '../App.css';
import '../fonts/Bowlby_One/BowlbyOne-Regular.ttf'
import '../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
import React from "react";
import Nav from './Nav'
import Logo from './Logo'
import Redes from './Redes'

function Header() {
  return (
      <header>
        <div className='imagen'>
            <Logo></Logo>
        </div>    
        <Nav></Nav>
        <Redes></Redes>
      </header>
  );
}

export default Header;

