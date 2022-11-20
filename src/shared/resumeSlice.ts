import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';
// import { fetchCount } from './counterAPI';

const initialState = {
    value: {
        name:''
    }
}

export const resumeSlice = createSlice ({
    name: 'resume',
    initialState,
    reducers: {
     setName : (state , action :PayloadAction<string>)=>{
        state.value.name = action.payload;
     }
    }
});
export const {setName} = resumeSlice.actions
export const selectName = (state: RootState) => state.counter.value.name;

export default resumeSlice.reducer;