import { getCookie } from "cookies-next";
import { useDispatch } from "react-redux";

const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");


export const getQuestions = createAsyncThunk(
    'get/getQuestions',
    async ()=>{
        const res = await axios.get("http://127.0.0.1:4001/questions/fetchquestion")
        return res.data
    }
)

export const postAnswer = createAsyncThunk(
    'post/postAnswers',
    async (answerData) =>{
        const {id,noOfAnswers,answerBody,userId,userAnswered}=answerData
        
        console.log({id,answerBody,userId,userAnswered});
        const response= await axios.patch(`http://127.0.0.1:4001/answer/postanswer/${id}`,{id,noOfAnswers,answerBody,userId,userAnswered}
        )
        return response
    }
)

export const getUser = createAsyncThunk(
    'get/userdetails',
    async ()=>{
        const jwt=getCookie('jwt')
        const resp= await axios.get('http://127.0.0.1:4001/users/fetchuser',{
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
        })
        return resp
    }
)

