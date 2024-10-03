import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentDetails = () => {
  const [payments, setPayments] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [filterEmail, setFilterEmail] = useState("");

  // Fetch payment details
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('https://localhost:7208/api/Payments');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payment details:', error);
      }
    };
    fetchPayments();
  }, []);

  // Fetch rental details
  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await axios.get('https://localhost:7208/api/Rented_Car');
        setRentals(response.data);
      } catch (error) {
        console.error('Error fetching rental details:', error);
      }
    };
    fetchRentals();
  }, []);

  // Fetch customer details
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://localhost:7208/api/Customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };
    fetchCustomers();
  }, []);

  // Find rental details for a given rental ID
  const getRentalDetails = (rentalId) => {
    return rentals.find((rental) => rental.Rental_Id === rentalId);
  };

  // Find customer details based on rental customer ID
  const getCustomerDetails = (customerId) => {
    return customers.find((customer) => customer.Customer_Id === customerId);
  };

  // Filter payments based on customer email
  const filteredPayments = filterEmail
    ? payments.filter(payment => {
        const rental = getRentalDetails(payment.Rental_Id);
        const customer = rental ? getCustomerDetails(rental.Customer_ID) : null;
        return customer && customer.Customer_Email.toLowerCase().includes(filterEmail.toLowerCase());
      })
    : payments;

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-white">Payment Details</h1>

      {/* Filter by customer email */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          className="border border-gray-700 rounded-lg px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-gray-400"
          placeholder="Filter by Customer Email"
          value={filterEmail}
          onChange={(e) => setFilterEmail(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPayments.map((payment) => {
          const rental = getRentalDetails(payment.Rental_Id);
          const customer = rental ? getCustomerDetails(rental.Customer_ID) : null;
          return (
            <div key={payment.Payment_Id} className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <h2 className="text-xl font-bold mb-2">{customer ? customer.Customer_Name : "N/A"}</h2>
              <p className="text-gray-400 mb-1">Email: {customer ? customer.Customer_Email : "N/A"}</p>
              <p className="text-gray-400 mb-1">Payment Type: {payment.Payment_Type}</p>
              <p className="text-gray-400 mb-1">Total Amount: ${payment.Total_Amount}</p>
              <div className="flex items-center mt-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-bold ${
                    payment.Payment_Status === "1"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {payment.Payment_Status === "1" ? "Paid" : "Pending"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentDetails;
