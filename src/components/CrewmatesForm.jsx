import React, { useState } from "react";
import {
  MdEmail,
  MdCall,
  MdDateRange,
  MdAccessTimeFilled,
} from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";
import emailjs from "emailjs-com";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { MdOutlineErrorOutline } from "react-icons/md";
import { motion } from "framer-motion";

const firebaseConfig = {
  apiKey: "AIzaSyDTbfsWhhktK98mUI5IhO1n_q4ieC4-EtU",
  authDomain: "ootb-creatives.firebaseapp.com",
  projectId: "ootb-creatives",
  storageBucket: "ootb-creatives.appspot.com",
  messagingSenderId: "261002177733",
  appId: "1:261002177733:web:6f9d393077a015879394ac",
  measurementId: "G-D0GJE49SW5",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const CrewmatesForm = ({ name, setName }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    contact: "",
    position: "",
    date: "",
    message: "",
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

  const uploadFile = async (file) => {
    const storageRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
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
      let fileURL = "";
      let fileName = "";
      if (formValues.file) {
        fileName = formValues.file.name;
        fileURL = await uploadFile(formValues.file);
      }

      const templateParams = {
        name: name,
        email: formValues.email,
        contact: formValues.contact,
        position: formValues.position,
        fileName: fileName || "No file uploaded",
        fileURL: fileURL || "No file uploaded",
      };

      await emailjs.send(
        "service_y3rfiah",
        "template_nf47w2q",
        templateParams,
        "LDjS_EUM0MTajpvGP"
      );
      alert("Email successfully sent!");
      setFormValues({
        email: "",
        contact: "",
        position: "",
        date: "",
        message: "",
        file: null,
      });
      setName("");
    } catch (error) {
      alert("Failed to send email. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div
          className="p-2 mt-4 -mb-8 text-sm text-red-800 rounded-sm bg-red-400 flex items-center gap-2"
          role="alert"
        >
          <MdOutlineErrorOutline color="white" size={24} />
          <p className="font-jost text-white text-base">{error}</p>
        </div>
      )}
      <div className="w-full flex flex-col sm:px-8 mt-12">
        <form
          id="crewmates-form"
          onSubmit={handleSubmit}
          className="w-full"
          encType="multipart/form-data"
        >
          <div className="w-full mb-2">
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
          <div className="w-full mb-2">
            <div className="relative w-full min-w-[200px] xs:h-10 lg:h-12 flex items-center gap-2">
              <MdCall size={24} color="white" />
              <input
                type="tel"
                name="contact"
                value={formValues.contact}
                onChange={handleChange}
                className="peer w-full h-full bg-transparent text-white font-jost text-base outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2 px-3 py-2.5 rounded-sm border-blue-gray-200"
                placeholder="CONTACT NUMBER"
                pattern="[0-9]{11}"
                required
                maxLength="11"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="relative w-full min-w-[200px] xs:h-10 lg:h-12 flex items-center gap-2">
              <img
                src="/assets/logo/OOTBLogoRed.webp"
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

          <div className="w-full mb-8">
            <div className="relative w-full min-w-[200px] h-10 flex items-center gap-2">
              <MdDateRange size={24} color="white" className="mt-10" />
              <div className="grid w-full gap-1 mt-6">
                <label htmlFor="date" className="text-sm font-jost text-white">
                  Select target start date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formValues.date}
                  onChange={handleChange}
                  className="bg-transparent font-jost border border-gray-300 text-white text-base rounded-sm focus:border-white focus:outline-none block w-full p-2 z-50"
                  required
                />
              </div>
            </div>
          </div>
          <div className="w-full mb-28">
            <div className="relative w-full min-w-[200px] h-10 flex items-center gap-2">
              <MdAccessTimeFilled size={24} color="white" className="mt-10" />
              <div className="grid w-full gap-1 mt-28">
                <label htmlFor="date" className="text-sm font-jost text-white">
                  List 3 time slots for an interview
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formValues.message}
                  onChange={handleChange}
                  className="p-2.5 w-full text-white bg-transparent font-jost text-base rounded-sm border border-gray-300 focus:ring-white focus:border-white focus:outline-none"
                  placeholder="Write your time availability here... (e.g. 9:00 AM - 10:00 AM)"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="w-full mb-8">
            <div className="relative w-full min-w-[200px] h-10 flex items-center gap-2">
              <FaFileUpload size={24} color="white" className="mt-12" />
              <div className="grid w-full gap-1 mt-6">
                <label htmlFor="date" className="text-sm font-jost text-white">
                  Upload your resume
                </label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  key={formValues.file ? formValues.file.name : "file-input"}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm text-white file:border-0 file:bg-transparent file:text-gray-400 file:font-jost file:uppercase file:text-sm file:font-medium"
                  required
                />
              </div>
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

export default CrewmatesForm;
