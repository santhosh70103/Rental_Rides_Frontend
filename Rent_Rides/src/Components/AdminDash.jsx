import React, { useState } from "react";
import AdminProfile from "./AdminProfile";
import Orders from "./Orders";
import BookingDetails from "./BookingDetails";
import CarList from "./CarList";
import { useParams } from "react-router-dom";
import AddCar from "./AddCar";

const AdminDash = () => {
  const [currentNavItem, setCurrentNavItem] = useState("Profile");
  const Admin_Id=useParams()
  

  const handleNavItemClick = (navItem) => {
    setCurrentNavItem(navItem);
  };

  let mainContent;
  switch (currentNavItem) {
    case "Profile":
      mainContent = (
        <AdminProfile Id={Admin_Id.Id} />
      );
      break;
    case "AddCar":
      mainContent=(
        <AddCar/>
      )
      break;
    case "Order":
      mainContent = (
        <Orders/>
      );
      break;
    case "Booking":
        mainContent = (
            <BookingDetails/>
        );
        break;


    default:
      mainContent = (
        <div>
          <h2>Default Content</h2>
          default or profile content here
        </div>
      );
  }

  return (
    <div className="flex h-screen">
      <aside className="w-1/5 bg-gray-800 text-white p-4">
        <div className="flex items-center mb-6">
          <img
            src="https://placehold.co/50x50"
            alt="Admin profile picture"
            className="rounded-full w-12 h-12 mr-3"
          />
          <div>
            <p className="text-sm">Welcome,</p>
            <p className="font-bold">{}</p>
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
                <i className="fas fa-tachometer-alt mr-3"></i>
                Add Car
              </a>
            </li>
            <li className="mb-4 hover:border">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => handleNavItemClick("Manage car")}
              >
                <i className="fas fa-tachometer-alt mr-3"></i>
                Manage Car
              </a>
            </li>
            <li className="mb-4 hover:border">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => handleNavItemClick("Manage ")}
              >
                <i className="fas fa-tachometer-alt mr-3"></i>
                Manage User
              </a>
            </li>
            <li className="mb-4 hover:border">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => handleNavItemClick("Booking")}
              >
                <i className="fas fa-tachometer-alt mr-3"></i>
                Manage Bookings
              </a>
            </li>
            <li className="mb-4 hover:border">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => handleNavItemClick("Order")}
              >
                <i className="fas fa-tachometer-alt mr-3"></i>
                Orders
              </a>
            </li>
            <li className="mb-4 hover:border">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => handleNavItemClick("Order")}
              >
                <i className="fas fa-tachometer-alt mr-3"></i>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">{mainContent}</main>
    </div>
  );
};

export default AdminDash;
