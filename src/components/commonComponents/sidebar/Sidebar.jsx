/* eslint-disable no-unused-vars */
// Sidebar.js
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../store/authSlice/authSlice';
import { modalActions } from '../../../store/modalSlice/modalSlice';
import classes from  './sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const [cookie,removeCookie] = useCookies(['token']);
  const [cookieUser,removeCookieUser] = useCookies(['user']);
      
    const dispatch= useDispatch();

    const navigate = useNavigate();
    
    const logouthandler=()=>{
        removeCookie('token');
        removeCookieUser('user');
        dispatch(logoutUser());
         navigate('/');
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
        </li>
        <li>
        <NavLink to='/dashboard/analytics' >Analytics</NavLink>

        </li>
        <li>
        <NavLink to='/dashboard/create-quiz' onClick={ModalHandler} >Create Quiz</NavLink>

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
