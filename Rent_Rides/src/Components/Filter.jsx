// Filter.js
import React from 'react';

const Filter = ({ onFilterChange, filters }) => {
    const { fuelTypes, seats, minPrice, maxPrice, cities, transmissionTypes } = filters;

    const handleFuelTypeChange = (event) => {
        const { value, checked } = event.target;
        onFilterChange('fuelTypes', checked 
            ? [...fuelTypes, value] 
            : fuelTypes.filter((type) => type !== value));
    };

    const handleSeatsChange = (event) => {
        const { value, checked } = event.target;
        console.log(event.target)
        onFilterChange('seats', checked 
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
        
        const { name, checked } = event.target;
        
        onFilterChange('transmissionTypes', checked 
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
        <aside className="w-1/4 bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold mb-4">Filter</h2>
            <div className="mb-4">
                <h3 className="font-semibold mb-2">Fuel Type</h3>
                <ul>
                    {['Gasoline', 'Diesel', 'Electric'].map((type) => (
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
                    {['2', '4', '5', '6 or more'].map((seat) => (
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
                    {['Automatic', 'Manual'].map((type) => (
                        <li key={type}>
                            <input
                                type="checkbox"
                                id={type}
                                name={type}
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
                    {['New York', 'Los Angeles', 'Chicago', 'Houston'].map((city) => (
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

export default Filter;
