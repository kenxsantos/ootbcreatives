import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";
import emailjs from "emailjs-com";

const CrewmatesForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    position: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormValues({ ...formValues, [name]: files[0] });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", formData.email);
    formData.append("position", formData.position);
    if (formData.file) {
      formData.append("file", formData.file);
    }

    try {
      const result = await emailjs.send(
        "service_y3rfiah", // Replace with your EmailJS service ID
        "template_nf47w2q", // Replace with your EmailJS template ID
        formData,
        "LDjS_EUM0MTajpvGP" // Replace with your EmailJS user ID
      );
      alert("Email successfully sent!");
      setFormData({
        email: "",
        position: "",
        file: null,
      });
    } catch (error) {
      alert("Failed to send email. Please try again.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="w-full flex flex-col px-8">
      <form
        id="crewmates-form"
        onSubmit={handleSubmit}
        className="w-full"
        encType="multipart/form-data"
      >
        <div className="w-full mb-4">
          <div className="relative w-full min-w-[200px] xs:h-10 lg:h-12 flex items-center gap-2">
            <MdEmail size={24} color="white" />
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="peer w-full h-full bg-transparent text-white font-jost text-base outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2 px-3 py-2.5 rounded-sm border-blue-gray-200"
              placeholder="EMAIL ADDRESS"
              required
            />
          </div>
        </div>

        <div className="w-full mb-4">
          <div className="relative w-full min-w-[200px] xs:h-10 lg:h-12 flex items-center gap-2">
            <img
              src="/assets/logo/OOTBLogoRed.png"
              alt="Logo"
              className="w-6"
            />
            <select
              id="position"
              name="position"
              value={formValues.position}
              onChange={handleChange}
              className="bg-transparent font-jost border border-gray-300 text-white text-base rounded-sm focus:border-white focus:outline-none block w-full p-2 z-50"
              required
            >
              <option
                value=""
                disabled
                className="font-jost bg-gray-500 bg-opacity-60 text-white"
              >
                -- POSITION APPLYING FOR --
              </option>
              <option
                value="Copywriting"
                className="font-jost bg-gray-500 bg-opacity-60 text-white"
              >
                Copywriting
              </option>
              <option
                value="Multimedia Arts"
                className="font-jost bg-gray-500 bg-opacity-60 text-white"
              >
                Multimedia Arts
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

        <div className="w-full mb-4">
          <div className="relative w-full min-w-[200px] h-10 flex items-center gap-2">
            <FaFileUpload size={24} color="white" />
            <div className="grid w-full gap-1">
              <input
                id="file"
                name="file"
                type="file"
                onChange={handleChange}
                className="flex h-10 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm text-white file:border-0 file:bg-transparent file:text-gray-400 file:font-jost file:uppercase file:text-sm file:font-medium"
                required
              />
            </div>
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

export default CrewmatesForm;
