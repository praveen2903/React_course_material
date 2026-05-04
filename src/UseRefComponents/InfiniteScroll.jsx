import { useRef, useState } from "react"

const InfiniteScroll = () => {
    const [items, setItems] = useState(Array.from({length:20}, (_,index)=>`Item ${index+1}`));
    
    const boxRef= useRef();

    const handleScroll = () => {
        const boxPosition= boxRef.current;

        const scrollTop= boxPosition.scrollTop;
        const clientHeight = boxPosition.clientHeight;
        const scrollHeight = boxPosition.scrollHeight;

        if(scrollTop+ clientHeight >= scrollHeight-5){
            loadMore();
        }
    }

    const loadMore = () =>{
        setItems((prev)=>[
            ...prev,
            ...Array.from({length:10}, (_,index)=>{
                return `Item ${prev.length+index+1}`
            })
        ])
    }


    return (
    <>
        <div>Infinite Scroll problem using Ref use properties like (scrollTop, clientHeight, scrollHeight)</div>
        <div ref={boxRef} onScroll={handleScroll} style={{height:'200px', width:'200px', overflowY: 'auto', padding:'10px'}}>
            {items.map((data, index)=>(
                <div key={index} style={{padding:'12px', marginBottom: '12px'}}>{data}</div>
            ))}
        </div>
    </>
  )
}

export default InfiniteScroll