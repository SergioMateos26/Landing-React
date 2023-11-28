import '../App.css';
import '../fonts/Bowlby_One/BowlbyOne-Regular.ttf'
import '../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
import React from "react"; 

function Sesion() {
    return (
        <div className='divBotones'>
            <button class="button inicio"><b className='font-face'>Registrarse</b></button>
            <button class="button inicio"><b className='font-face'>Iniciar sesion</b></button>
        </div>
        );
    }
    
export default Sesion;