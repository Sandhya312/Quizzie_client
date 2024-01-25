

import QuestionInterface from '../createQuizComponent/questionInterface/QuestionInterface';
import AddQuestionBtn from "../addQuestions/AddQuestionBtn";
import { useState } from "react";
import Proptypes from "prop-types";

const QnAQuiz = ({questions,questionInstance,addQuestion,setQuestionInstance, }) => {
  

  console.log('questions',questions);
  const [questionCnt, setQuestionCnt] = useState(1);
   
  // const [questions, setQuestions] = useState([
  //   {
  //     "title":"what is redux in react?",
  //     "type":0,
  //      "analysis":[
  //         {"peopple attepted":87},
  //         {"people attempted correct":4},
  //         {"people attemped incorrect":32}
  //      ],
  //     "options":[
  //         {
  //             "value":["state management"],
  //             "correctOpt":true
  //         },
  //         {
  //             "value":["alternative of context api"],
  //             "correctOpt":false
  //         },
  //         {
  //             "value":["not much important"],
  //             "correctOpt":false
  //         },
  //         {
  //             "value":["hook"],
  //             "correctOpt":false
  //         }
  //      ]
       
  // }
  // ]); // [0,1

  // const Modal_Styles = {
  //   width: "600px",
  //   height: "450px",
  // };




  return (
    <div>

        
            <AddQuestionBtn  questionCnt={questionCnt} setQuestionInstance={setQuestionInstance} setQuestionCnt={setQuestionCnt} />

            
            <QuestionInterface questions={questions} questionInstance={questionInstance} addQuestion={addQuestion}  />
          
 
  
    </div>
  );
};


QnAQuiz.propTypes = {
  questions: Proptypes.array.isRequired,
  setQuestionInstance: Proptypes.func.isRequired,
  questionInstance: Proptypes.number.isRequired,
  addQuestion: Proptypes.func.isRequired,
}



export default QnAQuiz;
