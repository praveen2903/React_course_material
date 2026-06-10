import React, { useRef, useState } from "react";

const RefUsageConcepts = () => {

    const styles = {
  section: {
    width: "100%",
    maxWidth: "1120px",
    minWidth: 0,
    marginBottom: "32px",
    // padding: "clamp(16px, 3vw, 24px)",
    border: "1px solid #2a3446",
    borderRadius: "8px",
    background: "#111827",
    color: "#e5e7eb",
    overflowX: "hidden",
    textAlign:'left',
    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.14)"
  },

  subTitle: {
    textAlign: "left",
    marginBottom: "16px",
    color: "#34d399",
    fontSize: "clamp(20px, 2.6vw, 24px)",
    fontWeight: "bold"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    textAlign: "left"
  },

  th: {
    border: "1px solid #374151",
    padding: "12px",
    background: "#172033",
    color: "#34d399",
    fontWeight: "bold"
  },

  td: {
    border: "1px solid #374151",
    padding: "12px",
    verticalAlign: "top",
    lineHeight: "1.6",
    color: "#d1d5db"
  },

  pre: {
    width: "100%",
    maxWidth: "100%",
    background: "#020617",
    color: "#d1fae5",
    padding: "16px",
    borderRadius: "8px",
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "pre",
    wordBreak: "normal",
    overflowWrap: "normal",
    fontSize: "14px",
    lineHeight: "1.6",
    border: "1px solid #334155",
    margin: "12px 0"
  },

  code: {
    color: "#34d399"
  },

  card: {
    minWidth: 0,
    border: "1px solid #334155",
    // padding: "16px",
    borderRadius: "8px",
    marginBottom: "15px",
    background: "#172033"
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
    gap: "20px",
    marginTop: "20px",
    minWidth: 0
  },

  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
    gap: "20px",
    marginTop: "20px",
    minWidth: 0
  },

  note: {
    background: "#1e293b",
    borderLeft: "5px solid #34d399",
    padding: "15px",
    marginTop: "15px",
    borderRadius: "5px"
  },

  warning: {
    background: "#2b1818",
    borderLeft: "5px solid orange",
    padding: "15px",
    marginTop: "15px",
    borderRadius: "5px"
  },

  success: {
    background: "#102414",
    borderLeft: "5px solid #34d399",
    padding: "15px",
    marginTop: "15px",
    borderRadius: "5px"
  }
};
  const [data, setData] = useState([]);
  const [page, setPage] = useState(3);
  const [count, setCount] = useState(0);

  // Ref Counter
  const counterRef = useRef(0);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${page}`);
      if (response.ok) {
        const users = await response.json();
        setData(users);
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log("DOM Rendered");

  const handleClick = () => {
    counterRef.current++;
    console.log("Ref Updated =>",counterRef.current);

    if (count <= 3) {
      fetchData();
      setCount(prev => prev + 1);
      setPage(prev => prev + 3);
    } else {
      console.log("Count is greater than 3");
    }
  };

  return (
    <>
<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🔄 useState vs useRef
  </h2>

  <p>
    Both store values between renders, but only
    useState causes React to re-render.
  </p>

  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>Feature</th>
        <th style={styles.th}>useState</th>
        <th style={styles.th}>useRef</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={styles.td}>Stores Value</td>
        <td style={styles.td}>✅</td>
        <td style={styles.td}>✅</td>
      </tr>

      <tr>
        <td style={styles.td}>Persists Between Renders</td>
        <td style={styles.td}>✅</td>
        <td style={styles.td}>✅</td>
      </tr>

      <tr>
        <td style={styles.td}>Causes Re-render</td>
        <td style={styles.td}>✅</td>
        <td style={styles.td}>❌</td>
      </tr>

      <tr>
        <td style={styles.td}>Updates UI</td>
        <td style={styles.td}>✅</td>
        <td style={styles.td}>❌</td>
      </tr>
    </tbody>
  </table>
      <code style={{textAlign:'left'}}>
      <pre>
{`const [data, setData] = useState([]);
  const [page, setPage] = useState(3);
  const [count, setCount] = useState(0);
  // Ref Counter
  const counterRef = useRef(0);
  const fetchData = async () => {
    try {
      const response = await fetch(\`https://jsonplaceholder.typicode.com/users?_limit=\${page}\`);
      if (response.ok) {
        const users = await response.json();
        setData(users);
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log("DOM Rendered");  -- rerender checker

  const handleClick = () => {
    counterRef.current++;
    console.log("Ref Updated =>",counterRef.current);
    if (count <= 3) {
      fetchData();
      setCount(prev => prev + 1);
      setPage(prev => prev + 3);
    } else {
      console.log("Count is greater than 3");
    }
  };
`}
      </pre>
    </code>
  <div style={styles.note}>
    <strong>Current Component Example-- like dom updates at every change in state (controlled component) 
      so, we use the useRef (uncontrolled component) as counter must not effect DOM re-renders
    </strong>
    <ul>
      <li>count → useState</li>
      <li>page → useState</li>
      <li>data → useState</li>
      <li>counterRef → useRef</li>
    </ul>
  </div>

  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>Variable</th>
        <th style={styles.th}>Why?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={styles.td}>count</td>
        <td style={styles.td}>
          UI shows latest count
        </td>
      </tr>

      <tr>
        <td style={styles.td}>data</td>
        <td style={styles.td}>
          UI renders users
        </td>
      </tr>

      <tr>
        <td style={styles.td}>counterRef</td>
        <td style={styles.td}>
          ref doesn't cause re-renders so it is used to uncontrolled variables where the variable should effect the DOM nodes 
          like here count is just tracks so use Ref so that click update ref value and check it. so Ref is ideal here.
        </td>
      </tr>
    </tbody>
  </table>

  <div style={styles.success}>
    <strong>Interview Answer</strong>

    <p>
      useState stores data and triggers re-rendering.
      useRef stores mutable data witrout triggering re-rendering.
    </p>
  </div>
</section>
<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🎯 Counter Example
  </h2>

  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>Action</th>
        <th style={styles.th}>State Counter</th>
        <th style={styles.th}>Ref Counter</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={styles.td}>Increment</td>
        <td style={styles.td}>
          setCount(count+1)
        </td>
        <td style={styles.td}>
          counterRef.current++
        </td>
      </tr>

      <tr>
        <td style={styles.td}>Re-render</td>
        <td style={styles.td}>✅</td>
        <td style={styles.td}>❌</td>
      </tr>

      <tr>
        <td style={styles.td}>UI Updated</td>
        <td style={styles.td}>✅</td>
        <td style={styles.td}>❌</td>
      </tr>
    </tbody>
  </table>
<div style={{display:'flex'}}>
  <div style={styles.card}>
    <h4>What Happens?</h4>
    <pre style={styles.pre}>
{`
setCount(1)
↓
State Changes
↓
React Re-renders
↓
UI Updated
`}
    </pre>
  </div>

  <div style={styles.card}>
    <h4>Ref Flow</h4>

    <pre style={styles.pre}>
{`
counterRef.current++
↓
Value Changes
↓
No Re-render
↓
UI Unchanged
`}
    </pre>
  </div>
</div>
</section>
      <h2>State Count : {count}</h2>
      <h2>Ref Count : {counterRef.current}</h2>
      <h2>page count : {page}</h2>
      <button onClick={handleClick}>
        Fetch Users
      </button>

      <hr />

      {data.map(user => (
        <div key={user.id}>
          {user.name} - {user.email}
        </div>
      ))}
<p>__________________________________________________________________________________________________________________________________________________________________</p>
<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🌐 Fetch vs Axios
  </h2>

  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>Feature</th>
        <th style={styles.th}>Fetch</th>
        <th style={styles.th}>Axios</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={styles.td}>Built In</td>
        <td style={styles.td}>✅</td>
        <td style={styles.td}>❌</td>
      </tr>

      <tr>
        <td style={styles.td}>JSON Parsing</td>
        <td style={styles.td}>Manual</td>
        <td style={styles.td}>Automatic</td>
      </tr>

      <tr>
        <td style={styles.td}>Interceptors</td>
        <td style={styles.td}>❌</td>
        <td style={styles.td}>✅</td>
      </tr>

      <tr>
        <td style={styles.td}>Timeouts</td>
        <td style={styles.td}>Manual</td>
        <td style={styles.td}>Built In</td>
      </tr>
    </tbody>
  </table>

  <div style={styles.grid2}>
    <div style={styles.card}>
      <h3>Fetch Flow</h3>

      <pre style={styles.pre}>
{`fetch()
↓
Response
↓
response.json()
↓
Data
`}
      </pre>
    </div>

    <div style={styles.card}>
      <h3>Axios Flow</h3>

      <pre style={styles.pre}>
{`
axios.get()
  ↓
response.data
  ↓
Data
`}
      </pre>
    </div>
  </div>
  <h2 style={styles.subTitle}>
    🔐 JWT + Axios Interceptors
  </h2>
<div style={styles.grid2}>
  <div style={styles.card}>
    <h3>❌ Manual Header Approach</h3>

<pre style={styles.pre}>
{`
Developer Writes

GET Users
----------------
axios.get("/users",{headers:{Authorization:Bearer token}})

GET Products
----------------
axios.get("/products",{headers:{Authorization:Bearer token}})

POST Orders
----------------
axios.post("/orders",data,{headers:{Authorization:Bearer token}})

Problem?
--------
Not difficult. But repeated everywhere.
Bearer Token
-------------------
A bearer token is a security credential that grants access to any system or individual that possesses it

fetch -- 1.Json Data serialization (while post need to use Json.stringify(requestBody))
         2. Json data deserialization (while get/put need to convert data to JSON)
         3. same headers used for every request no global declaration
         4.NO interceptors to allow to pause, inspect and modify the request.
 
Example: fetch('https://example.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Mandatory header step
    'Accept': 'application/json'
  },
  body: JSON.stringify({ name: 'John Doe' }) // Mandatory transformation step
});`}
</pre>
  </div>

  <div style={styles.card}>
    <h3>✅ Interceptor Approach</h3>

<pre style={styles.pre}>
{`
Configure Once

Interceptor
      ↓
Adds Token
      ↓
Logs Request
      ↓
Handles Expired JWT
      ↓
Retries Request

Usage

api.get("/users")
api.get("/products")
api.post("/orders")

Business Logic Only

axios: 1.When you pass a plain JavaScript object to Axios, it automatically serializes the data to a JSON string 
         and automatically injects the Content-Type: application/json header
        2. reusable instances like headers and declare and reusable
        3. Has interceptors built-in 

handles the headers and data stringification for you
axios.post('https://example.com', { 
  name: 'John Doe' --no serialization of request body done built-in axios
});
`}
</pre>
  </div>
</div>

<pre style={styles.pre}>
{`
Question: Why Use Axios Interceptors?

Wrong Answer
----------------
To Add Authorization Header

Better Answer
----------------
To Centralize Cross-Cutting Request/Response Logic

Examples
✓ Auth
✓ Refresh Tokens
✓ Retry Logic
✓ Logging
✓ Monitoring
✓ Error Handling
✓ Analytics

Adding Headers Is Only One Small Use Case.
`}
</pre>

  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>Question</th>
        <th style={styles.th}>Answer</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={styles.td}>
          Can Fetch send JWT?
        </td>
        <td style={styles.td}>✅ Yes</td>
      </tr>

      <tr>
        <td style={styles.td}>
          Can Axios send JWT?
        </td>
        <td style={styles.td}>✅ Yes</td>
      </tr>

      <tr>
        <td style={styles.td}>
          Why Axios preferred?
        </td>
        <td style={styles.td}>
          Interceptors
        </td>
      </tr>
    </tbody>
  </table>

  <div style={styles.success}>
    <strong>Interview Answer:</strong>
    Axios does not use JWT differently.
    It simply provides interceptors that automatically attach JWT tokens to outgoing requests.
  </div>
</section>
<pre style={styles.noteCard}>{`
========================================================
🟨 ARRAY METHODS CHEAT SHEET
========================================================

MAP
========================================================

Purpose
---------
Transform Every Item
And Return New Array.

Input
---------
[1,2,3]

Code
---------
const result =
arr.map(x => x * 2);

Output
---------
[2,4,6]

Use Cases
---------
✓ UI Rendering
✓ Data Transformation
✓ API Response Mapping

Interview Trap
---------
map() always returns
a new array.

========================================================

FILTER
========================================================

Purpose
---------
Keep Matching Items
And Return New Array.

Input
---------
[1,2,3,4,5]

Code
---------
const result =
arr.filter(x => x > 3);

Output
---------
[4,5]

Use Cases
---------
✓ Search
✓ Active Users
✓ Product Filtering

Interview Trap
---------
filter() may return
empty array.

========================================================

FIND
========================================================

Purpose
---------
Return First Match.

Input
---------
[1,2,3,4]

Code
---------
const result =
arr.find(x => x > 2);

Output
---------
3

Use Cases
---------
✓ Find User
✓ Find Product
✓ Find Record

Interview Trap
---------
Returns single value
or undefined.

========================================================

SOME
========================================================

Purpose
---------
Check If At Least One
Item Matches.

Input
---------
[1,2,3]

Code
---------
const result =
arr.some(x => x > 2);

Output
---------
true

Use Cases
---------
✓ Permission Checks
✓ Validation
✓ Role Checking

Example
---------
users.some(
 user => user.role==="admin"
)

Interview Trap
---------
Stops After First Match.

========================================================

EVERY
========================================================

Purpose
---------
Check If All Items Match.

Input
---------
[2,4,6]

Code
---------
const result =
arr.every(x => x % 2 === 0);

Output
---------
true

Use Cases
---------
✓ Form Validation
✓ Data Verification

Interview Trap
---------
One Failure = false.

========================================================

FOREACH
========================================================

Purpose
---------
Loop Through Array.

Input
---------
[1,2,3]

Code
---------
arr.forEach(x => {
 console.log(x);
});

Output
---------
1
2
3

Use Cases
---------
✓ Logging
✓ Side Effects
✓ Updating Variables

Interview Trap
---------
Returns undefined.

Cannot Chain Like Map.

========================================================

REDUCE
========================================================

Purpose
---------
Convert Array To
Single Value.

Input
---------
[1,2,3,4]

Code
---------
const total =
arr.reduce(
 (sum,x) => sum + x,
 0
);

Output
---------
10

Use Cases
---------
✓ Sum
✓ Grouping
✓ Aggregation

Interview Trap
---------
Can Return Any Type.

========================================================

MAP vs FOREACH
========================================================

map()
---------
Returns New Array

const nums =
arr.map(x => x * 2);

Output:
[2,4,6]

-------------------------

forEach()
---------
Returns Undefined

arr.forEach(x=>{
 console.log(x);
});

Output:
undefined

========================================================

FIND vs FILTER
========================================================

find()
---------
Returns First Match

Output:
User Object

-------------------------

filter()
---------
Returns All Matches

Output:
Array Of Users

========================================================

SOME vs EVERY
========================================================

some()
---------
At Least One Match

every()
---------
All Must Match

========================================================

MEMORY TRICK
========================================================

map()
---------
Transform

filter()
---------
Remove

find()
---------
First Match

some()
---------
Any?

every()
---------
All?

forEach()
---------
Loop

reduce()
---------
One Value
`}
</pre>
    </>
  );
};

export default RefUsageConcepts;
