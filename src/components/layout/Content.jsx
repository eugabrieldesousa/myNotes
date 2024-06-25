import React from "react";
import InsertToDo from "../InsertToDo";
import List from "../List";

const Content = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <InsertToDo />
      </div>
      <List />
    </div>
  );
};

export default Content;
