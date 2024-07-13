import React, { useState } from "react";

const ReadMoreReadLess = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-left h-64 w-[550px] ">
      <p className="text-left font-jost text-white text-justify">
        OUT OF THE BOX CREATIVES is a 360 creative firm that specializes in PR
        and marketing, we're not just about campaigns
        <span style={{ display: isExpanded ? "none" : "inline" }} id="dots">
          &nbsp;–
        </span>
        <span style={{ display: isExpanded ? "inline" : "none" }} id="more">
          &nbsp;– we're about crafting your brand's narrative, amplifying your
          message, and propelling you to new heights.
          <br />
          <br />
          Our team blends imagination with data-driven insights to create
          solutions that are as unique as your brand. From PR that sparks
          conversations to marketing strategies that drive results, we're here
          to help you reach your full potential. Let's explore what's possible
          together.
        </span>
      </p>
      <button
        onClick={handleToggle}
        id="myBtn"
        className="mt-4 gap-1 inline-flex items-center rounded-full bg-gray-50  bg-opacity-30 px-2 py-1 text-xs text-white font-jost"
      >
        <img src="/assets/staricon.png" alt="star" className="w-2" />
        {isExpanded ? "READ LESS" : "READ MORE"}
      </button>
    </div>
  );
};

export default ReadMoreReadLess;
