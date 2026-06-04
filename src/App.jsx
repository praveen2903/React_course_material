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

function App() {

  const [tabs, setTabs] = useState('pagination')
  const tabList = [
  "array",
  "pagination",
  "optimization",
  "useRefcomponents",
  "jsConcepts",
  "promises",
  "hooks",
  "mistakes",
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
    <div className="app-shell">

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
        tabs==='mistakes' && (
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
          <SliceVsSpliceGuide/>
          <div className="section-divider" />
            <EventDelegation/>
            <div className="section-divider" />
            <EventQueue/>
           <div className="section-divider" />
           <EventBubbling/>
           <div className="section-divider" />
           <EventCapturing/>
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
          <div className="section-divider" />
         <div style={{textAlign:'left'}}>
           <div>
            <span>Usage to learn: like use of useRef instead of useState to stop the rerending of Dom </span>
            <p>Example: here count state is not useful on change state the dom rerenders and rerender called everytime</p>
            <code>
              <pre>{`const [count,setCount] = useState(0);
console.log('rerender)
const handleClick = ()=>{
  if(count<3){
  fetchUsers();
  }
  setCount(count=>count+1)
}
return ( <button onClick = {handleClick}>fetch</button>)
              `}</pre>
            </code>
<p>UseRef is used here so that the counterRef keep track of mutable data without causing rerenders</p>
            <code>
              <pre>{`const countRef = useRef(0);
console.log('rerender)
const handleClick = ()=>{
  if(counterRef.current<3){
  fetchUsers();
  }
  counterRef.current++;
}
return ( <button onClick = {handleClick}>fetch</button>)
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

