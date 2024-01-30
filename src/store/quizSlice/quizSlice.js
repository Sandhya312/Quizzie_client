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
            console.log(err);
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
                console.log(result);
                return result;
            }
        }catch(err){
            console.log(err);
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
                console.log(result);
                return result;
            }
        }catch(err){
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
)

//set question analysis
export const setQuestionAnalysis = createAsyncThunk(
    "setQuestionAnalysis", async(data,{rejectWithValue})=>{
        try{
            const response = await axios.post(`${baseUrl}api/quiz/question/${data.id}/analysis`,data.analysis);
            const result = await response.data;
            if(response.status===200){
                console.log(result);
                return result;
            }
        }catch(err){
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
)


//delete quiz
export const deleteQuiz = createAsyncThunk(
    "deleteQuiz", async(data,{rejectWithValue})=>{
        // const currentUser = quizSlice.getInitialState().currentUser;
        // console.log("Current quizArr:", currentUser);
        const tokeeen = quizSlice.getInitialState().token;
        console.log("Current quizArr:", tokeeen);
        try{
         
            const response = await axios.delete(`${baseUrl}/api/quiz/${data.quizId}`,
            { headers: { authorization: `Bearer ${data.token}` } }
            );
            const result = await response.data;

            console.log(result);
            if(response.status===200){
                return {result,quizId:data.quizId};
            }

        }
        catch(err){

            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
)


const initialState = {
     loading:false,
     token:"",
     currentUser:"",
     error:"",
     quizArr:[
        {
            "name":"react quiz",
             "quizType":0,
             "impressions":0,
             "questions":[
                {
                    "title":"what is redux in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["state management"],
                            "correctOpt":true
                        },
                        {
                            "value":["alternative of context api"],
                            "correctOpt":false
                        },
                        {
                            "value":["not much important"],
                            "correctOpt":false
                        },
                        {
                            "value":["hook"],
                            "correctOpt":false
                        }
                     ]
                     
                },
                {
                    "title":"what is contextapi in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["state management"],
                            "correctOpt":true
                        },
                        {
                            "value":["alternative of use reducer"],
                            "correctOpt":false
                        },
                        {
                            "value":["not much important"],
                            "correctOpt":false
                        },
                        {
                            "value":["this is not a hook"],
                            "correctOpt":false
                        }
                     ]
                     
                },
                {
                    "title":"what is hooks in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["state management","image1.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["alternative of use reducer","image2.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["not much important","image3.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["this is a hook","image4.png"],
                            "correctOpt":true
                        }
                     ]
                     
                },
                {
                    "title":"Choose the correct image in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["image1.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["image2.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["image3.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["image4.png"],
                            "correctOpt":true
                        }
                     ]
                     
                }
             ]
        
        },
        {
            "name":"mongoDb quiz",
             "quizType":0,
             "impressions":0,
             "questions":[
                {
                    "title":"what is redux in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["state management"],
                            "correctOpt":true
                        },
                        {
                            "value":["alternative of context api"],
                            "correctOpt":false
                        },
                        {
                            "value":["not much important"],
                            "correctOpt":false
                        },
                        {
                            "value":["hook"],
                            "correctOpt":false
                        }
                     ]
                     
                }
             ]
        
        },
        {
            "name":"react quiz",
             "quizType":0,
             "impressions":0,
             "questions":[
                {
                    "title":"what is redux in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["state management"],
                            "correctOpt":true
                        },
                        {
                            "value":["alternative of context api"],
                            "correctOpt":false
                        },
                        {
                            "value":["not much important"],
                            "correctOpt":false
                        },
                        {
                            "value":["hook"],
                            "correctOpt":false
                        }
                     ]
                     
                },
                {
                    "title":"what is contextapi in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["state management"],
                            "correctOpt":true
                        },
                        {
                            "value":["alternative of use reducer"],
                            "correctOpt":false
                        },
                        {
                            "value":["not much important"],
                            "correctOpt":false
                        },
                        {
                            "value":["this is not a hook"],
                            "correctOpt":false
                        }
                     ]
                     
                },
                {
                    "title":"what is hooks in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["state management","image1.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["alternative of use reducer","image2.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["not much important","image3.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["this is a hook","image4.png"],
                            "correctOpt":true
                        }
                     ]
                     
                },
                {
                    "title":"Choose the correct image in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["image1.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["image2.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["image3.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["image4.png"],
                            "correctOpt":true
                        }
                     ]
                     
                }
             ]
        
        },
        {
            "name":"express quiz",
             "quizType":1,
             "impressions":0,
             "questions":[
                {
                    "title":"what is redux in express?",
                    "type":1,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["state management"],
                            "correctOpt":true
                        },
                        {
                            "value":["alternative of context api"],
                            "correctOpt":false
                        },
                        {
                            "value":["not much important"],
                            "correctOpt":false
                        },
                        {
                            "value":["hook"],
                            "correctOpt":false
                        }
                     ]
                     
                },
                {
                    "title":"what is contextapi in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["state management"],
                            "correctOpt":true
                        },
                        {
                            "value":["alternative of use reducer"],
                            "correctOpt":false
                        },
                        {
                            "value":["not much important"],
                            "correctOpt":false
                        },
                        {
                            "value":["this is not a hook"],
                            "correctOpt":false
                        }
                     ]
                     
                },
                {
                    "title":"what is hooks in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["state management","image1.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["alternative of use reducer","image2.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["not much important","image3.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["this is a hook","image4.png"],
                            "correctOpt":true
                        }
                     ]
                     
                },
                {
                    "title":"Choose the correct image in react?",
                    "type":0,
                     "analysis":[
                        {"peopple attepted":87},
                        {"people attempted correct":4},
                        {"people attemped incorrect":32}
                     ],
                    "options":[
                        {
                            "value":["image1.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["image2.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["image3.png"],
                            "correctOpt":false
                        },
                        {
                            "value":["image4.png"],
                            "correctOpt":true
                        }
                     ]
                     
                }
             ]
        
        },
     ],
     quizs:[],
     stats:{},
     singleQuiz:{},
     score:0,
     analytics:{},
     quizType:0, //0 for QnA type and 1 from Poll type
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
                console.log(action.payload);
                state.stats = action.payload.stats;
                 state.quizs = action.payload.quizs;

                 state.loading=false;
            
            })

            .addCase(getQuizs.rejected,(state,action)=>{
                state.error=action.payload;
                console.log("505",state.error);
                state.loading=false;

            })

            .addCase(deleteQuiz.pending,(state)=>{
                state.loading=true;
            })

            .addCase(deleteQuiz.fulfilled,(state,action)=>{
                console.log("495",action.payload);
                const quizId =action.payload.quizId;
                state.quizs = state.quizs.filter((quiz)=>quiz._id!==quizId);
                console.log(state.quizs);
                state.loading=false;
            })

            .addCase(deleteQuiz.rejected,(state,action)=>{
                state.error=action.payload;
                console.log("523",state.error);
                state.loading=false;
            })

            .addCase(getQuiz.pending,(state)=>{
                state.loading=true;
            })

            .addCase(getQuiz.fulfilled,(state,action)=>{
                console.log(action.payload);
                state.singleQuiz = action.payload;
                state.loading=false;
            })

            .addCase(getQuiz.rejected,(state,action)=>{
                state.error=action.payload;
                console.log("537",state.error);
                state.loading=false;
            })
            .addCase(setQuestionAnalysis.pending,(state)=>{
                state.loading=true;
            })

            .addCase(setQuestionAnalysis.fulfilled,(state,action)=>{
                console.log(action.payload);
                state.loading=false;
            })

            .addCase(setQuestionAnalysis.rejected,(state,action)=>{
                state.error=action.payload;
                console.log("574",state.error);
                state.loading=false;
            })

            .addCase(getQuizAnalytics.pending,(state)=>{
                state.loading=true;
            })

            .addCase(getQuizAnalytics.fulfilled,(state,action)=>{
                console.log(action.payload);
                state.analytics = action.payload.analytics;
                state.quizType = action.payload.quizType;
                state.loading=false;
            })

            .addCase(getQuizAnalytics.rejected,(state,action)=>{
                state.error=action.payload;
                console.log("609",state.error);
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
            console.log("score",state.score);
        }

       
    }
})


export const { setToken,setCurrentUser,setScore} = quizSlice.actions;
export default quizSlice.reducer;