import { useRef, useState } from "react"

function DragAndDropTodo() {
    const [task , setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const dragRef = useRef(null)   //keeps track of index dragged no initial value preserve dragged index

    const [updateValue, setUpdateValue]= useState('');
    const [updateIndex, setUpdateIndex] = useState(null);

    const [focusedIndex, setFocusedIndex] = useState(null);


    const addTask = ()=>{
        if(!task.trim()) return;

        setTaskList([...taskList, task]);
        setTask('')  //clean up
    }

    const deleteTask = (removeIndex)=>{
        setTaskList(data=> data.filter((_, index)=> index !== removeIndex))
    }

    const updateTask = () => {
        setTaskList(data=> data.map((value, index)=>{
            return updateIndex=== index ? updateValue: value
        }))
        setUpdateIndex(null)
        setUpdateValue('')
    }

    const handleDragAndDrop = (dropIndex) =>{
        if(dragRef.current){
            dragRef.current.focus()
        }
        const copyTasks =  [...taskList];
        const dragged = copyTasks[dragRef.current];

        copyTasks.splice(dragRef.current,1);   //slice vs splice -- slice in pagination and splice for drag and drop
        copyTasks.splice(dropIndex,0, dragged);
        setTaskList(copyTasks)
    }

    // console.log(taskList)

  return (
    <>
        <div>DragAndDropTodo using useRef to store the drag index</div>

        <div style={{display:'flex', gap:'30px'}}>
            <input value={task} placeholder="Enter task...." onChange={(e)=>setTask(e.target.value)} />
            <button onClick={addTask}>+</button>
        </div>
        <div>
            {
                taskList.map((item, index)=>(
                    index===updateIndex ? (
                        <div style={{display:'flex', gap: '40px'}}>
                            <input value={updateValue} placeholder="Update task ..." onChange={e=>{setUpdateValue(e.target.value);}} />
                            <button onClick={updateTask}>Save</button>
                        </div>
                    ):(
                        <div key={index} draggable 
                            onDragStart={()=>(dragRef.current= index)}

                            tabIndex={0}
                            onFocus={()=> setFocusedIndex(index)}
                            onBlur={()=> setFocusedIndex(null)}

                            onDragOver={(e)=> e.preventDefault()}
                            onDrop={()=>handleDragAndDrop(index)}
                            style={{
                                padding:'10px',
                                marginBottom:'10px',
                                display: 'flex',
                                background: focusedIndex===index?  '#dbeafe':'#f1f1f1',
                                justifyContent: 'space-between',
                                cursor:'grab',
                                gap: '40px'
                            }}
                        >
                                <span>{item}</span>
                                <button onClick={()=>{setUpdateValue(item); setUpdateIndex(index)}}>Edit</button>           
                                <button onClick={()=>deleteTask(index)}>Delete</button>                 
                        </div>
                    )
                ))
            }
        </div>
    </>
  )
}

export default DragAndDropTodo;