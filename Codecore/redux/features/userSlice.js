import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUser, vote } from "../axios";


const userSlice = createSlice({
    name:'Users',
    initialState:{
        status:'idle',
        usersdata:[]
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllUser.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchAllUser.fulfilled,(state,action)=>{
            state.status='success'
            state.usersdata=action.payload.data.data
        })
        .addCase(fetchAllUser.rejected,(state,action)=>{
            state.status = 'failed',
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer