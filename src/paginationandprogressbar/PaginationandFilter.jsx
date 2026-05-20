import { useMemo, useState } from "react";

  //search by name filter by age
    const data= [
        {"id":1, "name":"praveen", "age": '22'},
        {"id":2, "name":"afzal", "age": '23'},
        {"id":3, "name":"lokesh", "age": '22'},
        {"id":4, "name":"hemanth", "age": '22'},
        {"id":5, "name":"praneeth", "age": '23'},
        {"id":6, "name":"sanket", "age": '32'},
        {"id":7, "name":"ravi", "age": '24'},
        {"id":8, "name":"akhil", "age": '22'},
        {"id":9, "name":"mathew", "age": '29'},
        {"id":10, "name":"tanner", "age": '28'},
        {"id":11, "name":"suresh", "age": '20'},
        {"id":12, "name":"rohit", "age": '27'},
        {"id":13, "name":"kohli", "age": '37'},
        {"id":14, "name":"aniket", "age": '32'},
        {"id":15, "name":"head", "age": '28'},
        {"id":16, "name":"salt", "age": '26'},
    ]

export default function PaginationAndFilter(){

    const [search, setSearch] = useState("");
    const [pageNumber, setPageNumber] = useState(1); //give current page

    const [pageSize, setPageSize]= useState(6);
    const [ageFilter,setAgeFilter]=useState("All");

    const filterData = useMemo(()=>{   //expensive opration stores cache instead of rerendering

//needs the states which are declared in same function here data is kept out due to it is constant only changes one must be in array of same scope

        return data.filter((item)=>{
            const matchSearch= item.name.toLowerCase().includes(search.toLowerCase());

            const matchAge= ageFilter === "All" ? true: Number(item.age) === Number(ageFilter); //filter right

            return matchSearch && matchAge;
        })
    },[search, ageFilter]);


    const totalPages= Math.ceil(filterData.length/ pageSize)
    const start = (pageNumber-1) * pageSize;
    const currentData= filterData.slice(start, start+ pageSize);

    return (
        <>
        <h2>Types of writing arrays in javascript</h2>
        <code style={{textAlign:'left', minWidth: '500px'}}>
  <pre>
{`1. Array.from()

// Numbers 1 → 5
const arr = Array.from({ length: 5 }, (_, i) => i + 1);

console.log(arr);
// [1, 2, 3, 4, 5]

// Array of objects
const users = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: \`User \${i + 1}\`
}));

console.log(users);


2. Spread + Array()

// Basic
const arr2 = [...Array(5)];

console.log(arr2);
// [undefined, undefined, undefined, undefined, undefined]

// With .map()
const nums = [...Array(5)].map((_, i) => i + 1);

console.log(nums);
// [1, 2, 3, 4, 5]


3. .fill()

// Fill same value
const arr3 = new Array(5).fill(0);

console.log(arr3);
// [0, 0, 0, 0, 0]

// Fill strings
const arr4 = new Array(3).fill("hello");

console.log(arr4);


4. .fill().map()

// Very common interview/frontend pattern
const arr5 = new Array(5)
  .fill(0)
  .map((_, i) => i + 1);

console.log(arr5);
// [1, 2, 3, 4, 5]

// Objects
const products = new Array(3)
  .fill(0)
  .map((_, i) => ({
    id: i + 1
  }));

console.log(products);


5. Using loops

// for
const arr6 = [];

for (let i = 1; i <= 5; i++) {
  arr6.push(i);
}

console.log(arr6);


6. Using forEach()

const arr7 = [];

[1, 2, 3, 4].forEach((x) => {
  arr7.push(x * 2);
});

console.log(arr7);
// [2, 4, 6, 8]


7. Using .keys()

// Generate indexes
const arr8 = [...Array(5).keys()];

console.log(arr8);
// [0, 1, 2, 3, 4]

// Start from 1
const arr9 = [...Array(5).keys()].map(i => i + 1);

console.log(arr9);
// [1, 2, 3, 4, 5]


8. Using .entries()

const arr10 = [...Array(5).entries()];

console.log(arr10);
// [[0, undefined], [1, undefined], ...]


9. Creating nested arrays

// 2D array / matrix
const matrix = Array.from({ length: 3 }, () =>
  Array(3).fill(0)
);

console.log(matrix);


// Important mistake to avoid

// ❌ Wrong
const wrong = Array(3).fill([]);

// All rows share same reference


// ✅ Correct
const correct = Array.from({ length: 3 }, () => []);


10. Convert string to array

const arr11 = Array.from("hello");

console.log(arr11);
// ['h', 'e', 'l', 'l', 'o']
`}
  </pre>
</code>
        <div>Pagination and Filtering Demo</div>
       <div style={{display: 'flex', gap: '20px'}}>
         <input type="text" placeholder="Search name ...." onChange={(e)=>{setSearch(e.target.value)}} />
        <select value={ageFilter} onChange={(e)=>setAgeFilter(e.target.value)}>
            <option>All</option>
            <option value='22'>22</option>
            <option value='23'>23</option>
            <option value='24'>24</option>
            <option value='32'>32</option>
            <option value='37'>37</option>
            <option value='20'>20</option>
        </select>
       </div>

        <table>
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
            </thead>
            <tbody>
                {
                    currentData.length>0 ?(
                        <>
                        {
                            currentData.map((item)=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                </tr>
                            ))
                        }
                        </>
                    ): (
                        <>
                        <td colSpan='3'>DATA NOT Found</td>
                        </>
                    )
                }
            </tbody>
        </table>

        <div style={{display:'flex', gap: '20px'}}>
            
        <p>page {pageNumber} of {totalPages ?? 1}</p>
        <button disabled={pageNumber===1} onClick={()=> setPageNumber(pageNumber-1)}>Prev</button>
        {[...Array(totalPages)].map((_, index)=>(
            <button key={index} onClick={()=>setPageNumber(index+1)} 
            style={{ margin:'0 5px', background: pageNumber == index+1 ?"lightblue": ""}}>{index+1}</button>
        ))}
        <button disabled={pageNumber===totalPages} onClick={()=> setPageNumber(pageNumber+1)}>Next</button>
        
        <select value={pageSize} onChange={(e)=>setPageSize(e.target.value)}>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
        </select>
        </div>
        
        </>
        
    )

}