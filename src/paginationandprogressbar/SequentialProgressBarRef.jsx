import { useEffect, useRef, useState } from "react";

export default function SequentialProgressBarRef() {
    const [progressBars, setProgressBars] = useState([0, 0, 0]);
    const indexRef = useRef(0);
    const timeRef = useRef(null);

    const startTimer = ()=>{
        timeRef.current= setInterval(() => {
            setProgressBars(prev => {
                let index = indexRef.current;  
                //when stop/start store which index currently I am in


                // if(index >= prev.length){     --- continuous timer repositioning timer ***
                //     indexRef.current=0;
                //     return prev.map(()=>0)
                // }

                if (index >= prev.length) {  
            //stop the timer and update the prev with the last copy value -- stop the interval and update progress bar
                    clearInterval(timeRef.current);
                    return prev;
                }

                const copy = [...prev];

                if (copy[index] === 100) {  // update the data to map this return updates the prev mandatory
                    indexRef.current += 1;
                    return copy;
                }
                copy[index] = Math.min(copy[index] + 10, 100);

                return copy;
            });
        }, 500);
    } 

    useEffect(() => {
        startTimer();
        return () => clearInterval(timeRef.current);
    }, []);

    const reset=()=>{
        clearInterval(timeRef.current)
        indexRef.current=0; 
        setProgressBars([0,0,0])
        startTimer();
    }
    
    return (
        <>
            <div>Sequential ProgressBar with Ref  --same approach for the lights problem too******</div>
<code style={{textAlign:'left', minWidth: '500px'}}>
    <pre>
{` start and stop timer too and proper progressbar indexing

const [progressBars, setProgressBars]= useState(Array.from(3).fill(0)) // currently 3 arrays of values 0
const timeRef = useRef(null);
const indexRef = useRef(0);
const startTimer = ()=>{
    timeRef.current= setInterval(() => {
        setProgressBars(prev => {
            let index = indexRef.current;  
            //when stop/start store which index currently I am in


            if (index >= prev.length) {  
                //stop the timer and update the prev with the last copy value -- stop the interval and update progress bar
                clearInterval(timeRef.current);
                return prev;
            }
            const copy = [...prev];
            if (copy[index] === 100) {  // like when value becomes 100 for progress bar go to next index
                indexRef.current += 1;
                return copy;
            }
            copy[index] = Math.min(copy[index] + 10, 100); //increase by 10 till 100 and jump to next index
            return copy;
        });
    }, 500);
} 

useEffect(() => {
    startTimer();
    return () => clearInterval(timeRef.current);
}, []);

const reset=()=>{
    clearInterval(timeRef.current)
    indexRef.current=0; 
    setProgressBars([0,0,0])
    startTimer();
}


return (
<>
    {
        progressBars.map((progress, index)=>(
            <progress key={index} value={progress} max={100}/>    
        ))
    }
</>)

`}
    </pre>
</code>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
            {progressBars.map((progress, index) => (
                <progress value={progress} key={index} max="100" />
            ))}
        </>
    );
}