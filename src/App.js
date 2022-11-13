import './App.css';
import {  BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Voluntario from './Components/Voluntarios/Voluntario'
import Instituicoes from './Components/Instituicoes/Instituicoes'
import Doadores from './Components/Apoiadores/Apoiadores'

function App() {
 
   return (

         <>
                  <Router>
                        <Header />
                     <Routes>
                           <Route path='/' element={<Home />} />
                           <Route path='/Voluntario' element={<Voluntario />} />
                           <Route path='/Instituicoes' element={<Instituicoes />} />
                           <Route path='/Doadores' element={<Doadores />} />

                     </Routes>
                        <Footer />
                  </Router>
         </>

    );
}

export default App;
