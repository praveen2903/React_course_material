import { useRef, useState } from "react";

export default function RateLimitingSearch(){
    const [inputText, setInputText]= useState('');
    const [result, setResult] = useState('')
    const callsRef= useRef([]);


    const rateLimit= (fn, limit, interval)=>{
        return function(...args){
            const now= Date.now();
            callsRef.current=callsRef.current.filter((time)=>{
                return now- time < interval
            });
            if(callsRef.current.length < limit) {
                callsRef.current.push(now);
                fn(...args);
            } else{
                console.log("Rate Limit Exceeded");
            }
        }
    }

    const searchApi= (value)=>{
        setResult("Rate Limited Search: "+ value)
    }

    const rateLimitRef = useRef(null);

    if(!rateLimitRef.current){
        rateLimitRef.current = rateLimit(searchApi,3,10000); //Max 3 calls in 10 seconds
    }

    return (
        <>
            <div> Rate Limit-- allows to control no.of api calls in time frame</div>
            <input type="text" value={inputText} onChange={(e)=>{
                setInputText(e.target.value);
                rateLimitRef.current(e.target.value);
            }}/>
            <p>Text:{inputText}</p>
            <p>Result: {result}</p>
        </>
    )
}