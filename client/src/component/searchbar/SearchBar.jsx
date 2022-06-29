import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  const {
    handleSearchBtnClick,
    searchText,
    handleChange,
    placeholder,
    tailwindCSS,
  } = props;

  return (
    <div
      className={`max-w-md border-2 rounded-md border-gray-600 flex flex-row items-stretch ${tailwindCSS}`}>
      <input
        type="text"
        className="outline-none grow bg-blue-100 px-4 py-2 font-medium"
        value={searchText}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <div className="flex flex-row items-center w-10">
        <SearchIcon
          onClick={handleSearchBtnClick}
          className="cursor-pointer w-8"
          fontSize="large"
        />
      </div>
    </div>
  );
};

export default SearchBar;
