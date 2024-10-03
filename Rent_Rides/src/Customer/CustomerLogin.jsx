import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [role, setRole] = useState("Customer");
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await axios.post(
        "https://localhost:7208/api/Customers/CustomerLogin", 
        { Email: email, Password: password } // Send email and password in the request body
      );

      if (loginResponse.status === 200) {
         // Assuming the token is at the end
        localStorage.setItem('token', loginResponse.data.token); // Store the token
        localStorage.setItem('role', 'customer');
        localStorage.setItem('Id', loginResponse.data.Id);

         // Store the role as 'customer' in localStorage
        navigate(`/`); // Redirect to the customer car list page
      } else {
        setError(loginResponse.data);
      }
    } catch (error) {
      setError(error.response?.data || error.message);
    }
  };

  const handleAdminLogin=()=>{
    navigate("/AdminLogin");
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#1f2937] text-white flex flex-col justify-center items-center p-10">
        <div className="text-6xl mb-4">!!!</div>
        <h1 className="text-5xl font-bold mb-4">Welcome To Rent Rides</h1>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl font-bold mb-6">RentRides</h1>
        <h2 className="text-2xl font-semibold mb-4">Welcome Back</h2>
        <p className="text-sm mb-6">
          Don't have an account?{" "}
          <Link to="/CustomerReg" className="text-blue-500">
            Create Account
          </Link>
          , Takes less than a minute.
        </p>

        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              value="admin"
              checked={role === "admin"}
              onChange={
                (e) => {
                    setRole(e.target.value);
                    handleAdminLogin(); // Navigate to CustomerLogin when customer is selected
                  }
              }
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              value="Customer"
              checked={role === "Customer"}
              
            />
            Customer
          </label>
        </div>

        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button
            className="w-full bg-black text-white p-3 rounded mb-4"
            type="submit"
          >
            Login Now
          </button>
        </form>

        <p className="text-sm mt-4">
          Forgot password?{" "}
          <Link to="/UserForgetPassword" className="text-blue-500">
            Click here
          </Link>
        </p>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default CustomerLogin;