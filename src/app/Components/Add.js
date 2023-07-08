"use client";

import { useState } from "react";

const Add = (props) => {
  const [item, setItem] = useState([]);

  const checkForm = (e) => {
    if (e.key == "Enter") {
      props.UpdateList(item);
      setItem({ text: "" });
    }
  };

  const addItem = (e) => {
    const newItem = {
      id: new Date().getTime(),
      text: e.target.value,
      status: 0,
    };

    setItem(newItem);
  };

  return (
    <div id="add-new-item">
      <input
        type="text"
        onChange={addItem}
        value={item.text}
        onKeyUp={checkForm}
        placeholder="Type whatever you want (press enter to add)"
      />
    </div>
  );
};

export default Add;
