import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [userName, setUserName] = useState("");  // Initialize with empty string
  const [password, setPassword] = useState("");  // Initialize with empty string
  const [error, setError] = useState(null);

  const Navigate= useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent form from refreshing

    const userData = {
      Email: userName,  // Fix typo: Email is correct
      Password: password // Fix typo: Password should be correct
    };

    try {
      const loginResponse = await axios.post("https://localhost:7208/api/Admins/AdminLogin", userData);

      console.log(loginResponse.data);

      
      if(loginResponse.data.flag  === true){
        Navigate("/Admindash");
      }
      else{
        setError("Invalid Email or Password");
      }



    } catch (e) {
      setError(e.message);
      // console.log(e.message);
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
        <p className="text-lg text-center"></p>
        <div className="absolute bottom-4 text-sm"></div>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl font-bold mb-6">RentRides</h1>
        <h2 className="text-2xl font-semibold mb-4">Welcome Back</h2>
        <p className="text-sm mb-6">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500" onClick={Navigate('/AdminReg')}>
            Create a new account now
          </a>
          , Takes less than a minute.
        </p>

        <form className="w-full max-w-sm" onSubmit={handleLogin}>  {/* Form submission */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="UrEmail@gmail.com"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) => { setUserName(e.target.value); }}
              value={userName}  // Controlled input value
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) => { setPassword(e.target.value); }}
              value={password}  // Controlled input value
            />
          </div>

          <button className="w-full bg-black text-white p-3 rounded mb-4" type="submit">
            Login Now
          </button>

          <button className="w-full bg-white text-black border border-gray-300 p-3 rounded flex items-center justify-center">
            <i className="fab fa-google mr-2"></i> Login with Google
          </button>
        </form>

        <p className="text-sm mt-4">
          Forget password{" "}
          <a href="#" className="text-blue-500">
            Click here
          </a>
        </p>

        {error && <p className="text-red-500 mt-4">{error}</p>} {/* Display error */}
      </div>
    </div>
  );
};

export default Login;
