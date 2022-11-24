import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import basicDetailsReducer from '../components/resumeForm/formComponents/basicDetails/basicDetailsSlice';
import contactDetailsReducer from '../components/resumeForm/formComponents/contactDetails/contactDetailsSlice'
import educationDetailsReducer from '../components/resumeForm/formComponents/educationDetails/educationDetailsSlice'
export const store = configureStore({
  reducer: {
    basicDetails: basicDetailsReducer,
    contactDetails: contactDetailsReducer,
    educationDetails:educationDetailsReducer
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
