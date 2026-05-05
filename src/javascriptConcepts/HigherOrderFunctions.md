//Higher order functions--A function that takes another function as an argument OR returns a function

function greet(name) {
  return "Hello " + name;
}

function processUserInput(callback) {
  const name = "Praveen";
  console.log(callback(name));
}

processUserInput(greet);


function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);
console.log(double(5)); // 10


🧠 Why HOFs are used
1. ✅ Code reuse
function calculate(arr, logic) {
  return arr.map(logic);
}



2. ✅ Cleaner code (functional style)
// ❌ loop
for (let i = 0; i < arr.length; i++) {}

// ✅ HOF
arr.map(...)



3. ✅ Abstraction
function logger(fn) {
  return function (...args) {
    console.log("Calling function...");
    return fn(...args);
  };
}




⚡ Real-world example (important)

1. Debounce (HOF)
  function debounce(fn, delay) {
    let timer;

    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

// 👉 Used in search bars, APIs, etc.

------------------------------------------------------------------
const cart = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1500 },
  { name: "Cap", price: 200 }
];

const total = cart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(total); // 2200

🧠 Why reduce is powerful
Can return:
    number ✅
    object ✅
    array ✅
    anything ✅


🎯 One-line understanding
acc = result built so far
curr = current item

reduce is powerful can do map and filter best used for building custom result can look in useReducer()