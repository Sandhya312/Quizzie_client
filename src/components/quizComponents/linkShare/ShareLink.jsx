/* eslint-disable no-unused-vars */

import classes from "./shareLink.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from "react-redux";
import { modalActions } from "../../../store/modalSlice/modalSlice";
import { formActions } from "../../../store/multistepSlice/formSlice";
import PropTypes from 'prop-types';
import Loader from "../../commonComponents/loader/Loader";
import { useNavigate } from "react-router-dom";

const ShareLink = ({quizId}) => {

  const navigate = useNavigate();
  const dispatch=useDispatch();
  const loading = useSelector(state=>state.quizDb.loading);

  const onCloseHandler = () => {
    dispatch(modalActions.closeModal());
     dispatch(formActions.resetStep());
     navigate("/dashboard");

     
  }
    const[isCopied,setIsCopied]= useState(false);
    // eslint-disable-next-line no-unused-vars
    const [text,setText] = useState('https://quiizzie.netlify.app/quiz/65b75fe9db6852bf611c3a75');
    
    const notify = () => toast( "✔️Link Copied!",{
        position:"top-right",
       autoClose:2000,
    });

    const handleCopy = () =>{
        setIsCopied(true);
       
        notify();
        setTimeout(()=>{
            setIsCopied(false);
        },2000)
    }

    if(loading){
      return <Loader />
    }
 

  return (
    <div>
        {/* copied text dummy */}
     
          {/* cross btn */}
          <div className={classes.cross_btn_div}>
            <button type="button"  onClick={onCloseHandler} className={classes.crossBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
              >
                <path
                  d="M31.2139 20.7307L11.3076 40.637M11.3076 20.7307L31.2139 40.637"
                  stroke="#474444"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

            {/* share link body */}
            <div className={classes.share_link_body}>
                <h3>Congrats your Quiz is Published!</h3>
                <input type="text" placeholder="Your link is here" name="quiz_link" readOnly value={`https://quiizzie.netlify.app/quiz/${quizId}`} />
            </div>

            {/* share link button*/}
          <CopyToClipboard text={`https://quiizzie.netlify.app/quiz/${quizId}`} onCopy={handleCopy} >
          <div className={classes.share_link_btn_div}>
                <button type="button" className={classes.share_link_btn} >Share Link</button>
            </div>
          </CopyToClipboard>
          <ToastContainer />
          
    </div>
  );
};


ShareLink.propTypes = {
  quizId:PropTypes.string.isRequired,
}



export default ShareLink;
