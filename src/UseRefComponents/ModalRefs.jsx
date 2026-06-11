import { useEffect, useRef, useState } from "react"

const ModalRefs = () => {
    const [openModal, setOpenModal] = useState(false);
    const modalRef = useRef(null);

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
    }, [openModal]);

    useEffect(()=>{
        const handleKey = (e)=> (e.key ==='Escape') && setOpenModal(false);

        document.addEventListener('keydown', handleKey)
        return () => {document.removeEventListener("keydown", handleKey)};
    }, [openModal]);


  return (
    <>
    <div>Close modal when clicked outside and escape</div>
    <code><pre>
{`const [openModal, setOpenModal] = useState(false);
const modalRef = useRef();

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
}, [openModal]);

useEffect(()=>{
    const handleKey = (e)=> (e.key ==='Escape') && setOpenModal(false);

    document.addEventListener('keydown', handleKey)
    return () => {document.removeEventListener("keydown", handleKey)};
}, [openModal]);

return(
<>
    <button onClick={()=> setOpenModal(true)}> Open Modal</button>

    {
        openModal && (
            <div style={{position:'fixed', top:0, left:0, right:0, bottom:0, display:'flex', justifyContent:'center', alignItems: 'center'}}>
                <div ref={modalRef} style={{background: '#f7e3e3', opacity: '0.95', padding:'30px'}}>
                    <h3> hello modal</h3>
                    <p> click outside to close modal</p>
                </div>

            </div>
        )
    }
</>
)`}        
        
</pre></code>
    <button onClick={()=> setOpenModal(true)}> Open Modal</button>

    {
        openModal && (
            <div style={{position:'fixed', top:0, left:0, right:0, bottom:0, display:'flex', justifyContent:'center', alignItems: 'center'}}>
                <div ref={modalRef} style={{background: '#f7e3e3', opacity: '0.95', padding:'30px'}}>
                    <h3> hello modal</h3>
                    <p> click outside to close modal</p>
                </div>

            </div>
        )
    }

    </>
  )
}

export default ModalRefs