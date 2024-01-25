import classes from "./signup.module.css";
import {useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice/authSlice";

const Signup = () => {
   
     const dispatch = useDispatch();

     const signupHandler=(e) =>{
          e.preventDefault();
            dispatch(authActions.register());
     }
  
    
  return (
    <div className={classes.registerForm}>

        <form className={classes.signupForm} onSubmit={signupHandler} action="">
   
             <div>
        <label htmlFor="name">Name</label>
        <input className={classes.incorrect} name="name" type="text" />
             </div>
             <div>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
             </div>
             <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
             </div>
             <div>
        <label htmlFor="confirm_password">Confirm Password</label>
        <input name="confirm_password" type="password" />
             </div>
             <div className={classes.submitBtn}>
        <button type="submit" className={classes.signupBtn}>
          Sign-up
        </button>
             </div>

        </form>
    </div>
  )
}

export default Signup;
