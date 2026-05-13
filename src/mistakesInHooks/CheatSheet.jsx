import React, { useEffect, useRef, useState } from "react";

const ReactDomCheatSheet = () => {
  const [hovered, setHovered] = useState(false);

  const [mouse, setMouse] = useState({
    clientX: 0,
    clientY: 0,
    offsetX: 0,
    offsetY: 0,
  });

  const [dragItems, setDragItems] = useState([
    "React",
    "JavaScript",
    "HTML",
    "CSS",
  ]);

  const [text, setText] = useState("");

  const dragRef = useRef(null);

  const inputRef = useRef(null);

  const scrollRef = useRef(null);

  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    const div = scrollRef.current;

    const handleScroll = () => {
      const bottom =
        div.scrollTop + div.clientHeight >= div.scrollHeight - 5;

      setReachedBottom(bottom);
    };

    if (div) {
      div.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleDrop = (dropIndex) => {
    const copy = [...dragItems];

    const dragged = copy[dragRef.current];

    copy.splice(dragRef.current, 1);

    copy.splice(dropIndex, 0, dragged);

    setDragItems(copy);
  };

  const pageStyle = {
    padding: "40px",
    background: "#f4f7fb",
    lineHeight: "1.8",
    maxWidth: "1500px",
    textAlign:'left',
    margin: "0 auto",
    color: "#222",
    fontFamily: "Arial",
  };

  const sectionStyle = {
    marginBottom: "70px",
  };

  const headingStyle = {
    fontSize: "34px",
    marginBottom: "25px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
    gap: "20px",
  };

  const cardStyle = {
    background: "white",
    borderRadius: "16px",
    padding: "22px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };

  const codeStyle = {
    background: "#111827",
    color: "#00ff95",
    padding: "16px",
    borderRadius: "12px",
    overflowX: "auto",
    fontSize: "14px",
    whiteSpace: "pre-wrap",
    marginTop: "16px",
  };

  const demoStyle = {
    border: "2px dashed #bbb",
    borderRadius: "12px",
    padding: "20px",
    background: "#fafafa",
    marginTop: "15px",
  };

  const descBox = {
    background: "#eef6ff",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "15px",
    borderLeft: "6px solid #2563eb",
  };

  const warningBox = {
    background: "#fff4e5",
    padding: "16px",
    borderRadius: "12px",
    marginTop: "15px",
    borderLeft: "6px solid orange",
  };

  const successBox = {
    background: "#e8f5e9",
    padding: "16px",
    borderRadius: "12px",
    marginTop: "15px",
    borderLeft: "6px solid green",
  };

  return (
    <div style={pageStyle}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        React DOM Events + Browser APIs Cheat Sheet
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          marginBottom: "60px",
          color: "#555",
        }}
      >
        Interactive visual handbook for React DOM events, browser APIs,
        measurements, drag-drop, bubbling, refs and scrolling concepts.
      </p>

      {/* ===================================================== */}
      {/* MOUSE EVENTS */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ Mouse Events</h2>

        <div style={descBox}>
          <h3>What Are Mouse Events?</h3>

          <p>
            Mouse events run whenever user interacts using mouse.
            They are heavily used in tooltips, dropdowns, buttons,
            modals, games and drag-drop systems.
          </p>

          <ul>
            <li>onClick → single click</li>
            <li>onDoubleClick → double click</li>
            <li>onMouseEnter → cursor entered</li>
            <li>onMouseLeave → cursor left</li>
            <li>onMouseMove → continuous tracking</li>
            <li>onMouseDown → mouse pressed</li>
            <li>onMouseUp → mouse released</li>
          </ul>

          <div style={successBox}>
            💡 Mental Model:
            mouse events are sensors attached to elements.
          </div>

          <div style={warningBox}>
            ❌ onMouseMove fires many times per second.
            Avoid heavy calculations inside it.
          </div>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>Live Mouse Demo</h3>

            <div style={demoStyle}>
              <button
                onClick={() => alert("Clicked")}
                onDoubleClick={() => alert("Double Clicked")}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onMouseDown={() => console.log("Down")}
                onMouseUp={() => console.log("Up")}
                style={{
                  padding: "15px 25px",
                  border: "none",
                  borderRadius: "10px",
                  background: hovered ? "#16a34a" : "#2563eb",
                  color: "white",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                {hovered ? "Mouse Inside" : "Hover / Click Me"}
              </button>
            </div>

            <pre style={codeStyle}>
{`<button
 onClick={handleClick}
 onDoubleClick={handleDouble}
 onMouseEnter={handleEnter}
 onMouseLeave={handleLeave}
/>`}
            </pre>
          </div>

          <div style={cardStyle}>
            <h3>Mouse Coordinates Demo</h3>

            <div
              style={{
                ...demoStyle,
                height: "220px",
              }}
              onMouseMove={(e) =>
                setMouse({
                  clientX: e.clientX,
                  clientY: e.clientY,
                  offsetX: e.nativeEvent.offsetX,
                  offsetY: e.nativeEvent.offsetY,
                })
              }
            >
              <p>Move mouse inside this box</p>

              <h4>clientX: {mouse.clientX}</h4>
              <h4>clientY: {mouse.clientY}</h4>
              <h4>offsetX: {mouse.offsetX}</h4>
              <h4>offsetY: {mouse.offsetY}</h4>
            </div>

            <pre style={codeStyle}>
{`onMouseMove={(e)=>{
 console.log(e.clientX)
 console.log(e.offsetX)
}}`}
            </pre>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* KEYBOARD EVENTS */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ Keyboard Events</h2>

        <div style={descBox}>
          <h3>Keyboard Events</h3>

          <p>
            Keyboard events help detect which key the user pressed.
            Used in forms, shortcuts, chat apps and search bars.
          </p>

          <ul>
            <li>onKeyDown → key pressed</li>
            <li>onKeyUp → key released</li>
          </ul>

          <div style={successBox}>
            💡 Used in:
            submit on enter, shortcuts, autocomplete
          </div>

          <div style={warningBox}>
            ❌ Always check e.key before handling logic.
          </div>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>Keyboard Demo</h3>

            <div style={demoStyle}>
              <input
                type="text"
                placeholder="Press Enter"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("Submitted");
                  }
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <pre style={codeStyle}>
{`onKeyDown={(e)=>{
 if(e.key==="Enter"){
   submit()
 }
}}`}
            </pre>
          </div>

          <div style={cardStyle}>
            <h3>Keyboard Flow</h3>

            <div style={demoStyle}>
              <pre>
{`KEY PRESS
   ↓
onKeyDown
   ↓
onKeyUp`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* INPUT EVENTS */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ Input / TextArea Events</h2>

        <div style={descBox}>
          <h3>Input Events</h3>

          <p>
            These events help React track user typing,
            focus and blur behavior.
          </p>

          <ul>
            <li>onChange → input changed</li>
            <li>onFocus → input focused</li>
            <li>onBlur → input lost focus</li>
          </ul>

          <div style={successBox}>
            💡 Used in:
            forms, validation, login pages, search
          </div>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>Input Demo</h3>

            <div style={demoStyle}>
              <input
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={(e) => {
                  e.target.style.border = "3px solid green";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1px solid #ccc";
                }}
                placeholder="Type here"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />

              <p>Value: {text}</p>

              <button
                onClick={() => inputRef.current.focus()}
                style={{
                  marginTop: "15px",
                  padding: "10px 15px",
                }}
              >
                Focus Input
              </button>
            </div>

            <pre style={codeStyle}>
{`onChange={(e)=>
 setText(e.target.value)
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* SCROLL EVENTS */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ Scroll Events</h2>

        <div style={descBox}>
          <h3>Scroll Events</h3>

          <p>
            Scroll events help detect scrolling behavior.
            Used heavily in infinite scroll and lazy loading.
          </p>

          <ul>
            <li>scrollTop → current scroll position</li>
            <li>clientHeight → visible area</li>
            <li>scrollHeight → full content height</li>
          </ul>

          <div style={successBox}>
            💡 Used in:
            chat apps, feeds, infinite scroll
          </div>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>Infinite Scroll Demo</h3>

            <div
              ref={scrollRef}
              style={{
                height: "250px",
                overflowY: "auto",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px",
                    background: "#eee",
                    marginBottom: "10px",
                    borderRadius: "8px",
                  }}
                >
                  Item {i + 1}
                </div>
              ))}
            </div>

            <h4 style={{ marginTop: "15px" }}>
              {reachedBottom
                ? "✅ Bottom Reached"
                : "⬇️ Scroll More"}
            </h4>

            <pre style={codeStyle}>
{`if(
 scrollTop + clientHeight
 >= scrollHeight
){
 loadMore()
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* DRAG DROP */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ Drag And Drop</h2>

        <div style={descBox}>
          <h3>Drag And Drop Events</h3>

          <p>
            Drag-drop allows visual movement of items.
            Commonly used in Kanban boards and reorder lists.
          </p>

          <ul>
            <li>onDragStart → store dragged item</li>
            <li>onDragOver → allow dropping</li>
            <li>onDrop → update items</li>
          </ul>

          <div style={warningBox}>
            ❌ Forgetting preventDefault() breaks dropping.
          </div>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>Drag Demo</h3>

            <div style={demoStyle}>
              {dragItems.map((item, index) => (
                <div
                  key={item}
                  draggable
                  onDragStart={() => {
                    dragRef.current = index;
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(index)}
                  style={{
                    padding: "12px",
                    background: "#2563eb",
                    color: "white",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    cursor: "grab",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <pre style={codeStyle}>
{`copy.splice(dragRef.current,1)
copy.splice(dropIndex,0,dragged)`
}
            </pre>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* TOUCH EVENTS */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ Touch Events</h2>

        <div style={descBox}>
          <h3>Touch Events</h3>

          <p>
            Mobile equivalent of mouse events.
            Used for swipes and gestures.
          </p>

          <div style={successBox}>
            💡 Used in:
            mobile drag-drop, drawing apps
          </div>
        </div>

        <div style={cardStyle}>
          <div
            onTouchStart={() => alert("Touch Start")}
            onTouchEnd={() => alert("Touch End")}
            style={{
              ...demoStyle,
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#dbeafe",
            }}
          >
            Touch Here On Mobile
          </div>

          <pre style={codeStyle}>
{`onTouchStart()
onTouchMove()
onTouchEnd()`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* GET BOUNDING CLIENT RECT */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ getBoundingClientRect()</h2>

        <div style={descBox}>
          <h3>getBoundingClientRect()</h3>

          <p>
            Returns exact position and size of element
            relative to browser viewport.
          </p>

          <ul>
            <li>top</li>
            <li>left</li>
            <li>width</li>
            <li>height</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <div style={demoStyle}>
            <div
              style={{
                width: "250px",
                height: "120px",
                border: "3px solid black",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "-25px",
                }}
              >
                top
              </span>

              <span
                style={{
                  position: "absolute",
                  left: "-40px",
                  top: "40%",
                }}
              >
                left
              </span>

              <span
                style={{
                  position: "absolute",
                  bottom: "-25px",
                  right: "0",
                }}
              >
                width
              </span>
            </div>
          </div>

          <pre style={codeStyle}>
{`const rect =ref.current.getBoundingClientRect()
console.log(rect.top)`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* EVENT BUBBLING */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ Event Bubbling & Capturing</h2>

        <div style={descBox}>
          <h3>Event Bubbling</h3>

          <p>
            Events travel from child → parent.
          </p>

          <pre>
{`button
 ↓
div
 ↓
body
 ↓
document`}
          </pre>

          <div style={successBox}>
            💡 Used in:
            event delegation systems.
          </div>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>Bubbling Demo</h3>

            <div
              onClick={() => alert("DIV CLICKED")}
              style={{
                ...demoStyle,
                background: "#fecaca",
              }}
            >
              DIV

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert("BUTTON CLICKED");
                }}
                style={{
                  display: "block",
                  marginTop: "20px",
                  padding: "10px 15px",
                }}
              >
                Button
              </button>
            </div>

            <pre style={codeStyle}>
{`e.stopPropagation()`}
            </pre>
          </div>

          <div style={cardStyle}>
            <h3>Capturing Flow</h3>

            <div style={demoStyle}>
              <pre>
{`document
 ↓
body
 ↓
div
 ↓
button`}
              </pre>
            </div>

            <pre style={codeStyle}>
{`onClickCapture={()=>{
 console.log("capture")
}}`}
            </pre>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* TARGET VS CURRENT TARGET */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ e.target vs e.currentTarget</h2>

        <div style={descBox}>
          <ul>
            <li>e.target → actual clicked element</li>
            <li>e.currentTarget → attached listener element</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <div
            onClick={(e) => {
              console.log(e.target);
              console.log(e.currentTarget);
            }}
            style={{
              ...demoStyle,
              background: "#e0e7ff",
            }}
          >
            DIV

            <button
              style={{
                display: "block",
                marginTop: "20px",
              }}
            >
              Click
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* DOM TREE */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ DOM Tree Diagram</h2>

        <div style={descBox}>
          <p>
            Browser converts HTML into tree structure.
          </p>

          <ul>
            <li>Parent → above element</li>
            <li>Child → nested element</li>
            <li>Sibling → same level</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <div style={demoStyle}>
            <pre>
{`window
  │
document
  │
html
├── head
└── body
     ├── div
     │    └── button
     └── ul
          └── li`}
            </pre>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* REFS */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ Ref Flow</h2>

        <div style={descBox}>
          <p>
            Refs give direct DOM access.
          </p>

          <div style={successBox}>
            💡 Used in:
            focus, scrolling, animations, measurements
          </div>
        </div>

        <div style={cardStyle}>
          <div style={demoStyle}>
            <pre>
{`Render
 ↓
DOM created
 ↓
ref.current assigned`}
            </pre>
          </div>

          <pre style={codeStyle}>
{`const ref = useRef(null)

<input ref={ref}/>`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* LAYOUT MEASUREMENTS */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ Layout Measurements</h2>

        <div style={descBox}>
          <ul>
            <li>offsetWidth → includes border</li>
            <li>clientWidth → visible width</li>
            <li>scrollWidth → full width</li>
            <li>scrollHeight → full height</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <pre style={codeStyle}>
{`offsetWidth
clientWidth
scrollWidth

offsetHeight
clientHeight
scrollHeight`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* requestAnimationFrame */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ requestAnimationFrame()</h2>

        <div style={descBox}>
          <p>
            Runs animation before browser repaint.
            Better than setTimeout for smooth animations.
          </p>
        </div>

        <div style={cardStyle}>
          <pre style={codeStyle}>
{`requestAnimationFrame(()=>{
 console.log("animate")
})`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* RESIZE OBSERVER */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ Resize Observer</h2>

        <div style={descBox}>
          <p>
            Detects element size changes automatically.
          </p>
        </div>

        <div style={cardStyle}>
          <pre style={codeStyle}>
{`const observer =
new ResizeObserver((entries)=>{
 console.log(entries)
})`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* INTERSECTION OBSERVER */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ Intersection Observer</h2>

        <div style={descBox}>
          <p>
            Detects if element is visible in viewport.
          </p>

          <div style={successBox}>
            💡 Used in:
            infinite scroll, lazy loading, ads tracking
          </div>
        </div>

        <div style={cardStyle}>
          <pre style={codeStyle}>
{`const observer = new IntersectionObserver((entries)=>{
 console.log(
  entries[0].isIntersecting
 )
})`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* SLICE VS SPLICE */}
      {/* ===================================================== */}

      <section style={sectionStyle}>
        <h2 style={headingStyle}>✅ slice vs splice</h2>

        <div style={descBox}>
          <ul>
            <li>slice() → non mutating</li>
            <li>splice() → mutates original array</li>
          </ul>

          <div style={warningBox}>
            ❌ Avoid mutating React state directly.
          </div>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>slice()</h3>

            <pre style={codeStyle}>
{`const arr=[1,2,3,4]

arr.slice(1,3)

// [2,3]

Original unchanged`}
            </pre>
          </div>

          <div style={cardStyle}>
            <h3>splice()</h3>

            <pre style={codeStyle}>
{`const arr=[1,2,3,4]

arr.splice(1,2)

// mutates original`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReactDomCheatSheet;