import {  createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState,  } from '../../../../shared/store';

const initialState = {
    value: {
       experiences : [{
         post:'',
         company:'',
         startDate:'',
         endDate:'',
         summary:''
       }]
    }
}

export const experienceSlice = createSlice ({
    name: 'resume',
    initialState,
    reducers: {
     setExperience : (state , action :PayloadAction<any>)=>{
         state.value.experiences = [...state.value.experiences, action.payload]
      }
    }
});
export const {setExperience} = experienceSlice.actions
export const selectExperience = (state: RootState) => state.experiences.value.experiences

export default experienceSlice.reducer;