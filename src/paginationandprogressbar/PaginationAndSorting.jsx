import { useMemo, useState } from "react"

export default function PaginationAndSorting(){

    const data= Array.from({length: 30}, (_, index)=>({
        id: index+1,
        name: `User ${index+1}`,
        age: Math.floor(Math.random()*11)+20  // (0-9)+20 0-9 might be real numbers so floor
    }))

    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const [filterAge, setFilterAge]= useState('All');
    const [search, setSearch] = useState('');

    const [globalDataSort, setGlobalDataSort] = useState('None');
    const [pageDataSort, setPageDataSort] = useState('None');

    const SortToggleOrder=(prev)=>{
        if(prev==="None") return "Asc";
        if(prev==="Asc") return "Dsc";
        return "None"
    }

    const filterData= useMemo(()=>{     //----- always mind {} requires a return 
        return data.filter((item)=>{
            const matchSearch= item.name.toLowerCase().includes(search.toLowerCase())
            const matchAge = filterAge==="All"? true: Number(item.age)=== Number(filterAge);
            return matchSearch && matchAge;
        })

    }, [data, search, filterAge])

       //global Sort
    filterData.sort((a,b)=>globalDataSort ==="None"? a.id-b.id :globalDataSort==="Asc"? a.age-b.age: b.age-a.age);
    


    const totalPages= Math.ceil(filterData.length/pageSize);  //---1 error i kept -1 unnecessarily
    const firstPage = (pageNumber-1) * pageSize;               //---2 didn't keep pageNumber although it is index
    let splitData = filterData.slice(firstPage, firstPage+pageSize);   
    //currentData = filterData.slicee(startPage, startPage+pagesize) --(start =0, slice till 5) like wise array [[0,4], [5,9]....]    

    //Page Sort
    splitData=[...splitData].sort((a,b)=> (pageDataSort ==="None")? a.id-b.id: pageDataSort==='Asc'? a.age-b.age: b.age-a.age)

    return (
        <>
            <div>Pagination and sorting ** too important</div>
            <div style={{display: 'flex', gap:'20px'}}>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <select value={filterAge} onChange={(e)=>setFilterAge(e.target.value)}>
                    <option value="All">All</option>
                    <option value="19">19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                </select>
                <button onClick={()=>setGlobalDataSort(SortToggleOrder)}>Sorted in {globalDataSort} {globalDataSort==='None'?'>': globalDataSort==="Asc"? 'v':'^'}</button>
            </div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>AGE {' '}
                        <button onClick={()=> setPageDataSort(SortToggleOrder)}>pageSort in {pageDataSort} {pageDataSort==='None'?'>': pageDataSort==="Asc"? 'v':'^'}</button>
                    </th>
                </thead>
                <tbody>
                    {
                        splitData?.length>0 ?(
                            <>
                            {
                                // splitData.map((item,index)=>{  --- does give data since {} need a return() or use () directly as single td
                                //     <tr id={index}>
                                //         <td>{item.id}</td>
                                //         <td>{item.name}</td>
                                //         <td>{item.age}</td>
                                //     </tr>
                                // })

                                splitData.map((item,index)=>(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                    </tr>
                                ))
                            }
                            </>
                        ):
                        (
                            <td colspan={3}>No Data Found</td>
                        )
                    }
                </tbody>
            </table>
            <div style={{display: 'flex', gap:'24px'}}>
                <p>{pageNumber} of {totalPages}</p>
                <button onClick={()=>setPageNumber(page=> page-1)} disabled={pageNumber===1}>Prev</button>
                {
                    [...Array(totalPages)].map((_,index)=>(
                        <button onClick={()=> setPageNumber(index+1)} 
                        style={{backgroundColor: pageNumber===index+1? 'lightblue': "gray", padding:'4px', border:'1px solid'}}>{index+1}</button>
                    ))
                }
                <button onClick={()=>setPageNumber(page=> page+1)} disabled={pageNumber===totalPages}>Next</button>
                <select value={pageSize} onChange={(e)=>setPageSize(e.target.value)}>
                    {
                        [5,10,15,20].map((item,index)=>(  // --here too given {} but comes if we keep return
                            <option key={index} value={item}>{item}</option>
                        ))
                    }

                    {/* <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option> */}
                </select>
            </div>
            
        </>
    )

}