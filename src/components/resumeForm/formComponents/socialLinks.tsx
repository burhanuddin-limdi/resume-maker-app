import React, { useState } from "react";

export const SocialMedia: React.FC = () => {
  let [removeHide, setremoveHide] = useState(true);
  const point =  <input
  type="text"
  name=""
  id=""
  className="border border-[#a7a7a7] rounded-md text-xs placeholder:text-xs placeholder:text-[#a7a7a7] py-1 px-3 w-full"
  placeholder="Link to your Social Media page"
/>
  let [points, setpoints] = useState([point])
  const addPoint = () =>{

    setpoints(
        points = [...points,point]
    )

  }
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
          "space-y-3 pt-3 pb-6 " + (removeHide === true ? "hidden" : "visible")
        }
      >
       
       
        <div className="flex flex-wrap justify-center space-y-3 px-6">
         {points}
          <p onClick={()=>{
            addPoint();
          }}>add another link</p>
        </div>
      </form>
    </div>
  );
};
