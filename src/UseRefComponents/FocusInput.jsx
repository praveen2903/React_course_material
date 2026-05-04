import { useEffect, useRef } from 'react'

const FocusInput = () => {

    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus()
    },[])

  return (
    <>
    <div>FocusInput- basic</div>
    <input ref={inputRef} placeholder='enter data.....' style={{padding:'10px', width:'250px'}}
    onFocus={(e)=>{
        e.target.style.border= '1px solid #0c5376e7';
        e.target.style.boxShadow = '0 0 10px #97ceeae7'
    }}
    onBlur={(e)=>{
        e.target.style.boxShadow = '0 0 10px #ccc';
        e.target.style.border= 'none';
    }}/>
    </>
  )
}

export default FocusInput