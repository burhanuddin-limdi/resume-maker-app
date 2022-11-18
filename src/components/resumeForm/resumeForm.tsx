import React from "react";
import { useState } from "react";
import { BasicDetails } from "./formComponents/basicDetails";
import { ContactDetails } from "./formComponents/contactDetails";

export const ResumeForm: React.FC = () => {
  return (
    <div className="bg-[#E8F9FD] w-full h-full grid items-center">
      <div className="space-y-3">
        <BasicDetails />
        <ContactDetails />
      </div>
    </div>
  );
};
