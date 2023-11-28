import '../App.css';
import '../fonts/Bowlby_One/BowlbyOne-Regular.ttf'
import '../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
import React from "react"; 

function Nav() {
    return (
        <nav>
            <ul className='font-face'>
                <li><a href="/home">INICIO</a></li>
                <li><a href="/carta">CARTA</a></li>
                <li><a href="#">HACER UN PEDIDO</a></li>
                <li><a href="#">RESERVAS</a></li>
                <li><a href="#">CONTACTO</a></li>
                <li><a href="#">RESTAURANTES</a></li>
                <li><a href="#">NUESTRA HISTORIA</a></li>
            </ul>
        </nav>
        );
    }
    
export default Nav;