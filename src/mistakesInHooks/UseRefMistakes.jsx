import React, {
  useEffect,
  useRef,
  useState,
} from "react";

function UseRefMistakes() {
  const [count, setCount] = useState(0);

  const renderCountRef = useRef(0);

  const inputRef = useRef(null);

  const previousValueRef = useRef("");

  const timerRef = useRef(null);

  const dragItemRef = useRef(null);

  const boxRef = useRef(null);

  const gridRefs = useRef([]);

  const intervalRef = useRef(null);

  const mutableCounterRef = useRef(0);

  const [text, setText] = useState("");

  const [previousText, setPreviousText] =
    useState("");

  const [boxInfo, setBoxInfo] = useState({});

  renderCountRef.current++;

  useEffect(() => {
    previousValueRef.current = text;
  }, [text]);

  const sectionStyle = {
    marginBottom: "50px",
    textAlign:'left'
  };

  const cardStyle = {
    background: "white",
    borderRadius: "18px",
    padding: "25px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    marginBottom: "25px",
  };

  const codeStyle = {
    background: "#111827",
    color: "#00ff95",
    textAlign: 'left',
    padding: "16px",
    borderRadius: "12px",
    overflowX: "auto",
    whiteSpace: "pre-wrap",
    marginTop: "15px",
    fontSize: "14px",
    lineHeight: "1.8",
  };

  const descStyle = {
    background: "#eef6ff",
    borderLeft: "6px solid #2563eb",
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "20px",
  };

  const warningStyle = {
    background: "#fff3cd",
    borderLeft: "6px solid orange",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "15px",
  };

  const successStyle = {
    background: "#e8f5e9",
    borderLeft: "6px solid green",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "15px",
  };

  const demoStyle = {
    border: "2px dashed #bbb",
    borderRadius: "12px",
    padding: "20px",
    background: "#fafafa",
    marginTop: "15px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(420px,1fr))",
    gap: "25px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  };

  const cellStyle = {
    border: "1px solid #ccc",
    padding: "12px",
    textAlign: "left",
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      console.log("Running interval...");
    }, 1000);

    alert("Interval Started");
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);

    alert("Interval Cleared");
  };

  const measureBox = () => {
    const rect = boxRef.current.getBoundingClientRect();

    setBoxInfo({
      width: rect.width,
      height: rect.height,
      top: rect.top,
      left: rect.left,
    });
  };

  const incrementMutableCounter = () => {
    mutableCounterRef.current++;

    alert(
      `Ref Counter = ${mutableCounterRef.current}`
    );
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1500px",
        margin: "0 auto",
        background: "#f4f7fb",
        fontFamily: "Arial",
        lineHeight: "1.8",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        🧠 Complete useRef Master Guide
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "50px",
          fontSize: "18px",
        }}
      >
        Complete interview notes + visual demos +
        mistakes + DOM refs + callback refs +
        mutable storage + drag refs +
        measurements + timers.
      </p>

      {/* ===================================================== */}
      {/* What is useRef */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>✅ What is useRef?</h2>

        <div style={descStyle}>
          <p>
            useRef stores mutable values that
            persist between renders WITHOUT causing
            re-renders.
          </p>

          <ul>
            <li>Persists across renders</li>
            <li>Does NOT trigger re-render</li>
            <li>Can store DOM elements</li>
            <li>Can store mutable variables</li>
          </ul>

          <div style={successStyle}>
            💡 Main Uses:
            <br />
            1. DOM access
            <br />
            2. Mutable storage
          </div>

          <div style={warningStyle}>
            ❌ Biggest mistake:
            forgetting attaching ref to DOM.
          </div>
        </div>

        <div style={cardStyle}>
          <pre style={codeStyle}>
{`const ref = useRef(initialValue)

ref.current`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* Initial values */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>✅ Initial Values Explained</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>useRef(null)</h3>

            <div style={demoStyle}>
              Best for DOM refs.
            </div>

            <pre style={codeStyle}>
{`const inputRef = useRef(null)`}
            </pre>
          </div>

          <div style={cardStyle}>
            <h3>useRef([])</h3>

            <div style={demoStyle}>
              Best for storing multiple refs.
            </div>

            <pre style={codeStyle}>
{`const gridRefs = useRef([])`}
            </pre>
          </div>

          <div style={cardStyle}>
            <h3>useRef({})</h3>

            <div style={demoStyle}>
              Mutable objects / caches.
            </div>

            <pre style={codeStyle}>
{`const cacheRef = useRef({})`}
            </pre>
          </div>

          <div style={cardStyle}>
            <h3>useRef(0)</h3>

            <div style={demoStyle}>
              Timers / counters / IDs.
            </div>

            <pre style={codeStyle}>
{`const timerRef = useRef(0)`}
            </pre>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* Main mistake */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>
          🔥 Your Main Mistake Explained
        </h2>

        <div style={warningStyle}>
          You mentioned:
          <br />
          <br />
          "forgetting attaching either DOM or
          callback ref to DOM element"
          <br />
          <br />
          This is the MOST common useRef mistake.
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>❌ Wrong</h3>

            <pre style={codeStyle}>
{`const inputRef = useRef(null)

inputRef.current.focus()

// ERROR
// because no DOM attached`}
            </pre>
          </div>

          <div style={cardStyle}>
            <h3>✅ Correct</h3>

            <pre style={codeStyle}>
{`const inputRef = useRef(null)

<input ref={inputRef} />

inputRef.current.focus()`}
            </pre>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* DOM refs */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>✅ DOM Ref Demo</h2>

        <div style={descStyle}>
          React automatically stores DOM element
          inside:
          <pre style={codeStyle}>
{`inputRef.current`}
          </pre>
        </div>

        <div style={cardStyle}>
          <div style={demoStyle}>
            <input
              ref={inputRef}
              placeholder="Focus me"
              style={{
                padding: "12px",
                width: "100%",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />

            <button
              onClick={focusInput}
              style={{
                marginTop: "15px",
                padding: "12px 18px",
              }}
            >
              Focus Input
            </button>
          </div>

          <pre style={codeStyle}>
{`const inputRef = useRef(null)

<input ref={inputRef} />

inputRef.current.focus()`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* callback refs */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>✅ Callback Ref Demo</h2>

        <div style={descStyle}>
          Callback refs give MANUAL control over
          assigning refs.
        </div>

        <div style={cardStyle}>
          <div style={demoStyle}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={item}
                  ref={(el) =>
                    (gridRefs.current[index] = el)
                  }
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#2563eb",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <pre style={codeStyle}>
{`ref={(el)=>{
 gridRefs.current[index] = el
}}`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* no rerender */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>
          🔥 Updating ref.current Does NOT Re-render
        </h2>

        <div style={descStyle}>
          Changing ref.current updates value BUT UI
          won't refresh automatically.
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>Render Count</h3>

            <div style={demoStyle}>
              <h2>
                {renderCountRef.current}
              </h2>

              <p>
                Only updates when component renders.
              </p>
            </div>

            <pre style={codeStyle}>
{`renderCountRef.current++`}
            </pre>
          </div>

          <div style={cardStyle}>
            <h3>Mutable Counter Ref</h3>

            <div style={demoStyle}>
              <button
                onClick={
                  incrementMutableCounter
                }
              >
                Increment Ref Counter
              </button>

              <p>
                Ref value changes internally but UI
                does not re-render.
              </p>
            </div>

            <pre style={codeStyle}>
{`mutableRef.current++`}
            </pre>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* previous values */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>✅ Store Previous Value</h2>

        <div style={descStyle}>
          One of the BEST real-world useRef
          patterns.
        </div>

        <div style={cardStyle}>
          <div style={demoStyle}>
            <input
              value={text}
              onChange={(e) =>
                setText(e.target.value)
              }
              placeholder="Type something"
              style={{
                padding: "12px",
                width: "100%",
                borderRadius: "10px",
              }}
            />

            <h3>Current: {text}</h3>

            <h3>
              Previous:
              {previousValueRef.current}
            </h3>
          </div>

          <pre style={codeStyle}>
{`const previousRef = useRef("")

useEffect(()=>{
 previousRef.current = value
},[value])`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* timers */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>⏱️ Timer + Interval Refs</h2>

        <div style={descStyle}>
          Timer IDs should usually be stored inside
          refs.
        </div>

        <div style={cardStyle}>
          <div style={demoStyle}>
            <button onClick={startTimer}>
              Start Interval
            </button>

            <button
              onClick={stopTimer}
              style={{ marginLeft: "10px" }}
            >
              Stop Interval
            </button>
          </div>

          <pre style={codeStyle}>
{`const intervalRef = useRef(null)

intervalRef.current =
setInterval(...)

clearInterval(intervalRef.current)`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* getBoundingClientRect */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>📏 Measuring Elements</h2>

        <div style={descStyle}>
          useRef is heavily used with:
          <pre style={codeStyle}>
{`getBoundingClientRect()`}
          </pre>
        </div>

        <div style={cardStyle}>
          <div style={demoStyle}>
            <div
              ref={boxRef}
              style={{
                width: "250px",
                height: "120px",
                background: "#7c3aed",
                borderRadius: "14px",
              }}
            />

            <button
              onClick={measureBox}
              style={{
                marginTop: "15px",
              }}
            >
              Measure Box
            </button>

            <pre style={codeStyle}>
{JSON.stringify(boxInfo, null, 2)}
            </pre>
          </div>

          <pre style={codeStyle}>
{`const rect =
boxRef.current.getBoundingClientRect()`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* drag refs */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>🖱️ Drag and Drop Refs</h2>

        <div style={descStyle}>
          Drag systems often use refs to store
          dragged index.
        </div>

        <div style={cardStyle}>
          <pre style={codeStyle}>
{`const dragItemRef = useRef(null)

onDragStart={()=>{
 dragItemRef.current = index
}}`}
          </pre>

          <div style={successStyle}>
            💡 Avoids unnecessary re-renders during
            drag movement.
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* useRef vs useState */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>⚡ useRef vs useState</h2>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>useRef</th>

              <th style={cellStyle}>useState</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={cellStyle}>
                No re-render
              </td>

              <td style={cellStyle}>
                Triggers re-render
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>
                Mutable
              </td>

              <td style={cellStyle}>
                Immutable update pattern
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>
                Stores DOM refs
              </td>

              <td style={cellStyle}>
                Stores UI state
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>
                Great for timers
              </td>

              <td style={cellStyle}>
                Great for UI
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ===================================================== */}
      {/* interview traps */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>🔥 Common Interview Traps</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>❌ Trap 1</h3>

            <p>
              Updating ref.current does NOT
              re-render UI.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>❌ Trap 2</h3>

            <p>
              DOM refs are null before mount.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>❌ Trap 3</h3>

            <p>
              useRef persists value across renders.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>❌ Trap 4</h3>

            <p>
              Callback refs are better for dynamic
              lists.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* visual flow */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>📌 Ref Flow Diagram</h2>

        <div style={cardStyle}>
          <pre style={codeStyle}>
{`const inputRef = useRef(null)

<input ref={inputRef} />

FLOW
-----
Render
 ↓
DOM created
 ↓
React attaches DOM node
 ↓
inputRef.current = DOM element
 ↓
Now accessible`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* debounce function refs */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2>⚡ Stable Function Storage with useRef</h2>

        <div style={descStyle}>
          You mentioned debounce function storage.
          This is an ADVANCED and VERY useful useRef
          pattern.
        </div>

        <div style={cardStyle}>
          <pre style={codeStyle}>
{`const debouncedSave = useRef(
 debounce((value)=>{
   console.log(value)
 },1000)
).current`}
          </pre>

          <div style={successStyle}>
            💡 Why useRef here?
            <br />
            Same debounced function persists across
            renders.
          </div>

          <div style={warningStyle}>
            ❌ Without useRef:
            new debounce function created every
            render.
          </div>
        </div>
      </section>
    </div>
  );
}

export default UseRefMistakes;