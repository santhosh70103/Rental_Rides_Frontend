import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

    const navigate= useNavigate();


    return (
        <div className="flex flex-col items-center py-10 bg-gradient-to-r from-blue-300 to-blue-500 min-h-screen">
            <h1 className='flex items-start mr-[1100px]'>
                <button onClick={()=>{navigate(-1)}} className='bg-[#f7cb48] p-2 rounded-md'>Go Back</button>
            </h1>
            <h1 className="text-5xl font-bold text-white mb-8">Contact Us</h1>

            <div className="flex flex-col md:flex-row md:space-x-10 w-full max-w-5xl px-4">
                {/* Contact Form Section */}``
                <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full p-3 border border-gray-300 rounded" 
                                placeholder="Your Name" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full p-3 border border-gray-300 rounded" 
                                placeholder="Your Email" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                className="w-full p-3 border border-gray-300 rounded" 
                                placeholder="Your Message" 
                                rows="4" 
                                required 
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Details Section */}
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-8 md:mt-0">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Contact Details</h2>
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> support@rentrides.com</p>
                    <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p className="text-gray-700 mb-4"><strong>Address:</strong> 123 Rent Rides St, City, State, ZIP</p>
                    <h2 className="text-xl font-semibold">Follow Us</h2>
                    <p className="text-gray-700">Stay connected with us on social media!</p>
                    {/* Add social media links as needed */}
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
