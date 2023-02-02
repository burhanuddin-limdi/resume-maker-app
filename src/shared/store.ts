import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import basicDetailsReducer from "../components/resumeForm/formComponents/basicDetails/basicDetailsSlice";
import contactDetailsReducer from "../components/resumeForm/formComponents/contactDetails/contactDetailsSlice";
import educationDetailsReducer from "../components/resumeForm/formComponents/educationDetails/educationDetailsSlice";
import skillsReducer from "../components/resumeForm/formComponents/skills/skillsSlice";
import socialLinksReducer from "../components/resumeForm/formComponents/socailLinks/socailLinksSlice";
import experienceReducer from "../components/resumeForm/formComponents/experience/experienceSlice";
import projectReducer from "../components/resumeForm/formComponents/projects/projectsSlice";
import colorsReducer from "../components/resumeSide/colorPickers/colorPIckerSlice";
import previewReducer from "../components/resumeForm/preview/previewSlice";
export const store = configureStore({
  reducer: {
    basicDetails: basicDetailsReducer,
    contactDetails: contactDetailsReducer,
    educationDetails: educationDetailsReducer,
    skills: skillsReducer,
    socialLinks: socialLinksReducer,
    experiences: experienceReducer,
    projects: projectReducer,
    colors: colorsReducer,
    preview: previewReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
