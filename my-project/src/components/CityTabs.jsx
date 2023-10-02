import React from 'react';

const CityTabs = ({cities}) => {
  // const cities = ["New York", "Los Angeles", "Chicago", "San Francisco"];
  const activeCity = "New York"; // Set the default active city

  console.log(cities[0].cities)
  return (
    <div className="bg-gray-200 p-4">
      <div className="flex justify-center space-x-4">
        {cities[0].cities.map((city) => (
          <button
            key={city}
            className={`px-4 py-2 rounded ${
              city === activeCity ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
            }`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CityTabs;
