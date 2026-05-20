import { useState } from "react";

const GridLights = () => {
  const [active, setActive]= useState([]);
  const length =9;                        //3x3 grid

  const clickBox = (index) => {
    setActive(prev => prev.includes(index) ? prev.filter(item => item !== index) : [...prev, index]);
  };

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
    </>
  )
}

export default GridLights;