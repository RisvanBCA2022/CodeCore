import {createSlice,PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    value:{
        isAuth:false,
        userdetails:{}
    },
}


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
                    userdetails:{action}
                }
                
            }
        }
    }
})

// export const user = createSlice({
    
// })



export const {logIn,logOut} = auth.actions
export default auth.reducer;