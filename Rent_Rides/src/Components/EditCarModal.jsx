// EditCarModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditCarModal = ({ car, isOpen, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
        Car_Name: '',
        Car_Type: '',
        Car_Model_Year: '',
        Rental_Price_PerHour: '',
        Rental_Price_PerDay: '',
        Available_Cars: '',
        Available_Location: '',
        Fuel_Type: '',
        No_of_seats: '',
        Transmission_type: '',
        Penalty_Amt: '',
    });

    useEffect(() => {
        if (car) {
            const { Car_Name, Car_Type, Car_Model_Year, Rental_Price_PerHour, Rental_Price_PerDay, Available_Cars, Available_Location, Fuel_Type, No_of_seats, Transmission_type, Penalty_Amt } = car;
            setFormData({
                Car_Name,
                Car_Type,
                Car_Model_Year,
                Rental_Price_PerHour,
                Rental_Price_PerDay,
                Available_Cars,
                Available_Location,
                Fuel_Type,
                No_of_seats,
                Transmission_type,
                Penalty_Amt,
            });
        }
    }, [car]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://localhost:7208/api/Car_Details/${formData.Car_Id}`, formData);
            console.log(response.data);
            onUpdate(formData);
            onClose();
        } catch (error) {
            console.error('Error updating car details:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg w-1/3 max-h-[80vh] overflow-y-auto"> 
                <h2 className="text-lg font-bold mb-2">Edit Car Details</h2> 
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key) => (
                        <div key={key} className="mb-1"> 
                            <label className="block mb-1 text-sm">{key.replace(/_/g, ' ')}</label> 
                            <input
                                type="text"
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className="border p-1 rounded w-full" 
                                required
                            />
                        </div>
                    ))}
                    <div className="flex justify-end mt-2"> 
                        <button type="button" className="bg-gray-500 text-white px-3 py-1 rounded mr-2 text-sm" onClick={onClose}> 
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded text-sm"> 
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCarModal;
