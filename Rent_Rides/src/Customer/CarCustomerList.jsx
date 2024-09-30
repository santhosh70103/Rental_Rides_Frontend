// CarList.js
import React, { useState } from 'react';
import Filter from './CustomerCarFilter';
import Main from './CustomerCarMain';

const CarList = () => {
    const [filters, setFilters] = useState({
        fuelTypes: [],
        seats: [],
        minPrice: '',
        maxPrice: '',
        cities: [],
        transmissionTypes: [],
    });

    const handleFilterChange = (filterName, value) => {
        console.log(filterName,value)
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    return (
        <div className="flex">
            <Filter onFilterChange={handleFilterChange} filters={filters} />
            <Main filters={filters} />
        </div>
    );
};

export default CarList;
