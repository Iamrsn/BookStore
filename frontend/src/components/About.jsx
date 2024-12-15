import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-lg leading-7 mb-6">
          Welcome to our platform! We are dedicated to providing exceptional
          services and creating value for our users. Our mission is to deliver
          innovative and user-friendly solutions tailored to meet the unique
          needs of our clients. Whether you're looking for resources, tools, or
          support, we are here to help you achieve your goals.
        </p>
        <p className="text-gray-600 text-lg leading-7 mb-6">
          Our team consists of passionate and skilled individuals who bring
          expertise, creativity, and dedication to everything we do. We believe
          in continuous learning and improvement to ensure we stay at the
          forefront of innovation and technology. Thank you for choosing us as
          your trusted partner!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To innovate, inspire, and empower through our solutions.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              To be a leader in providing reliable and impactful services.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Our Values</h2>
            <p className="text-gray-600 mt-2">
              Integrity, innovation, and excellence in everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
