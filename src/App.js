import logo from './logo.svg';
import './App.css';


import Founder from './components/founders'
import Brands from './components/brands'
import { Routes, Route } from 'react-router-dom'
import Landingpage from './components/landingpage'

function App() {
  return (
    <>
  
    <Routes>
    <Route path='/' element={<Landingpage/>}></Route>
    <Route path='/founder' element={<Founder/>}></Route>
    <Route path='/brands' element={<Brands/>}></Route>
    </Routes>
      
   

    
    


    </>
  );
}

export default App;
