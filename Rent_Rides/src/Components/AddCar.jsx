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
      if (response.data != null) {
        alert("Car added successfully");
      }
    } catch (error) {
      console.error("Error adding car:", error);
      setErrorMessage("Failed to add car. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 min-h-screen px-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-700">Vehicle Details</h2>
          <button
            className="bg-gradient-to-r from-green-400 to-blue-400 text-white p-2 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 transition-all"
            onClick={handleSubmit}
          >
            Add Car
          </button>
        </div>

        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 font-semibold">
              Car Name
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setCarName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">
              Enter Car Img Url
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setCarImageUrl(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">
              Car Type
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setCarType(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">
              Car Model Year
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setCarModelYear(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">
              Rental Price Per Hour
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setRentalPricePerHour(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">
              Rental Price Per Day
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setRentalPricePerDay(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">
              Available Cars
            </label>
            <input
              type="number"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setAvailableCars(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">
              Fuel Type
            </label>
            <select
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setAvailableLocation(e.target.value)}
            >
              <option value="Ariyalur">Ariyalur</option>
              <option value="Chennai">Chennai</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Cuddalore">Cuddalore</option>
              <option value="Dharmapuri">Dharmapuri</option>
              <option value="Dindigul">Dindigul</option>
              <option value="Erode">Erode</option>
              <option value="Kanchipuram">Kanchipuram</option>
              <option value="Kanyakumari">Kanyakumari</option>
              <option value="Karur">Karur</option>
              <option value="Krishnagiri">Krishnagiri</option>
              <option value="Madurai">Madurai</option>
              <option value="Nagapattinam">Nagapattinam</option>
              <option value="Namakkal">Namakkal</option>
              <option value="Nilgiris">Nilgiris</option>
              <option value="Perambalur">Perambalur</option>
              <option value="Pudukkottai">Pudukkottai</option>
              <option value="Ramanathapuram">Ramanathapuram</option>
              <option value="Ranipet">Ranipet</option>
              <option value="Salem">Salem</option>
              <option value="Sivagangai">Sivagangai</option>
              <option value="Thanjavur">Thanjavur</option>
              <option value="Theni">Theni</option>
              <option value="Thoothukudi">Thoothukudi</option>
              <option value="Tiruchirappalli">Tiruchirappalli</option>
              <option value="Tirunelveli">Tirunelveli</option>
              <option value="Tiruppur">Tiruppur</option>
              <option value="Vellore">Vellore</option>
              <option value="Viluppuram">Viluppuram</option>
              <option value="Virudhunagar">Virudhunagar</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">
              Fuel Type
            </label>
            <select
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setFuelType(e.target.value)}
            >
              <option value="Electric">Electric</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">
              Number of Seats
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setNoOfSeats(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">
              Transmission Type
            </label>
            <select
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setTransmissionType(e.target.value)}
            >
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">
              Penalty Amount
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
              onChange={(e) => setPenaltyAmount(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;