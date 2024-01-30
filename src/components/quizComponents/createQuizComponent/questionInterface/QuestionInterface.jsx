

import classes from "./questionInterface.module.css";
import Options from "../../options/Options";
import Timer from "../../timer/Timer";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../../store/modalSlice/modalSlice";
 import { formActions } from "../../../../store/multistepSlice/formSlice";
import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";

const QuestionInterface = ({questions,questionInstance,addQuestion}) =>{

    const dispatch=useDispatch();
    const navigate = useNavigate();

    const onCloseHandler = () => {
        dispatch(modalActions.closeModal());
    dispatch(formActions.resetStep());

      navigate('/dashboard');

      }

    const [optType, setOptType] = useState("text"); // ["text","image","textImage"
    const [questName, setQuestName] = useState(""); 
    const [options, setOptions] = useState([ {
      "value":[""],
      "correctOpt":false
  },
  {
    "value":[""],
    "correctOpt":false
},
])

    useEffect(() => {
      // Update local form data when the selected form instance changes
      const selectedQuestion = questions[questionInstance];
      console.log("questions:", questions);
      console.log("questionInstance:", questionInstance);
      console.log("selectedQuestion:", selectedQuestion);
      setQuestName(selectedQuestion ? selectedQuestion.title || "" : "");
      setOptions(selectedQuestion ? selectedQuestion.options || [] : [])
    }, [questionInstance, questions]);


    

    const handleOptionChange = (e) => {
        setOptType(e.target.value);
     
      };
    
      const questionNameHandler = (e) => {
        setQuestName(e.target.value);
         

        //parent state update
        addQuestion(   {
          "title":questName,
          "type":0,
           "analysis":[
              {},
              {},
              {}
           ],
          "options":options
           
      })
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
            <Options setOptions={setOptions} options={options} questionInstance={questionInstance}  optionType={optType} quizType="QnA" />

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

QuestionInterface.propTypes = {
    questions: Proptypes.array.isRequired,
    questionInstance: Proptypes.number.isRequired,
    addQuestion: Proptypes.func.isRequired,
}


export default QuestionInterface;