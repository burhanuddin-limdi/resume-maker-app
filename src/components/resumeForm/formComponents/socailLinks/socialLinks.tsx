import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../shared/store";
import { setSocialLink } from "./socailLinksSlice";
export const SocialMedia: React.FC = () => {
  let [removeHide, setremoveHide] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const [point, setpoint] = useState("");
  return (
    <div className="bg-white mx-10 rounded-md py-2 px-3">
      <div className="flex justify-between">
        <p className="font-semibold">Social Media</p>
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
        <div className="flex flex-wrap justify-center space-y-3 px-6">
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3 w-full"
            placeholder="Link to your Social Media page"
            onChange={(e) => setpoint(e.target.value)}
          />
          <div className="w-full flex justify-center">
            <button
              onClick={() => {
                dispatch(setSocialLink(point));
              }}
              className="m-auto w-fit rounded-md bg-[#E8F9FD] px-3 py-1"
            >
              <span className="text-lg mx-1 relative">+</span>
              <span>Add Link</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
