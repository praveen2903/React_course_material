import { useState } from 'react'
import './App.css'
import DropDownAccordin from './arraycomponentsandRef/DropDownAccordin'
import ModalPopup from './arraycomponentsandRef/ModalPopup'
import OtpEnter from './arraycomponentsandRef/OtpEnter'
import StarRating from './arraycomponentsandRef/StarRating'
import TodoListIndexing from './arraycomponentsandRef/TodoListIndexing'
import ToDoListWithoutIndex from './arraycomponentsandRef/ToDoListWithoutIndexCauseissueWhileUpdate'
import PaginationAndFilter from './paginationandprogressbar/PaginationandFilter'
import ProgressBar from './paginationandprogressbar/Progressbar'
import SequentialProgressBarsWithoutRef from './paginationandprogressbar/SequentialProgressBarsWithoutRef'
import SequentialProgressBarRef from './paginationandprogressbar/SequentialProgressBarRef'
import SequentialProgressBarsWithState from './paginationandprogressbar/SequentialProgressBarsWithState'
import ConcurrentProgressBars from './paginationandprogressbar/ConcurrentProgressBars'
import DynamicArrayPagination from './paginationandprogressbar/DynamicArrayPagination'
import PaginationAndSorting from './paginationandprogressbar/PaginationAndSorting'
import DebouncedSearch from './optimisatonConcepts/DebouncedSearch'
import ThrottleSearch from './optimisatonConcepts/ThrottleSearch'
import RateLimitingSearch from './optimisatonConcepts/RateLimitingSearch'
import StopWatch from './UseRefComponents/StopWatch'
import DigitalClock from './UseRefComponents/DigitalClock'
import TrafficLightsWithRef from './arraycomponentsandRef/TrafficLightsWithRef'
import TrafficLights from './arraycomponentsandRef/TrafficLights'
import OTPEntry from './UseRefComponents/OtpEntry'
import DragAndDropTodo from './UseRefComponents/DragAndDropTodo'
import CountRenders from './UseRefComponents/CountRenders'
import InfiniteScroll from './UseRefComponents/InfiniteScroll'
import ModalRefs from './UseRefComponents/ModalRefs'
import DebouncedSearchWithRef from './optimisatonConcepts/DebouncedSearchWithRef'
import UndoRedo from './UseRefComponents/UndoRedo'
import FocusInput from './UseRefComponents/FocusInput'
import GridLights from './arraycomponentsandRef/GridLights'
import EventBubbling from './javascriptConcepts/EventBubbling'
import EventCapturing from './javascriptConcepts/EventCapturing'
import EventDelegation from './javascriptConcepts/EventDelegation'
import EventQueue from './javascriptConcepts/EventQueue'
import AbortControllerDemo from './optimisatonConcepts/AbortController'
import UseStateHook from './reacthooks/UseStateHook'
import UseEffectHook from './reacthooks/UseEffectHook'
import UseContextHook from './reacthooks/UseContextHook'
import UseContextTraps from './reacthooks/UseContextTraps'
import StarRatingFractions from './arraycomponentsandRef/StarRatingFractions'
import TimeoutvsInterval from './reacthooks/TimeoutvsInterval'
import UseMemoHook from './reacthooks/UseMemoHook'
import UseCallbackHook from './reacthooks/UseCallbackHook'
import UseCallbackAndMemo from './reacthooks/UseCallbackAndMemo'
import LightsRef from './UseRefComponents/LightsRef'
import UseRefHook from './reacthooks/UseRefHook'
import UseReducerHook from './reacthooks/UseReducerHook'
import UseRefMistakes from './mistakesInHooks/UseRefMistakes'
import ReactHooksInterviewNotes from './mistakesInHooks/ReactHooksInterviewNotes'
import ToolTip from './advancedConcepts/ToolTip'
import InfiniteScrollRef from './advancedConcepts/InfiniteScrollRef'
import DebounceUndoRedo from './advancedConcepts/DebounceUndoRedo'
import RefDebouncedSearch from './optimisatonConcepts/RefDebouncedSearch'
import ReactDomCheatSheet from './mistakesInHooks/CheatSheet'
import EventLoop from './javascriptConcepts/EventLoop'
import CallBindApply from './javascriptConcepts/CallBindApply'
import BindUsage from './javascriptConcepts/BindUsage'

function App() {

  const [tabs, setTabs] = useState('pagination')


  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column', gap:'20px'}}>

    <div className="tabs-container">
      <button onClick={() => setTabs("array")}>Array and useRef</button>
      <button onClick={() => setTabs("pagination")}>Pagination</button>
      <button onClick={() => setTabs("optimization")}>Optimization</button>
      <button onClick={() => setTabs("useRefcomponents")}>UseRef</button>
      <button onClick={() => setTabs("jsConcepts")}>JS Concepts</button>
      <button onClick={() => setTabs("hooks")}>React Hooks</button>
      <button onClick={() => setTabs("mistakes")}>
        CheatSheet & Mistakes
      </button>
      <button onClick={() => setTabs("advanced")}>Advanced</button>
    </div>
      {
        tabs==='advanced' && (
          <>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <DebounceUndoRedo/>
           <div>------------------------------------------------------------------------------------------------------------------</div>
           <ToolTip/>
           <div>------------------------------------------------------------------------------------------------------------------</div>
          <InfiniteScrollRef/>
          </>
        )
      }
      {
        tabs==='mistakes' && (
          <>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <UseRefMistakes/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
<ReactHooksInterviewNotes/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
<ReactDomCheatSheet/>
          </>
        )
      }
      {
        tabs==='hooks' && (
          <>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <TimeoutvsInterval/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <UseStateHook/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <UseEffectHook/>            
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <UseContextHook/>
            <UseContextTraps/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <UseMemoHook/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <UseCallbackHook/>
            <UseCallbackAndMemo/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <UseRefHook/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <UseReducerHook/>



          </>
        )
      }
      {
        tabs=='jsConcepts' && (
          <>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <BindUsage/>
          <CallBindApply/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <EventLoop/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
            <EventDelegation/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <EventQueue/>
           <div>------------------------------------------------------------------------------------------------------------------</div>
           <EventBubbling/>
           <div>------------------------------------------------------------------------------------------------------------------</div>
           <EventCapturing/>
          </>
        )
      }
      {
        tabs==='pagination' && (
          <>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <PaginationAndSorting/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <DynamicArrayPagination/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <PaginationAndFilter/>  
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <ConcurrentProgressBars/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <SequentialProgressBarRef/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <SequentialProgressBarsWithState/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <SequentialProgressBarsWithoutRef/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <ProgressBar/>
          </>
        )
      }  
      {
        
        tabs === 'array' && (
          <> 
          <div>------------------------------------------------------------------------------------------------------------------</div>   
            <StarRatingFractions/>
          
            <div>------------------------------------------------------------------------------------------------------------------</div>   
            <GridLights/>
            <div>------------------------------------------------------------------------------------------------------------------</div>   
            <StarRating/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <OtpEnter/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <TrafficLights/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <TrafficLightsWithRef/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <DropDownAccordin/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <TodoListIndexing/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <ToDoListWithoutIndex/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <ModalPopup/>
                
          </>
        )
      }  
      {
        tabs==='optimization' && (
          <>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <DebouncedSearch/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <DebouncedSearchWithRef/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <RefDebouncedSearch/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <ThrottleSearch/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <RateLimitingSearch/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <AbortControllerDemo/>
          </>
        )
      }
      {
        tabs==='useRefcomponents' && (
          <>
          <div>------------------------------------------------------------------------------------------------------------------</div>
            <FocusInput/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <CountRenders/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
            <UndoRedo/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <InfiniteScroll/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <ModalRefs/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
           <DragAndDropTodo/>
           <div>------------------------------------------------------------------------------------------------------------------</div>
           <StopWatch/>
           <div>------------------------------------------------------------------------------------------------------------------</div>
           <LightsRef/>

            <div>------------------------------------------------------------------------------------------------------------------</div>
            <DigitalClock/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <OTPEntry/>
          </>
        )
      }
    </div>
    
  )
}

export default App
