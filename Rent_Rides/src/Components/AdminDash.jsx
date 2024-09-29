import React, { useState } from "react";
import AdminProfile from "./AdminProfile";
import Orders from "./Orders";
import BookingDetails from "./BookingDetails";
import CarList from "./CarList";
import { useParams } from "react-router-dom";
import AddCar from "./AddCar";
import RentCar from "./RentCar";

const AdminDash = () => {
  const [currentNavItem, setCurrentNavItem] = useState("Profile");
  const { Id: Admin_Id } = useParams(); // Destructure Admin_Id from useParams
  
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
    case "Order":
      mainContent = <Orders />;
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
    default:
      mainContent = <h2>Default Content or Profile</h2>;
  }

  return (
    <div className="flex h-screen">
      <aside className="w-1/5 bg-gray-800 text-white p-4 h-full overflow-y-auto">
        {/* Sidebar */}
        <div className="flex items-center mb-6">
          <img
            src="https://placehold.co/50x50"
            alt="Admin profile picture"
            className="rounded-full w-12 h-12 mr-3"
          />
          <div>
            <p className="text-sm">Welcome,</p>
            <p className="font-bold">Admin</p>
          </div>
        </div>
        <nav>
          <ul>
            <li className="mb-4 hover:border">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => handleNavItemClick("Profile")}
              >
                <i className="fas fa-tachometer-alt mr-3"></i>
                Profile
              </a>
            </li>
            <li className="mb-4 hover:border">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => handleNavItemClick("AddCar")}
              >
                <i className="fas fa-plus-circle mr-3"></i>
                Add Car
              </a>
            </li>
            <li className="mb-4 hover:border">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => handleNavItemClick("Manage car")}
              >
                <i className="fas fa-car mr-3"></i>
                Manage Car
              </a>
            </li>
            <li className="mb-4 hover:border">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => handleNavItemClick("Booking")}
              >
                <i className="fas fa-book mr-3"></i>
                Manage Bookings
              </a>
            </li>
            <li className="mb-4 hover:border">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => handleNavItemClick("Order")}
              >
                <i className="fas fa-shopping-cart mr-3"></i>
                Orders
              </a>
            </li>
            <li className=" mb-4 hover:border">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => handleNavItemClick("Rent Car")}
              >
                <i className="fas fa-shopping-cart mr-3"></i>
                Rent Car
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
  );
};

export default AdminDash;
