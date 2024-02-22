/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import classes from "../quizInterface.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setQuizImpression,setQuestionAnalysiss} from "../../../../store/quizSlice/quizSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PollInterface = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [questionNo, setQuestionNo] = useState(0);
  const quiz = useSelector((state) => state.quizDb.singleQuiz);
  const quiz_impression = useSelector((state)=> state.quizDb.quiz_impression);

  const [selectedOption, setSelectedOption] = useState(null);
  const [impression,setImpression] = useState(quiz_impression);

  const imgUrl = "https://source.unsplash.com/random/300x300";


  const [questionAnalysis, setQuestionAnalysis] = useState(
    Array.from({ length: quiz?.questions?.length }, () => ({
      "option1": 0,
      "option2": 0,
      "option3": 0,
      "option4": 0,

    }))
  );

  useEffect(() => {
    setImpression((prev)=>prev+1);
  },[]);

const questionss = quiz?.questions;

  const selectedOptionClass = classes.activeOption + " " + classes.option;

const currentQuestion = questionss ? questionss[questionNo] : null;

  var showQuizQuestion = () => {
   
   
    setQuestionNo((prev) => {
      if (prev < questionss.length - 1) {
        return prev+1;
      }
      
      return prev;
    });


    if (selectedOption !== null || selectedOption !== undefined) {
        setQuestionAnalysis((prev) => {
            if (prev[questionNo]) {
                prev[questionNo][`option${selectedOption+1}`] +=1;
            } else {
                prev.push({
                        [`option${selectedOption+1}`]: 1
                });
            }
            return prev;
        });
    }
    
    setSelectedOption(null);

    // setcurrentQuestion(quiz.questions ? quiz.questions[questionNo] : null);


    if (questionNo === quiz?.questions?.length - 1) {
      dispatch(setQuizImpression({quiz_impression:impression,id:id}))
      dispatch(setQuestionAnalysiss({analysis:questionAnalysis,id}))

      navigate("/thankyou");
    }

  }

  let len=0;

  for(let i =0;i<currentQuestion?.options?.length;i++){
    if(currentQuestion.options[i].value[0].length!=0 || currentQuestion.options[i].value[0] !==""){
      len++;
    }
  }


    return (
      <div className={classes.quizInterface}>
        <div className={classes.timer_quesitonNo}>
          <div className={classes.questionNo}>
            <p>
              {questionNo + 1}/{currentQuestion ? quiz.questions.length : 0}
            </p>
          </div>
         
        </div>
        <div className={classes.questionName}>
          <h1>
            {currentQuestion ? currentQuestion.title : "question name"}{" "}
          </h1>
        </div>
        <div className={classes.options}>
          {Array.from({ length: len }).map((_, index) => {
            return (
              <div
                key={index}
                className={
                  selectedOption === index
                    ? selectedOptionClass
                    : classes.option
                }
                onClick={() => {
                  setSelectedOption(index);
                  setQuestionAnalysis((prev) => {
                    if (prev[questionNo]) {
                      prev[questionNo][`option${index+1}`] += 1;
                    } else {
                      prev.push({
                        "option1": 1,
                        "option2": 0,
                        "option3": 0,
                        "option4": 0,
                      
                      });
                    }
                    return prev;
                  });
              
                }}
              >
                {(() => {
                  switch (currentQuestion ? currentQuestion.type : 0) {
                    case 0:
                      return (
                        <p>
                          {currentQuestion
                            ? currentQuestion.options[index].value[0]
                            : `option${index}`}{" "}
                        </p>
                      );
                    case 1:
                      return <img src={currentQuestion && currentQuestion?.options[index]
                        ? currentQuestion?.options[index]?.value[0]
                        : imgUrl} />;

                        case 2:
                          return (
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <p>
                                {currentQuestion
                                  ? currentQuestion.options[index].value[0]
                                  : `option${index}`}{" "}
                              </p>
                              <img src={currentQuestion && currentQuestion?.options[index]
                    ? currentQuestion?.options[index]?.value[1]
                    : imgUrl} />
                            </div>
                          );
      
                      
                   
                  }
                })()}
              </div>
            );
          })}
        </div>
        <div className={classes.submit_btn}>
          <button
            className={
              selectedOption === null ? classes.disabled : classes.active
            }
            disabled={selectedOption === null}
            onClick={() => {
              showQuizQuestion();
            }}
          >
            {questionNo === 4? "Submit" : "Next"}
          </button>
        </div>
      </div>
    );
  
};

export default PollInterface;
