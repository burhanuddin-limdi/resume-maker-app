import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../shared/store";
import { setEmail, setPhone, setNationality } from "./contactDetailsSlice";

export const ContactDetails: React.FC = () => {
  let [removeHide, setremoveHide] = useState(true);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="bg-white mx-10 rounded-md py-2 px-3">
      <div className="flex justify-between">
        <p className="font-semibold">Contact details</p>
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
            placeholder="Email"
            onChange={(e) => {
              dispatch(setEmail(e.target.value));
            }}
          />

          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3  my-2 w-full mx-2"
            placeholder="Phone Number"
            onChange={(e) => {
              dispatch(setPhone(e.target.value));
            }}
          />
        </div>
        {/* <div>
          <p className="text-sm">Nationality</p>
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3  my-2 w-full mx-2"
            placeholder="Country"
            onChange={(e) => {
              dispatch(setNationality(e.target.value));
            }}
          />
        </div> */}
      </form>
    </div>
  );
};
