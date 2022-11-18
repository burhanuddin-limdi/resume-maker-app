import React from "react";
import "./App.css";
import { ResumeForm } from "./components/resumeForm/resumeForm";
import { ResumeSide } from "./components/resumeSide/resumeSide";

function App() {
  return (
    <div className="App grid grid-cols-2 h-screen">
      <div className="col-span-1 h-screen">
        <ResumeForm />
      </div>
      <div className="col-span-1 h-screen">
        <ResumeSide />
      </div>
    </div>
  );
}

export default App;
