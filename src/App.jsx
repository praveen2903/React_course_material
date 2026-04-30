import { useState } from 'react'
import DropDownAccordin from './arraycomponents/DropDownAccordin'
import ModalPopup from './arraycomponents/ModalPopup'
import OtpEnter from './arraycomponents/OtpEnter'
import StarRating from './arraycomponents/StarRating'
import TodoListIndexing from './arraycomponents/TodoListIndexing'
import ToDoListWithoutIndex from './arraycomponents/ToDoListWithoutIndexCauseissueWhileUpdate'
import PaginationAndFilter from './paginationandprogressbar/PaginationandFilter'
import ProgressBar from './paginationandprogressbar/Progressbar'
import SequentialProgressBarsWithoutRef from './paginationandprogressbar/SequentialProgressBarsWithoutRef'
import SequentialProgressBarRef from './paginationandprogressbar/SequentialProgressBarRef'
import SequentialProgressBarsWithState from './paginationandprogressbar/SequentialProgressBarsWithState'
import ConcurrentProgressBars from './paginationandprogressbar/ConcurrentProgressBars'
import DynamicArrayPagination from './paginationandprogressbar/DynamicArrayPagination'
import PaginationAndSorting from './paginationandprogressbar/PaginationandSorting'
import DebouncedSearch from './optimisatonConcepts/DeboundedSearch'
import ThrottleSearch from './optimisatonConcepts/ThrottleSearch'
import RateLimitingSearch from './optimisatonConcepts/RateLimitingSearch'

function App() {

  const [tabs, setTabs] = useState('pagination')


  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column', gap:'20px'}}>

      <div style={{display:'flex', gap:'24px', marginTop: '8px'}}>
        <button onClick={()=> setTabs("array")}>Array</button>
        <button onClick={()=> setTabs('pagination')}>Pagination</button>
        <button onClick={()=>setTabs('optimization')}>Optimization</button>
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
            <StarRating/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <OtpEnter/>
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
            <ThrottleSearch/>
            <div>------------------------------------------------------------------------------------------------------------------</div>
            <RateLimitingSearch/>
          </>
        )
      }
    </div>
    
  )
}

export default App
