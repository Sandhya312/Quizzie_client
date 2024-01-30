import PropTypes from "prop-types";
import classes from "./option.module.css";
// import { useDispatch } from 'react-redux';
// import { formActions } from '../../../../store/multistepSlice/formSlice';
import { useState,useEffect } from "react";
const Option = ({ optionType, index, addOptions }) => {
  // const dispatch = useDispatch();
  const [option, setOption] = useState({
    value: [""],
    correctOpt: false,
  });

  useEffect(() => {
    // Update local form data when the selected form instance changes
    const selectedQuestion = questions[questionInstance];
    console.log("questions:", questions);
    console.log("questionInstance:", questionInstance);
    console.log("selectedQuestion:", selectedQuestion);
    setOption();
    setOptions(selectedQuestion ? selectedQuestion.options || [] : [])
  }, [questionInstance, questions]);


  const optionHandler = (e) => {
    const { name, value } = e.target; // h e
   setOption((prev)=>{
    console.log("option prev", prev);
        prev.value.push(value);
        return prev;
   })
   addOptions(option);
    console.log("option", option, name, index);
    // dispatch(formActions.setOptions(option);
  };

  // return optionType === "text_Image" ? (
  //   <div
  //     style={{
  //       display: "flex",
  //     }}
  //   >
  //     <input
  //       onChange={optionHandler}
  //       type="text"
  //       name={`option${index + 1}_text`}
  //       value={option.value[0] || ""}
  //       className={classes.option_input}
  //       placeholder="Text"
  //     />
  //     <input
  //       onChange={optionHandler}
  //       type="url"
  //       name={`option${index + 1}_image`}
  //       value={option.value[1] || ""}
  //       className={classes.option_input}
  //       placeholder="Image URL"
  //     />

  //     {index > 1 && (
  //       <button type="button" className={classes.trash_btn}>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //         >
  //           <path
  //             d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
  //             fill="#D60000"
  //           />
  //         </svg>
  //       </button>
  //     )}
  //   </div>
  // ) : optionType === "text" ? (
  //   <div
  //     style={{
  //       display: "flex",
  //     }}
  //   >
  //     <input
  //       onChange={optionHandler}
  //       type="text"
  //       name={`option${index + 1}_text`}
  //       value={option.value[0] || ""}
  //       className={classes.option_input}
  //       placeholder="Text"
  //     />

  //     {index > 1 && (
  //       <button type="button" className={classes.trash_btn}>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //         >
  //           <path
  //             d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
  //             fill="#D60000"
  //           />
  //         </svg>
  //       </button>
  //     )}
  //   </div>
  // ) : (
    <div style={{ display: "flex" }}>
      <input
        onChange={optionHandler}
        type="url"
        name={`option${index + 1}_img`}
        value={option.value[0] || ""}
        className={classes.option_input}
        placeholder="Image URL"
      />

      {index > 1 && (
        <button type="button" className={classes.trash_btn}>
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
  );
};

Option.propTypes = {
  optionType: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  addOptions: PropTypes.func.isRequired,
};

export default Option;
