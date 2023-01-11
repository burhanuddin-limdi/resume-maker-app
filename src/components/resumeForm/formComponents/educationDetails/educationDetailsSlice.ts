import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../shared/store";

const initialState = {
  value: {
    educationList: [
      {
        degree: "",
        college: "",
        marks: "",
        year: "",
        location: "",
      },
    ] as any,
  },
};

export const educationDetailsSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setEducation: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.value.educationList = [
        ...state.value.educationList,
        action.payload,
      ];
      console.log(state.value.educationList);
    },
  },
});
export const { setEducation } = educationDetailsSlice.actions;
export const selectEducationList = (state: RootState) =>
  state.educationDetails.value.educationList;

export default educationDetailsSlice.reducer;
