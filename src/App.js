import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Voluntario from './Components/Voluntarios/Voluntario'
import Instituicoes from './Components/Instituicoes/Instituicoes'
import Apoiadores from './Components/Apoiadores/Apoiadores'


function App() {
      return (
            <>
            <Router>
                  <Header />
                  <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Instituicoes' element={<Instituicoes />} />
                        <Route path='/Voluntario' element={<Voluntario />} />
                        <Route path='/Apoiadores' element={<Apoiadores />}></Route>
                  </Routes>
                  <Footer />
            </Router>
            </>
      );
}
export default App;
