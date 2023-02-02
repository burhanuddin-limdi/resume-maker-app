import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../shared/store";
import { setExperience } from "./experienceSlice";
export const Experience: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  let [removeHide, setremoveHide] = useState(true);
  const experience = {
    post: "",
    company: "",
    startDate: "",
    endDate: "",
    summary: "",
  };

  return (
    <div className="bg-white mx-10 rounded-md py-2 px-3">
      <div className="flex justify-between">
        <p className="font-semibold">Experience</p>
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
          "lg:space-y-3 pt-3 pb-6 " +
          (removeHide === true ? "hidden" : "visible")
        }
      >
        <div className="flex flex-wrap lg:flex-nowrap justify-evenly">
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3  my-2 w-full mx-2"
            placeholder="Job Post"
            onChange={(e) => {
              experience.post = e.target.value;
            }}
          />
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3  my-2 w-full mx-2"
            placeholder="Company Name"
            onChange={(e) => {
              experience.company = e.target.value;
            }}
          />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-evenly">
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3  my-2 w-full mx-2"
            placeholder="Date started"
            onChange={(e) => {
              experience.startDate = e.target.value;
            }}
          />
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3  my-2 w-full mx-2"
            placeholder="Date ended"
            onChange={(e) => {
              experience.endDate = e.target.value;
            }}
          />
        </div>
        <div className="flex justify-center">
          <textarea
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3  my-2 w-full mx-2"
            placeholder="Summary of your work"
            onChange={(e) => {
              experience.summary = e.target.value;
            }}
          />
        </div>
        <div className="flex flex-wrap justify-center space-y-3 px-6">
          {/* {points} */}
          <p
            onClick={() => {
              dispatch(setExperience(experience));
            }}
          >
            add
          </p>
        </div>
      </form>
    </div>
  );
};
