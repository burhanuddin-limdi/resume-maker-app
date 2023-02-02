import React from "react";
import "./App.css";
import { previewPdf } from "./components/resumeForm/preview/previewSlice";
import { ResumeForm } from "./components/resumeForm/resumeForm";
import { ResumeSide } from "./components/resumeSide/resumeSide";
import { useAppSelector } from "./shared/hooks";

function App() {
  return (
    <>
      <div className="Ap hidden md:grid md:grid-cols-2 h-screen">
        <div className="col-span-1 h-screen">
          <ResumeForm />
        </div>
        <div className="col-span-1 h-screen">
          <ResumeSide />
        </div>
      </div>
      <div className="md:hidden">
        {!useAppSelector(previewPdf) && <ResumeForm />}
        {useAppSelector(previewPdf) && <ResumeSide />}
      </div>
    </>
  );
}

export default App;
