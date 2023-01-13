import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../shared/hooks";
import { AppDispatch } from "../../../shared/store";
import { selectColors, setPrimColor, setSecColor } from "./colorPIckerSlice";

export const ColorPIckers: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [showPrimPicker, setShowPrimPicker] = useState(false);
  const [showSecPicker, setShowSecPicker] = useState(false);
  return (
    <div className="flex space-x-3">
      <div
        className="aspect-square w-6 rounded-[100%] h-6"
        style={{ backgroundColor: useAppSelector(selectColors).primColor }}
        onClick={() => {
          setShowPrimPicker((s) => !s);
        }}
      ></div>

      <ChromePicker
        className={
          "absolute bottom-[100px] " + (showPrimPicker ? "block" : "hidden")
        }
        color={useAppSelector(selectColors).primColor}
        onChange={(color) => {
          // setcolor(color.hex);
          dispatch(setPrimColor(color.hex));
        }}
      />

      <div
        className="aspect-square w-6 rounded-[100%] h-6"
        style={{ backgroundColor: useAppSelector(selectColors).secColor }}
        onClick={() => {
          setShowSecPicker((s) => !s);
        }}
      ></div>
      <ChromePicker
        className={
          "absolute bottom-[100px] " + (showSecPicker ? "block" : "hidden")
        }
        color={useAppSelector(selectColors).secColor}
        onChange={(color) => {
          // setcolor(color.hex);
          dispatch(setSecColor(color.hex));
        }}
      />
    </div>
  );
};
