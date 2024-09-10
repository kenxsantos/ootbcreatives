import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
const ExplorersForm = () => {
  const [loading, setLoading] = useState(false);
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
          <div className="relative w-full min-w-[200px] h-50 flex justify-center gap-2">
            <img
              src="/assets/logo/OOTBLogoRed.webp"
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
  );
};

export default ExplorersForm;
