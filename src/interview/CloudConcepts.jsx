import cloudBackend from "../assets/cloud_in_backend.png";
import cloudServices from "../assets/cloud_services.png";
import cloudFlare from "../assets/clouldflare_usage.png";
function ImageBanner() {
  const images = [
    cloudBackend,
    cloudFlare,
    cloudServices,
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #333",
            borderRadius: "14px",
            overflow: "hidden",
            background: "white",
          }}
        >
          <img
            src={img}
            alt="kubernetes"
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
const CloudConcepts = () => {
  
  const styles = {
  notesGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2,minmax(0,1fr))",
    gap: "20px",
    alignItems: "start",
    textAlign: 'left'
  },

  noteCard: {
    background: "#111",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #333",
    whiteSpace: "pre-wrap",
    overflowX: "auto",
    fontSize: "13px",
    lineHeight: "1.5",
    margin: 0,
    textAlign:'left'
  },
};
   return (
    <>
    <h1>Cloud backend and usage</h1>
    <div style={styles.notesGrid}>
<pre style={styles.noteCard}>{`
========================================================
☁️ AWS S3 (Simple Storage Service) -- for images, videos, documents, backups
========================================================
WHAT IS AWS S3?
------------
Object Storage Service.

Stores:
✓ Images
✓ Videos
✓ PDFs
✓ Resumes
✓ Documents
✓ Backups
========================================================
WHY NOT DATABASE?
========================================================
Bad Practice:
Database
   ↓
Store 50MB Image

Problems:
✗ Database Becomes Huge
✗ Slow Backups
✗ Expensive Storage
✗ Poor Performance

Best Practice:
Image → S3
URL → Database
========================================================
REAL WORLD FLOW
========================================================
User Uploads Profile Picture
          ↓
   Backend API
          ↓
   Upload To S3
          ↓
   S3 Generates URL
          ↓
   Save URL In Database
          ↓
   Return Success

========================================================
DATABASE TABLE
========================================================
------------------------------------------------
id | name | profile_image
------------------------------------------------
1  | Sai  | https://bucket.s3.amazonaws.com/user1.jpg
------------------------------------------------
Database stores:
✓ URL
✓ File Name
✓ Size
✓ Metadata

Database does NOT store But AWS S3 bucket stores it:
✗ Actual Image
========================================================
FLOW DIAGRAM
========================================================
React App
      ↓
Upload Image
      ↓
Node Backend
      ↓
AWS S3 Bucket
      ↓
Image Stored
      ↓
   Get URL
      ↓
PostgreSQL Store URL
      ↓
   Response
========================================================
EXAMPLE
========================================================
Upload To S3
const result = await s3.send(new PutObjectCommand({
   Bucket:"profile-images",
   Key:"user1.jpg",
   Body:file
 })
);
const imageUrl = "https://profile-images.s3.amazonaws.com/user1.jpg";
========================================================
SAVE URL TO DATABASE if local database similarly with DynamoDB
========================================================
INSERT INTO users(name, profile_image) VALUES('Sai', imageUrl);
========================================================
FETCH USER
========================================================
SELECT * FROM users;
Result:
{
 id:1,
 name:'Sai',
 profile_image: 'https://profile-images.s3.amazonaws.com/user1.jpg'
}
Frontend uses URL directly.
========================================================
INTERVIEW TRAP
========================================================
S3 Stores Files. Database Stores Metadata.
Never store large images/videos inside PostgreSQL if S3 is available.
========================================================
S3 + DYNAMODB TOGETHER -- instead of local db using the DynamoDB
========================================================
User Uploads Photo
          ↓
Photo Stored In S3
          ↓
URL Generated
          ↓
DynamoDB Stores

put/post/patch
{
 userId:"101",
 name:"Sai",
 profileImage: "https://bucket.s3.amazonaws.com/user1.jpg"
}
=======================================================
INTERVIEW TRAP
========================================================
DynamoDB Stores Data. S3 Stores Files.

Very Common Architecture:
Image
  ↓
  S3
-------------------------------
Image URL
  ↓
DynamoDB / PostgreSQL





`}
</pre>
<pre style={styles.noteCard}>{`
========================================================
☁️ DynamoDB -- instead of using sql use this DynamoDB for data updating and retriving
========================================================
WHAT IS IT?
------------
AWS NoSQL Database (faster and no need used this for our code)

Stores:
✓ JSON Data
✓ User Data
✓ Orders
✓ Sessions
✓ Product Information

Does NOT Store:
✗ Videos
✗ Large Images
✗ PDFs

========================================================
WHEN TO USE?
========================================================
User Data Changes Frequently

Update Happens Often
      ↓
DynamoDB Ideal

========================================================
FLOW
========================================================
React App
     ↓
API Gateway
     ↓
AWS Lambda
     ↓
DynamoDB
     ↓
JSON Response

========================================================
REAL WORLD EXAMPLE
========================================================
Store User
{
 userId:"101",
 name:"Sai",
 email:"sai@gmail.com"
}
 Store
await client.send(new PutItemCommand({TableName:"Users"}));

Retrieve User
{
 userId:"101",
 name:"Sai",
 email:"sai@gmail.com"
}
Read
await client.send(new GetItemCommand({TableName:"Users"}));
===========================================================================
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
const baseClient = new DynamoDBClient({ region: "us-east-1" });  // Initialize low-level client
const docClient = DynamoDBDocumentClient.from(baseClient); // Wrap with Document Client for seamless JS native objects
const TABLE_NAME = "Users";
-------------------------------------------------------------------------
--GET
import { GetCommand } from "@aws-sdk/lib-dynamodb";

async function getUser(userId) {
  const command = new GetCommand({
    TableName: TABLE_NAME,
    Key: {userId: userId,}, //userId must be primary key
  });

  try {
    const response = await docClient.send(command);
    if (response.Item) {
      console.log("User found:", response.Item);
      return response.Item;
    } else {
      console.log("User not found.");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}
--post
import { PutCommand } from "@aws-sdk/lib-dynamodb";

async function createUser(userId, name, email) {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      userId: userId, // Partition Key
      name: name,
      email: email,
      createdAt: new Date().toISOString(),
    },
  });

  try {
    const response = await docClient.send(command);
    console.log("User created successfully:", response);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}
--put command
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";

async function updateUserEmail(userId, newEmail) {
  const command = new UpdateCommand({
    TableName: TABLE_NAME,
    Key: { userId: userId },
    UpdateExpression: "set #e = :newEmail",
    ExpressionAttributeNames: { "#e": "email", },
    ExpressionAttributeValues: {":newEmail": newEmail,},
    ReturnValues: "ALL_NEW", 
  });

  try {
    const response = await docClient.send(command);
    console.log("User updated:", response.Attributes);
  } catch (error) {
    console.error("Error updating user:", error);
  }
}
--Delete
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
async function deleteUser(userId) {
  const command = new DeleteCommand({
    TableName: TABLE_NAME,
    Key: {userId: userId,},
  });
  try {
    await docClient.send(command);
    console.log(\`User with ID \${userId} deleted successfully.\`);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}`}
</pre>
<pre style={styles.noteCard}>{`
========================================================
☁️ AWS LAMBDA  - lambda computes, DynamoDb stores it
========================================================
WHAT IS IT?
------------
Serverless Compute Service. You upload code and AWS runs it, only when an event occurs.

No Server Management.
No OS Management.
Pay only for execution time.

========================================================
WHY USED?
========================================================

✓ Run Backend APIs
✓ Process Files
✓ Execute Scheduled Jobs
✓ Handle Events
✓ Auto Scale
✓ Pay Per Request

========================================================
TRADITIONAL SERVER
========================================================

Request
   ↓
EC2 Server (Always Running)
   ↓
Database
   ↓
Response

Problems:
✓ Pay 24/7
✓ Manage Server
✓ Scaling Required

========================================================
AWS LAMBDA FLOW
========================================================

Request
   ↓
API Gateway
   ↓
Lambda Function
   ↓
Database (DynamoDB/RDS)
   ↓
Response

AWS automatically:
✓ Starts Function
✓ Scales Function
✓ Stops Function

========================================================
EXAMPLE
========================================================

exports.handler = async(event)=>{
 return {
   statusCode:200,
   body:JSON.stringify({
      message:"Hello AWS Lambda"
   })
 };
};

========================================================
COMMON TRIGGERS
========================================================
API Gateway
   ↓
REST APIs
-------------------
S3 Upload
   ↓
Process Images
---------------------
CloudWatch
   ↓
Scheduled Jobs
----------------------
DynamoDB
   ↓
Data Change Events
-----------------------
SNS / SQS
   ↓
Message Processing

========================================================
LAMBDA + DYNAMODB
========================================================

User Request
      ↓
API Gateway
      ↓
Lambda
      ↓
DynamoDB
      ↓
JSON Response

Example:

const user = await dynamoClient.send(
  new GetItemCommand({
     TableName:"Users"
  })
);

========================================================
WHEN TO USE?
========================================================
Good For:
✓ CRUD APIs
✓ Authentication
✓ Event Processing
✓ Microservices
✓ Scheduled Tasks

Avoid For:
✗ Long Running Processes
✗ Heavy Video Rendering
✗ Applications needing persistent memory

========================================================
INTERVIEW TRAPS
========================================================
Trap 1:
Lambda ≠ Database
Lambda executes code. DynamoDB stores data.

Trap 2:
Lambda ≠ EC2

Lambda:
✓ Serverless
✓ Auto Scaling
✓ Pay Per Request

EC2:
✓ Full Server Control
✓ Always Running
✓ Pay For Running Instance

Trap 3:
Lambda is Stateless. Each execution is independent.

Trap 4:
Lambda can connect to DynamoDB, PostgreSQL (RDS), Redis (ElastiCache), S3 etc.

========================================================
REAL WORLD EXAMPLE
========================================================
Login Request
      ↓
API Gateway
      ↓
   Lambda
      ↓
Verify User In DynamoDB
      ↓
Generate JWT
      ↓
Return Token

This is one of the most common, AWS Serverless architectures.`}
</pre>
<pre style={styles.noteCard}>{`
========================================================
📈 AWS AUTO SCALING
========================================================
WHAT IS IT?
------------
Automatically adds or removes servers based on traffic/load.

Purpose:
Keep application fast while reducing infrastructure cost.

========================================================
WHY USED?
========================================================
✓ Handle Traffic Spikes
✓ Reduce Costs
✓ High Availability
✓ No Manual Scaling
✓ Better Performance

========================================================
SCALING TYPES
========================================================
1. Vertical Scaling
--------------------
Increase Server Power by RAM/CPU/Memory.

Before: 2 CPU , 4 GB RAM

After: 8 CPU , 32 GB RAM

Pros:
✓ Simple

Cons:
✗ Hardware Limit

========================================================
2. Horizontal Scaling
--------------------
Add More Servers / computers/ machines
Before: 1 Server
After: 5 Servers

Pros:
✓ Massive Scale
✓ Fault Tolerance

Cons:
✗ Needs Load Balancer

========================================================
AUTO SCALING FLOW
========================================================

Users
  ↓
Load Balancer
  ↓
EC2 Instance 1, EC2 Instance 2
-------------------------------
Traffic Increases
       ↓
   CPU > 80%
       ↓
Auto Scaling Group
       ↓
Launch New EC2
       ↓
Load Balancer
       ↓
Traffic Distributed

========================================================
EXAMPLE POLICY
========================================================
Scale Out
-----------
CPU > 80%. For 5 Minutes
      ↓
Add 2 EC2 Instances

Scale In
-----------
CPU < 20%. For 10 Minutes
      ↓
Remove 1 EC2 Instance

========================================================
AWS COMPONENTS
========================================================
CloudWatch
     ↓
Monitors Metrics

Auto Scaling Group (ASG)
     ↓
Decides Scaling
---------------------------
    EC2
     ↓
Creates/Removes Servers

Load Balancer
     ↓
Distributes Traffic

========================================================
REAL WORLD EXAMPLE
========================================================
Normal Day
------------
2 EC2 Instances

Black Friday Sale
------------
50,000 Users

   CPU > 80%
      ↓
ASG Creates 10 More EC2 Instances

Total: 12 EC2 Instances

   Sale Ends
      ↓
   CPU < 20%
      ↓
ASG Removes Extra Instances

Back To: 2 EC2 Instances

========================================================
INTERVIEW TRAPS
========================================================
Trap 1
--------
Auto Scaling ≠ Load Balancer

Auto Scaling: Creates/Removes Servers

Load Balancer: Distributes Traffic

========================================================
Trap 2
--------
Auto Scaling usually works with EC2 Instances.

========================================================
Trap 3
--------
Horizontal Scaling is preferred in Cloud Architecture.

Reason: No Hardware Limits.

========================================================
Trap 4
--------
Auto Scaling uses CloudWatch Metrics.

Examples:
CPU Usage
Memory Usage
Network Traffic
Request Count

========================================================
INTERVIEW ANSWER
========================================================
AWS Auto Scaling automatically adds or removes EC2 instances based on predefined metrics like CPU utilization, ensuring high availability, performance, and cost optimization.
`}
</pre>
<pre style={styles.noteCard}>{`
========================================================
🗄️ PostgreSQL
========================================================
WHY USED?
----------
Primary Database
✓ Users
✓ Orders
✓ Products
✓ Transactions

Source Of Truth
FLOW
----------
Request
   ↓
Backend
   ↓
PostgreSQL
   ↓
Return Data

ACCESS / STORE
----------
Insert
await pool.query("INSERT INTO users(name) VALUES($1)",["Praveen"]);

Read
await pool.query("SELECT * FROM users");

INTERVIEW TRAP
----------
PostgreSQL stores business data. Not cache.`}
</pre>
<pre style={styles.noteCard}>{`
========================================================
⚡ Redis
========================================================
WHY USED?
----------
Fast Memory Cache
✓ Product Cache
✓ Session Storage
✓ OTP Storage
✓ Rate Limiting

FLOW
----------
Request
   ↓
Redis

Found?
 ↓
Yes
 ↓
Return
___________________
No  (Cache Miss)
 ↓
Database
 ↓
Cache Result   (set Cache)

ACCESS / STORE
----------
Store (set-cache)
await redis.set("users", JSON.stringify(data));

Read (get-cache)
await redis.get("users");

INTERVIEW TRAP
----------
Redis improves database. Just uses InMemory.
Redis does not replace database.
`}</pre>

<pre style={styles.noteCard}>{`
========================================================
🖥️ EC2
========================================================

WHY USED?
----------
Virtual Server

✓ Run Backend
✓ Run Database
✓ Run Docker

FLOW
----------
Developer
    ↓
   EC2
    ↓
Node Server
    ↓
Application Running

ACCESS / STORE
----------
ssh ubuntu@ip
git pull
npm install
pm2 restart app

INTERVIEW TRAP
----------
EC2 is a server. Docker runs on EC2.`}
</pre>
<pre style={styles.noteCard}>{`
========================================================
🐳 Docker
========================================================
WHY USED?
----------
Package Application
✓ Code
✓ Node Runtime
✓ Libraries

FLOW
----------
Code
 ↓
Docker Build
 ↓
Image
 ↓
Run Anywhere

ACCESS / STORE
----------

Build
docker build -t app .

Run
docker run app

INTERVIEW TRAP
----------
Docker creates containers. Docker is not Kubernetes.`}
</pre>

<pre style={styles.noteCard}>{`
========================================================
☸️ Kubernetes
========================================================
WHY USED?
----------
Manage Containers
✓ Scaling
✓ Recovery
✓ Deployments

FLOW
----------
Ingress
   ↓
Service
   ↓
  Pods

Pod Crash
   ↓
Auto Restart

ACCESS / STORE
----------
kubectl get pods
kubectl apply -f app.yml

INTERVIEW TRAP
----------
Docker Creates Containers, Kubernetes Manages Containers
`}</pre>

<pre style={styles.noteCard}>{`
========================================================
🌍 Cloudflare-- used for the 
========================================================

WHY USED?
----------
Protect Backend
✓ CDN--A Content Delivery Network (CDN) is a geographically distributed group of servers that work together to provide fast delivery of internet content. CDN causes Ping.
✓ SSL
✓ WAF
✓ DDoS Protection

FLOW
----------
User
 ↓
Cloudflare
 ↓
Backend
_____________________________
Cached?
 ↓
Yes
 ↓
Return

ACCESS / STORE
----------
DNS (IP address. Example: (e.g., google.com) into machine-readable numerical IP addresses (e.g., 192.168.1.1))
 ↓
Cloudflare
 ↓
Origin Server

INTERVIEW TRAP
----------
Cloudflare protects traffic. Cloudflare does not host backend.`}
</pre>  

<pre style={styles.noteCard}>{`
========================================================
⚖️ Load Balancer
========================================================
WHY USED?
----------
Distribute Traffic

FLOW
----------
Users
 ↓
Load Balancer
 ↓   ↓   ↓
S1  S2  S3

ACCESS
----------

Request
 ↓
ALB
 ↓
Healthy Server

INTERVIEW TRAP
----------
Load Balancer does not create servers. Only routes traffic.`}
</pre>

<pre style={styles.noteCard}>{`
========================================================
📊 CloudWatch
========================================================

WHY USED?
----------
Monitoring
✓ Logs
✓ Errors
✓ CPU
✓ Memory

FLOW
----------
Backend
   ↓
  Logs
   ↓
CloudWatch
   ↓
Alerts

ACCESS
----------
console.log()
      ↓
CloudWatch Logs
______________________
Metrics
      ↓
Dashboard

INTERVIEW TRAP
----------
CloudWatch stores metrics and logs.
Not application data.`}
</pre>

<pre style={styles.noteCard}>{`
========================================================
🏢 COMPLETE ENTERPRISE FLOW
========================================================
Browser
   ↓
Cloudflare
   ↓
Load Balancer
   ↓
Kubernetes / ECS
   ↓
Node Backend
   ↓
Redis Cache
   ↓
PostgreSQL, Files
 ↓
S3 bucket, Logs
 ↓
CloudWatch

========================================================
PostgreSQL
   ↓
Business Data
_______________________
  Redis
   ↓
Fast Access
_________________________
  S3 (Amazon S3 (Simple Storage Service) bucket is a globally unique, 
   |  cloud-based storage container used to hold data as "objects" (files and their metadata))
   | (Bucket url need to be stored in pgsql for tracking id and bucket url)
   ↓
Files
______________________
Cloudflare (cdn (allocating to nearest available server), ssl post DNS before reaching cloudflare proxy used)
   ↓
Protection
________________________________________
Load Balancer
   ↓
Traffic Distribution
_______________________________
Auto Scaling (horizontal-- machines, vertical -- cpu, ram, storage..)
   ↓
Creates Servers
________________________________
Docker
   ↓
Packages App
______________________________
Kubernetes
   ↓
Manages Containers

CloudWatch
   ↓
Monitoring
========================================================
`}</pre>
<pre style={styles.noteCard}>{`========================================================
☁️ AWS STORAGE & COMPUTE CHEAT SHEET
========================================================
JSON Type                    Best Storage
------------------------------------------------
Static Documents            S3
Frequently Updated Docs     PostgreSQL JSONB
High Scale NoSQL JSON       DynamoDB
Temporary JSON              Redis
Application Code            EC2/ECS/EKS
========================================================
WHEN TO USE WHAT?
========================================================
Frequently Updated Data
-----------------------
PostgreSQL
DynamoDB
Files / Backups
---------------
S3
Cache
---------------
Redis
Compute
---------------
EC2
ECS
EKS

========================================================
POSTGRESQL JSONB
========================================================
Best For:
✓ Transactions
✓ SQL Queries
✓ Joins
✓ Reporting
✓ Relational Data

Example:
users
-------------------------
id
name
preferences(JSONB)
{
 theme:"dark",
 language:"en"
}
Why?
---------
Need SQL + JSON Together.

========================================================
DYNAMODB
========================================================

Best For:
✓ Massive Scale
✓ Millions Of Requests
✓ Flexible Schema
✓ Serverless

Example:

{
 userId:"101",
 name:"Sai",
 cart:[...]
}

Why?
---------
No Fixed Schema Needed.

========================================================
REDIS
========================================================
Best For:
✓ Cache
✓ Sessions
✓ OTP Storage
✓ Rate Limiting

Example:

user:101
{
 profile:"cached"
}

TTL = 5 Minutes

Why?
---------
Super Fast In-Memory Access.

========================================================
S3
========================================================
Best For:
✓ Images
✓ Videos
✓ PDFs
✓ Resumes
✓ Backups
✓ Static Website Hosting

Example:
resume.pdf
profile.jpg
video.mp4

Database Stores:
----------------
Only URL

https://bucket.s3.amazonaws.com/profile.jpg

========================================================
EC2
========================================================
Amazon EC2 (Elastic Compute Cloud) is an AWS web service that provides secure, resizable virtual servers (instances) in the cloud. It eliminates the need to invest in physical hardware, allowing developers to scale computing capacity up or down as application demand fluctuates
Best For:
✓ Node.js Backend
✓ Java Applications
✓ Python Services
✓ Full Server Control
Example:
React
 ↓
Node API
 ↓
PostgreSQL

Running On EC2
========================================================
ECS
========================================================
Amazon Elastic Container Service (ECS) is a fully managed, highly scalable container orchestration platform provided by AWS. It removes the operational overhead of setting up and scaling your own cluster management infrastructure, allowing you to easily deploy, manage, and scale Docker containers (Kubernetes)
Best For:
✓ Docker Containers

Example:
Docker Container
      ↓
      ECS
      ↓
AWS Runs Container

No Server Management Needed.

========================================================
EKS
========================================================
Elastic Kubernetes Service
Best For:
✓ Large Microservices
✓ Kubernetes Deployments
✓ Enterprise Systems

Example:
50 Services
   ↓
Kubernetes
   ↓
  EKS
========================================================
REAL WORLD ARCHITECTURE
========================================================
   React App
      ↓
   Load Balancer
      ↓
EC2 / ECS / EKS
      ↓
   PostgreSQL
----------------------
User Uploads Image
      ↓
      S3
      ↓
Store URL In Database

Frequently Accessed Data
      ↓
   Redis Cache

Large Scale JSON
      ↓
   DynamoDB
========================================================
INTERVIEW TRAPS
========================================================
S3 ≠ Database
---------------
Stores Files Only

Redis ≠ Permanent Storage
---------------
Primarily Cache

DynamoDB ≠ PostgreSQL
---------------
No Joins, No Complex Transactions

EC2 ≠ ECS
---------------
EC2 = Server
ECS = Container Platform

EKS ≠ ECS
---------------
EKS Uses Kubernetes, ECS Is AWS Native
========================================================
INTERVIEW ANSWER
========================================================
PostgreSQL → Relational Data
DynamoDB → High Scale JSON regular updates needed if no local sql needed dynamodb used
Redis → Cache
S3 → Files
EC2 → Virtual Server
ECS → Docker Containers
EKS → Kubernetes
Lambda → Serverless Functions to compute the data and CRUD from frontend you could do
`}
</pre>
    </div>
            <ImageBanner/>
    </>
  )
}

export default CloudConcepts