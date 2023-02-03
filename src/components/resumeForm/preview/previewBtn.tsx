import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../shared/store";
import { showPdf } from "./previewSlice";

export const PreviewBtn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const previewPdf = () => {
    dispatch(showPdf(true));
  };
  return (
    <button
      className="rounded-md bg-white w-fit text-black text-sm py-2 px-7 font-light"
      onClick={previewPdf}
    >
      Preview
    </button>
  );
};
