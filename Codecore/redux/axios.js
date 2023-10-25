const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");


export const getQuestions = createAsyncThunk(
    'get/getQuestions',
    async ()=>{
        const res = await axios.get("http://127.0.0.1:4001/questions/fetchquestion")
        // console.log(res);
        return res.data
    }
)
