import {  createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState,  } from '../../../../shared/store';

const initialState = {
    value: {
       social:['']
    }
}

export const socialSlice = createSlice ({
    name: 'resume',
    initialState,
    reducers: {
     setSocialLink : (state , action :PayloadAction<string>)=>{
         state.value.social = [...state.value.social, action.payload]
      }
    }
});
export const {setSocialLink} = socialSlice.actions
export const selectSocialLinks = (state: RootState) => state.socialLinks.value.social

export default socialSlice.reducer;