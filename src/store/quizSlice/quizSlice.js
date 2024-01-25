import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


const initialState = {
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
     stats:{
        quizCount:0,
        questionCount:0,
        Totalimpression:0
        
     }
}


const quizSlice = createSlice({
    name:"quiz",
    initialState,
    reducers:{
        //create new quiz
        addQuiz:(state,action)=>{
            console.log(action.payload);
            state.quizArr?.push(action.payload);
            console.log(state.quizArr);
        },

        //update quiz
        updateQuiz:(state,action)=>{
            const {_id,name,quizType,impression,questions} = action.payload;
           const existingQuiz = state.quizArr.find((quiz)=>quiz._id===_id);
           if(!existingQuiz){
               return "quiz not found";
           }
            
            existingQuiz.name=name;
            existingQuiz.quizType=quizType;
            existingQuiz.impression=impression;
            existingQuiz.questions=questions;
            
            state.quizArr=state.quizArr.map((quiz)=>{
                if(quiz._id===existingQuiz._id){
                    quiz=existingQuiz;
                }
                return quiz;
            })


        },

        //delete quiz
        deleteQuiz: (state,action)=>{
            const {_id} = action.payload;
            const existingQuiz = state.quizArr.find((quiz)=>quiz._id===_id);
            if(!existingQuiz){
                return "quiz not found";
            }
            state.quizArr=state.quizArr.filter((quiz)=>quiz._id!==_id);
        },
        

        //get single quiz
        getQuiz:(state,action) =>{
            const {_id} = action.payload;
            const existingQuiz = state.quizArr.find((quiz)=>quiz._id===_id);
            if(!existingQuiz){
                return "quiz not found";
            }
            return existingQuiz;
           
        },

        //get all quiz
        getAllQuizs:(state)=>{
            return state.quizArr;
        },

        getStats:(state)=>{
            state.stats.quizCount=state.quizArr.length;
            state.stats.questionCount= state.quizArr.reduce((acc, quiz) => acc + quiz.questions.length, 0);
            state.stats.Totalimpression= state.quizArr.reduce((acc, quiz) => acc + quiz.impressions, 0);
            return state.stats;
        }





    }
})


export const {addQuiz,updateQuiz,deleteQuiz,getQuiz,getAllQuizs} = quizSlice.actions;
export default quizSlice.reducer;