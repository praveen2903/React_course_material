import { useState } from 'react'
import './App.css'
import DropDownAccordin from './arraycomponentsandRef/DropDownAccordin.jsx'
import ModalPopup from './arraycomponentsandRef/ModalPopup.jsx'
import OtpEnter from './arraycomponentsandRef/OtpEnter.jsx'
import StarRating from './arraycomponentsandRef/StarRating.jsx'
import TodoListIndexing from './arraycomponentsandRef/TodoListIndexing.jsx'
import ToDoListWithoutIndex from './arraycomponentsandRef/ToDoListWithoutIndexCauseissueWhileUpdate.jsx'
import PaginationAndFilter from './paginationandprogressbar/PaginationandFilter.jsx'
import ProgressBar from './paginationandprogressbar/Progressbar.jsx'
import SequentialProgressBarsWithoutRef from './paginationandprogressbar/SequentialProgressBarsWithoutRef.jsx'
import SequentialProgressBarRef from './paginationandprogressbar/SequentialProgressBarRef.jsx'
import SequentialProgressBarsWithState from './paginationandprogressbar/SequentialProgressBarsWithState.jsx'
import ConcurrentProgressBars from './paginationandprogressbar/ConcurrentProgressBars.jsx'
import DynamicArrayPagination from './paginationandprogressbar/DynamicArrayPagination.jsx'
import PaginationAndSorting from './paginationandprogressbar/PaginationAndSorting.jsx'
import DebouncedSearch from './optimisatonConcepts/DebouncedSearch.jsx'
import ThrottleSearch from './optimisatonConcepts/ThrottleSearch.jsx'
import RateLimitingSearch from './optimisatonConcepts/RateLimitingSearch.jsx'
import StopWatch from './UseRefComponents/StopWatch.jsx'
import DigitalClock from './UseRefComponents/DigitalClock.jsx'
import TrafficLightsWithRef from './arraycomponentsandRef/TrafficLightsWithRef.jsx'
import TrafficLights from './arraycomponentsandRef/TrafficLights.jsx'
import OTPEntry from './UseRefComponents/OtpEntry.jsx'
import DragAndDropTodo from './UseRefComponents/DragAndDropTodo.jsx'
import CountRenders from './UseRefComponents/CountRenders.jsx'
import InfiniteScroll from './UseRefComponents/InfiniteScroll.jsx'
import ModalRefs from './UseRefComponents/ModalRefs.jsx'
import DebouncedSearchWithRef from './optimisatonConcepts/DebouncedSearchWithRef.jsx'
import UndoRedo from './UseRefComponents/UndoRedo.jsx'
import FocusInput from './UseRefComponents/FocusInput.jsx'
import GridLights from './arraycomponentsandRef/GridLights.jsx'
import EventBubbling from './javascriptConcepts/EventBubbling.jsx'
import EventCapturing from './javascriptConcepts/EventCapturing.jsx'
import EventDelegation from './javascriptConcepts/EventDelegation.jsx'
import EventQueue from './javascriptConcepts/EventQueue.jsx'
import AbortControllerDemo from './optimisatonConcepts/AbortController.jsx'
import UseStateHook from './reacthooks/UseStateHook.jsx'
import UseEffectHook from './reacthooks/UseEffectHook.jsx'
import UseContextHook from './reacthooks/UseContextHook.jsx'
import UseContextTraps from './reacthooks/UseContextTraps.jsx'
import StarRatingFractions from './arraycomponentsandRef/StarRatingFractions.jsx'
import TimeoutvsInterval from './reacthooks/TimeoutvsInterval.jsx'
import UseMemoHook from './reacthooks/UseMemoHook.jsx'
import UseCallbackHook from './reacthooks/UseCallbackHook.jsx'
import UseCallbackAndMemo from './reacthooks/UseCallbackAndMemo.jsx'
import LightsRef from './UseRefComponents/LightsRef.jsx'
import UseRefHook from './reacthooks/UseRefHook.jsx'
import UseReducerHook from './reacthooks/UseReducerHook.jsx'
import UseRefMistakes from './mistakesInHooks/UseRefMistakes.jsx'
import ToolTip from './advancedConcepts/ToolTip.jsx'
import InfiniteScrollRef from './advancedConcepts/InfiniteScrollRef.jsx'
import DebounceUndoRedo from './advancedConcepts/DebounceUndoRedo.jsx'
import RefDebouncedSearch from './optimisatonConcepts/RefDebouncedSearch.jsx'
import ReactDomCheatSheet from './mistakesInHooks/CheatSheet.jsx'
import EventLoop from './javascriptConcepts/EventLoop.jsx'
import CallBindApply from './javascriptConcepts/CallBindApply.jsx'
import BindUsage from './javascriptConcepts/BindUsage.jsx'
import KeyboardEventListener from './advancedConcepts/KeyboardEventListener.jsx'
import KanbanBoard from './advancedConcepts/KanbanBoard.jsx'
import TicTacToe from './advancedConcepts/TicTacToe.jsx'
import BirthYearHistogram from './advancedConcepts/BirthYearHistogram.jsx'
import ConnectFourGame from './advancedConcepts/ConnectFourGame.jsx'
import CurryingAndPrototype from './javascriptConcepts/CurryingAndPrototype.jsx'
import MovingTicTacToe from './advancedConcepts/MovingTicTacToe.jsx'
import GameMove from './advancedConcepts/GameMove.jsx'
import DraggingGameMove from './advancedConcepts/DraggingGameMove.jsx'
import SliceVsSpliceGuide from './javascriptConcepts/slicevssplice.jsx'
import ReactQueryCompleteGuide from './reacthooks/ReactQuery.jsx'
import ReduxToolkitCompleteDemo from './mistakesInHooks/Redux.jsx'
import GraphQLDemoApp from './mistakesInHooks/GraphQL.jsx'
import TypeScriptMasterCheatSheet from './typescriptConcepts/TypescriptDemo'
import EventLoops from './javascriptAsyncronous/EventLoops'
import Callbacks from './javascriptAsyncronous/Callbacks'
import Promises from './javascriptAsyncronous/Promises'
import AsyncAwait from './javascriptAsyncronous/AsyncAwait'
import DestructuringUsage from './javascriptConcepts/DestructuringUsage'
import ModernInfiniteScrollWindow from './infinite_scroll/ModernInfiniteScrollWindow'
import OldInfiniteScrollWindow from './infinite_scroll/OldInfiniteScrollWindow'
import StorePreviousValue from './UseRefComponents/StorePreviousValue'
import DragBallWithHandlers from './arraycomponentsandRef/DragBallWithHandlers'
import DragBallWithRef from './arraycomponentsandRef/DragBallWithRef'
import Kubernetes from './mistakesInHooks/Kubernetes'
import JwtTokens from './mistakesInHooks/JwtTokens'
import ReactHookFormFullDemo from './mistakesInHooks/ReactHooksInterviewNotes.jsx'
import RefTypes from './UseRefComponents/RefTypes'
import SocketsDemo from './typescriptConcepts/SocketsDemo'
import RefUsageConcepts from './interview/RefUsageConcepts'
import CloudConcepts from './interview/CloudConcepts'
import RoutingExample from './routingConcepts/RoutingExample'
import TemporalDeadZone from './javascriptConcepts/TemporalDeadZone'

function App() {

  const [tabs, setTabs] = useState('pagination')
  const readableTabs = new Set([
    'jwt',
    'kubernetes',
    'graphql',
    'redux',
    'react-hooks',
    'sockets',
    'interview',
  ])
  const tabList = [
  "array",
  "pagination",
  "optimization",
  "useRefcomponents",
  "jsConcepts",
  "promises",
  "hooks",
  "All Events",
  "redux",
  "graphql",
  "typescript",
  "react-hooks",
  "advanced",
  "modernInfiniteScroll",
  "oldInfiniteScroll",
  "kubernetes",
  "jwt",
  "sockets",
  "interview",
  "routing"
];


  return (
    <div className={`app-shell ${readableTabs.has(tabs) ? 'readable-page' : ''}`}>

<div className="tabs-container">
  {tabList.map(tab => (
    <button
      key={tab}
      style={{
          backgroundColor:tabs === tab ? "#2563eb" : "white",
          color: tabs === tab ? "white" : "black",
          border: tabs === tab ? "1px solid #2563eb": "1px solid #ccc"
        }}
      onClick={() => setTabs(tab)}
    >
      {tab}
    </button>
  ))}
</div>
    {
      tabs==='kubernetes' && (
        <>
        <div className="section-divider" />
        <Kubernetes/>
        </>
      )
    }
        {
      tabs==='jwt' && (
        <>
        <div className="section-divider" />
        <JwtTokens/>
        </>
      )
    }
    {
      tabs==='react-hooks' && (
        <>
        <div className="section-divider" />
        <ReactHookFormFullDemo/>
        </>
      )
    }
    {
      tabs==='redux' && (
        <>
          <div className="section-divider" />
          <ReduxToolkitCompleteDemo/>
        </>
      )
    }
    {
      tabs==='graphql' && (
        <>
          <div className="section-divider" />
          <GraphQLDemoApp/>
        </>
      )
    }
    {
      tabs==="routing" && (
        <>
          <div className="section-divider" />
          <RoutingExample/>
        </>
      )
    }
    {
      tabs==='promises' && (
        <>
        <h2>asyncronous codes demo</h2>
          <div className="section-divider" />
          <EventLoops/>
          <div className="section-divider" />
          <Callbacks/>
          <div className="section-divider" />
          <Promises/>
          <div className="section-divider" />
          <AsyncAwait/>
          <div className='section-divider' />
          <SliceVsSpliceGuide/>
        </>
      )
    }
    {
      tabs==='typescript' && (
        <>
          <div className="section-divider" />
          <TypeScriptMasterCheatSheet/>
        </>
      )
    }
    {tabs==='modernInfiniteScroll' && (
      <>
        <div className="section-divider" />
        <ModernInfiniteScrollWindow/>
      </>
    )}
        {tabs==='oldInfiniteScroll' && (
      <>
        <div className="section-divider" />
        <OldInfiniteScrollWindow/>

      </>
    )}
      {
        tabs==='advanced' && (
          <>
          <div className="section-divider" />
          <DebounceUndoRedo/>
           <div className="section-divider" />
           <ToolTip/>
           <div className="section-divider" />
          <InfiniteScrollRef/>           
          <div className="section-divider" />
          <KeyboardEventListener/>
          <div className="section-divider" />
          <KanbanBoard/>
          <div className="section-divider" />
          <TicTacToe/>
          <div className="section-divider" />
          <GameMove/>
          <div className="section-divider" />
          <DraggingGameMove/>
          <div className="section-divider" />
          <MovingTicTacToe/>
          <div className="section-divider" />
          <ConnectFourGame/>
          <div className="section-divider" />
          <BirthYearHistogram/>
          </>
        )
      }
      {
        tabs==='All Events' && (
          <>
            <div className="section-divider" />
            <UseRefMistakes/>
            {/* <div className="section-divider" />
            <ReactHooksInterviewNotes/> */}
            <div className="section-divider" />
            <ReactDomCheatSheet/>
          </>
        )
      }
      {
        tabs =='interview' && (
          <>
          <RefUsageConcepts/>
          <CloudConcepts/>
          </>
        )
      }
      {
        tabs==='hooks' && (
          <>
          <h3>Execution order & useEffect confusions</h3>
<code>
                    <pre style={{textAlign:'left '}}>
{`[Phase 1: Render] Run Function Body -> Create/Read Refs -> Calculate Virtual DOM
                                 ↓
[Phase 2: Commit] Mutate DOM -> Clear Old Refs -> Assign New DOM Nodes to Refs
                                 ↓
[Phase 3: Paint ] Browser paints the changes onto the screen
                                 ↓
[Phase 4: Effect] Run useEffect Cleanup -> Run useEffect Setup`}

<pre style={{textAlign:'left'}}>
  {`
  1. Webpage Preperation --Browser loads html, css , js and prepare updating it on DOM (rendering)
  2. Parses HTML content --Browser parses html and creates DOM tree
  3. create DOM structure--DOM tree constructed
  4. Positon & Layout calculated --Calculates size and position of elements
  5. DOM painted       -- draws pixels on screen
  6. Virtual DOM rerendering  -- reconciliation in react`}
</pre>
<pre>
  {`For updates:-
  state change -> Virtual DOM updated -> Reconciliation -> Real DOM updated -> Layout calculated -> Paint -> useEffect -> Rerenders if any
    
Note: 
  1.The re-rendering paints only controlled elements (states), but not uncontrolled elements(REF) (get updated but not get painted)
  2. The handlers need react batching for consistent update of state else they wait for the real dom update and paints look react batching`}
</pre>

<hr/>
{`| Dependency Array      | Initial Render     | Dependency Change       |
| -------------------   | --------------     | -----------------       |
| \`[]\`                  | ✅ Yes            | ❌ No                   |
| \`[val]\`               | ✅ Yes            | ✅ Yes                  |
| No dependency array   | ✅ Yes            | ✅ Every render on dom  |`}
<hr/>

{`useEffect (()=>{
  console.log("hi")
  }, []/ [props.val]/ __)   -- even without dependency array, or no dependency or array dependency intial render consoles hi, post re-render happens`}
        </pre>
</code>
<code><pre>{`
┌─────────────────────────┬─────────────────────────┐
│ CONTROLLED COMPONENT    │ UNCONTROLLED COMPONENT  │
├─────────────────────────┼─────────────────────────┤
│ React controls value    │ DOM controls value      │
│ using state             │ using ref               │
├─────────────────────────┼─────────────────────────┤
│ Uses useState()         │ Uses useRef()           │
├─────────────────────────┼─────────────────────────┤
│ value={state}           │ ref={inputRef}          │
├─────────────────────────┼─────────────────────────┤
│ Updates state on        │ Reads value when        │
│ every keystroke         │ needed                  │
├─────────────────────────┼─────────────────────────┤
│ Re-renders on change    │ No re-render required   │
├─────────────────────────┼─────────────────────────┤
│ Easy validation         │ Manual validation       │
├─────────────────────────┼─────────────────────────┤
│ Most React forms        │ File uploads            │
│ Login Forms             │ Simple Forms            │
│ Search Inputs           │ Third Party Libraries   │
├─────────────────────────┼─────────────────────────┤
│ Source of Truth         │ Source of Truth         │
│ React State             │ DOM Element             │
└─────────────────────────┴─────────────────────────┘


CONTROLLED EXAMPLE
──────────────────────────────────────────────
const [name,setName] = useState("");
<input value={name} onChange={(e)=> setName(e.target.value)} />

Typing
  ↓
onChange
  ↓
setState
  ↓
React State Updated
  ↓
UI Updated


UNCONTROLLED EXAMPLE
──────────────────────────────────────────────
const inputRef = useRef();  -- get the DOM event into ref
<input ref={inputRef} />
<button onClick={()=> {console.log(inputRef.current.value); inputRef.current?.focus();}}> Submit</button>

Typing
  ↓
DOM Stores Value
  ↓
Click Submit
  ↓
Read Using Ref

INTERVIEW ANSWER
──────────────────────────────────────────────
Controlled Component → React manages input data using state.

Uncontrolled Component → DOM manages input data and React accesses it using refs.

MEMORY TRICK
─────────────────────────────────────────────
Controlled → React knows every character.
Uncontrolled → React knows only when asked.`}</pre>
</code>


            <div className="section-divider" />
            <TimeoutvsInterval/>
            <div className="section-divider" />
            <UseStateHook/>
            <div className="section-divider" />
            <UseEffectHook/>   
            <div className="section-divider" />
             <ReactQueryCompleteGuide/>         
            <div className="section-divider" />
            <UseContextHook/>
            <UseContextTraps/>
            <div className="section-divider" />
            <UseMemoHook/>
   <div className="section-divider" />
            <UseCallbackHook/>
            <UseCallbackAndMemo/>
            <div className="section-divider" />
            <UseRefHook/>
            <div className="section-divider" />
            <UseReducerHook/>



          </>
        )
      }
      {
        tabs=='jsConcepts' && (
          <>
          <h2>Closures and event loops</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap: '30px'}}>
                      <pre>
            {`Closure function-- A function that remembers variables from its outer scope even after that scope is gone

function greet(name) {
  setTimeout(() => {
    console.log("Hello " + name);  // name remebered even after scope is gone
  }, 1000);
}
greet("Praveen");  //hello praveen
 ------------------------------------------------------------------------------------------

function createCounter() {
  let count = 0; // private variable
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//----------------------------------------------------------------------------

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// ❌ prints: 4, 4, 4
for( var i=1; i<=3; i++) {
     (function(j){
        setTimeout(()=>console.log(j), 1000);
    })(i);
}

// prints 1,2,3
//-----------------------------------------------------------------------------

//same but without closure without closure balance is object and public  -- class method

// Feature	                   Class	                        Closure
// Where is balance?	      this.balance (object)	        local variable (function)
// Access from outside	    ✅ possible	                ❌ not possible
// Privacy	                ❌ public	                  ✅ private
// Uses this	              ✅ yes	                      ❌ no
// Memory	methods shared	  new functions                 each time
// Pattern	                OOP	                          Functional



class BankAccount {
  constructor() {
    this.balance = 1000;
  }
  deposit(amt) {
    this.balance += amt;
    console.log(this.balance);
  }
  withdraw(amt) {
    this.balance -= amt;
    console.log(this.balance);
  }
}
const acc = new BankAccount();
acc.deposit(100);
acc.withdraw(300);


//closure
function bankAccount(){
  let balance =1000;
  return {
    deposit: (amt)=>{
      balance+=amt;
      console.log(balance, ": post deposit balance")
    },
    withdraw: (amt)=>{
      balance-=amt;
      console.log(balance, ": post withdraw balance")
    }
  }
}

const account=  new backAccount();
account.deposit(100);  //1100
account.withdraw(300);  //800

----------------------------------------------------------------------
function outer() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  return increment;
}
const fn = outer();

fn();  //1
fn();  //2
fn();  //3

-----------------------------------------------------------------------------
function outer() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Increment:", count);
    },

    decrement() {
      count--;
      console.log("Decrement:", count);
    },

    getValue() {
      console.log("Current:", count);
    }
  };
}

const counter = outer();
counter.increment();           //increment :1
counter.increment();           //increment: 2
counter.decrement();           //decrement: 1
counter.getValue();            //current: 1

--------------------------------------------------------
Nested closures

function outer() {
  let a = 10;
  function middle() {
    let b = 20;
    return function() {
      console.log(a,b);   //10  20
    };
  }
  return middle();
}
const fn = outer();
fn();

-----------------------------------------------------------------
Closures + mutations

function outer() {
  let x = 10;
  return {
    get() {
      console.log(x);
    },
    set(v) {
      x = v;
    }
  };
}

const obj = outer();
obj.get();
obj.set(50);
obj.get();

output: 10  50

--------------------------------------------------------------------
 Important ***
 ------------------------------------------------------------------

 for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

output: 3 3 3 

Reason:- Loop finishes: i = 3 (All callbacks use the same variable.)

--Fix using the closures

for (var i = 0; i < 3; i++) {
  (function(x){
    setTimeout(() => {
      console.log(x);
    },100);
  })(i);
}

output: 0 1 2     Each function call creates a new closure containing x.


--Fix using let

for(let i=0;i<3;i++){
  setTimeout(()=>{
    console.log(i);
  },0);
}
output: 0  1  2
_____________________________________________________________________________________`}
          </pre>
          <pre>
  {`console.log("A");     //sync codes A,D
setTimeout(() => {    //Macrotask/ callback queue
  console.log("B");
}, 0);
Promise.resolve().then(() => {        //microtask queue promises/ async
  console.log("C");
});

console.log("D");

output: A D C B
_____________________________________________________________________________________

console.log("Start");
Promise.resolve().then(() => {
  console.log("P1");
});
Promise.resolve().then(() => {
  console.log("P2");
});
console.log("End");

output: Start End P1 P2
___________________________________________________________________________

console.log("A");
setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => {
    console.log("C");
  });
},0);

console.log("D");


output: A D B C
___________________________________________________________________________
console.log("A");
setTimeout(() => {
  console.log("B");
},0);

Promise.resolve().then(() => {
  console.log("C");

  setTimeout(() => {
    console.log("D");
  },0);
});
Promise.resolve().then(() => {
  console.log("E");
});
console.log("F");

output: A F C E B D
--------------------------------------------------------------
var a = 10;

setTimeout(() => {
  console.log(a);
}, 1000);

var a = 50;

output: 50
----------------------------------------------------------------
var x = 1;
function outer() {
  console.log("A", x);
  var x = 2;
  setTimeout(() => {
    console.log("B", x);
    x = 3;
    console.log("C", x);
  },0);
  console.log("D", x);
}

outer();

Output: A undefined (hoisting)   D 2     B 2   C 3

-------------------------------------------------------
var a = 10;
function outer() {
  return function() {
    console.log(a);    // 20 -- fn() called post a reassignment
  };
}
const fn = outer();
a = 20;
fn();

----------------------------------------------------------------
function counter() {

  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const c1 = counter();
const c2 = counter();

c1();  //1
c1();      //2
c2();          //1  -- new closure right this is how it works
c1();             //3

--------------------------------------------------------------------
var x = 1;

function test() {
  console.log(x);     // undefined  (var not yet defined in function scode so undefined)
  var x = 2;
  console.log(x);     //2
}

test();   //x=1 will not be carried to function

------------------------------------------------------
┌──────────────┬───────────────────────────────┬───────────────────────────────┬───────────────────────────────┐
│ Feature      │ var                           │ let                           │ const                         │
├──────────────┼───────────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ Scope        │ Function Scope                │ Block Scope                   │ Block Scope                   │
│              │                               │                               │                               │
│ Hoisted      │ Yes                           │ Yes                           │ Yes                           │
│              │                               │                               │                               │
│ Initial      │ undefined                     │ TDZ (Temporal Dead Zone)      │ TDZ (Temporal Dead Zone)      │
│ Value        │                               │                               │                               │
│              │                               │                               │                               │
│ Access       │ Allowed before declaration    │ Error before declaration      │ Error before declaration      │
│ Before Decl. │                               │                               │                               │
│              │                               │                               │                               │
│ Redeclare    │ Yes                           │ No                            │ No                            │
│              │                               │                               │                               │
│ Reassign     │ Yes                           │ Yes                           │ No                            │
│              │                               │                               │                               │
│ Global       │ Attached to window            │ Not attached                  │ Not attached                  │
│ Object       │ (browser)                     │                               │                               │
│              │                               │                               │                               │
│ Loop Trap    │ Same variable                 │ New variable per iteration    │ New variable per iteration    │
│              │                               │                               │                               │
│ Use Case     │ Legacy Code                   │ Mutable values                │ Constants                     │
└──────────────┴───────────────────────────────┴───────────────────────────────┴───────────────────────────────┘


┌────┬──────────────────────────────┬──────────────────────────────┬─────────────────────────────────────────────┬─────────────┐
│ #  │ Interview Trap               │ Code Pattern                │ Why?                                        │ Output      │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│ 1  │ var + setTimeout             │ for(var i=0;i<3;i++)        │ One shared i. Loop ends with i=3.           │ 3 3 3       │
│    │                              │ setTimeout(...);            │ All callbacks read same variable.           │             │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│ 2  │ let + setTimeout             │ for(let i=0;i<3;i++)        │ New i created for every iteration.          │ 0 1 2       │
│    │                              │ setTimeout(...);            │ Each callback gets own scope.               │             │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│ 3  │ var + Promise.then           │ for(var i=0;i<3;i++)        │ Promise runs later after loop completes.    │ 3 3 3       │
│    │                              │ Promise.then(...);          │ Shared i becomes 3.                         │             │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│ 4  │ let + Promise.then           │ for(let i=0;i<3;i++)        │ New binding per iteration.                  │ 0 1 2       │
│    │                              │ Promise.then(...);          │                                             │             │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│ 5  │ Closure Reference Trap       │ let a=10;                   │ Closure stores reference, not value.        │ 50          │
│    │                              │ fn=()=>console.log(a)       │                                             │             │
│    │                              │ a=50; fn();                 │                                             │             │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│ 6  │ Separate Closures            │ const a=outer();            │ Every outer() call gets separate memory.    │ 1 2 1       │
│    │                              │ const b=outer();            │                                             │             │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│ 7  │ Shared Closure               │ return {                    │ All methods point to same count variable.   │ 2           │
│    │                              │ inc(),show() }             │                                             │             │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│ 8  │ var Hoisting Trap            │ console.log(a);             │ var is hoisted as undefined.                │ undefined   │
│    │                              │ var a=10;                   │                                             │             │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│ 9  │ let TDZ Trap                 │ console.log(a);             │ let exists but inaccessible before init.    │ Error       │
│    │                              │ let a=10;                   │ Temporal Dead Zone.                         │             │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│10  │ Promise vs Timeout           │ Promise.then(...)           │ Microtasks execute before macrotasks.       │ P then T    │
│    │                              │ setTimeout(...)             │                                             │             │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│11  │ Nested Closure               │ outer→middle→inner          │ Inner accesses all parent scopes.           │ 10 20       │
│    │                              │ console.log(a,b)            │                                             │             │
├────┼──────────────────────────────┼──────────────────────────────┼─────────────────────────────────────────────┼─────────────┤
│12  │ Delayed Timer Trap           │ for(var i=1;i<=3;i++)       │ Loop completes before timers execute.       │ 4 4 4       │
│    │                              │ setTimeout(...,i*1000)      │                                             │             │
└────┴──────────────────────────────┴──────────────────────────────┴─────────────────────────────────────────────┴─────────────┘`}
</pre>
          </div>
          <div className="section-divider" />
          <EventLoop/>
          <div className="section-divider" />
          <BindUsage/>
          <CallBindApply/>
          <div className="section-divider" />
          <DestructuringUsage/>
          <div className="section-divider" />
          <CurryingAndPrototype/>
          <div className="section-divider" />
            <EventDelegation/>
            <div className="section-divider" />
            <EventQueue/>
           <div className="section-divider" />
           <EventBubbling/>
           <div className="section-divider" />
           <EventCapturing/>
           <div className="section-divider" />
           <TemporalDeadZone/>
          </>
        )
      }
      {
        tabs==='pagination' && (
          <>
            <div className="section-divider" />
            <PaginationAndSorting/>
            <div className="section-divider" />
            <DynamicArrayPagination/>
            <div className="section-divider" />
            <PaginationAndFilter/>  
            <div className="section-divider" />
            <ConcurrentProgressBars/>
            <div className="section-divider" />
            <SequentialProgressBarRef/>
            <div className="section-divider" />
            <SequentialProgressBarsWithState/>
            <div className="section-divider" />
            <SequentialProgressBarsWithoutRef/>
            <div className="section-divider" />
            <ProgressBar/>
          </>
        )
      }  
      {
        
        tabs === 'array' && (
          <> 
          <div className="section-divider" />   
            <StarRatingFractions/>
            <div className="section-divider" />   
            <StarRating/>
          <div className="section-divider" />   
          <DragBallWithHandlers/>
        <div className="section-divider" />
            <DragBallWithRef/>
            <div className="section-divider" />   
            <GridLights/>
            <div className="section-divider" />
            <OtpEnter/>
            <div className="section-divider" />
            <TrafficLights/>
            <div className="section-divider" />
            <TrafficLightsWithRef/>
            <div className="section-divider" />
            <DropDownAccordin/>
            <div className="section-divider" />
            <TodoListIndexing/>
            <div className="section-divider" />
            <ToDoListWithoutIndex/>
            <div className="section-divider" />
            <ModalPopup/>
                
          </>
        )
      }  
      {
        tabs==='optimization' && (
          <>
            <div className="section-divider" />
            <DebouncedSearch/>
            <div className="section-divider" />
            <DebouncedSearchWithRef/>
            <div className="section-divider" />
            <RefDebouncedSearch/>
            <div className="section-divider" />
            <ThrottleSearch/>
            <div className="section-divider" />
            <RateLimitingSearch/>
            <div className="section-divider" />
            <AbortControllerDemo/>
          </>
        )
      }
      {
        tabs==='useRefcomponents' && (
          <>

          <h1>How to give useRef initial values?</h1>
  <h4>Dom elements/ Timeouts:  useRef(null)</h4>
  <h4>If mutable things like attached to DOM like grid/ counters:- useRef(----): mutable value related like [],{},0</h4>
          <div className="section-divider" />
         <div style={{textAlign:'left'}}>
           <div>
            <span>Usage to learn: like use of useRef instead of useState to stop the rerending of Dom </span>
            <p>Example: here count state is not useful on change state the dom rerenders and rerender called everytime</p>
            <code>
              <pre>{`const [count,setCount] = useState(0);  -- controlled component
console.log('rerender)
const handleClick = ()=>{
  if(count<3){
      fetchUsers();
  }
  setCount(count=>count+1)   -- where ever clicked the rerender logs cause cpu and memory occupied
}
return ( <button onClick = {handleClick}>fetch</button>)
              `}</pre>
            </code>
<p>UseRef is used here so that the counterRef keep track of mutable data without causing rerenders</p>
            <code>
              <pre>{`const countRef = useRef(0);  -- uncontrolled components
console.log('rerender)
const handleClick = ()=>{
  if(counterRef.current<3){
      fetchUsers();
  }
  counterRef.current++;   //rerender doesn't get logged when button clicked use of refs
}
return ( <button onClick = {handleClick}>fetch</button>)


1. previous values     2. stop re-rendering
              `}</pre>
              </code>
          </div>
          <div>
            <span>Attaching the useRef to the DOM element and storing it to make focus or getBoundingClientRect()-- to store the area of the rectangle</span>
          </div>
          <div>
            <span>store the timers or functions which are constant things this helps to store timer so that Clear is useful to stop it.</span>
          </div>
         </div>
          <div className="section-divider" />
          <RefTypes/>
          <div className="section-divider" />
          <StorePreviousValue/>
          <div className="section-divider" />
            <FocusInput/>
            <div className="section-divider" />
            <CountRenders/>
          <div className="section-divider" />
            <UndoRedo/>
            <div className="section-divider" />
            <InfiniteScroll/>
            <div className="section-divider" />
            <ModalRefs/>
          <div className="section-divider" />
           <DragAndDropTodo/>
           <div className="section-divider" />
           <StopWatch/>
           <div className="section-divider" />
           <LightsRef/>

            <div className="section-divider" />
            <DigitalClock/>
            <div className="section-divider" />
            <OTPEntry/>
          </>
        )
      }
      {
        tabs==='sockets' && (
          <>
             <div className="section-divider" />
             <SocketsDemo/>
          </>
        )
      }
    </div>
    
  )
}

export default App