import {  createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState,  } from '../../../../shared/store';

const initialState = {
    value: {
       experiences : [{
         post:'Frontend Developer',
         company:'Thinkgroupy Services Pvt. Ltd.',
         startDate:'22 Aug',
         endDate:'14 Nov',
         summary:'I worked as a Frontend Developer. I developed their website by myself usign Angular framework.'
       },{
        post:'Frontend Developer',
        company:'Thinkgroupy Services Pvt. Ltd.',
        startDate:'22 Aug',
        endDate:'14 Nov',
        summary:'I worked as a Frontend Developer. I developed their website by myself usign Angular framework.'
      },]
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