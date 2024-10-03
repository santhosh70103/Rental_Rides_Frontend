import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RentModal = ({ isOpen, onClose, onConfirm }) => {
  const [pickupDate, setPickupDate] = useState("");
  const [rentalDays, setRentalDays] = useState("");
  const [error, setError] = useState(""); // State for handling validation error messages
  const navigate = useNavigate();

  // Get today's date and date 3 days from today
  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 3);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0]; // Format date as 'YYYY-MM-DD'
  };

  const handleConfirm = () => {
    const selectedDate = new Date(pickupDate);

    // Validation: Check if pickupDate is valid
    if (!pickupDate) {
      setError("Please select a pickup date.");
      return;
    }

    if (selectedDate < today) {
      setError("Pickup date cannot be in the past.");
      return;
    }

    if (selectedDate > maxDate) {
      setError("Pickup date cannot be more than 3 days from today.");
      return;
    }

    if (!rentalDays || rentalDays <= 0) {
      setError("Please enter valid rental days.");
      return;
    }

    setError(""); // Clear error if validation passes
    onConfirm({ pickupDate, rentalDays });
    onClose();

    // Redirect to the Payment page
    
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Confirm Your Rental</h2>
        
        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error messages */}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Pickup Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={pickupDate}
            min={formatDate(today)} // Set the minimum date to today
            max={formatDate(maxDate)} // Set the maximum date to 3 days from today
            onChange={(e) => setPickupDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Days of Rent</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={rentalDays}
            onChange={(e) => setRentalDays(e.target.value)}
            min="1"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button className="bg-gray-200 px-4 py-2 rounded-lg" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentModal;
