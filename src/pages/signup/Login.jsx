import classes from "./signup.module.css";
import {  useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice/authSlice";
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate=useNavigate();

  const dispatch = useDispatch();

  const loginHandler=(e)=>{
      e.preventDefault()
      dispatch(authActions.login());
      navigate('/dashboard');
  }

  return (
    <div className={classes.registerForm}>
      <form className={classes.signupForm} onSubmit={loginHandler} action="">
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" />
        </div>

        <div className={classes.submitBtn}>
          <button type="submit" className={classes.signupBtn}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
