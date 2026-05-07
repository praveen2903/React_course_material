import React, { useMemo, useState, memo } from "react";

/* =========================================================
   CHILD COMPONENT
   ========================================================= */

// React.memo prevents re-render if props reference doesn't change
const Child = memo(function Child({ config }) {
  console.log("Child rendered");

  return (
    <div style={{ marginTop: "10px" }}>
      Child Theme: {config.theme}
    </div>
  );
});

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  /* =========================================================
     🔴 TRAP 1: New object every render
     ========================================================= */
  const badConfig = { theme: "dark" }; // ❌ new reference every render

  /* =========================================================
     ✅ FIX: Memoize object reference
     ========================================================= */
  const goodConfig = useMemo(() => ({ theme: "dark" }), []);  //same thing in every render

  /* =========================================================
     🔴 TRAP 2: Expensive calculation without memo
     ========================================================= */
  const expensiveWithoutMemo = (() => {
    console.log("Running expensive function WITHOUT memo");
    let total = 0;
    for (let i = 0; i < 50000000; i++) {
      total += 1;
    }
    return total;
  })();

  /* =========================================================
     ✅ FIX: Expensive calculation with useMemo
     ========================================================= */
  const expensiveWithMemo = useMemo(() => {
    console.log("Running expensive function WITH memo");
    let total = 0;
    for (let i = 0; i < 50000000; i++) {
      total += 1;
    }
    return total;
  }, []); // runs only once

  /* =========================================================
     ✅ useMemo for derived state
     ========================================================= */
  const upperText = useMemo(() => {
    console.log("Converting text...");
    return text.toUpperCase();
  }, [text]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧠 useMemo-- stores the reference of data until unless the function dependent values changes by which it doesn't rerender</h2>

      {/* ---------------- COUNT ---------------- */}
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>

      {/* ---------------- TEXT ---------------- */}
      <div style={{ marginTop: "10px" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p>Uppercase: {upperText}</p>
      </div>

      {/* ---------------- CHILD ---------------- */}
      <h3>Child without memo (badConfig)</h3>
      <Child config={badConfig} />

      <h3>Child with memo (goodConfig)</h3>
      <Child config={goodConfig} />

      {/* ---------------- EXPENSIVE ---------------- */}
      <h3>Expensive Calculation</h3>
      <p>Without Memo: {expensiveWithoutMemo}</p>
      <p>With Memo: {expensiveWithMemo}</p>

      {/* ---------------- THEORY ---------------- */}
      <div style={{textAlign:'left'}}>
        <h3>🔥 Interview Traps</h3>
      <ul>
        <li>❌ useMemo outside component → invalid</li>
        <li>❌ New object/array breaks memoization</li>
        <li>❌ Overusing useMemo adds overhead</li>
        <li>❌ useMemo is NOT guaranteed (React may discard cache)</li>
        <li>❌ Doesn’t prevent re-render → only memoizes value</li>
      </ul>

      <h3>💼 Use Cases</h3>
      <ul>
        <li>Expensive calculations</li>
        <li>Stable object/array references</li>
        <li>Derived values (like filtering, sorting)</li>
      </ul>

      <h3>⚡ Pro Interview Answers</h3>
      <p>
        useMemo is used to memoize expensive computations or stabilize
        references to avoid unnecessary re-renders, especially when used
        with React.memo.
      </p>
      </div>
    </div>
  );
};

export default UseMemoHook;