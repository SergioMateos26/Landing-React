import '../App.css';
import '../fonts/Bowlby_One/BowlbyOne-Regular.ttf'
import '../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
import Info from './Info'
import Equipo from './Equipo'


function Section() {
  return (
        <div className='contenedor'>
            <section>

                <div class="row agustar">
                    <div class="col-lg-4">
                        <h2 class="display-5 text-white font-face burguer">CONTACTANOS</h2>
                    </div>
                </div>

                    <Info></Info>

                <br></br>

                <div class="row agustar">
                    <div class="col-lg-4">
                        <h2 class="display-5 text-white font-face burguer">NUESTRO EQUIPO</h2>
                    </div>
                </div>

                <Equipo></Equipo>

                </section>
        </div>
  );
}

export default Section;