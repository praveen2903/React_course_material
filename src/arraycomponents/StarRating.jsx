//Note: map, filter, foreach, reduce work on arrays here they mention 5 stars although variable take it as array
//Array.from({length: no.of circles}).map((index)) --like grid problems or any


// check {} and () differences
import { useState } from "react";

const StarRating = () => {

    //Dynamic arrray
    const totalCircles= Array.from({length:5}, (_,i)=> i+1);

    // console.log(totalCircles);

    const totalDynamic= [...Array(5).keys()].map(i=>i+1);
    // console.log(totalDynamic);

    <style>
        {`
        span:hover{
            "background": 'blue';
        }
        `
    }
    </style>
    const [starSelected, setStarSelected] = useState(0);

    return (
        <>
        <div> Star Rating </div>
        <div>
            {
            [1,2,3,4,5].map((num)=>(
                <span key={num} onClick={()=>setStarSelected(num)}
                    style={{
                        fontSize: '80px',
                        cursor:'pointer',
                        borderRadius:'50%',
                        color: num<=starSelected ? 'gold': 'gray', //the num values less than selected stars get the color
                }}
                >.</span>
            ))
        }
        </div>
        </>
    )

}
export default StarRating;