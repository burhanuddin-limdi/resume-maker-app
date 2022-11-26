import React from "react";
import "./resumeSide.css";
import { useAppSelector } from "../../shared/hooks";
import { selectBasicDetails } from "../resumeForm/formComponents/basicDetails/basicDetailsSlice";
import { selectContactDetails } from "../resumeForm/formComponents/contactDetails/contactDetailsSlice";
import { selectEducationList } from "../resumeForm/formComponents/educationDetails/educationDetailsSlice";
import { selectSkill } from "../resumeForm/formComponents/skills/skillsSlice";
import { selectSocialLinks } from "../resumeForm/formComponents/socailLinks/socailLinksSlice";
import { selectExperience } from "../resumeForm/formComponents/experience/experienceSlice";
import { selectProject } from "../resumeForm/formComponents/projects/projectsSlice";
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
              {useAppSelector(selectExperience).map((e: any) => {
                return (
                  <div className="relative right-3" key={e}>
                    <p className="font-medium">{e.post}</p>
                    <p className="font-medium">{e.company}</p>
                    <p className="text-[6px]">
                      {e.startDate} - {e.endDate}
                    </p>
                    <div className="text-[6px] w-[80%] pl-2 break-words">
                      <p>{e.summary}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-10">
              <p className="-rotate-90 text-[#59CE8F] font-semibold text-[11px] relative top-5 right-[8px]">
                Projects
              </p>
            </div>

            <div className="text-[8px] space-y-2">
              {useAppSelector(selectProject).map((p) => {
                return (
                  <div className="relative right-3" key={p.name}>
                    <p className="font-medium">{p.name}</p>

                    <p className="text-[6px] w-[80%]">
                     {p.about}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-[#59CE8F] h-full">
          <div className="flex justify-center mt-5 relative right-[20px]">
            <div className="w-10  left-[4px] absolute">
              <p className="-rotate-90 text-[#E8F9FD] font-semibold text-[11px] relative top-4 left-0.5">
                Contact
              </p>
            </div>

            <div className="text-left text-[7px] break-words w-[80%] space-y-2 left-9 -top-1 absolute ">
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
              {useAppSelector(selectEducationList).map((edu: any) => {
                return (
                  <div key={edu}>
                    <p className="font-semibold">{edu.degree}</p>
                    <p className="">
                      {edu.college} {edu.university}
                    </p>
                    <p className="">{edu.marks}</p>
                    <p className="">{edu.location}</p>
                    <p className="">{edu.year}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center mt-5 relative right-6">
            <div className="w-[72px]">
              <p className="-rotate-90 text-[#E8F9FD] font-semibold text-[11px] relative top-2">
                Skills
              </p>
            </div>

            <ul className="text-left text-[7px] break-words relative right-6">
              {useAppSelector(selectSkill).map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center mt-5 relative right-8">
            <div className="w-[72px]">
              <p className="-rotate-90 text-[#E8F9FD] font-semibold text-[11px] relative top-8">
                Social Media
              </p>
            </div>

            <ul className="text-left text-[7px] break-words relative right-6">
              {/* <p className="">LinkedIn</p>
              <p className="">Github</p> */}
              {useAppSelector(selectSocialLinks).map((social) => (
                <li key={social}>{social}</li>
              ))}
            </ul>
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
