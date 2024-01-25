
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice/quizSlice';
import authReducer from './authSlice/authSlice';
import modalReducer from './modalSlice/modalSlice';
import formReducer from './multistepSlice/formSlice';
 const store = configureStore({
    reducer: {
        quizDb:quizReducer,
        auth:authReducer,
        modal:modalReducer,
        form:formReducer
    },
});


export default store;



