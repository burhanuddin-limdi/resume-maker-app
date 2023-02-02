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
          if (showPrimPicker) {
            setShowPrimPicker(false);
            setShowSecPicker(false);
          } else {
            setShowPrimPicker(true);
          }
        }}
      ></div>

      <ChromePicker
        className={
          "absolute bottom-[100px] " + (showPrimPicker ? "block" : "hidden")
        }
        color={useAppSelector(selectColors).primColor}
        onChange={(color) => {
          dispatch(setPrimColor(color.hex));
        }}
      />

      <div
        className="aspect-square w-6 rounded-[100%] h-6"
        style={{ backgroundColor: useAppSelector(selectColors).secColor }}
        onClick={() => {
          if (showSecPicker) {
            setShowPrimPicker(false);
            setShowSecPicker(false);
          } else {
            setShowSecPicker(true);
          }
        }}
      ></div>
      <ChromePicker
        className={
          "absolute bottom-[100px] " + (showSecPicker ? "block" : "hidden")
        }
        color={useAppSelector(selectColors).secColor}
        onChange={(color) => {
          dispatch(setSecColor(color.hex));
        }}
      />
    </div>
  );
};
