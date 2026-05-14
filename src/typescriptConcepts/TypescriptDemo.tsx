import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

function TypeVsInterface() {
  return (
    <div style={styles.card}>

      <h1>
        🚀 Type vs Interface Complete Guide
      </h1>

      <p>
        Both <b>type</b> and <b>interface</b>
        are used to define data structures in TypeScript.
      </p>

      <p>
        They look similar initially,
        but internally they are VERY different.
      </p>

      {/* ===================================================== */}

      <h2>
        🔥 1. Basic Object Example
      </h2>

      <pre style={styles.code}>
{`interface User {
  name: string;
  age: number;
  email: string;
}`}
      </pre>

      <pre style={styles.code}>
{`type User = {
  name: string;
  age: number;
  email: string;
}`}
      </pre>

      <pre style={styles.code}>
{`const user: User = {
  name: "Sai",
  age: 25,
  email: "sai@gmail.com",
};`}
      </pre>

      <div style={styles.warning}>
        Both work similarly for simple objects.
      </div>

      {/* ===================================================== */}

      <h2>
        🔥 2. Extending Interfaces
      </h2>

      <p>
        Interfaces use <b>extends</b>.
      </p>

      <pre style={styles.code}>
{`interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}`}
      </pre>

      <pre style={styles.code}>
{`const emp: Employee = {
  name: "Sai",
  age: 25,
  employeeId: 101,
  department: "Frontend",
};`}
      </pre>

      <div style={styles.success}>
        Interfaces are very common in OOP-style architectures.
      </div>

      {/* ===================================================== */}

      <h2>
        🔥 3. Type Intersections
      </h2>

      <p>
        Types use intersection operator <b>&</b>.
      </p>

      <pre style={styles.code}>
{`type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: number;
  department: string;
};`}
      </pre>

      <pre style={styles.code}>
{`const emp: Employee = {
  name: "Sai",
  age: 25,
  employeeId: 101,
  department: "Backend",
};`}
      </pre>

      {/* ===================================================== */}

      <h2>
        🔥 4. Declaration Merging
      </h2>

      <p>
        Interfaces support automatic merging.
      </p>

      <pre style={styles.code}>
{`interface User {
  name: string;
}

interface User {
  age: number;
}`}
      </pre>

      <pre style={styles.code}>
{`const user: User = {
  name: "Sai",
  age: 25,
};`}
      </pre>

      <div style={styles.warning}>
        TypeScript automatically merges both interfaces.
      </div>

      <h3>
        ❌ Types Cannot Merge
      </h3>

      <pre style={styles.code}>
{`type User = {
  name: string;
};

type User = {
  age: number;
};`}
      </pre>

      <div style={styles.error}>
        Duplicate identifier error.
      </div>

      {/* ===================================================== */}

      <h2>
        🔥 5. Union Types
      </h2>

      <p>
        One of the BIGGEST advantages of types.
      </p>

      <pre style={styles.code}>
{`type Status =
  | "loading"
  | "success"
  | "error";`}
      </pre>

      <pre style={styles.code}>
{`const apiStatus: Status = "loading";`}
      </pre>

      <div style={styles.success}>
        Interfaces CANNOT create union types.
      </div>

      {/* ===================================================== */}

      <h2>
        🔥 6. Real World API Response Example
      </h2>

      <pre style={styles.code}>
{`type ApiResponse =
  | {
      success: true;
      data: string[];
    }
  | {
      success: false;
      error: string;
    };`}
      </pre>

      <pre style={styles.code}>
{`function handleResponse(
  response: ApiResponse
) {

  if (response.success) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }

}`}
      </pre>

      <div style={styles.warning}>
        This pattern is EXTREMELY common in real applications.
      </div>

      {/* ===================================================== */}

      <h2>
        🔥 7. Function Types
      </h2>

      <h3>
        Interface Function
      </h3>

      <pre style={styles.code}>
{`interface Add {
  (
    a: number,
    b: number
  ): number;
}`}
      </pre>

      <h3>
        Type Function
      </h3>

      <pre style={styles.code}>
{`type Add = (
  a: number,
  b: number
) => number;`}
      </pre>

      <pre style={styles.code}>
{`const sum: Add = (a, b) => {
  return a + b;
};`}
      </pre>

      {/* ===================================================== */}

      <h2>
        🔥 8. Tuple Types
      </h2>

      <p>
        Tuples are mostly used with types.
      </p>

      <pre style={styles.code}>
{`type Coordinates = [
  number,
  number
];`}
      </pre>

      <pre style={styles.code}>
{`const point: Coordinates = [
  10,
  20,
];`}
      </pre>

      {/* ===================================================== */}

      <h2>
        🔥 9. Primitive Aliases
      </h2>

      <p>
        Only types can alias primitives.
      </p>

      <pre style={styles.code}>
{`type UserId = string;

type Age = number;

type IsAdmin = boolean;`}
      </pre>

      {/* ===================================================== */}

      <h2>
        🔥 10. Advanced Union Example
      </h2>

      <pre style={styles.code}>
{`type PaymentMethod =
  | {
      type: "card";
      cardNumber: string;
      cvv: number;
    }
  | {
      type: "upi";
      upiId: string;
    }
  | {
      type: "paypal";
      email: string;
    };`}
      </pre>

      <pre style={styles.code}>
{`function processPayment(
  payment: PaymentMethod
) {

  if (payment.type === "card") {

    console.log(payment.cardNumber);

  }

  if (payment.type === "upi") {

    console.log(payment.upiId);

  }

}`}
      </pre>

      <div style={styles.success}>
        This is called a discriminated union.
      </div>

      {/* ===================================================== */}

      <h2>
        🔥 11. React Props Example
      </h2>

      <h3>
        Using Interface
      </h3>

      <pre style={styles.code}>
{`interface ButtonProps {
  title: string;
  disabled?: boolean;
}

function Button({
  title,
  disabled
}: ButtonProps) {

  return (
    <button disabled={disabled}>
      {title}
    </button>
  );
}`}
      </pre>

      <h3>
        Using Type
      </h3>

      <pre style={styles.code}>
{`type ButtonProps = {
  title: string;
  disabled?: boolean;
};`}
      </pre>

      {/* ===================================================== */}

      <h2>
        🔥 12. Classes + Interface
      </h2>

      <pre style={styles.code}>
{`interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {

  name = "Tommy";

  speak() {
    console.log("Bark");
  }

}`}
      </pre>

      <div style={styles.warning}>
        Interfaces are commonly used with classes.
      </div>

      {/* ===================================================== */}

      <h2>
        🔥 13. Mapped Types
      </h2>

      <p>
        Advanced TypeScript feature.
      </p>

      <pre style={styles.code}>
{`interface User {
  name: string;
  age: number;
}

type PartialUser =
  Partial<User>;`}
      </pre>

      <pre style={styles.code}>
{`const user: PartialUser = {
  name: "Sai",
};`}
      </pre>

      {/* ===================================================== */}

      <h2>
        🔥 14. Conditional Types
      </h2>

      <pre style={styles.code}>
{`type IsString<T> =
  T extends string
    ? true
    : false;`}
      </pre>

      <pre style={styles.code}>
{`type A = IsString<string>;
type B = IsString<number>;`}
      </pre>

      {/* ===================================================== */}

      <h2>
        🔥 15. Full Comparison Table
      </h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>
              Feature
            </th>

            <th style={styles.th}>
              Interface
            </th>

            <th style={styles.th}>
              Type
            </th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td style={styles.td}>
              Objects
            </td>

            <td style={styles.td}>
              ✅
            </td>

            <td style={styles.td}>
              ✅
            </td>
          </tr>

          <tr>
            <td style={styles.td}>
              Extending
            </td>

            <td style={styles.td}>
              ✅
            </td>

            <td style={styles.td}>
              ✅
            </td>
          </tr>

          <tr>
            <td style={styles.td}>
              Declaration merging
            </td>

            <td style={styles.td}>
              ✅
            </td>

            <td style={styles.td}>
              ❌
            </td>
          </tr>

          <tr>
            <td style={styles.td}>
              Union types
            </td>

            <td style={styles.td}>
              ❌
            </td>

            <td style={styles.td}>
              ✅
            </td>
          </tr>

          <tr>
            <td style={styles.td}>
              Tuples
            </td>

            <td style={styles.td}>
              ❌
            </td>

            <td style={styles.td}>
              ✅
            </td>
          </tr>

          <tr>
            <td style={styles.td}>
              Primitive aliases
            </td>

            <td style={styles.td}>
              ❌
            </td>

            <td style={styles.td}>
              ✅
            </td>
          </tr>

        </tbody>
      </table>

      {/* ===================================================== */}

      <h2>
        🔥 16. Best Practice
      </h2>

      <div style={styles.box}>
        <pre style={styles.code}>
{`Use interface for:
-------------------
- Object structures
- React props
- OOP style code
- Public APIs

Use type for:
--------------
- Union types
- Advanced TS features
- Conditional types
- Utility types
- Tuples`}
        </pre>
      </div>

      {/* ===================================================== */}

      <h2>
        🔥 Most Important Interview Question
      </h2>

      <pre style={styles.code}>
{`Q) Which is better:
type or interface?

A)

Neither is universally better.

interface is better for
object-oriented extensible designs.

type is more flexible and supports
advanced TypeScript features like:

- unions
- mapped types
- conditional types
- tuples`}
      </pre>

    </div>
  );
}

const topics = [
  { id: "primitive-types", title: "Primitive Types" },
  { id: "type-inference", title: "Type Inference" },
  { id: "interface-vs-type", title: "Interface vs Type" },
  { id: "union-types", title: "Union Types" },
  { id: "intersection-types", title: "Intersection Types" },
  { id: "literal-types", title: "Literal Types" },
  { id: "enums", title: "Enums" },
  { id: "generics", title: "Generics" },
  { id: "generic-constraints", title: "Generic Constraints" },
  { id: "keyof", title: "keyof" },
  { id: "typeof", title: "typeof" },
  { id: "mapped-types", title: "Mapped Types" },
  { id: "utility-types", title: "Utility Types" },
  { id: "record", title: "Record Type" },
  { id: "readonly", title: "Readonly" },
  { id: "optional-properties", title: "Optional Properties" },
  { id: "unknown-any", title: "unknown vs any" },
  { id: "never", title: "never Type" },
  { id: "type-narrowing", title: "Type Narrowing" },
  { id: "discriminated-unions", title: "Discriminated Unions" },
  { id: "optional-chaining", title: "Optional Chaining" },
  { id: "nullish", title: "Nullish Coalescing" },
  { id: "async-await", title: "Async Await Types" },
  { id: "fetch-api", title: "Fetch API Types" },
  { id: "axios", title: "Axios Types" },
  { id: "props", title: "React Props" },
  { id: "children", title: "Children Types" },
  { id: "events", title: "Event Types" },
  { id: "usestate", title: "useState Types" },
  { id: "useref", title: "useRef Types" },
  { id: "usememo", title: "useMemo Types" },
  { id: "usecallback", title: "useCallback Types" },
  { id: "usereducer", title: "useReducer Types" },
  { id: "reactfc", title: "React.FC Trap" },
  { id: "interview-traps", title: "Interview Traps" },
];

/* =========================================================
   HELPERS
   ========================================================= */

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function Section({
  id,
  title,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      style={styles.section}
    >
      <h2 style={styles.heading}>
        {title}
      </h2>

      {children}

      <button
        style={styles.topButton}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        ⬆ Back To Top
      </button>
    </section>
  );
}

export default function TypeScriptMasterCheatSheet() {
  const [search, setSearch] =
    useState<string>("");

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
  );

  /* =============================
     DEMO STATES
     ============================= */

  const [count, setCount] =
    useState<number>(0);

  const inputRef =
    useRef<HTMLInputElement | null>(
      null
    );

  const total = useMemo<number>(() => {
    return count * 100;
  }, [count]);

  const handleClick =
    useCallback((): void => {
      alert("Clicked");
    }, []);

  type State = {
    value: number;
  };

  type Action =
    | { type: "increment" }
    | { type: "decrement" };

  function reducer(
    state: State,
    action: Action
  ): State {
    switch (action.type) {
      case "increment":
        return {
          value: state.value + 1,
        };

      case "decrement":
        return {
          value: state.value - 1,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] =
    useReducer(reducer, {
      value: 0,
    });

  /* =============================
     FETCH DEMO
     ============================= */

  interface Product {
    id: number;
    title: string;
    price: number;
  }

  const [products, setProducts] =
    useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        const data: Product[] =
          await response.json();

        setProducts(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return(
    <div style={styles.container}>
      <TypeVsInterface/>
  <Section
    id="primitive-types"
    title="Primitive Types"
  >
    <h3 style={styles.heading3}>
      What are Primitive Types?
    </h3>

    <p style={styles.text}>
      Primitive types are the most basic data types in TypeScript.
      They define what type of value a variable can store.
    </p>

    <p style={styles.text}>
      TypeScript uses primitive types to:
    </p>

    <ul style={styles.list}>
      <li>Prevent bugs</li>
      <li>Improve autocomplete</li>
      <li>Catch invalid assignments</li>
      <li>Improve readability</li>
      <li>Make code self-documenting</li>
    </ul>

    <h3 style={styles.heading3}>
      Common Primitive Types
    </h3>

    <pre style={styles.code}>
  {`const username: string = "Praveen"

  const age: number = 25

  const isAdmin: boolean = true

  const skills: string[] = [
    "React",
    "TypeScript"
  ]

  const tuple: [string, number] = [
    "Praveen",
    25
  ]`}
    </pre>

    <h3 style={styles.heading3}>
      Explanation
    </h3>

    <ul style={styles.list}>
      <li>
        <strong>string</strong> → stores text values
      </li>

      <li>
        <strong>number</strong> → stores numeric values
      </li>

      <li>
        <strong>boolean</strong> → stores true/false
      </li>

      <li>
        <strong>string[]</strong> → array of strings
      </li>

      <li>
        <strong>tuple</strong> → fixed length array with fixed order
      </li>
    </ul>

    <h3 style={styles.heading3}>
      Real World Usage
    </h3>

    <pre style={styles.code}>
  {`interface User {
    username: string
    age: number
    isAdmin: boolean
  }`}
    </pre>

    <h3 style={styles.heading3}>
      Interview Notes
    </h3>

    <ul style={styles.list}>
      <li>
        Use lowercase primitive types like string, number, boolean
      </li>

      <li>
        Avoid using String, Number, Boolean wrapper objects
      </li>

      <li>
        Tuples are useful when order matters
      </li>
    </ul>
  </Section>


    <Section
      id="type-inference"
      title="Type Inference"
    >
      <h3 style={styles.heading3}>
        What is Type Inference?
      </h3>

      <p style={styles.text}>
        Type inference means TypeScript automatically detects
        the type of a variable without explicitly writing it.
      </p>

      <pre style={styles.code}>
    {`const username = "Praveen"
    // inferred as string

    const age = 25
    // inferred as number

    const isAdmin = true
    // inferred as boolean`}
      </pre>

      <h3 style={styles.heading3}>
        Why is Inference Useful?
      </h3>

      <ul style={styles.list}>
        <li>Less code</li>
        <li>Cleaner syntax</li>
        <li>Automatic IntelliSense</li>
        <li>Safer refactoring</li>
      </ul>

      <h3 style={styles.heading3}>
        Important Interview Concept
      </h3>

      <pre style={styles.code}>
    {`let theme = "dark"
    // inferred as string

    const mode = "dark"
    // inferred as "dark" literal type`}
      </pre>

      <p style={styles.text}>
        const creates narrower literal types because values cannot change.
      </p>

      <h3 style={styles.heading3}>
        When to Explicitly Add Types
      </h3>

      <ul style={styles.list}>
        <li>Function parameters</li>
        <li>API responses</li>
        <li>Complex objects</li>
        <li>Reusable utilities</li>
      </ul>
    </Section>


<Section
  id="interface-vs-type"
  title="Interface vs Type"
>
  <h3 style={styles.heading3}>
    Interface
  </h3>

  <p style={styles.text}>
    Interfaces are mainly used for defining object shapes.
  </p>

  <pre style={styles.code}>
{`interface User {
  name: string
  age: number
}`}
  </pre>

  <h3 style={styles.heading3}>
    Type Alias
  </h3>

  <p style={styles.text}>
    Type aliases are more flexible and can represent almost anything.
  </p>

  <pre style={styles.code}>
{`type User = {
  name: string
  age: number
}`}
  </pre>

  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>Interface</th>
        <th style={styles.th}>Type</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={styles.td}>Object Shapes</td>
        <td style={styles.td}>Everything</td>
      </tr>

      <tr>
        <td style={styles.td}>Extendable</td>
        <td style={styles.td}>Great for unions</td>
      </tr>

      <tr>
        <td style={styles.td}>Supports declaration merging</td>
        <td style={styles.td}>Cannot merge</td>
      </tr>
    </tbody>
  </table>

  <h3 style={styles.heading3}>
    Declaration Merging
  </h3>

  <pre style={styles.code}>
{`interface User {
  name: string
}

interface User {
  age: number
}

// merged automatically
`}
  </pre>

  <h3 style={styles.heading3}>
    Recommended Rule
  </h3>

  <ul style={styles.list}>
    <li>Use interface for objects</li>
    <li>Use type for unions and advanced types</li>
  </ul>
</Section>

{/* =========================================================
    UNION TYPES
========================================================= */}

<Section
  id="union-types"
  title="Union Types"
>
  <h3 style={styles.heading3}>
    What are Union Types?
  </h3>

  <p style={styles.text}>
    Union types allow a variable to hold multiple possible types.
  </p>

  <pre style={styles.code}>
{`type Status =
 | "loading"
 | "success"
 | "error"`}
  </pre>

  <h3 style={styles.heading3}>
    Real World Usage
  </h3>

  <pre style={styles.code}>
{`function printId(id: string | number) {
  console.log(id)
}`}
  </pre>

  <h3 style={styles.heading3}>
    Why Use Unions?
  </h3>

  <ul style={styles.list}>
    <li>Restricts invalid values</li>
    <li>Makes APIs predictable</li>
    <li>Improves autocomplete</li>
  </ul>

  <h3 style={styles.heading3}>
    Important Concept
  </h3>

  <p style={styles.text}>
    You can only access properties common to all union members unless narrowing is used.
  </p>
</Section>

{/* =========================================================
    GENERICS
========================================================= */}

<Section
  id="generics"
  title="Generics"
>
  <h3 style={styles.heading3}>
    What are Generics?
  </h3>

  <p style={styles.text}>
    Generics allow reusable components and functions while preserving type safety.
  </p>

  <h3 style={styles.heading3}>
    Problem Without Generics
  </h3>

  <pre style={styles.code}>
{`function identity(value: any) {
  return value
}`}
  </pre>

  <p style={styles.text}>
    Using any removes type safety.
  </p>

  <h3 style={styles.heading3}>
    Generic Solution
  </h3>

  <pre style={styles.code}>
{`function identity<T>(
  value: T
): T {
  return value
}`}
  </pre>

  <h3 style={styles.heading3}>
    Usage
  </h3>

  <pre style={styles.code}>
{`identity<string>("hello")
identity<number>(123)`}
  </pre>

  <h3 style={styles.heading3}>
    Mental Model
  </h3>

  <p style={styles.text}>
    Think of T as a placeholder type that gets replaced later.
  </p>

  <h3 style={styles.heading3}>
    Real World Usage
  </h3>

  <pre style={styles.code}>
{`const [users, setUsers] =
useState<User[]>([])`}
  </pre>
</Section>

{/* =========================================================
    GENERIC CONSTRAINTS
========================================================= */}

<Section
  id="generic-constraints"
  title="Generic Constraints"
>
  <h3 style={styles.heading3}>
    What are Constraints?
  </h3>

  <p style={styles.text}>
    Constraints restrict what types a generic can accept.
  </p>

  <pre style={styles.code}>
{`function getLength<
 T extends { length:number }
>(value:T) {
 return value.length
}`}
  </pre>

  <h3 style={styles.heading3}>
    Why Needed?
  </h3>

  <p style={styles.text}>
    Without constraints, TypeScript cannot guarantee that a property exists.
  </p>

  <h3 style={styles.heading3}>
    Valid Examples
  </h3>

  <pre style={styles.code}>
{`getLength("hello")
getLength([1,2,3])`}
  </pre>

  <h3 style={styles.heading3}>
    Invalid Example
  </h3>

  <pre style={styles.code}>
{`getLength(100)
// number has no length`}
  </pre>
</Section>

{/* =========================================================
    UNKNOWN VS ANY
========================================================= */}

<Section
  id="unknown-any"
  title="unknown vs any"
>
  <h3 style={styles.heading3}>
    any Type
  </h3>

  <p style={styles.text}>
    any disables TypeScript checking completely.
  </p>

  <pre style={styles.code}>
{`let value: any = "hello"

value = 123
value.toUpperCase()
// no error even if invalid`}
  </pre>

  <h3 style={styles.heading3}>
    unknown Type
  </h3>

  <p style={styles.text}>
    unknown is safer because TypeScript forces validation before usage.
  </p>

  <pre style={styles.code}>
{`let value: unknown = "hello"

if(typeof value === "string") {
  value.toUpperCase()
}`}
  </pre>

  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>any</th>
        <th style={styles.th}>unknown</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={styles.td}>Unsafe</td>
        <td style={styles.td}>Safe</td>
      </tr>

      <tr>
        <td style={styles.td}>No checking</td>
        <td style={styles.td}>Requires narrowing</td>
      </tr>

      <tr>
        <td style={styles.td}>Avoid mostly</td>
        <td style={styles.td}>Preferred</td>
      </tr>
    </tbody>
  </table>
</Section>

{/* =========================================================
    TYPE NARROWING
========================================================= */}

<Section
  id="type-narrowing"
  title="Type Narrowing"
>
  <h3 style={styles.heading3}>
    What is Narrowing?
  </h3>

  <p style={styles.text}>
    Narrowing means reducing a broader type into a more specific type.
  </p>

  <pre style={styles.code}>
{`function print(value: string | number) {
  if(typeof value === "string") {
    value.toUpperCase()
  }
}`}
  </pre>

  <h3 style={styles.heading3}>
    Common Narrowing Techniques
  </h3>

  <ul style={styles.list}>
    <li>typeof</li>
    <li>instanceof</li>
    <li>in operator</li>
    <li>truthy checks</li>
    <li>discriminated unions</li>
  </ul>
</Section>

{/* =========================================================
    DISCRIMINATED UNIONS
========================================================= */}

<Section
  id="discriminated-unions"
  title="Discriminated Unions"
>
  <h3 style={styles.heading3}>
    What are Discriminated Unions?
  </h3>

  <p style={styles.text}>
    Discriminated unions use a common property to safely identify object types.
  </p>

  <pre style={styles.code}>
{`type ApiState =
 | { status:"loading" }
 | {
     status:"success"
     data:string[]
   }
 | { status:"error" }`}
  </pre>

  <h3 style={styles.heading3}>
    Usage
  </h3>

  <pre style={styles.code}>
{`function render(state: ApiState) {
  if(state.status === "success") {
    console.log(state.data)
  }
}`}
  </pre>

  <h3 style={styles.heading3}>
    Real World Usage
  </h3>

  <ul style={styles.list}>
    <li>API states</li>
    <li>Redux reducers</li>
    <li>Form states</li>
    <li>Authentication flows</li>
  </ul>
</Section>

{/* =========================================================
    REACT EVENTS
========================================================= */}

<Section
  id="events"
  title="Event Types"
>
  <h3 style={styles.heading3}>
    Why Event Types Matter
  </h3>

  <p style={styles.text}>
    Event types provide autocomplete and prevent invalid DOM usage.
  </p>

  <pre style={styles.code}>
{`const handleChange = (
 e: React.ChangeEvent<
   HTMLInputElement
 >
) => {
 console.log(e.target.value)
}`}
  </pre>

  <h3 style={styles.heading3}>
    Common Event Types
  </h3>

  <pre style={styles.code}>
{`React.MouseEvent<HTMLButtonElement>

React.KeyboardEvent<HTMLInputElement>

React.FormEvent<HTMLFormElement>

React.ChangeEvent<HTMLInputElement>`}
  </pre>

  <h3 style={styles.heading3}>
    Mouse Event Example
  </h3>

  <pre style={styles.code}>
{`const handleClick = (
 e: React.MouseEvent<
   HTMLButtonElement
 >
) => {
 console.log(e.clientX)
}`}
  </pre>
</Section>

{/* =========================================================
    useState
========================================================= */}

<Section
  id="usestate"
  title="useState Types"
>
  <h3 style={styles.heading3}>
    What is useState?
  </h3>

  <p style={styles.text}>
    useState stores component state and triggers re-renders when updated.
  </p>

  <pre style={styles.code}>
{`const [count, setCount] =
useState<number>(0)`}
  </pre>

  <h3 style={styles.heading3}>
    Why Add Generic Type?
  </h3>

  <p style={styles.text}>
    Explicit types help when TypeScript cannot infer correctly.
  </p>

  <h3 style={styles.heading3}>
    Important Interview Trap
  </h3>

  <pre style={styles.code}>
{`const [users, setUsers] =
useState([])

// inferred as never[]`}
  </pre>

  <h3 style={styles.heading3}>
    Correct Version
  </h3>

  <pre style={styles.code}>
{`const [users, setUsers] =
useState<User[]>([])`}
  </pre>
</Section>

{/* =========================================================
    useRef
========================================================= */}

<Section
  id="useref"
  title="useRef Types"
>
  <h3 style={styles.heading3}>
    What is useRef?
  </h3>

  <p style={styles.text}>
    useRef creates a mutable value that persists between renders.
  </p>

  <ul style={styles.list}>
    <li>Stores DOM references</li>
    <li>Stores mutable values</li>
    <li>Does not trigger re-renders</li>
  </ul>

  <pre style={styles.code}>
{`const inputRef =
useRef<HTMLInputElement | null>(
 null
)`}
  </pre>

  <h3 style={styles.heading3}>
    Why null?
  </h3>

  <p style={styles.text}>
    Before mounting, the DOM element does not exist.
  </p>

  <h3 style={styles.heading3}>
    Why Optional Chaining?
  </h3>

  <pre style={styles.code}>
{`inputRef.current?.focus()`}
  </pre>

  <p style={styles.text}>
    current may still be null.
  </p>

  <h3 style={styles.heading3}>
    Important Difference
  </h3>

  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>useState</th>
        <th style={styles.th}>useRef</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={styles.td}>Triggers render</td>
        <td style={styles.td}>No render</td>
      </tr>

      <tr>
        <td style={styles.td}>UI state</td>
        <td style={styles.td}>Mutable container</td>
      </tr>
    </tbody>
  </table>
</Section>

{/* =========================================================
    useMemo
========================================================= */}

<Section
  id="usememo"
  title="useMemo Types"
>
  <h3 style={styles.heading3}>
    What is useMemo?
  </h3>

  <p style={styles.text}>
    useMemo memoizes expensive calculations.
  </p>

  <pre style={styles.code}>
{`const total =
useMemo<number>(() => {
 return count * 100
}, [count])`}
  </pre>

  <h3 style={styles.heading3}>
    Why Use useMemo?
  </h3>

  <ul style={styles.list}>
    <li>Avoid expensive recalculations</li>
    <li>Improve performance</li>
    <li>Memoize derived values</li>
  </ul>

  <h3 style={styles.heading3}>
    Important Note
  </h3>

  <p style={styles.text}>
    Do not overuse useMemo for small calculations.
  </p>
</Section>

{/* =========================================================
    useCallback
========================================================= */}

<Section
  id="usecallback"
  title="useCallback Types"
>
  <h3 style={styles.heading3}>
    What is useCallback?
  </h3>

  <p style={styles.text}>
    useCallback memoizes functions.
  </p>

  <pre style={styles.code}>
{`const handleClick =
useCallback(():void => {
 console.log("clicked")
}, [])`}
  </pre>

  <h3 style={styles.heading3}>
    Why Use It?
  </h3>

  <ul style={styles.list}>
    <li>Prevents unnecessary re-renders</li>
    <li>Useful with React.memo</li>
    <li>Stable function references</li>
  </ul>
</Section>

{/* =========================================================
    useReducer
========================================================= */}

<Section
  id="usereducer"
  title="useReducer Types"
>
  <h3 style={styles.heading3}>
    What is useReducer?
  </h3>

  <p style={styles.text}>
    useReducer manages complex state logic.
  </p>

  <pre style={styles.code}>
{`type Action =
 | { type:"increment" }
 | { type:"decrement" }`}
  </pre>

  <h3 style={styles.heading3}>
    Why Use Discriminated Unions?
  </h3>

  <p style={styles.text}>
    They make reducers fully type-safe.
  </p>

  <h3 style={styles.heading3}>
    Real World Usage
  </h3>

  <ul style={styles.list}>
    <li>Redux</li>
    <li>Complex forms</li>
    <li>Shopping carts</li>
    <li>Authentication state</li>
  </ul>
</Section>

<Section
  id="reactfc"
  title="React.FC Trap"
>
  <h3 style={styles.heading3}>
    Old Pattern
  </h3>

  <pre style={styles.code}>
{`const App: React.FC = () => {}`}
  </pre>

  <h3 style={styles.heading3}>
    Preferred Pattern
  </h3>

  <pre style={styles.code}>
{`function App() {
  return <div>Hello</div>
}`}
  </pre>

  <h3 style={styles.heading3}>
    Why Avoid React.FC?
  </h3>

  <ul style={styles.list}>
    <li>Implicit children typing</li>
    <li>Less flexible</li>
    <li>Modern React avoids it</li>
  </ul>
</Section>


<Section
  id="interview-traps"
  title="Interview Traps"
>
  <ul style={styles.list}>
    <li>
      ❌ useState([]) infers never[]
    </li>

    <li>
      ❌ any disables safety
    </li>

    <li>
      ❌ forgetting null checks
    </li>

    <li>
      ❌ mutating readonly values
    </li>

    <li>
      ❌ wrong React event types
    </li>

    <li>
      ❌ forgetting optional chaining
    </li>

    <li>
      ❌ overusing enums
    </li>

    <li>
      ❌ using React.FC everywhere
    </li>

    <li>
      ❌ unsafe type assertions
    </li>
  </ul>

  <h3 style={styles.heading3}>
    Golden Rule
  </h3>

  <p style={styles.text}>
    Prefer strict typing and avoid any whenever possible.
  </p>
</Section>
    </div>
  );
}

/* =========================================================
   STYLES
   ========================================================= */

const styles: Record<
  string,
  React.CSSProperties
> = {
  container: {
    background: "#f5f5f5",
    minHeight: "100vh",
    fontFamily: "Arial",
    color: "#222",
    width:'100%',
    textAlign:'left'
  },

  header: {
    padding: "30px",
    textAlign: "center",
    background: "#111827",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  mainTitle: {
    fontSize: "40px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.9,
  },

  search: {
    marginTop: "20px",
    width: "300px",
    maxWidth: "90%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
  },

  layout: {
    display: "flex",
    alignItems: "flex-start",
  },

  sidebar: {
    width: "260px",
    position: "sticky",
    top: "160px",
    height: "100vh",
    overflowY: "auto",
    background: "white",
    padding: "20px",
    borderRight: "1px solid #ddd",
  },

  navButton: {
    color: 'black',
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    cursor: "pointer",
    background: "#f4f4f4",
    textAlign: "left",
    fontWeight: 600,
  },

  content: {
    flex: 1,
    padding: "30px",
  },

  section: {
    background: "white",
    padding: "25px",
    marginBottom: "30px",
    borderRadius: "16px",
    boxShadow:
      "0 4px 10px rgba(0,0,0,0.08)",
  },

  heading: {
    fontSize: "28px",
    marginBottom: "20px",
  },

  code: {
    background: "#111827",
    color: "#00ff99",
    padding: "18px",
    borderRadius: "12px",
    overflowX:
      "auto" as React.CSSProperties["overflowX"],
    whiteSpace:
      "pre-wrap" as React.CSSProperties["whiteSpace"],
    fontSize: "14px",
    lineHeight: 1.6,
  },

  table: {
    width: "100%",
    borderCollapse:
      "collapse" as React.CSSProperties["borderCollapse"],
  },

  th: {
    border: "1px solid #ddd",
    padding: "12px",
    background: "#f4f4f4",
    textAlign:
      "left" as React.CSSProperties["textAlign"],
  },

  td: {
    border: "1px solid #ddd",
    padding: "12px",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  },

  demoButton: {
    padding: "10px 16px",
    borderRadius: "10px",
    border: "none",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
    marginRight: "10px",
    marginBottom: "10px",
    fontWeight: 700,
  },

  topButton: {
    marginTop: "20px",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    background: "#111827",
    color: "white",
    cursor: "pointer",
  },

  grid: {
    display:
      "grid" as React.CSSProperties["display"],
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "15px",
    marginTop: "20px",
  },

  product: {
    background: "#f4f4f4",
    padding: "15px",
    borderRadius: "10px",
  },

  list: {
    lineHeight: 2,
  },
};