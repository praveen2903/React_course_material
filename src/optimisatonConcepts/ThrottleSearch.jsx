import { useRef, useState } from "react";

export default function ThrottleSearch(){
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');

    const lastCallRef= useRef(0);

    const throttle= (fn, limit)=>{
        // let lastCall=0; --------------instead of using these better to use ref to keep track outside of dom and stop rerendering

        return function(...args){
            const now= Date.now();
            if(now-lastCallRef.current >=limit){
                lastCallRef.current=now;
                fn(...args);
            }
        }
    }
    const searchApi= (value)=> setResult("Throttle Search: "+ value)

    const throttleSearch = throttle(searchApi, 3000);  
    
    //arguments will be passed to search api through throttle as you see after delay

    return (
        <>
        <div> Throttle-- Runs every given time, suppose ignore all calls for 10 seconds this is used</div>
        <div> uses: scroll events, mouse movements, resize tracking</div>
        <input type="text" value={inputText} onChange={(e)=>{
            setInputText(e.target.value);
            throttleSearch(e.target.value);
        }} />
        <p>Text: {inputText}</p>
        <p> Result: {result}</p>
        </>
    )
}