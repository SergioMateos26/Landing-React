import '../App.css';
import '../fonts/Bowlby_One/BowlbyOne-Regular.ttf'
import '../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
import React from "react"; 
import logo from '../img/logo-blanco-completo.jpg'

function Logo() {
    return (
        <a href='#'>
            <img className='logo' src={logo}></img>
        </a>
        );
    }
    
export default Logo;