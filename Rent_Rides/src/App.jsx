import AdminDash from "./Components/AdminDash";

import "./index.css";
import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRegister from "./Components/AdminRegister";
import AddCar from "./Components/AddCar";
import Payment from "./Customer/Payment";
import LandingPage from "./Customer/LandingPage";
import CarList from "./Customer/CarCustomerList";
import CarDetails from "./Customer/CarDetails.Jsx";
import CustomerOrders from "./Customer/CustomerOrders";
import CustomerLogin from "./Customer/CustomerLogin";
import CustomerReg from "./Customer/CustomerReg";

//import CarCustomerList from "./Customer/CarCustomerList";



const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/AdminLogin" element={<Login />}/>
          <Route path="/CustomerLogin" element={<CustomerLogin/>} />
          <Route path="/Admindash/:Id" element={<AdminDash />} />
          <Route path="/AdminReg" element={<AdminRegister />} />
          <Route path="/CustomerReg" element={<CustomerReg />} />

          <Route path="/CustomerCarList" element={<CarList />} />
          <Route path="/Cardetails/:Car_Id" element={<CarDetails/>} />
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/MyOrders" element={<CustomerOrders/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
