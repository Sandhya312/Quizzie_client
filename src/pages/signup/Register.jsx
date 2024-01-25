import classes from "./signup.module.css";
import Signup from "./Signup";
import Login from "./login";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice/authSlice";

const Register = () => {


   const isRegistered= useSelector(state=>state.auth.isRegistered);
   const dispatch = useDispatch();

   const sigupForm = () =>{
    dispatch(authActions.showSignup());
   }
   const loginForm = () =>{
  dispatch(authActions.showLogin());

   }
   

  return (
    <div className={classes.signupLogin}>
      <div className={classes.register}>
        <h1>Quizzie</h1>

        <div className={classes.registerBtns}>
          <button onClick={sigupForm}>Signup</button>
          <button onClick={loginForm} >Log In</button>
        </div>

          { !isRegistered &&
            <Signup />
          }

          { isRegistered &&
           <Login />
          }

    
      </div>
    </div>
  );
}

export default Register;