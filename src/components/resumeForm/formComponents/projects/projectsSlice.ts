import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../shared/store";

const initialState = {
  value: {
    projects: [
      {
        name: "",
        about: "",
      },
    ],
  },
};

export const projectssSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setProject: (state, action: PayloadAction<any>) => {
      state.value.projects = [...state.value.projects, action.payload];
    },
  },
});
export const { setProject } = projectssSlice.actions;
export const selectProject = (state: RootState) =>
  state.projects.value.projects;

export default projectssSlice.reducer;
