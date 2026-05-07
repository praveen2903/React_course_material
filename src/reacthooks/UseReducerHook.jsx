import React, { useReducer, useRef } from "react";

/* =========================================================
   INITIAL STATE
   ========================================================= */

const initialState = {
  count: 0,
  text: "",
  darkMode: false,
};

/* =========================================================
   REDUCER FUNCTION
   ========================================================= */

function reducer(state, action) {
  console.log("Reducer called:", action);

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

    /* =====================================================
       🔴 TRAP: returning same mutated object
       ===================================================== */
    case "badMutation":
      state.count += 1;

      return state;
      // ❌ mutating existing state
      // React may skip re-render because reference is same

    /* =====================================================
       🔴 TRAP: missing default
       ===================================================== */

    default:
      return state;
  }
}

function UseReducerHook() {

  const [state, dispatch] = useReducer(reducer, initialState);


  const dispatchRef = useRef(dispatch);

  console.log(
    "dispatch stable:",
    dispatchRef.current === dispatch
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧠 useReducer -- useReducer centralizes complex state logic
        using actions and a reducer function.</h2>

      {/* =====================================================
          COUNT
         ===================================================== */}

      <h3>Counter Example</h3>

      <p>Count: {state.count}</p>

      <button
        onClick={() =>
          dispatch({ type: "increment" })
        }
      >
        Increment
      </button>

      <button
        onClick={() =>
          dispatch({ type: "decrement" })
        }
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>


      <h3>Text Example</h3>

      <input
        value={state.text}
        onChange={(e) =>
          dispatch({
            type: "setText",
            payload: e.target.value,
          })
        }
        placeholder="Type here..."
      />

      <p>Text: {state.text}</p>

      <h3>Theme Toggle</h3>

      <p>
        Theme:{" "}
        {state.darkMode ? "Dark" : "Light"}
      </p>

      <button
        onClick={() =>
          dispatch({ type: "toggleTheme" })
        }
      >
        Toggle Theme
      </button>


      <h3>🔴 Bad Mutation Example</h3>

      <button
        onClick={() =>
          dispatch({ type: "badMutation" })
        }
      >
        Mutate State Incorrectly
      </button>

      {/* =====================================================
          THEORY
         ===================================================== */}
         <div style={{textAlign:'left'}}>

      <h3>🔥 useReducer Rules</h3>

      <ul>
        <li>Reducer must be pure</li>
        <li>Never mutate state directly</li>
        <li>Always return new state object</li>
        <li>dispatch function is stable</li>
        <li>Reducer runs synchronously</li>
      </ul>

      <h3>🔥 Common Interview Traps</h3>

      <ul>
        <li>❌ Mutating state directly</li>
        <li>❌ Forgetting default case</li>
        <li>❌ Performing side effects inside reducer</li>
        <li>❌ Returning incomplete state object</li>
        <li>❌ Confusing useReducer with Redux</li>
      </ul>

      <h3>💼 Real Use Cases</h3>

      <ul>
        <li>Complex state logic</li>
        <li>Multiple related state updates</li>
        <li>Forms</li>
        <li>Authentication flows</li>
        <li>Shopping carts</li>
      </ul>

      <h3>⚡ useState vs useReducer</h3>

      <ul>
        <li>useState → simple independent state</li>
        <li>useReducer → complex related state</li>
      </ul>
      </div>
    </div>
  );
}

export default UseReducerHook;