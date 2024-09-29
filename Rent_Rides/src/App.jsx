import AdminDash from "./Components/AdminDash";
import Orders from "./Components/Orders";
import "./index.css";
import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRegister from "./Components/AdminRegister";
import AddCar from "./Components/AddCar";
import Payment from "./Customer/Payment";
import LandingPage from "./Customer/LandingPage";
import CarList from "./Customer/CustomerCarList";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admindash/:Id" element={<AdminDash />} />
          <Route path="/AdminReg" element={<AdminRegister />} />
          <Route path="/CustomerCarlist" element={<CarList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
