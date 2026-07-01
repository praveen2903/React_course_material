
export default function JsCopy() {
    return (
        <>
        <div style={{ marginTop: "50px" }}>
    <h2>How Each Copy Method Handles Different Data Types</h2>

    <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "35px",
        }}
    >

        {/* Object.assign */}
        <div style={{ border: "1px solid gray", padding: "20px", borderRadius: "8px" }}>
            <h3>Object.assign() -- old Shallow copy</h3>

            <p>
                Creates a new object and copies only the first level properties.
                Nested objects are copied as references.
            </p>

            <pre>{`
const obj = {
    name: "John",
    address: {
        city: "Hyderabad"
    }
}

const copy = Object.assign({}, obj);

copy.address.city = "Delhi";

console.log(obj.address.city);   // Delhi
console.log(copy.address.city);  // Delhi
`}</pre>

            <h4>Memory</h4>

            <pre>{`
obj
 ├── name ------> "John"
 └── address ---┐
                │
copy            │
 ├── name ----> "John"
 └── address ---┘

Both point to SAME address object.
`}</pre>

            <h4>Supports</h4>

            <pre>{`
✔ Primitive values
✔ Functions (same reference)
✔ Date (same reference)
✔ Undefined

✖ Nested objects copied
✖ Circular reference copied independently
`}</pre>
        </div>

        {/* Spread */}
        <div style={{ border: "1px solid gray", padding: "20px", borderRadius: "8px" }}>
            <h3> Spread Operator (...) -- new Shallow copy same as old in functionality but easy to write</h3>

            <p>
                Spread operator behaves exactly like Object.assign() for objects.
            </p>

            <pre>{`
const obj = {
    name: "John",
    address: {
        city: "Hyderabad"
    }
}

const copy = { ...obj };

copy.address.city = "Delhi";

console.log(obj.address.city);   // Delhi
console.log(copy.address.city);  // Delhi
`}</pre>

            <h4>Memory</h4>

            <pre>{`
obj.address
      ▲
      │
      │
copy.address

Same nested object.
`}</pre>

            <h4>Supports</h4>

            <pre>{`Same as Object.assign({},obj)
✔ Primitive values
✔ Functions (same reference)
✔ Date (same reference)
✔ Undefined

✖ Nested objects copied
✖ Circular reference copied independently
`}</pre>
        </div>

        {/* JSON */}
        <div style={{ border: "1px solid gray", padding: "20px", borderRadius: "8px" }}>
            <h3>JSON.parse(JSON.stringify())  -- old way deepcopy</h3>

            <p>
                Converts object → JSON string → Object again.
                Since JSON has limited data types, many values disappear or change (undefined & functions removed, Date changed to string).
            </p>

            <pre>{`
const obj = {
    name: "John",
    age: undefined,
    date: new Date(),
    sayHi() {
        console.log("Hello");
    },
    address: {
        city: "Hyderabad"
    }
}

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
`}</pre>

            <h4>Output</h4>

            <pre>{`{
    name: "John",
    date: "2026-06-30T12:45:00.000Z",
    address:{
       city:"Hyderabad"
    }
}

undefined removed (age)
function removed  (function)
Date becomes String  (Date object-> string)
`}</pre>

            <h4>Nested Object</h4>

            <pre>{`
copy.address.city = "Delhi";

console.log(obj.address.city); // Hyderabad

console.log(copy.address.city); // Delhi

Completely independent object.
`}</pre>

            <h4>Circular Reference</h4>

            <pre>{`const obj = {};
obj.self = obj;
JSON.stringify(obj);  // Error

TypeError: Converting circular structure to JSON `}</pre>
        </div>

        {/* structuredClone */}
        <div style={{ border: "1px solid gray", padding: "20px", borderRadius: "8px" }}>
            <h3>4. structuredClone() -- new deep clone with all data types except functions </h3>

            <p>
                Modern browser API that performs a true deep clone for almost all built-in JavaScript objects.
            </p>

            <pre>{`
const obj = {
    name:"John",
    date:new Date(),
    address:{
        city:"Hyderabad"
    }
}

const copy = structuredClone(obj);
copy.address.city = "Delhi";

console.log(obj.address.city); // Hyderabad
console.log(copy.address.city); // Delhi
`}</pre>

            <h4>Date</h4>

            <pre>{`console.log(copy.date);

// Still a Date object not string
copy.date instanceof Date  // true
`}</pre>

            <h4>Circular Reference</h4>

            <pre>{`
const obj = {
    name:"John"
};

obj.self = obj;  //self/circular reference

const copy = structuredClone(obj);

console.log(copy.self === copy); // true
Works perfectly.
`}</pre>

            <h4>Functions</h4>

            <pre>{`
const obj = {
    sayHello(){
        console.log("Hello");
    }
}

structuredClone(obj);  // Error

Functions cannot be cloned. gives error
`}</pre>

        </div>
    </div>
</div>

<div style={{ marginTop: "50px" }}>
    <h2>Feature Comparison</h2>

    <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "30px"
        }}
    >

        <div>
            <h3>Nested Objects</h3>

            <pre>{`
Object.assign()
❌ Shared Reference

Spread (...)
❌ Shared Reference

JSON
✔ New Object

structuredClone()
✔ New Object
`}</pre>
        </div>

        <div>
            <h3>Functions</h3>

            <pre>{`
Object.assign()  ✔ Copied by reference

Spread(...)  ✔ Copied by reference

JSON  ❌ Removed completely

structuredClone() ❌ Throws Error
`}</pre>
        </div>

        <div>
            <h3>Date Object</h3>

            <pre>{`Object.assign()  ✔ Same Date object

Spread(...)  ✔ Same Date object

JSON  ⚠ Converted into String

structuredClone() ✔ New Date object
`}</pre>
        </div>

        <div>
            <h3>Undefined</h3>

            <pre>{`
Object.assign() ✔ Preserved

Spread(...) ✔ Preserved

JSON ❌ Removed

structuredClone() ✔ Preserved
`}</pre>
        </div>

        <div>
            <h3>Circular References</h3>
            <pre>{`
Object.assign()
✔ Reference copied

Spread(...)
✔ Reference copied

JSON.parse(JSON.stringify(obj))
❌ Throws Error

obj.structuredClone() -> ✔ Fully Supported
`}</pre>
        </div>

        <div>
            <h3>Interview Recommendation</h3>

            <pre>{`Object.assign() → Shallow Copy

Spread(...) → Shallow Copy

JSON → Old Deep Copy

structuredClone() → Modern Deep Copy Recommended`}</pre>
        </div>

    </div>
</div>
        </>
    )
}