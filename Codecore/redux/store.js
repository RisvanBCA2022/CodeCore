import {configureStore} from '@reduxjs/toolkit'
import authReducer, { questionslice } from "./features/auth-slice"
import voteSlice from './features/voteSlice'



export const store = configureStore({
    reducer:{
        authReducer:authReducer,
        questionslice:questionslice,
        voteSlice:voteSlice

        // question


    }


    
})