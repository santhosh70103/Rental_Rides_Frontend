// CarCard.js
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const CarCard = ({ car }) => {
    const renderStars = (rating) => {
        const validRating = Math.max(0, Math.min(5, Number(rating))) || 0;
        const fullStars = Math.floor(validRating);
        const halfStars = validRating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;
        console.log(car)

        return (
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, index) => (
                    <FaStar key={`full-${index}`} className="text-green-500" />
                ))}
                {halfStars > 0 && <FaStarHalfAlt className="text-green-500" />}
                {[...Array(emptyStars)].map((_, index) => (
                    <FaRegStar key={`empty-${index}`} className="text-green-500" />
                ))}
            </div>
        );
    };

    return (
        <div className="bg-white p-4 shadow rounded mb-4">
            <div className="flex">
                <img
                    src={car.Car_Image} // Adjust the image path if necessary
                    alt={car.Car_Name}
                    className="w-1/4 rounded"
                />
                <div className="w-3/4 ml-4">
                    <h2 className="text-xl font-bold">{car.Car_Name}</h2>
                    <div className="flex items-center text-gray-600 mt-2">
                        <i className="fas fa-users mr-2"></i> {car.Number_Of_Seats} seats
                        <i className="fas fa-suitcase ml-4 mr-2"></i> {car.Fuel_Type}
                        <i className="fas fa-cogs ml-4 mr-2"></i> {car.Transmission_type}
                    </div>
                    <div className="flex items-center text-gray-600 mt-2">
                        <i className="fas fa-dollar-sign ml-4 mr-2"></i> ${car.Price_Per_Day}/day
                        <i className="fas fa-dollar-sign ml-4 mr-2"></i> ${(car.Price_Per_Day / 24).toFixed(2)}/hour
                    </div>
                    <div className="mt-4">
                        {renderStars(car.Review_Rating)} {/* Assuming `Review_Rating` is a number between 0 and 5 */}
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
