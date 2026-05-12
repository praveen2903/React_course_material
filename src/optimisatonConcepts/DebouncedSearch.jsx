import { useEffect, useState } from "react";

export default function DebouncedSearch() {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('')

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

        const handleChange= (value)=>{
            setResult("debounced search "+value)
        }

        const debouncedSearch= debounce(handleChange, 10000)

        if(inputText){
            debouncedSearch(inputText)
        }
    },[inputText])

    const handleChange = (e)=>{
        setInputText(e.target.value)
    }
    return (
        <>
        <code style={{textAlign:'left'}}><pre>{`

-- without ref
const debounce=(fn, delay)=>{
    let timer;

    return function(...args){
        clearTimeout(timer);    //if any remove the timeout --- edge case
        timer = setTimeout(()=>{
            fn(...args)
        },delay)
    }
}

const handleChange= (value)=>{
    setResult("debounced search "+value)
}

const debouncedSearch= debounce(handleChange, 10000)

--with ref
const timerRef = useRef(null);

useEffect(() => {
    const debounce = (func, delay) => {
        return (...args) => {
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const handleSearch = (value) => {
        setResult("searching for " + value);
    };

    const debouncedSearch = debounce(handleSearch, 1000);

    debouncedSearch(text);
}, [text]);

const handleChange = (e) => {
    setText(e.target.value);
};

`}</pre></code>
        <div>Debounce Search-- wait a timeout till user stops like api is searched after time user stops giving input</div>
        <div>current-(10) check console the request comes post stoppage 1 second (uses: Auto save, search, resize)</div>
        <input type="text" value={inputText} onChange={handleChange}/>
        <p> text: {inputText}</p>
        <p> Result: {result}</p>
        </>
    )
}