/* eslint-disable no-unused-vars */

import { useState,useEffect } from 'react';
import classes from './quizInterface.module.css';
import { getQuiz } from '../../../store/quizSlice/quizSlice';
import { useDispatch,useSelector } from 'react-redux';
import Loader from '../../../components/commonComponents/loader/Loader';
import { useParams } from 'react-router-dom';
import PollInterface from './polltype/PollInterface';
import QnAInterface from '../quizInterface/QnAtype/QnAInterface';

const QuizInterface = () => {
  
  const dispatch = useDispatch();
    const {id} = useParams();
  const loading = useSelector(state=>state.quizDb.loading);
  const error = useSelector(state=>state.quizDb.error);
  const quiz = useSelector(state=>state.quizDb.singleQuiz);
  
  useEffect(()=>{
    dispatch(getQuiz({quizId:id}));
  },[id,dispatch])


  return (
    <div className={classes.parent}>
    
       {loading && <Loader/>}
      {error && <h1>{error}</h1>}
      {!loading && !error && !quiz?.quizType && <QnAInterface />  }

      {!loading && !error && quiz?.quizType && <PollInterface />  }
  
    </div>
  );
};

export default QuizInterface;
