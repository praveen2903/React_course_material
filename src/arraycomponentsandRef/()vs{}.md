1. () Parentheses = Expression / Return Value / Grouping
Use () when you want to:


    A. Return JSX cleanly
    JSX
    return (
    <div>Hello</div>
    );
    ✅ Common in React because multiline JSX looks neat.


    B. Implicit return in arrow functions
    JSX
    const Add = () => (
    <h1>Hello</h1>
    );
    Equivalent to:
    JSX
    const Add = () => {
    return <h1>Hello</h1>;
    };
    ✅ () directly returns value.



    C. Group conditions / calculations
    JSX
    {(age > 18 && isUser) && <p>Allowed</p>}




2. {} Curly Braces = Block / Object / JS inside JSX
Use {} when you want to:
        A. Write JavaScript inside JSX
        JSX
        <h1>{name}</h1>
        <p>{2 + 2}</p>
        ✅ Inside JSX, {} means “run JavaScript here”.


        B. Function body block
        JSX
        const Add = () => {
        const name = "Praveen";
        return <h1>{name}</h1>;
        };
        ✅ Multiple lines need {}.


        C. Objects
        JSX
        const user = {
        name: "Praveen",
        age: 24
        };



        D. Inline styles in React
        JSX
        <div style={{ color: "red", fontSize: "20px" }}>
        Why double braces?
        Outer {} = JS inside JSX
        Inner {} = Object




3. Biggest Mistake in React
❌ Wrong
JSX
const App = () => {
   <h1>Hello</h1>
}
Nothing renders because {} body needs explicit return.
✅ Correct
JSX
const App = () => {
   return <h1>Hello</h1>;
}
OR
JSX
const App = () => (
   <h1>Hello</h1>
)



4. map() Confusion (Very Common)
❌ Wrong
JSX
items.map(item => {
   <li>{item}</li>
})
No return.
✅ Correct
JSX
items.map(item => (
   <li>{item}</li>
))
OR
JSX
items.map(item => {
   return <li>{item}</li>
})


5. Quick Memory Trick
() = gives back something
Think: return value
JSX
() => (
  <div />
)
{} = opens work area
Think: logic / statements
JSX
() => {
  const x = 5;
  return x;
}



6. React Real Example
JSX
const App = () => {
  const name = "Praveen";

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
Here:
First {} = function body
Second () = JSX return
Third {name} = JS inside JSX



7. Golden Rule
If using arrow function:
Single direct return:
JSX
() => ()
Multiple lines / logic:
JSX
() => {}