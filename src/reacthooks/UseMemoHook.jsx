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

<pre>
  {`❌ useMemo outside component → invalid
❌ Overusing useMemo adds overhead
❌ New object/array breaks memoization
❌ useMemo is NOT guaranteed (React may discard cache)
❌ Doesn’t prevent re-render → only memoizes value

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
}, []); // runs only once next for need of same function it uses the same reference


/* =========================================================
✅ useMemo for derived state  -- useMemo rewrites function only when text changes else provides same value reference
========================================================= */
const upperText = useMemo(() => {
  console.log("Converting text...");
  return text.toUpperCase();
}, [text]);


================================================================
**Bigger Examples -till the change in dependency array or page loading no matter no.of renders of controlled components same reference stored
===================================================================
  const tooltipContents = useMemo(() => [
{
  type: "maximum",
  data: \`
This is maximum tooltip content.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.
        \`,
      },

{
  type: "more",
  data: \`
This is more tooltip content.

React tooltip supports multiline text.

Hover and click both are supported.

This is medium large data.
        \`,
      },

{
  type: "medium",
  data: \`
This is medium content.

Expandable tooltip works here.
        \`,
      },

{
  type: "normal",
  data: \`
This is normal tooltip.
        \`,
      },

{
  type: "less",
  data: \`Small tooltip.\`,
      },
], []);

  // MEMOIZED DATA => NO RE-CREATION ON RE-RENDER  -- when no useMemo
const data = useMemo(() => {
  return Array.from({ length: 15 }, (_, index) => {
    const content = tooltipContents[index % 5];

    return {
      id: index + 1,
      name: \`User \${index + 1}\`,
      age: Math.floor(Math.random() * 11) + 20,
      target: Math.ceil(Math.floor(Math.random() * 11) * 10),
      data: content.data,
      type: content.type,
      link: "https://google.com",
    };
  });
}, [tooltipContents]);
`}
</pre><div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "20px",
    textAlign: "left"
  }}
>
  <pre>
{`
❌ React.memo ONLY

const Child = React.memo(({ config }) => {
   console.log("Child");
   return <div />;
 }
);
const Parent= ()=> {
    const config = {
      theme: "dark"
    };
    return(
      <child config={config} />
    )
}

Increment Count
       ↓
Parent Re-render
       ↓
New Object Created
       ↓
config -> 0x111

Next Render
       ↓
config -> 0x222

React.memo
       ↓
0x111 !== 0x222
       ↓
Props Changed
       ↓
Child Re-renders

Result:
React.memo Failed
`}
  </pre>

  <pre>
{`
✅ React.memo + useMemo=


const Child = React.memo(({ config }) => {
   console.log("Child");
   return <div />;
 }
);
const Parent= ()=> {
  const config = useMemo(() => ({
    theme: "dark"
  }),[]);
  return(
    <child config={config} />
  )
}

Increment Count
       ↓
Parent Re-render
       ↓
Same Object Returned
       ↓
config -> 0x111

Next Render
       ↓
config -> 0x111

React.memo
       ↓
0x111 === 0x111
       ↓
Props Same
       ↓
Skip Re-render of page

Result: React.memo Works`}
  </pre>
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "20px",
    textAlign: "left"
  }}
>
  <pre>
{`❌ Without useCallback

const saveUser = () => {
  console.log("save");
};

Parent Render
      ↓
saveUser -> 0x111

Next Render
      ↓
saveUser -> 0x222

React.memo Child
      ↓
Function Changed
      ↓
Child Re-renders

Result: Extra Re-renders
`}
  </pre>

  <pre>
{`✅ With useCallback

const saveUser = useCallback(() => {
  console.log("save");
}, []);

Parent Render
      ↓
saveUser -> 0x111

Next Render
      ↓
saveUser -> 0x111

React.memo Child
      ↓
Function Same
      ↓
Skip Re-render

Result: Stable Function
`}
  </pre>
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "20px",
    textAlign: "left"
  }}
>
  <pre>
{`❌ Only useCallback
const data = products.filter(...);
const onClick = useCallback(() => {},[]);

Parent Render
      ↓
New Array
      ↓
data -> 0x111 data changes so the function reference changes every render creates new function

Next Render
      ↓
data -> 0x222

React.memo Child
      ↓
Props Changed
      ↓
Re-render

Reason: Array Changed`}
  </pre>

  <pre>
{`✅ useMemo + useCallback (expensive calculations and updation sent to child)

const data = useMemo(() =>
  products.filter(...)
,[products]);

const onClick = useCallback(() => {},[]);

Parent Render
      ↓
data -> 0x111
fn   -> 0x555

Next Render (like same reference)
      ↓
data -> 0x111
fn   -> 0x555

React.memo Child
      ↓
Props Same
      ↓
Skip Re-render

Reason: Array + Function Stable`}
  </pre>
</div>

      <h3>💼 Use Cases</h3>

<pre>{`Expensive calculations, Stable object/array references, Derived values (like filtering, sorting)

useMemo is used to memoize expensive computations or stabilize references to avoid unnecessary re-renders, especially when used with React.memo.`}</pre>

      </div>
    </div>
  );
};

export default UseMemoHook;