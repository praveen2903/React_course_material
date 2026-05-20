import React from 'react'

const AsyncAwait = () => {
  return (
    <div>
        <h2>AsyncAwait Instead of promises to remove chaining</h2>
        <code style={{textAlign:'left', minWidth: '500px'}}>
            <pre>
{`
function makePayment(){
  let paymentStatus = false;
  if(paymentStatus){
    console.log('payment successful')
  }else{
    console.log('payment failed')
  }
}

async function processPayment() {
  try{
    let response = await makePayment();
  }
  catch(err){
    console.log(err)
  }
}

processPayment();

output: payment failed
async await was used when asyncronous code is there like data fetching using axios or fetch

if any parallel fetching need to use Promise.allSettled or Promise.all -- all get concurrently executed if no asyncronous code means 
these to execute like syncronous`}
            </pre>
        </code>

    </div>
  )
}

export default AsyncAwait