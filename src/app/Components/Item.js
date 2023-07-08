import React from "react";

const Item = (props) => {
  const completeMethod = () => {
    props.complete(props.id);
  };

  let completeButton = "";

  if (props.status == 0) {
    completeButton = <button onClick={completeMethod}>Complete</button>;
  }

  return (
    <div className="item">
      <span>{props.text}</span>
      {completeButton}
    </div>
  );
};

export default Item;
