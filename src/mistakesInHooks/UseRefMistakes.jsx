import React from "react";

function UseRefMistakes() {
 const sectionStyle = {
    marginBottom: "30px",
    textAlign: "left",
  };

  const codeStyle = {
    background: "#f4f4f4",
    padding: "12px",
    borderRadius: "8px",
    overflowX: "auto",
    fontSize: "14px",
    marginTop: "10px",
    whiteSpace: "pre-wrap",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
    textAlign: "left",
  };

  const cellStyle = {
    border: "1px solid #ccc",
    padding: "10px",
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: "1.8",
        textAlign: "left",
      }}
    >
      <h2>🧠 useRef Complete Theory-- my main mistake is forgetting the attaching either DOM or callback ref to DOM element where it gets initial value</h2>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ What is useRef?</h3>

        <p>
          useRef is a React hook that stores mutable values which persist
          across renders without causing re-renders.
        </p>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Syntax</h3>

        <pre style={codeStyle}>
{`const ref = useRef(initialValue);`}
        </pre>

        <p>Returns:</p>

        <pre style={codeStyle}>
{`{
  current: initialValue
}`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Initial Values</h3>

        <pre style={codeStyle}>
            {`useRef() -- current = undefined, rarely used when initial value doesn't matter

useRef(null) -- best for DOM refs like input, div, video because element doesn't exist before mount

useRef(0) -- best for counters, timer IDs, interval IDs, mutable numeric values

useRef("") -- best for mutable text values without re-render

useRef([]) -- best for storing multiple refs in lists, grids, drag-drop elements

useRef({}) -- best for mutable objects like previous values, caches, configs
            `}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>🔥 Important Rule</h3>

        <p>Updating ref.current does NOT trigger re-render.</p>

        <pre style={codeStyle}>
{`ref.current = 10;`}
        </pre>

        <p>UI will not update automatically.</p>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Two Main Uses of useRef</h3>

        <ul>
          <li>Store mutable values across renders</li>
          <li>Access DOM elements directly</li>
        </ul>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ DOM Ref</h3>

        <pre style={codeStyle}>
{`const inputRef = useRef(null);

<input ref={inputRef} />`}
        </pre>

        <p>
          React automatically stores the DOM element inside:
        </p>

        <pre style={codeStyle}>
{`inputRef.current`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Callback Ref</h3>

        <pre style={codeStyle}>
{`ref={(element) => {
  gridRef.current[index] = element;
}}`}
        </pre>

        <p>
          Callback refs provide manual control for storing DOM elements.
        </p>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>⚡ Object Ref vs Callback Ref ** must when useRef attached to DOM elements</h3>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Object Ref</th>
              <th style={cellStyle}>Callback Ref</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={cellStyle}>
                <code>ref={'{inputRef}'}</code>
              </td>

              <td style={cellStyle}>
                <code>ref={'{(el) => {...}}'}</code>
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>Automatic assignment</td>
              <td style={cellStyle}>Manual assignment</td>
            </tr>

            <tr>
              <td style={cellStyle}>Best for single element</td>
              <td style={cellStyle}>Best for lists/grids</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>💼 Common Use Cases</h3>

        <ul>
          <li>Focus input fields</li>
          <li>Store timer/interval IDs</li>
          <li>Store previous values</li>
          <li>Scroll to elements</li>
          <li>Measure elements</li>
          <li>Drag and drop</li>
          <li>Access video/canvas elements</li>
        </ul>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>🔥 Common Interview Traps</h3>

        <ul>
          <li>❌ Updating ref does NOT re-render component</li>
          <li>❌ useRef is NOT reactive like useState</li>
          <li>❌ Mutating object inside ref won't update UI</li>
          <li>❌ DOM ref may be null before mount</li>
          <li>❌ useRef persists value across renders</li>
        </ul>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>⚡ useRef vs useState</h3>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>useRef</th>
              <th style={cellStyle}>useState</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={cellStyle}>No re-render</td>
              <td style={cellStyle}>Triggers re-render</td>
            </tr>

            <tr>
              <td style={cellStyle}>Mutable</td>
              <td style={cellStyle}>Immutable update pattern</td>
            </tr>

            <tr>
              <td style={cellStyle}>Stores DOM refs</td>
              <td style={cellStyle}>Stores UI state</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Best Practices</h3>

        <ul>
          <li>Use useRef for mutable non-UI values</li>
          <li>Use useState for UI state</li>
          <li>Use callback refs for dynamic elements</li>
          <li>Initialize DOM refs with null</li>
        </ul>
      </section>
    </div>
  );
}

export default UseRefMistakes;