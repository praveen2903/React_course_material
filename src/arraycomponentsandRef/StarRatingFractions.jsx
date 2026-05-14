import React, { useState } from 'react'

const StarRatingFractions = () => {
    const [rating, setRating] = useState(0);
    const totalStars= 5;
    const [hoverValue, setHoverValue] = useState(0);


    const calculateValue =(event, index) =>{
        const rect = event.currentTarget.getBoundingClientRect(); //give position of element in dom like one circle of index

        const widthOccupied= event.clientX- rect.left;  
        //get event.clientX gives mouse pointer position and how much it is distant from left

        const percentOccupied= widthOccupied / rect.width;  //widthoccupied/total gives percentage
        //total like 2.5/2.6 fixing decimal point to 1
        
        return Number((index+percentOccupied).toFixed(1))
    }

    const handleClick=(index, event) =>{
        const value = calculateValue(event, index);
        setRating(value) //0.1-5 so no +1  set the hovered index to the rating

    }

    const handleMouseMove = (index, event)=>{
        const value= calculateValue(event,index);
        setHoverValue(value)
    }

    const handleMouseLeave =() =>{
        setHoverValue(null);
    }

    const getFill = (index) =>{
        const difference = rating- index;
        if(difference>=1) return '100%'
        if(difference>0) return `${difference * 100}%`
        return '0%'
    }


    return (
    <>
    <div>StarRatingFractions</div>
<code style={{textAlign:'left'}}>
<pre>
{`OnMouseMove -- calculate the targeted circle area and how much width occupied
const calculateValue =(event, index) =>{
    const rect = event.currentTarget.getBoundingClientRect();
    const widthOccupied= event.clientX- rect.left;  
    const percentOccupied= widthOccupied / rect.width;
    return Number((index+percentOccupied).toFixed(1))
}`}
</pre>
</code>
    <div>{rating}</div>
    <div>{hoverValue}</div>
    <div style={{display:'flex', gap:'20px'}} onMouseLeave={handleMouseLeave}>
        {/* {
        [...Array(totalStars)].map((_,index)=>(
            <div onClick={()=>setRating(index+1)}
            style={{
                background: rating<=index? 'lightgray':'gold',
                height: '60px',
                width: '60px',
                borderRadius:'50%',
                cursor: 'pointer'
            }}></div>
        ))
    } */}
    {
        [...Array(totalStars)].map((_,index)=>(
            <div key={index} onClick={(event)=>handleClick(index, event)}
                onMouseMove={(event)=>handleMouseMove(index,event)}
                style={{
                    position:'relative',
                    borderRadius: '50%',
                    width: '50px',
                    height:'50px',
                    cursor: 'pointer'
                }}
            >

                {/* base circle */}
                <div style={{width: '100%', height:'100%', borderRadius:'50%', background:'lightgray'}}></div>

                {/* circle to be filled */}
                <div style={{
                    position:'absolute',
                    top:0,
                    left:0,
                    height: '100%',
                    width: getFill(index),
                    overflow:'hidden'
                }}>
                    <div style={{width: '50px', height:'50px', borderRadius:'50%', background:'gold'}}></div>
                </div>
            </div>
        ))
    }
    </div>
    </>
  )
}

export default StarRatingFractions