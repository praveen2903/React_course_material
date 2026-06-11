import React from 'react'

const DestructuringUsage = () => {

    // =========================================
    // ARRAY DESTRUCTURING
    // =========================================

    const colors = ['red', 'blue', 'green'];

    const [first, second, third] = colors;

    console.log(first);   // red
    console.log(second);  // blue
    console.log(third);   // green


    // =========================================
    // SKIPPING VALUES
    // =========================================

    const nums = [10, 20, 30, 40];

    const [a, , c] = nums;

    console.log(a); // 10
    console.log(c); // 30


    // =========================================
    // DEFAULT VALUES
    // =========================================

    const arr = [1];

    const [x, y = 100] = arr;

    console.log(x); // 1
    console.log(y); // 100


    // =========================================
    // SWAPPING VALUES
    // =========================================

    let p = 10;
    let q = 20;

    [p, q] = [q, p];

    console.log(p); // 20
    console.log(q); // 10


    // =========================================
    // REST OPERATOR
    // =========================================

    const numbers = [1, 2, 3, 4, 5];

    const [firstNum, ...restNums] = numbers;

    console.log(firstNum); // 1
    console.log(restNums); // [2,3,4,5]


    // =========================================
    // OBJECT DESTRUCTURING
    // =========================================

    const user = {
        name: 'Sai',
        age: 22,
        city: 'Warangal'
    }

    const { name, age, city } = user;

    console.log(name); // Sai
    console.log(age);  // 22
    console.log(city); // Warangal


    // =========================================
    // RENAMING VARIABLES
    // =========================================

    const {
        name: userName,
        age: userAge
    } = user;

    console.log(userName); // Sai
    console.log(userAge);  // 22


    // =========================================
    // OBJECT DEFAULT VALUES
    // =========================================

    const student = {
        fullName: 'Rahul'
    }

    const {
        fullName,
        marks = 0
    } = student;

    console.log(fullName); // Rahul
    console.log(marks);    // 0


    // =========================================
    // NESTED OBJECT DESTRUCTURING
    // =========================================

    const employee = {
        id: 1,
        address: {
            state: 'Telangana',
            pincode: 506002
        }
    }

    const {
        address: {
            state,
            pincode
        }
    } = employee;

    console.log(state);    // Telangana
    console.log(pincode);  // 506002


    // =========================================
    // FUNCTION PARAMETER DESTRUCTURING
    // =========================================

    function printUser({ name, age }) {
        console.log(name);
        console.log(age);
    }

    printUser({
        name: 'Praveen',
        age: 25
    })


    // =========================================
    // ARRAY RETURN DESTRUCTURING
    // =========================================

    function getCoords() {
        return [100, 200];
    }

    const [lat, long] = getCoords();

    console.log(lat);  // 100
    console.log(long); // 200


    // =========================================
    // API RESPONSE DESTRUCTURING
    // =========================================

    const response = {
        status: 200,
        data: {
            users: ['A', 'B', 'C']
        }
    }

    const {
        data: { users }
    } = response;

    console.log(users); // ['A', 'B', 'C']


    return (
        <div style={{ textAlign: 'left' }}>

            <span style={{ fontSize: '32px' }}>
                JavaScript Destructuring Usage
            </span>

            <div>

                {/* ========================================= */}
                {/* ARRAY DESTRUCTURING */}
                {/* ========================================= */}

                <h2>
                    Array Destructuring -- values are extracted based on position/index
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`const colors = ['red', 'blue', 'green'];

const [first, second, third] = colors;

console.log(first);   // red
console.log(second);  // blue
console.log(third);   // green`}
                    </pre>
                </code>


                {/* ========================================= */}
                {/* SKIPPING VALUES */}
                {/* ========================================= */}

                <h2>
                    Skipping Values -- skip unwanted positions using commas
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`const nums = [10, 20, 30, 40];

const [a, , c] = nums;

console.log(a); // 10
console.log(c); // 30`}
                    </pre>
                </code>


                {/* ========================================= */}
                {/* DEFAULT VALUES */}
                {/* ========================================= */}

                <h2>
                    Default Values -- used when value is undefined
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`const arr = [1];

const [x, y = 100] = arr;  //y default 100 get replaced by incoming value if any

console.log(x); // 1
console.log(y); // 100`}
                    </pre>
                </code>


                {/* ========================================= */}
                {/* SWAPPING */}
                {/* ========================================= */}

                <h2>
                    Swapping Variables -- no temp variable needed
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10`}
                    </pre>
                </code>


                {/* ========================================= */}
                {/* REST OPERATOR */}
                {/* ========================================= */}

                <h2>
                    Rest Operator -- collects remaining values
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`const numbers = [1,2,3,4,5];

const [first, ...rest] = numbers;

console.log(first); // 1
console.log(rest);  // [2,3,4,5]`}
                    </pre>
                </code>


                {/* ========================================= */}
                {/* OBJECT DESTRUCTURING */}
                {/* ========================================= */}

                <h2>
                    Object Destructuring -- values extracted using property names
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`const user = {
    name: 'Sai',
    age: 22,
    city: 'Warangal'
}

const { name, age, city } = user;

console.log(name);  //sai
console.log(age);   //22
console.log(city);  //warangal `}
                    </pre>
                </code>


                {/* ========================================= */}
                {/* RENAME VARIABLES */}
                {/* ========================================= */}

                <h2>
                    Renaming Variables -- rename property while destructuring
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`const user = {
    name: 'Sai',
    age: 22
}

const {
    name: userName,
    age: userAge
} = user;

console.log(userName); //sai
console.log(userAge);  //22`}
                    </pre>
                </code>


                {/* ========================================= */}
                {/* DEFAULT OBJECT VALUES */}
                {/* ========================================= */}

                <h2>
                    Object Default Values
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`const student = {
    fullName: 'Rahul'
}

const {
    fullName,
    marks = 0
} = student;

console.log(fullName); // Rahul
console.log(marks);    // 0`}
                    </pre>
                </code>


                {/* ========================================= */}
                {/* NESTED OBJECT */}
                {/* ========================================= */}

                <h2>
                    Nested Object Destructuring
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`const employee = {
    id: 1,
    address: {
        state: 'Telangana',
        pincode: 506002
    }
}

const {
    address: {
        state,
        pincode
    }
} = employee;

console.log(state);   //telangana
console.log(pincode); //506002`}
                    </pre>
                </code>


                {/* ========================================= */}
                {/* FUNCTION PARAMS */}
                {/* ========================================= */}

                <h2>
                    Function Parameter Destructuring
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`function printUser({ name, age }) {
    console.log(name);   //praveen
    console.log(age); //22
}

printUser({
    name: 'Praveen',
    age: 22
})`}
                    </pre>
                </code>


                {/* ========================================= */}
                {/* API RESPONSE */}
                {/* ========================================= */}

                <h2>
                    API Response Destructuring
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`const response = {
    status: 200,
    data: {
        users: ['A', 'B', 'C']
    }
}

const {
    data: { users }
} = response;

console.log(users);  //['A','B','C']`}
                    </pre>
                </code>


                {/* ========================================= */}
                {/* IMPORTANT RULE */}
                {/* ========================================= */}

                <h2>
                    Important Rule
                </h2>

                <code style={{textAlign:'left', minWidth: '500px'}}>
                    <pre>
{`Arrays  -> []                 Objects -> {}

Array destructuring is POSITION based &  Object destructuring is PROPERTY NAME based`}
                    </pre>
                </code>

            </div>
        </div>
    )
}

export default DestructuringUsage