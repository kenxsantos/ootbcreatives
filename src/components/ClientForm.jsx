import React, { useState } from "react";
import { MdEmail, MdBusiness } from "react-icons/md";
import emailjs from "emailjs-com";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_y3rfiah",
        "template_w3yt9gb",
        formData,
        "LDjS_EUM0MTajpvGP"
      )
      .then(
        (result) => {
          alert("Email successfully sent!");

          // Clear the form
          setFormData({
            email: "",
            company: "",
            service: "",
          });
        },
        (error) => {
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="w-full flex flex-col sm:px-8 lg:mt-16">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full mb-4">
          <div className="relative w-full min-w-[200px] xs:h-10 lg:h-12 flex items-center gap-2">
            <MdEmail size={24} color="white" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer w-full h-full bg-transparent text-white font-jost text-base outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2 px-3 py-2.5 rounded-sm border-blue-gray-200"
              placeholder="EMAIL ADDRESS"
              required
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <div className="relative w-full min-w-[200px] xs:h-10 lg:h-12 flex items-center gap-2">
            <MdBusiness size={24} color="white" />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="peer w-full h-full bg-transparent text-white font-jost text-base outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2 px-3 py-2.5 rounded-sm border-blue-gray-200"
              placeholder="COMPANY OR BUSINESS NAME"
              required
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <div className="relative w-full min-w-[200px] xs:h-10 lg:h-14 flex items-center gap-2">
            <img
              src="/assets/logo/OOTBLogoRed.png"
              alt="Logo"
              className="w-6"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="bg-transparent font-jost border border-gray-300 text-white text-base rounded-sm focus:border-white block w-full p-2 z-50 focus:outline-none"
              required
            >
              <option
                value=""
                className="font-jost bg-gray-500 bg-opacity-60 text-gray-300"
              >
                -- DESIRED SERVICE FROM US --
              </option>
              <option
                value="Copywriting"
                className="font-jost bg-gray-500 bg-opacity-60 text-white"
              >
                Copywriting
              </option>
              <option
                value="Multimedia"
                className="font-jost bg-gray-500 bg-opacity-60 text-white"
              >
                Multimedia
              </option>
              <option
                value="Videographer"
                className="font-jost bg-gray-500 bg-opacity-60 text-white"
              >
                Videographer
              </option>
              <option
                value="Web Developer"
                className="font-jost bg-gray-500 bg-opacity-60 text-white"
              >
                Web Developer
              </option>
            </select>
          </div>
        </div>
        <div className="pl-8">
          <input
            type="submit"
            value="SUBMIT"
            className="font-jost text-white hover:cursor-pointer xs:h-10 lg:h-14 text-base rounded-sm px-4 py-2 w-full bg-purple"
          />
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
