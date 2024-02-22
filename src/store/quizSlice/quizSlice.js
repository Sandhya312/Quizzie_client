import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://quizzie-server.cyclic.app";

//get all quiz
export const getQuizs = createAsyncThunk(
    "getQuizs",
    async(data,{rejectWithValue})=>{
      
        try{
         
            const response = await axios.get(`${baseUrl}/auth/user/${data.userId}/myQuizs`,
               { headers: { authorization: `Bearer ${data.token}` } }
            );
            const result = await response.data;
            if(response.status===200){
                return result;
            }
        }catch(err){
            return rejectWithValue(err.response.data);
        }
    }
)


//single quiz
export const getQuiz = createAsyncThunk(
    "getQuiz", async(data,{rejectWithValue})=>{
        try{
            const response = await axios.get(`${baseUrl}/api/quiz/${data.quizId}`,
            );
            const result = await response.data;
            if(response.status===200){
                return result;
            }
        }catch(err){
            return rejectWithValue(err.response.data);
        }
    }
)


//single quiz analytics 
export const getQuizAnalytics = createAsyncThunk(
    "getQuizAnalytics", async(data,{rejectWithValue})=>{
        try{
            const response = await axios.get(`${baseUrl}/api/quiz/${data.id}/analytics`,
            { headers: { authorization: `Bearer ${data.token}` } }
            );
            const result = await response.data;
            if(response.status===200){
                return result;
            }
        }catch(err){
            return rejectWithValue(err.response.data);
        }
    }
)


//create quiz
export const createQuiz = createAsyncThunk(
    "createQuiz", async(data,{rejectWithValue})=>{
        try{
            const response = await axios.post(`${baseUrl}/api/quiz/createquiz`,data.quiz,
            { headers: { authorization: `Bearer ${data.token}` } }
            );
            const result = await response.data;
            if(response.status===200){
                return result;
            }
        }catch(err){
            return rejectWithValue(err.response.data);
        }
    }
)


//set question analysis
export const setQuizImpression = createAsyncThunk(
    "setQuizImpression", async(data,{rejectWithValue})=>{
        try{
            const response = await axios.post(`${baseUrl}/api/quiz/${data.id}/analysis`,data);
            const result = await response.data;
            if(response.status===200){
                return result;
            }
        }catch(err){
            return rejectWithValue(err.response.data);
        }
    }
)



//set question analysis
export const setQuestionAnalysiss = createAsyncThunk(
    "setQuestionAnalysiss", async(data,{rejectWithValue})=>{
        try{
            const response = await axios.post(`${baseUrl}/api/quiz/${data.id}/question/analysis`,data);
            const result = await response.data;
            if(response.status===200){
                return result;
            }
        }catch(err){
            return rejectWithValue(err.response.data);
        }
    }
)




//delete quiz
export const deleteQuiz = createAsyncThunk(
    "deleteQuiz", async(data,{rejectWithValue})=>{
 
        try{
         
            const response = await axios.delete(`${baseUrl}/api/quiz/${data.quizId}`,
            { headers: { authorization: `Bearer ${data.token}` } }
            );
            const result = await response.data;

            if(response.status===200){
                return {result,quizId:data.quizId};
            }

        }
        catch(err){

            return rejectWithValue(err.response.data);
        }
    }
)


const initialState = {
     loading:false,
     token:"",
     currentUser:"",
     error:"",
     quizs:[],
     stats:{},
     singleQuiz:{},
     score:0,
     analytics:{},
     quizType:0, //0 for QnA type and 1 from Poll type
     quiz_impression:0
}


const quizSlice = createSlice({
    name:"quiz",
    initialState,
    extraReducers:(builder)=>{
            builder

            .addCase(getQuizs.pending,(state)=>{
                state.loading = true;
            })

            .addCase(getQuizs.fulfilled,(state,action)=>{
                state.stats = action.payload.stats;
                 state.quizs = action.payload.quizs;

                 state.loading=false;
            
            })

            .addCase(getQuizs.rejected,(state,action)=>{
                state.error=action.payload;
                state.loading=false;

            })

            .addCase(deleteQuiz.pending,(state)=>{
                state.loading=true;
            })

            .addCase(deleteQuiz.fulfilled,(state,action)=>{
                const quizId =action.payload.quizId;
                state.quizs = state.quizs.filter((quiz)=>quiz._id!==quizId);
                state.loading=false;
            })

            .addCase(deleteQuiz.rejected,(state,action)=>{
                state.error=action.payload;
                state.loading=false;
            })

            .addCase(getQuiz.pending,(state)=>{
                state.loading=true;
            })

            .addCase(getQuiz.fulfilled,(state,action)=>{
                state.singleQuiz = action.payload;
                state.quiz_impression=action.payload.impressions;
                state.loading=false;
            })

            .addCase(getQuiz.rejected,(state,action)=>{
                state.error=action.payload;
                state.loading=false;
            })
            .addCase(setQuestionAnalysiss.pending,(state)=>{
                state.loading=true;
            })

            .addCase(setQuestionAnalysiss.fulfilled,(state)=>{
                state.loading=false;
            })

            .addCase(setQuestionAnalysiss.rejected,(state,action)=>{
                state.error=action.payload;
                state.loading=false;
            })

            .addCase(getQuizAnalytics.pending,(state)=>{
                state.loading=true;
            })

            .addCase(getQuizAnalytics.fulfilled,(state,action)=>{
                state.analytics = action.payload.analytics;
                state.quizType = action.payload.quizType;
                state.loading=false;
            })

            .addCase(getQuizAnalytics.rejected,(state,action)=>{
                state.error=action.payload;
                state.loading=false;
            })

            .addCase(createQuiz.pending,(state)=>{
                state.loading=true;
            })

            .addCase(createQuiz.fulfilled,(state)=>{
                state.loading=false;
            })

            .addCase(createQuiz.rejected,(state,action)=>{
                state.error=action.payload;
                state.loading=false;
            })
            .addCase(setQuizImpression.pending,(state)=>{
                state.loading=true;
            })

            .addCase(setQuizImpression.fulfilled,(state,action)=>{
                state.loading=false;
                state.quiz_impression = action.payload;

            })

            .addCase(setQuizImpression.rejected,(state,action)=>{
                state.error=action.payload;
                state.loading=false;
            })
    },
    reducers:{
        
        //set current user
        setCurrentUser:(state,action)=>{
            state.currentUser = action.payload;
        },

        //set token
        setToken:(state,action)=>{
            state.token = action.payload;
        },
        setScore:(state,action)=>{
            state.score = action.payload;
        }

       
    }
})


export const { setToken,setCurrentUser,setScore} = quizSlice.actions;
export default quizSlice.reducer;