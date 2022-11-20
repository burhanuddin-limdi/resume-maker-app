import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import resumeReducer from './resumeSlice';

export const store = configureStore({
  reducer: {
    counter: resumeReducer,
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
