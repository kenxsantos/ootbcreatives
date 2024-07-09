import React, { useState } from "react";

const ReadMoreReadLess = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-left">
      <p className="text-left font-jost text-white">
        Ready to break free from ordinary marketing?
        <span style={{ display: isExpanded ? "none" : "inline" }} id="dots">
          ...
        </span>
        <span style={{ display: isExpanded ? "inline" : "none" }} id="more">
          &nbsp;Welcome aboard. Navigate through advertising with Out of the Box
          Creatives, a creatively packaged firm specializing in PR and
          marketing. In this ship, you will be astounded with an
          out-of-this-world view on where you can take your business.
        </span>
      </p>
      <button
        onClick={handleToggle}
        id="myBtn"
        className="mt-4 inline-flex items-center rounded-full bg-gray-50  bg-opacity-30 px-4 py-1 text-xs text-white font-jost"
      >
        {isExpanded ? "READ LESS" : "READ MORE"}
      </button>
    </div>
  );
};

export default ReadMoreReadLess;
