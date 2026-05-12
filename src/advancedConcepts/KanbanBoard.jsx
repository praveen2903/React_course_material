import React, { useRef, useState } from 'react'

const KanbanBoard = () => {

    const [data, setData] = useState({
        todo: ["Task1", "Task 2"],
        doing: ['Task3', "Task 4", "Task 5"],
        done: ["Task 6"]
    })
    // const [dragItem, setDragItem] = useState(null);
    const dragRef = useRef(null); 
    //can do both but using ref is better as value doesn't persists across renders and give focus

    const [focusedIndex, setFocusedIndex] = useState(null);


    const handleDrop = (column) =>{
        const {fromColumn, index, element} = dragRef.current;

        const item= data[fromColumn][index];

        const newData = {...data};  //copy

        newData[fromColumn].splice(index,1);
        newData[column].push(item);

        setData(newData)

        setTimeout(() => {
            element?.focus();
        }, 0);
    }
  return (
    <>
        <h3>KanbanBoard -- drag and drop of todo list like one list to another</h3>
        <div style={{display:'flex', justifyContent:'space-between', gap: '40px'}}>


            {Object.keys(data).map((column)=>(  //iterating an object right 1st iterate keys

                <div key={column}
                    onDragOver={((e)=>e.preventDefault())}
                    onDrop={()=>handleDrop(column)}

                    style={{border:'1px solid', padding:'12px', width: 'fit-content'}}>
                        <h4>{column}</h4>
                        {
                            data[column].map((task,index)=>(   //now iterate the values of the key
                                
                                <div key={index} draggable tabIndex={0}
                                    // onDragStart={()=>setDragItem({fromColumn:column, index: index})}

                                    onDragStart={ (e) => dragRef.current = {fromColumn:column, index: index, element:e.currentTarget}}

                                    onFocus={()=> setFocusedIndex(index)}
                                    onBlur={() => setFocusedIndex(null)}
                                    style={{padding:'20px', margin:'12px',background: focusedIndex === index ? 'lightblue': '#ddd', cursor:'grab'}}>
                                        {task}
                                </div>
                            ))
                        }
                    </div>
                ))}
        </div>
    </>
  )
}

export default KanbanBoard