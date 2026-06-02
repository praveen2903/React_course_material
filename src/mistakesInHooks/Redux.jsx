import React, { useRef } from "react";
import {configureStore,createSlice} from "@reduxjs/toolkit";
import reduxImg from "../assets/redux.png";
import dispatchSelectorImg from "../assets/dispatch_and_selector.png";
import reduxWorkingImg from "../assets/redux_working.png";
import { Provider, useDispatch,useSelector} from "react-redux";

const styles = {
  page: {
    padding: "30px",
    maxWidth: "1400px",
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
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
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

  input: {
    padding: "12px",
    width: "100%",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "12px",
  },

  stateBox: {
    background: "#111827",
    color: "#f9fafb",
    padding: "18px",
    borderRadius: "12px",
    marginTop: "20px",
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

  flowBox: {
    background: "#f8fafc",
    border: "1px dashed #94a3b8",
    padding: "18px",
    borderRadius: "12px",
    marginTop: "16px",
  },
};
function ImageBanner() {
  const images = [
    reduxImg,
    dispatchSelectorImg,
    reduxWorkingImg,
  ];

  return (
    <div style={styles.bannerContainer}>

      <div style={styles.imageGrid}>
        {images.map((img, index) => (
          <div
            key={index}
            style={styles.imageCard}
          >
            <img
              src={img}
              alt="graphql"
              style={styles.bannerImage}
            />
          </div>
        ))}
      </div>

    </div>
  );
}
const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0,
    text: "",
    darkMode: false,
    todos: ["Learn Redux", "Learn Toolkit"],
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },

    setText: (state, action) => {
      state.text = action.payload;
    },

    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },

    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },

    /* =====================================================
       🔴 BAD REDUX TRAP
    ===================================================== */

    replaceWholeStateWrong: () => {
      return {
        count: 999,
      };
    },
  },
});

const {
  increment,
  decrement,
  incrementByAmount,
  setText,
  toggleTheme,
  addTodo,
  removeTodo,
  replaceWholeStateWrong,
} = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});


function ReduxDemoComponent() {
  const dispatch = useDispatch();

  const count = useSelector(
    (state) => state.counter.count
  );

  const text = useSelector(
    (state) => state.counter.text
  );

  const darkMode = useSelector(
    (state) => state.counter.darkMode
  );

  const todos = useSelector(
    (state) => state.counter.todos
  );

  const renderRef = useRef(0);
  renderRef.current++;

  return (
    <div style={styles.page}>
      {/* =========================================================
    REDUX FLOW
========================================================= */}

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    alignItems: "start",
  }}
>

  {/* =========================================================
      STORE
  ========================================================= */}

  <div>
    <h2>🗂️ store.js</h2>

    <pre
      style={{
        textAlign: "left",
        padding: "16px",
        borderRadius: "10px",
        overflowX: "auto",
        background: "#111",
        color: "#00ff90",
      }}
    >
{`
import { configureStore }  from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toggler: toggleReducer,
  },
});`}
    </pre>
  </div>

  {/* =========================================================
      PROVIDER
  ========================================================= */}

  <div>
    <h2>🌍 Provider Global Access</h2>

    <pre
      style={{
        textAlign: "left",
        padding: "16px",
        borderRadius: "10px",
        overflowX: "auto",
        background: "#111",
        color: "#00d9ff",
      }}
    >
{`
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
`}
    </pre>
  </div>

  {/* =========================================================
      SLICE
  ========================================================= */}

  <div>
    <h2>🧠 counterSlice.js</h2>

    <pre
      style={{
        textAlign: "left",
        padding: "16px",
        borderRadius: "10px",
        overflowX: "auto",
        background: "#111",
        color: "#ffd166",
        minHeight: "500px",
      }}
    >
{`
import { createSlice } from "@reduxjs/toolkit";

const initState = {
  count: 0,
  text: "",
  darkMode: false,
  todos: ["Learn Redux"],
},

const counterSlice = createSlice({
  name: "counter",  -- name can be same in store generally same
  initialState: initState
  // initalState:{  --same
  //   count: 0,
  //   text: "",
  //   darkMode: false,
  //   todos: ["Learn Redux"],
  // },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state,action) => {
      state.count += action.payload;
    },

    setText: (state, action) => {
      state.text = action.payload;
    },

    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },

    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    removeTodo: (state,action) => {
      state.todos.splice(action.payload ,1); 
      //deleteIndex, no.of items--> splice
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setText,
  toggleTheme,
  addTodo,
  removeTodo,
} = counterSlice.actions;

export default counterSlice.reducer; 
--helps to import in store as counterSlice 
--else in store too you need counterSlice.reducer
`}
    </pre>
  </div>

  {/* =========================================================
      COMPONENT
  ========================================================= */}

  <div>
    <h2>⚛️ Redux Component</h2>

    <pre
      style={{
        textAlign: "left",
        padding: "16px",
        borderRadius: "10px",
        overflowX: "auto",
        background: "#111",
        color: "#ff8fab",
        minHeight: "500px",
      }}
    >
{`
import React from "react";
import {useSelector,useDispatch,} from "react-redux";
import {increment, decrement,incrementByAmount,
setText, toggleTheme, addTodo, removeTodo,} from "./counterSlice";

const ReduxExample = () => {
  const dispatch = useDispatch();

============================================================
READ STATE -- useSelector(
  (state)=> state.reducerName.variableName
)
reducerName :- reducerName: slice.reducer (or) slice (if exported);
Note variableName-- must be in initialState of that reducer
================================================================
  const count = useSelector((state) => state.counter.count);

  const text = useSelector((state) => state.counter.text);

  const darkMode = useSelector((state) => state.counter.darkMode);

  const todos = useSelector((state) => state.counter.todos);

  return (
    <div>
      <h2>Count: {count}</h2>
=======================================
dispatch -- dispatch(
  imported reducer method
)

Note: reducer method is imported from slice
=========================================
    <button onClick={() => dispatch(increment())}>
      Increment
    </button>

    <button onClick={() => dispatch(addTodo("Task"))}>
      Add Todo
    </button>
  </div>
  );
};
export default ReduxExample;`}
    </pre>
  </div>

</div>

{/* =========================================================
    REDUX FLOW
========================================================= */}

<pre
  style={{
    textAlign: "left",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "10px",
    background: "#111",
    color: "#ffffff",
    fontSize: "16px",
  }}
>
{`
User Click
     ↓
dispatch(action)
     ↓
Reducer Runs
     ↓
Redux Store Updates
     ↓
useSelector Detects Change
     ↓
Component Re-renders
     ↓
Updated UI
`}
</pre>
<section
  style={{
    padding: "20px",
    fontFamily: "sans-serif",
    textAlign: "left",
  }}
>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  }}
>

{/* ====================================== */}
{/* LEFT */}
{/* ====================================== */}

<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "18px",
    borderRadius: "10px",
    overflowX: "auto",
  }}
>

<h2>Redux Slice + extraReducers</h2>

<pre
  style={{
    fontSize: "13px",
    lineHeight: "1.6",
  }}
>
{`-----> createAsyncThunk allows to read the data and inject to slice
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const getUsers = createAsyncThunk("users/getUsers", async () => {
      const res = await axios.get("/users")
      return res.data
    }
)

export const addUser = createAsyncThunk("users/addUser", async (data) => {
      const res = await axios.post("/users", data)
      return res.data
    }
)

export const updateUser = createAsyncThunk("users/updateUser", async ({ id, data }) => {
      const res = await axios.put(\`/users/\${id}\`, data)
      return res.data
    }
)
export const deleteUser = createAsyncThunk("users/deleteUser",
    async (id) => {
      await axios.delete(\`/users/\${id}\`)
      return id
    }
)
====================================================
SLICE
====================================================
const userSlice = createSlice({
    name: "users",
    initialState: {
      users: [],
      loading: false,
      error: null,
    },
    reducers: {},

--> reducers for normal data store but extra reducers if async data
    extraReducers: (builder) => {
      builder
      .addCase(getUsers.pending, (state) => {
          state.loading = true
        }
      )
      .addCase(getUsers.fulfilled, (state, action) => {
          state.loading = false
          state.users =action.payload
        }
      )
      .addCase(getUsers.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message
        }
      )
====================================================
POST
====================================================
      .addCase(addUser.fulfilled, (state, action) => {
          state.users.push(action.payload)
        }
      )
====================================================
PUT
====================================================
      .addCase(updateUser.fulfilled,(state, action) => {
          state.users = state.users.map((user) =>
                user.id === action.payload.id ? action.payload : user
            )
        }
      )
      .addCase(deleteUser.fulfilled, (state, action) => {
          state.users = state.users.filter(
              (user) =>user.id !== action.payload
            )
        }
      )
    }
})
export default userSlice.reducer`}
</pre>

</div>

{/* ====================================== */}
{/* RIGHT */}
{/* ====================================== */}

<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "18px",
    borderRadius: "10px",
    overflowX: "auto",
  }}
>

<h2>Component + useSelector</h2>

<pre
  style={{
    fontSize: "13px",
    lineHeight: "1.6",
  }}
>
{`
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getUsers, addUser, updateUser, deleteUser} from "./userSlice"

function Users() {
  const dispatch = useDispatch()
====================================================
GET DATA FROM STORE
====================================================
  const {users,loading,error} = useSelector((state) => state.users)
====================================================
GET USERS
====================================================
  useEffect(() => {
    dispatch(getUsers())
  }, [])
====================================================
POST USER
====================================================
  const handleAdd = () => {
    dispatch(addUser({
        name: "praveen",
        age: 22
      })
    )
  }
====================================================
PUT USER
====================================================
  const handleUpdate = () => {
    dispatch(updateUser({
        id: 1,
        data: { name: "sai" }
      })
    )
  }
====================================================
DELETE USER
====================================================
  const handleDelete = () => {
    dispatch(deleteUser(1))
  }

====================================================
UI
====================================================

  if (loading)
    return <h2>Loading...</h2>
  if (error)
    return <h2>{error}</h2>

  return (
    <div>
      <button onClick={handleAdd}>Add</button>

      <button onClick={handleUpdate}>Update</button>

      <button onClick={handleDelete}>Delete</button>
===================================================
INJECTING STORE DATA
====================================================
      {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name} </h2>
          </div>
        ))
      }
    </div>
  )
}

export default Users

====================================================
FLOW
====================================================

dispatch(action)
       ↓

createAsyncThunk
       ↓

API Call
       ↓

extraReducers
updates store
       ↓

useSelector gets
updated store data
       ↓

UI re-renders

====================================================`}
</pre>
</div>
</div>
</section>
      <ImageBanner/>
      <h2 style={styles.title}>
        🧠 Complete Redux Toolkit +
        React-Redux Demo
      </h2>


      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ✅ What is Redux?
        </h2>

        <p>
          Redux is a global state management
          library.
        </p>

        <p>
          Instead of passing props deeply,
          Redux stores global data inside a
          centralized store.
        </p>

        <div style={styles.flowBox}>
          <h3>🔥 Redux Flow</h3>

          <pre style={styles.code}>
{`Button Click
    ↓
dispatch(action)
    ↓
Reducer runs
    ↓
Redux Store updates
    ↓
useSelector gets new state
    ↓
React re-renders`}
          </pre>
        </div>
        

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3>✅ Redux Used For</h3>

            <ul>
              <li>Authentication</li>
              <li>Shopping carts</li>
              <li>Theme systems</li>
              <li>Global app state</li>
              <li>Complex dashboards</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>⚡ Important Redux Terms</h3>

            <ul>
              <li>Store</li>
              <li>Slice</li>
              <li>Reducer</li>
              <li>dispatch()</li>
              <li>useSelector()</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRENT STORE STATE
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔥 Current Redux Store State
        </h2>

        <div style={styles.stateBox}>
          <h3>Count: {count}</h3>

          <h3>Text: {text}</h3>

          <h3>
            Theme:{" "}
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </h3>

          <h3>Todos:</h3>

          <ul>
            {todos?.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>

          <h3>
            Component Render Count:
            {renderRef.current}
          </h3>
        </div>
      </section>

      {/* =====================================================
          USESELECTOR
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ✅ useSelector()
        </h2>

        <p>
          useSelector extracts Redux state from
          the store.
        </p>

        <pre style={styles.code}>
{`const count = useSelector(
  (state) => state.counter.count
)`}
        </pre>

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3>🔥 Important</h3>

            <ul>
              <li>
                Component re-renders when selected
                value changes
              </li>

              <li>
                useSelector subscribes to Redux
                store
              </li>
            </ul>
          </div>

          <div style={styles.trapCard}>
            <h3>🔴 Common Trap</h3>

            <pre style={styles.code}>
{`const obj = useSelector(
  state => ({
    count: state.counter.count
  })
)

// ❌ new object every render`}
            </pre>
          </div>
        </div>
      </section>

      {/* =====================================================
          USEDISPATCH
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ✅ useDispatch()
        </h2>

        <p>
          useDispatch sends actions to Redux
          reducers.
        </p>

        <pre style={styles.code}>
{`const dispatch = useDispatch()

dispatch(increment())`}
        </pre>

        <button
          style={styles.button}
          onClick={() => dispatch(increment())}
        >
          + Increment
        </button>

        <button
          style={styles.button}
          onClick={() => dispatch(decrement())}
        >
          - Decrement
        </button>

        <button
          style={styles.goodButton}
          onClick={() =>
            dispatch(incrementByAmount(5))
          }
        >
          +5 Payload
        </button>
      </section>

      {/* =====================================================
          TEXT INPUT
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ✍️ Controlled Input Redux Example
        </h2>

        <input
          style={styles.input}
          value={text}
          placeholder="Type here..."
          onChange={(e) =>
            dispatch(setText(e.target.value))
          }
        />

        <pre style={styles.code}>
{`dispatch(
  setText(e.target.value)
)`}
        </pre>
      </section>

      {/* =====================================================
          TODOS
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          📝 Todo Redux Example
        </h2>

        <button
          style={styles.goodButton}
          onClick={() =>
            dispatch(addTodo("New Redux Task"))
          }
        >
          Add Todo
        </button>

        <button
          style={styles.badButton}
          onClick={() => dispatch(removeTodo(0))}
        >
          Remove First Todo
        </button>

        <pre style={styles.code}>
{`addTodo: (state, action) => {
  state.todos.push(action.payload)
}`}
        </pre>

        <div style={styles.flowBox}>
          <h3>⚡ Redux Toolkit Magic</h3>

          <p>
            Redux Toolkit uses Immer internally.
          </p>

          <p>
            So this is SAFE:
          </p>

          <pre style={styles.code}>
{`state.todos.push(...)`}
          </pre>

          <p>
            Immer creates immutable updates
            internally.
          </p>
        </div>
      </section>

      {/* =====================================================
          THEME
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🌗 Theme Toggle Redux Example
        </h2>

        <button
          style={styles.button}
          onClick={() => dispatch(toggleTheme())}
        >
          Toggle Theme
        </button>

        <pre style={styles.code}>
{`toggleTheme: (state) => {
  state.darkMode = !state.darkMode
}`}
        </pre>
      </section>

      {/* =====================================================
          REDUX TOOLKIT
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔥 What createSlice() Does
        </h2>

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3>Without Toolkit</h3>

            <ul>
              <li>Action Types</li>
              <li>Action Creators</li>
              <li>Reducer switch cases</li>
              <li>Boilerplate heavy</li>
            </ul>
          </div>

          <div style={styles.fixCard}>
            <h3>With Toolkit</h3>

            <ul>
              <li>Less code</li>
              <li>Auto actions</li>
              <li>Immer support</li>
              <li>Cleaner reducers</li>
            </ul>
          </div>
        </div>

        <pre style={styles.code}>
{`const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++
    }
  }
})`}
        </pre>
      </section>

      {/* =====================================================
          IMMUTABILITY
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔥 Redux Immutability
        </h2>

        <div style={styles.cardGrid}>
          <div style={styles.trapCard}>
            <h3>❌ Vanilla Redux BAD</h3>

            <pre style={styles.code}>
{`state.count++

return state`}
            </pre>
          </div>

          <div style={styles.fixCard}>
            <h3>✅ Vanilla Redux GOOD</h3>

            <pre style={styles.code}>
{`return {
  ...state,
  count: state.count + 1
}`}
            </pre>
          </div>

          <div style={styles.fixCard}>
            <h3>✅ Redux Toolkit GOOD</h3>

            <pre style={styles.code}>
{`state.count++

// Immer handles immutability`}
            </pre>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMON INTERVIEW TRAPS
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔴 Redux Interview Traps
        </h2>

        <div style={styles.cardGrid}>
          <div style={styles.trapCard}>
            <h3>
              ❌ Returning incomplete state
            </h3>

            <pre style={styles.code}>
{`return {
  count: 10
}

// removes everything else`}
            </pre>
          </div>

          <div style={styles.trapCard}>
            <h3>❌ Heavy useSelector</h3>

            <p>
              Large selections cause unnecessary
              re-renders.
            </p>
          </div>

          <div style={styles.trapCard}>
            <h3>❌ Side Effects in Reducers</h3>

            <pre style={styles.code}>
{`fetch("/api")

// reducers must stay pure`}
            </pre>
          </div>

          <div style={styles.trapCard}>
            <h3>❌ New Objects in Selector</h3>

            <p>
              Causes unnecessary renders.
            </p>
          </div>
        </div>

        <button
          style={styles.badButton}
          onClick={() =>
            dispatch(replaceWholeStateWrong())
          }
        >
          Run Bad Replace Example
        </button>
      </section>

      {/* =====================================================
          REDUX FLOW
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ⚡ Complete Redux Flow Diagram
        </h2>

        <pre style={styles.code}>
{`COMPONENT
   ↓
dispatch(action)
   ↓
REDUCER
   ↓
STORE UPDATED
   ↓
useSelector gets latest state
   ↓
COMPONENT RE-RENDERS`}
        </pre>
      </section>

      {/* =====================================================
          REDUX VS CONTEXT
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ⚡ Redux vs Context API
        </h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Context API</th>
              <th style={styles.th}>Redux</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={styles.td}>
                Small-medium global state
              </td>

              <td style={styles.td}>
                Large complex apps
              </td>
            </tr>

            <tr>
              <td style={styles.td}>
                Simpler setup
              </td>

              <td style={styles.td}>
                Better tooling
              </td>
            </tr>

            <tr>
              <td style={styles.td}>
                Re-render issues possible
              </td>

              <td style={styles.td}>
                Optimized subscriptions
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
          </tbody>
        </table>
      </section>

      {/* =====================================================
          INSTALLATION
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          📦 Installation
        </h2>

        <pre style={styles.code}>
{`npm install @reduxjs/toolkit react-redux`}
        </pre>
      </section>

      {/* =====================================================
          FINAL TAKEAWAYS
      ===================================================== */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🚀 Final Redux Takeaways
        </h2>

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3>✅ Remember</h3>

            <ul>
              <li>Redux manages global state</li>
              <li>Reducers must stay pure</li>
              <li>dispatch sends actions</li>
              <li>
                useSelector subscribes to store
              </li>
              <li>
                Redux Toolkit reduces boilerplate
              </li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>💼 Real World Usage</h3>

            <ul>
              <li>Authentication</li>
              <li>Theme systems</li>
              <li>E-commerce carts</li>
              <li>Dashboards</li>
              <li>Large enterprise apps</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   APP WRAPPER
========================================================= */

export default function ReduxToolkitCompleteDemo() {
  return (
    <Provider store={store}>
      <ReduxDemoComponent />
    </Provider>
  );
}