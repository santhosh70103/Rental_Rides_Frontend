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
      const response = await axios.post("https://localhost:7208/api/Car_Details", carDetails);
      console.log("Car added successfully:", response.data);
      // Reset the form or redirect if needed
    } catch (error) {
      console.error("Error adding car:", error);
      setErrorMessage("Failed to add car. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Vehicle Details</h2>
          <h2>
            <button className="bg-orange-400 p-2 rounded-xl" onClick={handleSubmit}>
              Add Car
            </button>
          </h2>
        </div>
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        <div className="grid grid-cols-2 gap-6">
          {/* Car Name */}
          <div>
            <label className="block text-gray-700">Car Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-800 rounded-md shadow-lg"
              onChange={(e) => setCarName(e.target.value)}
              required
            />
          </div>

          {/* Car Image */}
          <div>
            <label className="block text-gray-700">Enter Car Img Url</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => setCarImageUrl(e.target.value)}
            />
          </div>

          {/* Car Type */}
          <div>
            <label className="block text-gray-700">Car Type</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => setCarType(e.target.value)}
            />
          </div>

          {/* Car Model Year */}
          <div>
            <label className="block text-gray-700">Car Model Year</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => setCarModelYear(e.target.value)}
            />
          </div>

          {/* Rental Price Per Hour */}
          <div>
            <label className="block text-gray-700">Rental Price Per Hour</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => setRentalPricePerHour(e.target.value)}
            />
          </div>

          {/* Rental Price Per Day */}
          <div>
            <label className="block text-gray-700">Rental Price Per Day</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => setRentalPricePerDay(e.target.value)}
            />
          </div>

          {/* Available Cars */}
          <div>
            <label className="block text-gray-700">Available Cars</label>
            <input
              type="number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => setAvailableCars(e.target.value)}
            />
          </div>

          {/* Available Location */}
          <div>
            <label className="block text-gray-700">Available Location</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => setAvailableLocation(e.target.value)}
            />
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-gray-700">Fuel Type</label>
            <select
              className="w-full"
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
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => setNoOfSeats(e.target.value)}
            />
          </div>

          {/* Transmission Type */}
          <div>
            <label className="block text-gray-700">Transmission Type</label>
            <select
              className="w-full"
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
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => setPenaltyAmount(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
