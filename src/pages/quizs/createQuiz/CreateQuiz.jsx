/* eslint-disable no-unused-vars */

import CreateQuizInfo from "../../../components/quizComponents/createQuizComponent/CreateQuizInfo";
import QnAQuiz from "../../../components/quizComponents/qnaQuiz/QnaQuiz.jsx";
import PollQuiz from "../../../components/quizComponents/pollQuiz/PollQuiz";
import ShareLink from "../../../components/quizComponents/linkShare/ShareLink";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../../components/commonComponents/modal/modal.jsx";
import { formActions } from "../../../store/multistepSlice/formSlice.js";
import { createQuiz } from "../../../store/quizSlice/quizSlice.js";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Loader from "../../../components/commonComponents/loader/Loader.jsx";

const CreateQuiz = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["token"]);
  const [cookieUser, setCookieUser] = useCookies(["user"]);
  const [quizId, setQuizId] = useState("65b75fe9db6852bf611c3a75");

  const isOpen = useSelector((state) => state.modal.isOpen);
 const loading = useSelector((state)=>state.quizDb.loading)
  const currentStep = useSelector((state) => state.form.currentStep);
  const quizType = useSelector((state) => state.form.quizType);


  const [formData, setFormData] = useState({
    name: "",
    quizType: 0,
    impressions: 0,
    createdBy: cookieUser.user,
    timer: 5,
    questions: [
      {
        title: "",
        type: 0,
        analysis: [{}, {}, {}],
        options: [
          {
            value: [""],
            correctOpt: false,
          },
          {
            value: [""],
            correctOpt: false,
          },
          {
            value: [""],
            correctOpt: false,
          },
          {
            value: [""],
            correctOpt: false,
          },
        ],
      },
    ],
  });

  const [questionInstance, setQuestionInstance] = useState(0);

  const [step1Data, setStep1Data] = useState({});

  //function to fetch data from createquizInfo child component
  const fetchQuizInfo = (data) => {
    setFormData((prev) => {
      prev.name = data.quizName;
      prev.quizType=data.quizType;
      return prev;
    });
    setStep1Data(data);
  };

  //function to add new quesitons
  const addQuestion = (data) => {
    setFormData((prev) => {
      prev.questions[questionInstance] = data;
      return prev;
    });
  };

  //change name accroding to form name
  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(formActions.nextStep());
    // Accessing form data using FormData
    const formDataa = new FormData(e.target);

    // Logging form data
    formDataa.forEach((value, key) => {
      if (key === "timer") {
        if(value==="OFF"){
          setFormData((prev) => {
            prev.timer = 0;
            prev.createdBy = cookieUser.user;
            return prev;
          });
        }
       if(value==="5 sec"){
        setFormData((prev) => {
          prev.timer = 5;
          prev.createdBy = cookieUser.user;
          return prev;
        });
       }

       if(value==="10 sec"){
        setFormData((prev) => {
          prev.timer = 10;
          prev.createdBy = cookieUser.user;
          return prev;
        });
       }
      }
    });

    dispatch(createQuiz({ quiz: formData, token: cookies.token })).then((res)=>{
      setQuizId(res.payload._id);
    })
  };

  const stepArr = [
    <CreateQuizInfo fetchQuizInfo={fetchQuizInfo} key={0} />,
    <QnAQuiz
      questions={formData.questions}
      questionInstance={questionInstance}
      addQuestion={addQuestion}
      setQuestionInstance={setQuestionInstance}
      handleFormSubmit={handleFormSubmit}
      key={1}
    />,
    <ShareLink key={3} quizId={quizId} />,
    <PollQuiz  questions={formData.questions}
    questionInstance={questionInstance}
    addQuestion={addQuestion}
    setQuestionInstance={setQuestionInstance}
    handleFormSubmit={handleFormSubmit}
    key={2} />,
  ];

  const Modal_Styles = {
    width: "600px",
    height: "450px",
  };

  return (
    <div>
      {isOpen && (
        <Modal styles={Modal_Styles}>
          {currentStep !== 2 && (
            <form
              style={{
                height: "100%",
              }}
              onSubmit={handleFormSubmit}
            >
              {currentStep == 0 && stepArr[currentStep]}
              {currentStep === 1 && quizType === 0 && stepArr[1]}
              {currentStep === 1 && quizType === 1 && stepArr[3]}
            </form>
          )}
          {loading && <Loader/>}
         
          {!loading &&  currentStep === 2 && stepArr[2]}
        </Modal>
      )}
    </div>
  );
};

export default CreateQuiz;
