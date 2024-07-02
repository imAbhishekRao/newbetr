import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';

import Founder from './components/founders'
import Brands from './components/brands'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <HomePage></HomePage>

    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/founder' element={<Founder/>}></Route>
    <Route path='/brands' element={<Brands/>}></Route>
    </Routes>
      
   

    
    


    </>
  );
}

export default App;
