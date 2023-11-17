import { createSlice } from "@reduxjs/toolkit";
import { blockUser, fetchAllUser, fetchByTag, fetchuserbyid, getQuestionById, questionByUser, vote } from "../axios";


const userSlice = createSlice({
    name:'Users',
    initialState:{
        status:'idle',
        usersdata:[],
        currentuserdata:[],
        currentuserstatus:'idle',
        userblockstatus:'idle',
        currentQuestion:[],
        currentQuestionStatus:"idle",
        questionByTag:[],
        tagstatus:'idle',
        // questionsByuser:[],
        // questionsByuserStatus:'idle'
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllUser.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchAllUser.fulfilled,(state,action)=>{
            state.status='success'
            state.usersdata=action.payload.data.data
            // console.log(action.payload.data);
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
        })
        .addCase(getQuestionById.pending,(state,action)=>{
            state.currentQuestionStatus='loading'
        })
        .addCase(getQuestionById.fulfilled,(state,action)=>{
            state.currentQuestionStatus='success'
            state.currentQuestion=action.payload.data
        })
        .addCase(getQuestionById.rejected,(state,action)=>{
            state.currentQuestionStatus='failure'
        })
        .addCase(fetchByTag.pending,(state,action)=>{
            state.tagstatus='loading'
        })
        .addCase(fetchByTag.fulfilled,(state,action)=>{
            state.tagstatus='success'
            state.questionByTag=action.payload.data
        })
        .addCase(fetchByTag.rejected,(state)=>{
            state.tagstatus='failure'
        })
        .addCase(questionByUser.pending,(state,action)=>{
            state.questionsByuserStatus='loading'
        })
        .addCase(questionByUser.fulfilled,(state,action)=>{
            state.questionsByuser=action.payload.data

        })
        .addCase(questionByUser.rejected,(state)=>{
            state.questionsByuserStatus='failure'
        })
    }
})

export default userSlice.reducer