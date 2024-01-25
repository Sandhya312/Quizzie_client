import classes from "./quesAnalysisCard.module.css";

// const obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
// };

// Object.entries(obj).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });

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
