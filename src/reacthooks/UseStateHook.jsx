import React, { useEffect, useRef, useState } from "react";

export default function UseStateHookCompleteGuide() {

  /* =========================================================
     🔥 BASIC STATES
     ========================================================= */

  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: "Praveen",
    age: 20,
  });

  const [renderCount, setRenderCount] =
    useState(0);

  const countRef = useRef(count);



  /* =========================================================
     🔥 TRACK RENDERS
     ========================================================= */

  useEffect(() => {

    setRenderCount((prev) => prev + 1);

  }, [count]);



  /* =========================================================
     🔥 KEEP REF UPDATED
     ========================================================= */

  useEffect(() => {

    countRef.current = count;

  }, [count]);



  /* =========================================================
     🔥 LOG UPDATED VALUE
     ========================================================= */

  useEffect(() => {

    console.log(
      "✅ Updated count:",
      count
    );

  }, [count]);



  /* =========================================================
     🔴 TRAP 1: STALE STATE
     ========================================================= */

  /*
  React state updates are async.

  React waits until:
  -------------------
  function completes

  THEN:
  -------
  React batches updates
  and re-renders UI
  */

  const staleTrap = () => {
    setCount(count + 1);
    console.log("❌ stale value:", count);
  };


  /* =========================================================
     ✅ FIX
     ========================================================= */

  const staleFix = () => {
    setCount((prev) => prev + 1);
  };



  /* =========================================================
     🔴 TRAP 2: REACT BATCHING
     ========================================================= */

  /*
  ❌ WRONG
  ----------
  count still old inside same render
  */

  const doubleWrong = () => {

    setCount(count + 1);

    setCount(count + 1);

  };


  /*
  ==========================================================
  ✅ CORRECT
  ==========================================================
  */

  const doubleCorrect = () => {

    setCount((prev) => prev + 1);

    setCount((prev) => prev + 1);

  };



  /* =========================================================
     🔴 TRAP 3: MIXING UPDATES
     ========================================================= */

  const mixingTrap = () => {

    setCount((prev) => prev + 1);

    setCount(count + 1);

  };


  /* =========================================================
     ✅ FIX
     ========================================================= */

  const mixingFix = () => {

    setCount((prev) => prev + 1);

    setCount((prev) => prev + 1);

  };



  /* =========================================================
     🔴 TRAP 4: OBJECT OVERWRITE
     ========================================================= */

  /*
  useState REPLACES object

  unlike class components merge
  */

  const objectTrap = () => {
    setUser({
      age: 25,
    });

  };


  /*
  ==========================================================
  ✅ FIX USING SPREAD
  ==========================================================
  */

  const objectFix = () => {

    setUser((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));

  };



  /* =========================================================
     🔴 TRAP 5: CLOSURE ISSUE
     ========================================================= */

  /*
  Closures capture OLD render values
  */

  const closureTrap = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log("❌ closure value:", count);
    }, 1000);
  };

  /* =========================================================
     ✅ FIX 1: FUNCTIONAL UPDATE
     ========================================================= */

  const closureFunctionalFix = () => {
    setCount((prev) => {
      const updated = prev + 1;
      console.log("✅ updated:", updated);
      return updated;
    });

  };

  /* ========================================================
     ✅ FIX 2: MANUAL VARIABLE
     ========================================================= */
  const closureManualFix = () => {
    const updated = count + 1;
    setCount(updated);
    setTimeout(() => {
      console.log("✅ manual value:", updated);
    }, 1000);
  };

  /* =========================================================
     ✅ FIX 3: useRef
     ========================================================= */

  const closureRefFix = () => {
    setCount((prev) => prev + 1);
    setTimeout(() => {
      console.log("✅ latest ref:", countRef.current);
    }, 1000);
  };



  /* =========================================================
     🔥 BATCHING DEMO
     ========================================================= */

  const batchingDemo = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };



  /* =========================================================
     🔥 ARRAY UPDATE
     ========================================================= */

  const [todos, setTodos] = useState(["React", "Redux",]);

  const addTodo = () => {
    setTodos((prev) => [...prev, `Todo ${prev.length + 1}`,]);
  };



  /* =========================================================
     🔥 RESET STATE
     ========================================================= */

  const resetAll = () => {
    setCount(0);
    setUser({name: "Praveen", age: 20,});

  };


  /* =========================================================
     🔥 STYLES
     ========================================================= */

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
    padding: "10px 16px",
    margin: "8px",
    border: "none",
    borderRadius: "8px",
    background: "#4f46e5",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  };



  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1300px",
        margin: "0 auto",
        background: "#f4f7fb",
        fontFamily: "sans-serif",
        lineHeight: "1.8",
        textAlign: "left",
      }}
    >

      <h2>
        🧠 useState Complete Interview Guide
      </h2>



      {/* =================================================== */}
      {/* 🔥 BASIC THEORY */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          ✅ What is useState?
        </h2>

        <ul>
          <li>
            Stores reactive state
          </li>

          <li>
            Updating state causes re-render
          </li>

          <li>
            State updates are async
          </li>

          <li>
            React batches updates
          </li>
        </ul>

        <pre style={codeStyle}>
{`const [count,setCount] = useState(0);

count
------
Current state value

setCount
----------
Function to update state`}
        </pre>

      </div>



      {/* =================================================== */}
      {/* 🔥 LIVE STATE */}
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
          User:
          {" "}
          {user.name}
          {" "}
          -
          {" "}
          {user.age}
        </h3>

        <h3>
          Renders:
          {" "}
          {renderCount}
        </h3>

      </div>



      {/* =================================================== */}
      {/* 🔥 REACT BATCHING */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 React Batching
        </h2>

        <pre style={codeStyle}>

{`
  /* =========================================================
     🔴 TRAP 1: STALE STATE
     ========================================================= */
  React state updates are async.
  React waits until: function completes
  THEN: React batches updates and re-renders UI

  const staleTrap = () => {
    setCount(count + 1);
    console.log("❌ stale value:", count);
  };
--Fix
  const staleFix = () => {
    setCount((prev) => prev + 1);
  };

 
    /* =========================================================
     🔴 TRAP 2: REACT BATCHING
     ========================================================= */

  /*
  ❌ WRONG
  ----------
  count still old inside same render
  */

  const doubleWrong = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  console.log(count)  //count+1  (o/p like only add 1 though no.of setCounts)

--React Batching Fix
  const doubleCorrect = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  console.log(count)  //count+2 here  o/p like only add no.of setCounts)

❌ WRONG  - commonly know as stale trap
-----------
setCount(count+1)
setCount(count+1)

RESULT:
---------
Only +1  

-- the function executes only once and render only once and get painted when count=1 so it doesn't get updated to 2, if useEffect it rerenders 


WHY?
------
Both use OLD value


✅ CORRECT
------------
setCount(prev=>prev+1)   -- react batching allows you to save the count and next batches it to next state update too
setCount(prev=>prev+1)

RESULT:
---------
+2

WHY?
------
Each update receives latest state`}
        </pre>

        <button
          style={buttonStyle}
          onClick={doubleWrong}
        >
          ❌ Double Wrong
        </button>

        <button
          style={buttonStyle}
          onClick={doubleCorrect}
        >
          ✅ Double Correct
        </button>

      </div>



      {/* =================================================== */}
      {/* 🔥 STALE STATE */}
      {/* =================================================== */}


      {/* =================================================== */}
      {/* 🔥 MIXING TRAP */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Mixing Updates Trap
        </h2>

        <pre style={codeStyle}>
{`❌ BAD
---------
setCount(prev=>prev+1)
setCount(count+1)

Mixing latest + stale value

✅ GOOD
---------
setCount(prev=>prev+1)
setCount(prev=>prev+1)`}
        </pre>

        <button
          style={buttonStyle}
          onClick={mixingTrap}
        >
          ❌ Mixing Trap
        </button>

        <button
          style={buttonStyle}
          onClick={mixingFix}
        >
          ✅ Mixing Fix
        </button>

      </div>



      {/* =================================================== */}
      {/* 🔥 OBJECT TRAP */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Object State Trap
        </h2>

        <pre style={codeStyle}>
{`❌ BAD
---------
setUser({age:25})

RESULT:
---------
name removed

✅ GOOD
---------
setUser(prev=>({
 ...prev,
 age:25
}))`}
        </pre>
        <pre style={codeStyle}>
{`  /* =========================================================
     🔴 TRAP 4: OBJECT OVERWRITE--  useState REPLACES object, unlike class components merge
     ========================================================= */
  const objectTrap = () => {
    setUser({age: 25,});
  };

---  ✅ FIX USING SPREAD

  const objectFix = () => {
    setUser((prev) => ({...prev, age: prev.age + 1,}));
  };`}
        </pre>


<pre>
  {`Example:-
---------------------  
  
  const [formData, setFormData]= useState({
      userName:'',
      Age: 0,
      phoneNumber: '',
      Gender: ''
  })
  

  const handleChange = (event) => {
 (Note:- the Input event carries all the elements type, name, id,value, class....)
      const {name, value} = event.target;
      setFormData({
          ...formData, [name]: value
      })
//update the formData other values keep remained the update one get updated (even the redux same update needed)
  }

 return (
  <>
  <input type="text" name="userName" id="userName" value={formData.userName} onChange={(event)=> handleChange(event)} />
  <input type="number" name="age" id='age" value={formData.age} onChange ={(event)=>handleChange(event)} />
  <input type='text' name='phoneNumber" id='phoneNumber' value={formData.phoneNumber} onChange={(event)=> handleChange(event)} />
  <select id="Gender" onChange={(event)=> handleChange(event)}>
      <option name='gender" value=''> --select--</option>
      <option name='gender" value='Male">Male</option>
      <option name="gender" value="female">Female</option>
      <option name="gender" value="other">Other</option>
  </select>

  or -- use of name tag means allows to keep relativity of options like single select grouped by name only

  <input type="radio" name="gender" id="male" value="Male" checked={formData.gender==="Male"} onChange={(event)=>handleChange(event)}/>
  <input type="radio" name="gender" id="female" value="Female" checked={formData.gender==="Female"} onChange={handleChange}/>
  <input type="radio" name="gender" id='other" value="Other" checked={formData.gender==="Other"} onChange={handleChange} />
</>
);
________________________________________________________________________________
In Redux then:

InitialState: {value:0, name:'', age:0, phoneNumber:''}

// Must return a brand new object reference
return {
  ...state,
  value: state.value + 1      //only the value gets updated.
};`}
</pre>
        <button
          style={buttonStyle}
          onClick={objectTrap}
        >
          ❌ Object Trap
        </button>

        <button
          style={buttonStyle}
          onClick={objectFix}
        >
          ✅ Object Fix
        </button>

      </div>



      {/* =================================================== */}
      {/* 🔥 CLOSURE ISSUE */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Closure Trap
        </h2>

        <pre style={codeStyle}>
{`Closures remember OLD render values

/* =========================================================
    🔴 TRAP 5: CLOSURE ISSUE:-  Closures capture OLD render values
    ========================================================= /*
const closureTrap = () => {
  setCount(count + 1);
  setTimeout(() => {
    console.log("❌ closure value:", count);
  }, 1000);
};
/* =========================================================
    ✅ FIX 1: FUNCTIONAL UPDATE
========================================================= */
const closureFunctionalFix = () => {
  setCount((prev) => {
    const updated = prev + 1;
    console.log("✅ updated:", updated);
    return updated;
  });
};

/* ========================================================
    ✅ FIX 2: MANUAL VARIABLE
    ========================================================= */
const closureManualFix = () => {
  const updated = count + 1;
  setCount(updated);
  setTimeout(() => {
    console.log("✅ manual value:", updated);
  }, 1000);
};

/* =========================================================
    ✅ FIX 3: useRef
    ========================================================= */
const countRef = useRef(count)

const closureRefFix = () => {
  setCount((prev) => prev + 1);
  setTimeout(() => {
    console.log("✅ latest ref:", countRef.current);
  }, 1000);
};

Especially inside:
-------------------
✅ setTimeout
✅ setInterval
✅ async functions`}
        </pre>

        <button
          style={buttonStyle}
          onClick={closureTrap}
        >
          ❌ Closure Trap
        </button>

        <button
          style={buttonStyle}
          onClick={
            closureFunctionalFix
          }
        >
          ✅ Functional Fix
        </button>

        <button
          style={buttonStyle}
          onClick={closureManualFix}
        >
          ✅ Manual Fix
        </button>

        <button
          style={buttonStyle}
          onClick={closureRefFix}
        >
          ✅ useRef Fix
        </button>

      </div>



      {/* =================================================== */}
      {/* 🔥 ARRAY UPDATE */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Array State Update
        </h2>

        <pre style={codeStyle}>
{`❌ BAD
---------
todos.push("new")

WHY BAD -- Mutates original array

✅ GOOD
---------
const [todos, setTodos] = useState(["React", "Redux",]);

const addTodo = () => {
  setTodos((prev) => [...prev, \`Todo \${prev.length + 1}\`]);
};`}
        </pre>

        <button
          style={buttonStyle}
          onClick={addTodo}
        >
          Add Todo
        </button>

        <ul>
          {todos.map((todo,index)=>(
            <li key={index}>
              {todo}
            </li>
          ))}
        </ul>

      </div>



      {/* =================================================== */}
      {/* 🔥 BATCHING DEMO */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔥 Batching Demo
        </h2>

        <pre style={codeStyle}>
{`setCount(prev=>prev+1)
setCount(prev=>prev+1)
setCount(prev=>prev+1)

RESULT: +3

ONLY: 1 re-render`}
        </pre>

        <button
          style={buttonStyle}
          onClick={batchingDemo}
        >
          🔥 +3 Demo
        </button>

      </div>



      {/* =================================================== */}
      {/* 🔥 USESTATE VS USEREF */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          ⚡ useState vs useRef
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
                useState
              </th>

              <th style={tableCell}>
                useRef
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={tableCell}>
                Causes re-render
              </td>

              <td style={tableCell}>
                No re-render
              </td>
            </tr>

            <tr>
              <td style={tableCell}>
                Reactive UI state
              </td>

              <td style={tableCell}>
                Mutable storage
              </td>
            </tr>

            <tr>
              <td style={tableCell}>
                Immutable updates
              </td>

              <td style={tableCell}>
                Mutable .current
              </td>
            </tr>
          </tbody>
        </table>

      </div>



      {/* =================================================== */}
      {/* 🔥 RESET */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>
          🔄 Reset Demo
        </h2>
<pre>
  {`const resetAll = () => {
    setCount(0);
    setUser({name: "", age: 0,});
};`}
</pre>
        <button
          style={buttonStyle}
          onClick={resetAll}
        >
          Reset Everything
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
            useState updates are async
          </li>

          <li>
            React batches updates
          </li>

          <li>
            Functional updates avoid stale state
          </li>

          <li>
            Object state replaces entire object
          </li>

          <li>
            Closures capture old values
          </li>

          <li>
            useRef helps access latest value
          </li>

          <li>
            Never mutate state directly
          </li>
        </ul>

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

