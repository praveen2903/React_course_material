import React, { useState } from "react";

const CurryingAndPrototype= () => {
  // =====================================================
  // CURRYING
  // =====================================================

  const [message, setMessage] = useState("Click a button");

  const handleMessage = (text) => () => {
    setMessage(text);
  };

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
          Converting:
        </p>

        <pre style={styles.code}>
{`add(a, b, c)

into

add(a)(b)(c)`}
        </pre>

        <h3 style={styles.output}>
          add(1)(2)(3) = {add(1)(2)(3)}
        </h3>

        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={handleMessage("Hello")}
          >
            Hello
          </button>

          <button
            style={styles.button}
            onClick={handleMessage("Welcome")}
          >
            Welcome
          </button>

          <button
            style={styles.button}
            onClick={handleMessage("React")}
          >
            React
          </button>
        </div>

        <h3 style={styles.message}>
          {message}
        </h3>

        <div style={styles.codeWrapper}>
          <code>
            <pre>
{`function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const handleMessage = (text) => () => {
  setMessage(text);
};`}
            </pre>
          </code>
        </div>

        <div style={styles.note}>
          <strong>Important:</strong>

          <p>
            Currying works because closures remember
            previous values.
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
          <code>
            <pre>
{`function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.introduce = function () {
  return \`Hi I am \${this.name}\`;
};

const user1 = new User("Sai", 22);`}
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
          <code>
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