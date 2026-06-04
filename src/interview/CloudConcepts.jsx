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
☁️ S3 (Simple Storage Service) -- 
========================================================
WHY USED?
----------
Store Files
✓ JSON Data if static
✓ Images
✓ Videos
✓ PDFs
✓ Resumes
✓ Backups

Not For
✗ SQL Queries
✗ Joins
✗ Transactions

FLOW
----------
User Upload
      ↓
Backend
      ↓
S3 Bucket
      ↓
File Stored
______________________
Database
      ↓
Stores URL Only of buckets where image stored

ACCESS / STORE
----------
Upload

await s3.send(new PutObjectCommand({
  Bucket:"images",
  Key:"profile.jpg",
  Body:file
 })
);
post upload the link must be stored in database
__________________________________________________
Read

await s3.send(new GetObjectCommand({
  Bucket:"images",
  Key:"profile.jpg"
 })
);

INTERVIEW TRAP
----------
S3 stores files.
Database stores metadata.
`}</pre>
<pre style={styles.noteCard}>{`
========================================================
☁️ DynamoDB use AWS Lambda - if frequently updated JSON
========================================================
WHY USED?
----------
AWS NoSQL Database
✓ Frequently updated JSON
✓ Massive Scale
✓ Flexible Schema
✓ Serverless

FLOW
----------
Request
   ↓
Lambda
   ↓
DynamoDB
   ↓
JSON Returned

ACCESS / STORE
----------
Store
await client.send(new PutItemCommand({TableName:"Users"}));

Read
await client.send(new GetItemCommand({TableName:"Users"}));

INTERVIEW TRAP
----------
No SQL Joins.
Data Modeling Different From PostgreSQL.`}
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
Horizontal Scaling-- Add extra systems to distribute workload 

Vertical Scaling -- Add more power like CPU, RAM, Storage to existing server (most used)
========================================================
📈 Auto Scaling
========================================================
WHY USED?
----------
Automatic Server Scaling

FLOW
----------
CPU > 80%
AWS
 ↓
Create Server
 ↓
More Capacity

ACCESS
----------
Policy
CPU > 80%
   ↓
Add Instance
___________________________
CPU < 20%
   ↓
Remove Instance

INTERVIEW TRAP
----------
Auto Scaling creates servers.
Load Balancer uses servers.`}
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
<pre>{`
JSON Type                    Best Storage
------------------------------------------------
Static Documents            S3
Frequently Updated Docs     PostgreSQL JSONB
High Scale NoSQL JSON       DynamoDB
Temporary JSON              Redis
Application Code            EC2/ECS/EKS

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
Kubernetes`}</pre>
        <ImageBanner/>
    </div>
    </>
  )
}

export default CloudConcepts