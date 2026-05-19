import { use, useEffect, useState } from "react";

export default function KeyboardEventListener() {
    const [open, setOpen] = useState(false);
    const modalRef = useRef();

    //onclick close modal
    useEffect(()=>{
        function handleClick(e){
            if(openModal && modalRef.current && !modalRef.current.contains(e.target)){
                setOpenModal(false)
            }
        }

        document.addEventListener("mousedown", handleClick); 
        return  () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [openModal])

    //keyboard event esc key -- so adding listener than attaching it to the dom events
    useEffect(()=>{
        const key= (event) => event.key === "Escape" && setOpen(false)

        window.addEventListener("keydown", key);
        return () => window.removeEventListener("keydown", key);
    })

    return (
        <>
        <h3> On click escape close modal like external event right not like input we could pass event from the dom
             so how to control it-- we use listeners</h3>

        <code>
            <pre>
{` -- onclick outside close modal and onclick esc key close the modal
--- you learn like why we use the addEventListeners?
Ans:- like when the event cannot be attached to the dom elements like here click outside and keydown esc cases can't be attached to modal so we use eventListeners

const modalRef = useRef();

//onclick close modal
useEffect(()=>{
    function handleClick(e){
        if(openModal && modalRef.current && !modalRef.current.contains(e.target)){
            setOpenModal(false)
        }
    }

    document.addEventListener("mousedown", handleClick); 
    return  () => {
        document.removeEventListener("mousedown", handleClick)
    }
}, [openModal])

//keyboard event esc key -- so adding listener than attaching it to the dom events
useEffect(()=>{
    const key= (event) => event.key === "Escape" && setOpen(false)

    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
})

return (
<>
    <button onClick={()=> setOpenModal(true)}>open</button>
    {openModal && (
        <>
            <div onClick ={()=>setOpenModal(false)}>close</div>
            <div ref={modalRef}>     // except on click in this area anywhere click modal closes
            <div>Modal contents</div>
            </div>
        </>
    )}
</>
)
`}
            </pre>
        </code>

        
        <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
        <button
            onClick={() => setOpen(true)}
            style={{
            padding: "10px 18px",
            border: "none",
            background: "#2563eb",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            }}
        >
            Open Modal
        </button>

        {open && (
            <div
            onClick={() => setOpen(false)}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.45)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <div ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                style={{
                width: "420px",
                background: "white",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
            >
                {/* Header */}
                <div
                style={{
                    padding: "16px 20px",
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                >
                <h2 style={{ margin: 0 }}>Edit Profile</h2>

                <button
                    onClick={() => setOpen(false)}
                    style={{
                    border: "none",
                    background: "transparent",
                    fontSize: "18px",
                    cursor: "pointer",
                    }}
                >
                    ✖
                </button>
                </div>

                {/* Body */}
                <div
                style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }}
                >
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter name"
                    style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    }}
                />

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    }}
                />
                </div>

                {/* Footer */}
                <div
                style={{
                    padding: "16px 20px",
                    borderTop: "1px solid #eee",
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "10px",
                }}
                >
                <button
                    onClick={() => setOpen(false)}
                    style={{
                    padding: "8px 14px",
                    border: "none",
                    background: "#ddd",
                    borderRadius: "8px",
                    cursor: "pointer",
                    }}
                >
                    Cancel
                </button>

                <button
                    style={{
                    padding: "8px 14px",
                    border: "none",
                    background: "#16a34a",
                    color: "white",
                    borderRadius: "8px",
                    cursor: "pointer",
                    }}
                >
                    Save
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
        </>
    )
}