import { createSlice } from "@reduxjs/toolkit";
import { vote } from "../axios";


const voteSlice = createSlice({
    name:'vote',
    initialState:{
        status:'idle',
        error:null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(vote.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(vote.fulfilled,(state,action)=>{
            state.status='success'
            // console.log(action.payload);
        })
        .addCase(vote.rejected,(state,action)=>{
            state.status = 'failed',
            state.error = action.error.message
        })
    }
})

export default voteSlice.reducer