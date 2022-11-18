import React from "react";

export const BasicDetails: React.FC = () => {
  return (
    <div className="bg-white mx-10 rounded-md py-2 px-3">
      <div className="flex justify-between">
        <p className="font-semibold">Basic details</p>
        <img src="./assets/Remove.svg" alt="" />
      </div>
      <form className="space-y-3 pt-3 pb-6">
        <div className="flex flex-wrap space-x-3 justify-center">
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="First Name"
          />
          <input
            type="text"
            name=""
            id=""
            className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
            placeholder="Last Name"
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
              placeholder="First Name"
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
