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

    for(var i=0; i<10; i++){  // var i=0 or i=0 is same i gives implicit/global scope
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

Promise: MicroTask Queue (High priority), Timeout: MacroTask queue (low priority)
------------------------------------------------------------------------------------------

function test() {
    console.log('before promises')

    Promise.resolve().then(()=>{
        console.log('promises')
    })
}

console.log("start")
test()
console.log("end")

output:- start before promises end promises
promises-- microtask queue (gets high priority)

-------------------------------------------------------------------------------------------
implicit/ var scopes lets the call backs execute after the block completes
for(i=0 (same as) var i=0; i<10; i++){
    setTimeout(()=>{
        console.log(i)
    },0)
}
output: 10 10 10 10 10 10 10 10 10 10 10 why 10 since <10 means 0-9 like i value get updated before asyncronous tasks
---------------------------------------------------------------------------------------------------------
let scope lets you make scope for callbacks even though they execute late
for(let i=0; i<10; i++){
    setTimeout(()=>{
        console.log(i)
    },0)
}
output: 0 1 2 3 4 5 6 7 8 9
block scope helps to store the block level value for each asyncronous task even same with promises instead of timeout `}
   </pre> </code>
</div>
    </>
  )
}

export default EventLoop