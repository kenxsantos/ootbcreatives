import { useState } from "react";
import ReadMoreButton from "./ReadMoreButton";
const ReadMoreReadLess = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-left h-64 xs:text-xs xs:w-[230px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px]">
      <p className="text-left font-jost text-white text-justify xs:text-xs md:text-sm xl:text-base">
        OUT OF THE BOX CREATIVES is a 360 creative firm that specializes in PR
        and marketing, we&apos;re not just about campaigns
        <span style={{ display: isExpanded ? "none" : "inline" }} id="dots">
          &nbsp;–
        </span>
        <span style={{ display: isExpanded ? "inline" : "none" }} id="more">
          &nbsp;– we&apos;re about crafting your brand&apos;s narrative,
          amplifying your message, and propelling you to new heights.
          <br />
          <br />
          Our team blends imagination with data-driven insights to create
          solutions that are as unique as your brand. From PR that sparks
          conversations to marketing strategies that drive results, we&apos;re
          here to help you reach your full potential. Let&apos;s explore
          what&apos;s possible together.
        </span>
      </p>
      <div className="mt-4">
        <ReadMoreButton isExpanded={isExpanded} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default ReadMoreReadLess;
