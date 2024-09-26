const Register = () => {
    return (
      <div className="flex h-screen">
        <div className="w-1/2 bg-blue-700 text-white flex flex-col justify-center items-center p-10">
          <div className="text-6xl mb-4">!!!</div>
          <h1 className="text-5xl font-bold mb-4">
            WelCome To 
            <br />
            <span role="img" aria-label="waving hand">
              
            </span>
          </h1>
          <p className="text-lg text-center">
            
          </p>
          <div className="absolute bottom-4 text-sm">
            
          </div>
        </div>
        <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
          <h1 className="text-3xl font-bold mb-6">RentRides</h1>
          <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
          <p className="text-sm mb-6">
            Already have an account?{" "}
            <a href="#" className="text-blue-500">
              Login now
            </a>
            .
          </p>
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="UrEmail@gmail.com"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <button className="w-full bg-black text-white p-3 rounded mb-4">
              Register Now
            </button>
            <button className="w-full bg-white text-black border border-gray-300 p-3 rounded flex items-center justify-center">
              <i className="fab fa-google mr-2"></i> Register with Google
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Register;