// CarCard.js
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  const idcar = car.Car_Id;
  

  const renderStars = (rating) => {
    const validRating = Math.max(0, Math.min(5, Number(rating))) || 0;
    const fullStars = Math.floor(validRating);
    const halfStars = validRating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStars > 0 && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-4 hover:shadow-xl transition-shadow duration-300 hover:bg-blue-50">
      <div className="flex scrollbar-hide">
        <img
          src={car.Car_Image} // Adjust the image path if necessary
          alt={car.Car_Name}
          className="w-1/4 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
        />
        <div className="w-3/4 ml-4 bg-white shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105">
          <h2 className="text-xl font-bold text-gray-700 hover:text-blue-500 transition-colors duration-200">
            {car.Car_Name}
          </h2>
          <div className="flex items-center w-[50%] text-gray-700 mt-2 bg-gradient-to-r from-blue-50 to-white p-3 rounded-md shadow-md">
            <i className="fas fa-users mr-2 text-blue-500 text-lg"></i>
            <span className="font-semibold">{car.Number_Of_Seats} seats</span>
            <i className="fas fa-suitcase ml-6 mr-2 text-blue-500 text-lg"></i>
            <span className="font-semibold">{car.Fuel_Type}</span>
            <i className="fas fa-cogs ml-6 mr-2 text-blue-500 text-lg"></i>
            <span className="font-semibold">{car.Transmission_type}</span>
          </div>

          <div className="flex items-center w-[50%] text-gray-700 mt-2 bg-gradient-to-r from-green-50 to-white p-3 rounded-md shadow-md">
            <i className="fas fa-dollar-sign ml-2 mr-2 text-green-500 text-lg"></i>
            <span className="font-semibold">${car.Price_Per_Day}/day</span>
            <i className="fas fa-dollar-sign ml-6 mr-2 text-green-500 text-lg"></i>
            <span className="font-semibold">
              ${(car.Price_Per_Day / 24).toFixed(2)}/hour
            </span>
          </div>

          <div className="mt-4">
            {renderStars(car.Review_Rating)}{" "}
            {/* Assuming `Review_Rating` is a number between 0 and 5 */}
          </div>
          <div className="flex gap-8">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(`/Cardetails/${idcar}`);
            }}
            className="bg-blue-400 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-500 transition-colors duration-200 shadow-md"
          >
            Book Now
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(`/Cardetails/${idcar}`);
            }}
            className="bg-blue-400 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-500 transition-colors duration-200 shadow-md"
          >
            ViewDetails
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CarCard;
