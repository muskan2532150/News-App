import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/20/solid'


const PropertyCard = ({property}) => {
    // const property = useSelector((state) => state.property);

    const DetailsEvent = (id) => {
        <Link to={`/property/${id}`} />
    }
console.log(property)

    return (<>
        {property.properties.map((prop) => (
            <>
                <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img
                            className="w-full h-48 object-cover object-center"
                            src={`/images/${prop.image}`} // Replace with the actual image path
                            alt={prop.name}
                        />
                        <button className="absolute top-2 right-2 text-red-500">
                            <HeartIcon className="h-6 w-6" />
                        </button>
                        <div className="absolute top-2 left-2 text-white bg-blue-500 px-2 py-1 rounded">
                            For Rent
                        </div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">{prop.name}</h2>
                        {/* <p className="text-gray-500">{prop.}</p> */}
                        <p className="text-gray-500">{prop.location}</p>
                        <div className="flex space-x-2 mt-2">
                            {prop.services.map((service) => (
                                <div key={service.id} className="flex items-center">
                                    <img
                                        src={`/icons/${service.icon}`} // Replace with the actual icon path
                                        alt={service.name}
                                        className="w-4 h-4 mr-1"
                                    />
                                    <span>{service.name}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-500">${prop.price} per night</p>


                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={DetailsEvent(prop.id)}>
                            Read More
                        </button>
                    </div>
                </div>
            </>
        ))}</>)
}

export default PropertyCard;
