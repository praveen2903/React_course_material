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
  "interview"
];


  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column', gap:'20px'}}>

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
        <div>-------------------------------------------------------------------------------------------------------------------</div>
        <Kubernetes/>
        </>
      )
    }
        {
      tabs==='jwt' && (
        <>
        <div>-------------------------------------------------------------------------------------------------------------------</div>
        <JwtTokens/>
        </>
      )
    }
    {
      tabs==='react-hooks' && (
        <>
        <div>-------------------------------------------------------------------------------------------------------------------</div>
        <ReactHookFormFullDemo/>
        </>
      )
    }
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
      tabs==='promises' && (
        <>
        <h2>asyncronous codes demo</h2>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <EventLoops/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <Callbacks/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <Promises/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <AsyncAwait/>
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
    {tabs==='modernInfiniteScroll' && (
      <>
        <div>------------------------------------------------------------------------------------------------------------------</div>
        <ModernInfiniteScrollWindow/>
      </>
    )}
        {tabs==='oldInfiniteScroll' && (
      <>
        <div>------------------------------------------------------------------------------------------------------------------</div>
        <OldInfiniteScrollWindow/>

      </>
    )}
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
            {/* <div>------------------------------------------------------------------------------------------------------------------</div>
            <ReactHooksInterviewNotes/> */}
            <div>------------------------------------------------------------------------------------------------------------------</div>
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
          <EventLoop/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <BindUsage/>
          <CallBindApply/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <DestructuringUsage/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <CurryingAndPrototype/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <SliceVsSpliceGuide/>
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
            <StarRating/>
          <div>------------------------------------------------------------------------------------------------------------------</div>   
          <DragBallWithHandlers/>
        <div>------------------------------------------------------------------------------------------------------------------</div>   
            <DragBallWithRef/>
            <div>------------------------------------------------------------------------------------------------------------------</div>   
            <GridLights/>
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
          
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <RefTypes/>
          <div>------------------------------------------------------------------------------------------------------------------</div>
          <StorePreviousValue/>
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
      {
        tabs==='sockets' && (
          <>
             <div>------------------------------------------------------------------------------------------------------------------</div>
             <SocketsDemo/>
          </>
        )
      }
    </div>
    
  )
}

export default App
