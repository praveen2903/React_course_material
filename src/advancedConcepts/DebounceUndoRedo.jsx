import React, { useEffect, useRef, useState } from "react";

const DebounceUndoRedo = () => {
  const [input, setInput] = useState("");
  const [debounceInput, setDebounceInput] = useState("");

  const [enableUndo, setEnableUndo] = useState(false);
  const [enableRedo, setEnableRedo] = useState(false);

  const [enableDebounceUndo, setEnableDebounceUndo] = useState(false);
  const [enableDebounceRedo, setEnableDebounceRedo] = useState(false);

  //Prevents undo/redo operations from new debounce Saves
  const isUndoRedoRef= useRef(false)

  // normal undo/redo
  const undoRef = useRef([]);
  const redoRef = useRef([]);

  // debounce undo/redo
  const debounceUndoRef = useRef([]);
  const debounceRedoRef = useRef([]);

  const timerRef = useRef(null);

  /* ================= NORMAL ================= */

  const updateButtons = () => {
    setEnableUndo(undoRef.current.length > 0);
    setEnableRedo(redoRef.current.length > 0);
    setEnableDebounceUndo(debounceUndoRef.current.length > 1);
    setEnableDebounceRedo(debounceRedoRef.current.length > 0);
  };

  const handleNormalChange = (value) => {
    undoRef.current.push(input);
    redoRef.current = [];
    setInput(value);
    updateButtons();
  };

  const handleUndo = () => {
    if (undoRef.current.length === 0) return;
    redoRef.current.push(input);
    const undoValue = undoRef.current.pop();
    setInput(undoValue);
    updateButtons();
  };

  const handleRedo = () => {
    if (redoRef.current.length === 0) return;
    undoRef.current.push(input);
    const redoValue = redoRef.current.pop();
    setInput(redoValue);
    updateButtons();
  };

  /* ================= DEBOUNCE ================= */

  // stable debounce function
  const debounceRef = useRef((func, delay) => {
    return (...args) => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  });


  const debouncedSave = useRef(
    debounceRef.current((value) => {
      const lastValue =debounceUndoRef.current[debounceUndoRef.current.length - 1];
      if (lastValue !== value.trim()) {   //no need to save if user is idle for long time
        debounceUndoRef.current.push(value);
      }
      debounceRedoRef.current = [];
      updateButtons();
    }, 1000)
  ).current;


  useEffect(() => {
     // skip save during undo/redo
    if (isUndoRedoRef.current) {
        isUndoRedoRef.current = false;
        return;
    }
    debouncedSave(debounceInput);
    return () => clearTimeout(timerRef.current);
  }, [debounceInput]);

  const handleChange = (value) => {
    setDebounceInput(value);
  };

  const handleDebounceUndoPush = () => {
    if (debounceUndoRef.current.length <= 1) return;
    isUndoRedoRef.current = true;
    debounceRedoRef.current.push(debounceInput);
    debounceUndoRef.current.pop();

    const previousValue = debounceUndoRef.current[debounceUndoRef.current.length - 1];
    setDebounceInput(previousValue);
    updateButtons();
  };

  const handleDebounceRedoPush = () => { 
    if (debounceRedoRef.current.length === 0) return;
    isUndoRedoRef.current=true;
    const redoValue = debounceRedoRef.current.pop();

    debounceUndoRef.current.push(redoValue);
    setDebounceInput(redoValue);
    updateButtons();
  };

  return (
    <>
      <div>DebounceUndoRedo</div>

      <div style={{display: "flex", gap: "30px", padding: "20px", alignItems: "flex-start"}}>
        <div style={{ width: "40%" }}>
          <div>Normal UndoRedo</div>

          <div style={{display: "flex", gap: "40px", marginBottom: "16px",}}>
            <button onClick={handleUndo} disabled={!enableUndo}>
              Undo
            </button>

            <button onClick={handleRedo} disabled={!enableRedo}>
              Redo
            </button>
          </div>

          <textarea value={input} onChange={(e) => handleNormalChange(e.target.value)} rows={8} cols={20} 
            placeholder="Enter Data..." style={{padding: "10px", fontSize: "14px",}}/>
        </div>

        <div style={{width: "2px", background: "black",height: "250px",}}/>

        <div style={{ width: "40%" }}>
          <div>Debounced + UndoRedo</div>

          <div style={{display: "flex", gap: "40px", marginBottom: "16px",}}>
            <button onClick={handleDebounceUndoPush} disabled={!enableDebounceUndo}>
              Undo
            </button>

            <button onClick={handleDebounceRedoPush} disabled={!enableDebounceRedo}>
              Redo
            </button>
          </div>

          <textarea value={debounceInput} onChange={(e) =>handleChange(e.target.value)} rows={8} cols={20}
            placeholder="Enter Data..." style={{padding: "10px",fontSize: "14px",}}
          />
        </div>
      </div>
    </>
  );
};

export default DebounceUndoRedo;