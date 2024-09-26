
import AdminDash from './Components/AdminDash';
import Orders from './Components/Orders';
import './index.css'
import React from 'react';
import Login from './Components/AdminLogin'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import AdminRegister from  './Components/AdminRegister';



const App = () => {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
      <Route path='/AdminLogin' element={<Login/>}/>
      <Route path='/Admindash' element={<AdminDash/>}/>
      <Route path='/AdminReg' element={<AdminRegister />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
