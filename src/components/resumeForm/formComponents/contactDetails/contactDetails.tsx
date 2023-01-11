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
          "space-y-3 pt-3 pb-6 " + (removeHide === true ? "hidden" : "visible")
        }
      >
        <div className="flex flex-wrap space-x-3 justify-center">
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="Email"
            onChange={(e) => {
              dispatch(setEmail(e.target.value));
            }}
          />

          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="Phone Number"
            onChange={(e) => {
              dispatch(setPhone(e.target.value));
            }}
          />
        </div>
        <p className="text-sm text-left relative left-6 top-2">Nationality</p>
        <div className="flex flex-wrap space-x-3 justify-center">
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="Country"
            onChange={(e) => {
              dispatch(setNationality(e.target.value));
            }}
          />
          {/* <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="State"
            onChange={(e) => {
              dispatch(setState(e.target.value))
            }}
          /> */}
        </div>
        {/* <div className="flex flex-wrap space-x-3 justify-center">
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="City"
            onChange={(e) => {
              dispatch(setCity(e.target.value))
            }}
          />
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="Postal Code"
            onChange={(e) => {
              dispatch(setZip(e.target.value))
            }}
          />
        </div> */}
      </form>
    </div>
  );
};
