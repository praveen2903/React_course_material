PROMISES VS ASYNC/AWAIT


Interviewer : Promise vs Async/Await. Difference and when to use which? Both handle async code.

But they're not the same thing.

Here's what most devs miss

Think of ordering food
------------------------------------------------------------------------

Promise → "I'll call you when ready" + you wait by phone

Async/Await + you sit down, waiter brings it when done Same result. Different experience. Much cleaner.

Step 1 - Promise

fetch('/api/user').then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))

→ Chaining works but gets messy with multiple calls + Error handling needs .catch at end

Parallel calls → Promise.all() + powerful/ Promise.allSettled()
-------------------------------------------------------------------------------------
- Async/Await

Step

async function getUser() {

try {

const res = await fetch('/api/user') 
const data = await res.json() 
console.log(data) 
} catch(err) {
console.log(err)
}
-----------------------------------------------------------------------------------
When To Use Which + Reads like synchronous code → easy to understand

try/catch → familiar error handling

Debugging → stack traces much cleaner
----------------------------------------------------------------------------------------
Step 3- The Hidden Truth Async/Await is just Promise underneath

async function always returns Promise → await just pauses execution until

Promise resolves

→ No new concept → just cleaner syntax → Both compile to same thing in JS

engine

Step

Promise → parallel operations const [user, orders] = await Promise.all([ fetchUser(),

fetchOrders()

])

→ Both run simultaneously → faster Async/Await + sequential operations

→ Need result of first call to make second call + Cleaner code for complex flows

Always prefer async/await for readability

Real World
+ React data fetching → async/await in useEffect
+ Node.js DB queries → async/await

always
→ Multiple API calls → Promise.all for speed -- parallel execution



Payment flow → sequential → async/awaitSimple way to remember

Promise operations → .then chain → parallel
-------------------------------------------------------------------
Async/Await → cleaner sequential

operations

Promise.all run multiple

simultaneously

Async/Await = Promise underneath