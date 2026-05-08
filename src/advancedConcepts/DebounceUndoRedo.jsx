import React, { useEffect, useRef, useState } from "react";

const DebounceUndoRedo = () => {
    const [input,setInput]= useState('');
    const [debounceInput, setDebounceInput]= useState('');

    const [enableUndo, setEnableUndo] = useState(false);
    const [enableRedo, setEnableRedo] = useState(false);

    const [enableDebounceUndo, setDebounceEnableUndo] = useState(false);
    const [enableDebounceRedo, setDebounceEnableRedo] = useState(false);

    const undoRef = useRef([]); //stores history
    const redoRef = useRef([]); //stores undo changes like changes done undone

    const debounceUndoRef = useRef([]);
    const debounceRedoRef = useRef([]);
        
    const timerRef = useRef(null);


     const updateButtons = ()=>{
        setEnableRedo(redoRef.current.length>0);
        setEnableUndo(undoRef.current.length>0);
        setDebounceEnableRedo(debounceRedoRef.current.length>0);
        setDebounceEnableUndo(debounceRedoRef.current.length>0);
    }

    const handleNormalChange = (value) =>{
        undoRef.current.push(input); 
        redoRef.current=[]; 
        setInput(value);
        updateButtons()
    }

    const handleUndo = () =>{
        if(undoRef.current.length===0) return;
        redoRef.current.push(input)
        const undoValue = undoRef.current.pop();
        setInput(undoValue);
        updateButtons()
    }

    const handleRedo = () =>{
        if(redoRef.current.length ===0) return;
        undoRef.current.push(input);
        const redoValue = redoRef.current.pop();
        setInput(redoValue)
        updateButtons()
    }

    /*
    DEBOUNCE FUNCTION
    Created once using useRef
    avoids recreation every render
    */
    const debounceRef = useRef(
    (func, delay) => {
        return (...args) => {
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            func(...args);
        }, delay);
        };
    }
    );

    const debouncedSave = useRef(
    debounceRef.current((value) => {
        console.log("Debounced Value:", value);
        debounceUndoRef.current.push(value);
        debounceRedoRef.current = [];
    }, 1000)
    ).current;

    /*
    whenever input changes
    debounce triggers
    */
    useEffect(() => {
    if (!debounceInput.trim()) return;

    debouncedSave(debounceInput);

    return () => clearTimeout(timerRef.current);
    }, [debounceInput, debouncedSave]);

    const handleChange = (e) => {
    setDebounceInput(e.target.value);
    };

    const handleDebounceUndoPush = () => {
    if (debounceUndoRef.current.length <= 1) return;

    // current value -> redo
    debounceRedoRef.current.push(debounceInput);

    debounceUndoRef.current.pop();
    const previous =debounceUndoRef.current[debounceUndoRef.current.length - 1];
    setDebounceInput(previous);
    };

    const handleDebounceRedoPush = () => {
    if (debounceRedoRef.current.length === 0) return;

    const redoValue = debounceRedoRef.current.pop();

    debounceUndoRef.current.push(redoValue);

    setDebounceInput(redoValue);
    };

    return (
        <>
        <div>DebounceUndoRedo</div>
       <div style={{display: "flex",gap: "30px",padding: "20px",alignItems: "flex-start",}}>
        <div style={{width: '40%'}}>
            <div>Normal UndoRedo</div>
            <div style={{display:'flex', gap: '40px'}}>
                <button onClick= {handleUndo} disabled={!enableUndo}>Undo</button>
                <button onClick= {handleRedo} disabled={!enableRedo}>Redo</button>
            </div>
            <textarea value={input} onChange={(e)=> handleNormalChange(e.target.value)} rows={8} cols={20} placeholder="Enter the Data...."
                style={{padding:'10px', fontSize: '14px'}} />
        </div>
        <div style={{width: "2px",background: "black",height: "400px",}}/>
        <div style={{width: '40%'}}>
            <div> Debounced + Undo +Redo</div>
            <div style={{display: 'flex', gap: '40px'}}>
                <button onClick={handleDebounceUndoPush} disabled={!enableDebounceUndo}>Undo</button>   
                <button onClick={handleDebounceRedoPush} disabled={!enableDebounceRedo}>Redo</button>             
            </div>
            <textarea value={debounceInput} handleChange={(e)=> handleChange(e.target.value)}
            rows={8} cols={20} style={{padding:'12px', fontSize:'12px'}}/>
        </div>
      </div> 
    </>
    );
};

export default DebounceUndoRedo;