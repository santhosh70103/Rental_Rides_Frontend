import { useState } from "react";

const AddCar = () => {
  const [carName, SetcarName] = useState();
  const [carImageUrl, SetcarImageUrl] = useState();
  const [carType, SetcarType] = useState();
  const [carModelYear, SetcarModelYear] = useState();
  const [rentalPricePerHour, SetrentalPricePerHour] = useState();
  const [rentalPricePerDay, SetrentalPricePerDay] = useState();
  const [availableCars, SetavailableCars] = useState();
  const [availableLocation, SetavailableLocation] = useState();
  const [fuelType, SetfuelType] = useState();
  const [noOfSeats, SetnoOfSeats] = useState();
  const [transmissionType, SettransmissionType] = useState();
  const [penaltyAmount, SetpenaltyAmount] = useState();


  return (
    <div className="flex items-center justify-center bg-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Vehicle Details
        </h2>
        <h2><button  className="bg-orange-400 p-2 rounded-xl" >Add Car</button></h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {/* Car Name */}
          <div>
            <label className="block text-gray-700">Car Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-800 rounded-md shadow-lg"
              onChange={(e) => SetcarName(e.target.value)}
              required
            />
          </div>

          {/* Car Image */}
          <div>
            <label className="block text-gray-700">Enter Car Img Url</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => SetcarImageUrl(e.target.value)}
            />
          </div>

          {/* Car Type */}
          <div>
            <label className="block text-gray-700">Car Type</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => SetcarType(e.target.value)}
            />
          </div>

          {/* Car Model Year */}
          <div>
            <label className="block text-gray-700">Car Model Year</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => SetcarModelYear(e.target.value)}
            />
          </div>

          {/* Rental Price Per Hour */}
          <div>
            <label className="block text-gray-700">Rental Price Per Hour</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => SetrentalPricePerHour(e.target.value)}
            />
          </div>

          {/* Rental Price Per Day */}
          <div>
            <label className="block text-gray-700">Rental Price Per Day</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => SetrentalPricePerDay(e.target.value)}
            />
          </div>

          {/* Available Cars */}
          <div>
            <label className="block text-gray-700">Available Cars</label>
            <input
              type="number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => SetavailableCars(e.target.value)}
            />
          </div>

          {/* Available Location */}
          <div>
            <label className="block text-gray-700">Available Location</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={(e) => SetavailableLocation(e.target.value)}
            />
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-gray-700">Fuel Type</label>
            <select
              className="w-full"
              onChange={(e) => SetfuelType(e.target.value)}
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
              onChange={(e) => SetnoOfSeats(e.target.value)}
            />
          </div>

          {/* Transmission Type */}
          <div>
            <label className="block text-gray-700">Transmission Type</label>
            <select
              className="w-full"
              onChange={(e) => SettransmissionType(e.target.value)}
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
              onChange={(e) => SetpenaltyAmount(e.target.value)}
            />
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default AddCar;
