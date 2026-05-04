import { useRef, useState } from "react"

const UndoRedo = () => {
    const [inputText, setInputText]= useState("");

    const historyRef = useRef([]);
    const redoRef = useRef([]);

    const [enableUndo,setEnableUndo] = useState(false);
    const [enableRedo, setEnableRedo] = useState(false);


    const updateButtons = ()=>{
        setEnableRedo(redoRef.current.length>0)
        setEnableUndo(historyRef.current.length>0)
    }
    const handleChange = (event) =>{
        historyRef.current.push(inputText); // save the current user changes
        redoRef.current= [];              // when user input then there don't be any next right so clean
        setInputText(event.target.value);
        updateButtons();
    } 

    const undoFunction = () =>{
        if(historyRef.current.length === 0){ return;} 

        const lastChanges= historyRef.current.pop();
        redoRef.current.push(inputText);      // store the current changes that could be helped to get next
        setInputText(lastChanges);
        
        updateButtons()
    }

    const redoFunction = () =>{
        if(redoRef.current.length===0){ return;}

        const next = redoRef.current.pop();
        historyRef.current.push(inputText)     //store current changes in the history latest
        setInputText(next);

        updateButtons()
    }

  return (
    <>
        <div> Undo Redo important</div>
        <div style={{display:'flex', gap:'30px'}}>  
            
            {/* cannot use refs directly in the jsx */}
            {/* <button onClick={undoFunction} disabled={historyRef.current.length===0}>Undo</button>
            <button onClick={redoFunction} disabled={redoRef.current.length===0}>Redo</button> */}

            <button onClick={undoFunction} disabled={!enableUndo}>Undo</button>
            <button onClick={redoFunction} disabled={!enableRedo}>Redo</button>


        </div>
        <textarea value={inputText} onChange={handleChange} rows={8} cols={40} placeholder="Enter the Data...."
        style={{padding:'10px', fontSize: '14px'}} />
    </>
  )
}

export default UndoRedo