import axios from "axios";
import { useEffect, useState } from "react";
import { FaCar, FaUser, FaCalendarAlt, FaDollarSign } from "react-icons/fa";

const CustomerOrders = ({ customerEmail }) => {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mail = "Customer1@gmail.com";
  var sno=0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [orderResponse, customerResponse, carResponse] = await Promise.all([
          axios.get(`https://localhost:7208/api/OrderService/customer/${mail}`),
          axios.get("https://localhost:7208/api/Customers"),
          axios.get("https://localhost:7208/api/Car_Details"),
        ]);

        // Set orders, customers, and cars from the API responses
        setOrders(orderResponse.data[0]); // Adjusted to access the first element of the outer array
        setCustomers(customerResponse.data);
        setCars(carResponse.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching orders.");
        setLoading(false);
      }
    };

    fetchData();
  }, [customerEmail]);

  const cancelOrder = async (orderId) => {
    try {
      await axios.post(`https://localhost:7208/api/Booking/Cancel/${orderId}`);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.Order_Id === orderId ? { ...order, Order_Status: 5 } : order
        )
      );
      alert(`Order ID ${orderId} has been canceled.`);
    } catch (err) {
      console.error("Error canceling order:", err);
      alert("Failed to cancel order.");
    }
  };

  if (loading) {
    return <div className="text-center mt-20">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-600">{error}</div>;
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Orders for {customerEmail}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orders.map((order) => {
            
            // Find customer name by customer ID
            const customer = customers.find(c => c.Customer_Id === order.Customer_ID);
            // Find car name by car ID
            const car = cars.find(c => c.Car_Id === order.Car_Id);
            
            
            
            return (
              <div
                key={order.Order_Id}
                className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Order ID: {order.Order_Id}</h3>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    <FaCar className="inline-block text-gray-400 mr-2" />
                    <strong>Car Name:</strong> {car ? car.Car_Name : "Unknown"}
                  </p>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    <FaUser className="inline-block text-gray-400 mr-2" />
                    <strong>Customer Name:</strong> {customer ? customer.Customer_Name : "Unknown"}
                  </p>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    <FaCalendarAlt className="inline-block text-gray-400 mr-2" />
                    <strong>Rental ID:</strong> {order.Rental_Id}
                  </p>

                  <p className="text-sm text-gray-600 mb-2">
                    <FaDollarSign className="inline-block text-gray-400 mr-2" />
                    <strong>Total Price:</strong> ${order.Total_Price}
                  </p>

                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Status:</strong>{" "}
                    {order.Order_Status === 1
                      ? "Reserved"
                      : order.Order_Status === 2
                      ? "Rented"
                      : order.Order_Status === 3
                      ? "Penalty Pending"
                      : order.Order_Status === 4
                      ? "Completed"
                      : "Canceled"}
                  </p>

                  {order.Order_Status === 1 && (
                    <button
                      onClick={() => cancelOrder(order.Order_Id)}
                      className="w-full py-2 text-center text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                      Cancel Order
                    </button>
                  )}
                  <button className="w-full py-2 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200 mt-2">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerOrders;
