import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Carta from './Paginas/Carta/Carta';
import Home from './Paginas/Inicio/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carta" element={<Carta />} />
      </Routes>
    </Router>
  );
}

export default App;