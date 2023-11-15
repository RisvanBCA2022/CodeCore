import { createSlice } from "@reduxjs/toolkit";
import { getUsersInAdmin } from "../axios";

const adminSlice = createSlice({
    name:'admin',
    initialState:{
        status:'idle',
        error:null,
        users:[]
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getUsersInAdmin.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(getUsersInAdmin.fulfilled,(state,action)=>{
            state.status='success'
            state.users=action.payload
        })
        .addCase(getUsersInAdmin.rejected,(state,action)=>{
            state.status = 'failed',
            state.error = action.error.message
        })
    }
})

export default adminSlice.reducer