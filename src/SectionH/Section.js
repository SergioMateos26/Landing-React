import '../App.css';
import '../fonts/Bowlby_One/BowlbyOne-Regular.ttf'
import '../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
import Sesion from './Sesion'
import Logo from './Logo'
import Titulo from './Titulo'
import BotonReg from './BotonReg'
import Footer from '../Footer/Footer'

function Section() {
  return (
    <div className='sesion'>
        <Sesion></Sesion>
      <center>
      <div className="imagen-imagen">
          <Logo></Logo>
      </div>
      </center>
        <Titulo></Titulo>
      <BotonReg></BotonReg>
      <Footer></Footer>
    </div>
  );
}

export default Section;