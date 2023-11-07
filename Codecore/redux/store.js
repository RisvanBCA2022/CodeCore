import {configureStore} from '@reduxjs/toolkit'
import authReducer, { questionslice } from "./features/auth-slice"
import voteSlice from './features/voteSlice'
import userSlice from './features/userSlice'



export const store = configureStore({
    reducer:{
        authReducer:authReducer,
        questionslice:questionslice,
        voteSlice:voteSlice,
        userslice:userSlice

        // question


    }


    
})