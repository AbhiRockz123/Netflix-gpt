import { createSlice } from '@reduxjs/toolkit';

const GptSlice = createSlice({
    name: 'GPT',
    initialState: {
        GptState:false,
        language: 'en',
    },
    reducers: {
      ChangeGptSearch:(state)=>{
        state.GptState=!state.GptState;
      },
      ChangeLang:(state,action)=>{
        state.language=action.payload;
      },
    }, 
});

export default GptSlice.reducer;
export const { ChangeGptSearch ,ChangeLang } = GptSlice.actions;