import { useState } from "react";
import axios from "axios";

const AddCar = () => {
  const [carName, setCarName] = useState();
  const [carImageUrl, setCarImageUrl] = useState();
  const [carType, setCarType] = useState();
  const [carModelYear, setCarModelYear] = useState();
  const [rentalPricePerHour, setRentalPricePerHour] = useState();
  const [rentalPricePerDay, setRentalPricePerDay] = useState();
  const [availableCars, setAvailableCars] = useState();
  const [availableLocation, setAvailableLocation] = useState();
  const [fuelType, setFuelType] = useState();
  const [noOfSeats, setNoOfSeats] = useState();
  const [transmissionType, setTransmissionType] = useState();
  const [penaltyAmount, setPenaltyAmount] = useState();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !carName ||
      !carImageUrl ||
      !carType ||
      !carModelYear ||
      !rentalPricePerHour ||
      !rentalPricePerDay ||
      !availableCars ||
      !availableLocation ||
      !fuelType ||
      !noOfSeats ||
      !transmissionType ||
      !penaltyAmount
    ) {
      setErrorMessage("All fields are required");
      return;
    }

    const carDetails = {
      Car_Name: carName,
      Car_Image: carImageUrl,
      Car_Type: carType,
      Car_Model_Year: carModelYear,
      Rental_Price_PerHour: rentalPricePerHour,
      Rental_Price_PerDay: rentalPricePerDay,
      Available_Cars: availableCars,
      Available_Location: availableLocation,
      Fuel_Type: fuelType,
      No_of_seats: noOfSeats,
      Transmission_type: transmissionType,
      Penalty_Amt: penaltyAmount,
    };

    try {
      const response = await axios.post(
        "https://localhost:7208/api/Car_Details",
        carDetails
      );
      console.log("Car added successfully:", response.data);
      if(response.data!=null)
      {
        alert("Car added successfully");
      }
    } catch (error) {
      console.error("Error adding car:", error);
      setErrorMessage("Failed to add car. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-200 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Vehicle Details</h2>
          <button
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white p-3 rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-500 transition-all"
            onClick={handleSubmit}
          >
            Add Car
          </button>
        </div>

        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

        <div className="grid grid-cols-2 gap-6">
          {/* Car Name */}
          <div>
            <label className="block text-gray-700">Car Name</label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setCarName(e.target.value)}
              required
            />
          </div>

          {/* Car Image */}
          <div>
            <label className="block text-gray-700">Enter Car Img Url</label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setCarImageUrl(e.target.value)}
            />
          </div>

          {/* Car Type */}
          <div>
            <label className="block text-gray-700">Car Type</label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setCarType(e.target.value)}
            />
          </div>

          {/* Car Model Year */}
          <div>
            <label className="block text-gray-700">Car Model Year</label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setCarModelYear(e.target.value)}
            />
          </div>

          {/* Rental Price Per Hour */}
          <div>
            <label className="block text-gray-700">Rental Price Per Hour</label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setRentalPricePerHour(e.target.value)}
            />
          </div>

          {/* Rental Price Per Day */}
          <div>
            <label className="block text-gray-700">Rental Price Per Day</label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setRentalPricePerDay(e.target.value)}
            />
          </div>

          {/* Available Cars */}
          <div>
            <label className="block text-gray-700">Available Cars</label>
            <input
              type="number"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setAvailableCars(e.target.value)}
            />
          </div>

          {/* Available Location */}
          <div>
            <label className="block text-gray-700">Available Location</label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setAvailableLocation(e.target.value)}
            />
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-gray-700">Fuel Type</label>
            <select
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setFuelType(e.target.value)}
            >
              <option value="Electric">Electric</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Gas">Gas</option>
            </select>
          </div>

          {/* Number of Seats */}
          <div>
            <label className="block text-gray-700">Number of Seats</label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setNoOfSeats(e.target.value)}
            />
          </div>

          {/* Transmission Type */}
          <div>
            <label className="block text-gray-700">Transmission Type</label>
            <select
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setTransmissionType(e.target.value)}
            >
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Penalty Amount */}
          <div>
            <label className="block text-gray-700">Penalty Amount</label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setPenaltyAmount(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
