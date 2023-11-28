import '../App.css';
import '../fonts/Bowlby_One/BowlbyOne-Regular.ttf'
import '../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
import React from "react"; 

function Hamburguesa() {
    return (
            <div className='carta'>
                <div id='carta1' className='cartas'></div>
                <div className='cartas font-face texto1 textos'>
                    <h1  className='burguer'>UNAS HAMBURGUESAS BRUTALES</h1>
                    <p>Carne, humo, brasa, entrantes, buen rollo y unas hamburguesas brutales. Así somos en ASAGrill, 
                        el local más carnívoro del chef Alejandro ASAGrill, donde primamos la búsqueda de sabores singulares, 
                        ofreciendo cocina a la brasa y ahumada, con largas cocciones a baja temperatura que aportan una personalidad especial y diferente.
                    </p>
                </div>
                <div className='cartas font-face texto1 textos'>
                    <h1  className='burguer'>UN PLACER SIN IGUAL</h1>
                    <p>Si estás aquí es porque quieres disfrutar, sin postureos, sin miedo a ensuciarte las manos porque lo único que buscas y deseas es gozarlo. 
                        Puedes con  nuestros nachos o nuestros postres como el cerdonut, los guarrofres o la tarta de queso y disfrutar de algunas de nuestras grandes protagonistas,
                        las hamburguesas, un placer realmente hedonista.
                        </p>
                </div>
                <div id='carta2' className='cartas'></div>
                <div id='carta3' className='cartas'></div>
                <div className='cartas font-face texto1 textos'>
                    <h1 className='burguer'>PRUEBA NUESTRA BURGUER DEL MES</h1>
                    <p>En ASAGrill podrás disfrutar de una hamburguesa diferente cada mes, las mejores se quedarán en carta.
                        No te pierdas nuestras hamburguesas Dry Aged Valles del Esla, son otro nivel.
                    </p>
                </div>
            </div>
        );
    }
    
export default Hamburguesa;