import { createSlice } from '@reduxjs/toolkit';

export const appSlice= createSlice({
    name:'app',
    initialState: 0,
    reducers: {
        incrementByAmount: (state,action)=>{
            state.value=action.payload;
        }
    },

}
);
export const {incrementByAmount}= appSlice.actions;
export const  selectapp= state=>state.app.value;
export default appSlice.reducer
