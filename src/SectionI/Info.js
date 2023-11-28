import '../App.css';
import '../fonts/Bowlby_One/BowlbyOne-Regular.ttf'
import '../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'


function Info() {
  return (
            <div >
                <div class="blanco rounded shadow-sm py-2 col-12" >
                    <div className='formulario'>
                        <form className='forms'>
                            <div class="col-md-12 ">
                                <div class="margen">
                                    <label for="nombre" className='texto1 font-face' >Nombre:</label>
                                    <input type="text" class="form-control" id="nombre" placeholder="Nombre"></input>
                                </div>
                                <div class="margen">
                                    <label for="email" className='texto1 font-face' >Email:</label>
                                    <input type="email" class="form-control" id="email" placeholder="Email"></input>
                                </div>	
                                <div class="margen">
                                    <label for="movil" className='texto1 font-face' >Movil:</label>
                                    <input type="number" class="form-control" id="movil" placeholder="Movil"></input>
                                </div>
                                <div class="margen">
                                    <label for="mensaje" className='texto1 font-face' > Mensaje:</label>
                                    <textarea  class="form-control" id="mensaje" placeholder="Mensaje"></textarea>
                                </div>
                                <br></br>
                                <div class="margen">
                                    <input type="submit" value="Enviar" class=" text-black"></input>
                                </div>
                                </div>
                        </form>
                        <div class="col-md-6 mapa">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.737422031492!2d-1.9699647179876918!3d43.32808905029765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a54183b87fed%3A0x6b3f34b4f0c14472!2sIES%20Xabier%20Zubiri%20Manteo%20BHI!5e0!3m2!1ses!2ses!4v1671545437515!5m2!1ses!2ses" class="col-12 " loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
  );
}

export default Info;