
import { createSlice } from '@reduxjs/toolkit';


const formSlice = createSlice({
    name: 'form',
    initialState: {
        steps: 2,
        currentStep: 0,
        quizType: 0,
        timer: 0,
        step1: {
            quizName: '',
            quizType: 0
        },
        step2: {
            questions: [
               
            ]
        }
    },
    reducers: {
        nextStep(state) {
            if (state.currentStep > state.steps) {
                state.currentStep = 0;
            }
            else {
                state.currentStep += 1;
            }
            console.log(state.currentStep);
        },
        prevStep(state) {
            if (state.currentStep <= 0) {
                state.currentStep = 0;
            }
            else {
                state.currentStep -= 1;
            }

        },
        setQyizType(state, action) {
            state.quizType = action.payload;
            console.log(action.payload, 'payload', state.quizType);

        },
        resetStep(state) {
            state.currentStep = 0;
        },
        setStep1(state, action) {
            state.step1 = action.payload;
            console.log(action.payload, 'payloadstep1', state.step1);
        },
        setquestionTitle(state, action) {
            if (state.step2.questions.length !== 0) {
                const lastIdx = state.step2.questions.length - 1;
                state.step2.questions[lastIdx].title = action.payload;
            }
            state.step2.questions.push( {
                "title": action.payload,
                "analysis": [
                    {},
                    {},
                    {}
                ],
                "options": [
                    {
                        "value": [],
                        "correctOpt": false
                    },
                    {
                        "value": [],
                        "correctOpt": false
                    },
                    {
                        "value": [],
                        "correctOpt": false
                    },
                    {
                        "value": [],
                        "correctOpt": false
                    }
                ]

            })

        },
        setOptions(state, action) {
            const lastIdx = state.step2.questions.length - 1;
           if(state.step2.questions[lastIdx].options.length !== 0){
            const Idx = state.step2.questions[lastIdx].options.length - 1;
            if(state.step2.questions[lastIdx].options[Idx].value.length <2){
                state.step2.questions[lastIdx].options[Idx].value.push(action.payload);
            }else{
                state.step2.questions[lastIdx].options.push({
                    "value": [action.payload],
                    "correctOpt": false
                })
            }
           }
              else{
                state.step2.questions[lastIdx].options.push({
                 "value": [action.payload],
                 "correctOpt": false
                })
              }
           
        },
        setTimer(state, action) {

            state.step2.timer = action.payload;
        }


    }
});


export const formActions = formSlice.actions;

export default formSlice.reducer;