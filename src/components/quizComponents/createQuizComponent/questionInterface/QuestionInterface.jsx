

import classes from "./questionInterface.module.css";
import Options from "../../options/Options";
import Timer from "../../timer/Timer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../../store/modalSlice/modalSlice";
 import { formActions } from "../../../../store/multistepSlice/formSlice";



const QuestionInterface = () =>{

    const dispatch=useDispatch();

    const onCloseHandler = () => {
        dispatch(modalActions.closeModal());
      }

    const [optType, setOptType] = useState("text"); // ["text","image","textImage"
    const [questName, setQuestName] = useState(""); 


    const handleOptionChange = (e) => {
        setOptType(e.target.value);
     
      };
    
      const questionNameHandler = (e) => {
        setQuestName(e.target.value);
       console.log("question",questName);
        dispatch(formActions.setquestionTitle(e.target.value));
      }
  
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
            <Options optionType={optType} quizType="QnA" />

            {/* timer */}
            <Timer />
           
          </div>
          
          </div>

          {/* buttons */}
          <div className={classes.buttons}>
             {/* cancel btn */}
            <button type="button" onClick={onCloseHandler}>Cancel</button>

            {/* create quiz btn */}
            <button className={classes.continueBtn}   type="submit">
              {" "}
              Create Quiz{" "}
            </button>
          </div>
          

        </div>
    )
}


export default QuestionInterface;