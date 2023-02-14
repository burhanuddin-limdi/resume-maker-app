import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../../shared/hooks";
import { AppDispatch } from "../../../../shared/store";
import { setProject } from "./projectsSlice";
export const Projects: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  let [removeHide, setremoveHide] = useState(true);
  const project = {
    name: "",
    about: "",
  };
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
          "space-y-3 py-3 " + (removeHide === true ? "hidden" : "visible")
        }
      >
        <input
          type="text"
          name=""
          id=""
          className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3 w-full"
          placeholder="Title"
          onChange={(e) => {
            project.name = e.target.value;
          }}
        />
        <textarea
          name=""
          id=""
          className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3 w-full"
          placeholder="Description"
          onChange={(e) => {
            project.about = e.target.value;
          }}
        />
        <div className="w-full flex justify-center">
          <p
            onClick={() => {
              dispatch(setProject(project));
            }}
            className="m-auto w-fit rounded-md bg-[#E8F9FD] px-3 py-1"
          >
            <span className="text-lg mx-1 relative">+</span>
            <span>Add Project</span>
          </p>
        </div>
      </form>
    </div>
  );
};
