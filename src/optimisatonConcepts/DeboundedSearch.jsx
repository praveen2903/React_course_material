import { useEffect, useState } from "react";

export default function DebouncedSearch() {
    const [inputText, setInputText] = useState('');

    useEffect(()=>{
        const debounce=(fn, delay)=>{
            let timer;
            
            return function(...args){
                clearTimeout(timer);    //if any remove the timeout --- edge case
                timer = setTimeout(()=>{
                    fn(...args)
                },delay)
            }
        }

        const searchApi= (value)=>{
            console.log("Debounce api", value);
        }

        const debouncedSearch= debounce(searchApi, 10000)

        if(inputText){
            debouncedSearch(inputText)
        }
    },[inputText])

    return (
        <>
        <div>Debounce Search-- wait a timeout till user stops like api is searched after time user stops giving input</div>
        <div>current-(10) check console the request comes post stoppage 1 second (uses: Auto save, search, resize)</div>
        <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
        </>
    )
}