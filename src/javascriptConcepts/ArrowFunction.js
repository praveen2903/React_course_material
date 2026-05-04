const  obj = {
    value: 10,
    getValue: () => console.log(this.value),
    greet: function() {
        console.log(this.value)
    }
}
console.log(obj.getValue()); // undefined
console.log(obj.greet()) //10


const obj = {
    value: 10,
    getValue: function() {
        const fn = () =>{ console.log(this.value)}
        fn();
    }
}
console.log(obj.getValue())

function person() {
    this.age =0;
    setTimeout(function(){
        this.age++;
        console.log(this.age) //Nan 
    },1000)

    setTimeout(()=>{
        this.age++;
        console.log(this.age)  //1
    })
}
new person();


const fn= () => {name:"sai"} //fn() -- undefined since block is defined need to return

const fn = () => ({name: "sai"}) //fn() -- {name:sai}