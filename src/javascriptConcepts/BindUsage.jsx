import React from 'react'

const BindUsage = () => {
    const obj= {
        a:10,
        b:20,
        sum(){return this?.a+ this?.b}
    }
    const res = obj.sum;
    console.log(res())   //NaN -- Not a number
    const res2 = obj.sum.bind(obj)
    console.log(res2()) //30
  return (
    <div>
        <h2>Bind usage</h2>
        <div style={{textAlign:'left'}}>
            <code>
                <pre>
{`const obj= {
    a:10,
    b:20,
    sum(){return this.a+ this.b}
}
const res = obj.sum
console.log(res())   //NaN -- Not a number
const res = obj.sum.bind(obj)
console.log(res()) //30`}
                </pre>
            </code>
        </div>
    </div>
  )
}

export default BindUsage