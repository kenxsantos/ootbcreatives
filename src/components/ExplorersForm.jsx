import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const ExplorersForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
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
        "template_ekjucwb",
        formData,
        "LDjS_EUM0MTajpvGP"
      )
      .then(
        (result) => {
          alert("Email successfully sent!");

          setFormData({
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="w-full flex flex-col px-8">
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
          <div className="relative w-full min-w-[200px] h-50 flex justify-center gap-2">
            <img
              src="/assets/logo/OOTBLogoRed.png"
              alt="Logo"
              className="w-6 h-full mt-1"
            />
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="p-2.5 w-full text-white bg-transparent font-jost text-base rounded-sm border border-gray-300 focus:ring-white focus:border-white focus:outline-none"
              placeholder="Write your thoughts here..."
              required
            ></textarea>
          </div>
        </div>
        <div className="pl-8">
          <input
            type="submit"
            value="SUBMIT"
            className="font-jost hover:cursor-pointer text-white xs:h-10 lg:h-14 text-base rounded-sm px-4 py-2 w-full bg-purple"
          />
        </div>
      </form>
    </div>
  );
};

export default ExplorersForm;
