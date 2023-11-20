import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { deleteCookie } from 'cookies-next'
import { deleteanswer, deletequestion, getQuestions, getUser, getanswers, postAnswer } from '../axios'


const initialState = {
    value: {
        isAuth: false,
        userdetails: {}
    },
}


export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            localStorage.removeItem("user");
            deleteCookie('jwt')
            return {
                value: {
                    isAuth: false,
                    currentuser: null
                },
            }

        },
        logIn: (state, action) => {
            if (action.payload.auth == true) {

                return {
                    value: {
                        isAuth: true,
                        status: action.payload,
                        currentuser: action.payload.data,

                    }

                }

            }
            return initialState
        }
    }
})

const slice = createSlice({
    name: "fetch",
    initialState: {
        status: 'standby',
        answerStatus: 'standby',
        allQuestions: [],
        answer: [],
        userstatus:'standby',
        userdetails:[],
        deleteStatus:'standby',
        answerdeletestatus:'standby',
        answerfetchstatus:'stanby',
        allAnswers:[]

        
    },
    reducers: {
        logout:(state,action)=>{
          localStorage.removeItem("user")
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(getQuestions.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getQuestions.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.allQuestions = action.payload
            })
            .addCase(getQuestions.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(postAnswer.pending, (state) => {
                state.answerStatus = "loading"
            })
            .addCase(postAnswer.fulfilled, (state,action) => {
                state.answerStatus = 'succeeded'
            })
            .addCase(postAnswer.rejected, (state) => {
                state.answerStatus = "failed"
            })
            .addCase(getUser.pending, (state)=>{
                state.userstatus = 'loading'
            })
            .addCase(getUser.fulfilled, (state,action)=>{
                state.userstatus = 'succeeded',
                state.userdetails = action.payload.data
            })
            .addCase(getUser.rejected, (state)=>{
                state.userstatus = 'failed'
            })
            .addCase(deletequestion.pending, (state)=>{
                state.deleteStatus = 'loading'
            })
            .addCase(deletequestion.fulfilled, (state,action)=>{
                state.deleteStatus = 'succeeded'
                // console.log(action.payload.data);
                // state.userdetails = action.payload.data
            })
            .addCase(deletequestion.rejected, (state)=>{
                state.deleteStatus = 'failed'
            })
            .addCase(deleteanswer.pending,(state)=>{
                state.answerdeletestatus="loading"
            })
            .addCase(deleteanswer.fulfilled, (state,action)=>{
                state.answerdeletestatus = 'succeeded'
                // console.log(action.payload);
            })
            .addCase(deleteanswer.rejected, (state)=>{
                state.answerdeletestatus = 'failed'
            })
            .addCase(getanswers.pending,(state)=>{
                state.answerfetchstatus="loading"    
            })
            .addCase(getanswers.fulfilled, (state,action)=>{
                state.answerfetchstatus="successfull"    
                state.allAnswers=action.payload.data  
            })
            .addCase(getanswers.rejected, (state)=>{
                state.answerfetchstatus='failed'
            })
            
    }
})



export const { logIn, logOut } = auth.actions
export default auth.reducer;
export const questionslice = slice.reducer
