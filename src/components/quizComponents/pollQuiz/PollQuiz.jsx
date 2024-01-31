import QuestionInterface from "../createQuizComponent/questionInterface/QuestionInterface";
import AddQuestionBtn from "../addQuestions/AddQuestionBtn";
import { useState } from "react";
import Proptypes from "prop-types";

const PollQuiz = ({
  questions,
  questionInstance,
  addQuestion,
  setQuestionInstance,
}) => {
  const [questionCnt, setQuestionCnt] = useState(1);

  return (
    <div>
      <AddQuestionBtn
        questionCnt={questionCnt}
        setQuestionInstance={setQuestionInstance}
        setQuestionCnt={setQuestionCnt}
      />

      <QuestionInterface
        questions={questions}
        questionInstance={questionInstance}
        addQuestion={addQuestion}
        quizType={"Poll"}
      />
    </div>
  );
};

PollQuiz.propTypes = {
  questions: Proptypes.array.isRequired,
  setQuestionInstance: Proptypes.func.isRequired,
  questionInstance: Proptypes.number.isRequired,
  addQuestion: Proptypes.func.isRequired,
};

export default PollQuiz;
