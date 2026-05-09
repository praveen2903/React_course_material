import { useState, useEffect, useRef } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Praveen", age: 20 });

  useEffect(() => {
    console.log("Updated count:", count);
  }, [count]);

  // 🔴 Trap 1: Stale state-- 
  // like react updates only when function is fully completed if need you need react batching

  const staleTrap = () => {
    setCount(count + 1);
    console.log("Stale count:", count); // ❌ Give old value
  };

  // ✅ Fix: functional update
  const staleFix = () => {
    setCount(prev => prev + 1);
  };
//-------------------------------------------------------------------


  // 🔴 Trap 2: Multiple updates (wrong)  - react batching
  const doubleWrong = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  // ✅ Fix: correct batching usage
  const doubleCorrect = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };
//-------------------------------------------------------------------


  // 🔴 Trap 3: Mixing updates
  const mixingTrap = () => {
    setCount(prev => prev + 1);
    setCount(count + 1); // ❌ stale
  };

  // fix: use batching
    const mixingFix = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    };
//-------------------------------------------------------------------

  // 🔴 Trap 4: Object overwrite -- replaces the whole object like removes name too
  const objectTrap = () => {
    setUser({ age: 25 }); // ❌ name lost
  };

  // ✅ Fix: preserve object - {name: praveen, age: 25 (updated from 20 preserved)}
  const objectFix = () => {
    setUser(prev => ({ ...prev, age: 25 }));
  };
//-------------------------------------------------------------------

  // 🔴 Trap 5: Closure issue
//Closures capture state from the render they were created in, 
//so async callbacks like setTimeout may use stale values. We fix this using useRef or functional updates.

  const closureTrap = () => {
    setCount(count + 1);

    setTimeout(() => {
      console.log("Closure count:", count); // ❌ old value
    }, 1000);
  };

    // if immediate
    const closureImmediateFix = () => {
        setCount(prev => {
            const updated = prev + 1;
            console.log("Updated:", updated);
            return updated;
        });
    };

    // manual fix -- works for only single call closure fix
    const closureManualFix = () => {
        const updated = count + 1;
        setCount(updated);

        setTimeout(() => {
            console.log("Manual value:", updated); // ✅ correct
        }, 1000);
    };

    // keep ref always in sync  -works for the multiple calls whenever count changed
    const countRef = useRef(count);
    useEffect(() => {
        countRef.current = count;
    }, [count]);

    const closureRefFix = () => {
        setCount(prev => prev + 1);

        setTimeout(() => {
            console.log("Ref value:", countRef.current); // ✅ always latest
        }, 1000);
    };
//-------------------------------------------------------------------
  // 🔥 Batching demo
  const batchingDemo = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    // 👉 Only ONE re-render
  };

  return (
    <div style={{ padding: 20, textAlign:'left' }}>
      <h2>useState Interview Traps and react batching-- check console</h2>
      <code><pre>
{`const [count,setCount]= useState(0)
const handleClick = ()=>{
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
}
console.log(count) //1 --- no react batching so dom paint done post update
`}</pre></code>
      <p> No React batching the post completion of the funtcion  only dom updates so in setInterval and setTimeout we use react batching </p>
      <code><pre>
{`const [count,setCount] = useState(0)
const handleClick=()=>{
  setCount(count=> count+1)
  setCount(count=> count+1)
  setCount(count=> count+1)
}
console.log(count)    //3
}`}
      </pre></code>
      <h3>Count: {count}</h3>
      <h3>User: {user.name} - {user.age}</h3>


      <button onClick={staleTrap}>❌ Stale Trap</button>
      <button onClick={staleFix}>✅ Stale Fix</button>

      <br /><br />

      <button onClick={doubleWrong}>❌ Double Wrong</button>
      <button onClick={doubleCorrect}>✅ Double Correct</button>

      <br /><br />

      <button onClick={mixingTrap}>❌ Mixing Trap</button>

      <br /><br />

      <button onClick={objectTrap}>❌ Object Trap</button>
      <button onClick={objectFix}>✅ Object Fix</button>

      <br /><br />

      <button onClick={closureTrap}>❌ Closure Trap</button>

      <br /><br />

      <button onClick={batchingDemo}>🔥 Batching Demo (+3)</button>
    </div>
  );
}