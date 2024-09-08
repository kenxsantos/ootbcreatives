import React, { useState } from "react";
import { MdEmail, MdBusiness } from "react-icons/md";
import emailjs from "emailjs-com";
import { MdOutlineErrorOutline } from "react-icons/md";
import { motion } from "framer-motion";
const ClientForm = ({ name, setName }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Name is required!");
      return;
    }

    setError("");
    setLoading(true);
    try {
      await emailjs.send(
        "service_y3rfiah",
        "template_w3yt9gb",
        { ...formData, name },
        "LDjS_EUM0MTajpvGP"
      );
      alert("Email successfully sent!");

      setFormData({
        email: "",
        company: "",
        service: "",
      });
      setName("");
    } catch (error) {
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false); // End loading animation
    }
  };

  return (
    <>
      {error && (
        <div
          class="p-2 mt-4 -mb-8 text-sm text-red-800 rounded-sm bg-red-400 flex items-center gap-2"
          role="alert"
        >
          <MdOutlineErrorOutline color="white" size={24} />
          <p className="font-jost text-white text-base">{error}</p>
        </div>
      )}
      <div className="w-full flex flex-col sm:px-8 mt-12">
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
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileTap={{ backgroundColor: "#9b4ecf" }}
              type="submit"
              className="font-jost hover:cursor-pointer text-white xs:h-10 lg:h-14 text-base rounded-sm px-4 py-2 w-full bg-purple"
            >
              <motion.div
                className="relative items-center flex justify-center"
                animate={{
                  opacity: loading ? [1, 0.7, 1] : 1,
                  transition: {
                    duration: 0.3,
                    repeat: loading ? Infinity : 0,
                    repeatType: "loop",
                  },
                }}
              >
                {loading ? (
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-block overflow-hidden"
                  >
                    SENDING...
                  </motion.span>
                ) : (
                  <span className="inline-block overflow-hidden">SUBMIT</span>
                )}
              </motion.div>
            </motion.button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ClientForm;
