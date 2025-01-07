import React, { useState } from "react";
import { toast } from "react-toastify";

interface RequirementProps {
  name: string;
  email: string;
  number: string;
  message: string;
  file: File | null;
}

const OverView: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<RequirementProps>({
    name: "",
    email: "",
    number: "",
    message: "",
    file: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.number) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("number", formData.number);
    formDataToSubmit.append("message", formData.message);

    if (formData.file) {
      formDataToSubmit.append("file", formData.file);
    }

    setLoading(true);

    try {
      const response = await fetch("https://portfolioapi-17m9.onrender.com/api/requirement", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
        file: null,
      }); // Reset form
      togglePopup(); // Close the popup
    } catch (error: any) {
      toast.error(error.message || "Failed to submit form. Try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevState) => ({
      ...prevState,
      file: file,
    }));
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-red-400 to-red-800 text-white text-center py-16" id="about">
      <h1 className="text-3xl font-bold">
        We are a{" "}
        <span className="text-transparent bg-clip-text bg-black font-serif">
          team of passionate software
        </span>{" "}
        developers at{" "}
        <span className="font-bold text-transparent bg-clip-text bg-black">
          Edem-Tech Enterprise with
        </span>
      </h1>
      <div className="py-2 my-2 justify-between mt-8">
        <h1 className="text-black font-semibold text-2xl font-serif">
          Over 2 Years Experience in software development
        </h1>
        <div className="mt-6 font-serif">
          <p>
            Edem-Tech Ent for the past 2 years has been developing responsive websites, web applications, and systems
            for its clients. Do not hesitate to contact Edem-Tech Enterprise for any IT services.
          </p>
          <p>Edem-Tech is ever ready to contact you for any development.</p>
          <p>We specialize in web application development with good responsive features.</p>
        </div>
        <div className="mt-8 space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-blue-400 to-blue-900 text-white transform transition-transform duration-300 hover:scale-105 px-4 my-1 py-2 rounded-full font-serif">
              LinkedIn Page
            </button>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-blue-400 to-blue-900 text-white transform transition-transform duration-300 hover:scale-105 px-4 my-1 py-2 rounded-full font-serif">
              Facebook Page
            </button>
          </a>
          <button
            onClick={togglePopup}
            className="bg-gradient-to-r from-teal-500 to-blue-900 text-white transform transition-transform duration-300 hover:scale-105 px-4 my-1 py-2 rounded-full"
          >
            Click to Request Our Services
          </button>

          {isOpen && (
            <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-red bg-opacity-90 p-6  bg-blue-950 rounded shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
                <button className="text-white float-right font-bold" onClick={togglePopup}>
                  <span className="p-2 bg-red-600 rounded-full text-xl font-bold">X</span>
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center text-white">Fill Your Requirement Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border rounded p-3 bg-transparent border-gray-300 text-white"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border p-3 rounded bg-transparent border-gray-300 text-white"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className="block mb-2">
                      Your Contact Number
                    </label>
                    <input
                      type="tel"
                      id="number"
                      className="w-full p-3 border rounded bg-transparent border-gray-300 text-white"
                      value={formData.number}
                      onChange={(e) =>
                        setFormData({ ...formData, number: e.target.value })
                      }
                      placeholder="Your Number"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Your Message or Requirement
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-3 border rounded bg-transparent border-gray-300 text-white"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="file" className="block mb-2">
                      Upload Requirement Documents (PDF or DOC)
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={handleFileChange}
                      className="w-full p-3 border rounded bg-transparent border-gray-300 text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50 w-full mt-4"
                  >
                    {loading ? "Submitting ..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverView;
