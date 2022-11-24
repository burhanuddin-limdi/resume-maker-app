import {  createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState,  } from '../../../../shared/store';

const initialState = {
    value: {
        firstName:'',
        lastName:'',
        jobTitle:''
    }
}

export const basicDetailsSlice = createSlice ({
    name: 'resume',
    initialState,
    reducers: {
     setFirstName : (state , action :PayloadAction<string>)=>{
        state.value.firstName = action.payload;
     },
     setLastName : (state , action :PayloadAction<string>)=>{
        state.value.lastName = action.payload;
     },
     setJobTitle : (state , action :PayloadAction<string>)=>{
        state.value.jobTitle = action.payload;
     }
    }
});
export const {setFirstName, setLastName, setJobTitle} = basicDetailsSlice.actions

export const selectBasicDetails = (state: RootState) => state.basicDetails.value;


export default basicDetailsSlice.reducer;