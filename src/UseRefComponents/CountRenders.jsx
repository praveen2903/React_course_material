import { useEffect, useRef, useState } from "react"

const CountRenders = () => {
  const [count, setCount]  = useState(0);
  const renderCountRef = useRef(0);

  const preventFirstRenderRef = useRef(false);
  const counterRef = useRef(0);

  // renderCountRef.current++; //same as useEffect without any dependency array

  useEffect(()=>{
    renderCountRef.current++;
  })

  useEffect(()=>{
    if(!preventFirstRenderRef.current){
      preventFirstRenderRef.current=true;
      return;
    }
    counterRef.current++; //now both clicks and render value would be same
  },[count])

  return (
    <div style={{display:'flex', gap:'30px'}}>
    <div>Ref to count the no of renderings happended on click count-- basic</div>
    <code>
      <pre>
  {`const [count, setCount]  = useState(0);
  const renderCountRef = useRef(0);
  const preventFirstRenderRef = useRef(false);
  const counterRef = useRef(0);

  // renderCountRef.current++; //same as useEffect without any dependency array

  useEffect(()=>{
    renderCountRef.current++;
  })

 useEffect(()=>{
   if(!preventFirstRenderRef.current){     //skip the 1st render like while page loading
     preventFirstRenderRef.current=true;
     return;
   }
   counterRef.current++; //now both clicks and render value would be same
 },[count])
 
 return (
 <>
      <span>count: {count}</span>
      <span>Whole page Rendered Count: {renderCountRef.current}</span>
      <span> No.of Clicks: {counterRef.current}</span>
      <button onClick={()=>setCount(count+1)}> click</button>
 </>
 )`}  </pre></code>
      <span>count: {count}</span>
      <span>Rendered Count: {renderCountRef.current}</span>
      <span> No.of Clicks: {counterRef.current}</span>
      <button onClick={()=>setCount(count+1)}> click</button>
    </div>
  )
}

export default CountRenders