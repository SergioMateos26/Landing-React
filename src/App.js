import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Carta from './Paginas/Carta/Carta';
import Home from './Paginas/Inicio/Home';
import Info from './Paginas/Info/Info';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/informacion" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;