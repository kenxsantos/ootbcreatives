import { useState } from "react";
import ReadMoreButton from "./ReadMoreButton";
const ReadMoreReadLess = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-left h-64 xs:text-xs xs:w-full sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[700px] 3xl:w-[900px]">
      <p className="text-left pr-4 font-jost text-white text-justify xs:text-xs md:text-base xl:text-lg 3xl:text-lg">
        We propel your business beyond the ordinary–from innovative campaigns to
        seamless storytelling.
        <span style={{ display: isExpanded ? "inline" : "none" }} id="more">
          <p className="mb-4 mt-4">
            Explore the advertising world with Out of the Box Creatives–a
            full-service Creative Firm specialized in PR and marketing that
            gives you an out-of-this-worldly view of where your business can go.
          </p>
          <p className="mb-4 mt-4">
            Ideas out of our mind, your business needs fulfilled by heart. We’re
            here to help you develop ideas into clear, concise, scroll-stopping
            content together.
          </p>
          <p className="mb-4 mt-4">
            Our team blends imagination with data-driven insights to create
            solutions that are as unique as your brand. Let's explore and reach
            your business’ full potential together.
          </p>
        </span>
      </p>
      <div className="mt-4">
        <ReadMoreButton isExpanded={isExpanded} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default ReadMoreReadLess;
