import React, { createContext, useContext, useState, useEffect } from "react";

const CountriesContext = createContext(
    {countries : [],
    filter: "",
    inputValue: "",
    filteredCountries: "",
    onFilterChange: () => {},
    onInputValueChange: () => {},}
);
export default CountriesContext

// export const useCountries = () => {
//   return useContext(CountriesContext);
// };

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("tout");
  const [inputValue, setInputValue] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const pays = await response.json();
      setCountries(pays);
    } catch (error) {
      console.error("Impossible de contacter le serveur");
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredCountries = countries.filter(
    (country) =>
      (filter === "tout" || country.region === filter) &&
      (country.name.common.toLowerCase().includes(inputValue.toLowerCase()) ||
        country.region.toLowerCase().includes(inputValue.toLowerCase()))
  );

  const contextValue = {
    countries,
    filter,
    inputValue,
    filteredCountries,
    onFilterChange: handleFilterChange,
    onInputValueChange: handleInputValueChange,
  };

  return (
    <CountriesContext.Provider value={contextValue}>
      {children}
    </CountriesContext.Provider>
  );
};
