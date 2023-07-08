"use client";

import { useState } from "react";

const Filter = (props) => {
  const handleClick = (value) => {
    props.FilterMethod(value);
  };
  return (
    <div id="filter">
      <ul>
        <li onClick={() => handleClick("All")}>All</li>
        <li onClick={() => handleClick("Active")}>Active</li>
        <li onClick={() => handleClick("Completed")}>Completed</li>
      </ul>
    </div>
  );
};

export default Filter;
