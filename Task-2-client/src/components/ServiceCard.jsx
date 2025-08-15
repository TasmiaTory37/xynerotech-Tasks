import React from "react";
import { Link } from "react-router"; 

const ServiceCard = ({ id, title, description, price, image, viewMoreTo }) => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
      />
      
      <h3 className="mt-3 font-semibold text-lg text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="font-bold text-blue-600">৳{price}</span>
        <Link
          to={viewMoreTo || `/services/${id}`}
          className="bg-orange-500 text-white px-4 py-1.5 rounded-lg hover:bg-orange-600 transition"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
