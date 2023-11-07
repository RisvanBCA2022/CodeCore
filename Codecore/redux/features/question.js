// import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
// import axios from 'axios'

// export const fetchUser = createAsyncThunk('user/fetchUser',async ()=>{
//     await axios.post('localhost:4001/questions/ask')

// })



// const userSlice = createSlice({
//     name:'question',
//     initialState:{
//         data:null,
//         status:"idle",
//         error:null
//     },
//     reducers:{},
//     extraReducers: (builder) =>{
//         builder
//         .addCase(fetchUser.pending,(state)=>{
//             state.status = "loading";
//         })
//         .addCase(fetchUser.fulfilled,(state,action)=>{
//             state.status = "succeeded";
//             state.data=action.payload;
//         })
//         .addCase(fetchUser.rejected,(state,action)=>{
//             state.status = "failed";
//             state.error = action.error.message;
//             console.log("error");
//         })

//     }
// })

// export default userSlice.reducer