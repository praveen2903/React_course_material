import React, { useEffect, useRef, useState } from "react";

function TimeoutVsIntervalCompleteGuide() {

  /* =========================================================
     🔥 STATES
     ========================================================= */

  const [count, setCount] = useState(0);

  const [search, setSearch] = useState("");

  const [debounced, setDebounced] = useState("");

  const [seconds, setSeconds] = useState(0);

  const [typingStatus, setTypingStatus] = useState("");

  const intervalRef = useRef(null);

  const timeoutRef = useRef(null);


  /* =========================================================
     🔴 TRAP 1: STALE CLOSURE
     ========================================================= */

  /*
  ❌ BAD
  -------
  setInterval captures OLD state value

  Even if count updates,
  interval callback still remembers old count
  */

  useEffect(() => {

    const staleId = setInterval(() => {

      console.log(
        "❌ stale closure value:",
        count
      );

    }, 4000);

    return () => clearInterval(staleId);

  }, []);


  /*
  ==========================================================
  ✅ FIX USING FUNCTIONAL UPDATE
  ==========================================================
  */

  useEffect(() => {

    const id = setInterval(() => {

      setCount((prev) => prev + 1);

    }, 1000);

    return () => clearInterval(id);

  }, []);



  /* =========================================================
     🔴 TRAP 2: OVERLAPPING INTERVALS
     ========================================================= */

  /*
  ❌ PROBLEM
  -----------
  setInterval does NOT wait for async task

  Example:
  interval every 2 sec
  API takes 5 sec

  → multiple overlapping requests happen
  */

  useEffect(() => {

    const badInterval = setInterval(async () => {

      console.log("❌ Fetch started");

      await new Promise((res) =>
        setTimeout(res, 5000)
      );

      console.log("❌ Fetch completed");

    }, 2000);

    return () => clearInterval(badInterval);

  }, []);



  /*
  ==========================================================
  ✅ FIX USING RECURSIVE setTimeout
  ==========================================================
  */

  useEffect(() => {

    let active = true;

    const safePolling = async () => {

      console.log("✅ Safe fetch started");

      await new Promise((res) =>
        setTimeout(res, 3000)
      );

      console.log("✅ Safe fetch completed");

      if (active) {

        setTimeout(
          safePolling,
          2000
        );

      }
    };

    safePolling();

    return () => {
      active = false;
    };

  }, []);



  /* =========================================================
     🔥 DEBOUNCE EXAMPLE
     ========================================================= */

  /*
  User typing fast:
  -----------------
  a
  ab
  abc

  We only want:
  ---------------
  abc after delay

  Used in:
  ----------
  ✅ search bars
  ✅ autocomplete
  ✅ API optimization
  */

  useEffect(() => {

    timeoutRef.current = setTimeout(() => {

      setDebounced(search);

    }, 700);

    return () => {

      clearTimeout(
        timeoutRef.current
      );

    };

  }, [search]);



  /* =========================================================
     🔥 TYPING INDICATOR
     ========================================================= */

  useEffect(() => {

    if (!search) {

      setTypingStatus("");

      return;
    }

    setTypingStatus("Typing...");

    const id = setTimeout(() => {

      setTypingStatus(
        "Stopped typing"
      );

    }, 1000);

    return () => clearTimeout(id);

  }, [search]);



  /* =========================================================
     🔥 STOPWATCH
     ========================================================= */

  const startTimer = () => {

    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {

      setSeconds((prev) => prev + 1);

    }, 1000);
  };


  const stopTimer = () => {

    clearInterval(
      intervalRef.current
    );

    intervalRef.current = null;
  };


  const resetTimer = () => {

    stopTimer();

    setSeconds(0);
  };



  /* =========================================================
     🔥 STYLES
     ========================================================= */

  const cardStyle = {
    background: "white",
    padding: "24px",
    borderRadius: "16px",
    marginBottom: "25px",
    boxShadow:
      "0 4px 12px rgba(0,0,0,0.08)",
  };

  const codeStyle = {
    background: "#111827",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "10px",
    overflowX: "auto",
    whiteSpace: "pre-wrap",
    lineHeight: "1.8",
    marginTop: "15px",
  };

  const buttonStyle = {
    padding: "10px 18px",
    marginRight: "10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#4f46e5",
    color: "white",
    fontWeight: "bold",
  };


  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "sans-serif",
        background: "#f4f7fb",
        lineHeight: "1.8",
        textAlign:'left'
      }}
    >

      <h1>
        ⏱️ setTimeout vs setInterval
        Complete Interview Guide
      </h1>


      {/* =================================================== */}
      {/* 🔥 MAIN DIFFERENCE */}
      {/* =================================================== */}

      <div style={{...cardStyle, textAlign:'left'}}>

        <h2>
          🔥 Core Difference
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={tableCell}>
                Feature
              </th>

              <th style={tableCell}>
                setTimeout
              </th>

              <th style={tableCell}>
                setInterval
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={tableCell}>
                Runs
              </td>

              <td style={tableCell}>
                Once
              </td>

              <td style={tableCell}>
                Repeatedly
              </td>
            </tr>

            <tr>
              <td style={tableCell}>
                Best For
              </td>

              <td style={tableCell}>
                Delays / debounce
              </td>

              <td style={tableCell}>
                Timers / clocks
              </td>
            </tr>

            <tr>
              <td style={tableCell}>
                Async Safe?
              </td>

              <td style={tableCell}>
                ✅ Yes
              </td>

              <td style={tableCell}>
                ❌ Overlap risk
              </td>
            </tr>
          </tbody>
        </table>

      </div>



      {/* =================================================== */}
      {/* 🔥 COUNTER */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          ✅ Functional Update Fix
        </h2>

        <p>
          Count:
          <strong>
            {" "}
            {count}
          </strong>
        </p>

        <pre style={codeStyle}>
{`setCount((prev) => prev + 1)

WHY?
------
Always gets latest value

Fixes stale closure issue`}
        </pre>

      </div>



      {/* =================================================== */}
      {/* 🔥 STOPWATCH */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          ⏱️ Stopwatch Example
        </h2>

        <h1>
          {seconds}s
        </h1>

        <button
          style={buttonStyle}
          onClick={startTimer}
        >
          Start
        </button>

        <button
          style={buttonStyle}
          onClick={stopTimer}
        >
          Stop
        </button>

        <button
          style={buttonStyle}
          onClick={resetTimer}
        >
          Reset
        </button>

        <pre style={codeStyle}>
{`Used In:
-----------
✅ stopwatches
✅ countdowns
✅ timers
✅ game clocks`}
        </pre>

      </div>



      {/* =================================================== */}
      {/* 🔥 DEBOUNCE */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Debounce Example
        </h2>

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Type fast..."
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "8px",
            border:
              "1px solid #ccc",
          }}
        />

        <p>
          <strong>
            Current:
          </strong>{" "}
          {search}
        </p>

        <p>
          <strong>
            Debounced:
          </strong>{" "}
          {debounced}
        </p>

        <p>
          <strong>
            Status:
          </strong>{" "}
          {typingStatus}
        </p>

        <pre style={codeStyle}>
{`FLOW
------
User typing
    ↓
clear previous timeout
    ↓
wait 700ms
    ↓
update debounced value

Used In:
---------
✅ search bars
✅ API optimization
✅ autocomplete`}
        </pre>

      </div>



      {/* =================================================== */}
      {/* 🔥 EVENT LOOP */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Event Loop Important
        </h2>

        <pre style={codeStyle}>
{`setTimeout(fn,1000)

DOES NOT mean:
---------------
Exactly after 1000ms

Means:
-------
Run AFTER minimum 1000ms
when call stack becomes empty


Example:
---------
Heavy loop blocking UI

for(let i=0;i<999999999;i++){}


Result:
--------
Timeout delayed`}
        </pre>

      </div>



      {/* =================================================== */}
      {/* 🔥 INTERVIEW TRAPS */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Common Interview Traps
        </h2>

        <ul>
          <li>
            ❌ stale closures
          </li>

          <li>
            ❌ missing cleanup
          </li>

          <li>
            ❌ overlapping intervals
          </li>

          <li>
            ❌ memory leaks
          </li>

          <li>
            ❌ assuming exact timing
          </li>

          <li>
            ❌ multiple intervals running
          </li>
        </ul>

      </div>



      {/* =================================================== */}
      {/* 🔥 SAFE POLLING */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Why Recursive setTimeout
          Is Better For APIs
        </h2>

        <pre style={codeStyle}>
{`❌ BAD
--------
setInterval(async()=>{

 await fetch()

},2000)


PROBLEM
---------
New request starts
before previous finishes


✅ GOOD
---------
const poll = async()=>{

 await fetch()

 setTimeout(poll,2000)
}

poll()


BENEFITS
----------
✅ no overlap
✅ safer async control
✅ avoids API flooding`}
        </pre>

      </div>



      {/* =================================================== */}
      {/* 🔥 VISUAL FLOW */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Visual Flow
        </h2>

        <pre style={codeStyle}>
{`setTimeout
-------------
Start
  ↓
Wait delay
  ↓
Run once
  ↓
Finished



setInterval
-------------
Start
  ↓
Wait delay
  ↓
Run
  ↓
Repeat forever
  ↓
Until clearInterval`}
        </pre>

      </div>

    </div>
  );
}


/* =========================================================
   🔥 TABLE STYLE
   ========================================================= */

const tableCell = {
  border: "1px solid #ccc",
  padding: "12px",
  textAlign: "left",
};


export default TimeoutVsIntervalCompleteGuide;