
import CreateQuizInfo from '../../../components/quizComponents/createQuizComponent/CreateQuizInfo';
import QnAQuiz from '../../../components/quizComponents/qnaQuiz/QnaQuiz.jsx';
import PollQuiz from '../../../components/quizComponents/pollQuiz/PollQuiz';
import ShareLink from '../../../components/quizComponents/linkShare/ShareLink';
import { useSelector,useDispatch } from 'react-redux';
import Modal from '../../../components/commonComponents/modal/modal.jsx';
import { formActions } from '../../../store/multistepSlice/formSlice.js';
import { useState } from 'react';


const CreateQuiz = () => {

  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.modal.isOpen);

  const currentStep = useSelector(state=>state.form.currentStep);
  const quizType = useSelector(state=>state.form.quizType);
  const step1 = useSelector(state=>state.form.step1);
  const step2 = useSelector(state=>state.form.step2);

  //store created form data into this state
  const [formData,setFormData] = useState({});
  const [step1Data,setStep1Data] = useState({});

  //function to fetch data from createquizInfo child component
   const fetchQuizInfo = (data)=>{
      // dispatch(formActions.setStep1(data));
      setStep1Data(data);
      console.log("data",data,step1Data);

   }

//change name accroding to form name
  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    console.log("step1",step1Data);
    console.log("step2",step2);
    dispatch(formActions.nextStep());
    // Accessing form data using FormData
    const formData = new FormData(e.target);
  
    // Logging form data
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}` + " " + "form data");
    });
  };
  

  const stepArr=[<CreateQuizInfo fetchQuizInfo={fetchQuizInfo} key={0} />,<QnAQuiz handleFormSubmit={handleFormSubmit} key={1} />,<ShareLink key={3} />,<PollQuiz key={2} />]

  const Modal_Styles = {
    width: "600px",
    height: "450px",
  };




  return (
    <div>
        {isOpen && (
        <Modal styles={Modal_Styles}>
        {
          currentStep !==2 && (
            <form onSubmit={handleFormSubmit}>
      
            { currentStep==0 && stepArr[currentStep]}
            { (currentStep===1 && quizType===0) && stepArr[1]}
            { (currentStep===1 && quizType===1) && stepArr[3]}
     
        </form>
          )
        }
        { currentStep===2 && stepArr[2]}
       </Modal>
       )}
    </div>
  )
}

 

export default CreateQuiz;
