import React, { useEffect, useRef, useState } from "react";

const StorePreviousValue = () => {
  const [count, setCount] = useState<number>(0);
  const [prevValue, setPrevValue] = useState<number>(0);

  const previousRef = useRef<string>("");
  const [value, setValue] = useState<string>('');

  useEffect(()=>{
    previousRef.current = value
  },[value]);

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
      <h2>Basic ref usage 1. with useEffect no rerender,       2. html elements to store the html events</h2>

<code style={{textAlign:'left'}}>
  <pre>
    {`const previousRef = useRef<string>("");
const [value, setValue] = useState<string>('');

useEffect(()=>{
  previousRef.current = value
},[value]);
return (
  <>
    <p>{previousRef.current}</p>
    <input value={value} onChange={(e)=> setValue(e.target.value)} />
  </>
)`}
  </pre>
</code>

<p>{previousRef.current}</p>
<input value={value} onChange={(e)=> setValue(e.target.value)} />
        <code style={{textAlign:'left'}}>
            <pre>
{`useState can do it too by why ref
Because useRef:
stores value does NOT trigger re-render survives re-renders is meant for mutable values
while state changes always trigger re-render.

Note: button->count=1 -> browser painted count=1, prevCount =0 -> useeffect runs -> prevCount=1 -> ref so doesn't re-render

  const prevCountRef = useRef<number>(0);
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

 return( 
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {prevCountRef.current}</h2> 
      <button onClick={() => setCount(count + 1)}>
          Increment
      </button>
)`}
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