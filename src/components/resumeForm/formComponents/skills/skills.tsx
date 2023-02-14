import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../shared/store";
import { setSkill } from "./skillsSlice";
export const Skills: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  let [removeHide, setremoveHide] = useState(true);
  let [skill, setskill] = useState("");

  return (
    <div className="bg-white mx-10 rounded-md py-2 px-3">
      <div className="flex justify-between">
        <p className="font-semibold">Skills</p>
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
          "lg:space-y-3 py-3 " + (removeHide === true ? "hidden" : "visible")
        }
      >
        <input
          type="text"
          name=""
          id=""
          className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3 w-full"
          placeholder="Skill"
          onChange={(e) => {
            setskill(e.target.value);
          }}
        />
        <p
          onClick={() => {
            dispatch(setSkill(skill));
          }}
          className="m-auto w-fit rounded-md bg-[#E8F9FD] px-3 py-1 text-sm flex justify-center place-items-center mt-2.5"
        >
          <span className="text-lg mx-1 relative bottom-0.5">+</span>
          <span>Add Skill</span>
        </p>
      </form>
    </div>
  );
};
