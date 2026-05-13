import React from "react";

const ReactDomCheatSheet = () => {

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
    <div style={{padding: "30px", maxWidth: "1000px", margin: "0 auto",
        lineHeight: "1.8",
        textAlign: "left", 
      }}>
      <h2>React DOM Events + Coordinates Cheat Sheet --Gives the overview of things used in the 
        components like use of getBoundingClientRect how tooltip mouse track events one and drag is done, and 
        infinite scroll events used</h2>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Mouse Events</h3>

        <pre style={codeStyle}>
{`onClick  -- on single click of button 
-------
Runs when element is clicked

<button onClick={handleClick}>Click</button>


onDoubleClick  -- on double click event is activated for the button
--------------
Runs on double click

<button onDoubleClick={handleDouble}>Double</button>


onMouseEnter  -- like when tooltip when mouse enters the tooltips then tooltipref doesn't close
-------------
Runs when mouse enters element

<div onMouseEnter={() => console.log("entered")}></div>


onMouseLeave  -- when mouse leaves the tooltip it must close
-------------
Runs when mouse leaves element

<div onMouseLeave={() => console.log("left")}></div>


onMouseMove
------------
Runs continuously while moving mouse

<div onMouseMove={(e) => console.log(e.clientX)}></div>


onMouseDown
------------
Runs when mouse button pressed

<div onMouseDown={() => console.log("down")}></div>


onMouseUp
----------
Runs when mouse released

<div onMouseUp={() => console.log("up")}></div>
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Keyboard Events-- like when give input and on key press enter keyboard events it is need to keep it to input</h3>

        <pre style={codeStyle}>
{`onKeyDown  -- the event.key gives the details of what key 
pressed like backspace/enter like on click enter while giving input it must be set can be done this way
-----------
Runs when key pressed

<input onKeyDown={(e) => console.log(e.key)} />


onKeyUp  -- like when key is released the signal can't be sent
--------
Runs when key released

<input onKeyUp={(e) => console.log(e.key)} />


Common Keys
------------
Enter
Escape
ArrowUp
ArrowDown
Backspace
Tab
Shift
Control


Example
--------
const handleKey = (e) => {
  if(e.key === "Enter") {
    console.log("submitted")
  }
}
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Input/ textArea Events</h3>

        <pre style={codeStyle}>
{`onChange  -- input onchange the target.value saves what in the data
----------
Runs when input value changes

<input onChange={(e) => setText(e.target.value)} />


onFocus  -- while ref.current.focus() it gets highlighted we could give custom styles at e.target.style
--------
Runs when input focused

<input onFocus={(e) => console.log("focus")
e.target.style.border=''} />


onBlur -- while ref.current.focus() is not applied, it counterpart of focus() we could give custom styles at e.target.style
-------
Runs when input loses focus

<input onBlur={() => console.log("blur")} />
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Scroll Events</h3>

        <pre style={codeStyle}>
{`onScroll
---------
Runs while scrolling -- infinite scroll and show more while using we use this

<div onScroll={handleScroll}></div>


Important Scroll Properties
----------------------------
scrollTop
→ current scroll position

clientHeight
→ visible height

scrollHeight
→ total content height


Bottom Detection  -how much need to scroll to bottom
-----------------
if(scrollTop + clientHeight >= scrollHeight - 5) {
  loadMore()
}

Used In
--------
- infinite scroll
- lazy loading
- chat apps
- scroll progress
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Drag And Drop Events-- drag and drop</h3>

        <pre style={codeStyle}>
{`draggable
----------
Makes element draggable

<div draggable></div>


onDragStart
------------
Runs when dragging starts

<div onDragStart={() => console.log("start")}></div>


onDragOver
-----------
Needed to allow dropping

<div onDragOver={(e) => e.preventDefault()}></div>


onDrop
-------
Runs when dropped

<div onDrop={() => console.log("dropped")}></div>


Common Drag Flow
----------------
onDragStart -- store it in ref store current index ref.current=index
→ store dragged index

onDragOver  -- stop browser to refresh/accidentally drop
→ prevent default

onDrop  - give as an argument for handle drop
→ swap/update items


const copyTasks =  [...taskList];
const dragged = copyTasks[dragRef.current];

copyTasks.splice(dragRef.current,1);   //slice vs splice -- slice in pagination and splice for drag and drop
copyTasks.splice(dropIndex,0, dragged);

Used In
--------
- todo reorder
- kanban boards
- file uploads
- dashboards
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Touch Events (Mobile)</h3>

        <pre style={codeStyle}>
{`onTouchStart
--------------
Runs when finger touches screen

<div onTouchStart={() => console.log("touch")}></div>


onTouchMove
-------------
Runs while finger moves

<div onTouchMove={() => console.log("moving")}></div>


onTouchEnd
-----------
Runs when touch removed

<div onTouchEnd={() => console.log("end")}></div>


Used In
--------
- swipe gestures
- mobile drag
- drawing apps
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Mouse Coordinates -- used to auto close</h3>

        <pre style={codeStyle}>
{`clientX / clientY
-------------------
Mouse position inside browser viewport

onMouseMove={(e) => {
  console.log(e.clientX)
  console.log(e.clientY)
}}


pageX / pageY
---------------
Mouse position including page scroll

console.log(e.pageX)


screenX / screenY
------------------
Position relative to monitor screen

console.log(e.screenX)


offsetX / offsetY
------------------
Position inside current element

console.log(e.offsetX)
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ getBoundingClientRect()</h3>

        <pre style={codeStyle}>
{`Returns element position + size

const box = ref.current.getBoundingClientRect()

console.log(box)


Common Properties
------------------
box.top
box.left
box.right
box.bottom
box.width
box.height


Example
--------
const rect = divRef.current.getBoundingClientRect()

console.log(rect.top)
console.log(rect.width)


Used In
--------
- tooltips
- modals
- drag/drop
- collision detection
- animations
- viewport visibility
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Event Target</h3>

        <pre style={codeStyle}>
{`e.target
---------
Actual clicked element

console.log(e.target)


e.currentTarget
----------------
Element event attached to

console.log(e.currentTarget)


Example
--------
<div onClick={handleClick}>
  <button>Click</button>
</div>


e.target
→ button


e.currentTarget
→ div
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ preventDefault vs stopPropagation</h3>

        <pre style={codeStyle}>
{`e.preventDefault()
-------------------
Stops default browser behavior -- like refresh/ dropping the dragging item when dragOver

Example:
---------
form submit refresh
link navigation


<form onSubmit={(e) => e.preventDefault()}>



e.stopPropagation()
---------------------
Stops event bubbling

Example:
---------
child click should not trigger parent click

<button onClick={(e) => e.stopPropagation()}>
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Common DOM APIs</h3>

        <pre style={codeStyle}>
{`focus()
--------
inputRef.current.focus()


blur()
-------
inputRef.current.blur()


scrollIntoView()
-----------------
ref.current.scrollIntoView()


contains()
------------
ref.current.contains(e.target)


closest()
-----------
e.target.closest(".card")


classList
-----------
e.target.classList.add("active")
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Most Asked Interview Concepts</h3>

        <pre style={codeStyle}>
{`Debounce
---------
Waits until user stops typing

Used in:
- search bars
- autocomplete


Throttle
---------
Runs every fixed interval

Used in:
- scroll
- resize


Event Bubbling
----------------
child → parent


Event Capturing
----------------
parent → child


Passive Events
----------------
Improves scroll performance


Pointer Events
----------------
Unified mouse + touch events
`}
        </pre>
      </section>
    

      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ DOM Tree Diagram</h3>

        <pre style={codeStyle}>
{`HTML DOM TREE
---------------

window
  │
  document
  │
  html
  ├── head
  │    ├── title
  │    └── meta
  │
  └── body
       ├── div
       │    ├── h1
       │    ├── p
       │    └── button
       │
       └── ul
            ├── li
            ├── li
            └── li


IMPORTANT
----------
Parent
→ element above

Child
→ element inside

Sibling
→ elements at same level


Example
--------
<div>
  <button>Click</button>
</div>

button
→ child

div
→ parent
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Event Bubbling Diagram</h3>

        <pre style={codeStyle}>
{`EVENT BUBBLING
----------------

<div>
  <button>Click</button>
</div>


Click button
↓
button event fires
↓
then div event fires
↓
then body
↓
then document


FLOW
-----
child → parent


Example
--------
<div onClick={() => console.log("div") }>

  <button onClick={() => console.log("button") }>
    Click
  </button>

</div>


OUTPUT
--------
button
then
DIV


STOP BUBBLING
---------------
<button onClick={(e) => e.stopPropagation()}>
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Event Capturing Diagram</h3>

        <pre style={codeStyle}>
{`EVENT CAPTURING
-----------------

FLOW
-----
parent → child


Example
--------
<div onClickCapture={() => console.log("div") }>

  <button onClickCapture={() => console.log("button") }>
    Click
  </button>

</div>


OUTPUT
--------
div
then
button
`}
        </pre>
    </section>
    <section style={sectionStyle}>
    <h3>✅ Ref Flow Diagram</h3>

    <pre style={codeStyle}>
{`const inputRef = useRef(null)


<input ref={inputRef} />


FLOW
-----
Render
↓
DOM created
↓
React attaches DOM node to:
inputRef.current
↓
Now accessible


Example
--------
inputRef.current.focus()


IMPORTANT
-----------
Before mount:
inputRef.current = null

After mount:
inputRef.current = DOM element
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Layout Measurements</h3>

        <pre style={codeStyle}>
{`offsetWidth
-------------
Element width including border


clientWidth
-------------
Visible width excluding scrollbar


scrollWidth
-------------
Total scrollable width


offsetHeight
--------------
Height including border


clientHeight
--------------
Visible height


scrollHeight
--------------
Total scrollable height


Used In
--------
- infinite scroll
- custom scrollbars
- drag/drop
- responsive layouts
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ requestAnimationFrame()</h3>

        <pre style={codeStyle}>
{`Runs animation before next browser repaint


Example
--------
requestAnimationFrame(() => {
  console.log("animate")
})


Used In
--------
- smooth animations
- dragging
- canvas updates
- game loops


Better than setTimeout for animations
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Resize Observer</h3>

        <pre style={codeStyle}>
{`Detects element size changes


Example
--------
const observer = new ResizeObserver((entries) => {
  console.log(entries)
})

observer.observe(ref.current)


Used In
--------
- responsive components
- charts
- grids
- dynamic layouts
`}
        </pre>
      </section>


      {/* ===================================================== */}
      <section style={sectionStyle}>
        <h3>✅ Intersection Observer</h3>

        <pre style={codeStyle}>
{`Detects visibility inside viewport


Example
--------
const observer = new IntersectionObserver((entries) => {
  console.log(entries[0].isIntersecting)
})

observer.observe(ref.current)


Used In
--------
- infinite scroll
- lazy loading
- animations on scroll
- ads tracking
`}
        </pre>
      </section>
<pre>
   <h3>✅ splice -- drag and drop vs slice -- pagination</h3>
  <section style={sectionStyle}>
{`slice()
--------
Does NOT change original array
Used to copy or extract items


const arr = [10, 20, 30, 40, 50];

const result = arr.slice(1, 4);

console.log(result)
// [20, 30, 40]

console.log(arr)
// [10, 20, 30, 40, 50]


Explanation
------------
Start from index 1
Stop BEFORE index 4

Indexes:
0   1   2   3   4
10  20  30  40  50

Returned:
20 30 40



Copy Array
------------
const nums = [1,2,3];

const copy = nums.slice();

console.log(copy)
// [1,2,3]



Remove First Item
------------------
const arr2 = [10,20,30];

const res = arr2.slice(1);

console.log(res)
// [20,30]



Remove Last Item
-----------------
const arr3 = [10,20,30];

const res2 = arr3.slice(0,-1);

console.log(res2)
// [10,20]



splice()
---------
CHANGES original array
Used to add/remove/replace items


Syntax
-------
array.splice(start, deleteCount, items)



Remove Items
--------------
const arr4 = [10,20,30,40,50];

const removed = arr4.splice(1,2);

console.log(removed)
// [20,30]

console.log(arr4)
// [10,40,50]


Explanation
-------------
Start at index 1
Delete 2 items



Insert Items
--------------
const arr5 = [10,20,50];

arr5.splice(2,0,30,40);

console.log(arr5)
// [10,20,30,40,50]


Explanation
-------------
Start at index 2
Delete 0 items
Insert 30 and 40



Replace Items
---------------
const arr6 = [10,20,30,40];

arr6.splice(1,2,100,200);

console.log(arr6)
// [10,100,200,40]


Explanation
-------------
Remove:
20,30

Insert:
100,200



Main Difference
----------------
slice  -> no mutation
splice -> mutates original array



React Important
----------------
slice() is preferred in React
because it does NOT mutate state


Bad
----
todos.splice(1,1)


Good
-----
const newTodos = todos.slice(1)
`}
  </section>
</pre>
    </div>
  );
};

export default ReactDomCheatSheet;
