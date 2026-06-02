import React, { useRef, useState } from "react";

const RefUsageConcepts = () => {

    const styles = {
  section: {
    marginBottom: "40px",
    padding: "20px",
    border: "1px solid #333",
    borderRadius: "10px",
    background: "#111",
    color: "#fff",
    overflowX: "auto",
    textAlign:'left'
  },

  subTitle: {
    textAlign: "left",
    marginBottom: "20px",
    color: "#00ff90",
    fontSize: "24px",
    fontWeight: "bold"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    textAlign: "left"
  },

  th: {
    border: "1px solid #444",
    padding: "12px",
    background: "#1e1e1e",
    color: "#00ff90",
    fontWeight: "bold"
  },

  td: {
    border: "1px solid #444",
    padding: "12px",
    verticalAlign: "top",
    lineHeight: "1.6"
  },

  pre: {
    background: "#000",
    color: "#00ff90",
    padding: "15px",
    borderRadius: "8px",
    overflowX: "auto",
    fontSize: "14px",
    lineHeight: "1.6",
    border: "1px solid #333"
  },

  code: {
    color: "#00ff90"
  },

  card: {
    border: "1px solid #333",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
    background: "#1a1a1a"
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px"
  },

  grid3: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px",
    marginTop: "20px"
  },

  note: {
    background: "#1e293b",
    borderLeft: "5px solid #00ff90",
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
    borderLeft: "5px solid #00ff90",
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

  <div style={styles.note}>
    <strong>Current Component Example</strong>

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
          Internal tracking only
        </td>
      </tr>
    </tbody>
  </table>

  <div style={styles.success}>
    <strong>Interview Answer</strong>

    <p>
      useState stores data and triggers
      re-rendering.

      useRef stores mutable data without
      triggering re-rendering.
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
{`
fetch()

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
</section>
<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🔐 JWT + Axios Interceptors
  </h2>
<div style={{display:'flex'}}>
      <div style={styles.card}>
    <h3>Without Interceptors (Fetch)</h3>

    <pre style={styles.pre}>
{`
GET /users
Authorization: Bearer token

GET /products
Authorization: Bearer token

POST /orders
Authorization: Bearer token
`}
    </pre>
  </div>

  <div style={styles.card}>
    <h3>With Axios Interceptors</h3>

    <pre style={styles.pre}>
{`Interceptor
↓
Automatically Adds Token
↓
axios.get("/users")

↓
Authorization Added
`}
    </pre>
  </div>
</div>

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
    It simply provides interceptors that
    automatically attach JWT tokens to
    outgoing requests.
  </div>
</section>
      <h2>State Count : {count}</h2>
      <h2>Ref Count : {counterRef.current}</h2>
      <h2>Current Limit : {page}</h2>
      <button onClick={handleClick}>
        Fetch Users
      </button>

      <hr />

      {data.map(user => (
        <div key={user.id}>
          {user.name} - {user.email}
        </div>
      ))}
    </>
  );
};

export default RefUsageConcepts;