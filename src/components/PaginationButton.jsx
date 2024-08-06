import React, { forwardRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PaginationButton = forwardRef(({ direction, onClick }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className="custom-button bg-white w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center shadow-lg"
    >
      {direction === "prev" ? (
        <IoIosArrowBack className="text-2xl text-[#222224]" />
      ) : (
        <IoIosArrowForward className="text-2xl text-[#222224]" />
      )}
    </button>
  );
});

export default PaginationButton;
