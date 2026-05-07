import React, { useState, useMemo, useCallback, memo } from "react";

const Child = React.memo(function Child({ value, onClick }) {
  console.log("Child rendered");

  return (
    <div style={{ marginTop: "10px" }}>
      <p>Value: {value}</p>
      <button onClick={onClick}>Click Child</button>
    </div>
  );
});

function UseCallbackAndMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const squared = useMemo(() => {
    console.log("Calculating square...");
    return count * count;
  }, [count]);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

//   const handleClick = useMemo(()=>()=>console.log("child button"))
//   const handleClick = useMemo(()=>{
//     return ()=>console.log("child button");
//   })

  return (
    <div style={{ padding: "20px" }}>
        <span>we can implement useCallback with simple useMemo too but need to return function</span>
      <code> 
        {`const handleClick = useCallback(() => {
                console.log("Child button clicked");
            }, []);`}

            <br/>
            {`const handleClick = useMemo(()=>()=>console.log("child button"))`}
            <br/>
            {`const handleClick = useMemo(()=>{
                return ()=>console.log("child button");
            })`}
    </code>
    <br/>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <p>Squared (useMemo): {squared}</p>

      {/* Input */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
        style={{ display: "block", marginTop: "10px" }}
      />

      {/* Child--gets sent same handleClick reference as it is in callback so it gets optimized */}
      <Child value={squared} onClick={handleClick} />  
    </div>
  );
}

export default UseCallbackAndMemo;