import { useRef, useState } from "react";

export default function StopWatch(){
    const [time, setTime]= useState(0);
    const timeRef= useRef(null);

    const start=()=>{
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
        <div>StopWatch-- timer storage</div>
        <h1>{time}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        </>
    )
}