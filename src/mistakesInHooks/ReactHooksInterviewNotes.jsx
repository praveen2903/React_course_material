import {
  useForm,
  Controller,
  useFieldArray,
} from "react-hook-form";
import Select from "react-select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
const techOptions = [
  { value: "react", label: "React" },
  { value: "node", label: "Node JS" },
  { value: "graphql", label: "GraphQL" },
  { value: "redux", label: "Redux" },
];

/* =========================================================
   ZOD SCHEMA
========================================================= */

const userSchema = z.object({
  name: z.string().min(3, "Minimum 3 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
  age: z.coerce.number().min(18, "Must be 18+"),
  gender: z.object({
    value: z.string(),
    label: z.string(),
  }),
  technologies: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .min(1, "Select technologies"),

  skills: z
    .array(
      z.object({
        value: z
          .string()
          .min(2, "Skill too short"),
      })
    )
    .min(1, "Add at least one skill"),
});



function ReactHookFormFullDemo() {


  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      gender: null,
      technologies: [],
      skills: [
        { value: "" },
      ],
    },
  });



  /* =========================================================
     useFieldArray
  ========================================================= */

  const {fields,append,remove,} = useFieldArray({control,name: "skills",});



  /* =========================================================
     SUBMIT
  ========================================================= */

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  /* =========================================================
     STYLES
  ========================================================= */

  const pageStyle = {
    background: "#f4f7fb",
    minHeight: "100vh",
    fontFamily: "Arial",
    textAlign: "left",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "46px",
    marginBottom: "20px",
  };

  const subHeadingStyle = {
    textAlign: "center",
    color: "#555",
    marginBottom: "50px",
    fontSize: "18px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(500px,1fr))",
    gap: "24px",
  };

  const cardStyle = {
    background: "white",
    // padding: "28px",
    borderRadius: "18px",
    boxShadow:
      "0 4px 12px rgba(0,0,0,0.08)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginTop: "8px",
    marginBottom: "8px",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginTop: "18px",
    display: "block",
  };

  const errorStyle = {
    color: "crimson",
    fontSize: "14px",
    marginBottom: "10px",
  };

  const codeStyle = {
    background: "#111827",
    color: "#00ff95",
    // padding: "16px",
    borderRadius: "12px",
    overflowX: "auto",
    whiteSpace: "pre-wrap",
    fontSize: "14px",
    marginTop: "18px",
  };

  const infoStyle = {
    background: "#eef6ff",
    padding: "16px",
    borderRadius: "12px",
    borderLeft: "6px solid #2563eb",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "12px 18px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    background: "#2563eb",
    color: "white",
    marginTop: "15px",
  };



  return (
    <div style={pageStyle}>

      <h2 style={headingStyle}>
        React Hook Form + Zod Full Guide
      </h2>

      <p style={subHeadingStyle}>
        register, Controller,
        useFieldArray, multi select,
        schema validation and live form state
      </p>
      <p>React hook form -- useful when the form input doesn't cause any rerenders and onSubmit only the form submits and navigate
        and also it helps to add the error schema using zodResolver
      </p>
<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "1fr 1fr",
    gap: "24px",
    marginTop: "30px",
    alignItems: "stretch",
  }}
>

  {/* =====================================================
      LEFT SIDE
  ===================================================== */}

  <div
    style={{
      background: "#f8fafc",
      // padding: "24px",
      borderRadius: "16px",
      borderLeft:
        "6px solid #2563eb",
    }}
  >
    <pre
      style={{
        background: "#111827",
        color: "#38bdf8",
        padding: "18px",
        borderRadius: "12px",
        marginTop: "20px",
        lineHeight: "1.8",
        overflowX: "auto",
      }}
    >
{`import {
  useForm,
  Controller,
  useFieldArray,
} from "react-hook-form";
import Select from "react-select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
const techOptions = [
  { value: "react", label: "React" },
  { value: "node", label: "Node JS" },
  { value: "graphql", label: "GraphQL" },
  { value: "redux", label: "Redux" },
];

function ReactHookFormFullDemo() {


  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      gender: null,
      technologies: [],
      skills: [
        { value: "" },
      ],
    },
  });

  const {fields,append,remove,} = useFieldArray({control,name: "skills",});

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
    reset();
  };
return (
      <div style={gridStyle}>
        <div style={cardStyle}>
          <h2>
            ✅ Registration Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <label>Name</label>

            <input
              {...register("name")}
              placeholder="Enter name"
            />

            <p>{errors.name?.message}</p>
            <label>Email</label>

            <input
              {...register("email")}
              placeholder="Enter email"
            />

            <p> {errors.email?.message}</p>


            <label>Password</label>

            <input type="password"
              {...register("password")}
              placeholder="Enter password"
            />

            <p>{errors.password?.message}</p>

            <label>Age</label>

            <input type="number"
              {...register("age")}
              placeholder="Enter age"
            />

            <p>{errors.age?.message}</p>

{/* =========================================================
    CONTROLLER- 
========================================================= */}

            <label> Gender (Controller)</label>

            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <Select {...field}
                  options={genderOptions}
                  placeholder="Select Gender"
                />
              )}
            />

            <p style={errorStyle}>
              {errors.gender?.message}
            </p>



            {/* =========================================================
               MULTI SELECT
            ========================================================= */}

            <label style={labelStyle}>
              Technologies (Multi Select)
            </label>

            <Controller control={control}
              name="technologies"
              render={({ field }) => (
                <Select {...field} isMulti
                  options={techOptions}
                  placeholder="Select Technologies"
                />
              )}
            />

            <p>{errors.technologies?.message}</p>


            <label style={labelStyle}>
              Skills (useFieldArray)
            </label>

            {fields.map((field, index) => (
                <div key={field.id}>
                  <input placeholder="Enter Skill"
                    {...register(\`skills.\${index}.value\`)}
                  />

                  <button type="button" onClick={() =>remove(index)}>
                    Remove
                  </button>

                </div>
              ))
            }

            <button type="button" onClick={() =>append({ value: "" })}>
              Add Skill
            </button>

            <br />

            <button type="submit">
              Submit Form
            </button>

          </form>
        </div>
  )`}
    </pre>

  </div>



  {/* =====================================================
      RIGHT SIDE
  ===================================================== */}

  <pre
    style={{
      background: "#161b22",
      // padding: "24px",
      borderRadius: "16px",
      color: "#fff1c1",
      lineHeight: "1.8",
      fontSize: "15px",
      overflowX: "auto",
      textAlign: "left",
      margin: 0,
    }}
  >
{`/* =========================================================
   ZOD SCHEMA
========================================================= */

import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3, "Minimum 3 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
  age: z.coerce.number().min(18, "Must be 18+"),
  gender: z.object({
    value: z.string(),
    label: z.string(),
  }),
  technologies: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .min(1, "Select technologies"),

  skills: z
    .array(
      z.object({
        value: z
          .string()
          .min(2, "Skill too short"),
      })
    )
    .min(1, "Add at least one skill"),
});

`}
  </pre>

</div>
      <div style={gridStyle}>
        {/* =========================================================
           FORM SECTION
        ========================================================= */}
        <div style={cardStyle}>
          <h2>
            ✅ Registration Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* =========================================================
               NAME
            ========================================================= */}

            <label style={labelStyle}>
              Name
            </label>

            <input
              {...register("name")}
              placeholder="Enter name"
              style={inputStyle}
            />

            <p style={errorStyle}>
              {errors.name?.message}
            </p>



            {/* =========================================================
               EMAIL
            ========================================================= */}

            <label style={labelStyle}>
              Email
            </label>

            <input
              {...register("email")}
              placeholder="Enter email"
              style={inputStyle}
            />

            <p style={errorStyle}>
              {errors.email?.message}
            </p>



            {/* =========================================================
               PASSWORD
            ========================================================= */}

            <label style={labelStyle}>
              Password
            </label>

            <input
              type="password"
              {...register("password")}
              placeholder="Enter password"
              style={inputStyle}
            />

            <p style={errorStyle}>
              {errors.password?.message}
            </p>



            {/* =========================================================
               AGE
            ========================================================= */}

            <label style={labelStyle}>
              Age
            </label>

            <input
              type="number"
              {...register("age")}
              placeholder="Enter age"
              style={inputStyle}
            />

            <p style={errorStyle}>
              {errors.age?.message}
            </p>



            {/* =========================================================
               CONTROLLER SELECT
            ========================================================= */}

            <label style={labelStyle}>
              Gender (Controller)
            </label>

            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <Select
                  {...field}
                  options={genderOptions}
                  placeholder="Select Gender"
                />
              )}
            />

            <p style={errorStyle}>
              {errors.gender?.message}
            </p>



            {/* =========================================================
               MULTI SELECT
            ========================================================= */}

            <label style={labelStyle}>
              Technologies (Multi Select)
            </label>

            <Controller
              control={control}
              name="technologies"
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={techOptions}
                  placeholder="Select Technologies"
                />
              )}
            />

            <p style={errorStyle}>
              {
                errors.technologies
                  ?.message
              }
            </p>



            {/* =========================================================
               useFieldArray
            ========================================================= */}

            <label style={labelStyle}>
              Skills (useFieldArray)
            </label>

            {
              fields.map(
                (field, index) => (

                <div
                  key={field.id}
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "10px",
                    alignItems: "center",
                  }}
                >

                  <input
                    {...register(
                      `skills.${index}.value`
                    )}
                    placeholder="Enter Skill"
                    style={inputStyle}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      remove(index)
                    }
                    style={{
                      padding: "10px",
                    }}
                  >
                    Remove
                  </button>

                </div>
              ))
            }

            <button
              type="button"
              onClick={() =>
                append({ value: "" })
              }
              style={buttonStyle}
            >
              Add Skill
            </button>



            {/* =========================================================
               SUBMIT
            ========================================================= */}

            <br />

            <button
              type="submit"
              style={buttonStyle}
            >
              Submit Form
            </button>

          </form>
        </div>



        {/* =========================================================
           CONCEPTS
        ========================================================= */}

        <div style={cardStyle}>

          <h2>
            🔥 Important Concepts
          </h2>



          <div style={infoStyle}>
            <h3>register()</h3>

            <p>
              Connects normal inputs
              to React Hook Form.
            </p>

            <pre style={codeStyle}>
{`<input
 {...register("email")}
/>`}
            </pre>
          </div>



          <div style={infoStyle}>
            <h3>Controller</h3>

            <p>
              Used for controlled
              components like:
            </p>

            <ul>
              <li>React Select</li>
              <li>MUI</li>
              <li>Ant Design</li>
            </ul>

            <pre style={codeStyle}>
{`<Controller
 control={control}
 name="gender"
 render={({ field }) => (
   <Select {...field} />
 )}
/>`}
            </pre>
          </div>



          <div style={infoStyle}>
            <h3>useFieldArray()</h3>

            <p>
              Creates dynamic fields.
            </p>

            <pre style={codeStyle}>
{`append({ value:"" })

remove(index)`}
            </pre>

            <pre style={codeStyle}>
{`FIELDS FLOW

append()
   ↓
fields updated
   ↓
UI re-render`}
            </pre>
          </div>



          <div style={infoStyle}>
            <h3>Zod Schema</h3>

            <p>
              Schema-based validation.
            </p>

            <pre style={codeStyle}>
{`const schema = z.object({
 email: z.string().email()
})`}
            </pre>
          </div>



          <div style={infoStyle}>
            <h3>Validation Flow</h3>

            <pre style={codeStyle}>
{`Input Change
     ↓
register()
     ↓
React Hook Form
     ↓
zodResolver
     ↓
Zod Schema
     ↓
errors object`}
            </pre>
          </div>

        </div>
      </div>



      {/* =========================================================
         LIVE FORM VALUES
      ========================================================= */}

      <div
        style={{
          ...cardStyle,
          marginTop: "40px",
        }}
      >

        <h2>
          👀 watch() Live Values
        </h2>

        <pre style={codeStyle}>
{JSON.stringify(
  watch(),
  null,
  2
)}
        </pre>

      </div>



      {/* =========================================================
         INTERVIEW QUESTIONS
      ========================================================= */}

      <div
        style={{
          ...cardStyle,
          marginTop: "40px",
        }}
      >

        <h2>
          🎯 Interview Questions
        </h2>

        <div style={gridStyle}>


          <div style={infoStyle}>
            <h3>
              Why React Hook Form fast?
            </h3>

            <pre style={codeStyle}>
{`Formik
   ↓
controlled inputs
   ↓
more re-renders

React Hook Form
   ↓
uncontrolled refs
   ↓
less re-renders`}
            </pre>
          </div>



          <div style={infoStyle}>
            <h3>
              When to use Controller?
            </h3>

            <pre style={codeStyle}>
{`Use Controller for:

- React Select
- MUI
- Ant Design
- Third-party inputs`}
            </pre>
          </div>



          <div style={infoStyle}>
            <h3>
              useFieldArray Purpose
            </h3>

            <pre style={codeStyle}>
{`Dynamic Forms

- skills
- phone numbers
- addresses
- education list`}
            </pre>
          </div>



          <div style={infoStyle}>
            <h3>
              zodResolver Purpose
            </h3>

            <pre style={codeStyle}>
{`React Hook Form
        ↓
zodResolver
        ↓
Zod Validation`}
            </pre>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ReactHookFormFullDemo;