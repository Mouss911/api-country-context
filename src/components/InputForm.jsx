import React from "react";
import { CiSearch } from "react-icons/ci";

const InputForm = ({ onInputValueChange }) => {
  return (
    <div className="elements d-flex mb-lg-0 align-items-center p-2 col-8 p-lg-3 col-md-5 col-lg-3">
      <span className="elements me-2">
        <CiSearch className="fs-5" />
      </span>
      <input
        id="input"
        type="search"
        placeholder="Search for a country..."
        className="w-100 elements bg-transparent border-0 border-outline-0 cursor-pointer"
        onChange={onInputValueChange}
      />
    </div>
  );
};

export default InputForm;
