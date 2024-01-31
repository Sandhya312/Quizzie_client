import classes from "./quesAnalysisCard.module.css";

import PropTypes from "prop-types";

const QuestionAnalysisCard = ({ question }) => {
  return Object.entries(question).map(([key, value]) => (
    <div key={key} className={classes.questionAnalysisCard}>
        <p className={classes.value}>{value}</p>
        <p>{key} </p>
    </div>
  ));
};

QuestionAnalysisCard.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionAnalysisCard;
