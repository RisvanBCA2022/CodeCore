import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./features/auth-slice"
import question from './features/question'



export const store = configureStore({
    reducer:{
        authReducer,
        // question


    }


    
})