import { useState } from "react";
import Proptypes from "prop-types";
import classes from "./createQuizInfo.module.css";
import { useDispatch,useSelector } from "react-redux";
import { modalActions } from "../../../store/modalSlice/modalSlice";
import { formActions } from "../../../store/multistepSlice/formSlice";
import { useNavigate } from "react-router-dom";

const CreateQuizInfo = ({fetchQuizInfo}) => {

  const [quizType, setQuizType] = useState(0); // [0,1
  const [quizName, setQuizName] = useState(""); // [0,1
     
  const dispatch=useDispatch();
  const navigate = useNavigate();
 


  const onCloseHandler = () => {
    dispatch(modalActions.closeModal());
    dispatch(formActions.resetStep());
    navigate('/dashboard');
  }



  //function to get quiztype and quiz name
  const getQuizName = (e) => {
    setQuizName(e.target.value);
  };

  const getQuizType = (val) => {
    if (val === 0) {
      setQuizType(0);
      dispatch(formActions.setQyizType(0));
    } else {
      setQuizType(1);
      dispatch(formActions.setQyizType(1));
    }
  };

  const nextStep = (e) => {
    e.preventDefault();
    fetchQuizInfo({quizName:quizName,quizType:quizType});
    dispatch(formActions.setStep1({quizName:quizName,quizType:quizType}));
     dispatch(formActions.nextStep());
  };



  return (
    <div 
     style={{
      height:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-evenly"
     }}
    >
            <input
              value={quizName}
              className={classes.quiz_name}
              placeholder="Quiz name"
              onChange={getQuizName}
            />

            {/* quiz type */}
            <div className={classes.quiz_type}>
              <h4>Quiz Type</h4>

              <input onClick={() => getQuizType(0)} name="quizType" value="Q & A" type="button" readOnly placeholder="Q & A" />
              <input onClick={() => getQuizType(1)} name="quizType" value="Poll Type" type="button" readOnly placeholder="Poll Type" />
            </div>

            {/* buttons */}
            <div className={classes.buttons}>
              <button type="button" onClick={onCloseHandler}>Cancel</button>
              <button className={classes.continueBtn} type="button"
                onClick={nextStep}
              >
                {" "}
                Continue{" "}
              </button>
            </div>
            
          
  
     
    </div>
  );
};
CreateQuizInfo.propTypes = {
  fetchQuizInfo: Proptypes.func.isRequired,
};

export default CreateQuizInfo;
