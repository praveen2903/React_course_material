
export default function JsCopy() {
    return (
        <>
        <h2>Javascript Copy</h2>
        <div>
            <div>
                <h3>shallow Copy</h3>
<p>Shallow copy means creating a new object that has the same properties as the original object. But if the object has nested objects, the nested objects are not copied, they are just referenced.</p>
            <code>
                <pre>{`
-----Old  Way-------
const obj = {
    name: "John",
    address: {city: "Hyderabad"}
}

const copy = Object.assign({}, obj);
copy.address.city = "Delhi";
console.log(obj.address.city); //Delhi
console.log(copy.address.city); //Delhi
//But in this case city get change (Not changed)


------New Way(Spread Operator)------
const obj = {
    name: "John",
    address: {city: "Hyderabad"}
}

const copy = {...obj};
copy.address.city = "Delhi";
console.log(obj.address.city); //Delhi
console.log(copy.address.city); //Delhi
//But in this case city get change (Not changed)
                `}</pre>
            </code>
            </div>
            <div>
            <h3>Deep Copy</h3>
            <code>
                <pre>{`
                
                `}</pre>
            </code>
            </div>
        </div>
        </>
    )
}