import React from 'react'

const EventCapturing = () => {
  return (
    <>
    <div>EventCapturing</div>
    <code><pre>
{`return (
<>
      <div onClickCapture={()=> console.log("Parent captured")} onClick={()=> console.log("parent bubbled")}> Parent
        <div onClickCapture={()=>console.log('child captured')} onClick={()=> console.log("child bubbled")}>Child</div>
    </div>
</>

// output:-
// parent captured 
// child captured

// child bubbled
// parent bubbled

// -- EventBubbling can be stopped by event.stopPropagation()
)`}      
</pre></code>
    <div onClickCapture={()=> console.log("Parent captured")} onClick={()=> console.log("parent bubbled")}
    style={{padding:'40px', background: 'blue', cursor: 'pointer'}}> Parent
        <div onClickCapture={()=>console.log('child captured')} onClick={()=> console.log("child bubbled")}
         style={{padding:'40px', background: 'yellow', cursor:'pointer'}}>Child</div>
    </div>
    </>
  )
}


// output:-
// parent captured 
// child captured

// child bubbled
// parent bubbled

// -- EventBubbling can be stopped by event.stopPropagation()


export default EventCapturing