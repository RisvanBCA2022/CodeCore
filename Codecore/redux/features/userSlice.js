import { createSlice } from "@reduxjs/toolkit";
import { blockUser, fetchAllUser, fetchuserbyid, vote } from "../axios";


const userSlice = createSlice({
    name:'Users',
    initialState:{
        status:'idle',
        usersdata:[],
        currentuserdata:[],
        currentuserstatus:'idle',
        userblockstatus:'idle'
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
        .addCase(fetchuserbyid.pending,(state)=>{
            state.currentuserstatus="loading"
        })
        .addCase(fetchuserbyid.fulfilled,(state,action)=>{
            state.currentuserstatus-"successfull"
            state.currentuserdata=action.payload.data
        })
        .addCase(fetchuserbyid.rejected,(state,action)=>{
            state.currentuserstatus="failed"
            state.currentuserdata=action.error.message
        })
        .addCase(blockUser.pending,(state)=>{
            state.userblockstatus='loading'
        })
        .addCase(blockUser.fulfilled,(state,action)=>{
            state.userblockstatus='success'
            console.log(action.payload);
        })
    }
})

export default userSlice.reducer