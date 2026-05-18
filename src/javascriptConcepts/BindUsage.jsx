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
    <div style={{textAlign:'left'}}>
        <span style={{fontSize: '20px'}}>Bind usage-- bind is stricter and helps to store the values even if the function assigned to other variable too</span>
        <div>
            <h2>Bind-- the function is given to other reference so the sum is lost so we need to bind the object to it</h2>
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

            <h2>Bind -- locking the value with it example</h2>
            <code>
                <pre>
{`const user1 = {name: 'A'};
const user2 = {name: 'B'};
const user3 = {name: 'C'};

function show(){
  console.log(this.name)
}
show.call(user1)

const fn = show.bind(user2)

const bindfn = show.bind(user1).bind(user2);

fn();
bindfn();

bindfn.call(user3)

output: A B A A  -- since the user1 A is permanently locked/binded with bindfn so no removal for it with other binds`}
                </pre>
            </code>
                        <h2>Bind-- if need to change create a new object with new </h2>
            <code>
                <pre>
{`function Person(name) {
  this.name = name;
}
const Bound = Person.bind({name: 'tom'});

const p = new Bound({name:'sam'});
console.log(p.name)

output: sam
`}
                </pre>
            </code>
        </div>
    </div>
  )
}

export default BindUsage