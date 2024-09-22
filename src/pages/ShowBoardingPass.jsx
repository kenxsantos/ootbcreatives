import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import FixedNavBar from "../components/FixedNavBar";
import internship from "../json/internship.json";
import InternsWork from "../components/InternsWork";
import InternsBoardingPass from "../components/InternsBoardingPass";

const ShowBoardingPass = () => {
  const { batch = "batch-1", year, intern } = useParams();

  // Memoizing formattedName function to avoid unnecessary recreations
  const formattedName = (name) => name.toLowerCase().replace(/ /g, "-");

  // Memoizing yearData to prevent recalculating on every render
  const yearData = useMemo(
    () => internship.find((data) => data.year.toString() === year),
    [year]
  );

  // Memoizing internData for efficient calculation
  const internData = useMemo(() => {
    if (!yearData) return null;
    const batchKey = batch.replace("batch-", "");
    const batchData = yearData.batch[batchKey];
    if (!batchData) return null;

    return (
      Object.values(batchData).find(
        (internData) => formattedName(internData.name) === intern
      ) || null
    );
  }, [yearData, batch, intern, formattedName]);

  if (!internData) {
    return <div>Intern not found</div>;
  }

  return (
    <div className="relative bg-academy bg-cover mx-auto xs:h-full">
      <div className="absolute inset-0 w-full h-full z-0 bg-black bg-opacity-50 flex">
        <div className="absolute inset-0 lg:w-1/2 h-full z-0 bg-black bg-opacity-10"></div>
      </div>
      <div className="relative z-10">
        <FixedNavBar />
        <div className="xs:px-3 xl:w-full xl:flex lg:justify-between overflow-hidden">
          <section className="relative w-full xl:w-1/2 flex flex-col">
            <Link to="/">
              <div className="flex items-center xs:h-24 md:h-28 justify-start w-full">
                <div className="rotate-90 xs:w-28 xs:-ml-[60px] md:w-36 md:-ml-7 xl:-ml-[75px]">
                  <img
                    src="/assets/others/BackShadow.webp"
                    alt="Back Flare"
                    className="transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow"
                    onError={(e) =>
                      (e.target.src = "/assets/others/defaultImage.webp")
                    }
                  />
                </div>
                <span className="text-white font-jost flex items-center gap-4 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow">
                  <IoIosArrowBack size={24} />
                  <p className="xs:text-xs md:text-base">
                    BACK TO OTHER SERVICES
                  </p>
                </span>
              </div>
            </Link>
            <div>
              <InternsWork internData={internData} />
            </div>
          </section>
          <section className="relative xs:w-full xl:w-1/2 flex flex-col">
            <InternsBoardingPass internData={internData} yearData={yearData} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ShowBoardingPass);
