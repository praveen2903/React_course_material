import { useEffect, useRef, useState } from "react";

const GridLights = () => {
  const [active, setActive]= useState([]);
  const length =9;                        //3x3 grid

  const clickBox = (index) => {
    setActive(prev => prev.includes(index) ? prev.filter(item => item !== index) : [...prev, index]);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null)


  useEffect(()=>{
    timerRef.current = setInterval(()=>{
          setActiveIndex(index =>  index == 8 ? 0: index+1)
    }, 3000) 
    return ()=>clearTimeout(timerRef.current) //if interval stopped cleanup will be executed
  },[])

  const stop= ()=>{
    clearTimeout(timerRef.current) //immediate stop like cleanup only
    timerRef.current=null;
  }


  const [startIndex, setStartIndex] = useState(0)
  const startRef = useRef(null);
  const [running,setRunning] = useState(false);

  useEffect(()=>{
    startRef.current= setInterval(()=>{
      setStartIndex(index=> index==8 ? 0 : index+1)
    }, 3000)
    return () =>clearInterval(startRef.current)
  },[running])

  const start = () =>{
    setRunning(true)
  }

  const stopStart = () =>{
    setRunning(false)
    clearInterval(startRef.current)
    startRef.current=null;
  }

  return (
    <>
    <div> Grid Lights</div>
    <code style={{textAlign:'left', minWidth: '500px'}}>
      <pre>
{`const [active, setActive]= useState([]);
const length =9;                        //3x3 grid

const clickBox = (index) => {
  setActive(prev => prev.includes(index) ? prev.filter(item => item !== index) : [...prev, index]);
};
return (
<>
  <div style={{display:"grid", gridTemplateColumns: 'repeat(3, 100px)'}}>
   {
      [...Array(length)].map((_,index)=>(
        <div key = {index} onClick = {() => clickBox(index)} style={{background: active.includes(index)? 'blue': 'white'}}>
        </div>
        ))
   }
  </div>
</>
)
`}
      </pre>
    </code>
    <div style={{display:'grid', gridTemplateColumns:'repeat(3,80px)'}}>
      {
        [...Array(length)].map((_, index)=>(
          <>
            <div key={index} onClick={()=> clickBox(index)}
            style={{
              width: '80px', height:'80px', border:'1px solid black', background: active.includes(index)?'blue': 'white'
            }}></div>
          </>
        ))
      }
      
    </div>
    <h1>Switching indexes</h1>
    <div style={{display:'grid', gridTemplateColumns: 'repeat(3, 100px'}}>
      {
        [...Array(length)].map((_, index)=>(
          <>
          <div key={index} style={{width: '80px', height: '80px',border:'1px solid black', background: index===activeIndex? 'blue':'white'}}></div>
          </>
        ))
      }
    </div>
    <div>
        <button onClick={stop}>Stop</button>
      </div>

      <h3> if needed start button too use a state running and instead of empty state for interval useEffect keep it too</h3>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,100px'}}>
        {
        [...Array(length)].map((_,index)=>(
          <>
          <div key={index} style = {{width:'80px', height:'80px', 
            border: '1px solid black', background: index===startIndex? 'green':'white'}}></div>
          </>
        )
        )
      }
      <div>
        <button onClick={start}>start</button>
        <button onClick={stopStart}>stop</button>
      </div>
      </div>
      
    </>
  )
}

export default GridLights;