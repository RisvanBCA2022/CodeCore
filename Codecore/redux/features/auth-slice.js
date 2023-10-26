import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { deleteCookie } from 'cookies-next'
import { getQuestions, postAnswer } from '../axios'

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
        answer: []
    },
    reducers: {

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
            .addCase(postAnswer.fulfilled, (state) => {
                state.answerStatus = 'succeeded',
                    state.answer = action.payload
            })
            .addCase(postAnswer.rejected, (state) => {
                state.answerStatus = "failed"
            })
    }
})



export const { logIn, logOut } = auth.actions
export default auth.reducer;
export const questionslice = slice.reducer
