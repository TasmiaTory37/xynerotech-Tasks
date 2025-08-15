import React from "react";
import ServiceCard from "../../components/ServiceCard";
import { services } from "../../data/services";

const Services = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6">All Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc) => (
          <ServiceCard
            key={svc.id}
            id={svc.id}
            title={svc.title}
            description={svc.description}
            price={svc.price}
            image={svc.image}
            viewMoreTo={`/services/${svc.id}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
