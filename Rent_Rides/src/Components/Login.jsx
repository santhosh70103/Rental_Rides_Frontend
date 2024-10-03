import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState(""); // Initialize with empty string
  const [password, setPassword] = useState(""); // Initialize with empty string
  const [error, setError] = useState(null);
  const [role, setRole] = useState("Admin"); // Set initial role to "admin" for default selection

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing

    // Prepare user data for admin login
    const userData = {
      Email: userName,
      Password: password,
    };

    try {
      let loginResponse;

      // Check if the selected role is admin
      if (role === "Admin") {
        loginResponse = await axios.post(
          "https://localhost:7208/api/Admins/AdminLogin",
          userData
        );

        if (loginResponse.data.flag === true) {
          // Store JWT token and role in local storage
          localStorage.setItem("token", loginResponse.data.token); // Assuming your API returns a JWT token
          localStorage.setItem("role", "Admin"); // Store the role as 'admin' in localStorage
          
          navigate(`/Admindash/${loginResponse.data.Id}`);
        } else {
          setError("Invalid Email or Password");
        }
      }
    } catch (e) {
      setError(e.message);
    }
  };

  // Function to handle customer radio button click
  const handleCustomerLogin = () => {
    navigate("/CustomerLogin"); // Navigate to CustomerLogin component
  };

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
          <Link to="/AdminReg" className="text-blue-500">
            Create Account
          </Link>
          , Takes less than a minute.
        </p>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              value="Admin"
              checked={role === "Admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              value="Customer"
              checked={role === "Customer"}
              onChange={(e) => {
                setRole(e.target.value);
                handleCustomerLogin(); // Navigate to CustomerLogin when customer is selected
              }}
            />
            Customer
          </label>
        </div>

        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="UrEmail@gmail.com"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName} // Controlled input value
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password} // Controlled input value
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
          Forget password{" "}
          <a href="#" className="text-blue-500">
            Click here
          </a>
        </p>
        {error && <p className="text-red-500 mt-4">{error}</p>}{" "}
        {/* Display error */}
      </div>
    </div>
  );
};

export default Login;