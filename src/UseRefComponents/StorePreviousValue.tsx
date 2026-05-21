import React, { useEffect, useRef, useState } from "react";

const StorePreviousValue = () => {
  const [count, setCount] = useState<number>(0);
  const [prevValue, setPrevValue] = useState<number>(0);

  const prevCountRef = useRef<number>(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const handleClick=()=>{
    setPrevValue(count);
    setCount(count+1)
  }

  return (
    <div>
        <code>
            <pre>
{`useState can do it too by why ref
Because useRef:

stores value
does NOT trigger re-render
survives re-renders
is meant for mutable values

while state changes always trigger re-render.
  const prevCountRef = useRef<number>(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  
  
<button onClick={() => setCount(count + 1)}>
    Increment
</button>`}
            </pre>
        </code>
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {prevCountRef.current}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default StorePreviousValue;