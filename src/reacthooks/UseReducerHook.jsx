import React, { useReducer, useRef } from "react";

const styles = {
  page: {
    padding: "30px",
    maxWidth: "1300px",
    margin: "0 auto",
    fontFamily: "Arial",
    lineHeight: "1.7",
    background: "#f5f7fb",
    textAlign: 'left'
  },

  section: {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    marginBottom: "35px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  title: {
    marginBottom: "20px",
    color: "#1e293b",
  },

  subTitle: {
    marginBottom: "12px",
    color: "#2563eb",
  },

  code: {
    background: "#0f172a",
    color: "#e2e8f0",
    padding: "18px",
    borderRadius: "10px",
    overflowX: "auto",
    fontSize: "14px",
    whiteSpace: "pre-wrap",
    marginTop: "12px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "16px",
    marginTop: "18px",
  },

  card: {
    background: "#eff6ff",
    border: "1px solid #bfdbfe",
    padding: "18px",
    borderRadius: "12px",
  },

  trapCard: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    padding: "18px",
    borderRadius: "12px",
  },

  fixCard: {
    background: "#ecfdf5",
    border: "1px solid #bbf7d0",
    padding: "18px",
    borderRadius: "12px",
  },

  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px",
    marginBottom: "10px",
    background: "#2563eb",
    color: "white",
  },

  badButton: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px",
    marginBottom: "10px",
    background: "#dc2626",
    color: "white",
  },

  goodButton: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px",
    marginBottom: "10px",
    background: "#16a34a",
    color: "white",
  },

  stateBox: {
    background: "#111827",
    color: "#f9fafb",
    padding: "18px",
    borderRadius: "12px",
    marginTop: "20px",
  },

  flowBox: {
    background: "#f8fafc",
    border: "1px dashed #94a3b8",
    padding: "18px",
    borderRadius: "12px",
    marginTop: "16px",
  },

  arrayBox: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "14px",
  },

  item: {
    width: "60px",
    height: "60px",
    background: "#2563eb",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    fontWeight: "bold",
    flexDirection: "column",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px",
  },

  th: {
    border: "1px solid #cbd5e1",
    padding: "12px",
    background: "#e2e8f0",
  },

  td: {
    border: "1px solid #cbd5e1",
    padding: "12px",
    background: "white",
  },
};

/* =========================================================
   INITIAL STATE
========================================================= */

const initialState = {
  count: 0,
  text: "",
  darkMode: false,
  todos: ["Learn React", "Learn Reducer"],
};

/* =========================================================
   REDUCER
========================================================= */

function reducer(state, action) {
  console.log("Reducer Action:", action);

  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "incrementBy":
      return {
        ...state,
        count: state.count + action.payload,
      };

    case "setText":
      return {
        ...state,
        text: action.payload,
      };

    case "toggleTheme":
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "removeTodo":
      return {
        ...state,
        todos: state.todos.filter(
          (_, index) => index !== action.payload
        ),
      };

    /* =====================================================
       🔴 BAD MUTATION
    ===================================================== */

    case "badMutation":
      state.count += 1;

      return state;

    /* =====================================================
       DEFAULT
    ===================================================== */

    default:
      return state;
  }
}

export default function UseReducerHookDetailed() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const dispatchRef = useRef(dispatch);

  const stableDispatch =
    dispatchRef.current === dispatch;

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        🧠 useReducer Complete Interview Notes +
        Visual Guide
      </h1>

      {/* =====================================================
          WHAT IS USEREDUCER
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ✅ What is useReducer?
        </h2>

        <p>
          <b>useReducer</b> is a React hook used
          for handling <b>complex state logic</b>.
        </p>

        <p>
          Instead of directly updating state like
          useState, you send an <b>action</b> to a{" "}
          <b>reducer function</b>.
        </p>

        <div style={styles.flowBox}>
          <h3>🔥 Flow Diagram</h3>

          <pre style={styles.code}>
{`Button Click
    ↓
dispatch(action)
    ↓
Reducer receives action
    ↓
Reducer returns NEW state
    ↓
React re-renders UI`}
          </pre>
        </div>

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3>✅ Best For</h3>

            <ul>
              <li>Complex forms</li>
              <li>Authentication flows</li>
              <li>Shopping carts</li>
              <li>Theme toggles</li>
              <li>Multiple related states</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>⚡ Related Concepts</h3>

            <ul>
              <li>Redux</li>
              <li>Dispatch Pattern</li>
              <li>Immutable Updates</li>
              <li>Pure Functions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISUAL STATE
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔥 Current State Visual
        </h2>

        <div style={styles.stateBox}>
          <h3>Count: {state.count}</h3>

          <h3>Text: {state.text}</h3>

          <h3>
            Theme:{" "}
            {state.darkMode ? "🌙 Dark" : "☀️ Light"}
          </h3>

          <h3>Todos:</h3>

          <ul>
            {state.todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* =====================================================
          COUNTER
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔢 Counter Reducer Example
        </h2>

        <p>
          Reducers are commonly used for counter
          logic in interviews.
        </p>

        <button
          style={styles.button}
          onClick={() =>
            dispatch({ type: "increment" })
          }
        >
          + Increment
        </button>

        <button
          style={styles.button}
          onClick={() =>
            dispatch({ type: "decrement" })
          }
        >
          - Decrement
        </button>

        <button
          style={styles.goodButton}
          onClick={() =>
            dispatch({
              type: "incrementBy",
              payload: 5,
            })
          }
        >
          +5 Payload
        </button>

        <pre style={styles.code}>
{`dispatch({
  type: "incrementBy",
  payload: 5
})`}
        </pre>

        <div style={styles.flowBox}>
          <h3>📦 Action Object</h3>

          <pre style={styles.code}>
{`{
  type: "increment",
  payload: optionalData
}`}
          </pre>
        </div>
      </section>

      {/* =====================================================
          TEXT INPUT
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ✍️ Controlled Input Example
        </h2>

        <input
          value={state.text}
          onChange={(e) =>
            dispatch({
              type: "setText",
              payload: e.target.value,
            })
          }
          placeholder="Type here..."
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <pre style={styles.code}>
{`dispatch({
  type: "setText",
  payload: e.target.value
})`}
        </pre>
      </section>

      {/* =====================================================
          THEME TOGGLE
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🌗 Theme Toggle Example
        </h2>

        <button
          style={styles.button}
          onClick={() =>
            dispatch({ type: "toggleTheme" })
          }
        >
          Toggle Theme
        </button>

        <pre style={styles.code}>
{`case "toggleTheme":
  return {
    ...state,
    darkMode: !state.darkMode
  }`}
        </pre>
      </section>

      {/* =====================================================
          TODOS
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          📝 Todo Reducer Example
        </h2>

        <button
          style={styles.goodButton}
          onClick={() =>
            dispatch({
              type: "addTodo",
              payload: "New Task",
            })
          }
        >
          Add Todo
        </button>

        <button
          style={styles.badButton}
          onClick={() =>
            dispatch({
              type: "removeTodo",
              payload: 0,
            })
          }
        >
          Remove First Todo
        </button>

        <pre style={styles.code}>
{`case "addTodo":
  return {
    ...state,
    todos: [...state.todos, action.payload]
  }`}
        </pre>
      </section>

      {/* =====================================================
          IMMUTABILITY
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔥 Immutability Visual
        </h2>

        <p>
          Reducers should NEVER mutate state.
        </p>

        <div style={styles.arrayBox}>
          <div style={styles.item}>
            <span>0</span>
            <span>10</span>
          </div>

          <div style={styles.item}>
            <span>1</span>
            <span>20</span>
          </div>

          <div style={styles.item}>
            <span>2</span>
            <span>30</span>
          </div>
        </div>

        <div style={styles.cardGrid}>
          <div style={styles.trapCard}>
            <h3>❌ BAD</h3>

            <pre style={styles.code}>
{`state.count += 1

return state`}
            </pre>

            <p>
              Same object reference returned.
            </p>

            <p>
              React may skip re-render.
            </p>
          </div>

          <div style={styles.fixCard}>
            <h3>✅ GOOD</h3>

            <pre style={styles.code}>
{`return {
  ...state,
  count: state.count + 1
}`}
            </pre>

            <p>
              New object reference created.
            </p>

            <p>
              React safely re-renders.
            </p>
          </div>
        </div>

        <button
          style={styles.badButton}
          onClick={() =>
            dispatch({ type: "badMutation" })
          }
        >
          Run Bad Mutation
        </button>
      </section>

      {/* =====================================================
          USEREDUCER VS USESTATE
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ⚡ useReducer vs useState
        </h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>useState</th>
              <th style={styles.th}>useReducer</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={styles.td}>
                Simple state
              </td>

              <td style={styles.td}>
                Complex state logic
              </td>
            </tr>

            <tr>
              <td style={styles.td}>
                Independent states
              </td>

              <td style={styles.td}>
                Related state updates
              </td>
            </tr>

            <tr>
              <td style={styles.td}>
                Easier initially
              </td>

              <td style={styles.td}>
                Better scalability
              </td>
            </tr>

            <tr>
              <td style={styles.td}>
                setState()
              </td>

              <td style={styles.td}>
                dispatch(action)
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* =====================================================
          DISPATCH STABILITY
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔥 dispatch is Stable
        </h2>

        <p>
          dispatch reference does NOT change
          between renders.
        </p>

        <pre style={styles.code}>
{`const dispatchRef = useRef(dispatch)

console.log(
  dispatchRef.current === dispatch
)

// true`}
        </pre>

        <div style={styles.fixCard}>
          <h3>
            Result:{" "}
            {stableDispatch
              ? "✅ Stable"
              : "❌ Changed"}
          </h3>
        </div>
      </section>

      {/* =====================================================
          INTERVIEW TRAPS
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔴 Common Interview Traps
        </h2>

        <div style={styles.cardGrid}>
          <div style={styles.trapCard}>
            <h3>❌ Mutating State</h3>

            <p>
              React depends on new references.
            </p>
          </div>

          <div style={styles.trapCard}>
            <h3>❌ Missing Default Case</h3>

            <p>
              Reducer should always return state.
            </p>
          </div>

          <div style={styles.trapCard}>
            <h3>❌ Side Effects Inside Reducer</h3>

            <p>
              Reducers must stay pure.
            </p>
          </div>

          <div style={styles.trapCard}>
            <h3>❌ Returning Partial State</h3>

            <p>
              Spread old state when needed.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PURE FUNCTION
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ⚡ Reducer Must Be Pure
        </h2>

        <div style={styles.cardGrid}>
          <div style={styles.fixCard}>
            <h3>✅ Pure Reducer</h3>

            <pre style={styles.code}>
{`function reducer(state, action) {
  switch(action.type){
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
  }
}`}
            </pre>
          </div>

          <div style={styles.trapCard}>
            <h3>❌ Bad Reducer</h3>

            <pre style={styles.code}>
{`function reducer(state, action) {

  fetch("/api")

  state.count++

  return state
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* =====================================================
          REDUX CONNECTION
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔥 useReducer vs Redux
        </h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>useReducer</th>
              <th style={styles.th}>Redux</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={styles.td}>
                Local component state
              </td>

              <td style={styles.td}>
                Global app state
              </td>
            </tr>

            <tr>
              <td style={styles.td}>
                Built into React
              </td>

              <td style={styles.td}>
                External library
              </td>
            </tr>

            <tr>
              <td style={styles.td}>
                Simpler setup
              </td>

              <td style={styles.td}>
                Middleware support
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* =====================================================
          FINAL TAKEAWAYS
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🚀 Final Interview Takeaways
        </h2>

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3>✅ Remember</h3>

            <ul>
              <li>
                Reducers must return NEW state
              </li>
              <li>dispatch is stable</li>
              <li>Reducers must be pure</li>
              <li>
                Great for complex state logic
              </li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>💼 Real World</h3>

            <ul>
              <li>Authentication</li>
              <li>Shopping carts</li>
              <li>Multi-step forms</li>
              <li>Global state systems</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}