import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import internship from "../json/internship.json";

const InternsBoardingPass = () => {
  const { batch, year, intern } = useParams();
  const navigate = useNavigate();

  // Function to format the name (replace spaces with dashes and convert to lowercase)
  const formattedName = (name) => name.toLowerCase().replace(/ /g, "-");

  // Function to find the intern based on the formatted name
  const findIntern = () => {
    const batchKey = batch.replace("batch-", "");

    const yearData = internship.find((data) => data.year.toString() === year);
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
        <img src={internData.image} alt={internData.name} className="w-full" />
      </div>
      <div className="shadow-inner-crewmates rounded-3xl flex flex-col items-center justify-center h-96 w-[600px] pt-12">
        {/* Display intern details here */}
        <h2 className="text-2xl font-bold">{internData.name}</h2>
        <p>Role: {internData.role}</p>
        <p>Start Date: {internData["date-started"]}</p>
        <p>End Date: {internData["date-ended"]}</p>
      </div>
    </div>
  );
};

export default InternsBoardingPass;
