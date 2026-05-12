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

    for(i=0; i<10; i++){
        setTimeout(()=>{
            console.log(i)
        },0)
    }


    for(let i=0; i<10; i++){
        setTimeout(()=>{
            console.log(i)
        },0)
    }
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

implicit/ var scopes lets the call backs execute after the block completes
for(i=0; i<10; i++){
    setTimeout(()=>{
        console.log(i)
    },0)
}
output: 10 10 10 10 10 10 10 10 10 10 10 why 10 since <10 means 0-9

let scope lets you make scope for calbacks even though they execute late
for(let i=0; i<10; i++){
    setTimeout(()=>{
        console.log(i)
    },0)
}
output: 0 1 2 3 4 5 6 7 8 9`}
   </pre> </code>
</div>
    </>
  )
}

export default EventLoop