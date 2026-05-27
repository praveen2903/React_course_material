import React from "react";

import jwtImg from "../assets/jwt.jpeg";
import redisImg from "../assets/jwt_token_redis.jpeg";

function ImageBanner() {
  const images = [jwtImg, redisImg];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #333",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img
            src={img}
            alt="jwt"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
    background: "#f3f4f6",
    fontFamily: "Arial",
    lineHeight: "1.7",
    textAlign: "left",
  },

  section: {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    marginBottom: "30px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  title: {
    color: "#111827",
    marginBottom: "15px",
  },

  subTitle: {
    color: "#2563eb",
    marginBottom: "12px",
  },

  code: {
    background: "#111827",
    color: "#d1fae5",
    padding: "18px",
    borderRadius: "10px",
    overflowX: "auto",
    fontSize: "13px",
    marginTop: "15px",
    whiteSpace: "pre-wrap",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(450px,1fr))",
    gap: "20px",
  },
};

const JwtTokens = () => {
  return (
    <>
    <div style={styles.page}>
      <h3 style={styles.title}>
        🔐 JWT (Access Tokens + Refresh Tokens) + HTTPOnly Cookies (CSRF) + Redis (caching) + PostgreSQL(what is pool and how connect with pgsqlserver)
      </h3>
      {/* ================================================= */}
      {/* FLOW */}
      {/* ================================================= */}

<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)'}}>
        <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🚀 Authentication Flow
        </h2>

        <pre style={styles.code}>
{`JWT- JSON Web Tokens used to authenticate user transmits the information with signing keys

User Login
   ↓
Frontend sends email/password
   ↓
Backend verifies user
   ↓
bcrypt.compare(password)
   ↓
JWT Access Token Created
   ↓
Refresh Token Created
   ↓
Refresh Token stored in DB
   ↓
Tokens sent as HTTPOnly Cookies
   ↓
Frontend sends cookies automatically
   ↓
Backend verifies JWT
   ↓
Protected Route Access
`}
        </pre>
      </section>
<section style ={styles.section}>
  <pre style={styles.code}>
  {`// ============================================
// Redis Cache Connection
// ============================================
 Redis is an in-memory data store used for CACHING.

 WHY USE REDIS?
 - Database queries are slow (disk I/O)
 - Redis stores data in RAM = super fast reads
 - We cache frequently accessed data (like product lists)
 - When data changes, we INVALIDATE (delete) the cache
   so next request fetches fresh data from DB

 FLOW:
 1. Request comes in for products
 2. Check Redis: "Do we have cached products?"
    - YES → Return cached data (fast!)
    - NO  → Query PostgreSQL, store result in Redis, return data
 3. When products are added/updated/deleted → delete cache
    so next request gets fresh data
 ============================================
const Redis = require("ioredis");
require("dotenv").config();

// ============================================
// Create Redis Client
// ============================================
// We use lazyConnect so app does not crash
// if Redis server is temporarily unavailable
// ============================================

const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,

  maxRetriesPerRequest: 3,
  enableReadyCheck: true,
  lazyConnect: true,

  retryStrategy: (times) => {
    if (times > 3) {
      console.log("❌ Redis connection failed after 3 retries");
      return null; // stop retrying
    }

    const delay = Math.min(times * 200, 2000);

    console.log(\`🔄 Retrying Redis connection in \${delay}ms\`);

    return delay;
  },
});

// ============================================
// Redis Events
// ============================================

redis.on("connect", () => {
  console.log("✅ Connected to Redis cache");
});

redis.on("ready", () => {
  console.log("🚀 Redis is ready to accept commands");
});

redis.on("error", (err) => {
  console.error("⚠️ Redis error (app will work without cache):",err.message);
});

redis.on("close", () => {
  console.log("🔌 Redis connection closed");
});

redis.on("reconnecting", () => {
  console.log("🔄 Reconnecting to Redis...");
});

// ============================================
// OPTIONAL: Manual Redis Connection
// ============================================
// Call this during server startup
// ============================================

const connectRedis = async () => {
  try {
    if (redis.status !== "ready") {
      await redis.connect();
    }
  } catch (err) {
    console.error("❌ Failed to connect Redis:", err.message);
  }
};

// ============================================
// HELPER: Get cached data
// ============================================
// key = a string like "products:all"
//
// Returns:
// - Parsed JSON data if cache exists
// - null if cache does not exist
// ============================================

const getCache = async (key) => {
  try {
    const data = await redis.get(key);

    if (data) {
      console.log(\`📦 Cache HIT for key: \${key}\`);
      return JSON.parse(data);
    }

    console.log(\`🔍 Cache MISS for key: \${key}\`);

    return null;
  } catch (err) {
    console.error("❌ Redis getCache error:", err.message);
    return null;
  }
};

// ============================================
// HELPER: Set cache with TTL
// ============================================
// key   = cache key
// data  = JS object/array
// ttl   = expiration time in seconds
//
// EX = expire after X seconds
// ============================================

const setCache = async (key, data, ttl) => {
  try {
    const expiry = ttl || Number(process.env.REDIS_CACHE_TTL) || 300;

    await redis.set(
      key,
      JSON.stringify(data),
      "EX",
      expiry
    );

    console.log(\`💾 Cache SET for key: \${key} (TTL: \${expiry}s)\`);
  } catch (err) {
    console.error("❌ Redis setCache error:", err.message);
  }
};

// ============================================
// HELPER: Delete single cache key
// ============================================
const deleteCache = async (key) => {
  try {
    await redis.del(key);
    console.log(\`🗑️ Cache DELETED for key: \${key}\`);
  } catch (err) {
    console.error("❌ Redis deleteCache error:", err.message);
  }
};
const deleteCachePattern = async (pattern) => {
  try {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
      console.log(\`🗑️ Cache DELETED \${keys.length} keys matching: \${pattern}\`);
    } else {
      console.log(\`ℹ️ No cache keys found for pattern: \${pattern}\`);
    }
  } catch (err) {
    console.error("❌ Redis deleteCachePattern error:",err.message);
  }
}`}</pre>
</section>
</div>
      {/* ================================================= */}
      {/* INSTALL */}
      {/* ================================================= */}

<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)'}}>
        <section style={styles.section}>
        <h2 style={styles.subTitle}>
          📦 Backend Packages
        </h2>

        <pre style={styles.code}>
{`
npm install express cors dotenv
npm install jsonwebtoken bcryptjs
npm install cookie-parser
npm install pg ioredis
`}
        </pre>
      </section>

      {/* ================================================= */}
      {/* ENV */}
      {/* ================================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ⚙️ .env
        </h2>

        <pre style={styles.code}>
{`
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=jwt_demo

JWT_SECRET=mysecretkey
JWT_REFRESH_SECRET=myrefreshsecret

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
`}
        </pre>
      </section>
</div>

      {/* ================================================= */}
      {/* POSTGRES */}
      {/* ================================================= */}

<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr'}}>
        <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🐘 PostgreSQL Pool
        </h2>

        <pre style={styles.code}>
{`
import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
`}
        </pre>
      </section>

      {/* ================================================= */}
      {/* REDIS */}
      {/* ================================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ⚡ Redis Cache
        </h2>

        <pre style={styles.code}>
{`
import Redis from "ioredis";

export const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

export const getCache = async (key) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data): null;
};

export const setCache = async (key, data) => {
  await redis.set(key, JSON.stringify(data), "EX",300);
};
`}
        </pre>
      </section>
</div>

      {/* ================================================= */}
      {/* JWT */}
      {/* ================================================= */}

<div style={{display:'grid', gridTemplateColumns:"repeat(2,1fr)"}}>
      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔐 JWT Token Functions
        </h2>

        <pre style={styles.code}>
{`
import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  return jwt.sign(
    {id: user.id,role: user.role,}, 
    process.env.JWT_SECRET,
    {expiresIn: "15m",}
  );
};

export const generateRefreshToken =(user) => {
  return jwt.sign(
    {id: user.id,},
    process.env.JWT_REFRESH_SECRET,
    {expiresIn: "7d",}
  );
};
`}
        </pre>
      </section>

      {/* ================================================= */}
      {/* LOGIN */}
      {/* ================================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔑 Login Route
        </h2>

        <pre style={styles.code}>
{`app.post("/login", async (req, res) => {
    const {email,password,} = req.body;
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    const user = result.rows[0];
    if (!user) {
      return res.json({success: false,});
    }

    const valid = await bcrypt.compare(password,user.password);

    if (!valid) {
      return res.json({
        success: false,
      });
    }
    const accessToken = generateAccessToken(user);

    const refreshToken =generateRefreshToken(user);

    // store refresh token
    await pool.query(
    \`INSERT INTO refresh_tokens(user_id,token) VALUES($1,$2)\`,
      [user.id,refreshToken,]
    );

    // HTTPOnly Cookies
    res.cookie("accessToken",accessToken,
      {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      }
    );
--> HTTP only cookies can't be read by frontend prevent csrf attack
--> CSRF- Cross Site Resource Forgery-- logged user of one website 
          opens malicious website in other tab then the website also can 
          access and read the cookies and pretend login as you. So preveht it by HTTP only cookies

    res.cookie("refreshToken",refreshToken,
      {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      }
    );
    res.json({
      success: true,
      message:"Login success",
    });
  }
);
`}
        </pre>
      </section>
</div>

      {/* ================================================= */}
      {/* VERIFY TOKEN */}
      {/* ================================================= */}

<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)'}}>
        <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🛡️ Verify JWT Middleware
        </h2>

        <pre style={styles.code}>
{`
export const authenticate = (req, res, next) => {
  const token =req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({message: "Token missing",});
  }
  try {
    const decoded =jwt.verify(token,process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({
      message:"Invalid token",
    });
  }
};
`}
        </pre>
      </section>

      {/* ================================================= */}
      {/* PROTECTED */}
      {/* ================================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔒 Protected Route
        </h2>

        <pre style={styles.code}>
{`
app.get("/profile", authenticate, async (req, res) => {
    const result = await pool.query(
        "SELECT * FROM users WHERE id=$1",
        [req.user.id]
      );
    return res.json(result.rows[0]);
  }
);
`}
        </pre>
      </section>
</div>

      {/* ================================================= */}
      {/* FRONTEND LOGIN */}
      {/* ================================================= */}
<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)'}}>
  
      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ⚛️ React Login Request
        </h2>

        <pre style={styles.code}>
{`
const loginUser = async () => {
const response =
  await fetch("http://localhost:5000/login",
    {
      method: "POST",
      headers: {"Content-Type":"application/json",},
      credentials: "include",
      body: JSON.stringify({
        email:"admin@gmail.com",
        password:"123456",
      }),
    }
  );

  const data = await response.json();
  console.log(data);
};
`}
        </pre>
      </section>

      {/* ================================================= */}
      {/* FRONTEND GET */}
      {/* ================================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          📥 Protected GET Request
        </h2>

        <pre style={styles.code}>
{`
const getProfile = async () => {
  const response =await fetch("http://localhost:5000/profile",
      {
        method: "GET",
        credentials: "include",
      }
    );
  const data = await response.json();
  console.log(data);
};
`}
        </pre>
      </section>
</div>

      {/* ================================================= */}
      {/* CORS */}
      {/* ================================================= */}
<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)'}}>
  
      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🌍 CORS Setup
        </h2>

        <pre style={styles.code}>
{`
import cors from "cors";

app.use(cors({ 
    origin:"http://localhost:5173", --frontend url
    credentials: true,
  })
);
`}
        </pre>
      </section>

      {/* ================================================= */}
      {/* SECURITY */}
      {/* ================================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🛡️ Security Best Practices
        </h2>

        <pre style={styles.code}>
{`
✅ Use HTTPOnly cookies
   - JS cannot access cookies

✅ Use secure:true
   - HTTPS only

✅ Use sameSite:"strict"
   - Prevents CSRF

✅ Access token short expiry
   - 15 minutes

✅ Refresh token long expiry --store them in DB
   - 7 days

✅ Store refresh token in DB

✅ Hash passwords using bcrypt

✅ Never store passwords directly

✅ Use Redis cache
   - Faster product fetch

✅ Clear Redis cache after update/delete
`}
        </pre>
      </section>
</div>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "20px",
    marginTop: "30px",
  }}
>

  {/* =====================================================
      LEFT SIDE
  ===================================================== */}

  <section style={styles.section}>

    <h2 style={styles.subTitle}>
      ⚡ Backend Redis Cache API Flow
    </h2>

    <pre style={styles.code}>
{`
Client Request
      ↓
GET /products
      ↓
Check Redis Cache

redis.get("products")

      ↓

Cache HIT ?
   YES
      ↓
Return Cached Data

   NO
      ↓
Fetch From PostgreSQL
      ↓
Store Data In Redis
      ↓
Return Response



WHY CACHE?

PostgreSQL
   ↓
Disk Read
   ↓
Slower

Redis
   ↓
RAM Memory
   ↓
Super Fast



CACHE INVALIDATION

CREATE PRODUCT
UPDATE PRODUCT
DELETE PRODUCT

      ↓

Delete Old Cache

redis.del("products")

      ↓

Next API Call
Gets Fresh Data
`}
    </pre>

  </section>



  {/* =====================================================
      RIGHT SIDE
  ===================================================== */}

  <section style={styles.section}>

    <h2 style={styles.subTitle}>
      🧠 Express + Redis Cache API
    </h2>

    <pre style={styles.code}>
{`
app.get("/products", async (req, res) => {

    try {
      const cachedProducts = await redis.get("products");

      // =====================================
      // CACHE HIT
      // =====================================

      if (cachedProducts) {
        console.log( "⚡ Data from Redis Cache");
        return res.json(JSON.parse(cachedProducts));
      }

      // =====================================
      // CACHE MISS
      // =====================================
      console.log("🐘 Data from PostgreSQL");

      const result = await pool.query("SELECT * FROM products");


      // =====================================
      // STORE IN REDIS
      // EX = Expire Time
      // 300 seconds = 5 mins
      // =====================================

      await redis.set("products",
        JSON.stringify(result.rows),
        "EX",
        300
      );

      // =====================================
      // SEND RESPONSE
      // =====================================

      return res.json(result.rows);
    } catch (err) {
      console.log(err);
      return res.status(500).json({message: "Server Error"});
    }
  }
);`}
    </pre>
  </section>
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "20px",
    marginTop: "30px",
  }}
>

  {/* =====================================================
      LEFT SIDE
  ===================================================== */}

  <section style={styles.section}>

    <h2 style={styles.subTitle}>
      ⚡ Redis Cache Keys Explained
    </h2>

    <pre style={styles.code}>
{`
REDIS STORES DATA
IN KEY → VALUE FORMAT



EXAMPLES

"products"
      ↓
All Products List



"product:1"
      ↓
Single Product With ID 1



"product:25"
      ↓
Single Product With ID 25



"user:10"
      ↓
Single User Data



=====================================

WHY "products" KEY?

await redis.set(
  "products",
  JSON.stringify(data)
)

This means:

KEY   = "products"

VALUE = all products array



=====================================

WHERE DOES CACHE STORE?

Inside Redis RAM Memory

NOT PostgreSQL



=====================================

FLOW

Client Request
      ↓
GET /products
      ↓
redis.get("products")

If exists
   ↓
Return cached products

If not exists
   ↓
Fetch PostgreSQL data
   ↓
redis.set("products",data)
   ↓
Save into Redis memory
   ↓
Return response



=====================================

CACHE EXPIRE

"EX", 300

Means:

Delete cache after 300 seconds
(5 minutes)



=====================================

CACHE INVALIDATION

CREATE PRODUCT
UPDATE PRODUCT
DELETE PRODUCT

      ↓

redis.del("products")

Old cache removed

Next request gets fresh DB data
`}
    </pre>

  </section>



  {/* =====================================================
      RIGHT SIDE
  ===================================================== */}

  <section style={styles.section}>

    <h2 style={styles.subTitle}>
      🧠 Cache All Products + Single Product
    </h2>

    <pre style={styles.code}>
{`// ============================================
// GET ALL PRODUCTS
// CACHE KEY = "products"
// ============================================
app.get( "/products", async (req, res) => {
    // CHECK CACHE
    const cachedProducts = await redis.get("products");

    // CACHE HIT

    if (cachedProducts) {
      console.log("⚡ Products From Cache");
      return res.json(JSON.parse(cachedProducts));
    }

    // CACHE MISS

    const result = await pool.query("SELECT * FROM products");

    // STORE CACHE
    await redis.set(
      "products",
      JSON.stringify(result.rows),
      "EX",
      300
    );
    return res.json(result.rows);
  }
);

// ============================================
// GET SINGLE PRODUCT
// CACHE KEY = product:id
// EXAMPLE = product:5
// ============================================

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;

    //dynamic cache key
    const cacheKey = \`product:\${id}\`;

    const cachedProduct = await redis.get(cacheKey);

    // CACHE HIT
    if (cachedProduct) {
      console.log("⚡ Single Product From Cache");
      return res.json(JSON.parse(cachedProduct));
    }

    // CACHE MISS

    const result = await pool.query("SELECT * FROM products WHERE id=$1",[id]);

    const product = result.rows[0];
    // STORE SINGLE PRODUCT

    await redis.set(
      cacheKey,
      JSON.stringify(product),
      "EX",
      300
    );
    return res.json(product);

  }
);

// ============================================
// UPDATE PRODUCT
// CLEAR OLD CACHE
// ============================================
app.put("/products/:id" ,async (req, res) => {
    const { id } = req.params;
    // UPDATE DATABASE

    await pool.query("UPDATE products SET name=$1 WHERE id=$2", ["Iphone", id]);

    // DELETE CACHE

    await redis.del("products");

    await redis.del(\`product:\${id}\`);

    return res.json({success: true,});
  }
);
`}
    </pre>

  </section>

</div>

      {/* ================================================= */}
      {/* REDIS FLOW */}
      {/* ================================================= */}
<div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)'}}>
  
      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ⚡ Redis Cache Flow
        </h2>

        <pre style={styles.code}>
{`
Frontend Request
      ↓
Check Redis Cache
      ↓
Cache HIT ?
   YES → Return Cached Data
   NO
      ↓
Query PostgreSQL
      ↓
Store Result in Redis
      ↓
Return Response
`}
        </pre>
      </section>

      {/* ================================================= */}
      {/* LOGOUT */}
      {/* ================================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🚪 Logout
        </h2>

        <pre style={styles.code}>
{`-- clear httpOnlyCookies

app.post("/logout", async (req, res) => {

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.json({success: true,});
  }
);
`}
        </pre>
      </section>
</div>
    </div>
    <ImageBanner />

    </>
  );
};

export default JwtTokens;