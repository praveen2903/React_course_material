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
  ApolloLink,
} from "@apollo/client";

import {
  ApolloProvider,
  useQuery,
  useMutation,
  useLazyQuery,
} from "@apollo/client/react";

/* =========================================================
   APOLLO CLIENT SETUP
   ========================================================= */

const httpLink = new HttpLink({
  uri: "https://graphqlzero.almansi.me/api",
});

/* =========================================================
   AUTH LINK
   =========================================================

Adds JWT token automatically.

Used in:
- Authentication
- Protected APIs
- Role based access

========================================================= */

const authLink = new ApolloLink(
  (operation, forward) => {

    const token =
      localStorage.getItem("token");

    operation.setContext({
      headers: {
        authorization: token
          ? `Bearer ${token}`
          : "",
      },
    });

    return forward(operation);
  }
);

const client = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: new InMemoryCache({

    /* =====================================================
       TYPE POLICIES
       ===================================================== */

    typePolicies: {
      Query: {
        fields: {

          posts: {
            merge(existing = [], incoming) {
              return [...incoming];
            },
          },

        },
      },
    },
  }),
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
   GRAPHQL FRAGMENTS
   ========================================================= */

const USER_FIELDS = gql`
  fragment UserFields on User {
    id
    name
    username
    email
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
      <GraphQLArchitecture />
      <GraphQLCoreConcepts />
      <GraphQLSecurity />
      <FetchPolicies />
      <UsersQueryDemo />
      <LazyQueryDemo />
      <MutationDemo />
      <OptimisticUIDemo />
      <ApolloCachingDemo />
      <PaginationDemo />
      <GraphQLPerformance />
      <GraphQLVsRest />
      <AdvancedGraphQLTopics />
      <InterviewTraps />
      <GraphQLSecurityConcepts/>
    </ApolloProvider>
  );
}

/* =========================================================
   THEORY SECTION
   ========================================================= */

function GraphQLNotes() {
  return (
    <div style={{...styles.card, textAlign:'left'}}>

      <h1>
        🚀 GraphQL + Apollo Complete Notes
      </h1>

      <code>
        <pre>
{`/* =========================================================
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

========================================================= */`}
        </pre>
      </code>

      <h3>✅ What is GraphQL?</h3>

      <p>
        GraphQL is a query language for APIs.
      </p>

      <p>
        Client requests ONLY required data.
      </p>

      <div style={styles.box}>
        <h4>REST Example</h4>

        <pre>
{`GET /users`}
        </pre>

        REST usually returns FULL data.
      </div>

      <div style={styles.box}>
        <h4>GraphQL Example</h4>

        <pre>
{`query {
  users {
    id
    name
  }
}`}
        </pre>

        Returns ONLY requested fields.
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
        <li>Normalized cache</li>
        <li>Polling</li>
        <li>Retry logic</li>
        <li>Type policies</li>
      </ul>

      <h3>🔥 GraphQL Request Lifecycle</h3>

      <pre style={styles.code}>
{`Client Query
    ↓
Apollo Client
    ↓
GraphQL Server
    ↓
Resolvers
    ↓
Database
    ↓
Apollo Cache
    ↓
UI Update`}
      </pre>
    </div>
  );
}

/* =========================================================
   GRAPHQL ARCHITECTURE
   ========================================================= */

function GraphQLArchitecture() {
  return (
    <div style={styles.card}>
      <h2>🏗️ GraphQL Architecture</h2>

      <pre style={styles.code}>
{`Frontend
   ↓
Apollo Client
   ↓
GraphQL Gateway
   ↓
Resolvers
   ↓
Database`}
      </pre>

      <h3>Resolvers</h3>

      <pre style={styles.code}>
{`const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      return await User.create(args);
    },
  },
};`}
      </pre>

      <h3>Schema Example</h3>

      <pre style={styles.code}>
{`type User {
  id: ID!
  name: String!
  email: String!
}

type Query {
  users: [User]
}`}
      </pre>
    </div>
  );
}

/* =========================================================
   CORE CONCEPTS
   ========================================================= */

function GraphQLCoreConcepts() {
  return (
    <div style={styles.card}>
      <h2>🧠 Core GraphQL Concepts</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Concept</th>
            <th style={styles.th}>Meaning</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td style={styles.td}>Query</td>
            <td style={styles.td}>Fetch data</td>
          </tr>

          <tr>
            <td style={styles.td}>Mutation</td>
            <td style={styles.td}>Create/Update/Delete</td>
          </tr>

          <tr>
            <td style={styles.td}>Subscription</td>
            <td style={styles.td}>Realtime updates</td>
          </tr>

          <tr>
            <td style={styles.td}>Resolver</td>
            <td style={styles.td}>Function handling query</td>
          </tr>

          <tr>
            <td style={styles.td}>Schema</td>
            <td style={styles.td}>API structure definition</td>
          </tr>

          <tr>
            <td style={styles.td}>Fragment</td>
            <td style={styles.td}>Reusable query fields</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

/* =========================================================
   SECURITY
   ========================================================= */

function GraphQLSecurity() {
  return (
    <div style={styles.card}>

      <h2>🔐 GraphQL Security</h2>

      <ul>
        <li>JWT Authentication</li>
        <li>Authorization</li>
        <li>Rate Limiting</li>
        <li>Depth Limiting</li>
        <li>Disable introspection in production</li>
        <li>Persisted queries</li>
        <li>Input validation</li>
        <li>Avoid deep nested queries</li>
      </ul>

      <h3>JWT Context Example</h3>

      <pre style={styles.code}>
{`const server = new ApolloServer({
  context: ({ req }) => {

    const token =
      req.headers.authorization;

    const user =
      verifyToken(token);

    return { user };
  },
});`}
      </pre>

      <h3>N+1 Query Problem</h3>

      <pre style={styles.code}>
{`Problem:
--------
1 query for users
100 queries for posts

Total:
101 queries

Solution:
---------
DataLoader`}
      </pre>

      <h3>Depth Limiting</h3>

      <pre style={styles.code}>
{`query {
  users {
    posts {
      comments {
        users {
          posts {
            comments {
              ...
`}
      </pre>

      <p>
        Attackers can overload the server using deeply nested queries.
      </p>
    </div>
  );
}

/* =========================================================
   FETCH POLICIES
   ========================================================= */

function FetchPolicies() {
  return (
    <div style={styles.card}>

      <h2>⚡ Apollo Fetch Policies</h2>

      <pre style={styles.code}>
{`const { data } = useQuery(
  GET_USERS,
  {
    fetchPolicy: "cache-first",
  }
);`}
      </pre>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Policy</th>
            <th style={styles.th}>Behavior</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td style={styles.td}>cache-first</td>
            <td style={styles.td}>Uses cache first</td>
          </tr>

          <tr>
            <td style={styles.td}>network-only</td>
            <td style={styles.td}>Always API call</td>
          </tr>

          <tr>
            <td style={styles.td}>cache-only</td>
            <td style={styles.td}>Only cache</td>
          </tr>

          <tr>
            <td style={styles.td}>no-cache</td>
            <td style={styles.td}>Never stores cache</td>
          </tr>

          <tr>
            <td style={styles.td}>cache-and-network</td>
            <td style={styles.td}>Cache + refetch</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

/* =========================================================
   useQuery DEMO
   ========================================================= */

function UsersQueryDemo() {

  const {
    loading,
    error,
    data,
    refetch,
  } = useQuery(GET_USERS, {

    /* =====================================================
       FETCH POLICY
       ===================================================== */

    fetchPolicy: "cache-first",

    /* =====================================================
       POLLING
       ===================================================== */

    pollInterval: 10000,
  });

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
  data,
  refetch,
} = useQuery(GET_USERS)`}
      </pre>
    </div>
  );
}

/* =========================================================
   useLazyQuery DEMO
   ========================================================= */

function LazyQueryDemo() {

  const [userId, setUserId] =
    useState("1");

  const [search, setSearch] =
    useState("");

  const [
    getUser,
    {
      loading,
      data,
      error,
    },
  ] = useLazyQuery(GET_USER);

  /* =======================================================
     DEBOUNCED SEARCH
     ======================================================= */

  useEffect(() => {

    const timer = setTimeout(() => {

      if (search) {
        console.log(search);
      }

    }, 500);

    return () => clearTimeout(timer);

  }, [search]);

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

  const [
    createPost,
    {
      loading,
      data,
      error,
    },
  ] = useMutation(CREATE_POST, {

    /* =====================================================
       CACHE UPDATE
       ===================================================== */

    update(cache, { data }) {

      console.log(cache);
      console.log(data);
    },
  });

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

          /* ================================================
             OPTIMISTIC UI
             ================================================ */

          optimisticResponse: {
            createPost: {
              id: "temp-id",
              title,
              body,
              __typename: "Post",
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
    </div>
  );
}

/* =========================================================
   OPTIMISTIC UI
   ========================================================= */

function OptimisticUIDemo() {
  return (
    <div style={styles.card}>

      <h2>⚡ Optimistic UI</h2>

      <p>
        UI updates immediately BEFORE server response.
      </p>

      <pre style={styles.code}>
{`optimisticResponse: {
  createPost: {
    id: "temp-id",
    title,
    body,
    __typename: "Post",
  },
}`}
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

      <h3>🔥 Normalized Cache</h3>

      <pre style={styles.code}>
{`User:1
User:2
Post:1
Post:2`}
      </pre>

      <h3>🔥 Cache Eviction</h3>

      <pre style={styles.code}>
{`cache.evict({
  id: "Post:1",
});

cache.gc();`}
      </pre>

      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.posts?.data.map((post) => (
          <div
            key={post.id}
            style={styles.post}
          >
            <h4>{post.title}</h4>

            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

/* =========================================================
   PAGINATION
   ========================================================= */

function PaginationDemo() {
  return (
    <div style={styles.card}>

      <h2>📄 GraphQL Pagination</h2>

      <pre style={styles.code}>
{`query GetPosts($page: Int!) {
  posts(
    options: {
      paginate: {
        page: $page
        limit: 5
      }
    }
  ) {
    data {
      id
      title
    }
  }
}`}
      </pre>

      <h3>fetchMore</h3>

      <pre style={styles.code}>
{`fetchMore({
  variables: {
    page: 2,
  },
});`}
      </pre>
    </div>
  );
}

/* =========================================================
   PERFORMANCE
   ========================================================= */

function GraphQLPerformance() {
  return (
    <div style={styles.card}>

      <h2>⚡ GraphQL Performance</h2>

      <ul>
        <li>Use fragments</li>
        <li>Use pagination</li>
        <li>Avoid deep nesting</li>
        <li>Use DataLoader</li>
        <li>Enable caching</li>
        <li>Persisted queries</li>
        <li>Batch requests</li>
        <li>Reduce unnecessary fields</li>
      </ul>

      <h3>Persisted Queries</h3>

      <pre style={styles.code}>
{`Client sends query hash
instead of full query.`}
      </pre>
    </div>
  );
}

/* =========================================================
   ADVANCED TOPICS
   ========================================================= */

function AdvancedGraphQLTopics() {
  return (
    <div style={styles.card}>

      <h2>🚀 Advanced GraphQL Topics</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Topic</th>
            <th style={styles.th}>Description</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td style={styles.td}>Subscriptions</td>
            <td style={styles.td}>Realtime data updates</td>
          </tr>

          <tr>
            <td style={styles.td}>Federation</td>
            <td style={styles.td}>Microservice GraphQL architecture</td>
          </tr>

          <tr>
            <td style={styles.td}>SSR</td>
            <td style={styles.td}>Server side rendering support</td>
          </tr>

          <tr>
            <td style={styles.td}>Batching</td>
            <td style={styles.td}>Combine requests together</td>
          </tr>

          <tr>
            <td style={styles.td}>Polling</td>
            <td style={styles.td}>Auto refetch every interval</td>
          </tr>

          <tr>
            <td style={styles.td}>Optimistic UI</td>
            <td style={styles.td}>Instant UI updates</td>
          </tr>

        </tbody>
      </table>

      <h3>Realtime Subscription Example</h3>

      <pre style={styles.code}>
{`subscription {
  messageAdded {
    id
    text
  }
}`}
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
            <th style={styles.th}>Feature</th>
            <th style={styles.th}>REST</th>
            <th style={styles.th}>GraphQL</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={styles.td}>Endpoint</td>
            <td style={styles.td}>Multiple</td>
            <td style={styles.td}>Single</td>
          </tr>

          <tr>
            <td style={styles.td}>Over-fetching</td>
            <td style={styles.td}>Common</td>
            <td style={styles.td}>Avoided</td>
          </tr>

          <tr>
            <td style={styles.td}>Caching</td>
            <td style={styles.td}>Manual</td>
            <td style={styles.td}>Apollo handles</td>
          </tr>

          <tr>
            <td style={styles.td}>Flexibility</td>
            <td style={styles.td}>Limited</td>
            <td style={styles.td}>High</td>
          </tr>

          <tr>
            <td style={styles.td}>Realtime</td>
            <td style={styles.td}>Complex</td>
            <td style={styles.td}>Subscriptions</td>
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
        <li>❌ Forgetting loading state</li>
        <li>❌ Forgetting error handling</li>
        <li>❌ Refetch causing loops</li>
        <li>❌ Over-fetching nested data</li>
        <li>❌ Cache stale issues</li>
        <li>❌ No pagination</li>
        <li>❌ Deep nested queries</li>
        <li>❌ No rate limiting</li>
        <li>❌ Exposing introspection</li>
        <li>❌ Wrong dependency arrays</li>
        <li>❌ Updating cache incorrectly</li>
      </ul>

      <h3>💼 Real World Use Cases</h3>

      <ul>
        <li>Dashboards</li>
        <li>Social media apps</li>
        <li>E-commerce</li>
        <li>Analytics apps</li>
        <li>Admin panels</li>
        <li>Chat applications</li>
        <li>Live sports apps</li>
      </ul>

      <h3>🔥 Most Important Interview Question</h3>

      <pre style={styles.code}>
{`Q) Why can GraphQL become dangerous?

A)
Because clients can create
VERY expensive nested queries.

Can overload database.

Requires:
-----------
Depth limiting
Rate limiting
Caching
Complexity analysis`}
      </pre>

      <h3>⚡ Important Hooks</h3>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Hook</th>
            <th style={styles.th}>Usage</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={styles.td}>useQuery</td>
            <td style={styles.td}>Auto fetch</td>
          </tr>

          <tr>
            <td style={styles.td}>useLazyQuery</td>
            <td style={styles.td}>Manual fetch</td>
          </tr>

          <tr>
            <td style={styles.td}>useMutation</td>
            <td style={styles.td}>Create/update/delete</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}
function GraphQLSecurityConcepts() {
  return (
    <div style={styles.card}>

      <h2>
        🔐 GraphQL Security Concepts
      </h2>

      <ul>
        <li>
          ❌ Deep nested queries
        </li>

        <li>
          ❌ No rate limiting
        </li>

        <li>
          ❌ No authentication
        </li>

        <li>
          ❌ Exposing introspection
        </li>

        <li>
          ❌ Expensive query attacks
        </li>

        <li>
          ❌ Missing input validation
        </li>

        <li>
          ❌ No caching strategy
        </li>

        <li>
          ❌ No query complexity analysis
        </li>
      </ul>

      <h3>
        🔥 Depth Limiting
      </h3>

      <p>
        Prevents deeply nested queries
        from overloading the server.
      </p>

      <pre style={styles.code}>
{`query {
  users {
    posts {
      comments {
        users {
          posts {
            comments {
              ...
`}

      </pre>

      <p>
        Attackers can intentionally create
        VERY expensive nested queries.
      </p>

      <pre style={styles.code}>
{`import depthLimit
from "graphql-depth-limit";

const server = new ApolloServer({

  validationRules: [
    depthLimit(5),
  ],

});`}
      </pre>

      <div style={styles.warning}>
        Only 5 nested levels allowed.
      </div>

      <h3>
        🚦 Rate Limiting
      </h3>

      <p>
        Restricts how many requests
        a client can send.
      </p>

      <pre style={styles.code}>
{`import rateLimit
from "express-rate-limit";

const limiter = rateLimit({

  windowMs: 60 * 1000,

  max: 100,

});

app.use(limiter);`}
      </pre>

      <div style={styles.warning}>
        100 requests allowed per minute.
      </div>

      <h3>
        🧠 Apollo Caching
      </h3>

      <p>
        Apollo stores previously fetched data
        to reduce API calls.
      </p>

      <pre style={styles.code}>
{`const client = new ApolloClient({

  uri: "/graphql",

  cache: new InMemoryCache(),

});`}
      </pre>

      <h3>
        🔥 Fetch Policy
      </h3>

      <pre style={styles.code}>
{`useQuery(GET_USERS, {

  fetchPolicy: "cache-first",

});`}
      </pre>

      <ul>
        <li>
          cache-first → Uses cache first
        </li>

        <li>
          network-only → Always API call
        </li>

        <li>
          no-cache → Never stores cache
        </li>

        <li>
          cache-and-network → Cache + refetch
        </li>
      </ul>

      <h3>
        🔥 Cache Eviction
      </h3>

      <pre style={styles.code}>
{`cache.evict({
  id: "Post:1",
});

cache.gc();`}
      </pre>

      <h3>
        🔥 Query Complexity Analysis
      </h3>

      <p>
        Some GraphQL queries are
        MUCH more expensive than others.
      </p>

      <pre style={styles.code}>
{`query {
  users {
    posts {
      comments {
        likes
      }
    }
  }
}`}
      </pre>

      <p>
        Query complexity analysis
        calculates query cost
        and blocks dangerous queries.
      </p>

      <h3>
        🔥 Security Best Practices
      </h3>

      <ul>
        <li>✅ Use authentication</li>

        <li>✅ Use authorization</li>

        <li>✅ Add depth limiting</li>

        <li>✅ Add rate limiting</li>

        <li>✅ Validate inputs</li>

        <li>✅ Use persisted queries</li>

        <li>✅ Disable introspection in production</li>

        <li>✅ Use caching properly</li>
      </ul>

      <h3>
        💼 Real World Protection Stack
      </h3>

      <pre style={styles.code}>
{`Authentication
      +
Rate Limiting
      +
Depth Limiting
      +
Caching
      +
Complexity Analysis`}
      </pre>

      <h3>
        🔥 Most Important Interview Question
      </h3>

      <pre style={styles.code}>
{`Q) Why can GraphQL become dangerous?

A)

Because clients can create
VERY expensive nested queries.

Can overload database/server.

Requires:
-----------
Depth limiting
Rate limiting
Caching
Complexity analysis`}
      </pre>

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
    lineHeight: 1.6,
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