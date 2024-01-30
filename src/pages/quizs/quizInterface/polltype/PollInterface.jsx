/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import classes from "../quizInterface.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PollInterface = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [questionNo, setQuestionNo] = useState(0);
  const quiz = useSelector((state) => state.quizDb.singleQuiz);

  const [selectedOption, setSelectedOption] = useState(null);

  // const [score,setScore]=useState(0);
  const [questionAnalysis, setQuestionAnalysis] = useState(
    Array.from({ length: quiz?.questions?.length }, () => ({
    
    }))
  );

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
      navigate("/thankyou");
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
          {Array.from({ length: 4 }).map((_, index) => {
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
                      return (
                        <img
                          src="https://source.unsplash.com/random/300x300"
                          alt={`option${index}`}
                        />
                      );

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
                          <img
                            src="https://source.unsplash.com/random/300x300"
                            alt={`option${index}`}
                          />
                        </div>
                      );

                    default:
                      return (
                        <p>
                          {currentQuestion
                            ? currentQuestion.options[index].value[0]
                            : `option${index}`}{" "}
                        </p>
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
            {questionNo === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    );
  
};

export default PollInterface;
