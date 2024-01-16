import React, { useContext } from "react";
import SearchForm from "./SearchForm";
import CountriesContext from "../contextPays";

const FilterForm = () => {
  const { onFilterChange, onInputValueChange } = useContext(CountriesContext);
  return (
    <SearchForm
      onFilterChange={onFilterChange}
      onInputValueChange={onInputValueChange}
    />
  );
};

export default FilterForm;
