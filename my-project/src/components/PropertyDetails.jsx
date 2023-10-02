// import React from 'react';
// import { useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';

// const PropertyDetails = () => {
//   const { id } = useParams();
//   const property = useSelector((state) => state.property);
//   const details = property.properties.filter((prop)=>prop.id===id)

//   if (!details) {
//     return <div>Property not found</div>;
//   }

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
//         <img
//           className="w-full h-64 object-cover object-center"
//           src={`/images/${details.image}`} 
//           alt={details.name}
//         />
//         <h2 className="text-2xl font-semibold mt-4">{details.name}</h2>
//         <p className="text-gray-500">${details.price} per night</p>
//         <p className="mt-4">{details.description}</p>
//         <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;
