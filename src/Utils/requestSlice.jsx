import { createSlice } from "@reduxjs/toolkit";


const requestslice=createSlice({
    name:'requests',
    initialState:{
        req:null,
    },
    reducers:{
        addRequest:(state,action)=>{
            state.req=action.payload
        }
    }
})
export const{addRequest}=requestslice.actions;
export default requestslice.reducer;