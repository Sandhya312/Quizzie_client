import classes from "./questionAnalysis.module.css";
import QuestionAnalysisCard from "../../components/quetionAnalysisCard/QuestionAnalysisCard";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getQuizAnalytics,getQuiz } from "../../store/quizSlice/quizSlice";
import { useCookies } from "react-cookie";
import Loader from "../../components/commonComponents/loader/Loader";
import { useParams } from "react-router-dom";

const QuestionAnalysis = () => {

  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [cookie,setCookie] =useCookies(['token']);


  useEffect(()=>{
    dispatch(getQuiz({quizId:id,token:cookie['token']}));
    dispatch(getQuizAnalytics({token:cookie['token'],id}));
  },[])

  const loading = useSelector(state=>state.quizDb.loading);
  const quiz = useSelector(state=>state.quizDb.singleQuiz);


  const {id} = useParams();
  
 if(loading){
    return <Loader/>
 }

  return (
    <div className={classes.questionAnalysis}>
       
      <div style={{
        display:"flex",
        justifyContent:"space-between",
      }}>
      <h1 className={classes.quiz_name}>{quiz.name} Question Analysis</h1>
       <div className={classes.impression_created}>
       <p>Created on : {quiz.createdTime} </p>
       <p>Impressions : {quiz.impressions} </p>
       </div>
      </div>

      <div className={classes.questions}>
      {/* { quiz?.questions?.map((question, i) => {
        return (
          <div key={i} className={classes.question}>
            <h4 className={classes.question_name}>Q{i+1}. {question.title}</h4>

            
             <div className={classes.questions_box}>
                
            {question.analysis.map((question, i) => {
              return <QuestionAnalysisCard question={question} key={i} />;
            })}
            
             </div>
             <hr 
              style={{
                width:"100%",
                strokewidth: "2px",
                 stroke: "#D7D7D7",
                 margin: "10px 0",
              }}
             />
          </div>
        );
      })} */}

{ quiz?.questions?.map((question, i) => {
        return (
          <div key={i} className={classes.question}>
            <h4 className={classes.question_name}>Q{i+1}. {question.title}</h4>

            {/* question analysis section */}
             <div className={classes.questions_box}>




              {/* [{question1 analysis},{quesiton2 analaysis}] */}
               <QuestionAnalysisCard analysis={quiz?.analysis[i]} key={i} />
          
          
            
          
            
             </div>
             <hr 
              style={{
                width:"100%",
                strokewidth: "2px",
                 stroke: "#D7D7D7",
                 margin: "10px 0",
              }}
             />
          </div>
        );
      })}
        </div> 
      
    </div>
  );
};



export default QuestionAnalysis;
