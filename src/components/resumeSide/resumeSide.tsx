import React from "react";
import "./resumeSide.css";

export const ResumeSide: React.FC = () => {
  return (
    <div className="bg-[#171616] w-full h-full grid items-center text-center justify-center pt-12 pb-6">
      <div className="grid grid-cols-3 items-center text-center a4-aspect h-[75vh]">
        <div className="col-span-2 bg-[#E8F9FD] h-full"></div>
        <div className="col-span-1 bg-[#59CE8F] h-full"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <div className="aspect-square w-6 rounded-[100%] h-6 bg-[#000]"></div>
          <div className="aspect-square w-6 rounded-[100%] h-6 bg-[#E8F9FD]"></div>
          <div className="aspect-square w-6 rounded-[100%] h-6 bg-[#59CE8F]"></div>
        </div>
        <button className="rounded-md bg-[#FF1E00] w-fit text-white text-sm py-2 px-7 font-light">
          Download PDF
        </button>
      </div>
    </div>
  );
};
