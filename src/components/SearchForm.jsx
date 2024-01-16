import React from "react";
import SelectForm from "./SelectForm";
import InputForm from "./InputForm";

const contenus = [
  "Filter by Region",
  "Africa",
  "Americas",
  "Asie",
  "Europe",
  "Oceania",
];

const SearchForm = ({ onInputValueChange, onFilterChange }) => {
  return (
    <form
      id="form"
      className="d-flex flex-column col-12 flex-md-row align-items-start  align-items-lg-center mt-4 mb-0 mt-lg-0 justify-content-between"
    >
      <InputForm onInputValueChange={onInputValueChange} />
      <SelectForm contenus={contenus} onFilterChange={onFilterChange} />
    </form>
  );
};

export default SearchForm;
