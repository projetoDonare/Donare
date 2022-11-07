
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import HomePt2 from './Components/Home/HomePt2';
import HomePt3 from './Components/Home/HomePt3';
import HomePt4 from './Components/Home/HomePt4';
import HomePt5 from './Components/Home/HomePt5';
import HomePt6 from './Components/Home/HomePt6';
import HomePt7 from './Components/Home/HomePt7';
import HomePt8 from './Components/Home/HomePt8';

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
   <Route path='/HomePt5' element={<HomePt5 />} />
   <Route path='/HomePt6' element={<HomePt6 />} />
   <Route path='/HomePt7' element={<HomePt7 />} />
   <Route path='/HomePt8' element={<HomePt8 />} />
   </Routes>
<Footer />
</Router>
   </>

  );
}

export default App;
