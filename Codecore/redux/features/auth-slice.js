import {createSlice,PayloadAction,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { deleteCookie } from 'cookies-next'
import { getQuestions } from '../axios'

const initialState = {
    value:{
        isAuth:false,
        userdetails:{}
    },
}

// const getUser=createAsyncThunk('userdetails',async (req,res)=>{
    
// })


export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut:()=>{
            deleteCookie('jwt')
            return {
                value:{
                    isAuth:false,
                    userdetails:{}
                },
            }
            
        },
        logIn:(state,action)=>{
             if(action.payload.auth==true){
                return {
                    value:{
                        isAuth:true,
                        status:action.payload,
                        currentuser:action.payload.data,
    
                    }
                    
                }

            }

                return initialState
            
            
        }
    }
})

const slice = createSlice({
    name:"fetch",
    initialState:{
        status:'standby',
        allQuestions:[],
    },
    reducers:{

    },
    extraReducers: (builder) =>{
        builder
        .addCase(getQuestions.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(getQuestions.fulfilled,(state,action)=>{
            state.status = 'succeeded',
            state.allQuestions = action.payload
        })
        .addCase(getQuestions.rejected,(state)=>{
            state.status='failed'
        })
    }
})



export const {logIn,logOut} = auth.actions
export default auth.reducer;
export const questionslice = slice.reducer
