import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { motion } from "framer-motion";
const DropdownButton = ({ years, selectedYear, onSelectYear }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="flex gap-2 items-center justify-center border-white border text-white font-jost px-4 py-1 text-sm "
        type="button"
      >
        {selectedYear}
        <TiArrowSortedDown size={16} />
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute z-10 mt-2 backdrop-blur-sm bg-white/30 rounded-lg shadow w-full text-center"
        >
          <ul
            className="py-2 text-sm font-jost text-white"
            aria-labelledby="dropdownDefaultButton"
          >
            {years.map((year) => (
              <li key={year}>
                <motion.a
                  whileHover={{ scale: 1.1, cursor: "pointer" }}
                  onClick={() => {
                    onSelectYear(year);
                    setIsOpen(false);
                  }}
                  className="block px-4 py-2 text-white hover:text-glow"
                >
                  {year}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
