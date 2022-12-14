import React from "react";
import { BasicDetails } from "./formComponents/basicDetails/basicDetails";
import { ContactDetails } from "./formComponents/contactDetails/contactDetails";
import { EducationDetails } from "./formComponents/educationDetails/educationDetails";
import { Experience } from "./formComponents/experience/experience";
import { Projects } from "./formComponents/projects/projects";
import { Skills } from "./formComponents/skills/skills";
import { SocialMedia } from "./formComponents/socailLinks/socialLinks";

export const ResumeForm: React.FC = () => {
  return (
    <div className="bg-[#E8F9FD] w-full h-full grid items-center">
      <div className="space-y-3">
        <BasicDetails />
        <ContactDetails />
        <EducationDetails />
        <Skills />
        <Experience />
        <Projects />
        <SocialMedia />
      </div>
    </div>
  );
};
