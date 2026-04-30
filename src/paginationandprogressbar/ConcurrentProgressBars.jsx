import { useEffect, useState } from "react";

export default function ConcurrentProgressBars(){
    const [progressBars, setProgressBars] = useState([0,0,0]);
    
    useEffect(()=>{
        const timer = setInterval(()=>{
            setProgressBars((prevResults)=>
                prevResults.map(bar=> (bar<100 ? bar+10: 100))
            )
        }, 500);

        return (()=> clearInterval(timer))
    },[])

    return (
        <>
            <div> Concurrent progress Bars</div>
            {
                progressBars.map((bar,index)=>
                    <progress value={bar} key={index} max='100'/>
                )
            }
        </>
    )
}