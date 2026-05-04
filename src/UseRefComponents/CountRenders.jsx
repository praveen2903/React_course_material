import { useEffect, useRef, useState } from "react"

const CountRenders = () => {
  const [count, setCount]  = useState(0);
  const renderCountRef = useRef(0);

  // renderCountRef.current++; //same as useEffect without any dependency array

  useEffect(()=>{
    renderCountRef.current+=1;
  })

  return (
    <div style={{display:'flex', gap:'30px'}}>
    <div>Ref to count the no of renderings happended on click count</div>
      <span>count: {count}</span>
      <span>Rendered Count: {renderCountRef.current}</span>
      <button onClick={()=>setCount(count+1)}> click</button>
    </div>
  )
}

export default CountRenders