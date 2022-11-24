import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../shared/store"; 
import { setFirstName } from "./basicDetailsSlice";
import { setLastName } from "./basicDetailsSlice";
import { setJobTitle } from "./basicDetailsSlice";

export const BasicDetails: React.FC = () => {

  let [removeHide, setremoveHide] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="bg-white mx-10 rounded-md py-2 px-3">
      <div className="flex justify-between">
        <p className="font-semibold">Basic details</p>
        <img
          src="./assets/Remove.svg"
          alt=""
          className={removeHide === true ? 'hidden':'visible'}
          onClick={() => {
            setremoveHide(removeHide=!removeHide);
          }}
        />
        <img
          src="./assets/Add_round.svg"
          alt=""
          className={removeHide === false ? 'hidden':'visible'}
          onClick={() => {
            setremoveHide(removeHide=!removeHide);
          }}
        />
      </div>
      <form className={"space-y-3 pt-3 pb-6 " + ((removeHide === true) ? 'hidden':'visible')}>
        <div className="flex flex-wrap space-x-3 justify-center">
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="First Name"
            onChange = {(e)=> {
              // setNameValue(e.target.value);
              dispatch(setFirstName(e.target.value));
            }}
          />
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="Last Name"
            onChange = {(e)=> {
              dispatch(setLastName(e.target.value));
            }}
          />
        </div>
        <div className="flex flex-wrap space-x-3 justify-center">
          <div>
            <label htmlFor="" className="text-[10px] block text-left ml-1">
              Desired Job Title
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
              placeholder="Ex., Graphic designer"
              onChange = {(e)=> {
                dispatch(setJobTitle(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="" className="text-[10px] block text-left ml-1">
              (Optional)
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
              placeholder="First Name"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

