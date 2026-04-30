import { useState } from "react";

const DropDownAccordin=()=>{
    const data= [
        {"title": "javascript", "Related_concepts":'React, angular,typescript'},
        {"title": "python", "Related_concepts":"Django, ml, data science, Flask, Pyspark"},
        {"title": "java", "Related_concepts": "Spring boot"}
    ]
    const [isOpenIndex, setIsOpenIndex] = useState(null);

    return (
        <>
        <div>Dropdown Accordin</div>
           <div style={{display:'flex', gap: '40px'}}>
             {
                data.map((item, index)=>(
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <div key={index} style={{display:'flex', alignItems:"center", justifyContent:'center', gap:"20px"}}>
                        <div>
                            {item.title}
                        </div>
                        {
                            isOpenIndex === index ? (
                                <>
                                 <button onClick={()=>setIsOpenIndex(null)}>^</button>
                                 </>
                            ): (
                                 <>
                                 <button onClick={()=>setIsOpenIndex(index)}>V</button>
                                </>
                            )
                        }
                    </div>
                    {
                            isOpenIndex === index && (
                                <>
                                    <div>{item.Related_concepts}</div>
                                </>
                                
                            )
                        }
                    </div>
                ))
            }
           </div>
        </>
    )
}
export default DropDownAccordin;