import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} from "@apollo/client";

import {
  ApolloProvider,
  useQuery,
  useMutation,
  useLazyQuery,
} from "@apollo/client/react";


const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://graphqlzero.almansi.me/api",
    }),
  cache: new InMemoryCache(),
});

/* =========================================================
   GRAPHQL QUERIES
   ========================================================= */

const GET_USERS = gql`
  query GetUsers {
    users(options: { paginate: { page: 1, limit: 5 } }) {
      data {
        id
        name
        username
        email
      }
    }
  }
`;

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      username
      email
      phone
      website
    }
  }
`;

const GET_POSTS = gql`
  query GetPosts {
    posts(options: { paginate: { page: 1, limit: 5 } }) {
      data {
        id
        title
        body
      }
    }
  }
`;

/* =========================================================
   GRAPHQL MUTATION
   ========================================================= */

const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

/* =========================================================
   MAIN APP
   ========================================================= */

export default function GraphQLDemoApp() {
  return (
    <ApolloProvider client={client}>
      <GraphQLNotes />
      <UsersQueryDemo />
      <LazyQueryDemo />
      <MutationDemo />
      <ApolloCachingDemo />
      <GraphQLVsRest />
      <InterviewTraps />
    </ApolloProvider>
  );
}

/* =========================================================
   THEORY SECTION
   ========================================================= */

function GraphQLNotes() {
  return (
    <div style={{...styles.card, textAlign:'left'}}>
      <h1>🚀 GraphQL + Apollo Complete Notes</h1>

      <code>
        <pre>
            {
`/* =========================================================
   WHY GRAPHQL?
   =========================================================

REST Problem
-------------
GET /users
GET /posts
GET /comments

Multiple requests
Over-fetching
Under-fetching


GraphQL Solution
----------------
Single endpoint

/graphql

Client asks ONLY required data

query {
  users {
    id
    name
  }
}

========================================================= */
`
            }
        </pre>
      </code>

      <h3>✅ What is GraphQL?</h3>

      <p>
        GraphQL is a query language for APIs.
      </p>

      <p>
        Client requests ONLY needed data.
      </p>

      <div style={styles.box}>
        REST:
        <pre>
{`GET /users`}
        </pre>

        Returns FULL data.
      </div>

      <div style={styles.box}>
        GraphQL:
        <pre>
{`query {
  users {
    id
    name
  }
}`}
        </pre>

        Returns ONLY id + name.
      </div>

      <h3>🔥 Why Apollo Client?</h3>

      <ul>
        <li>Automatic caching</li>
        <li>Loading states</li>
        <li>Error handling</li>
        <li>Mutations</li>
        <li>Pagination</li>
        <li>Optimistic updates</li>
        <li>Refetching</li>
      </ul>
    </div>
  );
}

/* =========================================================
   useQuery DEMO
   ========================================================= */

function UsersQueryDemo() {

  /* =======================================================
     useQuery
     =======================================================

  Automatically runs query on mount

  Returns:
  ---------
  loading
  error
  data
  refetch

  ======================================================= */

  const {
    loading,
    error,
    data,
    refetch,
  } = useQuery(GET_USERS);

  if (loading) {
    return (
      <div style={styles.loading}>
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.error}>
        Error loading users
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <h2>✅ useQuery Example</h2>

      <p>
        useQuery automatically fetches data.
      </p>

      <button onClick={() => refetch()}>
        Refetch Users
      </button>

      <div style={styles.grid}>
        {data.users.data.map((user) => (
          <div
            key={user.id}
            style={styles.userCard}
          >
            <h3>{user.name}</h3>

            <p>
              @{user.username}
            </p>

            <p>{user.email}</p>
          </div>
        ))}
      </div>

      <pre style={styles.code}>
{`const {
  loading,
  error,
  data
} = useQuery(GET_USERS)`}
      </pre>
    </div>
  );
}

/* =========================================================
   useLazyQuery DEMO
   ========================================================= */

function LazyQueryDemo() {

  /* =======================================================
     useLazyQuery
     =======================================================

  Query does NOT run automatically

  Runs manually

  Best for:
  ----------
  Search
  Button click fetch
  Modals
  Conditional fetch

  ======================================================= */

  const [userId, setUserId] =
    useState("1");

  const [
    getUser,
    {
      loading,
      data,
      error,
    },
  ] = useLazyQuery(GET_USER);

  return (
    <div style={styles.card}>
      <h2>⚡ useLazyQuery Example</h2>

      <input
        value={userId}
        onChange={(e) =>
          setUserId(e.target.value)
        }
        placeholder="Enter user id"
        style={styles.input}
      />

      <button
        onClick={() =>
          getUser({
            variables: {
              id: userId,
            },
          })
        }
      >
        Fetch User
      </button>

      {loading && (
        <p>Loading user...</p>
      )}

      {error && (
        <p>Error fetching user</p>
      )}

      {data?.user && (
        <div style={styles.preview}>
          <h3>{data.user.name}</h3>

          <p>{data.user.email}</p>

          <p>{data.user.phone}</p>

          <p>{data.user.website}</p>
        </div>
      )}

      <pre style={styles.code}>
{`const [getUser, result]
= useLazyQuery(GET_USER)`}
      </pre>
    </div>
  );
}

/* =========================================================
   useMutation DEMO
   ========================================================= */

function MutationDemo() {

  const [title, setTitle] =
    useState("");

  const [body, setBody] =
    useState("");

  /* =======================================================
     useMutation
     =======================================================

  Used for:
  ----------
  POST
  PUT
  DELETE

  Returns mutation function

  ======================================================= */

  const [
    createPost,
    {
      loading,
      data,
      error,
    },
  ] = useMutation(CREATE_POST);

  const handleSubmit =
    async () => {
      try {

        await createPost({
          variables: {
            input: {
              title,
              body,
              userId: 1,
            },
          },
        });

        alert("Post Created");

        setTitle("");
        setBody("");

      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div style={styles.card}>
      <h2>🔥 useMutation Example</h2>

      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Post title"
        style={styles.input}
      />

      <textarea
        value={body}
        onChange={(e) =>
          setBody(e.target.value)
        }
        placeholder="Post body"
        style={styles.textarea}
      />

      <button
        onClick={handleSubmit}
      >
        Create Post
      </button>

      {loading && (
        <p>Creating...</p>
      )}

      {error && (
        <p>Error creating post</p>
      )}

      {data && (
        <div style={styles.success}>
          <h3>
            Post Created Successfully
          </h3>

          <p>{data.createPost.title}</p>
        </div>
      )}

      <pre style={styles.code}>
{`const [createPost] =
useMutation(CREATE_POST)`}
      </pre>
    </div>
  );
}

/* =========================================================
   APOLLO CACHE
   ========================================================= */

function ApolloCachingDemo() {

  const {
    data,
    loading,
  } = useQuery(GET_POSTS);

  return (
    <div style={styles.card}>
      <h2>🧠 Apollo Cache</h2>

      <p>
        Apollo automatically caches queries.
      </p>

      <div style={styles.warning}>
        Second request may NOT hit API again.
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        data.posts.data.map((post) => (
          <div
            key={post.id}
            style={styles.post}
          >
            <h4>{post.title}</h4>

            <p>{post.body}</p>
          </div>
        ))
      )}

      <pre style={styles.code}>
{`cache: new InMemoryCache()`}
      </pre>
    </div>
  );
}

/* =========================================================
   GRAPHQL VS REST
   ========================================================= */

function GraphQLVsRest() {
  return (
    <div style={styles.card}>
      <h2>⚔️ GraphQL vs REST</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>
              Feature
            </th>

            <th style={styles.th}>
              REST
            </th>

            <th style={styles.th}>
              GraphQL
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={styles.td}>
              Endpoint
            </td>

            <td style={styles.td}>
              Multiple
            </td>

            <td style={styles.td}>
              Single
            </td>
          </tr>

          <tr>
            <td style={styles.td}>
              Data Fetch
            </td>

            <td style={styles.td}>
              Fixed
            </td>

            <td style={styles.td}>
              Flexible
            </td>
          </tr>

          <tr>
            <td style={styles.td}>
              Over-fetching
            </td>

            <td style={styles.td}>
              Common
            </td>

            <td style={styles.td}>
              Avoided
            </td>
          </tr>

          <tr>
            <td style={styles.td}>
              Caching
            </td>

            <td style={styles.td}>
              Manual
            </td>

            <td style={styles.td}>
              Apollo handles
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* =========================================================
   INTERVIEW TRAPS
   ========================================================= */

function InterviewTraps() {
  return (
    <div style={styles.card}>
      <h2>
        🔥 GraphQL Interview Traps
      </h2>

      <ul>
        <li>
          ❌ Forgetting loading state
        </li>

        <li>
          ❌ Forgetting error handling
        </li>

        <li>
          ❌ Refetch causing loops
        </li>

        <li>
          ❌ Over-fetching nested data
        </li>

        <li>
          ❌ Cache stale issues
        </li>

        <li>
          ❌ Wrong dependency arrays
        </li>

        <li>
          ❌ Updating cache incorrectly
        </li>
      </ul>

      <h3>
        💼 Real World Use Cases
      </h3>

      <ul>
        <li>Dashboards</li>

        <li>Social media apps</li>

        <li>E-commerce</li>

        <li>Analytics apps</li>

        <li>Admin panels</li>
      </ul>

      <h3>
        ⚡ Important Hooks
      </h3>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>
              Hook
            </th>

            <th style={styles.th}>
              Usage
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={styles.td}>
              useQuery
            </td>

            <td style={styles.td}>
              Auto fetch
            </td>
          </tr>

          <tr>
            <td style={styles.td}>
              useLazyQuery
            </td>

            <td style={styles.td}>
              Manual fetch
            </td>
          </tr>

          <tr>
            <td style={styles.td}>
              useMutation
            </td>

            <td style={styles.td}>
              Create/update/delete
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* =========================================================
   STYLES
   ========================================================= */

const styles = {
  card: {
    padding: "25px",
    marginBottom: "30px",
    borderRadius: "14px",
    background: "#ffffff",
    boxShadow:
      "0 4px 12px rgba(0,0,0,0.08)",
    fontFamily: "Arial",
    textAlign: 'left',
    width: '100%'
  },

  box: {
    padding: "15px",
    background: "#f4f4f4",
    borderRadius: "10px",
    marginBottom: "15px",
  },

  code: {
    background: "#f4f4f4",
    padding: "15px",
    borderRadius: "10px",
    overflowX: "auto",
    marginTop: "15px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  textarea: {
    width: "100%",
    minHeight: "100px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },

  loading: {
    padding: "20px",
    background: "#fff3cd",
    borderRadius: "10px",
  },

  error: {
    padding: "20px",
    background: "#ffd6d6",
    borderRadius: "10px",
  },

  success: {
    padding: "20px",
    background: "#d4edda",
    borderRadius: "10px",
    marginTop: "10px",
  },

  warning: {
    padding: "15px",
    background: "#fff3cd",
    borderRadius: "10px",
    marginBottom: "15px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "15px",
    marginTop: "20px",
  },

  userCard: {
    padding: "15px",
    borderRadius: "10px",
    background: "#f8f8f8",
  },

  preview: {
    marginTop: "20px",
    padding: "20px",
    background: "#f4f4f4",
    borderRadius: "10px",
  },

  post: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },

  th: {
    border: "1px solid #ccc",
    padding: "12px",
    background: "#f4f4f4",
    textAlign: "left",
  },

  td: {
    border: "1px solid #ccc",
    padding: "12px",
  },
};
