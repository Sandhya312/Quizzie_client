

import { useState } from 'react';
import classes from './timer.module.css';
 import { useDispatch } from 'react-redux';
import { formActions } from '../../../store/multistepSlice/formSlice';


const  Timer = () =>{
     
     const dispatch = useDispatch();

     const [selectedTimer,setSelectedTimer] = useState(0);

  const timerClasses = classes.timerValue + " " + classes.selectedTimer;

  
    return (
        <div className={classes.timer}>
        <p>Timer</p>
        <div className={classes.timers}>
          <input
            type="text"
            name={selectedTimer===0? "timer":""}
            className={selectedTimer === 0 ? timerClasses : classes.timerValue}
            id="timer0"
            value="OFF"
            readOnly
            onClick={()=>{
              setSelectedTimer(0);
              dispatch(formActions.setTimer(0))
              
            }
          }
          />
          <input
            type="text"
            className={selectedTimer === 5 ? timerClasses : classes.timerValue}
            id="timer1"
            name={selectedTimer===5? "timer":""}
            value="5 sec"
            readOnly
            onClick={()=>{
              setSelectedTimer(5);
              dispatch(formActions.setTimer(5))
            }
            }
          />
          <input
            type="text"
            className={selectedTimer === 10 ? timerClasses : classes.timerValue}
            id="timer2"
            name={selectedTimer===10? "timer":""}
            value="10 sec"
            readOnly
            onClick={()=>{
              setSelectedTimer(10)
              dispatch(formActions.setTimer(10))
            }}
          />
        </div>
      </div>
    )
}


export default Timer;