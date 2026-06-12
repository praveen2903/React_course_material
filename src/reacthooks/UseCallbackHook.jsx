import React, { useCallback, useState, memo } from "react";

// React.memo → prevents re-render if props don't change

const Child = memo(function Child({ onClick }) {  
//function sent to child no need to send a new function every time although every render creates a new function 
//so use the useCallback hook stores the reference of function and passes same to decrease time of fetching
//same thing said below

  console.log("Child rendered");

  return (
    <button onClick={onClick} style={{ marginTop: "10px" }}>
      Click from Child
    </button>
  );
});

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  /* =========================================================
     🔴 TRAP 1: Function recreated every render
     ========================================================= */
  const badHandler = () => {
    console.log("Bad handler clicked");
  };
  // ❌ New function reference every render → Child re-renders so becomes late

 //fix
  const goodHandler = useCallback(() => {
    console.log("Good handler clicked");
  }, []);
  // ✅ Same function reference across renders

  /* =========================================================
     🔴 TRAP 2: Stale closure issue
     ========================================================= */
  const staleHandler = useCallback(() => {
    console.log("Stale count:", count);
  }, []); // ❌ missing dependency

//fix
  const safeHandler = useCallback(() => {
    console.log("Latest count:", count);
  }, [count]);

  /* =========================================================
     🔴 TRAP 3: Overusing useCallback
     ========================================================= */
  const uselessCallback = useCallback(() => {
    console.log("No benefit here");
  }, []);
  // ❌ If not passed to memoized child → useless

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧠 useCallback Interview Traps Demo</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>

      <div style={{ marginTop: "10px" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
      </div>

      <h3>Child with badHandler ❌</h3>
      <Child onClick={badHandler} />

      <h3>Child with goodHandler ✅</h3>
      <Child onClick={goodHandler} />
<pre>
  {`===========================================================
  Real Example
==================================================================  
parent-> child (parent has useMemo & useCallback and child has React.memo)
500 products sample-- how addToCart is cached using the useCallback

const ProductCard = React.memo(({ product, onAdd }) => {
  console.log(product.name);
  return (
    <button onClick={() => onAdd(product)}>Add</button>
  );
});

function Products({ products }) {
  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.name.includes(search));
  }, [products, search]);

  const addToCart = useCallback((product) => {
    console.log(product.name);
  }, []);

  return (
    <>
      <input value={search} onChange={e => setSearch(e.target.value)}/>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} onAdd={addToCart} />   --addToCart callback function
      ))}
    </>
  );
}`}
</pre>
<h3>Autopsy of above code</h3>
<pre>
{`
┌──────────────────────────────┬──────────────────────────────┐
│ Without React.memo           │ With React.memo             │
├──────────────────────────────┼──────────────────────────────┤
│ Typing in search box         │ Typing in search box        │
│            ↓                 │            ↓                │
│ Parent Re-renders            │ Parent Re-renders           │
│            ↓                 │            ↓                │
│ 500 Product Cards Re-render  │ Props unchanged             │
│            ↓                 │            ↓                │
│ Slow UI                      │ Skip Re-render              │
│                              │            ↓                │
│                              │ Faster UI                   │
└──────────────────────────────┴──────────────────────────────┘

┌──────────────────────────────┬──────────────────────────────┐
│ Without useCallback          │ With useCallback            │
├──────────────────────────────┼──────────────────────────────┤
│ Parent Re-renders            │ Parent Re-renders           │
│            ↓                 │            ↓                │
│ New Function Created         │ Same Function Reference     │
│ Every Render                 │ Reused                      │
│            ↓                 │            ↓                │
│ React.memo detects           │ React.memo detects          │
│ prop changed                 │ prop unchanged              │
│            ↓                 │            ↓                │
│ Child Re-renders             │ Child Skips Re-render       │
└──────────────────────────────┴──────────────────────────────┘

┌──────────────────────────────┬──────────────────────────────┐
│ Without useMemo              │ With useMemo                │
├──────────────────────────────┼──────────────────────────────┤
│ Render                       │          Render             │
│            ↓                 │            ↓                │
│ Filter 10,000 Products       │ Search unchanged            │
│            ↓                 │            ↓                │
│ Expensive Calculation        │ Use Cached Result           │
│ Every Render                 │            ↓                │
│            ↓                 │ No Recalculation            │
│ Slow Performance             │ Faster Performance          │
└──────────────────────────────┴──────────────────────────────┘



React.memo  → Memoize Component  (component cache)

useCallback → Memoize Function   (function cache)

useMemo     → Memoize Value  (Result Cache)`}
</pre>
      
        <h3>Test Handlers</h3>
      <button onClick={staleHandler}>Stale Handler</button>
      <button onClick={safeHandler}>Safe Handler</button>


      <div style={{textAlign:'left'}}>
      <h3>🔥 Interview Traps</h3>

      <pre>
        {`
❌ Functions recreate every render → breaks React.memo
❌ Missing dependencies → stale closures
❌ Overusing useCallback adds overhead
❌ useCallback doesn’t prevent re-render by itself
❌ Useless without React.memo or dependency-sensitive usage`}
      </pre>

      <h3>💼 Use Cases</h3>
      <ul>
        <li>Passing callbacks to memoized children</li>
        <li>Event handlers in optimized components</li>
        <li>Preventing unnecessary re-renders</li>
      </ul>

      <h3>⚡ Pro Interview Answers</h3>
      <p>
        useCallback memoizes function references to prevent unnecessary
        re-renders when passing callbacks to memoized components.
      </p>
      </div>
    </div>
  );
};

export default UseCallbackHook;