// Main.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

const Main = ({ filters }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function fetchCarDetails() {
            try {
                const CarDataResponse = await axios.get("https://localhost:7208/api/GetCarWithFeeedBack");
                setCars(CarDataResponse.data); 
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        }
        fetchCarDetails();
    }, []);

    const filteredCars = cars.filter(car => {
        const withinPriceRange =
            (filters.minPrice ? car.Price_Per_Day >= filters.minPrice : true) &&
            (filters.maxPrice ? car.Price_Per_Day <= filters.maxPrice : true);

        const matchesFuelType =
            filters.fuelTypes.length > 0 ? filters.fuelTypes.includes(car.Fuel_Type) : true;

        const matchesSeats =
            filters.seats.length > 0 ? filters.seats.includes(car.Number_Of_Seats.toString()) : true;

        return withinPriceRange && matchesFuelType && matchesSeats;
    });

    return (
        <main className="w-3/4 ml-6 h-full">
            {/* Fixed Header */}
            <div className="bg-white p-4 shadow rounded mb-4 sticky top-0 z-10">
                <div className="flex justify-between items-center">
                    <div>Cars Found: <strong>{filteredCars.length}</strong></div>
                </div>
            </div>
            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
                {filteredCars.length === 0 ? (
                    <div>No cars available based on your filters.</div>
                ) : (
                    filteredCars.map((car) => <CarCard key={car.Car_Name} car={car} />)
                )}
            </div>
        </main>
    );
};

export default Main;
