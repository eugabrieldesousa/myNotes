import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-6 items-start">
      <div className="relative">
        <div className="absolute w-5 h-1 bg-yellow-400 -rotate-45 top-1 rounded-br-2xl rounded-tr-2xl"></div>
        <div className="absolute w-5 h-1 bg-yellow-400 rotate-45 top-4 rounded-br-2xl rounded-tr-2xl"></div>
      </div>
      <span className="text-yellow-400 font-[700]">myNotes</span>
    </div>
  );
};

export default Logo;
