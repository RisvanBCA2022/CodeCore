import {createSlice,PayloadAction,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

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
            return initialState
        },
        logIn:(state,action)=>{
            return {
                value:{
                    isAuth:true,
                    status:action.payload,
                    currentuser:action.payload.data,

                }
                
            }
        }
    }
})




export const {logIn,logOut} = auth.actions
export default auth.reducer;
