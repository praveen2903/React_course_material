import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  createContext,
} from "react";

const ThemeContext = createContext();

const MemoChild = memo(({ onClick }) => {
  console.log("Memo Child Rendered");

  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 20px",
        border: "none",
        borderRadius: "10px",
        background: "#7c3aed",
        color: "white",
        cursor: "pointer",
      }}
    >
      Memo Child Button
    </button>
  );
});

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

function ReactHooksInterviewNotes() {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("");

  const [theme, setTheme] = useState("light");

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  const renderRef = useRef(0);

  const inputRef = useRef(null);

  const measureRef = useRef(null);

  const [boxWidth, setBoxWidth] = useState(0);

  renderRef.current++;

  useEffect(() => {
    console.log("useEffect runs after paint");

    return () => {
      console.log("cleanup");
    };
  }, []);

  useLayoutEffect(() => {
    if (measureRef.current) {
      const rect = measureRef.current.getBoundingClientRect();

      setBoxWidth(rect.width);
    }
  }, []);

  const expensiveCalculation = useMemo(() => {
    console.log("Heavy calculation");

    let total = 0;

    for (let i = 0; i < 1000000; i++) {
      total += i;
    }

    return total;
  }, []);

  const stableCallback = useCallback(() => {
    alert("Stable callback");
  }, []);

  const pageStyle = {
    padding: "40px",
    maxWidth: "1500px",
    margin: "0 auto",
    fontFamily: "Arial",
    lineHeight: "1.8",
    background: "#f5f7fb",
    color: "#222",
    textAlign:'left'
  };

  const sectionStyle = {
    marginBottom: "60px",
  };

  const headingStyle = {
    fontSize: "34px",
    marginBottom: "20px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(430px,1fr))",
    gap: "22px",
  };

  const cardStyle = {
    background: "white",
    borderRadius: "16px",
    padding: "22px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };

  const codeStyle = {
    background: "#111827",
    color: "#00ff95",
    padding: "16px",
    borderRadius: "12px",
    overflowX: "auto",
    whiteSpace: "pre-wrap",
    fontSize: "14px",
    marginTop: "15px",
  };

  const descStyle = {
    background: "#eef6ff",
    padding: "18px",
    borderRadius: "12px",
    borderLeft: "6px solid #2563eb",
    marginBottom: "20px",
  };

  const demoStyle = {
    border: "2px dashed #bbb",
    borderRadius: "12px",
    padding: "20px",
    background: "#fafafa",
    marginTop: "15px",
  };

  const warningStyle = {
    background: "#fff4e5",
    borderLeft: "6px solid orange",
    padding: "14px",
    borderRadius: "10px",
    marginTop: "15px",
  };

  const successStyle = {
    background: "#e8f5e9",
    borderLeft: "6px solid green",
    padding: "14px",
    borderRadius: "10px",
    marginTop: "15px",
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div style={pageStyle}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          React Hooks + Redux + Apollo Interview Notes
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            marginBottom: "60px",
            fontSize: "18px",
          }}
        >
          Complete practical React hooks handbook with
          live demos, interview concepts, mistakes,
          visual understanding and real-world usage.
        </p>

        {/* ===================================================== */}
        {/* useState */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useState</h2>

          <div style={descStyle}>
            <h3>Concept</h3>

            <p>
              useState stores reactive UI state.
              Whenever state changes, component re-renders.
            </p>

            <ul>
              <li>Triggers re-render</li>
              <li>Updates are async</li>
              <li>React batches updates</li>
            </ul>

            <div style={successStyle}>
              💡 Best For:
              forms, toggles, counters, loading states
            </div>

            <div style={warningStyle}>
              ❌ Never mutate state directly.
            </div>
          </div>

          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3>Live Counter Demo</h3>

              <div style={demoStyle}>
                <h2>{count}</h2>

                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  style={{
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#2563eb",
                    color: "white",
                  }}
                >
                  Increment
                </button>
              </div>

              <pre style={codeStyle}>
{`const [count,setCount] = useState(0)

setCount(prev => prev + 1)`}
              </pre>
            </div>

            <div style={cardStyle}>
              <h3>Functional Update Flow</h3>

              <div style={demoStyle}>
                <pre>
{`CLICK
 ↓
setState()
 ↓
React schedules update
 ↓
Component re-renders`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* React batching */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>🔥 React Batching</h2>

          <div style={descStyle}>
            <p>
              React combines multiple state updates into
              one render for performance optimization.
            </p>

            <div style={warningStyle}>
              ❌ Stale state issue:
              setCount(count + 1) twice may still become +1
            </div>
          </div>

          <div style={cardStyle}>
            <pre style={codeStyle}>
{`BAD
----
setCount(count + 1)
setCount(count + 1)

GOOD
-----
setCount(prev => prev + 1)
setCount(prev => prev + 1)`}
            </pre>
          </div>
        </section>

        {/* ===================================================== */}
        {/* useEffect */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useEffect</h2>

          <div style={descStyle}>
            <p>
              Handles side effects after render.
            </p>

            <ul>
              <li>API calls</li>
              <li>Timers</li>
              <li>Subscriptions</li>
              <li>Event listeners</li>
            </ul>

            <div style={successStyle}>
              💡 Runs after browser paint.
            </div>
          </div>

          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3>Effect Flow</h3>

              <div style={demoStyle}>
                <pre>
{`Render
 ↓
Browser Paint
 ↓
useEffect runs`}
                </pre>
              </div>

              <pre style={codeStyle}>
{`useEffect(()=>{
 console.log("runs")
},[])`}
              </pre>
            </div>

            <div style={cardStyle}>
              <h3>Cleanup</h3>

              <pre style={codeStyle}>
{`useEffect(()=>{
 const id = setInterval(...)

 return ()=>{
   clearInterval(id)
 }
},[])`}
              </pre>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* useRef */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useRef</h2>

          <div style={descStyle}>
            <p>
              Stores mutable values without re-rendering.
            </p>

            <ul>
              <li>DOM access</li>
              <li>Timers</li>
              <li>Previous values</li>
              <li>Mutable storage</li>
            </ul>

            <div style={warningStyle}>
              ❌ Updating ref does NOT re-render component.
            </div>
          </div>

          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3>Focus Input Demo</h3>

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
                  onClick={() => inputRef.current.focus()}
                  style={{
                    marginTop: "15px",
                    padding: "10px 18px",
                  }}
                >
                  Focus Input
                </button>
              </div>

              <pre style={codeStyle}>
{`const ref = useRef(null)

ref.current.focus()`}
              </pre>
            </div>

            <div style={cardStyle}>
              <h3>Ref Lifecycle</h3>

              <div style={demoStyle}>
                <pre>
{`Before Mount
ref.current = null

After Mount
ref.current = DOM node`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* useMemo */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useMemo</h2>

          <div style={descStyle}>
            <p>
              Memoizes expensive computed values.
            </p>

            <div style={successStyle}>
              💡 Prevents unnecessary recalculation.
            </div>

            <div style={warningStyle}>
              ❌ Does NOT prevent component re-render.
            </div>
          </div>

          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3>Heavy Calculation Demo</h3>

              <div style={demoStyle}>
                <h4>{expensiveCalculation}</h4>

                <p>
                  Heavy calculation only runs once.
                </p>
              </div>

              <pre style={codeStyle}>
{`const value = useMemo(()=>{
 return expensiveWork()
},[])`}
              </pre>
            </div>

            <div style={cardStyle}>
              <h3>Best Use Cases</h3>

              <div style={demoStyle}>
                <ul>
                  <li>Filtering</li>
                  <li>Sorting</li>
                  <li>Large calculations</li>
                  <li>Stable object references</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* useCallback */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useCallback</h2>

          <div style={descStyle}>
            <p>
              Memoizes function reference.
            </p>

            <div style={successStyle}>
              💡 Useful with React.memo children.
            </div>

            <div style={warningStyle}>
              ❌ Overusing can reduce readability.
            </div>
          </div>

          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3>Stable Function Demo</h3>

              <div style={demoStyle}>
                <MemoChild onClick={stableCallback} />
              </div>

              <pre style={codeStyle}>
{`const fn = useCallback(()=>{
 console.log("stable")
},[])`}
              </pre>
            </div>

            <div style={cardStyle}>
              <h3>Flow</h3>

              <div style={demoStyle}>
                <pre>
{`Parent Re-render
 ↓
Same callback reference
 ↓
Memo child skips render`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* React.memo */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ React.memo</h2>

          <div style={descStyle}>
            <p>
              Prevents unnecessary child renders
              using shallow prop comparison.
            </p>

            <div style={warningStyle}>
              ❌ New object/function references
              still trigger renders.
            </div>
          </div>

          <div style={cardStyle}>
            <pre style={codeStyle}>
{`const Child = React.memo(Component)`}
            </pre>
          </div>
        </section>

        {/* ===================================================== */}
        {/* useLayoutEffect */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useLayoutEffect</h2>

          <div style={descStyle}>
            <p>
              Runs synchronously before browser paint.
            </p>

            <div style={successStyle}>
              💡 Used for DOM measurements.
            </div>
          </div>

          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3>Measurement Demo</h3>

              <div
                ref={measureRef}
                style={{
                  ...demoStyle,
                  width: "300px",
                }}
              >
                Measured Width:
                <h3>{boxWidth}px</h3>
              </div>

              <pre style={codeStyle}>
{`useLayoutEffect(()=>{
 const rect =
 ref.current.getBoundingClientRect()
})`}
              </pre>
            </div>

            <div style={cardStyle}>
              <h3>Difference</h3>

              <div style={demoStyle}>
                <pre>
{`useEffect
→ after paint

useLayoutEffect
→ before paint`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* useContext */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useContext</h2>

          <div style={descStyle}>
            <p>
              Shares global state without prop drilling.
            </p>

            <div style={successStyle}>
              💡 Used for:
              theme, auth, language
            </div>
          </div>

          <div style={cardStyle}>
            <ThemePreview />

            <button
              onClick={() =>
                setTheme((prev) =>
                  prev === "light"
                    ? "dark"
                    : "light"
                )
              }
              style={{
                marginTop: "15px",
                padding: "10px 18px",
              }}
            >
              Toggle Theme
            </button>

            <pre style={codeStyle}>
{`const value =
useContext(MyContext)`}
            </pre>
          </div>
        </section>

        {/* ===================================================== */}
        {/* useReducer */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useReducer</h2>

          <div style={descStyle}>
            <p>
              Centralized complex state logic.
            </p>

            <div style={successStyle}>
              💡 Best for:
              carts, forms, auth flows
            </div>
          </div>

          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3>Reducer Demo</h3>

              <div style={demoStyle}>
                <h2>{state.count}</h2>

                <button
                  onClick={() =>
                    dispatch({ type: "increment" })
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch({ type: "decrement" })
                  }
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  -
                </button>
              </div>

              <pre style={codeStyle}>
{`dispatch({
 type:"increment"
})`}
              </pre>
            </div>

            <div style={cardStyle}>
              <h3>Reducer Flow</h3>

              <div style={demoStyle}>
                <pre>
{`dispatch(action)
 ↓
reducer()
 ↓
new state
 ↓
re-render`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* useSelector */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useSelector (Redux)</h2>

          <div style={descStyle}>
            <p>
              Reads Redux store state inside component.
            </p>

            <div style={successStyle}>
              💡 Re-renders component when selected value changes.
            </div>

            <div style={warningStyle}>
              ❌ Selecting entire store causes extra renders.
            </div>
          </div>

          <div style={cardStyle}>
            <pre style={codeStyle}>
{`const count = useSelector(
 state => state.counter.count
)`}
            </pre>
          </div>
        </section>

        {/* ===================================================== */}
        {/* useDispatch */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useDispatch (Redux)</h2>

          <div style={descStyle}>
            <p>
              Sends actions to Redux store.
            </p>

            <div style={successStyle}>
              💡 Used with reducers.
            </div>
          </div>

          <div style={cardStyle}>
            <pre style={codeStyle}>
{`const dispatch = useDispatch()

dispatch(addTodo(data))`}
            </pre>
          </div>
        </section>

        {/* ===================================================== */}
        {/* useQuery */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useQuery (Apollo GraphQL)</h2>

          <div style={descStyle}>
            <p>
              Fetches GraphQL data automatically.
            </p>

            <ul>
              <li>loading</li>
              <li>error</li>
              <li>data</li>
            </ul>

            <div style={successStyle}>
              💡 Auto caching + auto updates.
            </div>
          </div>

          <div style={cardStyle}>
            <pre style={codeStyle}>
{`const {
 loading,
 error,
 data
} = useQuery(GET_USERS)

if(loading) return "Loading"

console.log(data)`}
            </pre>
          </div>
        </section>

        {/* ===================================================== */}
        {/* useMutation */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ useMutation (Apollo)</h2>

          <div style={descStyle}>
            <p>
              Used for create/update/delete operations.
            </p>

            <div style={successStyle}>
              💡 Triggered manually.
            </div>
          </div>

          <div style={cardStyle}>
            <pre style={codeStyle}>
{`const [addUser] =
useMutation(ADD_USER)

addUser({
 variables:{
   name:"Sai"
 }
})`}
            </pre>
          </div>
        </section>

        {/* ===================================================== */}
        {/* custom hooks */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>✅ Custom Hooks</h2>

          <div style={descStyle}>
            <p>
              Reusable logic extracted into hook functions.
            </p>

            <div style={successStyle}>
              💡 Keeps components clean.
            </div>
          </div>

          <div style={cardStyle}>
            <pre style={codeStyle}>
{`function useToggle(initial){

 const [value,setValue] =
 useState(initial)

 const toggle = ()=>{
   setValue(prev => !prev)
 }

 return [value,toggle]
}`}
            </pre>
          </div>
        </section>

        {/* ===================================================== */}
        {/* render count */}
        {/* ===================================================== */}

        <section style={sectionStyle}>
          <h2 style={headingStyle}>🔥 Render Count Tracking</h2>

          <div style={descStyle}>
            <p>
              Useful for debugging unnecessary renders.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={demoStyle}>
              <h3>
                Component Render Count:
                {renderRef.current}
              </h3>
            </div>

            <pre style={codeStyle}>
{`const renderRef = useRef(0)

renderRef.current++`}
            </pre>
          </div>
        </section>
      </div>
    </ThemeContext.Provider>
  );
}

function ThemePreview() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background:
          theme === "light"
            ? "#f3f4f6"
            : "#1f2937",
        color:
          theme === "light"
            ? "#111"
            : "white",
      }}
    >
      Current Theme: {theme}
    </div>
  );
}

export default ReactHooksInterviewNotes;