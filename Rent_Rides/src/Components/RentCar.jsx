import React, { useEffect, useState } from "react";
import axios from "axios";

const RentCar = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [email, setEmail] = useState("");
  const [customers, setCustomers] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch orders, customers, and car details
    const fetchData = async () => {
      try {
        const [ordersResponse, customersResponse, carsResponse] = await Promise.all([
          axios.get("https://localhost:7208/api/Orders"),
          axios.get("https://localhost:7208/api/Customers"),
          axios.get("https://localhost:7208/api/Car_Details"),
        ]);

        setOrders(ordersResponse.data);
        console.log(ordersResponse.data)
        setFilteredOrders(ordersResponse.data);
        setCustomers(customersResponse.data);
        setCars(carsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle both rent and return car actions
  const handleStatusChange = async (customerEmail, orderId, currentStatus) => {
    try {
      let response;

      if (currentStatus === 1) {
        // Rent the car
        response = await axios.post(
          `https://localhost:7208/api/RentalService/rent/${customerEmail}`
        );
        console.log("Rent response:", response.data);
      } else if (currentStatus === 2) {
        // Return the car
        response = await axios.post(
          `https://localhost:7208/api/ReturnService/ReturnCar/${customerEmail}/${orderId}`
        );
        console.log("Return response:", response.data);
      }

      // Update the order status locally after successful API call
      const updatedOrders = orders.map((order) =>
        order.Order_Id === orderId
          ? { ...order, Order_Status: currentStatus === 1 ? 2 : 4 } // Change status to 2 for rented, 4 for returned
          : order
      );
      setOrders(updatedOrders);

      // Update filtered orders as well if the email filter is applied
      setFilteredOrders(updatedOrders);
    } catch (error) {
      console.error("Error calling rent/return API:", error);
    }
  };

  // Function to handle button text based on order status
  const getStatusButton = (status, customerEmail, orderId) => {
    switch (status) {
      case 1:
        return (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleStatusChange(customerEmail, orderId, 1)}
          >
            Rent
          </button>
        );
      case 2:
        return (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => handleStatusChange(customerEmail, orderId, 2)}
          >
            Return
          </button>
        );
      case 3:
        return <button className="bg-yellow-500 text-white px-4 py-2 rounded">Pay Now</button>;
      case 4:
        return (
          <button className="bg-gray-500 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
            Completed
          </button>
        );
      case 5:
        return (
          <button className="bg-red-500 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
            Cancelled
          </button>
        );
      default:
        return null;
    }
  };

  // Function to display readable order status
  const getOrderStatus = (status) => {
    switch (status) {
      case 1:
        return <span className="text-blue-500">Reserved</span>;
      case 2:
        return <span className="text-green-500">Rented</span>;
      case 3:
        return <span className="text-yellow-500">Pending</span>;
      case 4:
        return <span className="text-gray-500">Completed</span>;
      case 5:
        return <span className="text-red-500">Cancelled</span>;
      default:
        return "Unknown";
    }
  };

  // Function to filter orders by email
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    if (inputEmail === "") {
      setFilteredOrders(orders); // Show all orders if no email is entered
    } else {
      // Filter orders based on customer email
      const filtered = orders.filter((order) => {
        const customer = customers.find((c) => c.Customer_Id === order.Customer_ID);
        return customer?.Customer_Email?.toLowerCase() === inputEmail.toLowerCase();
      });
      setFilteredOrders(filtered);
    }
  };

  // Get customer name by CustomerID
  const getCustomerNameById = (customerId) => {
    const customer = customers.find((c) => c.Customer_Id === customerId);
    return customer ? customer.Customer_Name : "Unknown";
  };

  // Get customer email by CustomerID
  const getCustomerEmailById = (customerId) => {
    const customer = customers.find((c) => c.Customer_Id === customerId);
    return customer ? customer.Customer_Email : "Unknown";
  };

  // Get car name by CarID
  const getCarNameById = (carId) => {
    const car = cars.find((c) => c.Car_Id === carId);
    return car ? car.Car_Name : "Unknown";
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 p-8">
  <div className="container mx-auto">
    

    {/* Email filter input */}
    <div className="mb-8">
      <input
        type="text"
        placeholder="Filter by customer email"
        value={email}
        onChange={handleEmailChange}
        className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out shadow-md"
      />
    </div>

    {/* Orders Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredOrders.length === 0 ? (
        <p className="text-gray-600 text-center col-span-3">No orders found for this customer.</p>
      ) : (
        filteredOrders.map((order, index) => (
          <div
            key={order.Order_Id}
            className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Order Number: <span className="text-blue-500">{index + 1}</span>
            </h3>
            <p className="text-gray-600">
              Customer: <strong>{getCustomerNameById(order.Customer_ID)}</strong>
            </p>
            <p className="text-gray-600">Car: <strong>{getCarNameById(order.Car_Id)}</strong></p>
            <p className="text-gray-600">Rental ID: <strong>{order.Rental_Id}</strong></p>
            <p className="text-gray-600">Order Status: <strong>{getOrderStatus(order.Order_Status)}</strong></p>
            <p className="text-gray-600 font-bold">Total Price: <span className="text-green-600">${order.Total_Price}</span></p>

            {/* Status button based on order status */}
            <div className="mt-4">
              {getStatusButton(order.Order_Status, getCustomerEmailById(order.Customer_ID), order.Order_Id)}
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</div>
  );
};


export default RentCar;
