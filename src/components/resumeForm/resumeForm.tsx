import React from "react";
import { DownloadBtn } from "../resumeSide/downloadBtn";
import { BasicDetails } from "./formComponents/basicDetails/basicDetails";
import { ContactDetails } from "./formComponents/contactDetails/contactDetails";
import { EducationDetails } from "./formComponents/educationDetails/educationDetails";
import { Experience } from "./formComponents/experience/experience";
import { Projects } from "./formComponents/projects/projects";
import { Skills } from "./formComponents/skills/skills";
import { SocialMedia } from "./formComponents/socailLinks/socialLinks";
import { PreviewBtn } from "./preview/previewBtn";

export const ResumeForm: React.FC = () => {
  return (
    <div className="bg-[#E8F9FD] w-full h-screen grid items-center overflow-y-auto relative">
      <div className="space-y-3 mb-20">
        <BasicDetails />
        <ContactDetails />
        <EducationDetails />
        <Skills />
        <Experience />
        <Projects />
        <SocialMedia />
      </div>
      <div className="md:hidden flex justify-center space-x-3 fixed bottom-0 w-full bg-[#E8F9FD] py-3">
        <DownloadBtn />
        <PreviewBtn />
      </div>
    </div>
  );
};
