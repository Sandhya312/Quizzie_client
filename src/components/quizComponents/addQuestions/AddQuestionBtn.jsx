import { useState } from "react";
import classes from "./addQuestions.module.css";
import PropTypes from "prop-types";

const AddQuestionBtn = ({questionCnt,setQuestionCnt}) => {
  // const [questionCnt, setQuestionCnt] = useState(1);
  const [buttonStates, setButtonStates] = useState([true, false, false, false, false]);


  const handleButtonClick = (index) => {
    // Update the state for the clicked button
    setButtonStates(prevStates => prevStates.map((state, i) => (i === index ? true : false)));
  };


  return (
    <div className={classes.quesiton_add_section}>
      {/* add upto 5 addbtn quesiton */}
      <div className={classes.question_section}>
        <div className={classes.quesitonNo_Btns}>
          {Array.from({ length: questionCnt }).map((_, index) => (
            <div key={index}>
              <button
              onClick={()=>handleButtonClick(index)}
              type="button" 
              className={buttonStates[index] ? classes.question_Number + " " + classes.active_question : classes.question_Number}
               style={{
                    marginRight:"1rem",
              }}>
                {index + 1} <span className={classes.crossBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M9.5553 6.34619L3.46155 12.4399M3.46155 6.34619L9.5553 12.4399"
                    stroke="#474444"
                  />
                </svg>
              </span>
              </button>{" "}
              
            </div>
          ))}
        </div>

        {
          // add question btn
          questionCnt !=5 && (
            <button
            type="button"
            className={classes.addBtn}
            onClick={() => {
              setQuestionCnt((prev) => {
                if (prev < 5) {
                  return prev + 1;
                }
                return prev;
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M33.5 14H23V24.5H19.5V14H9V10.5H19.5V0H23V10.5H33.5V14Z"
                fill="#969696"
              />
            </svg>
          </button>
          )
        }
      </div>

      {/* /text - max 5 questions */}
      <div className={classes.questionMax_instruction}>
        <p>Max 5 Questions</p>
      </div>
    </div>
  );
};

AddQuestionBtn.propTypes = {
  questionCnt: PropTypes.number.isRequired,
  setQuestionCnt: PropTypes.func.isRequired,
}

export default AddQuestionBtn;
