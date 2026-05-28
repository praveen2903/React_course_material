import { useEffect, useRef, useState } from "react";

export default function LightsRef(){
    const [currentLights, setCurrentLights] = useState("red");

    const timeRef= useRef(null);  //managing time no need to manipulate dom and store timer 
    const [running, setRunning]= useState(true); 
    //the stopwatch doesn't need useEffect so no additonal state kept interval 
    //but here need to have state to mandate start/stop other approach
    
    useEffect(()=>{
        // console.log(currentLights)
        if(!running) return;

        if(currentLights==='red'){
            timeRef.current= setTimeout(()=>setCurrentLights('green'),10000);
        }
        else if(currentLights === 'green') {
            timeRef.current = setTimeout(()=> setCurrentLights('orange'), 5000);
        }
        else{
            timeRef.current= setTimeout(()=> setCurrentLights('red'),2000)
        }

        return ()=> clearTimeout(timeRef.current)  
//timeout is cleared like ref is ended,and every change in currentLights create new timeout so end current cleanup
    },[currentLights, running]);

    const stop=()=>{
        clearTimeout(timeRef.current);
        timeRef.current= null;
        setRunning(false)
    }
    const start=()=>{
        setRunning(true);
    }
    const getColor=(color)=>{
        return currentLights===color ? color: "#ccc"
    }
    return (
        <>
        <code style={{textAlign: 'left'}}>
            <pre>{`Approach -2 for timeouts here timeout will not start automatically once stopped so keep state
            
const [currentLights, setCurrentLights] = useState("red");

const timeRef= useRef(null);  //managing time no need to manipulate dom and store timer 
const [running, setRunning]= useState(true); 
//the stopwatch doesn't need useEffect so no additonal state kept interval 
//but here need to have state to manage start/stop other approach other approach

useEffect(()=>{
    if(!running) return;
    if(currentLights==='red'){
        timeRef.current= setTimeout(()=>setCurrentLights('green'),10000);
    }
    else if(currentLights === 'green') {
        timeRef.current = setTimeout(()=> setCurrentLights('orange'), 5000);
    }
    else{
        timeRef.current= setTimeout(()=> setCurrentLights('red'),2000)
    }

    return ()=> clearTimeout(timeRef.current)  
//timeout is cleared like ref is ended,and every change in currentLights create new timeout so end current cleanup
},[currentLights, running]);

const stop=()=>{
    clearTimeout(timeRef.current);
    timeRef.current= null;
    setRunning(false)
}
const start=()=>{   //we don't know when to start like the timer sore current light and having timeRef and cleared in it so took other state for start
    setRunning(true);
}
const getColor=(color)=>{
    return currentLights===color ? color: "#ccc"
}`}</pre>
        </code>
        <div>Traffic Lights with ref allows to store interval Id and start/stop is enabled</div>
        <div style={{...styles.container}}>
            <div style={{...styles.container, background: getColor("red")}}>.</div>
            <div style={{...styles.container, background: getColor("orange")}}>.</div>
            <div style={{...styles.container, background: getColor("green")}}>.</div>
        </div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>

        </>
    )
}
    const styles={
        container:{
            width: '100px',
            padding:'10px',
            background:'#333',
            borderRadius:'10px',
            display:'flex',
            flexDirection:'row',
            gap:'14px',
            alignItems:'center',
        },
        light:{
            width:'60px',
            light: '60px',
            borderRadius: '50%'
        }

    }