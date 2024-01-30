import { useState } from "react";
import styles from "./createquiz.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";

const TempCreate = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [quizName, setQuizName] = useState("");
  const [quizType, setQuizType] = useState("Q & A"); // Default to "Q & A"
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [pollQuestion, setPollQuestion] = useState([]);
  const [selectedOptionType, setSelectedOptionType] = useState(0); // 0: Text, 1: Image URL, 2: Text and Image URL
  const [options, setOptions] = useState([]); // Array of options for each question
  const [ansOption, setAnsOption] = useState([]); // Store the index of the correct answer for each question
  const [timerType, setTimerType] = useState([]); // Store the timer type for each question

  const navigate = useNavigate();

  // handleCancelQuizModal
  const handleCancelQuizModal = () => {
    setFirstRender(true);
    setShowQuestionModal(false);
    // Reset other states if needed
    setQuizName("");
    setQuizType("Q & A");
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setPollQuestion([]);
    setOptions([]);
    setAnsOption([]);
    setTimerType([]);
  };

  // handleShowQuizQueModal
  const handleShowQuizQueModal = () => {
    setFirstRender(false);
    setShowQuestionModal(true);
    if (questions.length === 0) {
      handleAddQuestion();
    }
  };

  // handleQuestionNoChange
  const handleQuestionNoChange = (index) => {
    setCurrentQuestionIndex(index);
  };

  // handleAddQuestion
  const handleAddQuestion = () => {
    setQuestions([...questions, {}]);
    setPollQuestion([...pollQuestion, ""]);
    setOptions([...options, [{}, {}, {}, {}]]); // Initialize with 4 empty options
    setAnsOption([...ansOption, null]);
    setTimerType([...timerType, "OFF"]);
  };

  // handleDeleteQuestion
  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    const updatedPollQuestions = pollQuestion.filter((_, i) => i !== index);
    const updatedOptions = options.filter((_, i) => i !== index);
    const updatedAnsOptions = ansOption.filter((_, i) => i !== index);
    const updatedTimerTypes = timerType.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
    setPollQuestion(updatedPollQuestions);
    setOptions(updatedOptions);
    setAnsOption(updatedAnsOptions);
    setTimerType(updatedTimerTypes);
    if (index === currentQuestionIndex && index > 0) {
      setCurrentQuestionIndex(index - 1);
    }
  };

  // handleQuestionTextChange
  const handleQuestionTextChange = (e, index) => {
    const updatedPollQuestions = [...pollQuestion];
    updatedPollQuestions[index] = e.target.value;
    setPollQuestion(updatedPollQuestions);
  };

  // handleOptionTypeSelect
  const handleOptionTypeSelect = (optionType) => {
    setSelectedOptionType(optionType);
  };

  // handleOptionTextChange
  const handleOptionTextChange = (e, questionIndex, optionIndex) => {
    const updatedOptions = [...options];
    updatedOptions[questionIndex][optionIndex] = {
      ...updatedOptions[questionIndex][optionIndex],
      text: e.target.value,
    };
    setOptions(updatedOptions);
  };

  // handleOptionImageURLChange
  const handleOptionImageURLChange = (e, questionIndex, optionIndex) => {
    const updatedOptions = [...options];
    updatedOptions[questionIndex][optionIndex] = {
      ...updatedOptions[questionIndex][optionIndex],
      imageURL: e.target.value,
    };
    setOptions(updatedOptions);
  };

  // handleRadioSelect
  const handleRadioSelect = (optionIndex) => {
    const updatedAnsOption = [...ansOption];
    updatedAnsOption[currentQuestionIndex] = optionIndex;
    setAnsOption(updatedAnsOption);
  };

  // handleTimerTypeSelect
  const handleTimerTypeSelect = (timerTypeSelected) => {
    const updatedTimerTypes = [...timerType];
    updatedTimerTypes[currentQuestionIndex] = timerTypeSelected;
    setTimerType(updatedTimerTypes);
  };

  // handleCreateQuizSubmit
  const handleCreateQuizSubmit = async () => {
    const quizData = {
      name: quizName,
      type: quizType,
      questions: questions.map((_, index) => ({
        question: pollQuestion[index],
        options: options[index],
        timer: timerType[index],
      })),
    };

    try {
      // Make an API request to create the quiz
      const response = await axios.post(
        "https://localhost:8000/api/v1/quiz/create-quiz",
        quizData
      );
      console.log("Quiz created:", response.data);
      // Handle successful quiz creation
    } catch (error) {
      console.error("Error creating quiz:", error);
      // Handle errors
    }
  };

  const handleCancelQuizQuestionModal = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.createquiz}>
      <section className={styles.section}>
        <h1 className={styles.img}>QUIZZIE</h1>
        <div className={styles.nav}>
          <h2 className={styles.dash}>Dashboard</h2>
          <h2 className={styles.ana}>Analytics</h2>
          <h2 className={styles.quiz}>Create Quiz</h2>
        </div>
        <h3 className={styles.logout}>Logout</h3>
      </section>
      <main className={styles.main}>
        {firstRender && (
          <div className={styles.createQuizScreen}>
            <div className={styles.modalOverlay}>
              <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.modalQuizNameContent}>
                  <div>
                    <input
                      type="text"
                      placeholder="Quiz name"
                      value={quizName}
                      onChange={(e) => setQuizName(e.target.value)}
                      className={styles.modalQuizNameInput}
                    />
                  </div>
                  <div className={styles.modalQuizTypeContainer}>
                    <div>Quiz Type</div>
                    <label className={styles.modalLabel}>
                      <input
                        type="radio"
                        value="Q & A"
                        checked={quizType === "Q & A"}
                        onChange={() => setQuizType("Q & A")}
                        className={styles.modalRadio}
                      />
                      Q & A
                    </label>
                    <label className={styles.modalLabel}>
                      <input
                        type="radio"
                        value="Poll Type"
                        checked={quizType === "Poll Type"}
                        onChange={() => setQuizType("Poll Type")}
                        className={styles.modalRadio}
                      />
                      Poll Type
                    </label>
                  </div>
                  <div className={styles.buttonContainer}>
                    <button
                      onClick={handleCancelQuizModal}
                      className={styles.cancelModalButton}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleShowQuizQueModal}
                      className={styles.confirmQuizNameButton}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showQuestionModal && (
          <div
            className={styles.questionModalOverlay}
            // onClick={handleCreateQuiz}
          >
            <div
              className={styles.questionModal}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalContent}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className={styles.questionNoContainer}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    {questions.map((question, index) => (
                      <div
                        className={`${styles.questionNo} ${
                          index === currentQuestionIndex
                            ? styles.activeQuestionNumber
                            : ""
                        }`}
                        key={index}
                        onClick={() => handleQuestionNoChange(index)}
                      >
                        {index + 1}
                        {index !== 0 && (
                          <span
                            className={styles.crossBtn}
                            onClick={() => handleDeleteQuestion(index)}
                          >
                            x
                          </span>
                        )}
                      </div>
                    ))}
                    {questions.length < 5 && (
                      <div
                        className={styles.addBtn}
                        onClick={handleAddQuestion}
                      >
                        +
                      </div>
                    )}
                  </div>
                  <p>Max 5 Questions</p>
                </div>
                <div className={styles.questionContent}>
                  <div>
                    <input
                      type="text"
                      placeholder="Poll Question"
                      value={pollQuestion[currentQuestionIndex] || ""}
                      onChange={(e) =>
                        handleQuestionTextChange(e, currentQuestionIndex)
                      }
                      className={styles.pollQuestion}
                    />
                  </div>

                  <div
                    className={styles.pollOptionType}
                    style={{ display: "flex" }}
                  >
                    <div style={{ marginRight: "1.5rem" }}>Option Type:</div>
                    <label className={styles.modalLabel}>
                      <input
                        type="radio"
                        name="optionType"
                        checked={selectedOptionType === 0}
                        onChange={() => handleOptionTypeSelect(0)}
                      />
                      Text
                    </label>
                    <label
                      className={styles.modalLabel}
                      style={{ marginLeft: ".5rem" }}
                    >
                      <input
                        type="radio"
                        name="optionType"
                        checked={selectedOptionType === 1}
                        onChange={() => handleOptionTypeSelect(1)}
                      />
                      Image URL
                    </label>
                    <label
                      className={styles.modalLabel}
                      style={{ marginLeft: ".5rem" }}
                    >
                      <input
                        type="radio"
                        name="optionType"
                        checked={selectedOptionType === 2}
                        onChange={() => handleOptionTypeSelect(2)}
                      />
                      Text and Image URL
                    </label>
                  </div>
                  <div
                    className={styles.pollOptions}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {[0, 1, 2, 3].map((index) => (
                      <div className={styles.modalLabel} key={index}>
                        <input
                          type="radio"
                          name="ansOption"
                          checked={ansOption[currentQuestionIndex] === index}
                          onChange={() => handleRadioSelect(index)}
                        />
                        {selectedOptionType === 0 && (
                          <input
                            type="text"
                            name={`optionText_${index}`}
                            value={options[currentQuestionIndex][index].text}
                            placeholder="Option"
                            onChange={(e) =>
                              handleOptionTextChange(
                                e,
                                currentQuestionIndex,
                                index
                              )
                            }
                            className={`${styles.optionInput} ${
                              ansOption &&
                              ansOption[currentQuestionIndex] === index
                                ? styles.greenBackground
                                : ""
                            }`}
                          />
                        )}
                        {selectedOptionType === 1 && (
                          <input
                            type="url"
                            name={`optionImageURL_${index}`}
                            value={
                              options[currentQuestionIndex][index].imageURL
                            }
                            placeholder="Option Image URL"
                            onChange={(e) =>
                              handleOptionImageURLChange(
                                e,
                                currentQuestionIndex,
                                index
                              )
                            }
                            className={`${styles.optionInput} ${
                              ansOption &&
                              ansOption[currentQuestionIndex] === index
                                ? styles.greenBackground
                                : ""
                            }`}
                          />
                        )}
                        {selectedOptionType === 2 && (
                          <>
                            <input
                              type="text"
                              name={`optionText_${index}`}
                              value={options[currentQuestionIndex][index].text}
                              placeholder="Option"
                              onChange={(e) =>
                                handleOptionTextChange(
                                  e,
                                  currentQuestionIndex,
                                  index
                                )
                              }
                              className={`${styles.optionInput} ${
                                ansOption &&
                                ansOption[currentQuestionIndex] === index
                                  ? styles.greenBackground
                                  : ""
                              }`}
                            />

                            <input
                              type="url"
                              name={`optionImageURL_${index}`}
                              value={
                                options[currentQuestionIndex][index].imageURL
                              }
                              placeholder="Option Image URL"
                              onChange={(e) =>
                                handleOptionImageURLChange(
                                  e,
                                  currentQuestionIndex,
                                  index
                                )
                              }
                              className={`${styles.optionInput} ${
                                ansOption &&
                                ansOption[currentQuestionIndex] === index
                                  ? styles.greenBackground
                                  : ""
                              }`}
                            />
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {quizType !== "Poll Type" && (
                    <div
                      className={styles.timerType}
                      style={{ display: "flex" }}
                    >
                      <div style={{ marginRight: "auto" }}>Timer Type:</div>
                      <label className={styles.modalLabel}>
                        <input
                          type="radio"
                          name="timerType"
                          value="5 Sec"
                          checked={timerType[currentQuestionIndex] === "5 Sec"}
                          onChange={() => handleTimerTypeSelect("5 Sec")}
                        />{" "}
                        5 Sec
                      </label>
                      <label
                        className={styles.modalLabel}
                        style={{ marginLeft: ".5rem" }}
                      >
                        <input
                          type="radio"
                          name="timerType"
                          value="10 Sec"
                          checked={timerType[currentQuestionIndex] === "10 Sec"}
                          onChange={() => handleTimerTypeSelect("10 Sec")}
                        />
                        10 Sec
                      </label>
                      <label
                        className={styles.modalLabel}
                        style={{ marginLeft: ".5rem" }}
                      >
                        <input
                          type="radio"
                          name="timerType"
                          value="OFF"
                          checked={timerType[currentQuestionIndex] === "OFF"}
                          onChange={() => handleTimerTypeSelect("OFF")}
                        />{" "}
                        OFF
                      </label>
                    </div>
                  )}
                  <div className={styles.buttonContainer}>
                    <button
                      onClick={handleCancelQuizQuestionModal}
                      className={styles.cancelModalButton}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCreateQuizSubmit}
                      className={styles.confirmCreateQuizButton}
                    >
                      Create Quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TempCreate;
