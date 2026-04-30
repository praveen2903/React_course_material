import { useEffect, useRef, useState } from "react";

export default function TrafficLightsWithRef(){
    const [currentLights, setCurrentLights] = useState("red");

    const timeRef= useRef(0);  //managing time no need to manipulate dom and store timer 
    
    useEffect(()=>{
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
    },[currentLights]);

    const stop=()=>{
        clearTimeout(timeRef.current);
        timeRef.current= null;
    }
    const start=()=>{
        setCurrentLights('red');
    }
    const getColor=(color)=>{
        return currentLights===color ? color: "#ccc"
    }
    return (
        <>
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