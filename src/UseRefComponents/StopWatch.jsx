import { useRef, useState } from "react";

export default function StopWatch(){
    const [time, setTime]= useState(0);
    const timeRef= useRef(null);

    const start=()=>{  //Grid Lights different approach
        if(timeRef.current) return;

        timeRef.current= setInterval(()=>{     //ref stores the iterval id
            setTime((t)=> t+1)
        },1000)
    }

    const stop=()=> {  //clear the interval and restart the timeref but save the time as of stopwatch
        clearInterval(timeRef.current);
        timeRef.current=null;
    }
    return (
        <>
        <code style={{textAlign:'left'}}>
            <pre>{`Approach -1: useEffect directly no need other state to manage based on timer only stop and stop
            
const [time, setTime]= useState(0);
const timeRef= useRef(null);       //store the interval neatly like must not change the interval accross renders
const start=()=>{                 //Grid Lights different approach
    if(timeRef.current) return;
    timeRef.current= setInterval(()=>{     //ref stores the iterval id
        setTime((t)=> t+1)
    },1000)
}
useEffect(()=>{
    start()
    return ()=> clearInterval(timeRef.current)   //if stopped by force like return clearInterval
},[]);
const stop=()=> {  //clear the interval as stop wantedly and restart the timeref but save the time as of stopwatch
    clearInterval(timeRef.current);
    timeRef.current=null;
}`}</pre>
        </code>
        <div>StopWatch-- timer storage (setInterval)--approach 1st and 2nd is grid lights</div>
        
        <h1>{time}</h1>
        <div style={{display:'flex', gap:'30px'}}>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
        </>
    )
}