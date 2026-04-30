import { useState } from "react";

export default function ProgressBar(){
    const [progress, setProgress] = useState(0); //inital


    return (
        <>
        <div> Progress Bar</div>
            <div style={{display:'flex', gap:'20px'}}>
                <button onClick={()=> setProgress(progress+10)} disabled={progress===100}>Increase</button>
                <button onClick={()=>setProgress(progress-10)} disabled={progress===0}> Decrease</button>
            </div>
            Progress is  `${progress}%` since % must be made as string else e could give width: progress 
            <div style={{width:'300px', border:'2px solid'}}>  
                <div style={{width: `${progress}%`, height:'40px',background: 'green'}}></div> 
            </div>
        </>
    )
}