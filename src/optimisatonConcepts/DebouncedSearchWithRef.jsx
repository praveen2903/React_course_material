import { useEffect, useRef, useState } from 'react';

const DebouncedSearchWithRef = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
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

    
    // const handleChange= (e)=>{   -- all done in simple method 
    //     const value = e.target.value;
    //     setText(value);
    //     clearTimeout(timerRef.current);

    //     timerRef.current= setTimeout(()=>{
    //         setResult("searching for "+value);
    //     }, 10000);
    // }

    return (
        <>
            <div>DebouncedSearchWithRef</div>

            <input
                value={text}
                onChange={handleChange}
                placeholder="Debounced search..."
            />
            <p> text: {text}</p>
            <p>Result: {result}</p>
        </>
    );
};

export default DebouncedSearchWithRef;