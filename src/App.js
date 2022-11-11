
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import HomePt2 from './Components/Home/HomePt2';
import HomePt3 from './Components/Home/HomePt3';
import HomePt4 from './Components/Home/HomePt4';


function App() {
  return (

   <>
<Router>
<Header />
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/HomePt2' element={<HomePt2 />} />
   <Route path='/HomePt3' element={<HomePt3 />} />
   <Route path='/HomePt4' element={<HomePt4 />} />

   </Routes>
<Footer />
</Router>
   </>

  );
}

export default App;
