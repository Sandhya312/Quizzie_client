import { useState } from "react";
import classes from "./options.module.css";
import Option from "./singleOption/Option";
import PropTypes from "prop-types";

// Remove the import statement for 'PropTypes'
// import PropTypes from 'prop-types';

const Options = ({ optionType, quizType }) => {
  const [optCnt, setOptCnt] = useState(2);

  return (
    <div className={classes.options}>
      {Array.from({ length: optCnt }).map((_, index) => (
        <div className={classes.option} key={index}>
          {quizType === "QnA" && (
            <input
              type="radio"
              id={`opt${index + 1}`}
              name={`option${index + 1}`}
              value={`option${index + 1}`}
            />
          )}
          <Option optionType={optionType} index={index} />
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
  );
};

Options.propTypes = {
  optionType: PropTypes.string.isRequired,
  quizType: PropTypes.string.isRequired,
};

export default Options;
