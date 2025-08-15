import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

const TopServices = () => {
  const topSix = services.slice(0, 6);

  return (
    <section className="w-11/12 mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Top Services</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topSix.map((svc) => (
          <ServiceCard
            key={svc.id}
            id={svc.id}
            title={svc.title}
            description={svc.description}
            price={svc.price}
            image={svc.image}
            viewMoreTo="/services"
          />
        ))}
      </div>
    </section>
  );
};

export default TopServices;
