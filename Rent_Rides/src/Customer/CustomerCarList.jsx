import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Filter = ({ onFilterChange, filters }) => {
  const { fuelTypes, seats, minPrice, maxPrice, cities, transmissionTypes } =
    filters;

  const handleFuelTypeChange = (event) => {
    const { value, checked } = event.target;
    onFilterChange(
      "fuelTypes",
      checked
        ? [...fuelTypes, value]
        : fuelTypes.filter((type) => type !== value)
    );
  };

  const handleSeatsChange = (event) => {
    const { value, checked } = event.target;
    onFilterChange(
      "seats",
      checked ? [...seats, value] : seats.filter((seat) => seat !== value)
    );
  };

  const handleCityChange = (event) => {
    const { value, checked } = event.target;
    onFilterChange(
      "cities",
      checked ? [...cities, value] : cities.filter((city) => city !== value)
    );
  };

  const handleTransmissionChange = (event) => {
    const { value, checked } = event.target;
    onFilterChange(
      "transmissionTypes",
      checked
        ? [...transmissionTypes, value]
        : transmissionTypes.filter((type) => type !== value)
    );
  };

  const handleMinPriceChange = (event) => {
    onFilterChange("minPrice", event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    onFilterChange("maxPrice", event.target.value);
  };

  return (
    <aside className="w-1/4 bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-4">Filter</h2>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Fuel Type</h3>
        <ul>
          {["Gasoline", "Diesel", "Electric"].map((type) => (
            <li key={type}>
              <input
                type="checkbox"
                id={type}
                value={type}
                onChange={handleFuelTypeChange}
              />
              <label htmlFor={type}>{type}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Seats</h3>
        <ul>
          {["2", "4", "5", "6 or more"].map((seat) => (
            <li key={seat}>
              <input
                type="checkbox"
                id={seat}
                value={seat}
                onChange={handleSeatsChange}
              />
              <label htmlFor={seat}>{seat}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min Price"
            className="border p-2 rounded w-full"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="border p-2 rounded w-full"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Transmission</h3>
        <ul>
          {["Automatic", "Manual"].map((type) => (
            <li key={type}>
              <input
                type="checkbox"
                id={type}
                value={type}
                onChange={handleTransmissionChange}
              />
              <label htmlFor={type}>{type}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">City</h3>
        <ul>
          {["New York", "Los Angeles", "Chicago", "Houston"].map((city) => (
            <li key={city}>
              <input
                type="checkbox"
                id={city}
                value={city}
                onChange={handleCityChange}
              />
              <label htmlFor={city}>{city}</label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

const CarCard = ({ car }) => {
  const renderStars = (rating) => {
    const validRating = Math.max(0, Math.min(5, Number(rating))) || 0;
    const fullStars = Math.floor(validRating);
    const halfStars = validRating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

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

  const Main = ({ filters }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
      async function FetchCarDetails() {
        try {
          const CarDataResponse = await axios.get(
            "https://localhost:7208/api/GetCarWithFeeedBack"
          );
          setCars(CarDataResponse.data);
        } catch (error) {
          console.error("Error fetching car details:", error);
        }
      }
      FetchCarDetails();
    }, []);

    // Filtering based on selected filters
    const filteredCars = cars.filter((car) => {
      const withinPriceRange =
        (filters.minPrice ? car.Price_Per_Day >= filters.minPrice : true) &&
        (filters.maxPrice ? car.Price_Per_Day <= filters.maxPrice : true);

      const matchesFuelType =
        filters.fuelTypes.length > 0
          ? filters.fuelTypes.includes(car.Fuel_Type)
          : true;

      const matchesSeats =
        filters.seats.length > 0
          ? filters.seats.includes(car.Number_Of_Seats.toString())
          : true;

      const matchesTransmission =
        filters.transmissionTypes.length > 0
          ? filters.transmissionTypes.includes(car.Transmission_type)
          : true;

      const matchesCity =
        filters.cities.length > 0 ? filters.cities.includes(car.City) : true; // Ensure this matches your car object structure

      return (
        withinPriceRange &&
        matchesFuelType &&
        matchesSeats &&
        matchesTransmission &&
        matchesCity
      );
    });

    return (
      <main className="w-3/4 ml-6 h-full">
        <div className="bg-white p-4 shadow rounded mb-4">
          <div className="flex justify-between items-center">
            <div>
              Cars Found: <strong>{filteredCars.length}</strong>
            </div>
            <div>
              Sort by:
              <select className="ml-2 border p-2 rounded">
                <option>Price</option>
                <option>Rating</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Scrollable Car List */}
        <div className="overflow-y-auto h-[calc(100vh-200px)]">
          {" "}
          {/* Adjust height based on your layout */}
          {filteredCars.map((car) => (
            <CarCard car={car} key={car.Car_Id} />
          ))}
        </div>
      </main>
    );
  };

  const CarList = () => {
    const [filters, setFilters] = useState({
      fuelTypes: [],
      seats: [],
      minPrice: "",
      maxPrice: "",
      cities: [], // Added cities to the filters
      transmissionTypes: [], // Added transmissionTypes to the filters
    });

    const handleFilterChange = (key, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [key]: value,
      }));
    };

    return (
      <div className="flex h-screen">
        <Filter onFilterChange={handleFilterChange} filters={filters} />
        <Main filters={filters} />
      </div>
    );
  };
};
export default CarList;
