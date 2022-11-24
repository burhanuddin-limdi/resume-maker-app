import React from "react";
import "./resumeSide.css";
import { useAppSelector } from "../../shared/hooks";
import { selectBasicDetails } from "../resumeForm/formComponents/basicDetails/basicDetailsSlice";
// import { selectEmail } from "../resumeForm/formComponents/contactDetails/contactDetailsSlice";
// import { selectPhone } from "../resumeForm/formComponents/contactDetails/contactDetailsSlice";
import { selectContactDetails } from "../resumeForm/formComponents/contactDetails/contactDetailsSlice";
export const ResumeSide: React.FC = () => {
  return (
    <div className="bg-[#171616] w-full h-full grid items-center text-center justify-center pt-12 pb-6">
      <div className="grid grid-cols-3 items-center text-center a4-aspect h-[75vh]">
        <div className="col-span-2 bg-[#E8F9FD] h-full text-left">
          <div className="font-semibold text-lg  py-5 px-5">
            <p>{useAppSelector(selectBasicDetails).firstName}</p>
            <p>{useAppSelector(selectBasicDetails).lastName}</p>
          </div>
          <p className="text-[11px] font-medium ml-5 relative bottom-6 h-fit">
            {useAppSelector(selectBasicDetails).jobTitle}
          </p>
          <div className="flex justify-center relative right-[10px]">
            <div className="w-10">
              <p className="-rotate-90 text-[#59CE8F] font-semibold text-[11px] relative top-10 right-[8px]">
                Experience
              </p>
            </div>

            <div className="text-[8px] space-y-2">
              <div className="relative right-3">
                <p className="font-medium">Frontend Web Developer</p>
                <p className="font-medium">Thinkgroupy Services Pvt. Ltd.</p>
                <p className="text-[6px]">August 2022 - Nov 2022</p>
                <ul className="text-[6px] w-[80%] list-disc pl-2">
                  <li>Developed their complete frontend website by myself.</li>
                  <li>Made changes in the desgins of website</li>
                  <li>Integrated backend with frontend using REST APIs.</li>
                </ul>
              </div>
              <div className="relative right-3">
                <p className="font-medium">Frontend Web Developer</p>
                <p className="font-medium">Thinkgroupy Services Pvt. Ltd.</p>
                <p className="text-[6px]">August 2022 - Nov 2022</p>
                <ul className="text-[6px] w-[80%] list-disc pl-2">
                  <li>Developed their complete frontend website by myself.</li>
                  <li>Made changes in the desgins of website</li>
                  <li>Integrated backend with frontend using REST APIs.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-10">
              <p className="-rotate-90 text-[#59CE8F] font-semibold text-[11px] relative top-5 right-[8px]">
                Projects
              </p>
            </div>

            <div className="text-[8px] space-y-2">
              <div className="relative right-3">
                <p className="font-medium">Limflix - Netflix clone</p>

                <p className="text-[6px] w-[80%]">
                  I have made it using angular and TMBD API Live Demo:
                  limflix.netlify.app Source:
                </p>
              </div>
              <div className="relative right-3">
                <p className="font-medium">Limflix - Netflix clone</p>

                <p className="text-[6px] w-[80%]">
                  I have made it using angular and TMBD API Live Demo:
                  limflix.netlify.app Source:
                </p>
              </div>
              <div className="relative right-3">
                <p className="font-medium">Limflix - Netflix clone</p>

                <p className="text-[6px] w-[80%]">
                  I have made it using angular and TMBD API Live Demo:
                  limflix.netlify.app Source:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-[#59CE8F] h-full">
          <div className="flex justify-center mt-5 relative right-[10px]">
            <div className="w-10">
              <p className="-rotate-90 text-[#E8F9FD] font-semibold text-[11px] relative top-5 -right-[10px]">
                Contact
              </p>
            </div>

            <div className="text-left text-[7px] break-words w-[80%] space-y-2 pr-5">
              <div>
                <p className="font-semibold">Email</p>
                <p className="">{useAppSelector(selectContactDetails).email}</p>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="">
                  {useAppSelector(selectContactDetails).address.country}
                </p>
                <p className="">
                  {useAppSelector(selectContactDetails).address.state}
                </p>
                <p className="">
                  {useAppSelector(selectContactDetails).address.city}
                </p>
                <p className="">
                  {useAppSelector(selectContactDetails).address.zip}
                </p>
              </div>
              <div>
                <p className="font-semibold">Phone Number</p>
                <p>{useAppSelector(selectContactDetails).phone}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5 relative right-[10px]">
            <div className="w-10">
              <p className="-rotate-90 text-[#E8F9FD] font-semibold text-[11px] relative top-8">
                Education
              </p>
            </div>

            <div className="text-left text-[7px] break-words space-y-2 relative right-2">
              <div>
                <p className="font-semibold">
                  Bachelor in Computer Application (BCA)
                </p>
                <p className="">Leo College (GGTU)</p>
                <p className="">9/10 CGPA</p>
                <p className="">Banswara</p>
                <p className="">2024</p>
              </div>
              <div>
                <p className="font-semibold">
                  Bachelor in Computer Application (BCA)
                </p>
                <p className="">Leo College (GGTU)</p>
                <p className="">9/10 CGPA</p>
                <p className="">Banswara</p>
                <p className="">2024</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5 relative right-8">
            <div className="w-[72px]">
              <p className="-rotate-90 text-[#E8F9FD] font-semibold text-[11px] relative top-8">
                Social Media
              </p>
            </div>

            <div className="text-left text-[7px] break-words relative right-6">
              <p className="">LinkedIn</p>
              <p className="">Github</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <div className="aspect-square w-6 rounded-[100%] h-6 bg-[#000]"></div>
          <div className="aspect-square w-6 rounded-[100%] h-6 bg-[#E8F9FD]"></div>
          <div className="aspect-square w-6 rounded-[100%] h-6 bg-[#59CE8F]"></div>
        </div>
        <button className="rounded-md bg-[#FF1E00] w-fit text-white text-sm py-2 px-7 font-light">
          Download PDF
        </button>
      </div>
    </div>
  );
};
