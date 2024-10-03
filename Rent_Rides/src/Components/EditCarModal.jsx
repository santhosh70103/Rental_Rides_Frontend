import React, { useState } from 'react';
import axios from 'axios';

const EditCarModal = ({ car, onClose }) => {
  const [carData, setCarData] = useState({
    Car_Id: car.Car_Id,
    Car_Name: car.Car_Name,
    Car_Type: car.Car_Type,
    Car_Model_Year: car.Car_Model_Year || 0,
    Rental_Price_PerHour: car.Rental_Price_PerHour || 0,
    Car_Image: car.Car_Image,
    Rental_Price_PerDay: car.Rental_Price_PerDay || 0,
    Available_Cars: car.Available_Cars,
    Available_Location: car.Available_Location,
    Fuel_Type: car.Fuel_Type,
    No_of_seats: car.No_of_seats,
    Transmission_type: car.Transmission_type,
    Penalty_Amt: car.Penalty_Amt || 0,
  });

  const [isConfirming, setIsConfirming] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsConfirming(true); // Show confirmation modal
  };

  const handleConfirmSave = async () => {
    try {
      // Send the PUT request with axios
      await axios.put(
        `https://localhost:7208/api/Car_Details/${carData.Car_Id}`,
        carData
      );
      alert("Car details updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error updating car details:", error);
      alert("Failed to update car details.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Edit Car Details</h2>

        {/* Car Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Car Name</label>
          <input
            type="text"
            name="Car_Name"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.Car_Name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Car Image</label>
          <input
            type="text"
            name="Car_Image"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.Car_Image}
            onChange={handleChange}
          />
        </div>

        {/* Car Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Car Type</label>
          <input
            type="text"
            name="Car_Type"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.Car_Type}
            onChange={handleChange}
          />
        </div>

        {/* Car Model Year */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Car Model Year</label>
          <input
            type="number"
            name="Car_Model_Year"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.Car_Model_Year}
            onChange={handleChange}
          />
        </div>

        {/* Price Per Hour */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price Per Hour</label>
          <input
            type="number"
            name="Rental_Price_PerHour"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.Rental_Price_PerHour}
            onChange={handleChange}
          />
        </div>

        {/* Price Per Day */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price Per Day</label>
          <input
            type="number"
            name="Rental_Price_PerDay"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.Rental_Price_PerDay}
            onChange={handleChange}
          />
        </div>

        {/* Available Cars */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Available Cars</label>
          <input
            type="number"
            name="Available_Cars"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.Available_Cars}
            onChange={handleChange}
          />
        </div>

        {/* Available Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Available Location</label>
          <input
            type="text"
            name="Available_Location"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.Available_Location}
            onChange={handleChange}
          />
        </div>

        {/* Fuel Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Fuel Type</label>
          <input
            type="text"
            name="Fuel_Type"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.Fuel_Type}
            onChange={handleChange}
          />
        </div>

        {/* Number of Seats */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Number of Seats</label>
          <input
            type="number"
            name="No_of_seats"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.No_of_seats}
            onChange={handleChange}
          />
        </div>

        {/* Transmission Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Transmission Type</label>
          <input
            type="text"
            name="Transmission_type"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.Transmission_type}
            onChange={handleChange}
          />
        </div>

        {/* Penalty Amount */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Penalty Amount</label>
          <input
            type="number"
            name="Penalty_Amt"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={carData.Penalty_Amt}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button className="bg-gray-200 px-4 py-2 rounded-lg" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>

        {/* Confirmation Modal */}
        {isConfirming && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-lg font-semibold mb-4">Confirm Save</h3>
              <p>Are you sure you want to save the changes?</p>
              <div className="flex justify-end mt-4 space-x-4">
                <button className="bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setIsConfirming(false)}>
                  Cancel
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleConfirmSave}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditCarModal;
