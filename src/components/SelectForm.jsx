import React from "react";
import Option from "./Option";

const SelectForm = ({ onFilterChange, contenus }) => {
  return (
    <select
      id="filter"
      name="filter"
      className="elements col-lg-2 border-0 p-2 p-lg-3"
      onChange={onFilterChange}
    >
      <Option contenus={contenus} />
    </select>
  );
};

export default SelectForm;
