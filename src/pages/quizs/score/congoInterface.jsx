

import trophy from '../../../assets/trophy.png';
import { useSelector } from 'react-redux';
import classes from './congoInterface.module.css';

const CongratualationInterface = () =>{
 
  const score = useSelector(state=>state.quizDb.score);



    return (
       <div className={classes.parent}>
         <div className={classes.score}>
           <div className={classes.congoMsg}>
             <h3>Congrats Quiz is completed</h3>
           </div>
           <div className={classes.tropyImg}>
            <img src={trophy} alt="trophy" />
           </div>
           <div className={classes.scoreValue}>
            <h3>Your Score is <span>0{score}/04</span></h3>
           </div>
        </div>
       </div>
    )
}


export default CongratualationInterface;