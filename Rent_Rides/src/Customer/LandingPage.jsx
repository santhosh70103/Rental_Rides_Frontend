import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  

    const navigate= useNavigate();
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen"
      style={{
        // Setting the background image for the landing page
        backgroundImage: `url('https://www.popphoto.com/uploads/2022/07/25/Mark-Elias-Photo_How_To_Shoot_Cars_Story-006-scaled.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh", // Full viewport height
      }}
    >
      {/* Header section containing the navigation bar */}
      <header className="top-2 left-3 mr-5  w-full px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-opacity-70 shadow-md z-10 fixed">
        <div className="max-w-7xl mx-auto flex justify-between ">
          {/* Navigation buttons for different sections */}
          <nav className="flex space-x-6">
            <button className="text-white font-semibold px-5 py-2 hover:text-yellow-400 transition duration-300 ease-in-out hover:underline">
              Home
            </button>
            <button  onClick={()=>{navigate('/CustomerCarList')}} className="text-white font-semibold px-5 py-2 hover:text-yellow-400 transition duration-300 ease-in-out hover:underline">
              Cars
            </button>
            <button onClick={()=>{navigate("/MyOrders")}} className="text-white font-semibold px-5 py-2 hover:text-yellow-400 transition duration-300 ease-in-out hover:underline">
              My Orders
            </button>
            <button className="text-white font-semibold px-5 py-2 hover:text-yellow-400 transition duration-300 ease-in-out hover:underline">
              Contact
            </button>
          </nav>
          {/* Login/Signup button */}
          <button onClick={()=>{navigate("/CustomerLogin")}} className="bg-yellow-500 text-gray-900 font-bold px-5 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300 ease-in-out">
            Login / Sign Up
          </button>
        </div>
      </header>

      <div>
      <section className="adventure text-center py-4">
        <h2 className="text-3xl font-bold text-white mb-2">
          Adventure Awaits with Rent Rides!
        </h2>
        <p className="text-xl text-white">
          Explore breathtaking landscapes and vibrant city streets in style!
        </p>
      </section>
      </div>

      {/* Central button for booking action */}
      <div className="inset-0 flex items-center justify-center z-0">
        <button className="bg-blue-500 text-white text-2xl font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
        onClick={()=>navigate("/CustomerCarList")}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;