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
import { store } from "../../shared/store";
const fetchData = async () => {
  fetch("http://localhost:5253/api")
    .then((response) => {
      if (response.ok) {
        return response.arrayBuffer();
      }
      throw new Error("Unable to download PDF");
    })
    .then((arrayBuffer) => {
      const blob = new Blob([arrayBuffer], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
    })
    .catch((error) => {
      console.error(error);
    });
};

const sendData = async () => {
  try {
    const response = await fetch("http://localhost:5253/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(store.getState()),
    })
      .then((response) => {
        if (response.ok) {
          return response.arrayBuffer();
        }
        throw new Error("Unable to download PDF");
      })
      .then((arrayBuffer) => {
        const blob = new Blob([arrayBuffer], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "resume.pdf";
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error(error);
      });
    const json = await response;
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
export const ResumeSide: React.FC = () => {
  return (
    <div className="bg-[#171616] w-full h-full grid items-center text-center justify-center pt-12 pb-6">
      {/* <PDFViewer>
        <ResumeView></ResumeView>
      </PDFViewer> */}
      <div
        className="grid grid-cols-3 items-center text-center a4-aspect h-[75vh]"
        id="resume"
      >
        <div className="col-span-2 bg-[#E8F9FD] h-full text-left">
          <div className="font-semibold text-lg  py-5 px-5">
            <p>{useAppSelector(selectBasicDetails).firstName}</p>
            <p>{useAppSelector(selectBasicDetails).lastName}</p>
          </div>
          <p className="text-[11px] font-medium ml-5 relative bottom-6 h-fit">
            {useAppSelector(selectBasicDetails).jobTitle}
          </p>
          <div className="flex justify-center relative">
            <div className="w-10">
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px] relative top-10 right-[8px]">
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
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px] relative top-5 right-[8px]">
                Projects
              </p>
            </div>

            <div className="text-[8px] space-y-2">
              {useAppSelector(selectProject).map((p) => {
                return (
                  <div className="relative right-3" key={p.name}>
                    <p className="font-medium">{p.name}</p>

                    <p className="text-[6px] w-[80%]">{p.about}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-[#59CE8F] h-full">
          <div className="flex justify-center mt-5 relative right-[20px] w-[99%]">
            <div className="w-10 relative top-5 left-4">
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px] relative">
                Contact
              </p>
            </div>

            <div className="text-left text-[7px] break-words w-[85px] space-y-2 relative px-3 right-1">
              <div>
                <p className="font-semibold">Email</p>
                <p className=" w-[85px]">
                  {useAppSelector(selectContactDetails).email}
                </p>
              </div>
              <div>
                <p className="font-semibold">Nationality</p>
                <p className="w-[85]">
                  {useAppSelector(selectContactDetails).nationality}
                </p>
                {/* <p className=" w-[85px]">
                  {useAppSelector(selectContactDetails).address.country}
                </p>
                <p className=" w-[85px]">
                  {useAppSelector(selectContactDetails).address.state}
                </p>
                <p className=" w-[85px]">
                  {useAppSelector(selectContactDetails).address.city}
                </p>
                <p className=" w-[85px]">
                  {useAppSelector(selectContactDetails).address.zip}
                </p> */}
              </div>
              <div>
                <p className="font-semibold">Phone Number</p>
                <p>{useAppSelector(selectContactDetails).phone}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5 relative">
            <div className="w-10 relative top-6 right-[10px]">
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px]">
                Education
              </p>
            </div>
            <div className="text-left text-[7px] break-words space-y-2 relative bottom-2 right-[18px]">
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
          <div className="flex justify-center relative mt-[10px] right-1.5">
            <div className="w-[72px] relative">
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px] relative">
                Skills
              </p>
            </div>

            <ul className="text-left text-[7px] break-words relative bottom-[10px] w-[85px] right-1">
              {useAppSelector(selectSkill).map((skill) => (
                <li className="w-[85px]" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center relative">
            <div className="w-[72px]">
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px] relative">
                Social Media
              </p>
            </div>

            <ul className="text-left text-[7px] break-words relative w-[85px]">
              {useAppSelector(selectSocialLinks).map((social) => (
                <li className="w-[85px]" key={social}>
                  {social}
                </li>
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
        <button
          className="rounded-md bg-[#FF1E00] w-fit text-white text-sm py-2 px-7 font-light"
          id="dld-pdf"
          onClick={sendData}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};
