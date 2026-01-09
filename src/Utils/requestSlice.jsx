import { createSlice } from "@reduxjs/toolkit";


const requestslice=createSlice({
    name:'requests',
    initialState:{
        req:null,
    },
    reducers:{
        addRequest:(state,action)=>{
            state.req=action.payload
        },
        removeRequest:(state,action)=>{
            state.req=state.req.filter((e)=> e._id!=action.payload);

        }
    }
})
export const{addRequest,removeRequest}=requestslice.actions;
export default requestslice.reducer;