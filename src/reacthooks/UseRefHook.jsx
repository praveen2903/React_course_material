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

<pre>
{`
REAL INDUSTRY USE CASE

Amazon Search
      ↓
User Opens Search Modal
      ↓
Automatically Focus Search Input

const searchRef = useRef(null);

useEffect(() => {
  searchRef.current.focus();
}, []);

WHY useRef?

Need direct DOM access.
No re-render required.
`}
</pre>
<pre>
{`Stock Price Dashboard

Previous Price: 100
Current Price : 120

Need comparison:
120 > 100

const prevPriceRef = useRef();
useEffect(() => {
  prevPriceRef.current = price;  // the price value gets updated but the rerender doesn't paint
}, [price]);

WHY useRef?
Store previous value without creating another state variable.`}
</pre>

<pre>
{`API Retry Logic
Attempt 1
Attempt 2
Attempt 3

const retryRef = useRef(0);
retryRef.current++;

WHY useRef?
Count changes internally. UI does not need re-render. Avoid unnecessary renders.`}
</pre>

<pre>
{`OTP Countdown

Send OTP
     ↓
Start Timer
     ↓
Resend Enabled After 30 sec

const timerRef = useRef(null);
timerRef.current = setInterval(...);

WHY useRef?
Store interval id. Survives re-renders.
`}
</pre>
<pre>
{`REAL INDUSTRY USE CASE: 
Click Custom Upload Button
          ↓
Open Hidden Input

const fileRef = useRef(null);
fileRef.current.click();

WHY useRef?
Trigger DOM methods directly.`}
</pre>

<pre>
{`
useState                     useRef

Update Value                Update Value
     ↓                            ↓
Re-render                    No Re-render
     ↓                            ↓
Update UI                    Internal Storage

Examples                     Examples
Theme                        Timer ID
Counter                      Previous Value
User Data                    WebSocket
Cart Count                   DOM Elements
`}
</pre>
<pre>
{`useRef: 
Purpose: Persist mutable values across renders.

Stores:
- DOM Elements
- Timer IDs
- Previous Values
- WebSocket Instances
- Retry Counters
- Debounce Timers

Important Rule:

ref.current changes
        ↓
NO RE-RENDER

state changes
        ↓
RE-RENDER
`}
</pre>
    </div>
  );
}

export default UseRefHook;