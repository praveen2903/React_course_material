import { useEffect, useState } from "react";

export default function DigitalClock(){
    const [timer, setTimer] = useState(new Date());

    useEffect(()=>{
        const timer= setInterval(()=>{
            setTimer(new Date());
        },1000)
        return ()=>clearInterval(timer);
    },[])

    return (
        <>
        <div> No Ref but clean up action look at the interval clean up action</div>
        <div>{timer.toLocaleTimeString()}</div>
        </>
    )

}