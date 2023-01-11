import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../shared/store";

const initialState = {
  value: {
    email: "",
    phone: "",
    nationality: "",
  },
};

export const contactDetailsSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.value.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.value.phone = action.payload;
    },
    setNationality: (state, action: PayloadAction<string>) => {
      state.value.nationality = action.payload;
    },
  },
});
export const { setEmail, setPhone, setNationality } =
  contactDetailsSlice.actions;
export const selectContactDetails = (state: RootState) =>
  state.contactDetails.value;

export default contactDetailsSlice.reducer;
