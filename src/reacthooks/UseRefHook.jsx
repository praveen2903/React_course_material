import React, { useEffect, useRef, useState } from "react";

function UseRefHook() {
  //undefined like undefined ref-- no suitable but can use
  const boxRef = useRef() 
  // DOM reference  -so inital value is null
  const inputRef = useRef(null);
  // number  - refering count so 0-- like for timer
  const countRef = useRef(0);
  // string  -refers string so string 
  const textRef = useRef("");
  // array
  const arrayRef = useRef([]);

  // object
  const userRef = useRef({
    name: "Praveen",
    theme: "dark",
  });

  // timer / interval id
  const timerRef = useRef(null);

  // previous value tracking
  const prevCountRef = useRef(null);

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const focusInput = () => {
    inputRef.current.focus();
  };


  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

//inital value is null
  const startTimer = () => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      console.log("Running timer...");
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  /* =========================================================
     🔴 TRAP 1:
     useRef update DOES NOT cause re-render
     ========================================================= */

  const incrementRef = () => {
    countRef.current += 1;

    console.log("Ref Count:", countRef.current);

    // UI will NOT update automatically --need to push it in a state
  };

  /* =========================================================
     🔴 TRAP 2:
     Mutating objects inside ref does not re-render
     ========================================================= */

  const changeTheme = () => {
    userRef.current.theme = "light";

    console.log(userRef.current);
  };

  /* =========================================================
     🔴 TRAP 3:
     Wrong DOM access before render
     ========================================================= */

  useEffect(() => {
    console.log("Input Ref:", inputRef.current);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧠 useRef -- Create a mutable reference object that prevent component across re-renders</h2>

      {/* =====================================================
          DOM ACCESS
         ===================================================== */}

      <h3>✅ DOM Access</h3>

      <input
        ref={inputRef}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          textRef.current = e.target.value;
        }}
        placeholder="Type here..."
      />

      <button onClick={focusInput} style={{ marginLeft: "10px" }}>
        Focus Input
      </button>

      {/* =====================================================
          PREVIOUS VALUE
         ===================================================== */}

      <h3>✅ Previous Value Tracking</h3>

      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      {/* =====================================================
          REF DOES NOT RE-RENDER
         ===================================================== */}

      <h3>🔴 Ref Updates Don't Re-render</h3>

      <p>Ref Count (check console): {countRef.current}</p>

      <button onClick={incrementRef}>
        Increment Ref
      </button>

      {/* =====================================================
          OBJECT REF
         ===================================================== */}

      <h3>🔴 Object Mutation Inside Ref</h3>

      <p>User Theme: {userRef.current.theme}</p>

      <button onClick={changeTheme}>
        Change Theme
      </button>

      {/* =====================================================
          TIMER
         ===================================================== */}

      <h3>✅ Store Interval ID</h3>

      <button onClick={startTimer}>
        Start Timer
      </button>

      <button onClick={stopTimer} style={{ marginLeft: "10px" }}>
        Stop Timer
      </button>

      {/* =====================================================
          THEORY
         ===================================================== */}
<div style={{textAlign: 'left'}}>
      <h3>🔥 useRef Rules</h3>

      <ul>
        <li>useRef persists value across renders</li>
        <li>Updating ref does NOT trigger re-render</li>
        <li>Accessible via .current</li>
        <li>Useful for DOM access and mutable values</li>
      </ul>
  
      <h3>🔥 Common Interview Traps</h3>

      <ul>
        <li>❌ Changing ref does not update UI</li>
        <li>❌ Mutating object inside ref won't re-render</li>
        <li>❌ Accessing ref before mount may be null</li>
        <li>❌ useRef is NOT reactive like state</li>
      </ul>

      <h3>💼 Real Use Cases</h3>

      <ul>
        <li>Focus input fields</li>
        <li>Store timer/interval IDs</li>
        <li>Track previous values</li>
        <li>Avoid re-render for mutable values</li>
        <li>Access DOM elements directly</li>
      </ul>
    </div>
    </div>
  );
}

export default UseRefHook;