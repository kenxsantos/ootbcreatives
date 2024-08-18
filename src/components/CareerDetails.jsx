import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FixedNavBar from "../components/FixedNavBar";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const CareerDetails = () => {
  const location = useLocation();
  const career = location.state?.career;

  return (
    <div className="relative max-w-screen-2xl bg-clear-planets bg-cover mx-auto h-screen">
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
        <div className="flex flex-col px-12 w-[500px] bg-purple-black h-screen absolute top-0 pt-44 z-0 ml-96 -mt-28">
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
        <div className="h-screen absolute top-0 right-0 mx-auto flex items-center justify-center -mt-28 ">
          <div
            style={{
              clipPath:
                "polygon(7% 0%, 100% 0%, 100% 100%, 7% 100%, 0% 93%, 0% 7%)",
            }}
            className="w-[450px] h-[400px] rounded-l-2xl p-8 bg-gray-500 overflow-auto hide-scrollbar bg-black bg-opacity-60 p-5 rounded-lg shadow-lg  backdrop-blur-sm text-white"
          >
            <section className="flex justify-start gap-4 ml-96 z-10 h-full">
              <div className="flex flex-col px-12 w-[500px] bg-purple-black h-screen absolute top-0 pt-44 z-0">
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
            </section>
            <div className="h-screen absolute top-0 right-0 mx-auto flex items-center justify-center">
              <div className="w-[450px] h-[400px] rounded-l-2xl p-8 bg-gray-500 overflow-auto hide-scrollbar">
                <div className="mb-4 font-jost text-white text-base">
                  <h1 className="mb-4">JOB DESCRIPTION</h1>
                  <p>We&apos;re looking for:</p>

                  {career.qualifications && (
                    <ol className="list-disc ml-12">
                      {Object.values(career.qualifications).map(
                        (quali, index) => (
                          <li key={index} className="leading-tight">
                            {quali}
                          </li>
                        )
                      )}
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
      </div>
    </div>
  );
};

export default CareerDetails;
