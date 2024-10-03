// Main.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

const Main = ({ filters }) => {
    const [cars, setCars] = useState([]);
  console.log(filters);

  useEffect(() => {
    async function fetchCarDetails() {
      try {
        const CarDataResponse = await axios.get(
          "https://localhost:7208/api/GetCarWithFeeedBack"
        );
        setCars(CarDataResponse.data);
        console.log(CarDataResponse.data)

        
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    }
    fetchCarDetails();
  }, []);

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

    const Transmission_type =
      filters.transmissionTypes.length > 0
        ? filters.transmissionTypes.includes(car.Transmission_Type)
        : true;
        console.log(car)

    const City=filters.cities.length>0
      ? filters.cities.includes(car.Available_Location)
      :true
      console.log(filters.cities)
    return (
      withinPriceRange && matchesFuelType && matchesSeats && Transmission_type  && City
    );
  });

  return (
    <main className="w-3/4 ml-6 h-full">
      {/* Fixed Header */}
      <div className="bg-white p-4 shadow rounded mb-4 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div>
            Cars Found: <strong>{filteredCars.length}</strong>
          </div>
        </div>
      </div>
      {/* Scrollable Content */}
      <div
        className="h-full overflow-auto scrollbar-hidden "
        style={{ maxHeight: "calc(100vh - 8rem)" }}
      >
        {filteredCars.length === 0 ? (
          <div>No cars available based on your filters.</div>
        ) : (
          filteredCars.map((car) => <CarCard key={car.Car_Id} car={car} />)
        )}
      </div>
    </main>
  );
};

export default Main;
