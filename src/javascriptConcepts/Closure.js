function createCounter() {
  let count = 0; // private variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// ❌ prints: 4, 4, 4

for( var i=1; i<=3; i++) {
     (function(j){
        setTimeout(()=>console.log(j), 1000);
    })(i);
}

// prints 1,2,3
