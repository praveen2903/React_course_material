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
import serverGraphql from "../assets/server_graphql.png"
import graphqlFullstack from "../assets/graphql_fullstack.png";
import graphqlFrontend from "../assets/graphql_frontend.jpeg";
import graphqlBackend from "../assets/graphql_backend.jpeg";


function ImageBanner() {
  const images = [
    graphqlFullstack,
    graphqlFrontend,
    graphqlBackend,
  ];
  return (
    <div style={styles.bannerContainer}>

      <h2 style={styles.bannerTitle}>
        🚀 GraphQL + Apollo Client
      </h2>

      <div style={styles.imageGrid}>
        {images.map((img, index) => (
          <div
            key={index}
            style={styles.imageCard}
          >
            <img
              src={img}
              alt="graphql"
              style={styles.bannerImage}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

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


const simpleExampleFiles = {
  frontend: [
    {
      name: "queries.js",
      path: "src/graphql/queries.js",
      description: "Frontend queries using fragments. Declares USER_FIELDS fragment and uses it in GET_USERS.",
      code: `import { gql } from "@apollo/client";

export const USER_FIELDS = gql\`
  fragment UserFields on User {
    id
    name
    age
    city
  }
\`;

export const USER_BASIC = gql\`
  fragment UserBasic on User {
    id
    name
  }
\`;

export const GET_USERS = gql\`
  \${USER_FIELDS}            -- declaring the fragment
  query GetUsers {
    users {
      ...UserFields          -- using fragment fields
    }
  }
\`;

export const GET_USER = gql\`
  \${USER_BASIC}
  query GetUser($id: ID!) {
    user(id: $id) {
      ...UserBasic
    }
  }
\`;`
    },
    {
      name: "mutations.js",
      path: "src/graphql/mutations.js",
      description: "Frontend mutations for modifying users data. Uses USER_FIELDS fragment for response query.",
      code: `import { gql } from "@apollo/client";
import { USER_FIELDS } from "./queries"; // or fragments

export const ADD_USER = gql\`
  \${USER_FIELDS}          -- declaring fragment
  mutation AddUser(
    $name: String!
    $age: Int!
    $city: String!
  ) {
    addUser(
      name: $name
      age: $age
      city: $city
    ) {
      ...UserFields       -- requesting updated fields
    }
  }
\`;

export const UPDATE_USER = gql\`
  \${USER_FIELDS}
  mutation UpdateUser(
    $id: ID!
    $city: String!
  ) {
    updateUser(
      id: $id
      city: $city
    ) {
      ...UserFields
    }
  }
\`;`
    },
    {
      name: "GraphQLExample.jsx",
      path: "src/components/GraphQLExample.jsx",
      description: "Simple client React component using useQuery and useMutation hooks to manage users state.",
      code: `import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS } from "../graphql/queries";
import { ADD_USER, UPDATE_USER } from "../graphql/mutations";

const GraphQLExample = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const { loading, error, data } = useQuery(GET_USERS);
  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: GET_USERS }]
  });
  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: GET_USERS }]
  });

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error...</h2>;

  return (
    <div>
      <h2>Users List</h2>
      {data.users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>

          <button onClick={() => updateUser({
            variables: {
              id: user.id,
              city: "Mumbai",
            },
          })}>
            Move to Mumbai
          </button>
        </div>
      ))}

      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
      <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>

      <button onClick={() => addUser({
        variables: {
          name,
          age: Number(age),
          city,
        },
      })}>
        Add User
      </button>
    </div>
  );
};

export default GraphQLExample;`
    }
  ],
  backend: [
    {
      name: "typeDefs.js",
      path: "backend/schema/typeDefs.js",
      description: "Simple Backend schema. Defines types, queries, and mutations.",
      code: `import { gql } from 'graphql-tag';

export const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    age: Int!
    city: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    usersByCity(city: String!): [User]
  }

  type Mutation {
    addUser(
      name: String!
      age: Int!
      city: String!
    ): User

    updateUser(
      id: ID!
      city: String!
    ): User

    deleteUser(
      id: ID!
    ): String
  }
\`;`
    },
    {
      name: "queryResolvers.js",
      path: "backend/resolvers/queryResolvers.js",
      description: "Query handlers fetching data from simple in-memory database array.",
      code: `import { users } from "../data/users.js";

export const queryResolvers = {
  users: () => {
    return users;
  },
  user: (_, args) => {
    return users.find((user) => user.id === args.id);
  },
  usersByCity: (_, args) => {
    return users.filter((user) => user.city === args.city);
  },
};`
    },
    {
      name: "mutationResolvers.js",
      path: "backend/resolvers/mutationResolvers.js",
      description: "Mutation handlers to add, update, or delete users inside the in-memory array.",
      code: `import { users } from "../data/users.js";

export const mutationResolvers = {
  addUser: (_, args) => {
    const newUser = {
      id: Date.now().toString(),
      name: args.name,
      age: args.age,
      city: args.city,
    };
    users.push(newUser);
    return newUser;
  },

  updateUser: (_, args) => {
    const user = users.find((u) => u.id === args.id);
    if (!user) return null;
    user.city = args.city;
    return user;
  },

  deleteUser: (_, args) => {
    const index = users.findIndex((user) => user.id === args.id);
    if (index === -1) return "User not found";
    users.splice(index, 1);   // splice(deleteIndex, deleteCount)
    return "User Deleted";
  },
};`
    },
    {
      name: "index.js",
      path: "backend/resolvers/index.js",
      description: "Combines query and mutation resolvers into a single module export.",
      code: `import { queryResolvers } from "./queryResolvers.js";
import { mutationResolvers } from "./mutationResolvers.js";

export const resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
};`
    }
  ]
};

const advancedExampleFiles = {
  frontend: [
    {
      name: "main.jsx",
      path: "src/main.jsx",
      description: "Configures HttpLink, authLink middleware (JWT attach), and merges them into ApolloClient client instances.",
      code: `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/store";

// HttpLink sets connection endpoint
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

// authLink injects authorization JWT token on every query request
const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");
  operation.setContext({
    headers: {
      authorization: token ? \`Bearer \${token}\` : "",
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </ApolloProvider>
);`
    },
    {
      name: "schemaFrontend.js",
      path: "src/graphql/schemaFrontend.js",
      description: "Complete list of Queries and Mutations definitions for products, authorization, and user profiles.",
      code: `import { gql } from "@apollo/client";

// Reusable Fragment fields
export const USER_FIELDS = gql\`
  fragment UserFields on User {
    id
    username
    email
    role
    created_at
  }
\`;

export const PRODUCT_FIELDS = gql\`
  fragment ProductFields on Product {
    id
    name
    description
    price
    category
    created_by
    created_by_username
    created_at
    updated_at
  }
\`;

export const LOGIN_MUTATION = gql\`
  \${USER_FIELDS}
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      success
      message
      accessToken
      refreshToken
      user {
        ...UserFields
      }
    }
  }
\`;

export const REGISTER_MUTATION = gql\`
  \${USER_FIELDS}
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      success
      message
      accessToken
      refreshToken
      user {
        ...UserFields
      }
    }
  }
\`;

export const REFRESH_MUTATION = gql\`
  \${USER_FIELDS}
  mutation Refresh($input: RefreshInput!) {
    refresh(input: $input) {
      success
      message
      accessToken
      refreshToken
      user {
        ...UserFields
      }
    }
  }
\`;

export const LOGOUT_MUTATION = gql\`
  mutation Logout($refreshToken: String!) {
    logout(refreshToken: $refreshToken) {
      success
      message
    }
  }
\`;

export const ME_QUERY = gql\`
  \${USER_FIELDS}
  query Me {
    me {
      success
      message
      user {
        ...UserFields
      }
    }
  }
\`;

export const PRODUCTS_QUERY = gql\`
  \${PRODUCT_FIELDS}
  query Products {
    products {
      success
      source
      products {
        ...ProductFields
      }
    }
  }
\`;

export const CREATE_PRODUCT_MUTATION = gql\`
  \${PRODUCT_FIELDS}
  mutation CreateProduct($input: ProductInput!) {
    createProduct(input: $input) {
      success
      message
      product {
        ...ProductFields
      }
    }
  }
\`;

export const UPDATE_PRODUCT_MUTATION = gql\`
  \${PRODUCT_FIELDS}
  mutation UpdateProduct($id: Int!, $input: ProductUpdateInput!) {
    updateProduct(id: $id, input: $input) {
      success
      message
      product {
        ...ProductFields
      }
    }
  }
\`;

export const DELETE_PRODUCT_MUTATION = gql\`
  mutation DeleteProduct($id: Int!) {
    deleteProduct(id: $id) {
      success
      message
      product {
        id
      }
    }
  }
\`;`
    },
    {
      name: "ProductPage.jsx",
      path: "src/components/ProductPage.jsx",
      description: "Advanced React component that calls cache-first queries and mutation hooks with automatically refetched queries.",
      code: `import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  PRODUCTS_QUERY,
  CREATE_PRODUCT_MUTATION,
  UPDATE_PRODUCT_MUTATION,
  DELETE_PRODUCT_MUTATION,
} from "./graphql/schemaFrontend";

function ProductPage() {
  const [formData, setFormData] = useState({ name: "", description: "", price: "", category: "" });
  const [editingId, setEditingId] = useState(null);

  const { data, loading, error } = useQuery(PRODUCTS_QUERY, {
    fetchPolicy: "cache-first",  // Checks cache before calling backend API
  });

  const [createProduct, { loading: createLoading }] = useMutation(CREATE_PRODUCT_MUTATION, {
    refetchQueries: [PRODUCTS_QUERY],  // Refetches queries to update caching state
  });

  const [updateProduct, { loading: updateLoading }] = useMutation(UPDATE_PRODUCT_MUTATION, {
    refetchQueries: [PRODUCTS_QUERY],
  });

  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    refetchQueries: [PRODUCTS_QUERY],
  });

  async function handleCreate() {
    try {
      await createProduct({
        variables: {
          input: {
            name: formData.name,
            description: formData.description,
            price: Number(formData.price),
            category: formData.category,
          },
        },
      });
      setFormData({ name: "", description: "", price: "", category: "" });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate() {
    try {
      await updateProduct({
        variables: {
          id: editingId,
          input: {
            name: formData.name,
            description: formData.description,
            price: Number(formData.price),
            category: formData.category,
          },
        },
      });
      setEditingId(null);
      setFormData({ name: "", description: "", price: "", category: "" });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteProduct({ variables: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Something went wrong</h2>;

  const products = data?.products?.products || [];

  return (
    <div>
      <div>
        <input placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        <input placeholder="Price" type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
        <input placeholder="Category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
        {!editingId ? (
          <button onClick={handleCreate}>{createLoading ? "Creating..." : "Create Product"}</button>
        ) : (
          <button onClick={handleUpdate}>{updateLoading ? "Updating..." : "Update Product"}</button>
        )}
      </div>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>₹ {product.price}</p>
            <p>{product.category}</p>
            <button onClick={() => {
              setEditingId(product.id);
              setFormData({
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
              });
            }}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductPage;`
    }
  ],
  backend: [
    {
      name: "server.js",
      path: "backend/server.js",
      description: "Initializes Express server, sets up custom CORS middleware, and attaches ApolloServer via expressMiddleware.",
      code: `import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./resolvers/index.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();
  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  app.listen(4000, () => {
    console.log("🚀 Server running at http://localhost:4000/graphql");
  });
}

startServer();`
    },
    {
      name: "typeDefs.js",
      path: "backend/schema/typeDefs.js",
      description: "Defines Postgres types, user authorization roles, inputs, custom responses, queries, and mutations.",
      code: `import { gql } from 'graphql-tag';

export const typeDefs = gql\`
  enum UserRole {
    user
    admin
  }

  type User {
    id: Int!
    username: String!
    email: String!
    role: UserRole!
    created_at: String
  }

  type Product {
    id: Int!
    name: String!
    description: String
    price: Float!
    category: String
    created_by: Int
    created_by_username: String
    created_at: String
    updated_at: String
  }

  type AuthResponse {
    success: Boolean!
    message: String!
    accessToken: String
    refreshToken: String
    user: User
  }

  type ProductsResponse {
    success: Boolean!
    source: String!
    products: [Product!]!
  }

  type ProductResponse {
    success: Boolean!
    message: String
    source: String
    product: Product
  }

  type SuccessResponse {
    success: Boolean!
    message: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input RefreshInput {
    refreshToken: String!
  }

  input ProductInput {
    name: String!
    description: String
    price: Float!
    category: String
  }

  input ProductUpdateInput {
    name: String
    description: String
    price: Float
    category: String
  }

  type Query {
    me: AuthResponse!
    products: ProductsResponse!
    product(id: Int!): ProductResponse!
  }

  type Mutation {
    login(input: LoginInput!): AuthResponse!
    register(input: RegisterInput!): AuthResponse!
    refresh(input: RefreshInput!): AuthResponse!
    logout(refreshToken: String!): SuccessResponse!
    createProduct(input: ProductInput!): ProductResponse!
    updateProduct(id: Int!, input: ProductUpdateInput!): ProductResponse!
    deleteProduct(id: Int!): ProductResponse!
  }
\`;`
    },
    {
      name: "resolvers.js",
      path: "backend/resolvers.js",
      description: "Extracts logged-in user context, performs password bcrypt checks, and accesses product database models.",
      code: `import bcrypt from "bcryptjs";
import { findUserByEmail, findUserById, createUser } from "../models/userModel.js";
import { getAllProducts, getProductById, getProductsByCategory, createProduct, updateProduct, deleteProduct } from "../models/productModel.js";

export const resolvers = {
  Query: {
    // ctx is the Apollo context (passes authorization headers / DB pools)
    me: async (_, __, ctx) => {
      const user = await findUserById(ctx.user.id);
      return { success: true, user };
    },
    products: async () => {
      const products = await getAllProducts();
      return { success: true, products };
    },
    product: async (_, { id }) => {
      const product = await getProductById(id);
      return { success: true, product };
    },
    productsByCategory: async (_, { category }) => {
      const products = await getProductsByCategory(category);
      return { success: true, products };
    },
  },

  Mutation: {
    register: async (_, { input }) => {
      const hashedPassword = await bcrypt.hash(input.password, 10);
      const user = await createUser(input.username, input.email, hashedPassword);
      return { success: true, user };
    },
    login: async (_, { input }) => {
      const user = await findUserByEmail(input.email);
      // login auth & token generation...
      return { success: true, user };
    },
    createProduct: async (_, { input }) => {
      const product = await createProduct(input.name, input.price, input.category);
      return { success: true, product };
    },
    updateProduct: async (_, { id, input }) => {
      const product = await updateProduct(id, input.name, input.price);
      return { success: true, product };
    },
    deleteProduct: async (_, { id }) => {
      await deleteProduct(id);
      return { success: true, message: "Deleted successfully" };
    },
  },
};`
    },
    {
      name: "Pool.js",
      path: "backend/config/Pool.js",
      description: "Establishes PostgreSQL pool configuration and runs DB initializers for tables.",
      code: `const { Pool } = require("pg");
require("dotenv").config();

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.on("connect", () => {
  console.log("✅ Connected to PostgreSQL");
});

export const initDB = async () => {
  try {
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(10) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    \`);
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        price DECIMAL(10,2) NOT NULL,
        category VARCHAR(50),
        created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    \`);
    await pool.query(\`
      CREATE TABLE IF NOT EXISTS refresh_tokens (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        token TEXT NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    \`);
  } catch (err) {
    console.error("❌ Database init error:", err.message);
    throw err;
  }
};`
    },
    {
      name: "userModel.js",
      path: "backend/models/userModel.js",
      description: "Runs SQL queries for user authentication operations against Postgres.",
      code: `import { pool } from "../config/pool.js";

export const findUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
  return result.rows[0];
};

export const findUserById = async (id) => {
  const result = await pool.query('SELECT id,username,email,role FROM users WHERE id=$1', [id]);
  return result.rows[0];
};

export const createUser = async (username, email, password) => {
  const result = await pool.query(
    'INSERT INTO users(username,email,password) VALUES($1,$2,$3) RETURNING *',
    [username, email, password]
  );
  return result.rows[0];
};`
    },
    {
      name: "productModel.js",
      path: "backend/models/productModel.js",
      description: "Runs standard SQL queries for managing products (CRUD operations) in database tables.",
      code: `import { pool } from "../config/pool.js";

export const getAllProducts = async () => {
  const result = await pool.query(\`SELECT * FROM products\`);
  return result.rows;
};

export const getProductById = async (id) => {
  const result = await pool.query(\`SELECT * FROM products WHERE id=$1\`, [id]);
  return result.rows[0];
};

export const getProductsByCategory = async (category) => {
  const result = await pool.query(\`SELECT * FROM products WHERE category=$1\`, [category]);
  return result.rows;
};

export const createProduct = async (name, price, category) => {
  const result = await pool.query(
    \`INSERT INTO products(name,price,category) VALUES($1,$2,$3) RETURNING *\`,
    [name, price, category]
  );
  return result.rows[0];
};

export const updateProduct = async (id, name, price) => {
  const result = await pool.query(
    \`UPDATE products SET name=$1, price=$2 WHERE id=$3 RETURNING *\`,
    [name, price, id]
  );
  return result.rows[0];
};

export const deleteProduct = async (id) => {
  const result = await pool.query(\`DELETE FROM products WHERE id=$1 RETURNING *\`, [id]);
  return result.rows[0];
};`
    },
    {
      name: "tokenModel.js",
      path: "backend/models/tokenModel.js",
      description: "Interacts with refresh_tokens table to store or delete JWT refresh tokens.",
      code: `import { pool } from "../config/pool.js";

export const saveRefreshToken = async (userId, token, expiresAt) => {
  await pool.query(
    \`INSERT INTO refresh_tokens(user_id,token,expires_at) VALUES($1,$2,$3)\`,
    [userId, token, expiresAt]
  );
};

export const deleteRefreshToken = async (token) => {
  await pool.query(\`DELETE FROM refresh_tokens WHERE token=$1\`, [token]);
};`
    }
  ]
};

const LineNumberedCode = ({ code, path, description, onCopy, isCopied }) => {
  const lines = code.split('\n');
  return (
    <div style={{
      background: "#161b22",
      borderRadius: "12px",
      border: "1px solid #30363d",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      // height: "100%",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
    }}>
      {/* Code Header */}
      <div style={{
        background: "#0d1117",
        padding: "10px 16px",
        borderBottom: "1px solid #30363d",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "#ffd166", fontSize: "12px", fontFamily: "monospace", fontWeight: "bold" }}>{path}</span>
        </div>
        <button 
          onClick={onCopy}
          style={{
            background: isCopied ? "#238636" : "#21262d",
            border: "1px solid #30363d",
            color: "white",
            padding: "4px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.2s"
          }}
        >
          {isCopied ? "✓ Copied!" : "📋 Copy"}
        </button>
      </div>

      {/* Code description */}
      {description && (
        <div style={{
          background: "#0d1117",
          padding: "10px 16px",
          borderBottom: "1px solid #30363d",
          fontSize: "12px",
          color: "#8b949e",
          lineHeight: "1.5"
        }}>
          💡 <strong>Role:</strong> {description}
        </div>
      )}

      {/* Code Body */}
      <div style={{
        padding: "16px 0",
        overflowY: "auto",
        maxHeight: "550px",
        background: "#161b22",
        fontFamily: 'Consolas, Monaco, "Courier New", Courier, monospace',
        textAlign: "left"
      }}>
        {lines.map((line, idx) => {
          let lineContentColor = "#e6edf3";
          const trimmed = line.trim();
          if (trimmed.startsWith("//") || trimmed.startsWith("/*") || trimmed.startsWith("*") || trimmed.startsWith("--")) {
            lineContentColor = "#8b949e";
          }
          return (
            <div key={idx} style={{ 
              display: 'flex', 
              lineHeight: '1.6',
              fontSize: '13px'
            }}>
              <span style={{
                width: '40px',
                color: '#8b949e',
                userSelect: 'none',
                textAlign: 'right',
                paddingRight: '12px',
                borderRight: '1px solid #30363d',
                marginRight: '12px',
                opacity: 0.6
              }}>{idx + 1}</span>
              <span style={{ 
                whiteSpace: 'pre', 
                color: lineContentColor
              }}>{line}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function GraphQLDemoApp() {
  const [activeTab, setActiveTab] = React.useState("simple"); // "simple" | "advanced" | "overview"
  
  // Example 1 Simple File Explorer States
  const [selectedSimpleFrontend, setSelectedSimpleFrontend] = React.useState("queries.js");
  const [selectedSimpleBackend, setSelectedSimpleBackend] = React.useState("typeDefs.js");
  
  // Example 2 Advanced File Explorer States
  const [selectedAdvancedFrontend, setSelectedAdvancedFrontend] = React.useState("schemaFrontend.js");
  const [selectedAdvancedBackend, setSelectedAdvancedBackend] = React.useState("typeDefs.js");

  const [copiedStates, setCopiedStates] = React.useState({});

  const handleCopy = (side, code) => {
    navigator.clipboard.writeText(code);
    setCopiedStates(prev => ({ ...prev, [side]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [side]: false }));
    }, 2000);
  };

  return (
    <ApolloProvider client={client}>

      <div style={{textAlign:'left', background: '#161b22', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #30363d'}}>
        <h4 style={{margin: '0 0 10px 0', color: '#58a6ff'}}>💡 Things I confuse: how to configure the count of queries and mutations?</h4>
        <p style={{margin: '0 0 8px 0', color: '#c9d1d9', fontSize: '14px'}}>It's developer who writes the schema get types like DTOs and feed to type query or type Mutations such that you could implement them in the resolvers by using model to talk to DB.</p>
        <p style={{margin: '0 0 8px 0', color: '#c9d1d9', fontSize: '14px'}}>Same things told in image below and then below to it given complete implementation of backend and frontend to it.</p>
        <p style={{margin: 0, color: '#ffd166', fontSize: '14px'}}>Naming convention also need to be followed which allows the query and mutation for industrial standard way. like get All: <strong>products</strong>, get-one: <strong>product</strong>, get-by-category: <strong>productCategory</strong></p>
      </div>
      
      <div style={{textAlign: 'center', marginBottom: '30px'}}>
        <img src={serverGraphql} alt="hi" style={{maxWidth: '100%', borderRadius: '12px', border: '1px solid #30363d', boxShadow: '0 8px 24px rgba(0,0,0,0.3)'}}/>
      </div>

<div
  style={{
    width: "100%",
    background: "#0d1117",
    padding: "30px",
    color: "white",
    boxSizing: "border-box",
    fontFamily: "system-ui, -apple-system, sans-serif",
    borderRadius: "12px",
    border: "1px solid #30363d",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    marginBottom: "40px"
  }}
>
  {/* TITLE & HEADER */}
  <div style={{ borderBottom: "1px solid #30363d", paddingBottom: "20px", marginBottom: "30px", textAlign: 'left' }}>
    <h2 style={{ fontSize: "28px", color: "#58a6ff", margin: "0 0 10px 0", display: "flex", alignItems: "center", gap: "10px" }}>
      ⚡ Full-Stack GraphQL Architecture Explorer
    </h2>
    <p style={{ color: "#8b949e", margin: 0, fontSize: "15px" }}>
      An interactive guide separating basic in-memory implementations from production-grade PostgreSQL + JWT setups.
    </p>
  </div>

  {/* TAB CONTROLS */}
  <div style={{ display: "flex", gap: "12px", marginBottom: "30px", borderBottom: "1px solid #30363d", paddingBottom: "15px", flexWrap: "wrap", justifyContent: 'flex-start' }}>
    <button
      onClick={() => setActiveTab("simple")}
      style={{
        background: activeTab === "simple" ? "#238636" : "#21262d",
        border: `1px solid \${activeTab === "simple" ? "#2ea043" : "#30363d"}`,
        color: "white",
        padding: "10px 20px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: activeTab === "simple" ? "0 0 10px rgba(35,134,54,0.5)" : "none"
      }}
    >
      🟢 Example 1: In-Memory Simple CRUD
    </button>
    
    <button
      onClick={() => setActiveTab("advanced")}
      style={{
        background: activeTab === "advanced" ? "#1f6feb" : "#21262d",
        border: `1px solid \${activeTab === "advanced" ? "#388bfd" : "#30363d"}`,
        color: "white",
        padding: "10px 20px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: activeTab === "advanced" ? "0 0 10px rgba(31,111,235,0.5)" : "none"
      }}
    >
      🔵 Example 2: Postgres & JWT Auth CRUD
    </button>

    <button
      onClick={() => setActiveTab("overview")}
      style={{
        background: activeTab === "overview" ? "#8957e5" : "#21262d",
        border: `1px solid \${activeTab === "overview" ? "#bc8cff" : "#30363d"}`,
        color: "white",
        padding: "10px 20px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: activeTab === "overview" ? "0 0 10px rgba(137,87,229,0.5)" : "none"
      }}
    >
      📋 General Architecture & Setup
    </button>
  </div>

  {/* TAB CONTENT: SIMPLE */}
  {activeTab === "simple" && (
    <div>
      <div style={{
        background: "#161b22",
        padding: "20px",
        borderRadius: "8px",
        borderLeft: "4px solid #238636",
        marginBottom: "24px",
        textAlign: 'left'
      }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#56d364" }}>🟢 In-Memory Simple CRUD (User & City)</h3>
        <p style={{ margin: 0, color: "#c9d1d9", fontSize: "14px", lineHeight: "1.5" }}>
          This example showcases a minimal setup where data is stored in a mutable Javascript array. It is perfect for 
          learning GraphQL basics (Query & Mutation, variables, fragments) without having to set up databases or security rules.
        </p>
      </div>

      {/* Interactive Map */}
      <h4 style={{ margin: "0 0 12px 0", color: "#8b949e", fontSize: "12px", textTransform: "uppercase", textAlign: 'left' }}>Interactive Architecture Map (Click boxes to view files)</h4>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#161b22',
        padding: '24px 16px',
        borderRadius: '12px',
        border: '1px solid #30363d',
        marginBottom: '30px',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div 
          onClick={() => setSelectedSimpleFrontend("GraphQLExample.jsx")}
          style={{
            background: selectedSimpleFrontend === 'GraphQLExample.jsx' ? '#23863622' : '#21262d',
            border: `2px solid \${selectedSimpleFrontend === 'GraphQLExample.jsx' ? '#56d364' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: selectedSimpleFrontend === 'GraphQLExample.jsx' ? '#56d364' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: selectedSimpleFrontend === 'GraphQLExample.jsx' ? '0 0 10px rgba(86,211,100,0.2)' : 'none'
          }}
        >
          💻 React UI
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>GraphQLExample.jsx</div>
        </div>
        
        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          onClick={() => setSelectedSimpleFrontend("queries.js")}
          style={{
            background: (selectedSimpleFrontend === 'queries.js' || selectedSimpleFrontend === 'mutations.js') ? '#23863622' : '#21262d',
            border: `2px solid \${(selectedSimpleFrontend === 'queries.js' || selectedSimpleFrontend === 'mutations.js') ? '#56d364' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: (selectedSimpleFrontend === 'queries.js' || selectedSimpleFrontend === 'mutations.js') ? '#56d364' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: (selectedSimpleFrontend === 'queries.js' || selectedSimpleFrontend === 'mutations.js') ? '0 0 10px rgba(86,211,100,0.2)' : 'none'
          }}
        >
          📜 GQL Definitions
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>queries.js / mutations.js</div>
        </div>

        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          style={{
            background: '#21262d',
            border: '2px solid #30363d',
            padding: '12px 18px',
            borderRadius: '8px',
            color: '#8b949e',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px'
          }}
        >
          📡 HttpLink
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>Apollo Client</div>
        </div>

        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          onClick={() => setSelectedSimpleBackend("typeDefs.js")}
          style={{
            background: selectedSimpleBackend === 'typeDefs.js' ? '#23863622' : '#21262d',
            border: `2px solid \${selectedSimpleBackend === 'typeDefs.js' ? '#56d364' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: selectedSimpleBackend === 'typeDefs.js' ? '#56d364' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: selectedSimpleBackend === 'typeDefs.js' ? '0 0 10px rgba(86,211,100,0.2)' : 'none'
          }}
        >
          🧩 typeDefs Schema
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>typeDefs.js</div>
        </div>

        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          onClick={() => setSelectedSimpleBackend("queryResolvers.js")}
          style={{
            background: (selectedSimpleBackend === 'queryResolvers.js' || selectedSimpleBackend === 'mutationResolvers.js' || selectedSimpleBackend === 'index.js') ? '#23863622' : '#21262d',
            border: `2px solid \${(selectedSimpleBackend === 'queryResolvers.js' || selectedSimpleBackend === 'mutationResolvers.js' || selectedSimpleBackend === 'index.js') ? '#56d364' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: (selectedSimpleBackend === 'queryResolvers.js' || selectedSimpleBackend === 'mutationResolvers.js' || selectedSimpleBackend === 'index.js') ? '#56d364' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: (selectedSimpleBackend === 'queryResolvers.js' || selectedSimpleBackend === 'mutationResolvers.js' || selectedSimpleBackend === 'index.js') ? '0 0 10px rgba(86,211,100,0.2)' : 'none'
          }}
        >
          ⚙️ Resolvers
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>query/mutation Resolvers</div>
        </div>

        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          style={{
            background: '#21262d',
            border: '2px solid #238636',
            padding: '12px 18px',
            borderRadius: '8px',
            color: '#56d364',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: '0 0 10px rgba(86,211,100,0.1)'
          }}
        >
          💾 Array
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>users in-memory data</div>
        </div>
      </div>

      {/* Side-by-Side Workspace */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        
        {/* Frontend Column */}
        <div>
          <h4 style={{ color: "#58a6ff", borderBottom: "2px solid #58a6ff", paddingBottom: "8px", margin: "0 0 15px 0", textAlign: 'left' }}>🌍 FRONTEND (CLIENT)</h4>
          <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap", justifyContent: 'flex-start' }}>
            {simpleExampleFiles.frontend.map(f => (
              <button
                key={f.name}
                onClick={() => setSelectedSimpleFrontend(f.name)}
                style={{
                  background: selectedSimpleFrontend === f.name ? "#21262d" : "transparent",
                  border: `1px solid \${selectedSimpleFrontend === f.name ? "#30363d" : "transparent"}`,
                  color: selectedSimpleFrontend === f.name ? "#58a6ff" : "#8b949e",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: selectedSimpleFrontend === f.name ? "bold" : "normal",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                📄 {f.name}
              </button>
            ))}
          </div>
          
          {(() => {
            const file = simpleExampleFiles.frontend.find(f => f.name === selectedSimpleFrontend);
            return (
              <LineNumberedCode 
                code={file.code} 
                path={file.path} 
                description={file.description}
                onCopy={() => handleCopy(`simple_fe_\${file.name}`, file.code)}
                isCopied={copiedStates[`simple_fe_\${file.name}`]}
              />
            );
          })()}
        </div>

        {/* Backend Column */}
        <div>
          <h4 style={{ color: "#56d364", borderBottom: "2px solid #56d364", paddingBottom: "8px", margin: "0 0 15px 0", textAlign: 'left' }}>🖥️ BACKEND (SERVER)</h4>
          <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap", justifyContent: 'flex-start' }}>
            {simpleExampleFiles.backend.map(f => (
              <button
                key={f.name}
                onClick={() => setSelectedSimpleBackend(f.name)}
                style={{
                  background: selectedSimpleBackend === f.name ? "#21262d" : "transparent",
                  border: `1px solid \${selectedSimpleBackend === f.name ? "#30363d" : "transparent"}`,
                  color: selectedSimpleBackend === f.name ? "#56d364" : "#8b949e",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: selectedSimpleBackend === f.name ? "bold" : "normal",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                📄 {f.name}
              </button>
            ))}
          </div>

          {(() => {
            const file = simpleExampleFiles.backend.find(f => f.name === selectedSimpleBackend);
            return (
              <LineNumberedCode 
                code={file.code} 
                path={file.path} 
                description={file.description}
                onCopy={() => handleCopy(`simple_be_\${file.name}`, file.code)}
                isCopied={copiedStates[`simple_be_\${file.name}`]}
              />
            );
          })()}
        </div>

      </div>
    </div>
  )}

  {/* TAB CONTENT: ADVANCED */}
  {activeTab === "advanced" && (
    <div>
      <div style={{
        background: "#161b22",
        padding: "20px",
        borderRadius: "8px",
        borderLeft: "4px solid #1f6feb",
        marginBottom: "24px",
        textAlign: 'left'
      }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#58a6ff" }}>🔵 Postgres & JWT Auth CRUD (Products & Users)</h3>
        <p style={{ margin: 0, color: "#c9d1d9", fontSize: "14px", lineHeight: "1.5" }}>
          This example displays an industrial-standard setup. Features include **Express Apollo server initialization**, 
          database connection pooling via **pg**, modularized **database SQL query models**, token management, JWT validation **context middleware**, 
          frontend request interception via **authLink**, and normalized **Apollo Client caching policies**.
        </p>
      </div>

      {/* Interactive Map */}
      <h4 style={{ margin: "0 0 12px 0", color: "#8b949e", fontSize: "12px", textTransform: "uppercase", textAlign: 'left' }}>Interactive Architecture Map (Click boxes to view files)</h4>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#161b22',
        padding: '24px 16px',
        borderRadius: '12px',
        border: '1px solid #30363d',
        marginBottom: '30px',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div 
          onClick={() => setSelectedAdvancedFrontend("ProductPage.jsx")}
          style={{
            background: selectedAdvancedFrontend === 'ProductPage.jsx' ? '#1f6feb22' : '#21262d',
            border: `2px solid \${selectedAdvancedFrontend === 'ProductPage.jsx' ? '#58a6ff' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: selectedAdvancedFrontend === 'ProductPage.jsx' ? '#58a6ff' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: selectedAdvancedFrontend === 'ProductPage.jsx' ? '0 0 10px rgba(88,166,255,0.2)' : 'none'
          }}
        >
          💻 React Component
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>ProductPage.jsx</div>
        </div>
        
        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          onClick={() => setSelectedAdvancedFrontend("schemaFrontend.js")}
          style={{
            background: selectedAdvancedFrontend === 'schemaFrontend.js' ? '#1f6feb22' : '#21262d',
            border: `2px solid \${selectedAdvancedFrontend === 'schemaFrontend.js' ? '#58a6ff' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: selectedAdvancedFrontend === 'schemaFrontend.js' ? '#58a6ff' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: selectedAdvancedFrontend === 'schemaFrontend.js' ? '0 0 10px rgba(88,166,255,0.2)' : 'none'
          }}
        >
          📜 GQL definitions
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>schemaFrontend.js</div>
        </div>

        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          onClick={() => setSelectedAdvancedFrontend("main.jsx")}
          style={{
            background: selectedAdvancedFrontend === 'main.jsx' ? '#1f6feb22' : '#21262d',
            border: `2px solid \${selectedAdvancedFrontend === 'main.jsx' ? '#58a6ff' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: selectedAdvancedFrontend === 'main.jsx' ? '#58a6ff' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: selectedAdvancedFrontend === 'main.jsx' ? '0 0 10px rgba(88,166,255,0.2)' : 'none'
          }}
        >
          🛡️ AuthLink (JWT)
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>main.jsx</div>
        </div>

        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          onClick={() => setSelectedAdvancedBackend("server.js")}
          style={{
            background: selectedAdvancedBackend === 'server.js' ? '#1f6feb22' : '#21262d',
            border: `2px solid \${selectedAdvancedBackend === 'server.js' ? '#58a6ff' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: selectedAdvancedBackend === 'server.js' ? '#58a6ff' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: selectedAdvancedBackend === 'server.js' ? '0 0 10px rgba(88,166,255,0.2)' : 'none'
          }}
        >
          🌐 Apollo Server
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>server.js (Express)</div>
        </div>

        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          onClick={() => setSelectedAdvancedBackend("typeDefs.js")}
          style={{
            background: selectedAdvancedBackend === 'typeDefs.js' ? '#1f6feb22' : '#21262d',
            border: `2px solid \${selectedAdvancedBackend === 'typeDefs.js' ? '#58a6ff' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: selectedAdvancedBackend === 'typeDefs.js' ? '#58a6ff' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: selectedAdvancedBackend === 'typeDefs.js' ? '0 0 10px rgba(88,166,255,0.2)' : 'none'
          }}
        >
          🧩 GQL Schema
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>typeDefs.js</div>
        </div>

        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          onClick={() => setSelectedAdvancedBackend("resolvers.js")}
          style={{
            background: selectedAdvancedBackend === 'resolvers.js' ? '#1f6feb22' : '#21262d',
            border: `2px solid \${selectedAdvancedBackend === 'resolvers.js' ? '#58a6ff' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: selectedAdvancedBackend === 'resolvers.js' ? '#58a6ff' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: selectedAdvancedBackend === 'resolvers.js' ? '0 0 10px rgba(88,166,255,0.2)' : 'none'
          }}
        >
          ⚙️ Resolvers
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>resolvers.js</div>
        </div>

        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          onClick={() => setSelectedAdvancedBackend("productModel.js")}
          style={{
            background: (selectedAdvancedBackend === 'productModel.js' || selectedAdvancedBackend === 'userModel.js' || selectedAdvancedBackend === 'tokenModel.js') ? '#1f6feb22' : '#21262d',
            border: `2px solid \${(selectedAdvancedBackend === 'productModel.js' || selectedAdvancedBackend === 'userModel.js' || selectedAdvancedBackend === 'tokenModel.js') ? '#58a6ff' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: (selectedAdvancedBackend === 'productModel.js' || selectedAdvancedBackend === 'userModel.js' || selectedAdvancedBackend === 'tokenModel.js') ? '#58a6ff' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: (selectedAdvancedBackend === 'productModel.js' || selectedAdvancedBackend === 'userModel.js' || selectedAdvancedBackend === 'tokenModel.js') ? '0 0 10px rgba(88,166,255,0.2)' : 'none'
          }}
        >
          📦 Database Models
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>models/User,Product...</div>
        </div>

        <div style={{color: '#8b949e', fontSize: '18px'}}>➔</div>

        <div 
          onClick={() => setSelectedAdvancedBackend("Pool.js")}
          style={{
            background: selectedAdvancedBackend === 'Pool.js' ? '#1f6feb22' : '#21262d',
            border: `2px solid \${selectedAdvancedBackend === 'Pool.js' ? '#58a6ff' : '#30363d'}`,
            padding: '12px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: selectedAdvancedBackend === 'Pool.js' ? '#58a6ff' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            minWidth: '140px',
            boxShadow: selectedAdvancedBackend === 'Pool.js' ? '0 0 10px rgba(88,166,255,0.2)' : 'none'
          }}
        >
          🛢️ Postgres Pool
          <div style={{fontSize: '10px', color: '#8b949e', fontWeight: 'normal', marginTop: '4px'}}>Pool.js</div>
        </div>
      </div>

      {/* Side-by-Side Workspace */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        
        {/* Frontend Column */}
        <div>
          <h4 style={{ color: "#58a6ff", borderBottom: "2px solid #58a6ff", paddingBottom: "8px", margin: "0 0 15px 0", textAlign: 'left' }}>🌍 FRONTEND (CLIENT)</h4>
          <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap", justifyContent: 'flex-start' }}>
            {advancedExampleFiles.frontend.map(f => (
              <button
                key={f.name}
                onClick={() => setSelectedAdvancedFrontend(f.name)}
                style={{
                  background: selectedAdvancedFrontend === f.name ? "#21262d" : "transparent",
                  border: `1px solid \${selectedAdvancedFrontend === f.name ? "#30363d" : "transparent"}`,
                  color: selectedAdvancedFrontend === f.name ? "#58a6ff" : "#8b949e",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: selectedAdvancedFrontend === f.name ? "bold" : "normal",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                📄 {f.name}
              </button>
            ))}
          </div>
          
          {(() => {
            const file = advancedExampleFiles.frontend.find(f => f.name === selectedAdvancedFrontend);
            return (
              <LineNumberedCode 
                code={file.code} 
                path={file.path} 
                description={file.description}
                onCopy={() => handleCopy(`adv_fe_\${file.name}`, file.code)}
                isCopied={copiedStates[`adv_fe_\${file.name}`]}
              />
            );
          })()}
        </div>

        {/* Backend Column */}
        <div>
          <h4 style={{ color: "#388bfd", borderBottom: "2px solid #388bfd", paddingBottom: "8px", margin: "0 0 15px 0", textAlign: 'left' }}>🖥️ BACKEND (SERVER)</h4>
          <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap", justifyContent: 'flex-start' }}>
            {advancedExampleFiles.backend.map(f => (
              <button
                key={f.name}
                onClick={() => setSelectedAdvancedBackend(f.name)}
                style={{
                  background: selectedAdvancedBackend === f.name ? "#21262d" : "transparent",
                  border: `1px solid \${selectedAdvancedBackend === f.name ? "#30363d" : "transparent"}`,
                  color: selectedAdvancedBackend === f.name ? "#388bfd" : "#8b949e",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: selectedAdvancedBackend === f.name ? "bold" : "normal",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                📄 {f.name}
              </button>
            ))}
          </div>

          {(() => {
            const file = advancedExampleFiles.backend.find(f => f.name === selectedAdvancedBackend);
            return (
              <LineNumberedCode 
                code={file.code} 
                path={file.path} 
                description={file.description}
                onCopy={() => handleCopy(`adv_be_\${file.name}`, file.code)}
                isCopied={copiedStates[`adv_be_\${file.name}`]}
              />
            );
          })()}
        </div>

      </div>
    </div>
  )}

  {/* TAB CONTENT: OVERVIEW & THEORY */}
  {activeTab === "overview" && (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", textAlign: "left" }}>
      
      {/* Left Column: Request Flow & Directory Structure */}
      <div>
        <h3 style={{ color: "#bc8cff", borderBottom: "1px solid #bc8cff", paddingBottom: "8px", marginTop: 0 }}>📂 Industrial Project Directory Structure</h3>
        <p style={{ fontSize: "14px", color: "#8b949e", lineHeight: "1.5" }}>
          In clean architecture, frontend and backend codes are modularized. Resolvers shouldn't contain raw SQL statements. 
          Use DB model queries for clean encapsulation.
        </p>
        <pre style={{
          background: "#161b22",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid #30363d",
          color: "#d6f6ff",
          fontFamily: "monospace",
          fontSize: "13px",
          lineHeight: "1.6",
          overflowX: "auto"
        }}>
{`FULLSTACK-GRAPHQL
├── backend
│   ├── server.js               (server bootstrap & middleware)
│   ├── schema/
│   │   └── typeDefs.js         (queries/mutations validations)
│   ├── resolvers/
│   │   ├── queryResolvers.js
│   │   ├── mutationResolvers.js
│   │   └── index.js            (combines query/mutation hooks)
│   └── models/                 (repository DB SQL query actions)
│       ├── UserModel.js
│       ├── ProductModel.js
│       └── AuthModel.js
└── frontend
    └── src
        ├── main.jsx            (Apollo Client + authLink setup)
        ├── graphql/
        │   ├── queries.js      (fragments & queries definition)
        │   └── mutations.js    (mutations definitions)
        └── components/
            └── ProductPage.jsx (React page calling hook queries)`}
        </pre>

        <h3 style={{ color: "#bc8cff", borderBottom: "1px solid #bc8cff", paddingBottom: "8px", marginTop: "30px" }}>⚡ Client-Server Request Format</h3>
        <p style={{ fontSize: "14px", color: "#8b949e", lineHeight: "1.5" }}>
          How Apollo transfers query requests to backend single endpoints under the hood (HTTP POST with json raw data):
        </p>
        <pre style={{
          background: "#161b22",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid #30363d",
          color: "#fff1c1",
          fontFamily: "monospace",
          fontSize: "13px",
          lineHeight: "1.6",
          overflowX: "auto"
        }}>
{`// GET SINGLE USER (HTTP POST BODY payload)
{
  "query": "query GetUser($id: ID!) {
      user(id: $id) {
        id
        name
        age
      }
    }",
  "variables": {
    "id": "1"
  }
}

// REGISTER MUTATION WITH PARAMETER DTO INPUT
{
  "query": "mutation Register($input: RegisterInput!) {
      register(input: $input) {
        success
        message
      }
    }",
  "variables": {
    "input": {
      "username": "Sai",
      "email": "sai@gmail.com",
      "password": "123"
    }
  }
}`}
        </pre>
      </div>

      {/* Right Column: Execution Order Flowchart & Key Notes */}
      <div>
        <h3 style={{ color: "#bc8cff", borderBottom: "1px solid #bc8cff", paddingBottom: "8px", marginTop: 0 }}>🔄 Request-Response Execution Flow</h3>
        <pre style={{
          background: "#161b22",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid #30363d",
          color: "#00ff90",
          fontFamily: "monospace",
          fontSize: "13px",
          lineHeight: "1.8",
          overflowX: "auto"
        }}>
{`USER CLICK SUBMIT IN UI
           ↓
useState Stores Form Data
           ↓
useMutation Hooks Triggered
           ↓
Apollo Client Intercepts (authLink adds headers)
           ↓
httpLink Packs Request & Sends HTTP POST
           ↓
Apollo Express Server Receives Request
           ↓
typeDefs Validate Against Schema definition
           ↓
Resolvers Query Model Database Methods
           ↓
Postgres / Array database gets mutated
           ↓
Resolvers Returns results matching typeDefs
           ↓
Apollo Client Receives payload & Updates Cache
           ↓
useQuery Detects Caches & Updates State
           ↓
React Re-renders UI DOM`}
        </pre>

        <h3 style={{ color: "#bc8cff", borderBottom: "1px solid #bc8cff", paddingBottom: "8px", marginTop: "30px" }}>📖 Key Notes & Naming Conventions</h3>
        <div style={{ fontSize: "14px", color: "#c9d1d9", lineHeight: "1.6" }}>
          <ul>
            <li>
              <strong>Queries vs Mutations:</strong> Query maps to HTTP GET (read-only operations), Mutation maps to HTTP POST/PUT/DELETE (write operations).
            </li>
            <li>
              <strong>Enum types:</strong> Perfect for locking values (e.g. <code>UserRole</code> can only be <code>user</code> or <code>admin</code>).
            </li>
            <li>
              <strong>Context (ctx):</strong> Apollo Server context is a shared request object containing request headers, authenticated user data (JWT decoded), DB client pools, and loader caches.
            </li>
            <li>
              <strong>Standard Naming Conventions:</strong>
              <ul>
                <li>Get lists: <code>products</code>, <code>users</code></li>
                <li>Get single details: <code>product(id: Int!)</code></li>
                <li>Filter lists: <code>productsByCategory(category: String!)</code></li>
                <li>Mutate: <code>createProduct</code>, <code>updateProduct</code>, <code>deleteProduct</code></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )}

</div>


      <ImageBanner/>
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


function GraphQLNotes() {
  return (
    <div style={{...styles.card, textAlign:'left'}}>

      <h2>
        🚀 GraphQL + Apollo Complete Notes
      </h2>

      <code style={{textAlign:'left', minWidth: '500px'}}>
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
    borderRadius: "12px",
    background: "#ffffff",
    color:'black',
    boxShadow:"0 4px 12px rgba(0,0,0,0.08)",
    fontFamily: "Arial",
    textAlign: 'left',
    width: '100%'
  },

  box: {
    padding: "15px",
    background: "#f4f4f4",
    color: 'black',
    borderRadius: "10px",
    marginBottom: "15px",
  },

  code: {
    background: "#f4f4f4",
    color: 'black',
    padding: "15px",
    borderRadius: "10px",
    overflowX: "auto",
    marginTop: "15px",
    color:'black',
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
    color: 'black',
    borderRadius: "10px",
    marginTop: "10px",
  },

  warning: {
    padding: "15px",
    background: "#fff3cd",
    color: 'black',
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
    color: 'black',
    borderRadius: "10px",
    background: "#f8f8f8",
  },

  preview: {
    marginTop: "20px",
    padding: "20px",
    background: "#f4f4f4",
    color: 'black',
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
    background: "#f4f4f4",color: 'black',
    textAlign: "left",
  },

  td: {
    border: "1px solid #ccc",
    color: 'black',
    padding: "12px",
  },
};