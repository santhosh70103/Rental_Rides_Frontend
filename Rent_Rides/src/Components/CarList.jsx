

import React from 'react';



const Filter = () => {
  return (
    <aside className="w-1/4 bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-4">Filter</h2>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Car Type</h3>
        <ul>
          <li><input type="checkbox" id="economy" /> <label htmlFor="economy">Economy</label></li>
          <li><input type="checkbox" id="midsize" /> <label htmlFor="midsize">Midsize</label></li>
          <li><input type="checkbox" id="standard" /> <label htmlFor="standard">Standard</label></li>
          <li><input type="checkbox" id="full-size" /> <label htmlFor="full-size">Full-size</label></li>
          <li><input type="checkbox" id="minivan" /> <label htmlFor="minivan">Minivan</label></li>
          <li><input type="checkbox" id="suv" /> <label htmlFor="suv">SUV</label></li>
          <li><input type="checkbox" id="van" /> <label htmlFor="van">Van</label></li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Passengers</h3>
        <ul>
          <li><input type="checkbox" id="1-2" /> <label htmlFor="1-2">1 to 2 passengers</label></li>
          <li><input type="checkbox" id="3-5" /> <label htmlFor="3-5">3 to 5 passengers</label></li>
          <li><input type="checkbox" id="6-more" /> <label htmlFor="6-more">6 or more</label></li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Bags</h3>
        <ul>
          <li><input type="checkbox" id="1-2-bags" /> <label htmlFor="1-2-bags">1 to 2 bags</label></li>
          <li><input type="checkbox" id="3-4-bags" /> <label htmlFor="3-4-bags">3 to 4 bags</label></li>
          <li><input type="checkbox" id="5-more-bags" /> <label htmlFor="5-more-bags">5 or more</label></li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Transmission</h3>
        <ul>
          <li><input type="checkbox" id="automatic" /> <label htmlFor="automatic">Automatic</label></li>
          <li><input type="checkbox" id="manual" /> <label htmlFor="manual">Manual</label></li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">User Review</h3>
        <ul>
          <li><input type="checkbox" id="excellent" /> <label htmlFor="excellent">Excellent</label></li>
          <li><input type="checkbox" id="good" /> <label htmlFor="good">Good</label></li>
          <li><input type="checkbox" id="average" /> <label htmlFor="average">Average</label></li>
        </ul>
      </div>
    </aside>
  );
};

const CarCard = ({ car }) => {
  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <div className="flex">
        <img src={car.image} alt={car.name} className="w-1/4 rounded" />
        <div className="w-3/4 ml-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{car.name} <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded">{car.type}</span></h2>
            <div className="text-green-500 text-lg font-bold">{car.discount}% Off! <span className="line-through text-gray-500">${car.originalPrice}</span> ${car.price} per day</div>
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <i className="fas fa-users mr-2"></i> {car.passengers}
            <i className="fas fa-suitcase ml-4 mr-2"></i> {car.bags}
            <i className="fas fa-cogs ml-4 mr-2"></i> {car.transmission}
            <i className="fas fa-tachometer-alt ml-4 mr-2"></i> {car.mileage}
            <i className="fas fa-snowflake ml-4 mr-2"></i> {car.ac}
          </div>
          <div className="flex items-center mt-2">
            <div className="bg-green-500 text-white px-2 py-1 rounded">{car.rating}</div>
            <div className="ml-2 text-gray-600">{car.review} ({car.reviewCount} reviews)</div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Book Now</button>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  const cars = [
    {
        name: 'Innova Crysta',
        originalPrice: 390,
        price: 351,
        seats: 8,
        transmission: 'Manual',
        ac: 'A/C',
        rating: '3.9',
        review: 'Good',
        reviewCount: 10,
        image: 'https://placehold.co/150x100',
      },,
    {
      name: 'Innova Crysta',
      originalPrice: 390,
      price: 351,
      seats: 8,
      transmission: 'Manual',
      ac: 'A/C',
      rating: '3.9',
      review: 'Good',
      reviewCount: 10,
      image: 'https://placehold.co/150x100',
    },
  
  ];

  return (
    <main className="w-3/4 ml-6">
      <div className="bg-white p-4 shadow rounded mb-4">
        <div className="flex items-center mb-4">
          <input type="text" placeholder="Enter City" className="border p-2 rounded w-1/3 mr-2" />
          <input type="date" className="border p-2 rounded w-1/4 mr-2" />
          <input type="time" className="border p-2 rounded w-1/6 mr-2" />
          <input type="date" className="border p-2 rounded w-1/4 mr-2" />
          <input type="time" className="border p-2 rounded w-1/6 mr-2" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
        </div>
        <div className="flex justify-between items-center">
          <div>Ahmedabad: <strong>21</strong> Cars Found</div>
          <div>
            Sort by:
            <select className="ml-2 border p-2 rounded">
              <option>Price</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        {cars.map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
      </div>
    </main>
  );
};

const CarList=()=>
{
    return(
        <div>
            <Filter/>
            
        </div>
    )
}

export default CarList;