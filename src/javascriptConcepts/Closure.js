//Closure function-- A function that remembers variables from its outer scope even after that scope is gone
function greet(name) {
  setTimeout(() => {
    console.log("Hello " + name);  // name remebered even after scope is gone
  }, 1000);
}

greet("Praveen");  //hello praveen
// ------------------------------------------------------------------------------------------

function createCounter() {
  let count = 0; // private variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//----------------------------------------------------------------------------

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// ❌ prints: 4, 4, 4

for( var i=1; i<=3; i++) {
     (function(j){
        setTimeout(()=>console.log(j), 1000);
    })(i);
}

// prints 1,2,3
//-----------------------------------------------------------------------------

//same but without closure without closure balance is object and public  -- class method

// Feature	                   Class	                        Closure
// Where is balance?	      this.balance (object)	        local variable (function)
// Access from outside	    ✅ possible	                ❌ not possible
// Privacy	                ❌ public	                ✅ private
// Uses this	              ✅ yes	                    ❌ no
// Memory	methods shared	  new functions               each time
// Pattern	                OOP	                       Functional



class BankAccount {
  constructor() {
    this.balance = 1000;
  }

  deposit(amt) {
    this.balance += amt;
    console.log(this.balance);
  }

  withdraw(amt) {
    this.balance -= amt;
    console.log(this.balance);
  }
}

const acc = new BankAccount();
acc.deposit(100);
acc.withdraw(300);


//closure
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

