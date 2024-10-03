import React from "react";

const Payment = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="bg-black opacity-50 absolute inset-0"></div> {/* Background Overlay */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full z-10">
        <h1 className="text-2xl font-bold mb-6">Payment Information</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Select Payment Method
          </label>
          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
              Google Pay
            </button>
            <button className="flex-1 bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
              PhonePe
            </button>
            <button className="flex-1 bg-gray-600 text-white p-2 rounded hover:bg-gray-700 transition">
              Cash on Delivery
            </button>
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">
          Or Enter Card Details
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="flex mb-4">
            <div className="flex-1 mr-2">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="expiryDate"
              >
                Expiry Date
              </label>
              <input
                id="expiryDate"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="cvv"
              >
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="123"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-red-600 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Payment;
