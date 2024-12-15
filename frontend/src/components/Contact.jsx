import React, { useState } from "react";
import Navbar from "./Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Send us a message below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="mt-1 px-3 py-2 border rounded-md w-full focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="mt-1 px-3 py-2 border rounded-md w-full focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="mt-1 px-3 py-2 border rounded-md w-full focus:ring-pink-500 focus:border-pink-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
