import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home';
import About from './Pages/About';
import Rooms from './Pages/Rooms';
import Hall from './Pages/Hall';
import DineDirinks from './Pages/DineDirinks';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';


function App() {
  return (
    <>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Rooms' element={<Rooms/>} />
        <Route path='/Hall' element={<Hall/>} />
        <Route path='/Dine&Drinks' element={<DineDirinks/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/Contact-us' element={<Contact/>} />


        
      </Routes>
    </>
  );
}

export default App;
