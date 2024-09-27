import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaCarAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
} from "react-icons/fa"; // Icon imports

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const bookingResponse = await axios.get("https://localhost:7208/api/Rented_Car");
        const customerResponse = await axios.get("https://localhost:7208/api/Customers");

        setBookings(bookingResponse.data);
        setCustomers(customerResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBookingData();
  }, []);

  const getCustomerName = (customerId) => {
    const customer = customers.find((customer) => customer.Customer_Id === customerId);
    return customer ? customer.Customer_Name : "Unknown Customer";
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
        Booking Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto h-96 scrollbar-hidden">
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-200 rounded-xl shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaCarAlt className="text-gray-800 text-2xl mr-3" />
                <h3 className="font-semibold text-xl text-gray-900">
                  {getCustomerName(booking.Customer_ID)}
                </h3>
              </div>

              <p className="text-sm text-gray-500 mb-3">
                <FaCalendarAlt className="inline-block text-gray-400 mr-2" />
                <strong>Car ID:</strong> {booking.Car_Id}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                <FaCalendarAlt className="inline-block text-gray-400 mr-2" />
                <strong>Pickup Date:</strong> {booking.PickUp_Date}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                <FaCalendarAlt className="inline-block text-gray-400 mr-2" />
                <strong>Return Date:</strong> {booking.Expected_Return_Date}
              </p>

              <div className="mt-4">
                {String(booking.Status)
                  .split("|")
                  .map((status, i) => (
                    <span
                      key={i}
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${
                        status === "Paid"
                          ? "bg-green-200 text-green-800"
                          : status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      } mr-2 mb-2`}
                    >
                      {status === "Paid" ? (
                        <FaCheckCircle className="inline-block text-green-600 mr-1" />
                      ) : status === "Pending" ? (
                        <FaEdit className="inline-block text-yellow-600 mr-1" />
                      ) : (
                        <FaTimesCircle className="inline-block text-red-600 mr-1" />
                      )}
                      {status}
                    </span>
                  ))}
              </div>
            </div>
            <div className="bg-gray-100 p-4 text-center">
              <button
                className="w-full text-center py-2 rounded-lg font-bold text-white transform hover:scale-105 transition-transform duration-200 bg-blue-500 hover:bg-blue-600"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingDetails;
