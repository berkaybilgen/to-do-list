"use client";

import Item from "./Item";

const List = (props) => {
  var filteredItems = props.Items;

  if (props.Filter == "Active") {
    filteredItems = props.Items.filter((i) => {
      return i.status == 0;
    });
  } else if (props.Filter == "Completed") {
    filteredItems = props.Items.filter((i) => {
      return i.status == 1;
    });
  } else {
    filteredItems = props.Items;
  }

  let items = "";

  items = filteredItems.map((i) => {
    return (
      <Item
        key={i.id}
        id={i.id}
        text={i.text}
        status={i.status}
        complete={props.Complete}
      />
    );
  });

  return <div id="to-do-list">{items}</div>;
};

export default List;
