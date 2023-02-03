import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../shared/store";

const initialState = {
  pdfVisible: false,
};

export const previewPdfSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    showPdf: (state, action: PayloadAction<boolean>) => {
      state.pdfVisible = action.payload;
    },
  },
});
export const { showPdf } = previewPdfSlice.actions;
export const previewPdf = (state: RootState) => state.preview.pdfVisible;

export default previewPdfSlice.reducer;
