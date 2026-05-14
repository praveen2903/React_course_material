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
import ReactHooksInterviewNotes from './mistakesInHooks/ReactHooksInterviewNotes.jsx'
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
      <button onClick={() => setTabs("redux") }>Redux</button>
      <button onClick={() => setTabs('graphql')}>Graph QL</button>
      <button onClick={() => setTabs('typescript')}>TypeScript</button>
      <button onClick={() => setTabs("advanced")}>Advanced</button>
    </div>
    {
      tabs==='redux' && (
        <>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <ReduxToolkitCompleteDemo/>
        </>
      )
    }
    {
      tabs==='graphql' && (
        <>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <GraphQLDemoApp/>
        </>
      )
    }
    {
      tabs==='typescript' && (
        <>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <TypeScriptMasterCheatSheet/>
        </>
      )
    }
      {
        tabs==='advanced' && (
          <>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <DebounceUndoRedo/>
           <div>------------------------------------------------------------------------------------------------------------------</div>
           <ToolTip/>
           <div>------------------------------------------------------------------------------------------------------------------</div>
          <InfiniteScrollRef/>           
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <KeyboardEventListener/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <KanbanBoard/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <TicTacToe/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <GameMove/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <DraggingGameMove/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <MovingTicTacToe/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <ConnectFourGame/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <BirthYearHistogram/>
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
            <ReactQueryCompleteGuide/>         
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
          <SliceVsSpliceGuide/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <EventLoop/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <BindUsage/>
          <CallBindApply/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <CurryingAndPrototype/>
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
