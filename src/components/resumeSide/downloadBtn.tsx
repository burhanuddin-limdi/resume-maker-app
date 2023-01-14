import React from "react";
import { store } from "../../shared/store";

export const DownloadBtn = () => {
  const sendData = async () => {
    try {
      const response = await fetch(
        // "https://resume-maker-backend-burhanuddin.onrender.com/api",
        "http://localhost:5253/api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(store.getState()),
        }
      )
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
  return (
    <button
      className="rounded-md bg-[#FF1E00] w-fit text-white text-sm py-2 px-7 font-light"
      id="dld-pdf"
      onClick={sendData}
    >
      Download PDF
    </button>
  );
};
