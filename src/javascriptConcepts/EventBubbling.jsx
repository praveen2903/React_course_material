import React from 'react'

const EventBubbling = () => {

    const handleListClick = (e) =>{
        if(e.target.tagName=== "LI") {
            alert("clicked: "+ e.target.innerText)
        }
    }

    const grandParent = () =>{
        console.log("grant parent clicked")
    }
    const parent = () =>{
        console.log("parent Clicked") //grand parent and parent clicked both comes in console
    }
    const child = (event) => {
        event.stopPropagation();   //stops the propagation of parent and performs only this event like when its clicked only child clicked
        console.log("child clicked")
    }


    // const parent = document.getElementById("parent");
    // parent.addEventListener("click",()=>{console.log("parent clicked")})  //same 

  return (
    <>
    <div>EventBubbling</div>
    <div id='parent' onClick={grandParent} style={{
        padding: '40px',
        background: 'lightblue',
        textAlign: 'center',
        cursor: 'pointer'
    }}>
        Grand Parent
        <div onClick={parent} style={{ padding:'40px', background: 'lightgreen', textAlign: 'center', cursor: 'pointer'}}>
            parent
            <div onClick={(event)=>child(event)} style={{padding:'40px', background: 'lightgray', textAlign: 'center', cursor: 'pointer'}}>
                child
            </div>
        </div>
    </div>
    </>
  )
}

export default EventBubbling