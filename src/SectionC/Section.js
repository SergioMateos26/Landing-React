import '../App.css';
import '../fonts/Bowlby_One/BowlbyOne-Regular.ttf'
import '../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
import Footer from '../Footer/Footer';
import Hurburguesa from './Hurburguesa';
import React from "react"; 

function Section() {
    return (
                <div className='colorF'>
                    <Hurburguesa></Hurburguesa>
                    <div className='footerC'>
                        <Footer></Footer>
                    </div>
                </div>
        );
    }
    
export default Section;