import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaMobile,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", contact: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-r from-red-400 to-red-800 py-2" id="contact">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold font-serif text-white text-center m-6">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 sm:flex-row sm:space-x-6">
          <div className="flex-1">
            <h3 className="text-3xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-500">
              Let's Talk
            </h3>
            <p className="text-white m-1 font-bold font-serif">
              We are open to discussing web development projects or partnership
              opportunities
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block mr-1" />
              <a
                href="mailto:edemtechent@gmail.com"
                className="hover:underline"
              >
                edemtechent@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block mr-2" />
              <span>+233 247836603</span>
            </div>
            <div className="mb-4">
              <FaMobile className="inline-block mr-2" />
              <span>+233 203760941</span>
            </div>
            <div className="mb-4">
              <FaWhatsapp className="inline-block mr-2" />
              <a
                href="https://wa.me/message/EXF33XUPKEM3E1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block mr-2" />
              <span>F224 Barbet ST, GD-269-4680, Amrahia, Accra Ghana</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="text-white w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded text-white bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" className="block mb-2">
                  Your Contact
                </label>
                <input
                  type="tel"
                  name="contact"
                  className="text-white w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter Your Contact Number"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  className="text-white w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full disabled:opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
