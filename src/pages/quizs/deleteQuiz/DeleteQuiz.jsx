

import Modal from '../../../components/commonComponents/modal/modal';
import classes from './deleteQuiz.module.css';
import { useSelector,useDispatch } from "react-redux";
import { modalActions } from "../../../store/modalSlice/modalSlice";

const DeleteQuiz = () => {
  const dispatch=useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const onCloseHandler = () => {
    dispatch(modalActions.closeModal());
  }
    return (
        <div>
          {isOpen && (
            <Modal>
            <h1 className={classes.heading}>Are you confirm you want to delete ?</h1>
             {/* buttons */}
             <div className={classes.buttons}>
              <button className={classes.continueBtn} type="submit">Confirm Delete</button>
              <button onClick={onCloseHandler}>Cancel</button>
           
            </div>
          </Modal>
          )
          }

        </div>
    )
};



export default DeleteQuiz;