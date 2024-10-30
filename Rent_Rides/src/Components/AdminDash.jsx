import React, { useEffect, useState } from "react";
import AdminProfile from "./AdminProfile";

import BookingDetails from "./BookingDetails";
import CarList from "./CarList";
import { useNavigate, useParams } from "react-router-dom";
import AddCar from "./AddCar";
import RentCar from "./RentCar";
import PaymentDetails from "./PaymentDetails";

const AdminDash = () => {
  const [currentNavItem, setCurrentNavItem] = useState("Profile");
  const { Id: Admin_Id } = useParams(); // Destructure Admin_Id from useParams
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate =useNavigate()
  useEffect(() => {
    // Check for role in localStorage
    const role = localStorage.getItem("role");

    if (role !== "Admin") {
      // If the role is not admin, redirect to login
      window.alert("You are an unauthorized user. Please log in with the correct credentials.");

      navigate("/AdminLogin");
    } else {
      // If the role is admin, allow access to the dashboard
      setIsAuthorized(true);
    }
  }, [navigate]);

  const handleNavItemClick = (navItem) => {
    setCurrentNavItem(navItem);
  };

  let mainContent;
  switch (currentNavItem) {
    case "Profile":
      mainContent = <AdminProfile Id={Admin_Id} />;
      break;
    case "AddCar":
      mainContent = <AddCar />;
      break;
    
      break;
    case "Booking":
      mainContent = <BookingDetails />;
      break;
    case "Manage car":
      mainContent = <CarList />;
      break;
    case "Rent Car":
      mainContent = <RentCar/>;
      break;
      case "Payment History":
        mainContent = <PaymentDetails />;
        break;
     
    default:
      mainContent = <div>Not found</div>;
  }

  return isAuthorized?
     (
      <div className="flex h-screen">
  <aside className="w-1/5 bg-gray-800 text-white p-6 h-full overflow-y-auto">
    {/* Sidebar Header */}
    <div className="flex items-center mb-8 border-b border-gray-600 pb-4">
      <img
        src="https://placehold.co/50x50"
        alt="Admin profile picture"
        className="rounded-full w-12 h-12 mr-3 border-2 border-gray-600 shadow-lg"
      />
      <div>
        <p className="text-sm text-gray-400">Welcome,</p>
        <p className="font-bold text-lg">Admin</p>
      </div>
    </div>

    {/* Sidebar Navigation */}
    <nav>
      <ul className="space-y-4">
        <li>
          <a
            href="#"
            className="flex items-center text-gray-300 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300"
            onClick={() => handleNavItemClick("Profile")}
          >
            <i className="fas fa-tachometer-alt mr-3 text-gray-400"></i>
            <span className="font-medium">Profile</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center text-gray-300 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300"
            onClick={() => handleNavItemClick("AddCar")}
          >
            <i className="fas fa-plus-circle mr-3 text-gray-400"></i>
            <span className="font-medium">Add Car</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center text-gray-300 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300"
            onClick={() => handleNavItemClick("Manage car")}
          >
            <i className="fas fa-car mr-3 text-gray-400"></i>
            <span className="font-medium">Manage Car</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center text-gray-300 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300"
            onClick={() => handleNavItemClick("Booking")}
          >
            <i className="fas fa-book mr-3 text-gray-400"></i>
            <span className="font-medium">Manage Bookings</span>
          </a>
        </li>
        
        <li>
          <a
            href="#"
            className="flex items-center text-gray-300 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300"
            onClick={() => handleNavItemClick("Rent Car")}
          >
            <i className="fas fa-car mr-3 text-gray-400"></i>
            <span className="font-medium">Rent/Return Car</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center text-gray-300 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300"
            onClick={() => handleNavItemClick("Payment History")}
          >
            <i className="fas fa-file-invoice-dollar mr-3 text-gray-400"></i>
            <span className="font-medium">Payment History</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
  
      
      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {mainContent}
      </main>
    </div>
    ):
    (
    <p>
      loading......
    </p>
  );
};

export default AdminDash;