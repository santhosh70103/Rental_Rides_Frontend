import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {

 const navigate=useNavigate();
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section
        className="hero-section bg-cover bg-center h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://www.impactplus.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=1200&name=best-about-us-pages.jpg')`
        }}
      >
        <h1 className='flex items-start'>
                <button onClick={()=>{navigate(-1)}} className='bg-[#f7cb48] p-2 rounded-md mt-[-300px] ml-[-400px]'>Go Back</button>
        </h1>
            
        <div className="bg-black bg-opacity-50 p-12 rounded-lg">
          <h1 className="text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Learn more about who we are and what we do.</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://pluspng.com/img-png/who-we-are-png-company-profile-who-we-are-652.png"
                alt="Who We Are"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side: Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a passionate team of professionals who strive to deliver
                exceptional services and innovative solutions. Our focus is on
                customer satisfaction, with a commitment to excellence in all we do.
              </p>
              {/* Bullet Points Section */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">1</div>
                  <p className="text-gray-700 text-lg">Innovative and customer-centric solutions.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">2</div>
                  <p className="text-gray-700 text-lg">A global team of experts dedicated to excellence.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">3</div>
                  <p className="text-gray-700 text-lg">Providing unparalleled services to meet your needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
<section className="our-mission py-16 bg-gray-100">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
      {/* Left Side: Text */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-6">
          At Rent Rides, our mission is to create a positive impact through innovative solutions and exceptional service. We empower individuals and organizations to achieve their full potential by prioritizing customer needs, fostering sustainability, and promoting community engagement.
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li><strong>Customer Focus:</strong> We tailor solutions to meet our customers' unique challenges.</li>
          <li><strong>Innovation:</strong> We leverage cutting-edge technologies to deliver excellence.</li>
          <li><strong>Sustainability:</strong> We commit to reducing our environmental footprint.</li>
          <li><strong>Community Engagement:</strong> We actively support education and social well-being.</li>
          <li><strong>Growth:</strong> We invest in our team's continuous learning and development.</li>
        </ul>
      </div>

      {/* Right Side: Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://st3.depositphotos.com/14431644/34729/i/450/depositphotos_347298024-stock-photo-conceptual-hand-writing-showing-our.jpg"
          alt="Our Mission"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


     {/* What We Do Section */}
<section className="what-we-do py-16 bg-gray-100">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src="https://bsullc.com/wp-content/uploads/2017/10/What-can-we-do-for-you.png"
          alt="What We Do"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Text */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
        <p className="text-lg text-gray-600 mb-6">
          We provide tailored solutions that drive success and enhance efficiency.
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>Customized services for diverse needs.</li>
          <li>Innovative technology solutions.</li>
          <li>Expert consulting for growth.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default AboutUs;