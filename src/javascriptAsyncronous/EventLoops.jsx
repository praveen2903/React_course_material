import React from 'react'

const EventLoops = () => {

    
  return (
    <div style={{textAlign:'left'}}>
        <h2>EventLoops  -- due to timeouts</h2>
        <code>
            <pre>
{`console.log('start');
for(let i=0; i< 2; i++){
    f1();
    f2();
}
console.log('end');

function f1(){
    setTimeout(()=>{console.log('inside f1 ')}, 1000);
}
function f2() {
    console.log("inside f2");
}

output order: start inside f2 inside f2 end inside f1 inside f1
`}
            </pre>
        </code>
        <h2>But I need to run f1 first and then f2 mandatorily  -- Then use callbacks to avoid event loops</h2>
        <code>
            <pre>
{`console.log('start');
for(let i=0; i< 2; i++){
    f1(f2);
}
console.log('end');

function f1(callback){
    setTimeout(()=>{console.log('inside f1 '); callback()}, 1000);
}
function f2() {
    console.log("inside f2");
}

output order: start end inside f1 inside f1 inside f2 inside f2  
-- start end are syncronous they get top of stack instead of micro & macro queues
`}
            </pre>
        </code>

        <h2>But I need to run f1 first and then f2 mandatorily  -- Then use callbacks to avoid event loops</h2>
        <code>
            <pre>
{`console.log("start");
setTimeout(()=>{
    console.log("Timeout")
},0)
Promise.resolve().then(()=>{
    console.log("promise")
})
console.log("end")

output: 1. start 2. end 3. promise 4. Timeout  - promise :- microtask, timeout :- macrotask
`}
            </pre>
        </code>


    </div>
  )
}

export default EventLoops