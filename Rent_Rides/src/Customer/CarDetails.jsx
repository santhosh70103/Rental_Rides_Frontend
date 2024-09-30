import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Star Rating Component
const StarRating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = "★".repeat(rating);
  const emptyStars = "☆".repeat(maxStars - rating);

  return (
    <div className="text-yellow-400 text-2xl">
      {filledStars}
      {emptyStars}
    </div>
  );
};

const CarDetails = () => {
  const { Car_Id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        // Fetch car details from both APIs
        const carDetailsResponse = await axios.get(
          "https://localhost:7208/api/Car_Details"
        );
        const feedbackResponse = await axios.get(
          "https://localhost:7208/api/GetCarWithFeeedBack"
        );

        // Find car by Car_Id in both responses
        const carDetails = carDetailsResponse.data.find(
          (c) => c.Car_Id == Car_Id
        );
        const carFeedback = feedbackResponse.data.find(
          (c) => c.Car_Id == Car_Id
        );

        // Merge feedback data into carDetails
        const mergedCarDetails = {
          ...carDetails,
          Feedback: carFeedback ? carFeedback.Feedback : [],
        };

        setCar(mergedCarDetails);
      } catch (error) {
        console.error("Error fetching car details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [Car_Id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading car details...
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-b from-indigo-100 to-blue-100 flex justify-center items-center py-20 px-5">
      {car && (
        <div className="flex flex-col">
          <div className="flex items-center flex-col md:flex-row gap-10 bg-white p-5 rounded-2xl shadow-2xl transform transition duration-500  w-full max-w-6xl overflow-hidden">
            {/* Car Image */}
            <div className="w-full o md:w-1/2 transform transition duration-500 hover:scale-105">
              <img
                src={car.Car_Image}
                alt={car.Car_Name}
                className="w-full h-68 object-cover rounded-xl mb-8 shadow-lg transition duration-300 hover:shadow-2xl"
              />
            </div>

            {/* Car Details */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {car.Car_Name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <p className="text-gray-600 text-lg bg-blue-100 p-3 rounded-lg transition-all duration-300 hover:bg-blue-200">
                  <strong>Type:</strong> {car.Car_Type}
                </p>
                <p className="text-gray-600 text-lg bg-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-green-200">
                  <strong>Fuel Type:</strong> {car.Fuel_Type}
                </p>
                <p className="text-gray-600 text-lg bg-yellow-100 p-3 rounded-lg transition-all duration-300 hover:bg-yellow-200">
                  <strong>Transmission:</strong> {car.Transmission_type}
                </p>
                <p className="text-gray-600 text-lg bg-purple-100 p-3 rounded-lg transition-all duration-300 hover:bg-purple-200">
                  <strong>Seats:</strong> {car.No_of_seats}
                </p>
                <p className="text-gray-600 text-lg bg-red-100 p-3 rounded-lg transition-all duration-300 hover:bg-red-200">
                  <strong>Price Per Day:</strong> ${car.Rental_Price_PerDay}
                </p>
                <p className="text-gray-600 text-lg bg-teal-100 p-3 rounded-lg transition-all duration-300 hover:bg-teal-200">
                  <strong>Pickup Location:</strong>Office Address
                </p>
              </div>

              {/* Feedback Section */}
              <div className="mt-5">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Customer Feedback
                </h3>
                {car.Feedback && car.Feedback.length > 0 ? (
                  car.Feedback.map((feedback, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 p-4 rounded-xl mb-4 shadow-md hover:bg-blue-100 hover:shadow-xl transition duration-300"
                    >
                      <p className="text-gray-800 mb-2">
                        <strong>Feedback:</strong> {feedback.Feedback_Query}
                      </p>
                      <div className="flex items-center">
                        <strong className="text-gray-800 mr-2">Rating:</strong>
                        <StarRating rating={feedback.Feedback_Point} />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">
                    No feedback available for this car.
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <button  className="bg-blue-200 p-2 rounded-sm">Confirm Car</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
