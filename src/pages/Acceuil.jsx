import React, { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import FilterForm from "../components/FilterForm";
import { useCountries } from "../contextPays";

const Acceuil = () => {
  const {
    filter,
    inputValue,
    filteredCountries,
    handleFilterChange,
    handleInputValueChange,
    // onFilterChange,
    // onInputValueChange,
  } = useCountries();

  return (
    <div className="d-flex flex-column">
      <div className="container my-5 pt-5">
        <FilterForm
          onFilterChange={handleFilterChange}
          onInputValueChange={handleInputValueChange}
        />

          <CountriesList countries={filteredCountries} />
       
      </div>
    </div>
  );
};

export default Acceuil;
