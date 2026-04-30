import { useMemo, useState } from "react"

 export default function DynamicArrayPagination() {
    const data= Array.from({length:20}, (arr, index)=>({    //array of objects so {} in map like
        id: index+1,
        name: `User ${index}`,
        age: Math.floor(Math.random()*11)+20,
    }))

    // console.log(data)

    const [pageNumber, setPageNumber]= useState(1);
    const [filterAge, setFilterAge] = useState('All');

    const [pageSize, setPageSize] = useState(5);

    const [search, setSearch] = useState('');

    const filterData= useMemo(()=>{
       return data.filter((item)=>{
            const matchSearch= item.name.toLowerCase().includes(search.toLowerCase());
            const matchAge = filterAge ==="All"? true : Number(item.age)===Number(filterAge);
            return matchSearch && matchAge;
        })

    }, [data, filterAge, search])

    const sortData= ()=> filterData.sort((a,b)=> a.age-b.age);

    //total pages 1st then first no.of contents in 1st page and split data

    const totalPages = Math.ceil(filterData.length/ pageSize);
    const startPage= (pageNumber-1) * pageSize;                                 //0, 5,10 like wise
    const currentData = filterData.slice(startPage, startPage + pageSize);      //split the data based on start into equal halves

    //currentData = filterData.slicee(startPage, startPage+pagesize) --(start =0, slice till 5) like wise array [[0,4], [5,9]....]    
    return (
        <>
            <div>Dynamic Array and Pagination *** </div>
            <div style={{display:'flex', gap:'20px'}}>
                <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                <button onClick={sortData}>Sort By Age</button>
                <select value={filterAge} onChange={(e)=>setFilterAge(e.target.value)}>
                    <option value="All">ALL</option>  
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                    <option value='27'>27</option>
                    <option value='28'>28</option>
                    <option value='29'>29</option>
                    <option value='30'>30</option>
                </select>
            </div>
            <table>
                <thead>
                    <th>id</th>
                    <th>Name</th>
                    <th>age</th>
                </thead>
                <tbody>
                    {
                    currentData.length>0 ?(
                        <>
                        {
                            // currentData.map((item, index)=>{ ------ error if since {} and no return
                            //     <tr key={index}>
                            //         <td>{item.id}</td>
                            //         <td>{item.name}</td>
                            //         <td>{item.age}</td>
                            //     </tr>
                            // })
                            currentData.map((item, index)=>(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                </tr>
                            ))
                        }
                        </>
                    ):(
                        <td colspan={3}>No Data Found</td>
                    )
                }
                </tbody>
            </table>
            <div style={{display:'flex', gap:'20px'}}>
                <p>{pageNumber} in {totalPages}</p>
                <button onClick={()=> setPageNumber(page=> page-1)} disabled={pageNumber===1}>Prev</button>
                {[...Array(totalPages)].map((_, index)=>{
                    <button key={index} onClick={()=> setPageNumber(index+1)}
                    style={{ margin:'0 5px', background: pageNumber == index+1 ?"lightblue": ""}}>{index+1}</button>
                })}
                <button onClick={()=> setPageNumber(page=> page+1)} disabled={pageNumber===totalPages}>next</button>

                <div>
                    <select value={pageSize} onChange={(e)=> setPageSize(e.target.value)}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                </div>
            </div>
        </>
    )

 }