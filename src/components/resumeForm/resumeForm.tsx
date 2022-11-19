import React from "react";
import { BasicDetails } from "./formComponents/basicDetails";
import { ContactDetails } from "./formComponents/contactDetails";
import { EducationDetails } from "./formComponents/educationDetails/educationDetails";
import { Experience } from "./formComponents/experience";
import { Projects } from "./formComponents/projects";
import { Skills } from "./formComponents/skills";

export const ResumeForm: React.FC = () => {
  return (
    <div className="bg-[#E8F9FD] w-full h-full grid items-center">
      <div className="space-y-3">
        <BasicDetails />
        <ContactDetails />
        <EducationDetails />
        <Skills />
        <Experience />
        <Projects/>
      </div>
    </div>
  );
};
