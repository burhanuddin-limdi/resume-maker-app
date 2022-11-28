import {  createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState,  } from '../../../../shared/store';

const initialState = {
    value: {
       projects:[{
        name:'Limflix - Netflix Clone',
        about:'I have made this website using angular framework and TMDB api. It is hosted at limflix.netlify.app'
       },{
        name:'Limflix - Netflix Clone',
        about:'I have made this website using angular framework and TMDB api. It is hosted at limflix.netlify.app'
       }]
    }
}

export const projectssSlice = createSlice ({
    name: 'resume',
    initialState,
    reducers: {
     setProject : (state , action :PayloadAction<any>)=>{
         state.value.projects = [...state.value.projects, action.payload]
      }
    }
});
export const {setProject} = projectssSlice.actions
export const selectProject = (state: RootState) => state.projects.value.projects

export default projectssSlice.reducer;