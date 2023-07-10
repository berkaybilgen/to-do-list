"use client";

import Image from "next/image";
import List from "./Components/List";
import Add from "./Components/Add";
import Filter from "./Components/Filter";
import { useState } from "react";

export default function Home() {
  const [list, setList] = useState([]);
  const [filterValue, setFilterValue] = useState("All");

  const updateList = (task) => {
    setList([...list, task]);
  };

  const complete = (id) => {
    var items = [...list];

    var item = items.find((i) => {
      return i.id == id;
    });

    item.status = 1;

    setList(items);
  };

  const filter = (value) => {
    setFilterValue(value);
  };

  return (
    <main className="flex min-h-screen flex-col p-24">
      <Add UpdateList={updateList} />
      <Filter Items={list} FilterMethod={filter} />
      <List Items={list} Complete={complete} Filter={filterValue} />
    </main>
  );
}
