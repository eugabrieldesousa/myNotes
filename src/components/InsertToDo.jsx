import React from "react";

const InsertToDo = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="O que preciso fazer?"
        className="bg-zinc-800 p-2 rounded-xl text-white focus-visible:outline-none w-[30rem]"
      />
    </div>
  );
};

export default InsertToDo;
