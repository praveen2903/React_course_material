import { useState } from 'react'
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
import PaginationAndSorting from './paginationandprogressbar/PaginationandSorting'
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

function App() {

  const [tabs, setTabs] = useState('pagination')


  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column', gap:'20px'}}>

      <div style={{display:'flex', gap:'24px', marginTop: '8px'}}>
        <button onClick={()=> setTabs("array")}>Array and useRef</button>
        <button onClick={()=> setTabs('pagination')}>Pagination</button>
        <button onClick={()=>setTabs('optimization')}>Optimization</button>
        <button onClick={()=>setTabs('useRefcomponents')}>UseRef</button>
      </div>
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
            <ThrottleSearch/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <RateLimitingSearch/>
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
