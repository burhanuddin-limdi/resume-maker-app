import {  createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState,  } from '../../../../shared/store';

const initialState = {
    value: {
       educationList:[{
         degree:'',
         college:'',
         marks:'',
         year:'',
         location:''
       } ] as any,
        },
       
    }


export const educationDetailsSlice = createSlice ({
    name: 'resume',
    initialState,
    reducers: {
   //   setEmail : (state , action :PayloadAction<string>)=>{
   //      state.value.email = action.payload;
   //   },
   //   setPhone : (state , action :PayloadAction<string>)=>{
   //      state.value.phone = action.payload;
   //   },
   //   setCountry : (state , action :PayloadAction<string>)=>{
   //      state.value.address.country = action.payload;
   //   },
   //   setState : (state , action :PayloadAction<string>)=>{
   //      state.value.address.state = action.payload;
   //   },
   //   setCity : (state , action :PayloadAction<string>)=>{
   //      state.value.address.city = action.payload;
   //   },
   //   setZip : (state , action :PayloadAction<string>)=>{
   //      state.value.address.zip = action.payload;
   //   }
     setEducation : (state , action :PayloadAction<any>)=>{
      //   state.value.address.zip = action.payload;
      console.log(action.payload);
      
      state.value.educationList = [...state.value.educationList, action.payload]
      // state.value.educationList = action.payload
      console.log(state.value.educationList);

      
      }
   
    }
});
export const {setEducation} = educationDetailsSlice.actions
export const selectEducationList = (state: RootState) => state.educationDetails.value.educationList;

export default educationDetailsSlice.reducer;