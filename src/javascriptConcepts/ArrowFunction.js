// Use arrow when:
// ✔ you want lexical this

// Avoid arrow when:
// ❌ defining object methods
// ❌ using constructor

// "I don’t have my own this → I borrow it" --from function in my scope arrow function
// "My this depends on how I am called" -- normal function


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
console.log(obj.getValue()); //10 -- arrow function borrows this so it gives value
//---------------------------------------------------------------------

const obj = {
  value: 10,
  get: () => {
    console.log(this.value);  //undefined
  }
};

obj.get();

const obj = {
  value: 10,
  get: function () {
    return function () {
      console.log(this.value); //undefined
      //this is lost when scope changed
    };
  }
};

obj.get()();

const obj = {
  value: 10,
  get() {
    return () => {
      console.log(this.value);   //10
      // as get inerits the value borrowed
    };
  }
};

obj.get()();


const obj = {
  value: 10,
  get: function () {
    function inner() {
      console.log(this.value);  //undefined
      //inner function has nothing to decide this.value without inner 10
    }
    inner();
  }
};

obj.get();

const obj = {
  value: 10,
  get: function () {
    const inner = () => {
      console.log(this.value);  //10
      //borrowed from inner
    };
    inner();
  }
};

//closure function example
function test() {
  let x = 10;

  return {
    get: () => console.log(x),
    set: (val) => x = val
  };
}

const t = test();
t.get(); // 10
t.set(20);
t.get(); // 20
//--------------------------------------------------------------------------------------------------------
function person() {
    this.age =0;
    setTimeout(function(){
        this.age++;
        console.log(this.age) //Nan  -- as this refers to window -- here setTimeout callback normal function loses this
    },1000)

    setTimeout(()=>{
        this.age++;
        console.log(this.age)  //1 -- as this refers to person -- here setTimeout callback arrow function preserve this
    })
}
new person();
//----------------------------------------------------------------------------------

const fn= () => {name:"sai"} //fn() -- undefined since block is defined need to return

const fn = () => ({name: "sai"}) //fn() -- {name:sai}

//---------------------------------------------------------------------------------------------

function bankAccount(){
  let balance =1000;
  return {
    deposit: (amt)=>{
      balance+=amt;
      console.log(balance, ": post deposit balance")
    },
    withdraw: (amt)=>{
      balance-=amt;
      console.log(balance, ": post withdraw balance")
    }
  }
}

const account=  new backAccount();
account.deposit(100);  //1100
account.withdraw(300);  //800
