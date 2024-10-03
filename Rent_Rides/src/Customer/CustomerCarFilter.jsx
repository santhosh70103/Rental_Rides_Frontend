// Filter.js
import React from 'react';

const Filter = ({ onFilterChange, filters }) => {
    const { fuelTypes, seats, minPrice, maxPrice, cities, transmissionTypes } = filters;
    console.log(transmissionTypes)

    const handleFuelTypeChange = (event) => {
        const { value, checked } = event.target;
        onFilterChange('fuelTypes', checked 
            ? [...fuelTypes, value] 
            : fuelTypes.filter((type) => type !== value));
    };

    const handleSeatsChange = (event) => {
        const { value, checked } = event.target;
        console.log(value);
        onFilterChange('seats', checked && (value)
            ? [...seats, value] 
            : seats.filter((seat) => seat !== value));
    };
   

    const handleCityChange = (event) => {
      onFilterChange('cities', event.target.value); // update to handle selected city
  };
    

    const handleTransmissionChange = (event) => {
        const { value, checked } = event.target;
        console.log(value)
        onFilterChange('transmissionTypes', checked && (value)
            ? [...transmissionTypes, value] 
            : transmissionTypes.filter((type) => type !== value));
    };

    const handleMinPriceChange = (event) => {
        onFilterChange('minPrice', event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        onFilterChange('maxPrice', event.target.value);
    };

    return (
      <aside className="bg-[#1f2937] h-screen w-1/4 p-6 shadow-lg overflow-auto scrollbar-hidden">
      <h2 className="text-lg font-bold mb-6 text-white">Filter</h2>
  
      {/* Fuel Type Filter */}
      <div className="mb-6">
          <h3 className="font-semibold mb-2 text-white">Fuel Type</h3>
          <ul className="border p-4 rounded-md border-gray-600 bg-gray-800">
              {['Petrol', 'Diesel', 'Electric'].map((type) => (
                  <li key={type} className="mb-2">
                      <input
                          type="checkbox"
                          id={type}
                          value={type}
                          onChange={handleFuelTypeChange}
                          className="mr-2 h-4 w-4 text-white rounded border-gray-300 focus:ring-2 focus:ring-blue-400"
                      />
                      <label
                          htmlFor={type}
                          className="text-white hover:text-blue-500 cursor-pointer transition-colors duration-200"
                      >
                          {type}
                      </label>
                  </li>
              ))}
          </ul>
      </div>
  
      {/* Seats Filter */}
      <div className="mb-6">
          <h3 className="font-semibold mb-2 text-white">Seats</h3>
          <ul className="border p-4 rounded-md border-gray-600 bg-gray-800">
              {['2', '4', '5', '6'].map((seat) => (
                  <li key={seat} className="mb-2">
                      <input
                          type="checkbox"
                          id={seat}
                          value={seat}
                          onChange={handleSeatsChange}
                          className="mr-2 h-4 w-4 text-white rounded border-gray-300 focus:ring-2 focus:ring-blue-400"
                      />
                      <label
                          htmlFor={seat}
                          className="text-white hover:text-blue-500 cursor-pointer transition-colors duration-200"
                      >
                          {seat}
                      </label>
                  </li>
              ))}
          </ul>
      </div>
  
      {/* Price Range Filter */}
      <div className="mb-6">
          <h3 className="font-semibold mb-2 text-white">Price Range</h3>
          <div className="flex space-x-3 bg-gray-800 p-4 rounded-md">
              <input
                  type="number"
                  placeholder="Min Price"
                  className="border-2 border-gray-600 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
                  value={minPrice}
                  onChange={handleMinPriceChange}
              />
              <input
                  type="number"
                  placeholder="Max Price"
                  className="border-2 border-gray-600 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
              />
          </div>
      </div>
  
      {/* Transmission Type Filter */}
      <div className="mb-6">
          <h3 className="font-semibold mb-2 text-white">Transmission</h3>
          <ul className="border p-4 rounded-md border-gray-600 bg-gray-800">
              {['Automatic', 'Manual'].map((type) => (
                  <li key={type} className="mb-2">
                      <input
                          type="checkbox"
                          id={type}
                          value={type}
                          onChange={handleTransmissionChange}
                          className="mr-2 h-4 w-4 text-white rounded border-gray-300 focus:ring-2 focus:ring-blue-400"
                      />
                      <label
                          htmlFor={type}
                          className="text-white hover:text-blue-500 cursor-pointer transition-colors duration-200"
                      >
                          {type}
                      </label>
                  </li>
              ))}
          </ul>
      </div>
  
      {/* City Filter */}
      <div className="mb-6">
          <h3 className="font-semibold mb-2 text-white">City</h3>
          <select
              id="city"
              value={cities} // Assuming cities is a single selected city
              onChange={handleCityChange}
              className="border-2 border-gray-600 rounded-md p-2 w-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
              <option value="">Select a city</option>
              {[
                  'New York','Ariyalur', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri',
                  'Dindigul', 'Erode', 'Kanchipuram', 'Kanyakumari', 'Karur',
                  'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Nilgiris',
                  'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem',
                  'Sivagangai', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli',
                  'Tirunelveli', 'Tiruppur', 'Vellore', 'Viluppuram', 'Virudhunagar'
              ].map((city) => (
                  <option key={city} value={city}>
                      {city}
                  </option>
              ))}
          </select>
      </div>
  </aside>
    );
};

export default Filter;
