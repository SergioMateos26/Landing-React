import '../App.css';
import '../fonts/Bowlby_One/BowlbyOne-Regular.ttf'
import '../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
import React from "react"; 

function Footer() {
    return (
        <div class="divFooter my-5">
                <footer >
                <div class="container p-4">
                    <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4">
                        <h5 class="mb-3 font-face " >Mas informacion</h5>
                        <p className='font-face '>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                        molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                        voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h5 class="mb-1 font-face " >Horario</h5>
                        <table class="table" >
                        <tbody>
                            <tr>
                            <td className='font-face '>Lun - Vie:</td>
                            <td className='font-face '>12am - 12pm</td>
                            </tr>
                            <tr>
                            <td className='font-face '>Sab - Dom:</td>
                            <td className='font-face '>13am - 12am</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="text-center p-3" >
                    © 2023 Copyright: 
                    <a className='color' href='/'> ASAGrill</a>
                </div>
                </footer>
            </div>
        );
    }
    
export default Footer;