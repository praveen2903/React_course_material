import React, {
  useEffect,
  useRef,
  useState,
} from "react";

export default function UseEffectCompleteGuide() {

  /* =========================================================
     🔥 STATES
     ========================================================= */

  const [count, setCount] = useState(0);

  const [show, setShow] = useState(true);

  const [text, setText] = useState("");

  const [debounced, setDebounced] =
    useState("");

  const [windowWidth, setWindowWidth] =
    useState(window.innerWidth);

  const [seconds, setSeconds] =
    useState(0);

  const intervalRef = useRef(null);



  /* =========================================================
     🔥 1️⃣ RUNS ON EVERY RENDER
     ========================================================= */

  /*
  No dependency array
  -------------------
  Runs after EVERY render
  */

  useEffect(() => {

    console.log(
      "🔁 Runs on every render"
    );

  });




  /* =========================================================
     🔥 2️⃣ COMPONENT DID MOUNT
     ========================================================= */

  /*
  Empty dependency array
  -----------------------
  Runs only ONCE after mount
  */

  useEffect(() => {

    console.log(
      "✅ Component Mounted"
    );

    return () => {

      console.log(
        "❌ Component Unmounted"
      );

    };

  }, []);




  /* =========================================================
     🔥 3️⃣ COMPONENT DID UPDATE
     ========================================================= */

  /*
  Runs when dependency changes
  */

  useEffect(() => {

    console.log(
      "📌 Count Updated:",
      count
    );

  }, [count]);




  /* =========================================================
     🔥 4️⃣ SEARCH API EXAMPLE
     ========================================================= */

  useEffect(() => {

    if (text) {

      console.log(
        "🔍 Searching API for:",
        text
      );

    }

  }, [text]);




  /* =========================================================
     🔥 5️⃣ DEBOUNCE EXAMPLE
     ========================================================= */

  /*
  User types quickly
  -------------------
  We wait before API call
  */

  useEffect(() => {

    const id = setTimeout(() => {

      setDebounced(text);

    }, 800);

    return () => {

      clearTimeout(id);

    };

  }, [text]);




  /* =========================================================
     🔥 6️⃣ WINDOW RESIZE LISTENER
     ========================================================= */

  /*
  Real-world cleanup example
  */

  useEffect(() => {

    const handleResize = () => {

      setWindowWidth(
        window.innerWidth
      );

    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);




  /* =========================================================
     🔥 7️⃣ TIMER EXAMPLE
     ========================================================= */

  useEffect(() => {

    intervalRef.current =
      setInterval(() => {

        setSeconds((prev) => prev + 1);

      }, 1000);

    return () => {

      clearInterval(
        intervalRef.current
      );

    };

  }, []);




  /* =========================================================
     🔥 8️⃣ STALE CLOSURE TRAP
     ========================================================= */

  /*
  ❌ Captures old value
  */

  useEffect(() => {

    const id = setInterval(() => {

      console.log(
        "❌ stale closure:",
        count
      );

    }, 5000);

    return () => clearInterval(id);

  }, []);




  /* =========================================================
     🔥 9️⃣ FIX STALE CLOSURE
     ========================================================= */

  useEffect(() => {

    const id = setInterval(() => {

      setCount((prev) => prev);

    }, 5000);

    return () => clearInterval(id);

  }, []);




  /* =========================================================
     🔥 CONDITIONAL RENDER
     ========================================================= */

  if (!show) {

    return (
      <div style={containerStyle}>

        <div style={cardStyle}>

          <h1>
            ❌ Component Removed
          </h1>

          <button
            style={buttonStyle}
            onClick={() => setShow(true)}
          >
            Mount Again
          </button>

        </div>

      </div>
    );
  }




  /* =========================================================
     🔥 MAIN UI
     ========================================================= */

  return (
    <div style={containerStyle}>

      <h1>
        🧠 useEffect Complete Interview Guide
      </h1>



      {/* =================================================== */}
      {/* 🔥 WHAT IS USEEFFECT */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          ✅ What is useEffect?
        </h2>

        <p>
          useEffect handles
          <strong>
            {" "}side effects{" "}
          </strong>
          after render.
        </p>

        <ul>
          <li>
            API calls
          </li>

          <li>
            Timers
          </li>

          <li>
            Event listeners
          </li>

          <li>
            Subscriptions
          </li>

          <li>
            DOM updates
          </li>
        </ul>

        <pre style={codeStyle}>
{`useEffect(()=>{

  // side effect

  return ()=>{

    // cleanup

  }

},[dependencies])`}
        </pre>

      </div>




      {/* =================================================== */}
      {/* 🔥 CURRENT VALUES */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Current State
        </h2>

        <h3>
          Count:
          {" "}
          {count}
        </h3>

        <h3>
          Window Width:
          {" "}
          {windowWidth}px
        </h3>

        <h3>
          Timer:
          {" "}
          {seconds}s
        </h3>

        <h3>
          Debounced Search:
          {" "}
          {debounced}
        </h3>

      </div>




      {/* =================================================== */}
      {/* 🔥 DEPENDENCY ARRAY */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Dependency Array
        </h2>

        <table style={tableStyle}>

          <thead>

            <tr>
              <th style={cellStyle}>
                Syntax
              </th>

              <th style={cellStyle}>
                Behavior
              </th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td style={cellStyle}>
                useEffect(fn)
              </td>

              <td style={cellStyle}>
                Every render
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>
                useEffect(fn, [])
              </td>

              <td style={cellStyle}>
                Mount only
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>
                useEffect(fn, [count])
              </td>

              <td style={cellStyle}>
                When count changes
              </td>
            </tr>

          </tbody>

        </table>

      </div>




      {/* =================================================== */}
      {/* 🔥 COUNT UPDATE */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          📌 Count Update Example
        </h2>

        <button
          style={buttonStyle}
          onClick={() =>
            setCount((prev) => prev + 1)
          }
        >
          Increase Count
        </button>

        <pre style={codeStyle}>
{`useEffect(()=>{

 console.log(count)

},[count])


Runs ONLY when count changes`}
        </pre>

      </div>




      {/* =================================================== */}
      {/* 🔥 SEARCH */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔍 Search + Debounce Example
        </h2>

        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          style={inputStyle}
        />

        <p>
          Current:
          {" "}
          {text}
        </p>

        <p>
          Debounced:
          {" "}
          {debounced}
        </p>

        <pre style={codeStyle}>
{`useEffect(()=>{

 const id = setTimeout(()=>{

   setDebounced(text)

 },500)

 return ()=>clearTimeout(id)

},[text])


WHY CLEANUP?
--------------
Prevents old timeouts`}
        </pre>

      </div>




      {/* =================================================== */}
      {/* 🔥 TIMER */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          ⏱️ Timer Example
        </h2>

        <h1>
          {seconds}s
        </h1>

        <pre style={codeStyle}>
{`useEffect(()=>{

 const id = setInterval(()=>{

   setSeconds(prev=>prev+1)

 },1000)

 return ()=>clearInterval(id)

},[])


IMPORTANT:
-------------
Always cleanup intervals`}
        </pre>

      </div>




      {/* =================================================== */}
      {/* 🔥 WINDOW RESIZE */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          📏 Resize Listener
        </h2>

        <h3>
          Width:
          {" "}
          {windowWidth}px
        </h3>

        <pre style={codeStyle}>
{`window.addEventListener(
 "resize",
 handleResize
)

return ()=>{

 window.removeEventListener(
   "resize",
   handleResize
 )

}`}</pre>

      </div>




      {/* =================================================== */}
      {/* 🔥 CLEANUP */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Cleanup Function
        </h2>

        <pre style={codeStyle}>
{`return ()=>{

 // cleanup here

}


Cleanup runs:
---------------
✅ before next effect
✅ on unmount


Used For:
-----------
✅ clearInterval
✅ clearTimeout
✅ removeEventListener
✅ unsubscribe websocket`}
        </pre>

      </div>




      {/* =================================================== */}
      {/* 🔥 COMMON MISTAKES */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          ❌ Common Mistakes
        </h2>

        <ul>
          <li>
            Missing dependencies
          </li>

          <li>
            Infinite loops
          </li>

          <li>
            Forgetting cleanup
          </li>

          <li>
            Stale closures
          </li>

          <li>
            Heavy logic inside effect
          </li>

          <li>
            Updating state unnecessarily
          </li>
        </ul>

      </div>




      {/* =================================================== */}
      {/* 🔥 INFINITE LOOP */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Infinite Loop Trap
        </h2>

        <pre style={codeStyle}>
{`❌ BAD
---------
useEffect(()=>{

 setCount(count+1)

},[count])


WHY?
------
count updates
→ effect reruns
→ count updates again
→ infinite loop`}
        </pre>

      </div>




      {/* =================================================== */}
      {/* 🔥 LIFECYCLE MAPPING */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Class Lifecycle Mapping
        </h2>

        <table style={tableStyle}>

          <thead>

            <tr>

              <th style={cellStyle}>
                Class
              </th>

              <th style={cellStyle}>
                useEffect
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td style={cellStyle}>
                componentDidMount
              </td>

              <td style={cellStyle}>
                useEffect(fn, [])
              </td>

            </tr>

            <tr>

              <td style={cellStyle}>
                componentDidUpdate
              </td>

              <td style={cellStyle}>
                useEffect(fn, [dep])
              </td>

            </tr>

            <tr>

              <td style={cellStyle}>
                componentWillUnmount
              </td>

              <td style={cellStyle}>
                cleanup return
              </td>

            </tr>

          </tbody>

        </table>

      </div>




      {/* =================================================== */}
      {/* 🔥 UNMOUNT */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          ❌ Unmount Component
        </h2>

        <button
          style={buttonStyle}
          onClick={() => setShow(false)}
        >
          Unmount
        </button>

      </div>




      {/* =================================================== */}
      {/* 🔥 INTERVIEW TAKEAWAYS */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Interview Takeaways
        </h2>

        <ul>

          <li>
            useEffect runs AFTER render
          </li>

          <li>
            Cleanup prevents memory leaks
          </li>

          <li>
            Dependency array controls reruns
          </li>

          <li>
            Empty dependency array = mount once
          </li>

          <li>
            Missing dependency may create stale values
          </li>

          <li>
            Effects should stay lightweight
          </li>

        </ul>

      </div>

    </div>
  );
}



/* =========================================================
   🔥 STYLES
   ========================================================= */

const containerStyle = {
  padding: "30px",
  textAlign:'left',
  maxWidth: "1300px",
  margin: "0 auto",
  background: "#f4f7fb",
  fontFamily: "sans-serif",
  lineHeight: "1.8",
  textAlign: "left",
};

const cardStyle = {
  background: "white",
  padding: "24px",
  borderRadius: "18px",
  marginBottom: "28px",
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
  border: "none",
  borderRadius: "8px",
  background: "#4f46e5",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

const inputStyle = {
  padding: "12px",
  width: "100%",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const cellStyle = {
  border: "1px solid #ccc",
  padding: "12px",
  textAlign: "left",
};