import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../shared/store";

const initialState = {
  value: {
    primColor: "#E8F9FD",
    secColor: "#59CE8F",
  },
};
export const colorsSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setPrimColor: (state, action: PayloadAction<string>) => {
      state.value.primColor = action.payload;
      console.log("primary color", state.value.primColor);
    },
    setSecColor: (state, action: PayloadAction<string>) => {
      state.value.secColor = action.payload;
    },
  },
});
export const { setPrimColor, setSecColor } = colorsSlice.actions;

export const selectColors = (state: RootState) => state.colors.value;

export default colorsSlice.reducer;
