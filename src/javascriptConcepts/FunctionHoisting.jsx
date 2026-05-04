myFunction();  //2

var myFunction = () =>{
    console.log('1')
}

myFunction();  //1

function myFunction() {
    console.log('2')
}

myFunction(); // 1 --- function hositing last one called first and served