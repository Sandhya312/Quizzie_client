import { useState } from "react";
import classes from "./pollQuiz.module.css";
import Options from "../options/Options";
import Timer from "../timer/timer";
import AddQuestionBtn from "../addQuestions/AddQuestionBtn";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../store/modalSlice/modalSlice";
import { formActions } from "../../../store/multistepSlice/formSlice";

const PollQuiz = () => {

  const dispatch=useDispatch();

  const onCloseHandler = () => {
    dispatch(modalActions.closeModal());
  }

  const [optType, setOptType] = useState("text"); // ["text","image","textImage"

 

  const handleOptionChange = (e) => {
    setOptType(e.target.value);
  };

  const nextStep = (e) => {
    e.preventDefault();
    
     dispatch(formActions.nextStep());
  };



  return (
    <div>

        
            <AddQuestionBtn />
 
            <div>

            {/* questionSection */}
              <div>
              {/* question taking input */}
              <div className={classes.input_div}>
                <input
                  className={classes.quiz_name_input}
                  type="text"
                  placeholder="Poll Question"
                  name="question"
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
                <Options optionType={optType} quizType="Poll" />

                {/* timer */}
                <Timer />
               
              </div>
              
              </div>

              {/* buttons */}
              <div className={classes.buttons}>
                 {/* cancel btn */}
                <button onClick={onCloseHandler}>Cancel</button>

                {/* create quiz btn */}
                <button onClick={nextStep} className={classes.continueBtn} type="submit">
                  {" "}
                  Create Quiz{" "}
                </button>
              </div>
              

            </div>

        
    </div>
  );
};


export default PollQuiz;
