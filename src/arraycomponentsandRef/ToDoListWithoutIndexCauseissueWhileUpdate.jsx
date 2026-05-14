import { useState } from "react";

const ToDoListWithoutIndex= ()=>{
    const [task, setTask]= useState("");
    const [taskList, setTaskList] = useState([]);
    const [isUpdate, setIsUpdate] = useState(null);
    const [updateValue, setUpdateValue] = useState('');

    const addTask = ()=>{
        setTaskList(prev=>[...prev, task])  // if needed => () -recommended
        // setTaskList([...taskList,task])-- works 
        setTask('')
    }

    const removeTask = (removeTask)=>{
        setTaskList(prev=>prev?.filter((availTasks)=>availTasks !== removeTask)) //-- () as single line --recommended
        // setTaskList(taskList?.filter(availTasks=> availTasks !== task)) -works but not recommended
    }

    const updateTask = (existingValue,updateValue ) =>{
        setTaskList(prev=>
            prev.map((res)=>{
                if(res===existingValue){
                    return updateValue;
                }
                return res;
            })
        )
    }

    return (
        <div>
            <div>TO DO list</div>
<code style={{textAlign:'left'}}>
<pre>
{`
Splice(startIndex, deletecount, ...items)-- startIndex from where need to start removal, deletecount-- no.of items to delete
...items-- items list to delete in arguments 0 to any can be there optional

Add todo
setItem([...items, newItem])
delete 
SetItem(prev=> prev.filter(res=> res.id !== deleteId))
update
setItem(prev=> prev.map(res=> res.id===updatedId? updatedValue: res))

Drag & drop explained ref need to attached to each of the dom and share index and element if focus needed
const handleDrop = (dropIndex)=>{
    if(dragRef.current===null) return;
    const {dragIndex, element} = dragRef.current   // dragIndex = 2  & dropIndex = 3
    const copy=[...taskList];                   // a   b   c  d   e  f

    const draggedItem = copy[dragIndex];        // c
    copy.splice(dragIndex,1);                   // a   b   d   e   f
    copy.splice(dropIndex,0,draggedItem);       // a   b   d   c   f   e

    setTaskList(copy);
    setDragIndex(null);
}`}
</pre>
</code>

            <div style={{ display: 'flex', gap:'16px', marginBottom:"20px", alignItems:'center', justifyContent:'center'}}>
                <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>

                {/* both are correct but when no argument better to use onClick=>{addTask} */}
                {/* <button onClick={()=>addTask()} style={{padding:'8px', borderRadius:'12px', fontSize:'12px'}}>+</button> */}
                
                <button onClick={addTask} style={{padding:'8px', borderRadius:'12px', fontSize:'12px'}}>+</button>
            </div>
            {
                taskList?.map((listTask, index)=>(
                    <div key={index} style={{ display: 'flex', gap:'16px'}}>
                        {
                            isUpdate ?(
                                <>
                                    <input type="text" value={listTask} onChange={(e)=> setUpdateValue(e.target.value)}/>
                                    <button onClick={()=>updateTask(listTask, updateValue)} style={{padding:'8px', borderRadius:'12px', fontSize:'12px'}}>update</button>
                                </>
                            ):(
                            <>
                                <p style={{fontSize:'16px'}}>{listTask}</p>
                                <button onClick={()=>setIsUpdate(true)} style={{padding:'8px', borderRadius:'12px', fontSize:'12px'}}>Edit</button>
                            </>
                                
                            )
                        }
                        <button onClick={()=>removeTask(listTask)} style={{padding:'8px', borderRadius:'12px', fontSize:'12px'}}>-</button>
                    </div>
                ))
            }
        </div>
    )
}
export default ToDoListWithoutIndex;