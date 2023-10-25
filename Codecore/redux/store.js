import {configureStore} from '@reduxjs/toolkit'
import authReducer, { questionslice } from "./features/auth-slice"
import question from './features/question'



export const store = configureStore({
    reducer:{
        authReducer:authReducer,
        questionslice:questionslice

        // question


    }


    
})