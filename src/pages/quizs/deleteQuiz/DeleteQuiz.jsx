

import Modal from '../../../components/commonComponents/modal/modal';
import classes from './deleteQuiz.module.css';
import { useSelector,useDispatch } from "react-redux";
import { modalActions } from "../../../store/modalSlice/modalSlice";
import { deleteQuiz,setCurrentUser,setToken } from '../../../store/quizSlice/quizSlice';
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const DeleteQuiz = () => {

  const dispatch=useDispatch();
   // eslint-disable-next-line no-unused-vars
   const [cookie,setCookie] =useCookies(['token']);
   // eslint-disable-next-line no-unused-vars
   const [cookieUser,setCookieUser] =useCookies(['user']);
   
   useEffect(()=>{
        dispatch(setToken(cookie['token']));
        dispatch(setCurrentUser(cookieUser['user']));
   },[cookie,cookieUser,dispatch]);


  const isOpen = useSelector((state) => state.modal.isOpen);
  const {id} = useParams();
  const navigate = useNavigate();
  console.log("id",id);

  const deleteQuizHandler = () =>{
    dispatch(deleteQuiz({quizId:id,token:cookie['token']}));
    navigate('/dashboard/analytics');

  }

  const onCloseHandler = () => {
    dispatch(modalActions.closeModal());
    navigate('/dashboard/analytics');
  }
    return (
        <div>
          {isOpen && (
            <Modal>
            <h1 className={classes.heading}>Are you confirm you want to delete ?</h1>
             {/* buttons */}
             <div className={classes.buttons}>
              <button className={classes.continueBtn} onClick={deleteQuizHandler} type="submit">Confirm Delete</button>
              <button onClick={onCloseHandler}>Cancel</button>
           
            </div>
          </Modal>
          )
          }

        </div>
    )
};



export default DeleteQuiz;