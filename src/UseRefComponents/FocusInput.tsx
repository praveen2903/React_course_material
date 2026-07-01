import { useEffect, useRef } from 'react'

const FocusInput = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(()=>{
        inputRef.current?.focus()
    },[])

  return (
    <>
<code style={{textAlign:'left', minWidth: '500px'}}>
    <pre>
{`Common Violations 

Reading ref.current during render
1. Updating refs during render
2. Using refs for values that should be state


Invalid 
Examples of incorrect code for this rule:

// ❌ Reading ref during render

function Component() {
  const ref = useRef(0);
  const value = ref.current; // Don't read during render
  return <div>{value}</div>;
}

// ❌ Modifying ref during render
function Component({value}) {
  const ref = useRef(null);
  ref.current = value; // Don't modify during render
  return <div />;
}
Valid 
Examples of correct code for this rule:

// ✅ Read ref in effects/handlers
function Component() {
  const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(()=>{
        inputRef.current?.focus()
    },[])

  return <input ref={ref} />;
}

// ✅ Use state for UI values
function Component() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

// ✅ Lazy initialization of ref value
function Component() {
  const ref = useRef<String>(null);

  // Initialize only once on first use
  if (ref.current === null) {
    ref.current = expensiveComputation(); // OK - lazy initialization
  }
  const handleClick = () => {
    console.log(ref.current); // Use the initialized value
  };

  return <button onClick={handleClick}>Click</button>;
}`}
    </pre>
</code>
<hr/>
    <div>FocusInput- basic</div>
    <code><pre>
      {`const inputRef = useRef<HTMLInputElement | null>(null);
useEffect(()=>{
        inputRef.current.focus();  // scrolled here when page loads
},[]);

return(
<>
  <input ref={(element)=>{inputRef.current = element}}  // ref={inputRef}placeholder='enter data.....'   //element is the actual, native HTML DOM element that is currently rendering in the browser
    onFocus={(e)=>{
        e.target.style.border= '1px solid #0c5376e7';
        e.target.style.boxShadow = '0 0 10px #97ceeae7'
    }}
    onBlur={(e)=>{
        e.target.style.boxShadow = '0 0 10px #ccc';
        e.target.style.border= 'none';
  }}/>
</>
)`}
      </pre></code>
    <input ref={inputRef} placeholder='enter data.....' style={{padding:'10px', width:'250px'}}
    onFocus={(e)=>{
        e.target.style.border= '1px solid #0c5376e7';
        e.target.style.boxShadow = '0 0 10px #97ceeae7'
    }}
    onBlur={(e)=>{
        e.target.style.boxShadow = '0 0 10px #ccc';
        e.target.style.border= 'none';
    }}/>
    </>
  )
}

export default FocusInput