import '../App.css';
import '../fonts/Bowlby_One/BowlbyOne-Regular.ttf'
import '../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
import React from "react"; 
import logo from '../img/logo-negro-completo.svg'

function Logo() {
    return (
            <img className='imagen-logo' src={logo}></img>
        );
    }
    
export default Logo;