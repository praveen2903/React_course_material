import React from 'react'

const BirthYearHistogram = () => {
    const data = [1998, 1999, 2000, 2001, 2000, 1999, 1998];
    const count = data.reduce((acc, y)=>{
        acc[y] = (acc[y] ||0)+1;
        return acc;
    }, {});
    
    return (
    <div>
        <h3>BirthYearHistogram -- Reduce usage</h3>
        {
            Object.entries(count).map(([year, total])=>(
                <div key={year} style={{marginBottom: '10px'}}>
                    <span>{year}</span>
                    <div style={{
                        display: 'inline-block', background: 'blue', width: `${total*40}px`, height:'20px', marginLeft: '10px'
                    }}/>
                    {total}
                </div>
            ))
        }
    </div>
  )
}

export default BirthYearHistogram