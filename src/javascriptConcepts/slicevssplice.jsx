import React from "react";

function SliceVsSpliceGuide() {

  const sectionStyle = {
    marginBottom: "40px",
    padding: "25px",
    borderRadius: "14px",
    background: "#ffffff",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  };

  const codeStyle = {
    background: "#1e1e1e",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "10px",
    overflowX: "auto",
    fontSize: "14px",
    lineHeight: "1.8",
    marginTop: "14px",
    whiteSpace: "pre-wrap",
  };

  const boxRow = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "14px",
    marginBottom: "14px",
  };

  const itemBox = {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    background: "#4f46e5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontWeight: "bold",
    boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
  };

  const removedBox = {
    ...itemBox,
    background: "#ef4444",
  };

  const addedBox = {
    ...itemBox,
    background: "#10b981",
  };

  const copiedBox = {
    ...itemBox,
    background: "#f59e0b",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const cellStyle = {
    border: "1px solid #ccc",
    padding: "12px",
    textAlign: "left",
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "sans-serif",
        lineHeight: "1.8",
        background: "#f5f7fb",
      }}
    >

      <h1 style={{ marginBottom: "30px" }}>
        🔥 slice() vs splice() — Complete Visual Guide
      </h1>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h2>✅ Core Difference</h2>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Feature</th>
              <th style={cellStyle}>slice()</th>
              <th style={cellStyle}>splice()</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={cellStyle}>Mutates original array?</td>
              <td style={cellStyle}>❌ No</td>
              <td style={cellStyle}>✅ Yes</td>
            </tr>

            <tr>
              <td style={cellStyle}>Returns</td>
              <td style={cellStyle}>Copied array</td>
              <td style={cellStyle}>Removed items</td>
            </tr>

            <tr>
              <td style={cellStyle}>Main purpose</td>
              <td style={cellStyle}>Copy / Extract</td>
              <td style={cellStyle}>Insert / Remove / Replace</td>
            </tr>

            <tr>
              <td style={cellStyle}>React preferred?</td>
              <td style={cellStyle}>✅ Yes</td>
              <td style={cellStyle}>⚠️ Only on copied arrays</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h2>✅ slice() — Copy Without Changing Original</h2>

        <p>
          <strong>slice()</strong> extracts part of an array and returns a NEW
          array.
        </p>

        <p>
          Original array stays untouched.
        </p>

        <h3>📌 Syntax</h3>

        <pre style={codeStyle}>
{`array.slice(startIndex, endIndex)

Includes start index
Excludes end index`}
        </pre>

        <h3>📌 Original Array</h3>

        <div style={boxRow}>
          {[10,20,30,40,50].map((num,index)=>(
            <div key={index} style={itemBox}>
              <div>{num}</div>
              <small>index {index}</small>
            </div>
          ))}
        </div>

        <pre style={codeStyle}>
{`const arr = [10,20,30,40,50];

const result = arr.slice(1,4);

console.log(result);
// [20,30,40]

console.log(arr);
// [10,20,30,40,50]`}
        </pre>

        <h3>📌 What Gets Copied?</h3>

        <div style={boxRow}>
          {[20,30,40].map((num,index)=>(
            <div key={index} style={copiedBox}>
              <div>{num}</div>
            </div>
          ))}
        </div>

        <h3>📌 Visual Explanation</h3>

        <pre style={codeStyle}>
{`slice(1,4)

START = 1 ✅ included
END = 4 ❌ excluded

Indexes:
0   1   2   3   4
10  20  30  40  50

Copied:
20  30  40`}
        </pre>

      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h2>✅ splice() — Mutates Original Array</h2>

        <p>
          <strong>splice()</strong> changes the ORIGINAL array.
        </p>

        <p>
          Used for:
        </p>

        <ul>
          <li>Removing items</li>
          <li>Inserting items</li>
          <li>Replacing items</li>
        </ul>

        <h3>📌 Syntax</h3>

        <pre style={codeStyle}>
{`array.splice(startIndex, deleteCount, itemsToInsert)`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h2>✅ Removing Items Using splice()</h2>

        <h3>📌 Before</h3>

        <div style={boxRow}>
          {[10,20,30,40].map((num,index)=>(
            <div key={index} style={itemBox}>
              <div>{num}</div>
              <small>{index}</small>
            </div>
          ))}
        </div>

        <pre style={codeStyle}>
{`const arr = [10,20,30,40];

arr.splice(1,2);

console.log(arr);

// [10,40]`}
        </pre>

        <h3>📌 Removed Items</h3>

        <div style={boxRow}>
          {[20,30].map((num,index)=>(
            <div key={index} style={removedBox}>
              <div>{num}</div>
            </div>
          ))}
        </div>

        <h3>📌 Remaining Array</h3>

        <div style={boxRow}>
          {[10,40].map((num,index)=>(
            <div key={index} style={itemBox}>
              <div>{num}</div>
            </div>
          ))}
        </div>

        <pre style={codeStyle}>
{`splice(1,2)

Start removing from index 1
Remove 2 items

Removed:
20,30`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h2>✅ Insert Items Using splice()</h2>

        <h3>📌 Before Insert</h3>

        <div style={boxRow}>
          {[1,2,4].map((num,index)=>(
            <div key={index} style={itemBox}>
              <div>{num}</div>
            </div>
          ))}
        </div>

        <pre style={codeStyle}>
{`const arr = [1,2,4];

arr.splice(2,0,3);

console.log(arr);

// [1,2,3,4]`}
        </pre>

        <h3>📌 Inserted Item</h3>

        <div style={boxRow}>
          <div style={addedBox}>
            <div>3</div>
          </div>
        </div>

        <h3>📌 After Insert</h3>

        <div style={boxRow}>
          {[1,2,3,4].map((num,index)=>(
            <div key={index} style={itemBox}>
              <div>{num}</div>
            </div>
          ))}
        </div>

        <pre style={codeStyle}>
{`splice(2,0,3)

Start at index 2
Delete 0 items
Insert 3`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h2>✅ Replace Items Using splice()</h2>

        <h3>📌 Before Replace</h3>

        <div style={boxRow}>
          {[1,2,3].map((num,index)=>(
            <div key={index} style={itemBox}>
              <div>{num}</div>
            </div>
          ))}
        </div>

        <pre style={codeStyle}>
{`const arr = [1,2,3];

arr.splice(1,1,99);

console.log(arr);

// [1,99,3]`}
        </pre>

        <h3>📌 Removed</h3>

        <div style={boxRow}>
          <div style={removedBox}>
            <div>2</div>
          </div>
        </div>

        <h3>📌 Added</h3>

        <div style={boxRow}>
          <div style={addedBox}>
            <div>99</div>
          </div>
        </div>

        <h3>📌 Final Array</h3>

        <div style={boxRow}>
          {[1,99,3].map((num,index)=>(
            <div key={index} style={itemBox}>
              <div>{num}</div>
            </div>
          ))}
        </div>

      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h2>🔥 React Important Rule</h2>

        <h3>❌ Bad (Mutates State)</h3>

        <pre style={codeStyle}>
{`todos.splice(1,1);

setTodos(todos);`}
        </pre>

        <p>
          React may NOT detect proper state change because original array mutated.
        </p>

        <h3>✅ Good (Immutable Update)</h3>

        <pre style={codeStyle}>
{`const newTodos = todos.slice();

newTodos.splice(1,1);

setTodos(newTodos);`}
        </pre>

        <h3>✅ Even Better</h3>

        <pre style={codeStyle}>
{`const filtered = todos.filter((_,index)=>index !== 1);

setTodos(filtered);`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h2>🔥 Real Interview Questions</h2>

        <pre style={codeStyle}>
{`Q1:
Which one mutates original array?

✅ splice()


Q2:
Which one is safer in React state updates?

✅ slice()


Q3:
Which returns removed items?

✅ splice()


Q4:
Which excludes ending index?

✅ slice()


Q5:
Which is used heavily in drag and drop reorder logic?

✅ splice()`}
        </pre>
      </section>

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h2>🔥 Drag & Drop Real Example</h2>

        <pre style={codeStyle}>
{`const copied = [...tasks];

const draggedItem = copied[dragIndex];

copied.splice(dragIndex,1);

copied.splice(dropIndex,0,draggedItem);

setTasks(copied);`}
        </pre>

        <h3>📌 Flow</h3>

        <pre style={codeStyle}>
{`Step 1:
Remove dragged item

Step 2:
Insert at new position

Step 3:
Update UI`}
        </pre>
      </section>

    </div>
  );
}

export default SliceVsSpliceGuide;