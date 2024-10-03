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
        const { value, checked } = event.target;
        onFilterChange('cities', checked 
            ? [...cities, value] 
            : cities.filter((city) => city !== value));
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
        <aside className="bg-[#1f2937] h-screen w-1/4   p-6 shadow-lg  overflow-auto scrollbar-hidden">
  <h2 className="text-lg font-bold mb-6 text-white">Filter</h2>

  {/* Fuel Type Filter */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2 text-white">Fuel Type</h3>
    <ul className="border p-4 rounded-md">
      {['Gasoline', 'Diesel', 'Electric'].map((type) => (
        <li key={type} className="mb-2">
          <input
            type="checkbox"
            id={type}
            value={type}
            onChange={handleFuelTypeChange}
            className="mr-2 h-4 w-4 text-white rounded border-gray-300 focus:ring-blue-400"
          />
          <label
            htmlFor={type}
            className="text-white hover:text-blue-500 cursor-pointer"
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
    <ul className="border p-4 rounded-md">
      {['2', '4', '5', '6'].map((seat) => (
        <li key={seat} className="mb-2">
          <input
            type="checkbox"
            id={seat}
            value={seat}
            onChange={handleSeatsChange}
            className="mr-2 h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-400"
          />
          <label
            htmlFor={seat}
            className="text-white hover:text-green-500 cursor-pointer"
          >
            {seat}
          </label>
        </li>
      ))}
    </ul>
  </div>

  {/* Price Range Filter */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2 text-purple-500">Price Range</h3>
    <div className="flex space-x-3 bg-purple-100 p-4 rounded-md">
      <input
        type="number"
        placeholder="Min Price"
        className="border-2 border-purple-200 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={minPrice}
        onChange={handleMinPriceChange}
      />
      <input
        type="number"
        placeholder="Max Price"
        className="border-2 border-purple-200 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={maxPrice}
        onChange={handleMaxPriceChange}
      />
    </div>
  </div>

  {/* Transmission Type Filter */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2 text-yellow-500">Transmission</h3>
    <ul className="bg-yellow-100 p-4 rounded-md">
      {['Automatic', 'Manual'].map((type) => (
        <li key={type} className="mb-2">
          <input
            type="checkbox"
            id={type}
            value={type}
            onChange={handleTransmissionChange}
            className="mr-2 h-4 w-4 text-yellow-600 rounded border-gray-300 focus:ring-yellow-400"
          />
          <label
            htmlFor={type}
            className="text-gray-700 hover:text-yellow-500 cursor-pointer"
          >
            {type}
          </label>
        </li>
      ))}
    </ul>
  </div>

  {/* City Filter */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2 text-red-500">City</h3>
    <ul className="bg-red-100 p-4 rounded-md">
      {['New York', 'Los Angeles', 'Chicago', 'Houston'].map((city) => (
        <li key={city} className="mb-2">
          <input
            type="checkbox"
            id={city}
            value={city}
            onChange={handleCityChange}
            className="mr-2 h-4 w-4 text-red-600 rounded border-gray-300 focus:ring-red-400"
          />
          <label
            htmlFor={city}
            className="text-gray-700 hover:text-red-500 cursor-pointer"
          >
            {city}
          </label>
        </li>
      ))}
    </ul>
  </div>
</aside>

    );
};

export default Filter;
