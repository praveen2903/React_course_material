import { useEffect, useRef, useState } from "react"

const CountRenders = () => {
  const [count, setCount]  = useState(0);
  const renderCountRef = useRef(0);

  const preventFirstRenderRef = useRef(false);

  // renderCountRef.current++; //same as useEffect without any dependency array

  useEffect(()=>{
    renderCountRef.current+=1;
  })

  // useEffect(()=>{
  //   if(!preventFirstRenderRef.current){
  //     preventFirstRenderRef.current=true;
  //     return;
  //   }
  //   renderCountRef.current++; //now both clicks and render value would be same
  // })

  return (
    <div style={{display:'flex', gap:'30px'}}>
    <div>Ref to count the no of renderings happended on click count-- basic</div>
      <span>count: {count}</span>
      <span>Rendered Count: {renderCountRef.current}</span>
      <button onClick={()=>setCount(count+1)}> click</button>
    </div>
  )
}

export default CountRenders