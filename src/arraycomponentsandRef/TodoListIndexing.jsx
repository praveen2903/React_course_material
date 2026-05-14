import { useState } from "react";

const TodoListIndexing= ()=>{
    const [inputText, setInputText]= useState('');
    const [taskList, setTaskList] = useState([]);

    const [updateValue, setUpdateValue] = useState('');
    const [updateIndex, setUpdateIndex] = useState(null); //can't be 0 since 0 is index right so null

    const [dragIndex, setDragIndex] = useState(null);

    const addTask= ()=>{
        setTaskList(taskList=>[...taskList, inputText]);
        setInputText('');
    }

    const removeTask = (removeIndex) =>{
        setTaskList(prev=> prev.filter(
            (res,index)=> index!==removeIndex
        ))
    }

    const updateTask = () => {
        setTaskList(prev=> prev.map((availableTask, index)=>{     
            //map/filter in jsx has () but here either single statement() or return {}

            // if(index===updateIndex){
            //     return updateValue;
            // }
            // return availableTask;
           return index===updateIndex ? updateValue: availableTask;
        }));
        setUpdateIndex(null)
        setUpdateValue('');
    }

    const handleDrop = (dropIndex)=>{
        if(dragIndex===null) return;

        const copy=[...taskList];
        const draggedItem = copy[dragIndex];  //this drag index can be preserved by ref dragref.current
        copy.splice(dragIndex,1);
        copy.splice(dropIndex,0,draggedItem);

        setTaskList(copy);
        setDragIndex(null);
    }

    return (
        <>
        <div>
            TODO List With Indexing -- best and light when using array and usestate try to use indexing only even with refs
        </div>
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
        <div style={{ display: 'flex', gap:'16px', marginBottom:"20px"}}>
            <input type="text" value={inputText} onChange={(e)=> setInputText(e.target.value)} />
            <button onClick={addTask} style={{padding:'8px', fontSize:'12px', borderRadius:'8px'}}>+</button>
        </div>
        <div>
            {
                taskList.map((availableTask, index)=>(  
                    // if map/filter/reduce/foreach use () as 1st div must be key right later like here at conditons use {}
                    <div key={index} style={{ display: 'flex', gap:'16px'}}>
                    {
                        updateIndex === index ? (
                     <>
                            <input type="text" value={updateValue} onChange={(e)=> setUpdateValue(e.target.value)} />                        
                            <button style={{padding:'8px', fontSize:'12px', borderRadius:'8px'}} onClick={updateTask}>update</button>
                    </>
                   ): (
                     <div key={index} draggable onDragStart={()=>setDragIndex(index)}
                     onDragOver={(e)=>e.preventDefault()}
                     onDrop={()=>handleDrop(index)}

                     style={{display:"flex", gap:'30px', cursor:'grab', background: dragIndex===index?  '#dbeafe':'#f1f1f1'}}
                     >
                            <p>{availableTask}</p>                            
                            <button style={{padding:'8px', fontSize:'12px', borderRadius:'8px'}} onClick={()=>{setUpdateIndex(index); setUpdateValue(availableTask)}}>Edit</button>
                            <button style={{padding:'8px', fontSize:'12px', borderRadius:'8px'}} onClick={()=>removeTask(index)}>delete</button>
                    </div>
                   )
                }
                    </div>
                   
                ))
            }
        </div>
        </>
    )

}
export default TodoListIndexing;