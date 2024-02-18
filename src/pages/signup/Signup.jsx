/* eslint-disable no-unused-vars */
import classes from "./signup.module.css";
import { useState} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { signupUser } from "../../store/authSlice/authSlice";
import Loader from "../../components/commonComponents/loader/Loader";



const Signup = () => {
  const dispatch = useDispatch();

  const [signupFormData, setSignupFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});


  const errMsg = useSelector(state=>state.auth.error);
  let loading = useSelector(state=>state.auth.loading);
  

  const signupHandler = async(e) => {
     e.preventDefault();
   
     dispatch(signupUser(signupFormData));
    

   };
   
   
   if(loading){
    return <Loader/>
   }

  

  return (
    <div className={classes.registerForm}>
      {errMsg && <h5>{errMsg}</h5>}
        <form className={classes.signupForm} onSubmit={signupHandler}>
          <div>
            <label htmlFor="user">Name</label>
            <input
              className={errors.name ? classes.incorrect : ""}
              value={signupFormData.name}
              required
              placeholder={errors.name && errors.name}
              onChange={(e) => setSignupFormData({ ...signupFormData, name: e.target.value })}
              id="user"
              name="name"
              type="text"
            />
          </div>
  
          <div>
    <label htmlFor="emailaddrss">Email</label>
    <input
      name="email"
      id="emailaddrss"
      value={signupFormData.email}
      required
      className={errors.email ? classes.incorrect : ""}
      placeholder={errors.email && errors.email}
      onChange={(e) => setSignupFormData({ ...signupFormData, email: e.target.value })}
      type="email"
    />
  </div>
          <div>
            <label htmlFor="passwrd">Password</label>
            <input
              name="password"
              id="passwrd"
              required
              className={errors.name ? classes.incorrect : ""}
              placeholder={errors.password && errors.password}
              value={signupFormData.password}
              onChange={(e) => setSignupFormData({ ...signupFormData, password: e.target.value })}
              
              type="password"
            />
  
          </div>
  
          <div>
            <label htmlFor="confrm_pass">Confirm Password</label>
            <input
              name="confirm_password"
              id="confrm_pass"
              required
              value={signupFormData.confirmPassword}
              className={errors.name ? classes.incorrect : ""}
              placeholder={errors.confirmPassword && errors.confirmPassword}
              onChange={(e) =>
                setSignupFormData({ ...signupFormData, confirmPassword: e.target.value })
              }
              
              type="password"
            />
           
          </div>
  
          <div className={classes.submitBtn}>
            <button type="submit" className={classes.signupBtn}>
              Sign-up
            </button>
          </div>
        </form>
      </div>
  );
};

export default Signup;
