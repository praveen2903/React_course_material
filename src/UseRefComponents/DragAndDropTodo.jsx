import { useRef, useState } from "react";

function DragAndDropTodo() {

    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const dragRef = useRef(null);

    const [updateValue, setUpdateValue] = useState('');
    const [updateIndex, setUpdateIndex] = useState(null);

    const [focusedIndex, setFocusedIndex] = useState(null);

    const addTask = () => {

        if (!task.trim()) return;

        setTaskList((prev) => [...prev, task]);

        setTask('');
    };

    const deleteTask = (removeIndex) => {

        setTaskList((prev) =>
            prev.filter((_, index) => index !== removeIndex)
        );
    };

    const updateTask = () => {

        if (!updateValue.trim()) return;

        setTaskList((prev) =>
            prev.map((value, index) =>
                updateIndex === index
                    ? updateValue
                    : value
            )
        );

        setUpdateIndex(null);
        setUpdateValue('');
    };

    const handleDragAndDrop = (dropIndex) => {
        //now the index is reffered as dragIndex
        const { index: dragIndex, element } = dragRef.current;

        if (dragIndex === dropIndex) return;

        const copyTasks = [...taskList];

        const dragged = copyTasks[dragIndex];

        copyTasks.splice(dragIndex, 1);

        //based on index value it needs to adjusted if without it then last index can't be dragged
        const adjustedDropIndex = dragIndex < dropIndex ? dropIndex - 1 : dropIndex;

        copyTasks.splice(adjustedDropIndex, 0, dragged);

        setTaskList(copyTasks);

        setTimeout(() => {
            element.focus();
        }, 0);
    };

    return (
        <>
            <h2>Drag And Drop Todo</h2>

            <div style={{ display: 'flex', gap: '20px' }}>

                <input value={task} placeholder="Enter task..." onChange={(e) => setTask(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTask();
                            setTask('');
                        }
                    }}
                />

                <button onClick={addTask}>Add</button>
            </div>

            <div style={{ marginTop: '20px' }}>

                {taskList.map((item, index) => (
                    index === updateIndex ? (

                        <div key={index} style={{ display: 'flex', gap: '20px', marginBottom: '10px'}}>
                            <input
                                value={updateValue}
                                placeholder="Update task..."
                                onChange={(e) =>
                                    setUpdateValue(e.target.value)
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        updateTask();
                                    }
                                }}
                            />

                            <button onClick={updateTask}>
                                Save
                            </button>
                        </div>

                    ) : (

                        <div key={index} draggable tabIndex={0}
                            onDragStart={(event) => {
                                dragRef.current = {
                                    index,
                                    element: event.currentTarget
                                };
                            }}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => handleDragAndDrop(index)}
                            onFocus={() =>setFocusedIndex(index)}
                            onBlur={() => setFocusedIndex(null)}
                            style={{
                                padding: '10px',
                                marginBottom: '10px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '20px',
                                cursor: 'grab',
                                background:focusedIndex === index ? '#dbeafe': '#f1f1f1'
                            }}
                        >

                            <span>{item}</span>
                            <button
                                onClick={() => {setUpdateValue(item);setUpdateIndex(index);}}>
                                Edit
                            </button>

                            <button
                                onClick={() =>
                                    deleteTask(index)
                                }
                            >
                                Delete
                            </button>

                        </div>
                    )
                ))}
            </div>
        </>
    );
}

export default DragAndDropTodo;