import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, SetphoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const userData = {
      Admin_Name: fullName,
      Admin_Email: email,
      Admin_PhoneNo: phoneNo,
      Admin_Password: password,
      Role: "Admin",
    };

    try {
      const registerResponse = await axios.post(
        "https://localhost:7208/api/Admins/AdminReg",
        userData
      );
      console.log(registerResponse.data);

      // Navigate to login or dashboard after successful registration
      navigate("/Login"); // Redirect to login page after registration
    } catch (e) {
      setError(e.message); // Set error message if registration fails
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#1f2937] text-white flex flex-col justify-center items-center p-10">
        <div className="text-6xl mb-4">!!!</div>
        <h1 className="text-5xl font-bold mb-4">
          Welcome To
          <br />
          <span role="img" aria-label="waving hand"></span>
        </h1>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl font-bold mb-6">RentRides</h1>
        <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
        <p className="text-sm mb-6">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-500 ">Login Now</Link>
          .
        </p>
        <form className="w-full max-w-sm" onSubmit={handleRegister}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="UrEmail@gmail.com"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type=""
              placeholder="Mobile No"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) => SetphoneNo(e.target.value)}
              value={phoneNo}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />
          </div>

          <button
            className="w-full bg-black text-white p-3 rounded mb-4"
            type="submit"
          >
            Register Now
          </button>

          <button className="w-full bg-white text-black border border-gray-300 p-3 rounded flex items-center justify-center">
            <i className="fab fa-google mr-2"></i> Register with Google
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}{" "}
        {/* Display error if any */}
      </div>
    </div>
  );
};

export default Register;
