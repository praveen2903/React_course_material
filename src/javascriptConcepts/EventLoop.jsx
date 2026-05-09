import React from 'react'

const EventLoop = () => {
    console.log("start");
    setTimeout(()=>{
        console.log("Timeout")
    },0)
    Promise.resolve().then(()=>{
        console.log("promise")
    })
    console.log("end")
  return (
    <>
    <h2>Event Loop</h2>
<div style={{textAlign:'left'}}>
        <code><pre>
{`console.log("start");
setTimeout(()=>{
    console.log("Timeout")
},0)
Promise.resolve().then(()=>{
    console.log("promise")
})
console.log("end")

output: 1. start 2. end 3. promise 4. Timeout

Promise: MicroTask Queue, Timeout: MacroTask queue
`}
   </pre> </code>
</div>
    </>
  )
}

export default EventLoop