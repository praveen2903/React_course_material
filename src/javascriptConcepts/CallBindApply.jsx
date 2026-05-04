
const CallBindApply = () => {
    const p1= {'name': 'praveen'};
    const p2= {'name': 'rokkam'};

    const func = (city, country)=>{
        console.log(`Hi ${this.name} from ${city}, ${country}`)
    }

    //bind-- doesn't run immediately, creates a new function both args and the sends it --reusable
    const employeeClick= func.bind(p1, 'hyderabad')

    const examples = () =>{
        func.call(p1, "hyderabad", "india"); //calls immediately, sends argument one by one
        func.apply(p1, ["hyderabad", "india"]);  //calls immediately, sends arguments at atime in array

        const extraFunc = func.bind(p2, 'delhi')
        console.log('bind waits for the extra argument...')
        extraFunc('India')
    }
  return (
    <>
    <div>Call, Bind and Apply check in console</div>
    <button onClick={()=>{employeeClick('India'); examples()}}> click</button>
    </>
  )
}

export default CallBindApply