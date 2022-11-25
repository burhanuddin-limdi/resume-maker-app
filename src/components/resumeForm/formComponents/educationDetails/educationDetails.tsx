import React, { useState } from "react";
// import { EducationForm } from "./educationForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../shared/store";
import { setEducation } from "./educationDetailsSlice";

export const EducationDetails: React.FC = () => {
  let [removeHide, setremoveHide] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  // let i = 0;
  // let [i, setI] = useState(0);
  // var forms = [<EducationForm/>]
  // let [forms, setforms] = useState([<EducationForm i={i} />]);
  var education = {
    degree:'',
    university:'',
    college:'',
    marks:'',
    year:'',
    location:''
  }
  const addForm = () => {
    // setI((i = i++));
    // setforms((forms = [...forms, <EducationForm i={i} />]));
    dispatch(setEducation(education))

  };
  return (
    <div className="bg-white mx-10 rounded-md py-2 px-3">
      <div className="flex justify-between">
        <p className="font-semibold">Education</p>
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
        <div className="flex flex-wrap space-x-3 justify-center">
          <div>
            <label htmlFor="" className="text-[10px] block text-left ml-1">
              Degree/course name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
              placeholder="Ex., Bachelors in Arts, Senior Secondary"
              onChange={(e)=>{
                education.degree = e.target.value;
              }}
            />
          </div>
          <div>
            <label htmlFor="" className="text-[10px] block text-left ml-1">
              University/Board
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
              placeholder="Ex., Delhi University, CBSE"
              onChange={(e)=>{
                education.university = e.target.value;
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap space-x-3 justify-center">
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="College Name"
            onChange={(e)=>{
              education.college = e.target.value;
            }}
          />

          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="Marks/Percentage/CGPA"
            onChange={(e)=>{
              education.marks = e.target.value;
            }}
          />
        </div>
        <div className="flex flex-wrap space-x-3 justify-center">
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="Year"
            onChange={(e)=>{
              education.year = e.target.value;
            }}
          />

          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="Location"
            onChange={(e)=>{
              education.location = e.target.value;
            }}
          />
        </div>

        <p
          onClick={() => {
            addForm();
          }}
        >
          add
        </p>
      </form>
    </div>
  );
};
