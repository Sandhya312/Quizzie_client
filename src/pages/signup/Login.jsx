import classes from "./signup.module.css";
import { useDispatch ,useSelector} from "react-redux";
import { authActions } from "../../store/authSlice/authSlice";
import {loginUser} from '../../store/authSlice/authSlice';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Loader from "../../components/commonComponents/loader/Loader";

const Login = () => {

  const navigate=useNavigate();

  const [cookie,setCookie] =useCookies(['token']);
  const [cookieUser,setCookieUser] =useCookies(['user']);

  const dispatch = useDispatch();
  const errMsg = useSelector(state=>state.auth.error);
  const loading = useSelector(state=>state.auth.loading);

  const loginHandler=async(e)=>{
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      
      try{
        dispatch(loginUser({email:email,password:password}))
        .then((res)=>{
          const token = res.payload.token;
          const user = res.payload.user;
          
          dispatch(authActions.login());
          if(cookie['token']==='undefined' || !cookie['token']){
            setCookie('token',token,{path:'/',maxAge: 3600}, 
            
            );
    
         }

          if(cookieUser['user']==='undefined' || !cookieUser['user']){
            setCookieUser('user',user,{path:'/', maxAge: 3600});
          }

         navigate('/dashboard');
        })
       
      }catch(err){
        alert(err);
      }
     
  }

  if(loading){
    return <Loader />
   
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
      {errMsg && <p>{errMsg}</p>}
    </div>
  );
};

export default Login;
