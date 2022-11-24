import {  createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState,  } from '../../../../shared/store';

const initialState = {
    value: {
        email:'',
        phone:'',
        address:{
         country:'',
         state:'',
         city:'',
         zip:''
        },
       
    }
}

export const contactDetailsSlice = createSlice ({
    name: 'resume',
    initialState,
    reducers: {
     setEmail : (state , action :PayloadAction<string>)=>{
        state.value.email = action.payload;
     },
     setPhone : (state , action :PayloadAction<string>)=>{
        state.value.phone = action.payload;
     },
     setCountry : (state , action :PayloadAction<string>)=>{
        state.value.address.country = action.payload;
     },
     setState : (state , action :PayloadAction<string>)=>{
        state.value.address.state = action.payload;
     },
     setCity : (state , action :PayloadAction<string>)=>{
        state.value.address.city = action.payload;
     },
     setZip : (state , action :PayloadAction<string>)=>{
        state.value.address.zip = action.payload;
     }
    }
});
export const {setEmail, setPhone, setCountry,setState, setCity , setZip,} = contactDetailsSlice.actions
export const selectContactDetails = (state: RootState) => state.contactDetails.value;

export default contactDetailsSlice.reducer;