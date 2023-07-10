"use client";

import { useState } from "react";

const Filter = (props) => {
  const allCount = props.Items.length;
  const activeCount = props.Items.filter((i) => i.status == 0).length;
  const completedCount = props.Items.filter((i) => i.status == 1).length;

  const handleClick = (value) => {
    props.FilterMethod(value);
  };
  return (
    <div id="filter">
      <ul>
        <li onClick={() => handleClick("All")}>All ({allCount})</li>
        <li onClick={() => handleClick("Active")}>Active ({activeCount})</li>
        <li onClick={() => handleClick("Completed")}>
          Completed ({completedCount})
        </li>
      </ul>
    </div>
  );
};

export default Filter;
