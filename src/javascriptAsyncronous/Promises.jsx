import React from 'react'

const Promises = () => {
  return (
    <div>
        <h2>Promises increase the readability and functions as callbacks hell</h2>
        <code style={{textAlign:'left', minWidth: '500px'}}>
            <pre>
{`
function login(){
  return new Promise((resolve, reject)=>{
     setTimeout(()=>{resolve('user logged IN!');}, 1000)
  })
}
function fetchRestaurant(){
  return new Promise((resolve, reject)=>{
     setTimeout(()=>{resolve('restaurant is fetched');}, 500)
  })
}
function placeOrder(){
  return new Promise((resolve, reject)=>{
     setTimeout(()=>{resolve('order placed !!');}, 1000)
  })
}
function makePayment(){
  return new Promise((resolve, reject)=>{
     setTimeout(()=>{resolve('payment successful!')}, 500)
  })
}
function generateInvoice(){
  return new Promise((resolve, reject)=>{
     setTimeout(()=>{resolve('invoice generated!')}, 500)
  })
}

login().then((msg)=>{
  console.log(msg); return fetchRestaurant();
}).then((msg)=>{
  console.log(msg); return placeOrder();
}).then((msg)=>{
  console.log(msg); return makePayment();
}).then((msg)=>{
  console.log(msg); return generateInvoice();
}).then((msg)=>{
  console.log(msg);
}).catch((error)=>{
  console.log(error)
})


output:- user logged IN!   restaurant is fetched  order placed!!   payment successful!!    invoice generated! 

the order is correct but the chaining is too big 
`}
            </pre>
        </code>

        <h2>Promises with reject and resolve</h2>
        <code style={{textAlign:'left', minWidth: '500px'}}>
            <pre>
{`
function makePayment(paymentStatus){
  return new Promise((resolve, reject) =>{
    if(paymentStatus){
      resolve("payment successful!")
    }else {
      reject("payment failed! try again")
    }
  })
}
makePayment(false).then((msg)=>{console.log(msg)}).catch((error)=>{console.log(error)})


output:- payment failed! try again
here catch block gets executed 
`}
            </pre>
        </code>
    </div>
  )
}

export default Promises