
import   { useState } from "react";

export const useMultiStep = (stepsArr) =>{
    const [currentStepIndex,setCurrentStepIndex]=useState(0);

    const next=()=>{
        
        setCurrentStepIndex((i)=>{
            if(i >= stepsArr.length-1) return i;
            return i+1;
        });
    }

    const prev=()=>{
        setCurrentStepIndex((i)=>{
            if(i <= 0) return i;
            return i-1;
        });
    }

    return {
        currentStepIndex: currentStepIndex,
        currentStep: stepsArr[currentStepIndex],
        next: next,
        prev: prev
    };
    

};