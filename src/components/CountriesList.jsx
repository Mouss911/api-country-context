import React, { useContext } from "react";
import CountryCard from "../components/CountryCard";
import CountriesContext from "../contextPays";

const CountriesList = () => {
  const { countries } = useContext(CountriesContext);
  return (
    <div className="row list-country d-flex align-items-start align-items-lg-center flex-wrap gy-5 gx-0 gx-lg-5 my-1 my-lg-0">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
