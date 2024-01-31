import classes from "./questionInterface.module.css";
// import Options from "../../options/Options";
import Timer from "../../timer/Timer";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../../store/modalSlice/modalSlice";
import { formActions } from "../../../../store/multistepSlice/formSlice";
import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";

const QuestionInterface = ({ questions, questionInstance, addQuestion }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCloseHandler = () => {
    dispatch(modalActions.closeModal());
    dispatch(formActions.resetStep());

    navigate("/dashboard");
  };

  const [optCnt, setOptCnt] = useState(2);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizType, setQuizType] = useState("QnA");
  const [optType, setOptType] = useState("text"); // ["text","image","textImage"
  const [questName, setQuestName] = useState("");
  const [singleopt, setSigleOpt] = useState([""]);

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
    addQuestion({
      title: questName,
      type: 0,
      analysis: [{}, {}, {}],
      options: options,
    });
  },[options,questName,addQuestion])

  useEffect(() => {
    // Update local form data when the selected form instance changes
    console.log("questions:", questions);
    console.log("questionInstance:", questionInstance);
    console.log(questions[1]);
    const selectedQuestion = questions[questionInstance];
   
    console.log("selectedQuestion:", selectedQuestion);
    setQuestName(selectedQuestion ? selectedQuestion.title || "" : "");
    setOptions(selectedQuestion ? selectedQuestion.options || [
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
    ] : [
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
  }, [questionInstance, questions]);

  const handleOptionChange = (e) => {
    setOptType(e.target.value);
  };

  const questionNameHandler = (e) => {
    setQuestName(e.target.value);

    

    //parent state update
   
    // dispatch(formActions.setquestionTitle(e.target.value));
  };

  const optionHandler = (e) => {
    const value = e.target.value;
    const indexValue = parseInt(e.target.id);
    
    if(optType === 'text') {
      setOptions((prevOptions) => {
        prevOptions[indexValue].value[0] += value;
        return prevOptions;
      });
    }

    if(optType === 'image'){
      setOptions((prevOptions) => {
        console.log('prevOptions',prevOptions)
        prevOptions[indexValue].value[0] += value;
        return prevOptions;
      });
    }

    if(optType === 'text_image'){
      console.log('Text Image Selected')
    }
    
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
            placeholder="QnA Question"
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
          {/* options */}
          {/* <Options setOptions={setOptions} options={options} questionInstance={questionInstance}  optionType={optType} quizType="QnA" /> */}

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
                      onChange={optionHandler(index)}
                      type="text"
                      name={`option${index + 1}_text`}
                      value={options[index]?.value[0] || ""}
                      className={classes.option_input}
                      placeholder="Text"
                    />
                    <input
                      onChange={optionHandler}
                      type="url"
                      name={`option${index + 1}_image`}
                      value={options[index]?.value[1] || ""}
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
          <Timer />
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
};

export default QuestionInterface;
