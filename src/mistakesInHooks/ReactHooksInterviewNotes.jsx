import React from "react";

function ReactHooksInterviewNotes() {
  const sectionStyle = {
    marginBottom: "35px",
    textAlign: "left",
  };

  const codeStyle = {
    background: "#f4f4f4",
    padding: "14px",
    borderRadius: "8px",
    overflowX: "auto",
    fontSize: "14px",
    marginTop: "10px",
    whiteSpace: "pre-wrap",
    lineHeight: "1.8",
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: "1.8",
        textAlign: "left",
        fontFamily: "sans-serif",
      }}
    >
      <h2>🧠 React Hooks Interview Notes</h2>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ useState</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Stores reactive UI state
- State change triggers re-render
- Updates are async and batched

RELATED CONCEPT:
- React Batching
- Functional Updates

IMPORTANT:
setCount(prev => prev + 1)
-- best when depending on previous state

COMMON MISTAKES:
❌ Mutating state directly
❌ Expecting immediate update
❌ Forgetting functional updates
❌ Replacing object accidentally

BEST FOR:
- Forms
- Toggles
- Counters
- Loading states`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>🔥 React Batching</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- React combines multiple state updates into one render

IMPORTANT:
setCount(count + 1)
setCount(count + 1)
-- may still become +1

setCount(prev => prev + 1)
setCount(prev => prev + 1)
-- becomes +2

COMMON MISTAKES:
❌ Using stale state values -- stale values update (paint on DOM) only post completion of function so use react batching
❌ Forgetting batching exists

BEST PRACTICE:
- Use functional updates when depending on previous state`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ useEffect</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Handles side effects after render
- Runs after browser paint

RELATED CONCEPT:
- Dependency Array
- Cleanup Function

IMPORTANT:
useEffect(() => {}, [])
-- runs once

useEffect(() => {}, [value])
-- runs when dependency changes

COMMON MISTAKES:
❌ Missing dependencies
❌ Infinite loops
❌ Updating state unnecessarily
❌ Heavy logic inside effect

BEST FOR:
- API calls
- Timers
- Event listeners
- Subscriptions`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>🔥 useEffect Cleanup</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Cleanup prevents memory leaks

IMPORTANT:
return () => {}

cleanup runs:
- before next effect
- on unmount

COMMON MISTAKES:
❌ Forgetting clearInterval
❌ Forgetting removeEventListener
❌ Memory leaks

BEST FOR:
- Timers
- Subscriptions
- Event listeners
- WebSocket cleanup`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>⏱️ setTimeout</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Runs once after delay

IMPORTANT:
const id = setTimeout(...)

clearTimeout(id)

COMMON MISTAKES:
❌ Forgetting cleanup
❌ Using for repeated tasks

BEST FOR:
- Debouncing
- Delayed actions
- Retry logic
- Controlled polling`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>⏱️ setInterval</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Runs repeatedly after interval

IMPORTANT:
const id = setInterval(...)

clearInterval(id)

COMMON MISTAKES:
❌ Multiple intervals running
❌ Forgetting cleanup
❌ Overlapping async calls

BEST FOR:
- Clocks
- Countdowns
- Repeated updates`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>⚡ setTimeout vs setInterval</h3>

        <pre style={codeStyle}>
{`setTimeout:
- Runs once
- Better for polling
- Better async control

setInterval:
- Runs repeatedly
- Simpler repeated tasks

COMMON MISTAKES:
❌ Using setInterval for async polling

BEST PRACTICE:
- Recursive setTimeout is safer for APIs`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ useRef</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Stores mutable values
- Does NOT re-render component
- Persists across renders

RELATED CONCEPT:
- DOM Refs
- Callback Refs

IMPORTANT:
ref.current = value

COMMON MISTAKES:
❌ Expecting re-render
❌ Forgetting attaching ref to DOM
❌ Using state instead of ref for timers

BEST FOR:
- DOM access
- Timers
- Previous values
- Mutable storage`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>⚡ Callback Ref</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Manual DOM ref assignment

IMPORTANT:
ref={(el) => gridRef.current[index] = el}

COMMON MISTAKES:
❌ Forgetting dynamic refs in lists
❌ Using single ref for multiple elements

BEST FOR:
- Lists
- Grids
- Drag-drop systems`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ useMemo</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Memoizes computed values
- Prevents unnecessary recalculation

RELATED CONCEPT:
- Reference Equality

IMPORTANT:
useMemo(() => value, [deps])

COMMON MISTAKES:
❌ Overusing useMemo
❌ Missing dependencies
❌ Thinking it prevents re-render

BEST FOR:
- Expensive calculations
- Filtering
- Sorting
- Stable object references`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ useCallback</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Memoizes function reference

RELATED CONCEPT:
- React.memo

IMPORTANT:
useCallback(fn, deps)

COMMON MISTAKES:
❌ Overusing useCallback
❌ Missing dependencies
❌ Using without React.memo

BEST FOR:
- Stable callbacks
- Memoized children
- Event handlers`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ React.memo</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Prevents unnecessary child re-renders

RELATED CONCEPT:
- Shallow Comparison

IMPORTANT:
React.memo(Component)

COMMON MISTAKES:
❌ Passing new objects/functions
❌ Using everywhere unnecessarily

BEST FOR:
- Expensive child components
- Large UI trees`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ useLayoutEffect</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Runs before browser paint
- Synchronous effect

RELATED CONCEPT:
- DOM Measurements

IMPORTANT:
useLayoutEffect(() => {})

COMMON MISTAKES:
❌ Heavy calculations blocking paint
❌ Using instead of useEffect unnecessarily

BEST FOR:
- Measuring elements
- Preventing flicker
- Layout calculations`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ useContext</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Shares global state without prop drilling

RELATED CONCEPT:
- Context Provider

IMPORTANT:
useContext(SomeContext)

COMMON MISTAKES:
❌ Large frequently changing context
❌ Unnecessary re-renders
❌ Creating new provider objects every render

BEST FOR:
- Theme
- Auth
- Language
- Global settings`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ useReducer</h3>

        <pre style={codeStyle}>
{`CONCEPT:
- Centralized complex state management

RELATED CONCEPT:
- Reducer Pattern

IMPORTANT:
dispatch({ type: "increment" })

COMMON MISTAKES:
❌ Mutating state
❌ Missing default case
❌ Side effects inside reducer

BEST FOR:
- Complex forms
- Shopping carts
- Authentication flows`}
        </pre>
      </section>
    </div>
  );
}

export default ReactHooksInterviewNotes;