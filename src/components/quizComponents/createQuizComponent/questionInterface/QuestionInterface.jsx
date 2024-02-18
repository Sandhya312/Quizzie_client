/* eslint-disable no-unused-vars */
import classes from "./questionInterface.module.css";
import Timer from "../../timer/Timer";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../../store/modalSlice/modalSlice";
import { formActions } from "../../../../store/multistepSlice/formSlice";
import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";

const QuestionInterface = ({ questions, quizType, questionInstance, addQuestion }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCloseHandler = () => {
    dispatch(modalActions.closeModal());
    dispatch(formActions.resetStep());

    navigate("/dashboard");
  };

  const [optCnt, setOptCnt] = useState(2);
  const [selectedOption, setSelectedOption] = useState(null);
  const [optType, setOptType] = useState("text"); 
  const [questName, setQuestName] = useState("");

  //local state to store option - array of options and values - array of option vlaues
  const [options, setOptions] = useState([
    {
      value: [""],
      correctOpt: false,
    },
    {
      value: [""],
      correctOpt: false,
    },
    {
      value: [""],
      correctOpt: false,
    },
    {
      value: [""],
      correctOpt: false,
    },
  ]);


  useEffect(()=>{

    const optTypeSelection = (optType) =>{
       switch (optType){
        case "text" :
          return 0;
        case "image":
           return 1;
        case "text_Image":
          return 2;
       }

    }
     

    addQuestion({
      title: questName,
      type:optTypeSelection(optType),
      analysis: [{}, {}, {}],
      options: options,
    });
  },[options,questName,addQuestion,optType])

  

  useEffect(() => {

    const selectedQuestion = questions[questionInstance];
   
    setQuestName(selectedQuestion ? selectedQuestion.title || "" : "");
    setOptions(selectedQuestion ? selectedQuestion.options : [
      {
        value: ["",""],
        correctOpt: false,
      },
      {
        value: ["",""],
        correctOpt: false,
      },
      {
        value: ["",""],
        correctOpt: false,
      },
      {
        value: ["",""],
        correctOpt: false,
      },
    ]);
  }, [questionInstance, questions, options]);

  const handleOptionChange = (e) => {
    setOptType(e.target.value);
  };

  const questionNameHandler = (e) => {
    setQuestName(e.target.value);

  };

  const optionHandler = (e) => {
    const value = e.target.value;
    const indexValue = parseInt(e.target.id);
    
    if(optType === 'text') {
      setOptions((prevOptions) => {
        return prevOptions.map((option, index) => {
          if (index === indexValue) {
            return {
              ...option,
              value: [value], // Replace the existing array with a new array containing the current value
              correctOpt: selectedOption === indexValue ? true : false,
            };
          }
          return option;
        });
      });
    }

    if(optType === 'image'){
      setOptions((prevOptions) => {
        return prevOptions.map((option, index) => {
          if (index === indexValue) {
            return {
              ...option,
              value: [value], // Replace the existing array with a new array containing the current value
            };
          }
          return option;
        });
      });
    }

    if(optType === 'text_Image'){
      setOptions((prevOptions) => {
        return prevOptions.map((option, index) => {
          if (index === indexValue) {
            return {
              ...option,
              value: [value], // Replace the existing array with a new array containing the current value
            };
          }
          return option;
        });
      });
    }

    
  };


  const imageInputHandler = (e) => {
  const valuee = e.target.value;
  const indexValue = parseInt(e.target.id);
  
  setOptions((prevOptions) => {
    return prevOptions.map((option, index) => {
      if (index === indexValue) {
        return {
          ...option,
          // Ensure the value is always defined
          value: [option.value[0], valuee || ""], // If valuee is undefined, use an empty string
        };
      }
      return option;
    });
  });
  e.target.value="";
};

 
  

  const deleteOption = () => {
    setOptCnt((prev) => {
      return prev - 1;
    });
  };

  const handleRadioChange = (index) => {
    setSelectedOption(index);
  };

  const getBorderStyle = (index) => {
    return index === selectedOption ? { border: "2px solid #60B84B" } : {};
  };

  return (
    <div>
      {/* questionSection */}
      <div>
        {/* question taking input */}
        <div className={classes.input_div}>
          <input
            className={classes.quiz_name_input}
            type="text"
            required
            placeholder={quizType==="QnA" ? "QnA Question":"Poll Question"} 
            name="question"
            value={questName}
            onChange={questionNameHandler}
          />
        </div>

        {/* option type selection area */}
        <div className={classes.option_type_selection}>
          <p>Option Type </p>

          <div className={classes.option_type}>
            <div>
              <input
                type="radio"
                id="text"
                name="option_type"
                value="text"
                defaultChecked
                onChange={handleOptionChange}
              />
              <label htmlFor="text">Text</label>
            </div>

            <div>
              <input
                type="radio"
                id="image"
                name="option_type"
                value="image"
                onChange={handleOptionChange}
              />
              <label htmlFor="image">Image URL</label>
            </div>

            <div>
              <input
                type="radio"
                id="textImage"
                name="option_type"
                value="text_Image"
                onChange={handleOptionChange}
              />
              <label htmlFor="textImage">Text & Image URL</label>
            </div>
          </div>
        </div>

        <div className={classes.option_timer}>

          <div className={classes.options}>
            {Array.from({ length: optCnt }).map((_, index) => (
              <div className={classes.option} key={index}>
                {quizType === "QnA" && (
                  <input
                    type="radio"
                    id={`opt${index + 1}`}
                    name="option"
                    value={`option${index + 1}`}
                    onChange={() => handleRadioChange(index)}
                  />
                )}

                {/* ===============================================================================================option type selection area */}

                {optType === "text" && (
                  <div
                    style={{
                      display: "flex",
                      ...getBorderStyle(index),
                    }}
                  >
                    <input
                      onChange={optionHandler}
                      type="text"
                      name={`option${index + 1}_text`}
                      value={options[index] ? options[index].value[0] : ""}
                      id={index}
                      className={classes.option_input}
                      placeholder="Text"
                    />

                    {index > 1 && (
                      <button
                        type="button"
                        className={classes.trash_btn}
                        onClick={deleteOption}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                            fill="#D60000"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                )}

                {optType === "image" && (
                  <div style={{ display: "flex", ...getBorderStyle(index) }}>
                    <input
                      onChange={optionHandler}
                      type="url"
                      name={`option${index + 1}_img`}
                      value={options[index] ? options[index].value[0] : ""}
                      id={index}
                      className={classes.option_input}
                      placeholder="Image URL"
                    />

                    {index > 1 && (
                      <button
                        type="button"
                        className={classes.trash_btn}
                        onClick={deleteOption}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                            fill="#D60000"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                )}

                {optType === "text_Image" && (
                  <div
                    style={{
                      display: "flex",
                      ...getBorderStyle(index),
                    }}
                  >
                    <input
                      onChange={optionHandler}
                      type="text"
                      name={`option${index + 1}_text`}
                      value={options[index] ? options[index].value[0] : ""}
                      id={index}
                      className={classes.option_input}
                      placeholder="Text"
                    />
                    <input
                      onChange={imageInputHandler}
                      type="url"
                      name={`option${index + 1}_image`}
                      value={options[index] ? options[index].value[1] : ""}
                      id={index}
                      className={classes.option_input}
                      placeholder="Image URL"
                    />

                    {index > 1 && (
                      <button
                        type="button"
                        className={classes.trash_btn}
                        onClick={deleteOption}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                            fill="#D60000"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                )}

                {/* <Option optionType={optionType} index={index} addOptions={addOptions} /> */}
              </div>
            ))}

            {/* add option btn */}
            {optCnt != 4 && (
              <div className={classes.add_opt}>
                <button
                  type="button"
                  className={classes.add_opt_btn}
                  onClick={() => {
                    setOptCnt((prev) => {
                      if (prev < 4) {
                        return prev + 1;
                      }
                      return prev;
                    });
                  }}
                >
                  Add option
                </button>
              </div>
            )}
          </div>

          {/* timer */}
         { quizType==="QnA"? <Timer /> : null }
        </div>
      </div>

      {/* buttons */}
      <div className={classes.buttons}>
        {/* cancel btn */}
        <button type="button" onClick={onCloseHandler}>
          Cancel
        </button>

        {/* create quiz btn */}
        <button className={classes.continueBtn} type="submit">
          {" "}
          Create Quiz{" "}
        </button>
      </div>
    </div>
  );
};

QuestionInterface.propTypes = {
  questions: Proptypes.array.isRequired,
  questionInstance: Proptypes.number.isRequired,
  addQuestion: Proptypes.func.isRequired,
  quizType: Proptypes.string.isRequired,
};

export default QuestionInterface;
