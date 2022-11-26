import {  createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState,  } from '../../../../shared/store';

const initialState = {
    value: {
       skills:['']
    }
}

export const skillsSlice = createSlice ({
    name: 'resume',
    initialState,
    reducers: {
     setSkill : (state , action :PayloadAction<string>)=>{
         state.value.skills = [...state.value.skills, action.payload]
      }
    }
});
export const {setSkill} = skillsSlice.actions
export const selectSkill = (state: RootState) => state.skills.value.skills

export default skillsSlice.reducer;