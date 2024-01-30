import { useState, useEffect } from "react";
import classes from "./options.module.css";
// import Option from "./singleOption/Option";
import PropTypes from "prop-types";

// Remove the import statement for 'PropTypes'
// import PropTypes from 'prop-types';

const Options = ({
  optionType,
  quizType,
  questionInstance,
  setOptions,
  options,
}) => {
  const [optCnt, setOptCnt] = useState(2);

  //local state to store option
  const [option, setOption] = useState([
    {
      value: "",
      correctOpt: false,
    },
    {
      value:"",
      correctOpt: false,
    },
    
  ]);

  const [selectedOption, setSelectedOption] = useState(null);


  // useEffect(() => {
  //   // Update local state when the selected instance changes
  //   setOption(options || []);
  // }, [questionInstance]); // [0,1,2,3]


   //function to add option to the option array
   const addOptions = (option) => {
    setOptions((prev) => {
      return [...prev, option];
    });
  };



  const optionHandler = (e, index) => {
    
    const { name, value } = e.target; 
  
    // setOption((prev) => {
    //   if (prev[index]) {
    //     prev[index].value.push(value);
    //   } else {
    //     prev.push({
    //       value: [value],
    //       correctOpt: false,
    //     });
    //   } 

    // });

    setOption((prevOptions) => {
      return prevOptions.map((option, i) =>
        i === index
          ? { ...option, value:value }
          : option
      );
    });

    // addOptions(option);
    // dispatch(formActions.setOptions(option);
  };

  console.log(option);

 

  const deleteOption = () => {
    setOptCnt((prev) => {
      return prev - 1;
    });
  };


  const handleRadioChange = (index) => {
    setSelectedOption(index);
  };  

  const getBorderStyle = (index) => {
    return index === selectedOption ? { border: '2px solid #60B84B' } : {};
  };

  return (
    <div className={classes.options}>
      {Array.from({ length: optCnt }).map((_, index) => (
        <div className={classes.option} key={index}>
          {quizType === "QnA" && (
            <input
              type="radio"
              id={`opt${index + 1}`}
              name="option"
              value={`option${index + 1}`}
              onChange={() => handleRadioChange(index)}

            />
          )}

          {/* ===============================================================================================option type selection area */}

          {optionType === "text" && (
            <div
              style={{
                display: "flex",
                ...getBorderStyle(index),
              }}
            >
              <input
                onChange={optionHandler}
                type="text"
                name={`option${index + 1}_text`}
                value={option[index]?.value|| ""}
                className={classes.option_input}
                placeholder="Text"
              />

              {index > 1 && (
                <button
                  type="button"
                  className={classes.trash_btn}
                  onClick={deleteOption}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                      fill="#D60000"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          {optionType === "image" && (
            <div style={{ display: "flex",
            ...getBorderStyle(index),
            }}>
              <input
                onChange={optionHandler}
                type="url"
                name={`option${index + 1}_img`}
                value={option[index]?.value[0] || ""}
                className={classes.option_input}
                placeholder="Image URL"
                
              />

              {index > 1 && (
                <button
                  type="button"
                  className={classes.trash_btn}
                  onClick={deleteOption}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                      fill="#D60000"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          {optionType === "text_Image" && (
            <div
              style={{
                display: "flex",
                ...getBorderStyle(index),
              }}
            >
              <input
                onChange={optionHandler(index)}
                type="text"
                name={`option${index + 1}_text`}
                value={option[index]?.value[0] || ""}
                className={classes.option_input}
                placeholder="Text"
              />
              <input
                onChange={optionHandler}
                type="url"
                name={`option${index + 1}_image`}
                value={option[index]?.value[1] || ""}
                className={classes.option_input}
                placeholder="Image URL"
              />

              {index > 1 && (
                <button
                  type="button"
                  className={classes.trash_btn}
                  onClick={deleteOption}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                      fill="#D60000"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* <Option optionType={optionType} index={index} addOptions={addOptions} /> */}
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
  setOptions: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  questionInstance: PropTypes.number.isRequired,
};

export default Options;
