import classes from "./quesAnalysisCard.module.css";

import PropTypes from "prop-types";

const QuestionAnalysisCard = ({ analysis }) => {


   if(analysis){
    return Object.entries(analysis).map(([key, value]) => (
      <div key={key} className={classes.questionAnalysisCard}>
          <p className={classes.value}>{value}</p>
          <p>{key} </p>
      </div>
    ))
   }
   else{
    return
   }

};

QuestionAnalysisCard.propTypes = {
  analysis: PropTypes.object,
};

export default QuestionAnalysisCard;
