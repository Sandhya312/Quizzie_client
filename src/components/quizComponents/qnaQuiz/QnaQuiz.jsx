

import QuestionInterface from '../createQuizComponent/questionInterface/QuestionInterface';
import AddQuestionBtn from "../addQuestions/AddQuestionBtn";
import { useState } from "react";

const QnAQuiz = () => {

  const [questionCnt, setQuestionCnt] = useState(1);


  // const Modal_Styles = {
  //   width: "600px",
  //   height: "450px",
  // };




  return (
    <div>

        
            <AddQuestionBtn questionCnt={questionCnt} setQuestionCnt={setQuestionCnt} />

            {Array.from({ length: questionCnt }).map((_, index) => (
            <QuestionInterface key={index} />

            ))}
 
  
    </div>
  );
};



export default QnAQuiz;
