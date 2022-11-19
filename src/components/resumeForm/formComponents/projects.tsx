import React, { useState } from "react";

export const Projects: React.FC = () => {
  let [removeHide, setremoveHide] = useState(true);
  return (
    <div className="bg-white mx-10 rounded-md py-2 px-3">
      <div className="flex justify-between">
        <p className="font-semibold">Projects</p>
        <img
          src="./assets/Remove.svg"
          alt=""
          className={removeHide === true ? "hidden" : "visible"}
          onClick={() => {
            setremoveHide((removeHide = !removeHide));
          }}
        />
        <img
          src="./assets/Add_round.svg"
          alt=""
          className={removeHide === false ? "hidden" : "visible"}
          onClick={() => {
            setremoveHide((removeHide = !removeHide));
          }}
        />
      </div>
      <form
        className={
          "space-y-3 pt-3 pb-6 " + (removeHide === true ? "hidden" : "visible")
        }
      >
        <input
          type="text"
          name=""
          id=""
          className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3 w-full"
          placeholder="Country"
        />
        <textarea
          name=""
          id=""
          className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3 w-full"
          placeholder="State"
        />
      </form>
    </div>
  );
};
