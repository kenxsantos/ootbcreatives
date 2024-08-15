import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
const SearchForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search form submission logic here
  };

  return (
    <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-white bg-transparent border font-jost"
            placeholder="SEARCH"
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 px-8 text-sm font-medium h-full text-white bg-transparent"
          >
            <FiSearch size={18} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
