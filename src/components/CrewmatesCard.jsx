import { useState } from "react";
import ReadMoreButton from "./ReadMoreButton";

const CrewmatesCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="relative w-72 h-72 ml-44 rounded-2xl bg-purple p-4">
      <div className=" w-full h-full overflow-visible">
        <h1 className="font-metropolis text-white font-bold text-3xl">
          Rafael <br /> Timothy L. <br /> Estrella
        </h1>
        <h1 className="font-jost text-white text-sm uppercase">President</h1>
        <ReadMoreButton isExpanded={isExpanded} handleToggle={handleToggle} />
        {/* <div className="absolute inset-0  bottom-0 border -mr-12">
          <img
            src="/assets/astronauts/RafaelTimothyEstrella.png"
            alt=""
            className=" "
          />
        </div> */}
      </div>
    </section>
  );
};

export default CrewmatesCard;
