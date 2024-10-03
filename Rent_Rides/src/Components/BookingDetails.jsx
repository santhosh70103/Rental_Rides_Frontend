import axios from "axios";
import { useEffect, useState } from "react";
import { FaCarAlt, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaEdit, FaClosedCaptioning, FaCheckSquare } from "react-icons/fa";

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const bookingResponse = await axios.get("https://localhost:7208/api/Rented_Car");
        const customerResponse = await axios.get("https://localhost:7208/api/Customers");

        setBookings(bookingResponse.data);
        console.log(bookingResponse.data)
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

  const fetchCarDetails = async (carId) => {
    try {
      const response = await axios.get(`https://localhost:7208/api/Car_Details/${carId}`);
      setSelectedCar(response.data);
    } catch (error) {
      
      console.error("Error fetching car details:", error);
    }
  };

  const fetchCustomerDetails = (customerId) => {
    const customer = customers.find((c) => c.Customer_Id === customerId);
    if (customer) {
      setSelectedCustomer(customer);
    }
  };

  const closeDetails = () => {
    setSelectedCustomer(null);
    setSelectedCar(null);
  };

  const sendEmail = async (customerEmail, penaltyPerDay) => {
    try {
      await axios.post("https://localhost:7208/api/SendEmail", {
        to: customerEmail,
        subject: "Return Date Expired",
        body: `Your return date has expired. Please note that you will be charged a penalty of $${penaltyPerDay} per day until the car is returned.`
      });
      alert("Email sent successfully.");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Booking Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking, index) => {
          const isReturnDatePassed = new Date(booking.Expected_Return_Date) < new Date();
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-gray-200 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FaCarAlt className="text-gray-600 text-2xl mr-3" />
                    <h3 className="font-semibold text-xl text-gray-900">{getCustomerName(booking.Customer_ID)}</h3>
                  </div>
                  {isReturnDatePassed && (
                    <button
                      className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
                      onClick={() => sendEmail(getCustomerName(booking.Customer_ID), booking.Penalty_Amt)}
                    >
                      Send Email
                    </button>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-2">
                  <FaCalendarAlt className="inline-block text-gray-400 mr-2" />
                  <strong>Car ID:</strong> {booking.Car_Id}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <FaCalendarAlt className="inline-block text-gray-400 mr-2" />
                  <strong>Pickup Date:</strong> {booking.PickUp_Date}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <FaCalendarAlt className="inline-block text-gray-400 mr-2" />
                  <strong>Return Date:</strong> {booking.Expected_Return_Date}
                </p>

                <div className="flex flex-wrap mb-4">
                  {String(booking.Status)
                    .split("|")
                    .map((status, i) => (
                      <span
                        key={i}
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mr-2 mb-2 ${status === "1"
                            ? "bg-green-200 text-green-800"
                            : status === "5"
                              ? "bg-red-500 text-white"
                              : "bg-red-200 text-red-800"
                          }`}
                      >
                        {status === "4" ? (
                          <div>
                            <FaCheckCircle className="inline-block text-green-600 mr-1" />Completed
                          </div>
                        ) : status === "5" ? (
                          <div>
                            <FaCheckSquare className="inline-block text-yellow-600 mr-1" />Cancelled
                          </div>
                        ) : (
                          <FaTimesCircle className="inline-block text-red-600 mr-1" />
                        )}
                        
                      </span>
                    ))}
                </div>

                <div className="flex justify-between">
                  <button
                    className="w-full text-center py-2 rounded-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 transition duration-200 mr-2 transform hover:scale-105"
                    onClick={() => fetchCustomerDetails(booking.Customer_ID)}
                  >
                    Customer Details
                  </button>
                  <button
                    className="w-full text-center py-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition duration-200 ml-2 transform hover:scale-105"
                    onClick={() => fetchCarDetails(booking.Car_Id)}
                  >
                    Car Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Customer Details</h3>
            <p><strong>Name:</strong> {selectedCustomer.Customer_Name}</p>
            <p><strong>Email:</strong> {selectedCustomer.Customer_Email}</p>
            <p><strong>Phone:</strong> {selectedCustomer.Customer_PhoneNo}</p>
            <button className="mt-4 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200" onClick={closeDetails}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Car Details Modal */}
      {selectedCar && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Car Details</h3>
            <p><strong>Car Name:</strong> {selectedCar.Car_Name}</p>
            <p><strong>Model Year:</strong> {selectedCar.Model_Year}</p>
            <p><strong>Rental Price:</strong> ${selectedCar.Rental_Price_PerDay} per day</p>
            <p><strong>Fuel Type:</strong> {selectedCar.Fuel_Type}</p>
            <button className="mt-4 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200" onClick={closeDetails}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingDetails;
