import React from 'react';
import bannerImg from '../assets/banner.jpg'; 


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                {/* Right Side: Image */}
                <img
                    src={bannerImg}
                    alt="Household Services Team"
                    className="max-w-lg w-full rounded-lg shadow-2xl"
                />
                
                {/* Left Side: Text */}
                <div className="text-center lg:text-left max-w-xl">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
                        Book Trusted Household Services in Minutes
                    </h1>
                    <p className="py-6 text-gray-600">
                        Find top-rated professionals for AC service, electrician work, plumbing, and house cleaning.
                        Easy booking, affordable pricing, and reliable service at your doorstep.
                    </p>
                    <button className="btn bg-blue-600 text-white px-6">
                        Book Now
                    </button>
                    

                </div>
            </div>
        </div>
    );
};

export default Banner;
