import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
const DropdownButton = () => {
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
        2024
        <TiArrowSortedDown size={16} />
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute z-10 mt-2 bg-gray-400  rounded-lg shadow w-full text-center"
        >
          <ul
            className="py-2 text-sm  font-jost text-white"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-white hover:text-white"
              >
                2023
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                2022
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                2021
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                2020
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
