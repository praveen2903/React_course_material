import React from 'react'

const Callbacks = () => {
  return (
    <div>
        <h2>Initially syncronous programming</h2>
        <code style={{textAlign:'left', minWidth: '500px'}}>
            <pre>
{`
function login(){
    console.log('user logged IN!')
}
function fetchRestaurant() {
  console.log('restaurant is fetched')
}
function placeOrder() {
  console.log('order placed!!')
}

login()
fetchRestaurant();
placeOrder();

output: user logged IN!      restaurant is fetched           order placed!!
`}
            </pre>
        </code>

<h2> adding asyncronous to it</h2>
        <code style={{textAlign:'left', minWidth: '500px'}}>
            <pre>
{`
function login(){
    setTimeout(()=>{console.log('user logged IN!')}, 2000)
}
function fetchRestaurant() {
  setTimeout(()=>{console.log('restaurant is fetched')}, 1500)
}
function placeOrder() {
  setTimeout(()=>{console.log('order placed!!')}, 1000)
}

function makePayment() {
  setTimeout(()=> {console.log('payment successful!!')}, 1500);
}

function generateInvoice() {
  setTimeout(()=>{console.log('invoice generated! ')}, 3000)
}

login()
fetchRestaurant();
placeOrder();
makePayment();
generateInvoice();

output:- order placed!!     restaurant is fetched    payment successful!!   user logged IN!   invoice generated! 

like what ever has less timeout gets executed first so let's try with callbacks
`}
            </pre>
        </code>

<h2>CALLBACKS - resolve the problem but make callbacks hell like multiple nested callbacks </h2>
        <code style={{textAlign:'left', minWidth: '500px'}}>
            <pre>
{`
function login(callback){
    setTimeout(()=>{console.log('user logged IN!'); callback();}, 1000)
}
function fetchRestaurant(callback) {
  setTimeout(()=>{console.log('restaurant is fetched'); callback();}, 500)
}
function placeOrder(callback) {
  setTimeout(()=>{console.log('order placed!!'); callback();}, 1000)
}

function makePayment(callback) {
  setTimeout(()=> {console.log('payment successful!!'); callback();}, 500);
}

function generateInvoice() {
  setTimeout(()=>{console.log('invoice generated! ');}, 1000)
}

login(() =>{
  fetchRestaurant(()=>{
    placeOrder(()=>{
      makePayment(()=>{
        generateInvoice()
      })
    })
  })
});

output:- user logged IN!   restaurant is fetched  order placed!!   payment successful!!    invoice generated! 

the order is correct but the nested callbacks decreasing readability 
-- phonomenon known as callbacks hell resolving with promises
`}
            </pre>
        </code>
    </div>
  )
}

export default Callbacks