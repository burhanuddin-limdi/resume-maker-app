import React, { useState } from "react";
import { EducationForm } from "./educationForm";

export const EducationDetails: React.FC = () => {
  let [removeHide, setremoveHide] = useState(true);
  // var forms = [<EducationForm/>]
  let [forms, setforms] = useState([<EducationForm />]);
  const addForm = () => {
    setforms((forms = [...forms, <EducationForm />]));
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
        {forms}
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
