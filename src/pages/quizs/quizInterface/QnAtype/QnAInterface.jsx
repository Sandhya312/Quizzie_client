/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import classes from "../quizInterface.module.css";
import { setScore } from "../../../../store/quizSlice/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const QnAInterface = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [questionNo, setQuestionNo] = useState(0);
  const score = useSelector((state) => state.quizDb.score);
  const quiz = useSelector((state) => state.quizDb.singleQuiz);

 const imgUrl = "https://source.unsplash.com/random/300x300";

  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(5);
  
  const [questionAnalysis, setQuestionAnalysis] = useState(
    Array.from({ length: quiz?.questions?.length }, () => ({
      "people Attempted the question": 0,
      "people Answered Correctly": 0,
      "people Answered Incorrectly": 0,
    }))
  );

  useEffect(()=>{
    dispatch(setScore(0))
  },[]);


  useEffect(() => {
    if (timer === 0) {
      if (questionNo !== 4) {
        showQuizQuestion();
      }
      return;
    }
    let Interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(Interval);
  }, [timer]);

  const selectedOptionClass = classes.activeOption + " " + classes.option;

  const currentQuestion = quiz?.questions ? quiz.questions[questionNo] : null;

  var showQuizQuestion = () => {

    setQuestionAnalysis((prev) => {
      if (prev[questionNo]) {
        prev[questionNo]["people Attempted the question"] += 1;
      } else {
        prev.push({
          "people Attempted the question": 1,
          "people Answered Correctly": 0,
          "people Answered Incorrectly": 0,
        });
      }
      return prev;
    });

    if (selectedOption !== null || selectedOption !== undefined) {
      if (currentQuestion?.options[selectedOption]?.correctOpt) {
        setQuestionAnalysis((prev) => {
          if (prev[questionNo]) {
            prev[questionNo]["people Answered Correctly"] += 1;
          } else {
            prev.push({
              "people Attempted the question": 0,
              "people Answered Correctly": 1,
              "people Answered Incorrectly": 0,
            });
          }
          return prev;
        });
        dispatch(setScore(score + 1));
      } else {
        setQuestionAnalysis((prev) => {
          if (prev[questionNo]) {
            prev[questionNo]["people Answered Incorrectly"] += 1;
          } else {
            prev.push({
              "people Attempted the question": 0,
              "people Answered Correctly": 0,
              "people Answered Incorrectly": 0,
            });
          }
          return prev;
        });
      }
    }
    setQuestionNo((prev) => {
      if (prev === quiz.questions.length - 1) {
        return prev;
      }
      return prev + 1;
    });
    setSelectedOption(null);


    setTimer(5);
    if (questionNo === quiz?.questions?.length - 1) {
        if (currentQuestion?.options[selectedOption]?.correctOpt) {
            setQuestionAnalysis((prev) => {
              if (prev[questionNo]) {
                prev[questionNo]["people Answered Correctly"] += 1;
              } else {
                prev.push({
                  "people Attempted the question": 0,
                  "people Answered Correctly": 1,
                  "people Answered Incorrectly": 0,
                });
              }
              return prev;
            });
            dispatch(setScore(score + 1));
          } 
      navigate("/score");
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
          <div className={classes.timer}>
            <p>00:{timer < 10 ? "0" + timer : timer}s</p>
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
                          src= {currentQuestion
                            ? currentQuestion.options[index].value[1]
                            : imgUrl}
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
                            src= {currentQuestion
                              ? currentQuestion.options[index].value[1]
                              : imgUrl}
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

export default QnAInterface;
