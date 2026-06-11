import React, { useState } from "react";

const CurryingAndPrototype= () => {
  // =====================================================
  // CURRYING
  // =====================================================

  const [message, setMessage] = useState("Click a button");

  function add(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }

  // =====================================================
  // PROTOTYPE
  // =====================================================

  function User(name, age) {
    this.name = name;
    this.age = age;
  }

  User.prototype.introduce = function () {
    return `Hi I am ${this.name}`;
  };

  const user1 = new User("Sai", 22);
  const user2 = new User("John", 25);

  // =====================================================
  // BIND
  // =====================================================

  const obj = {
    a: 10,
    b: 20,

    sum() {
      return this?.a + this?.b;
    },
  };

  const res = obj.sum;

  const bindResult = res(); // NaN

  const res2 = obj.sum.bind(obj);

  const correctBind = res2(); // 30

  return (
    <div style={styles.container}>
      <h3 style={styles.mainHeading}>
        JS Currying + Prototype + Bind -- why java is prototype oriented language not object oriented?
      </h3>

      {/* ================================================= */}
      {/* CURRYING */}
      {/* ================================================= */}

      <div style={styles.card}>
        <h2 style={styles.heading}>
          1. Currying
        </h2>

        <p style={styles.text}>
           Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of nested functions, each taking only a single argument. It allows developers to break down complex tasks into smaller, reusable parts and handle function arguments incrementally.
        </p>

        <pre style={styles.code}>
{`add(a, b, c)

into

add(a)(b)(c)`}
        </pre>

        <h3 style={styles.output}>
          add(1)(2)(3) = {add(1)(2)(3)}
        </h3>


        <div style={styles.codeWrapper}>
          <code style={{textAlign:'left', minWidth: '500px'}}>
            <pre>
{`function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

can be writtern as const add= (a)=>(b)=>(c)=>a+b+c;

both called as add(a)(b)(c)


Real Examples:-
______________________
const checkRole = role => user => user.roles.includes(role);

const isAdmin = checkRole("ADMIN");
const isManager = checkRole("MANAGER");

isAdmin(user1);
isAdmin(user2);
isManager(user1);


Redux middleware
____________________________
const logger = store => next => action => {
    console.log(action);
    return next(action);
};


Event Handlers
_________________________
const handleDelete = id => () => {
  console.log("Deleting", id);  //Deleting 101
};

<button onClick={handleDelete(101)}>Delete</button>`}
            </pre>
          </code>
        </div>

        <div style={styles.note}>
          <strong>Important:</strong>

          <p>
            Currying works because closures remember
            previous values like inner function remembers outer variable scope value.
          </p>
        </div>
      </div>

      {/* ================================================= */}
      {/* PROTOTYPE */}
      {/* ================================================= */}

      <div style={styles.card}>
        <h2 style={styles.heading}>
          2. Prototype
        </h2>

        <h3 style={styles.output}>
          {user1.introduce()}
        </h3>

        <h3 style={styles.output}>
          {user2.introduce()}
        </h3>

        <div style={styles.codeWrapper}>
          <code style={{textAlign:'left', minWidth: '500px'}}>
            <pre>
{`function User(name) {
  this.name = name;

  this.greet = function () {
    console.log(\`Hello \${this.name}\`);
  };
}

const u1 = new User("Sai");
const u2 = new User("John");


u1
 ├─ name
 └─ greet()  ← Copy 1

u2
 ├─ name
 └─ greet()  ← Copy 2
 
 
 If using Prototype:-
------------------------------ 
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log(\`Hello \${this.name}\`);
};

const u1 = new User("Sai");
const u2 = new User("John");

u1
 └─ name

u2
 └─ name

User.prototype
 └─ greet()   ← Shared
 
 
 
 
 Like wise Protype functions: Array Prototype:- map(), filter(), reduce(), forEach()      stringPrototypes:- toUpperCase(), toLowerCase()..

 const user = {
  login() {
    console.log("Login");
  }
};
const admin = Object.create(user);

admin.deleteUser = function () {
  console.log("Delete User");
};
 
admin
 │
 ├─ deleteUser()
 │
 ▼
user
 │
 └─ login()
 │
 ▼
Object.prototype
 │
 ├─ toString()
 ├─ hasOwnProperty()
 └─ valueOf()
 │
 ▼
null
 `}
            </pre>
          </code>
        </div>

        <div style={styles.note}>
          <strong>Why Prototype?</strong>

          <p>
            Methods are shared across all objects.
          </p>

          <p>
            Memory efficient because only ONE copy
            exists.
          </p>  
          <p>Prototype exists so that multiple objects can share the same methods and properties instead of creating duplicate copies, enabling memory-efficient inheritance through the prototype chain</p>
        </div>

        <pre style={styles.diagram}>
{`user1
  ↓
User.prototype
  ↓
Object.prototype
  ↓
null`}
        </pre>
      </div>

      {/* ================================================= */}
      {/* BIND */}
      {/* ================================================= */}

      <div style={styles.card}>
        <h2 style={styles.heading}>
          3. Bind Usage
        </h2>

        <h3 style={styles.error}>
          Without bind(): {String(bindResult)}
        </h3>

        <h3 style={styles.success}>
          With bind(): {correctBind}
        </h3>

        <div style={styles.codeWrapper}>
          <code style={{textAlign:'left', minWidth: '500px'}}>
            <pre>
{`const obj = {
  a: 10,
  b: 20,

  sum() {
    return this?.a + this?.b;
  }
};

const res = obj.sum;

console.log(res());
// NaN

const res2 = obj.sum.bind(obj);

console.log(res2());
// 30`}
            </pre>
          </code>
        </div>

        <div style={styles.note}>
          <strong>Explanation:</strong>

          <p>
            When function reference is stored separately,
            it loses original this context.
          </p>

          <p>
            bind(obj) permanently attaches this to obj.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurryingAndPrototype;

/* ===================================================== */
/* STYLES */
/* ===================================================== */

const styles = {
  container: {
    padding: "30px",
    background: "#f4f4f4",
    minHeight: "100vh",
    fontFamily: "Arial",
  },

  mainHeading: {
    textAlign: "center",
    marginBottom: "30px",
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    marginBottom: "25px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  heading: {
    marginBottom: "15px",
    color: "#222",
  },

  text: {
    fontSize: "16px",
    marginBottom: "10px",
  },

  output: {
    color: "#1565c0",
  },

  error: {
    color: "crimson",
  },

  success: {
    color: "green",
  },

  message: {
    background: "#eef6ff",
    padding: "10px",
    borderRadius: "8px",
    width: "fit-content",
  },

  buttonContainer: {
    display: "flex",
    gap: "10px",
    margin: "20px 0",
  },

  button: {
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#222",
    color: "white",
    fontSize: "15px",
  },

  codeWrapper: {
    textAlign: "left",
    marginTop: "20px",
  },

  code: {
    background: "#272822",
    color: "#f8f8f2",
    padding: "15px",
    borderRadius: "10px",
    overflowX: "auto",
    lineHeight: "1.6",
  },

  diagram: {
    background: "#111",
    color: "#00ff90",
    padding: "18px",
    borderRadius: "10px",
    marginTop: "20px",
    fontSize: "17px",
  },

  note: {
    background: "#fff8e1",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "20px",
    lineHeight: "1.8",
  },
};