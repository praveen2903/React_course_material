const TemporalDeadZone = () => {

    const examplesVariable = () =>{
        console.log(a); 
        var a= 10;    // gives undefined since var can hoist -- function scoped, allows reassigned and reinitialized

        try{
            console.log(b)
            console.log(c)
        } catch (err) {
            console.err("Reference Error occured")
        }
        let b=10;    //Gives Reference error-- Temporal Dead Zone, block scoped, allows reassinged but not reinitialization
        const c=30;   //Gives Reference error-- Temporal Dead Zone, block scoped, No reassinged and no reinitialization

    }
  return (
    <>
    <code>
        <pre>
            {`console.log(a); //undefined
var a= 10;    // gives undefined since var can hoist -- function scoped, allows reassigned and reinitialized

try{
    console.log(b)
    console.log(c)
} catch (err) {
    console.err("Reference Error occured")
}
let b=10;    //Gives Reference error-- Temporal Dead Zone, block scoped, allows reassinged but not reinitialization
const c=30;   //Gives Reference error-- Temporal Dead Zone, block scoped, No reassinged and no reinitialization

---------------------------------------
Function Hoisting:-
------------------
myFunction();  //2

var myFunction = () =>{
    console.log('1')
}

myFunction();  //1

function myFunction() {
    console.log('2')
}

myFunction(); `}
        </pre>
    </code>
        <div>TemporalDeadZone--variables</div>
        <button onClick={examplesVariable}>click and check console</button>
    </>
  )
}

export default TemporalDeadZone