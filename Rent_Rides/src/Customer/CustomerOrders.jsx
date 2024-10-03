import axios from "axios";
import { useEffect, useState } from "react";
import { FaCar, FaUser, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState({ points: 0, query: "" });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState({});
  const id = localStorage.getItem("Id");
  const navigate = useNavigate();
  var name = "";

  useEffect(() => {
    if (!id) {
      alert("Login to see your Orders");
      navigate("/CustomerLogin");
      return;
    }

    const fetchData = async () => {
      try {
        const customerResponse = await axios.get(`https://localhost:7208/api/Customers/${id}`);
        setCustomer(customerResponse.data);
        name = customerResponse.data.Customer_Name;

        const orderResponse = await axios.get(`https://localhost:7208/api/OrderService/customer/${customerResponse.data.Customer_Email}`);
        const carResponse = await axios.get("https://localhost:7208/api/Car_Details");

        setOrders(orderResponse.data[0]);
        setCars(carResponse.data);
        setLoading(false);
      } catch (err) {
        setError("No Order Records Found For " + name);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  const cancelOrder = async (orderId, index) => {
    try {
      await axios.post(`https://localhost:7208/api/Booking/Cancel/${orderId}`);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.Order_Id === orderId ? { ...order, Order_Status: 5 } : order
        )
      );
      alert(`Order No ${index + 1} has been canceled.`);
    } catch (err) {
      console.error("Error canceling order:", err);
      alert("Failed to cancel order.");
    }
  };

  const addFeedback = async (rentalId) => {
    try {
      await axios.post(`https://localhost:7208/api/User_Feedback/add/${rentalId}`, {
        Points: feedback.points,
        Query: feedback.query
      });
      alert("Feedback added successfully.");

      // Update the feedbackSubmitted state to prevent showing the feedback form again
      setFeedbackSubmitted((prevState) => ({
        ...prevState,
        [rentalId]: true
      }));
    } catch (err) {
      console.error("Error adding feedback:", err);
      alert("Failed to add feedback.");
    }
  };

  const handleFeedbackChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
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
          Orders for {customer ? customer.Customer_Name : "Customer"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orders.map((order, index) => {
            const car = cars.find((c) => c.Car_Id === order.Car_Id);

            return (
              <div
                key={order.Order_Id}
                className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    Order No: {index + 1}
                  </h3>

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
                      onClick={() => cancelOrder(order.Order_Id, index)}
                      className="w-full py-2 text-center text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                      Cancel Order
                    </button>
                  )}

                  {order.Order_Status === 4 && !feedbackSubmitted[order.Rental_Id] && (
                    <div>
                      <textarea
                        className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                        placeholder="Write feedback..."
                        name="query"
                        value={feedback.query}
                        onChange={handleFeedbackChange}
                      />
                      <input
                        type="number"
                        className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                        placeholder="Points (0-5)"
                        name="points"
                        value={feedback.points}
                        onChange={handleFeedbackChange}
                        min="0"
                        max="5"
                      />
                      <button
                        onClick={() => addFeedback(order.Rental_Id)}
                        className="w-full py-2 text-center text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-200 mt-2"
                      >
                        Add Feedback
                      </button>
                    </div>
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
