import { useEffect, useState } from "react";

export default function TrafficLights(){
    const [lights,setLights] = useState("red");

    useEffect(()=>{
        let timer;
        if(lights ==='red'){
            timer= setTimeout(()=>{setLights("green")},5000)
        } else if(lights==='green'){
            timer= setTimeout(()=>setLights('orange'),5000)
        } else{
            timer = setTimeout(()=> setLights('red'), 2000)
        }

        return ()=>clearTimeout(timer)
    },[lights])

    const getColor=(color)=>lights===color? color: '#ccc'
    return (
        <>
         <div>Traffic Lights with normally without ref</div>
        <div style={{...styles.container}}>
            <div style={{...styles.container, background: getColor("red")}}>.</div>
            <div style={{...styles.container, background: getColor("orange")}}>.</div>
            <div style={{...styles.container, background: getColor("green")}}>.</div>
        </div>
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