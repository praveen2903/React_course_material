import React from 'react'

const ArrayFillTrap = () => {
  return (
    <div>
        <h2>Array usage</h2>
        <div style={{textAlign:'left'}}>
            <code>
                <pre>
{`
1. Array.from method
const [otpBox, setOtpBox]  = Array.from(6).fill(''); ['','','','','','']

const [tableData, setTableData] = Array.from({length:20}, (_, i)=> ({
    index: i+1,
    item: 'item ${i+1}'
}))

const arr = new Array(3).fill([]);

arr[0].push (1)
console.log(arr) //[[1], [1], [1]] if used flatmap and pushed then it gives fine`}
                </pre>
            </code>
        </div>
    </div>
  )
}

export default ArrayFillTrap