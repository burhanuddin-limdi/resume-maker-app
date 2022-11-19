import React from 'react'

export const EducationForm = () => {
  return (
    <>
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
      />

      <input
        type="text"
        name=""
        id=""
        className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
        placeholder="Marks/Percentage/CGPA"
      />
    </div>
    <div className="flex flex-wrap space-x-3 justify-center">
      <input
        type="text"
        name=""
        id=""
        className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
        placeholder="Year"
      />

      <input
        type="text"
        name=""
        id=""
        className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3"
        placeholder="Location"
      />
    </div>
  </>
  )
}
