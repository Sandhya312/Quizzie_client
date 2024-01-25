// Sidebar.js
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/authSlice/authSlice';
import { modalActions } from '../../../store/modalSlice/modalSlice';
import classes from  './sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
      
    const dispatch= useDispatch();
    
    const logouthandler=()=>{
         dispatch(authActions.logout());
    }

    const ModalHandler=()=>{
      dispatch(modalActions.openModal());
    }
    

  return (
    <div className={classes.sidebar}>
        <div className={classes.logo}>
         <h1>QUIZZIE</h1>
        </div>
      <ul>
        <li>
          <NavLink to='/dashboard' >Dashboard</NavLink>
          {/* <a href="/">Dashboard</a> */}
        </li>
        <li>
        <NavLink to='/dashboard/analytics' >Analytics</NavLink>

          {/* <a href="/">Analytics</a> */}
        </li>
        <li>
        <NavLink to='/dashboard/create-quiz' onClick={ModalHandler} >Create Quiz</NavLink>

          {/* <a href="/">Create Quiz</a> */}
        </li>
      </ul>

      <div className={classes.logout}>
        <hr />
        <button onClick={logouthandler} >Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
