import { getCookie } from "cookies-next";
import { useDispatch } from "react-redux";

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

export const postAnswer = createAsyncThunk(
    'post/postAnswers',
    async (answerData) =>{
        const {questionId,id,noOfAnswers,answerBody,userId,userAnswered}=answerData
        const jwt=getCookie('jwt')
        
        // console.log({id,answerBody,userId,userAnswered});
        const response= await axios.post(`http://127.0.0.1:4001/answer/postanswer/${id}`,{id,noOfAnswers,answerBody,userId,userAnswered},
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
              }
        }
        )
        return response
    }
)

export const getanswers = createAsyncThunk(
    'get/getanswers',
    async ()=>{
        const jwt=getCookie('jwt')
        const response= await axios.get(`http://127.0.0.1:4001/answer/fetchanswers`,
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
              }
        }
        )
        // console.log(response);
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
        return resp.data
    }
)

export const deletequestion = createAsyncThunk(
    'delete/question',
    async (id)=>{
        const jwt=getCookie('jwt')
        
        const resp = await axios.delete(`http://127.0.0.1:4001/questions/delete/${id}`,{
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
        })
        return resp
    }
)

export const deleteanswer = createAsyncThunk(
    'delete/answer',
    async (data)=>{
        const {userId,Id,questionId}=data
        const jwt=getCookie('jwt')
        console.log(userId,Id,questionId);
        const resp = await axios.patch(`http://127.0.0.1:4001/answer/deleteanswer/${questionId}`,
        {
            userId:userId,
            Id:Id,
            questionId:questionId
        },
        {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
        })
        console.log(resp)
        return resp

    }
)