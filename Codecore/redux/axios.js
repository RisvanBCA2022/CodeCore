import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import axiosInstance from "./axiosInstance";

export const getQuestions = createAsyncThunk(
    'get/getQuestions',
    async ()=>{
        const res = await axiosInstance.get("questions/fetchquestion")
        // console.log(res.data);
        return res.data
    }
)

export const postAnswer = createAsyncThunk(
    'post/postAnswers',
    async (answerData) =>{
        const {questionId,id,noOfAnswers,answerBody,userId,userAnswered}=answerData
        const jwt=getCookie('jwt')
        
        // console.log({id,answerBody,userId,userAnswered});
        const response= await axiosInstance.post(`answer/postanswer/${id}`,{id,noOfAnswers,answerBody,userId,userAnswered},
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
        const response= await axiosInstance.get(`answer/fetchanswers`
        )
        // console.log(response);
        return response
    }
)


export const getUser = createAsyncThunk(
    'get/userdetails',
    async ()=>{
        const jwt=getCookie('jwt')
        const resp= await axiosInstance.get('users/fetchuser',{
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
        })
        
        return resp.data
    }
)

export const deletequestion = createAsyncThunk(
    'delete/question',
    async (data)=>{
        const {id,userId}=data
        // console.log(userId);
        const jwt=getCookie('jwt')
        const resp = await axiosInstance.patch(`questions/delete/${id}`,{
            userId
        },{
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
        const resp = await axiosInstance.patch(`answer/deleteanswer/${questionId}`,
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
        return resp

    }
)

export const vote = createAsyncThunk(
    'patch/vote',
    async ({questionId,userId,voteType})=>{
        try {
            const response = await axiosInstance.patch(`questions/${questionId}/vote`,
            {
                userId:userId,
                voteType:voteType
            })
            return response.data
            

        } catch (error) {
            throw Error(error)
        }
    }
)

export const fetchAllUser = createAsyncThunk(
    'get/allusers',
    async ()=>{
        try {
            const response = await axiosInstance.get(`users/fetchallusers`)
            return response
        } catch (error) {
            throw Error(error)
        }
    }
)

export const fetchuserbyid = createAsyncThunk(
    'get/userById',
    async(id)=>{
        try {
            const response = await axiosInstance.get(`users/fetchuser/${id}`)
        return response

        } catch (error) {
            throw Error(error)
        }
        
    }
)

export const blockUser = createAsyncThunk(
    'users/blockUser',
    async (data) => {
      try {
        const {type,id}=data
        const response = await axiosInstance.put(`admin/${id}/block`,{
            type:type
        });
        return response.data;
      } catch (error) {
        throw Error('Error blocking user');
      }
    }
  );

  export const getUsersInAdmin = createAsyncThunk(
    'get/allusersforAdmin',
    async ()=>{
        try {
            const response = await axiosInstance.get(`admin/users`)
            return response
        } catch (error) {
            throw Error(error)
        }
    }
)

export const getQuestionById = createAsyncThunk(
    'get/getQuestionById',
    async (id)=>{
        const jwt=getCookie('jwt')
        const response= await axiosInstance.get(`questions/${id}/questionbyid`
        )
        
        return response
    }
)

export const fetchByTag=createAsyncThunk(
    'get/Tags',
    async (tag)=>{
        const response=await axiosInstance.get(`questions/questionbytag/${tag}`)   
        return response
    }
    
) 

export const questionByUser=createAsyncThunk(
    'get/userQuestions',
    async (id)=>{
        // console.log(id);
        const response = await axiosInstance.post(`users/userquestions`,{
            userId:id
        })
        return response
    }
    
) 