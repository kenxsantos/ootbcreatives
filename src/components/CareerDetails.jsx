import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FixedNavBar from "../components/FixedNavBar";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const CareerDetails = () => {
  const location = useLocation();
  const career = location.state?.career;

  return (
    <div className="relative w-screen bg-clear-planets bg-cover mx-auto md:h-full lg:h-screen">
      <div className="relative z-30">
        <FixedNavBar />
      </div>
      <div className="relative z-10">
        <div className="w-full">
          <section className="relative w-full flex flex-col px-12">
            <Link to="/">
              <div className="flex items-center h-36 -ml-12 justify-start ">
                <div className="rotate-90 w-36 -ml-[60px]">
                  <img
                    src="/assets/others/BackShadow.png"
                    alt="Back Flare"
                    className="transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow"
                  />
                </div>
                <span className="text-white font-jost flex items-center gap-4 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow">
                  <IoIosArrowBack size={24} />
                  BACK TO OTHER SERVICES
                </span>
              </div>
            </Link>
          </section>
        </div>
        <div className="flex flex-col px-12 2xl:w-[500px] bg-purple-black h-screen 2xl:absolute 2xl:top-0 pt-44 z-0 2xl:ml-96 2xl:-mt-28">
          <h1 className="text-white font-jost">OOTB CAREERS</h1>
          <h1 className="text-white font-extrabold text-white text-glow tracking-tighter uppercase text-4xl font-metropolis">
            {career.position}
          </h1>
          <p className="mt-4 text-white font-jost text-base text-justify leading-none">
            {career.description}
          </p>

          <table className="text-white font-jost text-base mt-8 uppercase">
            <tbody>
              <tr>
                <td className="p-2">Job Type</td>
                <td className="p-2">{career.jobtype}</td>
              </tr>
              <tr>
                <td className="p-2">Shift</td>
                <td className="p-2">{career.shift}</td>
              </tr>
              <tr>
                <td className="p-2">Salary</td>
                <td className="p-2">{career.salary}</td>
              </tr>
              <tr>
                <td className="p-2">Location</td>
                <td className="p-2">{career.location}</td>
              </tr>
            </tbody>
          </table>

          <section className="w-max p-2 font-jost text-white border mt-12">
            <Link to="/">COME ONBOARD NOW</Link>
          </section>
        </div>
        <div className="2xl:h-screen 2xl:absolute 2xl:top-0 2xl:right-0 mx-auto flex items-center justify-center 2xl:-mt-28 ">
          <div className="xs:clip-path-cut-top-corners 2xl:clip-path-custom-polygon xs:pt-12 xs:w-full 2xl:w-[450px]  2xl:h-[400px]  sm:p-8 bg-gray-500 overflow-auto hide-scrollbar bg-black bg-opacity-60 p-5 shadow-lg  backdrop-blur-sm text-white">
            <div className="mb-4 font-jost text-white text-base">
              <h1 className="mb-4">JOB DESCRIPTION</h1>
              <p>We&apos;re looking for:</p>
              {career.qualifications && (
                <ol className="list-disc ml-12">
                  {Object.values(career.qualifications).map((quali, index) => (
                    <li key={index} className="leading-tight">
                      {quali}
                    </li>
                  ))}
                </ol>
              )}
            </div>
            <div className="mb-4 font-jost text-white text-base">
              <p>Major Duties and Responsibilities</p>
              {career.responsibilities && (
                <ol className="list-disc ml-12">
                  {Object.values(career.responsibilities).map(
                    (duties, index) => (
                      <li key={index} className="leading-tight">
                        {duties}
                      </li>
                    )
                  )}
                </ol>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
