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
import { ColorPIckers } from "./colorPickers/colorPIckers";
import { selectColors } from "./colorPickers/colorPIckerSlice";
import { DownloadBtn } from "./downloadBtn";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../shared/store";
import { showPdf } from "../resumeForm/preview/previewSlice";
// const fetchData = async () => {
//   fetch("http://localhost:5253/api")
//     .then((response) => {
//       if (response.ok) {
//         return response.arrayBuffer();
//       }
//       throw new Error("Unable to download PDF");
//     })
//     .then((arrayBuffer) => {
//       const blob = new Blob([arrayBuffer], { type: "application/pdf" });
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = "resume.pdf";
//       document.body.appendChild(link);
//       link.click();
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

export const ResumeSide: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const closePdf = () => {
    dispatch(showPdf(false));
  };
  return (
    <div className="bg-[#171616] w-full h-screen grid items-center text-center justify-center pt-12 pb-6 overflow-y-auto relative">
      <button
        className="absolute top-3 left-3 z-20 md:hidden"
        onClick={closePdf}
      >
        <img src="./assets/arrow.png" width={"20px"} alt="" />
      </button>
      <div
        className="grid grid-cols-3 items-center text-center a4-aspect h-[60vh] lg:h-[75vh]"
        id="resume"
      >
        <div
          className="col-span-2 bg-[#E8F9FD] h-full text-left"
          style={{ backgroundColor: useAppSelector(selectColors).primColor }}
        >
          <div className="font-medium text-lg  py-5 px-5">
            <p>{useAppSelector(selectBasicDetails).firstName}</p>
            <p>{useAppSelector(selectBasicDetails).lastName}</p>
          </div>
          <p className="text-[11px] font-medium ml-5 relative bottom-6 h-fit">
            {useAppSelector(selectBasicDetails).jobTitle}
          </p>
          <div className="flex relative">
            <div className="w-10">
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px] relative top-10 right-[8px]">
                {useAppSelector(selectExperience).length > 1 && "Experience"}
              </p>
            </div>

            <div className="text-[8px] space-y-2">
              {useAppSelector(selectExperience).map((e: any) => {
                if (e.post.length) {
                  return (
                    <div className="relative right-3">
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
                } else {
                  return <></>;
                }
              })}
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-10">
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px] relative top-5 right-[8px]">
                {useAppSelector(selectProject).length > 1 && "Projects"}
              </p>
            </div>

            <div className="text-[8px] space-y-2">
              {useAppSelector(selectProject).map((p) => {
                if (p.name.length) {
                  return (
                    <div className="relative right-3">
                      <p className="font-medium">{p.name}</p>

                      <p className="text-[6px] w-[80%]">{p.about}</p>
                    </div>
                  );
                } else {
                  return <></>;
                }
              })}
            </div>
          </div>
        </div>
        <div
          className="col-span-1 h-full"
          style={{ backgroundColor: useAppSelector(selectColors).secColor }}
        >
          <div className="flex justify-center mt-5 relative right-[20px] w-[99%]">
            <div className="w-10 relative top-5 left-4">
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px] relative">
                {useAppSelector(selectContactDetails).email.length > 1 &&
                  "Contact"}
              </p>
            </div>

            <div className="text-left text-[7px] break-words w-[85px] space-y-2 relative px-3 right-1">
              <div>
                <p className="font-semibold">
                  {useAppSelector(selectContactDetails).email.length > 1 &&
                    "Email"}
                </p>
                <p className=" w-[85px]">
                  {useAppSelector(selectContactDetails).email}
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  {useAppSelector(selectContactDetails).nationality.length >
                    1 && "Nationality"}
                </p>
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
                <p className="font-semibold">
                  {useAppSelector(selectContactDetails).phone && "Phone Number"}
                </p>
                <p>{useAppSelector(selectContactDetails).phone}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5 relative">
            <div className="w-10 relative top-6 right-[10px]">
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px]">
                {useAppSelector(selectEducationList).length > 1 && "Education"}
              </p>
            </div>
            <div className="text-left text-[7px] break-words space-y-2 relative bottom-2 right-[18px]">
              {useAppSelector(selectEducationList).map((edu: any) => {
                if (edu.degree.length) {
                  return (
                    <div>
                      <p className="font-semibold">{edu.degree}</p>
                      <p className="">
                        {edu.college} {edu.university}
                      </p>
                      <p className="">{edu.marks}</p>
                      <p className="">{edu.location}</p>
                      <p className="">{edu.year}</p>
                    </div>
                  );
                } else {
                  return <></>;
                }
              })}
            </div>
          </div>
          <div className="flex justify-center relative mt-[10px] right-1.5">
            <div className="w-[72px] relative">
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px] relative">
                {useAppSelector(selectSkill).length > 1 && "Skills"}
              </p>
            </div>

            <ul className="text-left text-[7px] break-words relative bottom-[10px] w-[85px] right-1">
              {useAppSelector(selectSkill).map((skill) => (
                <li className="w-[85px]">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center relative">
            <div className="w-[72px]">
              <p className="-rotate-90 text-[#000000] font-semibold text-[11px] relative">
                {useAppSelector(selectSocialLinks).length > 1 && "Socials"}
              </p>
            </div>

            <ul className="text-left text-[7px] break-words relative w-[85px]">
              {useAppSelector(selectSocialLinks).map((social) => (
                <li className="w-[85px]">{social}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <ColorPIckers />
        <DownloadBtn />
      </div>
    </div>
  );
};
