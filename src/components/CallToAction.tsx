import React from 'react';

export default function CallToAction() {
  return (
    <div className="flex items-center justify-center  bg-[#2E4057] mb-5">
      <div className="text-center space-y-6" data-aos="zoom-in">
        <p className="text-green-500 font-semibold">Newsletter</p>
        <h1 className="text-3xl font-bold text-white">Connect with Us</h1>
        <p className="text-white max-w-lg mx-auto">
        Take the First Step Towards a Brighter Future 
        </p>
        <div className="flex justify-center mt-8 pb-10">
          <input
            type="email"
            placeholder="Your Email"
            className="w-64 md:w-96 p-4 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-green-500 text-white px-6 py-4 font-semibold rounded-r-md hover:bg-green-600 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
