import React from 'react'

const Currying = () => {
  return (
    <div>
<code style={{ textAlign: "left" }}>
  <pre
    style={{
      background: "#111",
      color: "#00ff90",
      padding: "20px",
      borderRadius: "10px",
      overflowX: "auto",
      fontSize: "14px",
      lineHeight: "1.8",
    }}
  >
{`
====================================================
VAR vs LET vs CONST
====================================================
JavaScript has 3 ways to declare variables:

1. var  (not appriciated to use)
2. let
3. const

====================================================
1. VAR
====================================================

Features
--------
✔ can redeclare
✔ can reassign
✔ function scoped
✔ hoisted
✔ initialized with undefined

Example
-------

var a = 10
var a = 20
a = 30

console.log(a)  //30

====================================================
VAR HOISTING
====================================================

console.log(x)  //undefined due to hoisting
var x = 100

Behind the scenes
-----------------
var x
console.log(x)
x = 100
Reason:  var is hoisted and initialized with undefined

function test() {
  var name = "praveen"
}
console.log(name) //reference error

Reason: var is function scoped

====================================================
VAR BLOCK ISSUE
====================================================

if (true) {
  var city = "hyderabad"
}
console.log(city)

Output: hyderabad

Reason: var ignores block scope

====================================================
2. LET
====================================================

Features
--------
✘ cannot redeclare
✔ can reassign
✔ block scoped
✔ hoisted
✘ not initialized

Example
-------
let age = 22
age = 23

console.log(age)

====================================================
LET REDECLARE ERROR
====================================================
let value = 10
let value = 20

Output
------
SyntaxError

====================================================
TEMPORAL DEAD ZONE
====================================================
console.log(user)           //reference error due to temporal dead zone
let user = "praveen"

Reason
------
Variable exists in memory but cannot be accessed before declaration
This period is called: Temporal Dead Zone (TDZ)

====================================================
LET BLOCK SCOPE
====================================================
if (true) {
  let marks = 90
}
console.log(marks)
Output: ReferenceError

Reason: let follows block scope

let a=20;


====================================================
3. CONST
====================================================

Features
--------
✘ cannot redeclare
✘ cannot reassign
✔ block scoped
✔ hoisted
✘ not initialized

Example
-------

const pi = 3.14

console.log(pi)

====================================================
CONST REASSIGN ERROR
====================================================

const country = "india"

country = "usa"

Output
------
TypeError

====================================================
CONST OBJECT UPDATE
====================================================

const user = {
  name: "praveen"
}

user.name = "sai"

console.log(user.name)  //sai

Reason
------
Object reference is constant, not object contents

====================================================
VAR vs LET vs CONST
====================================================

FEATURE             var      let      const
------------------------------------------------
Redeclare           ✔        ✘        ✘
Reassign            ✔        ✔        ✘
Block Scope         ✘        ✔        ✔
Function Scope      ✔        ✘        ✘
Hoisted             ✔        ✔        ✔
TDZ                 ✘        ✔        ✔

====================================================
CURRYING
====================================================

Definition
----------
Currying converts a function with
multiple arguments into nested
functions taking one argument at a time

====================================================
NORMAL FUNCTION
====================================================

function add(a, b, c) {
  return a + b + c
}

console.log(add(1, 2, 3))

Output
------
6

====================================================
CURRIED FUNCTION
====================================================

function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}
console.log(add(1)(2)(3))  //6
====================================================
ARROW FUNCTION CURRYING
====================================================

const multiply =(a) => (b) =>(c) => a * b * c

console.log(multiply(2)(3)(4)) //24

used at useCallback(()=>{}) equals useMemo(()=>()=>{})

====================================================
WHY CURRYING?
====================================================
✔ reusable functions
✔ partial application
✔ cleaner code
✔ functional programming
✔ dynamic configuration
====================================================
PARTIAL APPLICATION
====================================================

const add =(a) =>(b) => a + b
const addx = add(10)
console.log(addx(5))   //15

Reason: First function remembers value 10

====================================================
REAL WORLD CURRYING
====================================================

const greet =(message) =>(name) => console.log(message + " " + name )
const sayHello = greet("Hello")
sayHello("Praveen")

Output: Hello Praveen

====================================================
CLOSURE + CURRYING
====================================================
Currying works because of closures
Inner function remembers outer function variables

Example
-------
function outer(a) {
  return function inner(b) {
    return a + b
  }
}

inner remembers: a

====================================================
INTERVIEW POINTS
====================================================
var
---
- function scoped
- hoisted with undefined

let
---
- block scoped
- TDZ

const
-----
- block scoped
- cannot reassign

currying
--------
- one argument at a time
- returns nested functions
- uses closures internally

====================================================
====================================================
CLOSURE
====================================================

function outer() {

  let count = 0

  return function() {

    count++

    console.log(count)

  }

}

const fn = outer()

fn()
fn()
fn()

====================================================
VAR SHARED MEMORY ISSUE
====================================================

for (var i = 1; i <= 3; i++) {

  setTimeout(() => {
    console.log(i)
  })

}

====================================================
LET NEW MEMORY EACH ITERATION
====================================================

for (let i = 1; i <= 3; i++) {

  setTimeout(() => {
    console.log(i)
  })

}

====================================================
DEFAULT PARAMETERS
====================================================

function greet(name = "Guest") {

  console.log(name)

}

greet()

====================================================
REST OPERATOR
====================================================

function sum(...nums) {

  console.log(nums)

}

sum(1, 2, 3)

====================================================
SPREAD OPERATOR
====================================================

const arr1 = [1, 2]

const arr2 = [...arr1, 3, 4]

console.log(arr2)

====================================================
DESTRUCTURING
====================================================

const user = {
  name: "praveen",
  age: 22
}

const { name, age } = user

console.log(name)

====================================================
ARRAY DESTRUCTURING
====================================================

const nums = [10, 20]

const [a, b] = nums

console.log(a)

====================================================
OPTIONAL CHAINING
====================================================

const user = {}

console.log(user?.address?.city)

====================================================
NULLISH COALESCING
====================================================

const value = null

console.log(value ?? "default")

====================================================
TEMPLATE LITERALS
====================================================

const name = "praveen"

console.log(\`hello \${name}\`)
====================================================
`}
  </pre>
</code>
    </div>
  )
}

export default Currying