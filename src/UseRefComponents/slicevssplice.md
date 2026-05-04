🔥 slice() vs splice() in JavaScript (Very Important)
These two are commonly confused.
Feature
slice()
splice()
Changes original array?
❌ No
✅ Yes
Returns?
New copied array
Removed items
Used for
Copy / extract part
Add / remove / replace
React preferred?
✅ Yes often
⚠️ Only on copied array
✅ 1. slice() = Cut Piece Without Changing Original
JavaScript
const arr = [10, 20, 30, 40, 50];

const result = arr.slice(1, 4);

console.log(result); // [20,30,40]
console.log(arr);    // [10,20,30,40,50]
Meaning:
JavaScript
slice(start, end)
Includes start, excludes end.
✅ 2. splice() = Remove / Insert / Replace (Mutates)
JavaScript
const arr = [10, 20, 30, 40];

arr.splice(1, 2);

console.log(arr); // [10,40]
Meaning:
JavaScript
splice(startIndex, deleteCount)
Remove 2 items from index 1.
✅ Insert Using splice
JavaScript
const arr = [1,2,4];

arr.splice(2, 0, 3);

console.log(arr); // [1,2,3,4]
Meaning:
JavaScript
start = 2
delete = 0
insert = 3
✅ Replace Using splice
JavaScript
const arr = [1,2,3];

arr.splice(1, 1, 99);

console.log(arr); // [1,99,3]