import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Payment from "./Payment"; // Import the Payment component










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

  var date=""
  const [days,setdays] =useState();
  const customerId= localStorage.getItem("Id");
  



  const RentModal = ({ isOpen, onClose, onConfirm }) => {
    const [pickupDate, setPickupDate] = useState("");
    const [rentalDays, setRentalDays] = useState("");
    const [error, setError] = useState(""); // State for handling validation error messages
    const navigate = useNavigate();
  
    // Get today's date and date 3 days from today
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 3);
  
    const formatDate = (date) => {
      return date.toISOString().split("T")[0]; // Format date as 'YYYY-MM-DD'
    };
  
    const handleConfirm = () => {
      const selectedDate = new Date(pickupDate);
  
      // Validation: Check if pickupDate is valid
      if (!pickupDate) {
        setError("Please select a pickup date.");
        return;
      }
  
      if (selectedDate < today) {
        setError("Pickup date cannot be in the past.");
        return;
      }
  
      if (selectedDate > maxDate) {
        setError("Pickup date cannot be more than 3 days from today.");
        return;
      }
  
      if (!rentalDays || rentalDays <= 0) {
        setError("Please enter valid rental days.");
        return;
      }
  
      setError(""); // Clear error if validation passes
      onConfirm({ pickupDate, rentalDays });
      onClose();
  
      // Redirect to the Payment page
      
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">Confirm Your Rental</h2>
          
          {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error messages */}
  
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Pickup Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={pickupDate}
              min={formatDate(today)} // Set the minimum date to today
              max={formatDate(maxDate)} // Set the maximum date to 3 days from today
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Days of Rent</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={rentalDays}
              onChange={(e) => setRentalDays(e.target.value)}
              min="1"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button className="bg-gray-200 px-4 py-2 rounded-lg" onClick={onClose}>
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };






  const { Car_Id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false); // State for Payment component
  const navigate=useNavigate()

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const carDetailsResponse = await axios.get(
          "https://localhost:7208/api/Car_Details"
        );
        const feedbackResponse = await axios.get(
          "https://localhost:7208/api/GetCarWithFeeedBack"
        );

        const carDetails = carDetailsResponse.data.find(
          (c) => c.Car_Id == Car_Id
        );
        const carFeedback = feedbackResponse.data.find(
          (c) => c.Car_Id == Car_Id
        );

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

  const handleConfirmCarClick = () => {
    
    if(!customerId)
    {
      alert("You have to login before Booking a car")
      navigate("/CustomerLogin")
      
    }
    setIsModalOpen(true); // Open RentModal instead of Payment
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = ({ pickupDate, rentalDays }) => {
    date+=pickupDate
    console.log(typeof  (date))
    setdays(rentalDays)
    console.log("Rental confirmed:", pickupDate, rentalDays);
    setIsModalOpen(false);
    setIsPaymentOpen(true); // Open Payment component after confirmation
  };

  const handlePaymentClose = () => {
    setIsPaymentOpen(false); // Close Payment component
  };

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
          <div className="flex items-center flex-col md:flex-row gap-10 bg-white p-5 rounded-2xl shadow-2xl transform transition duration-500 w-full max-w-6xl overflow-hidden">
            {/* Car Image */}
            <div className="w-full md:w-1/2 transform transition duration-500 hover:scale-105">
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
                  <strong>Pickup Location:</strong> Office Address
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
                  <p className="text-gray-600">No feedback available for this car.</p>
                )}
              </div>

              {/* Confirm Car Button */}
              <div className="flex items-center">
                <button
                  onClick={handleConfirmCarClick}
                  className="bg-blue-200 p-2 rounded-sm"
                >
                  Confirm Car
                </button>
              </div>
            </div>
          </div>

          {/* RentModal Component */}
          <RentModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onConfirm={handleModalConfirm} // Correctly passing the function
          />

          {/* Payment Component */}
          {isPaymentOpen && (
            <Payment
            onClose={handlePaymentClose}
            carId={parseInt(Car_Id)}          // Pass Car_Id
            customerId={customerId}     // Replace with actual customer ID logic
            pickupDate={"2024-10-05T13:59:15.248Z"} // Pass pickupDate
            rentalDays={5}      // Pass rentalDays
          />
          )}
        </div>
      )}
    </div>
  );
};

export default CarDetails;
