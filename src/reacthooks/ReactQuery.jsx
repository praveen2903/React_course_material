import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";


/* ========================================================= */
/* 🔥 CREATE QUERY CLIENT */
/* ========================================================= */

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 1,
      gcTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});


/* ========================================================= */
/* 🔥 API FETCH FUNCTION */
/* ========================================================= */

const fetchUsers = async () => {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Failed fetching users");
  }

  return response.json();
};


/* ========================================================= */
/* 🔥 API POST FUNCTION */
/* ========================================================= */

const addUser = async (newUser) => {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }
  );

  if (!response.ok) {
    throw new Error("Failed adding user");
  }

  return response.json();
};


/* ========================================================= */
/* 🔥 MAIN USERS COMPONENT */
/* ========================================================= */

function UsersList() {

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const mutation = useMutation({
    mutationFn: addUser,

    /*
    =========================================================
    🔥 onSuccess
    =========================================================

    Runs after successful mutation
    */

    onSuccess: () => {

      /*
      invalidateQueries
      ------------------
      Refetch query again

      Very common interview question
      */

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });


  /* ======================================================= */
  /* 🔥 HANDLE ADD USER */
  /* ======================================================= */

  const handleAddUser = () => {

    mutation.mutate({
      name: "Sai Praveen",
      email: "sai@gmail.com",
    });
  };


  /* ======================================================= */
  /* 🔥 LOADING UI */
  /* ======================================================= */

  if (isLoading) {
    return (
      <div style={loadingStyle}>
        Loading users...
      </div>
    );
  }


  /* ======================================================= */
  /* 🔥 ERROR UI */
  /* ======================================================= */

  if (isError) {
    return (
      <div style={errorStyle}>
        {error.message}
      </div>
    );
  }


  return (
    <div style={{...containerStyle, textAlign:'left'}}>

      <h1>🔥 React Query Complete Demo</h1>

      <div style={cardStyle}>

        <h2>✅ Query States</h2>

        <ul>
          <li>
            <strong>isLoading:</strong>{" "}
            {String(isLoading)}
          </li>

          <li>
            <strong>isFetching:</strong>{" "}
            {String(isFetching)}
          </li>

          <li>
            <strong>isError:</strong>{" "}
            {String(isError)}
          </li>
        </ul>

      </div>

      <div style={cardStyle}>

        <h2>✅ Users List</h2>

        {data?.map((user) => (
          <div key={user.id} style={userCardStyle}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}

      </div>


      <div style={cardStyle}>

        <h2>✅ Manual Refetch</h2>

        <button
          style={buttonStyle}
          onClick={refetch}
        >
          Refetch Users
        </button>

      </div>


      {/* =================================================== */}
      {/* 🔥 MUTATION */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>✅ useMutation</h2>

        <button
          style={buttonStyle}
          onClick={handleAddUser}
          disabled={mutation.isPending}
        >
          {mutation.isPending
            ? "Adding User..."
            : "Add User"}
        </button>

        {mutation.isSuccess && (
          <p style={{ color: "green" }}>
            User Added Successfully
          </p>
        )}

        {mutation.isError && (
          <p style={{ color: "red" }}>
            Failed Adding User
          </p>
        )}

      </div>


      {/* =================================================== */}
      {/* 🔥 IMPORTANT CONCEPTS */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>🔥 Important Interview Concepts</h2>

        <pre style={codeStyle}>
{`
this used for GraphQL as it provides useQuery and caching methods this kills fetchign by useEffect

Mandatory such this could be global give it like redux store, context provider global state
    <QueryClientProvider client={queryClient}>

      <UsersList />

    </QueryClientProvider>
  ===========================================================
  🔥 useMutation
  ===========================================================

  Used for:
  ----------
  POST
  PUT
  PATCH
  DELETE
  */
  ===========================================================
  🔥 useQueryClient
  ===========================================================

  Used to manually interact with cache
  */
  ===========================================================
  🔥 useQuery
  ===========================================================

  queryKey
  ----------
  Unique identifier for cache

  queryFn
  --------
  API fetch function

  React Query automatically manages:
  -----------------------------------
  ✅ loading
  ✅ errors
  ✅ caching
  ✅ refetching
  ✅ retries
  */

===========================================================
🔥 REACT QUERY / TANSTACK QUERY COMPLETE GUIDE
===========================================================

npm install @tanstack/react-query
WHY REACT QUERY?
----------------
❌ Avoid manual useEffect fetching
❌ Avoid repetitive loading/error states
❌ Avoid duplicate API calls

✅ Automatic caching
✅ Background refetching
✅ Retry failed requests
✅ Pagination support
✅ Infinite scroll support
✅ Devtools support
✅ Mutations (POST/PUT/DELETE)
✅ Optimistic updates
✅ Request deduplication

MAIN HOOKS
------------
✅ useQuery      -> GET requests
✅ useMutation   -> POST/PUT/DELETE
✅ useQueryClient -> cache control

IMPORTANT TERMS
----------------
queryKey
→ unique cache key

queryFn
→ async API function

staleTime
→ how long data stays fresh

cacheTime / gcTime
→ how long cache remains unused

invalidateQueries
→ refetch query manually

queryKey
-----------
Unique cache identifier

queryFn
---------
Async API function

staleTime
-----------
How long data stays fresh


gcTime
--------
How long cache stays unused

invalidateQueries()
--------------------
Refetch query manually

isLoading
-----------
First loading

isFetching
------------
Background refetch loading

useMutation
-------------
POST / PUT / DELETE

React Query replaces:
----------------------
❌ useEffect fetching
❌ manual cache handling
❌ repetitive loading logic`}
        </pre>

      </div>


      {/* =================================================== */}
      {/* 🔥 FLOW DIAGRAM */}
      {/* =================================================== */}

      <div style={cardStyle}>

        <h2>🔥 React Query Flow</h2>

        <pre style={codeStyle}>
{`Component Render
       ↓
useQuery Runs
       ↓
Checks Cache
       ↓
Fresh Data Exists?
   ↓          ↓
 YES         NO
 ↓            ↓
Use Cache    Fetch API
                 ↓
            Store In Cache
                 ↓
             Re-render UI`}
        </pre>

      </div>

    </div>
  );
}


/* ========================================================= */
/* 🔥 APP WRAPPER */
/* ========================================================= */

export default function ReactQueryCompleteGuide() {

  return (

    /*
    ==========================================================
    🔥 QueryClientProvider

    Makes React Query available globally
    ==========================================================
    */

    <QueryClientProvider client={queryClient}>

      <UsersList />

    </QueryClientProvider>
  );
}


/* ========================================================= */
/* 🔥 STYLES */
/* ========================================================= */

const containerStyle = {
  padding: "30px",
  maxWidth: "1100px",
  margin: "0 auto",
  fontFamily: "sans-serif",
  background: "#f4f7fb",
  minHeight: "100vh",
};

const cardStyle = {
  background: "white",
  padding: "24px",
  borderRadius: "16px",
  marginBottom: "24px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const userCardStyle = {
  padding: "14px",
  borderRadius: "10px",
  background: "#eef2ff",
  marginBottom: "12px",
};

const buttonStyle = {
  padding: "12px 18px",
  border: "none",
  borderRadius: "10px",
  background: "#4f46e5",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

const codeStyle = {
  background: "#111827",
  color: "#00ff90",
  padding: "18px",
  borderRadius: "10px",
  overflowX: "auto",
  whiteSpace: "pre-wrap",
  lineHeight: "1.8",
};

const loadingStyle = {
  padding: "40px",
  textAlign: "center",
  fontSize: "24px",
};

const errorStyle = {
  padding: "40px",
  textAlign: "center",
  color: "red",
  fontSize: "22px",
};