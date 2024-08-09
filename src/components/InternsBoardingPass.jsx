import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import internship from "../json/internship.json";
import TabComponent from "./TabComponent";
import { motion } from "framer-motion";
const InternsBoardingPass = () => {
  const { batch, year, intern } = useParams();
  const [selectedBatch, setSelectedBatch] = useState(batch || "batch-1"); // Default to batch 1 if no batch is provided in the URL
  const formattedName = (name) => name.toLowerCase().replace(/ /g, "-");

  const yearData = internship.find((data) => data.year.toString() === year);

  console.log(yearData);

  const findIntern = () => {
    const batchKey = selectedBatch.replace("batch-", "");

    if (!yearData) return null;
    const batchData = yearData.batch[batchKey];
    if (!batchData) return null;

    return (
      Object.values(batchData).find(
        (internData) => formattedName(internData.name) === intern
      ) || null
    );
  };

  const internData = findIntern();

  if (!internData) {
    return <div>Intern not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden h-[830px]">
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src={internData.image}
          alt={internData.name}
          className="w-full"
        />
      </div>
      <div className="shadow-inner-crewmates rounded-t-3xl flex flex-col  h-72 w-[600px]">
        <TabComponent yearData={yearData} />
      </div>
    </div>
  );
};

export default InternsBoardingPass;
