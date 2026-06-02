import React from "react";

import deploymentImg from "../assets/deployment_walkthrough.jpeg";
import deploymentCloud from "../assets/gcp_cloud.png";
import kubernetesImg from "../assets/kubernetes.png";
import kubernetesSnippets from "../assets/kubernetes_snippets.jpeg";
import kubernetesDocker from "../assets/kubernetes_docker.png";
import kubernetesConcepts from '../assets/kubernetes_concepts.png';
import kubernetesBlueprint from '../assets/kubernetes_bluepirnt.png'

function ImageBanner() {
  const images = [
    deploymentImg,
    deploymentCloud,
    kubernetesDocker,
    kubernetesImg,
    kubernetesSnippets,
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(2,1fr)",
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
    boxShadow:
      "0 2px 10px rgba(0,0,0,0.08)",
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
    gridTemplateColumns:
      "repeat(auto-fit,minmax(500px,1fr))",
    gap: "20px",
  },
};

const Kubernetes = () => {
  return (
    <>
    <div style={styles.page}>
      <h2 style={styles.title}>
        ☸️ Docker + Kubernetes + DevOps 
      </h2>
      <p>
        Complete DevOps deployment flow with Docker containers, Kubernetes, cloud deployment, pods, services, ingress, scaling and snippets.
      </p>
      {/* ========================================= */}
      {/* FLOW */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🚀 Complete Deployment Flow
        </h2>

        <pre style={styles.code}>
{`Frontend React App
        ↓
Docker Container
        ↓
Push Docker Image
        ↓
DockerHub / GCR
        ↓
Kubernetes Cluster
        ↓
Pods Created
        ↓
Service Exposes Pods for communication
        ↓
Ingress / Load Balancer
        ↓
Users Access Website`}
        </pre>
      </section>

      {/* ========================================= */}
      {/* DOCKER VS KUBERNETES */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ⚔️ Docker vs Kubernetes
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`
🐳 Docker--Solves the "It Works on My Machine" -- create containers
 It is used to ensure that software runs exactly the same way, regardless of the underlying computer,operating system, or server environment

✅ Creates containers--packages, dependencies into lightweight units
✅ Packages app
✅ Runs isolated apps
✅ Lightweight VM alternative
Example: React App, Node Backend, PostgreSQL
all run inside containers
`}
          </pre>

          <pre style={styles.code}>
{`
☸️ Kubernetes-- an open-source platform that automates the deployment, scaling, and management of containerized applications. 
It acts like an orchestra conductor for microservices, providing features like automated rollouts, self-healing, and load balancing across various cloud or on-premises environments

Building blocks - cluster, pod, controlpane, node, services

✅ Manages containers
✅ Auto scaling
✅ Self healing
✅ Load balancing
✅ Rolling deployments

Docker creates containers & Kubernetes manages them`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* DOCKER */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🐳 Docker Important Concepts
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`🐳 IMAGE: Blueprint/template
Example: node:20, postgres:15
Contains: OS + Runtime + Libraries`}
          </pre>

          <pre style={styles.code}>
{`📦 CONTAINER: Running instance of image
Image
   ↓
docker run
   ↓
Container`}
          </pre>

          <pre style={styles.code}>
{`📁 VOLUME: Persistent storage

If Without volumes: Container deleted ->Data lost
With volume: Data survives in volumes`}
          </pre>

          <pre style={styles.code}>
{`
🌍 PORT MAPPING: Container port exposed
Example: 5173:5173, localhost:5173 -> container:5173
`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* DOCKERFILE */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          📄 Dockerfile (Builds image, deals with how can container be built and in text file)
        </h2>
        <ul>
        <li> Docker file contains instructions to assemble single docker image</li>
        <li>Why it's needed: It automates the process of installing software, copying code, and setting up the environment for your application.</li>
        <li>Key Function: You use the docker build command to turn a Dockerfile into a portable image.</li>
        <li>Best for: Defining the internal configuration of a single service (e.g., a React dependencies and code in container)</li>
        </ul>
        

<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(320px,1fr))",
    gap: "20px",
    marginTop: "20px",
  }}
>

  {/* =======================================================
      SIMPLE DOCKERFILE
  ======================================================= */}

  <pre style={styles.code}>
{`

project/
│
├── client/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── src/
│
├── server/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── src/
│
├── .env
│
└── docker-compose.yml

==============================
FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm","start"]


==============================================================
From node:20 --set base image
Label maintainer= "------"/ Label build_number = \${build} -- metadata to image
Env app_env = 'prod' --- Define Environment variables
workDir /app ----- set working directory
copy ./app ---- copy files into image like package.json or any code ones
Run        --- post installation runs image
Expose --- assign a port
CMD ['npm','start']------- set default command to run
Entrypoint ['npm', 'start']-- set entry point
User appUser -- switch to non-root user
Arg build_number -- define arguments can be added by kubernetes yaml files
volume ['/data'] -- create mount point
`}
  </pre>
<pre style={styles.code}>
{`FROM node:20 AS base

LABEL maintainer="praveen"
LABEL project="fullstack-app"
ARG BUILD_NUMBER=1
ENV NODE_ENV=production
ENV PORT=5000
ENV APP_ENV=prod
WORKDIR /app

# ================= dependencies =================
FROM base AS dependencies
COPY package*.json ./
RUN npm install

# ================= build =================
FROM dependencies AS build
COPY . .
# RUN npm run build

# ================= production =================
FROM node:20-slim AS production
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app .
RUN useradd -m appUser
USER appUser
VOLUME ["/app/uploads"]
EXPOSE 5000
ENTRYPOINT ["npm"]
CMD ["start"]
`}
</pre>

  {/* =======================================================
      EXPLANATION
  ======================================================= */}

  <pre style={styles.code}>
{`
🔥 Dockerfile Full Explanation
================================
FROM -- Base operating system/image
Example: FROM node:20
Means: Use official Node.js image
================================
WORKDIR -- Working directory inside container
Example: WORKDIR /app
Means: All future commands run inside /app
================================
COPY-- Copies files from local machine to docker container
Example: COPY . .
Means: Copy entire project
================================
RUN: Executes commands while building
Example: RUN npm install
Means: Install dependencies
================================
EXPOSE: Documents/open container port
Example: EXPOSE 5000
Means: Backend runs on port 5000
================================
CMD: Default startup command
Example: CMD ["npm","start]
Means: Runs app when container starts
================================
AS base: Names build stage
Example: FROM node:20 AS base
Now reusable later
================================
FROM base AS build--- Uses previous stage
Avoids duplicate setup
================================
COPY --from=build: Copies files from another stage
Example: COPY --from=build /app .
Means: Take built files from build stage
================================
node:20: Smaller optimized production image
Better for deployment
================================
Without Multi Stage: Large image size, Includes unnecessary files
With Multi Stage:- Smaller image, Faster deployment, More optimized, Production ready
===============================
🔥 Docker Build Flow
---------------------
BASE
  ↓
DEPENDENCIES
  ↓
BUILD
  ↓
PRODUCTION
Frontend: Usually served with nginx
Backend: Node + Express container
Database: Separate postgres container
Redis: Separate redis container
`}
  </pre>
</div>
      </section>

      {/* ========================================= */}
      {/* DOCKER COMMANDS */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🖥️ Important Docker Commands
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`# build image
docker build -t myapp .

# run container
docker run -p 5000:5000 myapp

# see containers
docker ps

# stop container
docker stop container_id

# remove container
docker rm container_id
`}
          </pre>

          <pre style={styles.code}>
{`# see images
docker images

# remove image
docker rmi image_id

# logs
docker logs container_id

# enter container
docker exec -it container_id bash
`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* DOCKER COMPOSE */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ⚡ docker-compose.yml (orchestrator of docker containers in yaml file & allows multiple containers to interact)
        </h2>
        <ul>
          <li>Docker compose is atool for defining and running multi-container applications using a single YAML file</li>
          <li>Why it's needed: Most modern apps require multiple services to work together (e.g., a frontend, a backend, and a database). Without Compose, you would have to manually run dozens of complex docker run commands.</li>
          <li>Key Function: You use the docker compose up command to start your entire stack at once, including networks and volumes.</li>
          <li>by using docker.compose we have 3 different containers for server, frontend, database and allow them to run at a time instead of starting manually</li>
        </ul>
        <div style={styles.grid}>
          <pre style={styles.code}>
{`version: "3"
services:
  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
  backend:
    build: ./backend
    ports:
      - "5000:5000"
  postgres:
    image: postgres
    environment:
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
`}
          </pre>
          <pre style={styles.code}>
{`
🔥 Why Docker Compose?
Instead of starting:
frontend
backend
database

manually one by one

single command:
docker-compose up
`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* KUBERNETES */}
      {/* ========================================= */}
<img src={kubernetesConcepts} alt="img"/>
      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ☸️ Kubernetes Important Concepts
        </h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(260px,1fr))",
    gap: "18px",
    marginTop: "20px",
  }}
>

  <pre style={styles.code}>
{`☸️ CLUSTER
============
Collection of machines/nodes running Kubernetes.

Contains:
-----------
• Master Node    • Worker Nodes

Responsibilities:
------------------
• Manage containers • Scheduling
• Scaling           • Networking

Example:
---------
1 cluster may contain:
- 5 worker nodes
- 200 pods
`}
  </pre>

  <pre style={styles.code}>
{`🧠 MASTER NODE
================
Controls the cluster.

Main Components:
-----------------
• API Server    
• Scheduler
• Controller Manager
• ETCD Database

Responsibilities:
------------------
• Assign pods    
• Monitor cluster
• Handle deployments
• Maintain desired state`}
  </pre>

  <pre style={styles.code}>
{`🖥️ WORKER NODE
=================
Machine where apps run.

Contains:
-----------
• Pods
• Containers
• kubelet
• container runtime

Responsibilities:
------------------
• Runs application containers
• Communicates with master
• Handles pod execution`}
  </pre>

  <pre style={styles.code}>
{`📦 POD
=========
Smallest deployable unit in Kubernetes.
Contains:
-----------
• One or more containers
• Shared networking
• Shared storage
Usually:
----------
1 app container per pod

Important:
------------
Pods are temporary.

Destroyed/recreated often the Persistance volume claim  (pv claim) manage storage.

pv, pv controller -- pv -gives storage class, pvc-- checks and gives data to new pods.

Deployment manages`}
  </pre>

  <pre style={styles.code}>
{`⚙️ DEPLOYMENT
================
Manages pods automatically.
Features:
-----------
• Auto healing of pods
• Auto scaling of pods
• Rolling updates
• Rollbacks

Responsibilities:
-------------------
Keeps desired number of pods always running.
Example: 3 React app pods`}
  </pre>

  <pre style={styles.code}>
{`🌍 SERVICE
=============
Exposes pods to network.

Without service:
-----------------
Pods inaccessible.

Types provided by services:
---------------------------
• ClusterIP
• NodePort
• LoadBalancer

Responsibilities:
-------------------
• Stable networking
• Load balancing
• Pod communication`}
  </pre>

  <pre style={styles.code}>
{`📈 HPA (Horizontal Pod AutoScaler)
=========
Automatically increases or decreases pods.

Based On:
-----------
• CPU usage
• Memory usage
• Custom metrics

Example:
----------
2 pods → 10 pods
during heavy traffic
`}
  </pre>

  <pre style={styles.code}>
{`🗂️ CONFIGMAP
===============
Stores non-sensitive configuration data.

Examples:
-----------
• API URLs
• App settings
• Environment configs

Usage:
--------
Inject config into pods
without rebuilding image.
`}
  </pre>

  <pre style={styles.code}>
{`🔐 SECRET
============
Stores sensitive data.

Examples:
-----------
• JWT secrets
• Database passwords
• API keys

Important:
------------
More secure than ConfigMap.
`}
  </pre>

  <pre style={styles.code}>
{`💾 VOLUME
============
Persistent storage for pods.

Why Needed?
-------------
Pods are temporary.

Stores:
---------
• Images     • Uploads
• Logs       • Database files

Without volumes:
------------------
Data lost after pod restart.`}
  </pre>

  <pre style={styles.code}>
{`🌐 INGRESS
=============
HTTP/HTTPS entry point to cluster.

Responsibilities:
-------------------
• Route traffic
• SSL termination
• Domain mapping

Example:
----------
api.app.com → backend
app.com → frontend`}
  </pre>

  <pre style={styles.code}>
{`🐳 CONTAINER
===============
Lightweight isolated app environment.

Contains:
-----------
• App code
• Runtime
• Dependencies

Examples:
-----------
• Node container
• Redis container
• PostgreSQL container`}
  </pre>

  <pre style={styles.code}>
{`📦 IMAGE
===========
Blueprint/template used to create containers.

Contains:
-----------
• Code
• Dependencies
• OS libraries

Example: node:20, nginx:alpine
`}
  </pre>

  <pre style={styles.code}>
{`⚡ KUBELET
=============
Agent running on every worker node.

Responsibilities:
-------------------
• Talks to master
• Starts containers
• Monitors pods
`}
  </pre>

  <pre style={styles.code}>
{`🗃️ ETCD
===========
Key-value database of Kubernetes cluster.

Stores:
---------
• Cluster state
• Pod info
• Configurations
• Secrets

Very important: Cluster brain/database.`}
  </pre>

  <pre style={styles.code}>
{`🚀 NAMESPACE  (same cluster)
===============
Logical separation inside same Kubernetes cluster.

Used For:
-----------
• Dev environment
• Testing
• Production

Benefits:
-----------
• Isolation
• Resource grouping
• Better organization

Example:
----------
frontend-dev
backend-prod
`}
  </pre>

  <pre style={styles.code}>
{`📋 REPLICASET
================
Ensures fixed number of pods always run.

Example:
----------
Desired Pods = 3

If 1 pod crashes:
------------------
ReplicaSet creates new pod.

Usually managed by:
--------------------
Deployment
`}
  </pre>

  <pre style={styles.code}>
{`🔄 ROLLING UPDATE
===================
Updates app without downtime.

Flow:
-------
Old pods removed slowly
New pods added gradually

Benefits:
-----------
• Zero downtime
• Safe deployments
• Easy rollback
`}
  </pre>

  <pre style={styles.code}>
{`⏪ ROLLBACK
=============
Reverts deployment to previous stable version.

Used When:
------------
• Deployment fails
• Bugs introduced
• App crashes

Command: kubectl rollout undo
`}
  </pre>

  <pre style={styles.code}>
{`📊 DAEMONSET
===============
Runs one pod on every worker node.

Used For:
-----------
• Monitoring agents
• Logging agents
• Security tools

Examples: Prometheus
`}
  </pre>

  <pre style={styles.code}>
{`🛢️ STATEFULSET
=================
Used for stateful apps.
Examples:
-----------
• PostgreSQL
• MongoDB
• Redis
• Kafka

Features:
-----------
• Stable hostname
• Persistent storage
• Ordered deployment`}
  </pre>

  <pre style={styles.code}>
{`⏰ CRONJOB
=============
Runs scheduled jobs.

Examples:
-----------
• Daily backups
• Report generation
• Cleanup scripts

Similar To: Linux cron jobs
`}
  </pre>

  <pre style={styles.code}>
{`⚡ JOB
=========
Runs task once and exits.

Examples:
-----------
• Database migration
• Batch processing
• Data import

Behavior: Completes and stops.`}
  </pre>

  <pre style={styles.code}>
{`📡 API SERVER
================
Main entry point of Kubernetes cluster.

Responsibilities:
-------------------
• Receives requests
• Validates configs
• Communicates with ETCD

All kubectl commands go through API server.
`}
  </pre>

  <pre style={styles.code}>
{`🧠 SCHEDULER
===============
Decides where pods run.

Checks:
---------
• CPU
• Memory
• Node health
• Constraints

Responsibilities: Assigns pod to worker node.
`}
  </pre>

  <pre style={styles.code}>
{`🎮 CONTROLLER MANAGER
========================
Maintains desired state.

Example:
----------
Desired Pods = 5
Current Pods = 3

Controller creates: 2 new pods
`}
  </pre>

  <pre style={styles.code}>
{`🔗 KUBEPROXY
===============
Handles pod networking.

Responsibilities:
-------------------
• Load balancing
• Network routing
• Service communication

Runs on: Every worker node`}
  </pre>

  <pre style={styles.code}>
{`📦 HELM 
===========
Package manager for Kubernetes.

Similar To: npm for react, helm for Kubernetes

Used For:
-----------
• Install apps
• Reusable templates
• Version management
`}
  </pre>

  <pre style={styles.code}>
{`🧪 READINESS PROBE
====================
Checks whether pod is ready for traffic.

If failed:
------------
Service won't send traffic.`}
  </pre>

  <pre style={styles.code}>
{`❤️ LIVENESS PROBE
===================
Checks whether app inside pod is alive.

If failed: Kubernetes restarts pod.
`}
  </pre>

  <pre style={styles.code}>
{`📈 RESOURCE LIMITS
====================
Controls CPU and memory.

Types:
-------
• Requests
• Limits

Benefits:
-----------
• Prevent crashes
• Avoid resource abuse`}
  </pre>

  <pre style={styles.code}>
{`🌍 LOAD BALANCER
===================
Distributes traffic across pods.

Benefits:
-----------
• High availability
• Scalability
• Fault tolerance`}
  </pre>

  <pre style={styles.code}>
{`🧱 NODE SELECTOR
===================
Forces pod to run on specific nodes.

Example:
----------
GPU workloads only on GPU nodes
`}
  </pre>
<pre style={styles.code}>
{`🌍 INGRESS
==============
Ingress exposes HTTP/HTTPS routes from outside cluster to internal services.

Responsibilities:
-------------------
• Route traffic
• Domain mapping
• SSL termination
• Path based routing

Example:
---------- 
api.app.com  -> backend
app.com      -> frontend

Without ingress: Need separate LoadBalancer for every service.

Ingress acts like Central traffic router
`}
</pre>

<pre style={styles.code}>
{`🚦 INGRESS CONTROLLER
=======================
Ingress itself is only configuration rules.

Ingress Controller is the actual component that implements those rules.

Responsibilities:
-------------------
• Reads ingress configs
• Routes incoming traffic
• Manages reverse proxy
• Handles SSL

Popular Controllers:
---------------------
• NGINX Ingress
• Traefik
• HAProxy
• AWS ALB

Important: Without ingress controller, Ingress resource does nothing.
`}
</pre>
<pre style={styles.code}>
{`🔥 NGINX
===========
NGINX is a very fast web server and reverse proxy server.

Used For:
-----------
• Serve frontend apps
• Reverse proxy
• Load balancing
• SSL handling
• API gateway
• Static file hosting

Pronounced: "Engine-X"

===========================
Browser Request
       ↓
     NGINX
       ↓
React / Node / API / Pods

==================================================

🔥 WHAT NGINX DOES
====================

1. Serves frontend files
--------------------------------
React build files HTML/CSS/JS

2. Reverse Proxy
------------------
Routes requests to backend.
Example: /api -> Node backend

3. Load Balancing
-------------------
Distributes traffic across servers.

Example: Request 1 -> Server A,
Request 2 -> Server B

4. SSL Termination
--------------------
Handles HTTPS certificates.

5. Caching
-------------
Stores responses for faster loading.

==================================================

🔥 WITHOUT NGINX
==================

Client directly calls backend.

Problems:
----------
• No load balancing
• Hard SSL management
• Poor scalability
• Exposes backend directly
`}
</pre>
<pre style={styles.code}>
  {`WITH NGINX
================
Client
  ↓
NGINX
  ↓
Backend Servers

Benefits:
-----------
• Faster
• Secure
• Scalable
• Centralized routing

==================================================
🔥 REVERSE PROXY
==================
NGINX sits between client and backend.

Client thinks: Talking to same server.

But NGINX internally routes to actual backend server.

==================================================

🔥 REAL WORLD EXAMPLE
======================

Frontend: React App
Backend: Node.js API

Flow:
-------
Browser
   ↓
NGINX
   ↓
React Static Files

Browser -> /api/users
   ↓
NGINX
   ↓
Node Backend`}
</pre>
<pre style={styles.code}>
  {`🔥 NGINX CONFIG EXAMPLE
=========================
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    index index.html;
  }
  location /api {
    proxy_pass http://localhost:5000;
  }
}

==================================================

🔥 NGINX IN KUBERNETES
========================

NGINX commonly used as:
• Ingress Controller
• Reverse Proxy
• Load Balancer

Flow:
-------
Internet
   ↓
NGINX Ingress
   ↓
Kubernetes Services
   ↓
  Pods

==================================================

🔥 DIFFERENCE
===============

NGINX
------
Actual software/server.

Ingress
---------
Kubernetes routing rules.

Ingress Controller
-------------------
Software implementing ingress.

NGINX Ingress Controller
-------------------------
NGINX acting as ingress controller.`}
</pre>
<pre style={styles.code}>
{`🔥 NGINX INGRESS CONTROLLER
=============================
Most popular ingress controller.
Uses: NGINX reverse proxy internally.

Features:
-----------
• Load balancing
• SSL termination
• Path routing
• Rate limiting
• Authentication
• Rewrite rules

Example Flow:
---------------
Browser
   ↓
NGINX Ingress
   ↓
Service
   ↓
Pods
Benefits:
-----------
• Single public entry point
• Better traffic management
• Production ready`}
</pre>
</div>
      </section>
  <img src={kubernetesBlueprint} alt="img"/>

      {/* ========================================= */}
      {/* POD YAML */}
      {/* ========================================= */}
      <section style={styles.section}>
  <h2 style={styles.subTitle}>
    ☸️ Realtime Kubernetes Architecture
  </h2>

<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)'}}>
    <pre style={styles.code}>
{`
User Browser
      ↓
DNS
      ↓
NGINX Ingress Controller
      ↓
Ingress Rules
      ↓
frontend-service
      ↓
Frontend Pods
      ↓
backend-service
      ↓
Backend Pods
      ↓
 ┌───────────────────────┐
 ↓                       ↓

redis-service            postgres-service
 ↓                       ↓

Redis Pod                PostgreSQL Pod
                              ↓
                      Persistent Volume

`}
  </pre>
  <pre style={styles.code}>
    {`================================================

🔥 Kubernetes Flow

Deployment
→ creates/manages pods

Service
→ stable networking

Ingress
→ external routing

Secret
→ passwords/tokens

ConfigMap
→ environment configs

PVC
→ persistent storage

HPA
→ auto scaling

Probes
→ health monitoring`}
  </pre>
</div>
</section>
<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🌐 Kubernetes Internal Communication
  </h2>

  <div style={styles.grid}>

{/* ====================================================== */}

<pre style={styles.code}>
{`
🔥 Pod → Service → Pod Flow

Frontend Pod
      ↓
backend-service:5000
      ↓
Backend Pod

================================================

Pods communicate using:

service-name:port

Examples:

backend-service:5000
redis-service:6379
postgres-service:5432

================================================

Pods DO NOT use:
❌ Pod IP directly

Reason:
Pod IP changes after restart.
`}
</pre>

{/* ====================================================== */}

<pre style={styles.code}>
{`
🔥 How Service DNS Created

apiVersion: v1
kind: Service

metadata:
  name: backend-service

================================================

Kubernetes automatically creates:

backend-service.default.svc.cluster.local

Short DNS used inside cluster:

backend-service

================================================

Frontend can call:

http://backend-service:5000
`}
</pre>

{/* ====================================================== */}

<pre style={styles.code}>
{`
🔥 Internal DNS Resolution

Frontend Pod
      ↓
backend-service
      ↓
Kubernetes DNS
      ↓
Backend Pod IPs

================================================

Kubernetes automatically resolves:

backend-service
      ↓
10.10.0.5
10.10.0.6
10.10.0.7

================================================

No manual IP management needed.
`}
</pre>

  </div>
</section>

{/* ====================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    ⚡ Frontend → Backend Communication
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`# frontend deployment

apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend-deployment
spec:
  replicas: 2

  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
        - name: frontend
          image: frontend:v1
          ports:
            - containerPort: 3000`}
</pre>

<pre style={styles.code}>
{`# backend service

apiVersion: v1
kind: Service
metadata:
  name: backend-service

spec:
  selector:
    app: backend
  ports:
    - port: 5000
      targetPort: 5000
  type: ClusterIP`}
</pre>

<pre style={styles.code}>
{`
🔥 React API Call

fetch(
 "http://backend-service:5000/products"
)

================================================

Frontend pod sends request
to backend-service.

backend-service forwards request
to backend pods automatically.

================================================

Load Balanced Between:

backend-pod-1
backend-pod-2
backend-pod-3
`}
</pre>

  </div>
</section>

{/* ====================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🌍 Service Discovery + Load Balancing
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`# backend deployment

apiVersion: apps/v1
kind: Deployment

metadata:
  name: backend-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
        - name: backend
          image: backend:v1
`}
</pre>

<pre style={styles.code}>
{`
🔥 selector Matching

Service selector:

selector:
  app: backend

================================================

Automatically finds:

labels:
  app: backend

================================================

backend-service
      ↓
backend-pod-1
backend-pod-2
backend-pod-3
`}
</pre>

<pre style={styles.code}>
{`
🔥 Load Balancing

Request 1
    ↓
backend-pod-1

Request 2
    ↓
backend-pod-2

Request 3
    ↓
backend-pod-3

================================================

Traffic distributed automatically.

If pod crashes:
Deployment recreates pod.
`}
</pre>

  </div>
</section>

{/* ====================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🧠 Backend → Redis Communication
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`# redis service
apiVersion: v1
kind: Service
metadata:
  name: redis-service
spec:
  selector:
    app: redis
  ports:
    - port: 6379
      targetPort: 6379
  type: ClusterIP
`}
</pre>

<pre style={styles.code}>
{`
🔥 Backend Redis Connection

const redis = new Redis({
  host: "redis-service",
  port: 6379,
});
`}
</pre>

<pre style={styles.code}>
{`
🔥 Redis Communication Flow

backend-pod
      ↓
redis-service:6379
      ↓
redis-pod

================================================

Used for:

✔ caching
✔ jwt blacklist
✔ sessions
✔ queue jobs

================================================

Reduces database queries.
`}
</pre>

  </div>
</section>

{/* ====================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🐘 Backend → PostgreSQL Communication
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`# postgres service

apiVersion: v1
kind: Service
metadata:
  name: postgres-service
spec:
  selector:
    app: postgres
  ports:
    - port: 5432
      targetPort: 5432
  type: ClusterIP
`}
</pre>

<pre style={styles.code}>
{`
🔥 PostgreSQL Connection

const pool = new Pool({
  host: "postgres-service",
  port: 5432,
  user: "postgres",
  password: process.env.DB_PASSWORD,
  database: "appdb",
});
`}
</pre>

<pre style={styles.code}>
{`
🔥 PostgreSQL Flow

backend-pod
      ↓
postgres-service:5432
      ↓
postgres-pod
      ↓
Persistent Volume

================================================

PVC stores DB files permanently.

Data survives:
✔ restart
✔ redeploy
✔ crashes
`}
</pre>

  </div>
</section>

{/* ====================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🌐 External Internet Communication
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`# ingress

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
spec:
  ingressClassName: nginx
  rules:
    - host: app.praveen.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: frontend-service
                port:
                  number: 80`}
</pre>

<pre style={styles.code}>
{`
🔥 External Traffic Flow

User Browser
      ↓
DNS
      ↓
NGINX Ingress Controller
      ↓
Ingress Rules
      ↓
frontend-service
      ↓
frontend-pods
`}
</pre>

<pre style={styles.code}>
{`
🔥 API Routing

app.praveen.com
      ↓
frontend-service

api.praveen.com
      ↓
backend-service

================================================

Ingress works like:

✔ reverse proxy
✔ router
✔ API gateway
✔ SSL manager
`}
</pre>

  </div>
</section>

{/* ====================================================== */}
```jsx
<section style={styles.section}>
  <h2 style={styles.subTitle}>
    ☁️ Real Production Kubernetes Communication Flow
  </h2>

<div style={styles.grid}>

<pre style={styles.code}>
{`
🌍 REAL FLOW

User Browser
      ↓
https://myapp.com
      ↓
DNS Provider
(Cloudflare / Route53)
      ↓
Public Load Balancer
      ↓
NGINX Ingress Controller
      ↓
Ingress Rules
      ↓
frontend-service
      ↓
frontend-pod-1
frontend-pod-2

Frontend API Request
      ↓
http://backend-service:5000
      ↓
backend-pod-1
backend-pod-2
backend-pod-3

Backend Internal Calls
      ↓
redis-service:6379
postgres-service:5432
`}
</pre>

<pre style={styles.code}>
{`
🔥 HOW URL WORKS

Frontend never calls:

❌ pod IP
❌ localhost

Reason:
Pods restart frequently.

Kubernetes Service creates:

✔ stable DNS name
✔ stable internal IP

Examples:

backend-service
redis-service
postgres-service

Kubernetes internal DNS converts:

backend-service
      ↓
backend pod IPs automatically

So frontend can always call:

http://backend-service:5000
`}
</pre>

<pre style={styles.code}>
{`
🔥 INTERNAL COMMUNICATION

Frontend Pod
      ↓
backend-service
      ↓
Backend Pods

Backend Pod
      ↓
redis-service
      ↓
Redis Pod

Backend Pod
      ↓
postgres-service
      ↓
Postgres Pod

Kubernetes automatically handles:

✔ routing
✔ DNS
✔ service discovery
✔ internal networking
✔ load balancing
`}
</pre>

</div>
</section>

{/* ===================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    ⚡ Backend Deployment + Service Connection
  </h2>

<div style={styles.grid}>

<pre style={styles.code}>
{`# backend deployment

apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
        - name: backend
          image: backend:v1
          ports:
            - containerPort: 5000`}
</pre>

<pre style={styles.code}>
{`# backend service
apiVersion: v1
kind: Service
metadata:
  name: backend-service
spec:
  selector:
    app: backend
  ports:
    - port: 5000
      targetPort: 5000
  type: ClusterIP
`}
</pre>

<pre style={styles.code}>
{`🔥 HOW THEY CONNECT

Deployment creates pods:

backend-pod-1
backend-pod-2
backend-pod-3

Each pod has label:

app: backend

Service selector:

selector:
  app: backend

finds all matching pods automatically.

Now service routes traffic:

backend-service:5000
      ↓
backend-pod-1
backend-pod-2
backend-pod-3

🔥 IMPORTANT

Deployment
→ creates/manages pods

Service
→ stable networking for pods
`}
</pre>

</div>
</section>

{/* ===================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🌐 Frontend Calling Backend APIs
  </h2>

<div style={styles.grid}>

<pre style={styles.code}>
{`// frontend react app

fetch(
 "http://backend-service:5000/products"
)

axios.get(
 "http://backend-service:5000/products"
)
`}
</pre>

<pre style={styles.code}>
{`
🔥 WHAT HAPPENS

frontend-pod
      ↓
backend-service
      ↓
Kubernetes Service
      ↓
One backend pod selected
      ↓
backend-pod-2
`}
</pre>

<pre style={styles.code}>
{`
🔥 LOAD BALANCING

backend-service automatically distributes:

request 1 → pod-1
request 2 → pod-2
request 3 → pod-3

No manual balancing needed.

Kubernetes Service acts like:

✔ internal load balancer
✔ internal DNS server
`}
</pre>

</div>
</section>

{/* ===================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🧠 Redis Integration With Backend
  </h2>

<div style={styles.grid}>

<pre style={styles.code}>
{`# redis deployment

apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
        - name: redis
          image: redis:7
          ports:
            - containerPort: 6379`}
</pre>

<pre style={styles.code}>
{`# redis service

apiVersion: v1
kind: Service
metadata:
  name: redis-service
spec:
  selector:
    app: redis
  ports:
    - port: 6379
      targetPort: 6379
  type: ClusterIP`}
</pre>

<pre style={styles.code}>
{`
🔥 BACKEND CONNECTION

Backend pod connects using:

redis-service:6379

Example:

const redis = new Redis({
  host: "redis-service",
  port: 6379,
});

🔥 WHY SERVICE NEEDED

Redis pod IP may change.

redis-service gives:

✔ stable hostname
✔ stable networking
✔ service discovery
`}
</pre>

</div>
</section>

{/* ===================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🐘 PostgreSQL + Persistent Storage
  </h2>

<div style={styles.grid}>

<pre style={styles.code}>
{`# postgres deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
        - name: postgres
          image: postgres:15
          ports:
            - containerPort: 5432`}
</pre>

<pre style={styles.code}>
{`# postgres service
apiVersion: v1
kind: Service
metadata:
  name: postgres-service
spec:
  selector:
    app: postgres
  ports:
    - port: 5432
      targetPort: 5432
  type: ClusterIP`}
</pre>

<pre style={styles.code}>
{`
🔥 BACKEND DATABASE CONNECTION

Backend pod connects using:

postgres-service:5432

Example:

const pool = new Pool({
  host: "postgres-service",
  port: 5432,
});

🔥 WHY PVC NEEDED

Without Persistent Volume:

pod restart
      ↓
database deleted

PVC stores database files permanently.

Data survives:
✔ restart
✔ redeploy
✔ crash
`}
</pre>

</div>
</section>

{/* ===================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🔐 Secrets + ConfigMap Injection
  </h2>

<div style={styles.grid}>

<pre style={styles.code}>
{`
# secret

apiVersion: v1
kind: Secret

metadata:
  name: backend-secret

type: Opaque

stringData:
  DB_PASSWORD: mypassword
  JWT_SECRET: supersecret
`}
</pre>

<pre style={styles.code}>
{`
# configmap

apiVersion: v1
kind: ConfigMap

metadata:
  name: backend-config

data:
  PORT: "5000"
  REDIS_HOST: redis-service
  DB_HOST: postgres-service
`}
</pre>

<pre style={styles.code}>
{`
# inject into backend pod

env:
  - name: DB_PASSWORD
    valueFrom:
      secretKeyRef:
        name: backend-secret
        key: DB_PASSWORD

  - name: REDIS_HOST
    valueFrom:
      configMapKeyRef:
        name: backend-config
        key: REDIS_HOST
`}
</pre>

</div>
</section>

{/* ===================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🔥 Backend App Using Environment Variables
  </h2>

<div style={styles.grid}>

<pre style={styles.code}>
{`
// backend/server.js

const pool = new Pool({
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
});

const redis = new Redis({
  host: process.env.REDIS_HOST,
});

jwt.sign(
  payload,
  process.env.JWT_SECRET
);
`}
</pre>

<pre style={styles.code}>
{`
🔥 FLOW

Secret
      ↓
Injected into pod
      ↓
Available inside process.env
      ↓
Backend app reads values

Kubernetes automatically injects:

✔ passwords
✔ jwt secrets
✔ hosts
✔ ports
✔ env configs
`}
</pre>

<pre style={styles.code}>
{`
🔥 BENEFITS

Without secrets/configmaps:

❌ hardcoded passwords
❌ hardcoded urls
❌ unsafe configs

Using Kubernetes:

✔ secure
✔ reusable
✔ environment based
✔ production ready
`}
</pre>

</div>
</section>

{/* ===================================================== */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🌍 Ingress + External Traffic Routing
  </h2>

<div style={styles.grid}>

<pre style={styles.code}>
{`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
spec:
  ingressClassName: nginx
  rules:
    - host: myapp.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: frontend-service
                port:
                  number: 80
          - path: /api
            pathType: Prefix
            backend:
              service:
                name: backend-service
                port:
                  number: 5000
`}
</pre>

<pre style={styles.code}>
{`
🔥 REQUEST FLOW

Browser
   ↓
myapp.com/api/products
   ↓
NGINX Ingress Controller
   ↓
Ingress Rules
   ↓
backend-service
   ↓
backend pod

myapp.com
   ↓
frontend-service
   ↓
frontend pod
`}
</pre>

<pre style={styles.code}>
{`
🔥 WHY INGRESS

Without ingress:

Need separate public IP
for every service.

Ingress allows:

✔ one domain
✔ path routing
✔ SSL
✔ reverse proxy
✔ centralized routing

NGINX Ingress Controller
actually processes traffic.
`}
</pre>

</div>
</section>

    <section style={styles.section}>
  <h2 style={styles.subTitle}>
    📦 Deployment YAML + Flow
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
        - name: backend
          image: praveen/backend:v1
          ports:
            - containerPort: 5000
          env:
            - name: NODE_ENV
              value: production
          resources:
            requests:
              memory: "128Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"`}
</pre>

<pre style={styles.code}>
{`
🔥 replicas: 3
----------------
Creates 3 backend pods.

🔥 selector
-------------
Deployment controls
pods having label:
app: backend

🔥 template
-------------
Blueprint for creating pods.

🔥 resources
--------------
Restrict CPU & memory.

🔥 image
----------
Docker image pulled
from registry.
`}
</pre>

  </div>
</section>

{/* ================================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🌍 Service YAML
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`apiVersion: v1
kind: Service
metadata:
  name: backend-service
spec:
  type: ClusterIP
  selector:
    app: backend
  ports:
    - protocol: TCP
      port: 80
      targetPort: 5000`}
</pre>

<pre style={styles.code}>
{`
🔥 targetPort
---------------
Container running port.

🔥 port
---------
Internal service port.

🔥 selector
-------------
Connects service to pods.

🔥 ClusterIP
--------------
Internal communication only.

Frontend Pod
      ↓
backend-service
      ↓
Backend Pods
`}
</pre>

  </div>
</section>

{/* ================================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🚦 Ingress YAML
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
spec:
  ingressClassName: nginx
  rules:
    - host: api.app.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: backend-service
                port:
                  number: 80`}
</pre>

<pre style={styles.code}>
{`
🔥 ingressClassName
--------------------
Uses NGINX ingress controller.

🔥 host
---------
Domain mapping.

🔥 backend service
-------------------
Ingress routes traffic
to backend-service.

Internet
    ↓
NGINX Ingress
    ↓
backend-service
    ↓
Backend Pods
`}
</pre>

  </div>
</section>

{/* ================================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🔐 Secret YAML
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`apiVersion: v1
kind: Secret
metadata:
  name: backend-secret
type: Opaque
data:
  JWT_SECRET: bXlzZWNyZXQ=
  DB_PASSWORD: cGFzc3dvcmQ=
`}
</pre>

<pre style={styles.code}>
{`
🔥 data
---------
Base64 encoded values.

Example:
-----------
mysecret -> bXlzZWNyZXQ=

🔥 Used for:
--------------
• JWT secrets
• DB passwords
• API keys

Injected into pods
securely.
`}
</pre>

  </div>
</section>

{/* ================================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🗂️ ConfigMap YAML
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`apiVersion: v1
kind: ConfigMap
metadata:
  name: backend-config
data:
  NODE_ENV: production
  API_URL: https://api.app.com
  PORT: "5000"
`}
</pre>

<pre style={styles.code}>
{`
🔥 Stores non-sensitive
configuration values.

Examples:
-----------
• API URLs
• Ports
• Environment names

Pods can access using:
-----------------------
process.env.PORT
`}
</pre>

  </div>
</section>

{/* ================================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    💾 Persistent Volume YAML
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`apiVersion: v1
kind: PersistentVolume
metadata:
  name: postgres-pv
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: /data/postgres
`}
</pre>

<pre style={styles.code}>
{`
🔥 Persistent storage
outside pod lifecycle.

Without PV:
-------------
Database data lost
when pod restarts.

Used For:
-----------
• PostgreSQL
• Redis
• Uploads
`}
</pre>

  </div>
</section>

{/* ================================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    📦 Persistent Volume Claim
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
`}
</pre>

<pre style={styles.code}>
{`
🔥 PVC requests storage
from PersistentVolume.

Flow:
-------
Pod
 ↓
PVC
 ↓
PV
 ↓
Actual Disk Storage
`}
</pre>

  </div>
</section>

{/* ================================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    📈 HPA YAML
  </h2>

  <div style={styles.grid}>

<pre style={styles.code}>
{`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: backend-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: backend-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
`}
</pre>

<pre style={styles.code}>
{`
🔥 CPU > 70%
---------------
Creates more pods.

🔥 minReplicas
----------------
Minimum running pods.

🔥 maxReplicas
----------------
Maximum scaling limit.

Traffic ↑
   ↓
Pods ↑
`}
</pre>

  </div>
</section>

      {/* ========================================= */}
      {/* INTERVIEW */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          💼 Interview Important Points
        </h2>

        <pre style={styles.code}>
{`
✅ Docker creates containers

✅ Kubernetes manages containers

✅ Pod = smallest deployable unit

✅ Deployment manages pods

✅ Service exposes pods

✅ Ingress handles routing

✅ replicas provide scaling

✅ Rolling updates avoid downtime

✅ Redis used for caching

✅ PostgreSQL stores persistent data

✅ Docker Compose manages multiple containers

✅ Kubernetes auto heals crashed pods
`}
        </pre>
      </section>

{/* ========================================= */}
{/* COMMUNICATION */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🔗 Kubernetes Communication Flow
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
🌍 USER REQUEST FLOW

Browser
   ↓
DNS
   ↓
Cloudflare
   ↓
Load Balancer
   ↓
Ingress Controller
   ↓
Kubernetes Service
   ↓
Pod
   ↓
Container
`}
    </pre>

    <pre style={styles.code}>
{`
🔥 Internal Communication

Frontend Pod
     ↓
backend-service
     ↓
Backend Pods
     ↓
redis-service
     ↓
Redis Pod
     ↓
postgres-service
     ↓
PostgreSQL Pod
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* CHALLENGES */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    ⚠️ Problems Without Kubernetes
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
❌ Server Crash

App stops completely

No auto recovery
`}
    </pre>

    <pre style={styles.code}>
{`
❌ Traffic Spike

1 server cannot handle
millions of requests
`}
    </pre>

    <pre style={styles.code}>
{`
❌ Manual Scaling

Need manual deployment
on multiple servers
`}
    </pre>

    <pre style={styles.code}>
{`
❌ Downtime During Deployments

Old server stopped
before new starts
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* WHY KUBERNETES */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    ☸️ Why Kubernetes Solves These
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
✅ Self Healing

If pod crashes:
Kubernetes recreates it
`}
    </pre>

    <pre style={styles.code}>
{`
✅ Auto Scaling

Traffic increases
   ↓
More pods created
`}
    </pre>

    <pre style={styles.code}>
{`
✅ Load Balancing

Traffic distributed
across pods
`}
    </pre>

    <pre style={styles.code}>
{`
✅ Rolling Updates

Deploy new version
without downtime
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* LOAD BALANCING */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    ⚖️ Load Balancing
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
Without Load Balancer

All traffic
      ↓
Single Pod
      ↓
Crash
`}
    </pre>

    <pre style={styles.code}>
{`
With Load Balancer

Requests
   ↓
Pod 1
Pod 2
Pod 3
Pod 4

Traffic distributed
`}
    </pre>
  </div>

  <pre style={styles.code}>
{`
🔥 Example

1 million users
      ↓
Load balancer distributes
to multiple backend pods
`}
  </pre>
</section>

{/* ========================================= */}
{/* SCALING */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    📈 Horizontal vs Vertical Scaling
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
📈 Vertical Scaling

Increase server power

2GB RAM
   ↓
32GB RAM

Problem:
Has limits
`}
    </pre>

    <pre style={styles.code}>
{`
📈 Horizontal Scaling

Add more servers/pods

Pod1
Pod2
Pod3
Pod4

Best scalable solution
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* HPA */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    ⚡ Horizontal Pod Autoscaler (HPA)
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
apiVersion: autoscaling/v2

kind: HorizontalPodAutoscaler

metadata:
  name: backend-hpa

spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: backend

  minReplicas: 2
  maxReplicas: 10

  metrics:
    - type: Resource

      resource:
        name: cpu

        target:
          type: Utilization
          averageUtilization: 70
`}
    </pre>

    <pre style={styles.code}>
{`
🔥 What Happens?

CPU usage > 70%
        ↓
Kubernetes creates pods

Traffic decreases
        ↓
Extra pods removed
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* NGINX */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🌍 NGINX
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
🔥 What is NGINX?

Web server

Reverse proxy

Load balancer

Can serve:
HTML
CSS
JS
APIs
`}
    </pre>

    <pre style={styles.code}>
{`
🔥 Reverse Proxy

User
  ↓
NGINX
  ↓
Backend Server

Backend hidden from public
`}
    </pre>
  </div>

  <pre style={styles.code}>
{`
🔥 Why NGINX Important?

✅ Load balancing
✅ SSL termination
✅ Reverse proxy
✅ Caching
✅ Compression
✅ Static file serving
`}
  </pre>
</section>

{/* ========================================= */}
{/* NGINX CONFIG */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    ⚙️ NGINX Config
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
server {
  listen 80;

  location / {
    proxy_pass
    http://backend-service;
  }
}
`}
    </pre>

    <pre style={styles.code}>
{`
🔥 Meaning

Browser request
      ↓
NGINX receives request
      ↓
Forwards to backend-service
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* INGRESS */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🚪 Ingress
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
🔥 What is Ingress?

Ingress routes external traffic
into cluster services

Acts like API Gateway
`}
    </pre>

    <pre style={styles.code}>
{`
Without Ingress

Frontend Service → IP
Backend Service → IP

Too many public IPs
`}
    </pre>

    <pre style={styles.code}>
{`
With Ingress

single-domain.com/api
single-domain.com/admin

Single entry point
`}
    </pre>

    <pre style={styles.code}>
{`
Ingress usually uses:

NGINX Ingress Controller
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* INGRESS YAML */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    📄 Ingress YAML
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
apiVersion: networking.k8s.io/v1

kind: Ingress

metadata:
  name: app-ingress

spec:
  rules:
    - host: myapp.com

      http:
        paths:
          - path: /

            pathType: Prefix

            backend:
              service:
                name: frontend-service

                port:
                  number: 80
`}
    </pre>

    <pre style={styles.code}>
{`
🔥 Flow

myapp.com
      ↓
Ingress
      ↓
frontend-service
      ↓
frontend pods
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* DAEMONSET */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    ⚙️ DaemonSet
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
🔥 DaemonSet

Runs pod on EVERY node

Example:
logging agent
monitoring agent
`}
    </pre>

    <pre style={styles.code}>
{`
Normal Deployment

3 replicas
→ random nodes

DaemonSet

1 pod per node
`}
    </pre>
  </div>

  <pre style={styles.code}>
{`
🔥 Real Examples

Prometheus Node Exporter

Fluentd

Datadog agents
`}
  </pre>
</section>

{/* ========================================= */}
{/* DAEMONSET YAML */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    📄 DaemonSet YAML
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
apiVersion: apps/v1

kind: DaemonSet

metadata:
  name: fluentd

spec:
  selector:
    matchLabels:
      app: fluentd

  template:
    metadata:
      labels:
        app: fluentd

    spec:
      containers:
        - name: fluentd

          image: fluentd
`}
    </pre>

    <pre style={styles.code}>
{`
🔥 Result

Every worker node gets:

1 fluentd pod
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* STATEFULSET */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🗄️ StatefulSet
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`🔥 StatefulSet
Used for databases like:
PostgreSQL
MongoDB
Kafka
Redis
`}
    </pre>

    <pre style={styles.code}>
{`
Why not Deployment?
Databases need:
Stable identity
Persistent storage
Ordered startup
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* CONFIGMAP */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    ⚙️ ConfigMap
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
🔥 ConfigMap

Stores non-secret configs

Example:
PORT
API_URL
ENVIRONMENT
`}
    </pre>

    <pre style={styles.code}>
{`
apiVersion: v1

kind: ConfigMap

metadata:
  name: app-config

data:
  PORT: "5000"
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* SECRET */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🔐 Secrets
  </h2>

  <div style={styles.grid}>
    <pre style={styles.code}>
{`
🔥 Secret

Stores sensitive data

JWT_SECRET
DB_PASSWORD
API_KEYS
`}
    </pre>

    <pre style={styles.code}>
{`
apiVersion: v1

kind: Secret

metadata:
  name: app-secret

type: Opaque

data:
  JWT_SECRET: abc123
`}
    </pre>
  </div>
</section>

{/* ========================================= */}
{/* REAL WORLD ARCH */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🏢 Real World Architecture
  </h2>

  <pre style={styles.code}>
{`
Users
   ↓
Cloudflare CDN
   ↓
Load Balancer
   ↓
NGINX Ingress
   ↓
Frontend Service
   ↓
Frontend Pods
   ↓
Backend Service
   ↓
Backend Pods
   ↓
Redis Cache
   ↓
PostgreSQL StatefulSet
`}
  </pre>
</section>

{/* ========================================= */}
{/* INTERVIEW */}
{/* ========================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    💼 Interview Important Concepts
  </h2>

  <pre style={styles.code}>
{`
✅ Docker creates containers

✅ Kubernetes manages containers

✅ Pod = smallest deployable unit

✅ Service exposes pods

✅ Ingress routes traffic

✅ NGINX works as reverse proxy

✅ Load balancer distributes traffic

✅ Horizontal scaling adds more pods

✅ DaemonSet runs on every node

✅ StatefulSet used for databases

✅ ConfigMap stores configs

✅ Secrets store sensitive values

✅ HPA automatically scales pods

✅ Rolling updates avoid downtime
`}
  </pre>
</section>
{/* =========================================================
    DOCKER + KUBERNETES INTERVIEW QUESTIONS
========================================================= */}

<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🎯 Docker + Kubernetes Interview Questions
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(500px,1fr))",
      gap: "20px",
    }}
  >

    {/* ================================================= */}
    {/* BASIC */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🐳 BASIC DOCKER QUESTIONS</h3>

      <pre style={styles.code}>
{`
1) What is Docker?

Docker is a containerization platform.

It packages:
- application
- dependencies
- runtime
- libraries

inside a container.

So app runs same everywhere.


------------------------------------------------

2) Difference between VM and Docker?

VM:
- Full OS
- Heavy
- Slow boot
- More RAM

Docker:
- Shares host kernel
- Lightweight
- Fast startup
- Less memory


------------------------------------------------

3) What is a Docker Image?

Blueprint/template.

Read-only layer.

Used to create containers.

Example:
node:20
postgres:15


------------------------------------------------

4) What is a Docker Container?

Running instance of image.

Image → execution → container


------------------------------------------------

5) What is Dockerfile?

Instructions to build image.

Example:
FROM node:20
COPY . .
RUN npm install
CMD ["npm","start"]


------------------------------------------------

6) Difference between CMD and ENTRYPOINT?

CMD:
Default command.
Can override.

ENTRYPOINT:
Main executable.
Harder to override.


------------------------------------------------

7) What is Docker Volume?

Persistent storage.

Without volume:
container delete → data lost

With volume:
data survives


------------------------------------------------

8) What is Docker Compose?

Runs multiple containers together.

Example:
- frontend
- backend
- postgres
- redis


------------------------------------------------

9) What is port mapping?

Host port → container port

Example:
-p 3000:3000


------------------------------------------------

10) Why Docker useful in teams?

Same environment everywhere.

Avoids:
'works on my machine'
problem.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* INTERMEDIATE */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>⚡ INTERMEDIATE DOCKER QUESTIONS</h3>

      <pre style={styles.code}>
{`
1) Explain Docker Layers

Each instruction creates layer.

FROM
RUN
COPY

Layers cached for faster builds.


------------------------------------------------

2) What is multi-stage build?

Reduces image size.

Build app in one stage.
Copy final files only.

Smaller production image.


------------------------------------------------

3) Difference between COPY and ADD?

COPY:
Simple file copy.

ADD:
Supports URL/tar extraction.

Mostly use COPY.


------------------------------------------------

4) Why alpine images used?

Smaller image size.

Example:
node:20-alpine


------------------------------------------------

5) How containers communicate?

Using Docker network.

Containers communicate using:
service/container names.


------------------------------------------------

6) What happens when container crashes?

Container stops.

Restart policies:
--restart always


------------------------------------------------

7) How to reduce image size?

- alpine images
- multi-stage builds
- remove unnecessary files
- .dockerignore


------------------------------------------------

8) What is .dockerignore?

Prevents unnecessary files entering image.

Example:
node_modules
.git


------------------------------------------------

9) Difference between bind mount and volume?

Bind Mount:
Host folder directly mapped.

Volume:
Managed by Docker.


------------------------------------------------

10) Why container immutable?

Container should not change runtime.

New deployment → new image.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* KUBERNETES BASIC */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>☸️ BASIC KUBERNETES QUESTIONS</h3>

      <pre style={styles.code}>
{`
1) What is Kubernetes?

Container orchestration platform.

Manages:
- deployment
- scaling
- networking
- recovery


------------------------------------------------

2) Why Kubernetes needed?

Docker alone cannot handle:
- auto scaling
- self healing
- load balancing
- large clusters


------------------------------------------------

3) What is a Pod?

Smallest deployable unit.

Usually:
1 container per pod.


------------------------------------------------

4) What is Deployment?

Manages pods.

Provides:
- rolling updates
- scaling
- self healing


------------------------------------------------

5) What is ReplicaSet?

Maintains desired pod count.

Example:
3 replicas always running.


------------------------------------------------

6) What is Service?

Stable network endpoint for pods.

Pods change IPs.
Service gives stable access.


------------------------------------------------

7) Types of Kubernetes Services?

- ClusterIP
- NodePort
- LoadBalancer


------------------------------------------------

8) What is ConfigMap?

Stores non-sensitive configs.

Example:
API_URL


------------------------------------------------

9) What is Secret?

Stores sensitive data.

Example:
passwords
tokens


------------------------------------------------

10) What is kubectl?

CLI tool for Kubernetes.

Examples:
kubectl get pods
kubectl logs
kubectl apply
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* ADVANCED KUBERNETES */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🚀 ADVANCED KUBERNETES QUESTIONS</h3>

      <pre style={styles.code}>
{`
1) What is Ingress?

API gateway/load balancer.

Routes traffic to services.

Example:
api.site.com → backend
app.site.com → frontend


------------------------------------------------

2) Difference between Ingress and Service?

Service:
Internal access.

Ingress:
External HTTP routing.


------------------------------------------------

3) What is HPA?

Horizontal Pod Autoscaler.

Automatically scales pods.

Based on:
CPU
memory


------------------------------------------------

4) What is DaemonSet?

Runs one pod per node.

Used for:
- logging
- monitoring
- security agents


------------------------------------------------

5) What is StatefulSet?

Used for stateful apps.

Example:
- PostgreSQL
- MongoDB
- Kafka


------------------------------------------------

6) What is Namespace?

Logical cluster separation.

Example:
dev
qa
prod


------------------------------------------------

7) What are taints and tolerations?

Control pod scheduling.

Taint:
blocks node.

Toleration:
allows pod.


------------------------------------------------

8) What is rolling update?

Gradually replaces old pods.

No downtime deployment.


------------------------------------------------

9) What is readiness probe?

Checks:
Can pod receive traffic?


------------------------------------------------

10) What is liveness probe?

Checks:
Is pod alive?

If failed:
restart pod.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* REALTIME */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🌍 REALTIME SCENARIO QUESTIONS</h3>

      <pre style={styles.code}>
{`
1) Why pods restart automatically?

Kubernetes desired state model.

If pod crashes:
new pod created.


------------------------------------------------

2) How Kubernetes performs load balancing?

Service distributes traffic across pods.


------------------------------------------------

3) How scaling works?

Increase replicas.

Example:
replicas: 5


------------------------------------------------

4) How frontend communicates backend?

Using service DNS.

Example:
http://backend-service


------------------------------------------------

5) How Redis used?

Caching layer.

Reduces DB load.


------------------------------------------------

6) Why ingress controller needed?

Ingress object alone doesn't work.

Need controller:
NGINX ingress controller.


------------------------------------------------

7) Why PostgreSQL not usually inside pods?

Stateful data risky.

Usually managed DB:
AWS RDS
Cloud SQL


------------------------------------------------

8) How zero downtime achieved?

Rolling deployments.


------------------------------------------------

9) Why health checks important?

Avoid sending traffic to broken pods.


------------------------------------------------

10) Explain complete production flow

User
 ↓
Cloudflare CDN
 ↓
Load Balancer
 ↓
Ingress NGINX
 ↓
Frontend Service
 ↓
Backend Service
 ↓
Redis Cache
 ↓
PostgreSQL
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* TRICKY */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🔥 TRICKY INTERVIEW QUESTIONS</h3>

      <pre style={styles.code}>
{`
1) Can multiple containers exist in pod?

YES.

Called sidecar pattern.


------------------------------------------------

2) Pod vs Container?

Pod:
wrapper/network unit.

Container:
actual running app.


------------------------------------------------

3) Why pod IP changes?

Pods ephemeral.

Service provides stable access.


------------------------------------------------

4) Difference between scaling container and pod?

Usually scale pods.

Not containers.


------------------------------------------------

5) Docker vs Kubernetes?

Docker:
container runtime.

Kubernetes:
orchestrator.


------------------------------------------------

6) Why use readiness probe?

Prevent traffic before app ready.


------------------------------------------------

7) What causes CrashLoopBackOff?

App repeatedly crashing.


------------------------------------------------

8) Why use namespaces?

Environment isolation.


------------------------------------------------

9) How secrets secured?

Base64 encoded by default.
Can use external secret managers.


------------------------------------------------

10) Why microservices difficult?

Challenges:
- networking
- monitoring
- distributed tracing
- debugging
- deployment complexity
`}
      </pre>
    </div>

  </div>
</section>
<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🌍 Real Life DevOps Challenges
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(500px,1fr))",
      gap: "20px",
    }}
  >

    {/* ================================================= */}
    {/* TRAFFIC SPIKE */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🔥 1) Sudden Traffic Spike</h3>

      <pre style={styles.code}>
{`
PROBLEM:
---------
Website suddenly gets huge traffic.

Example:
- IPL ticket booking
- Amazon sale
- Netflix release
- Product launch

Only 2 backend servers running.

Traffic increases:
10,000 → 500,000 users.

RESULT:
--------
- CPU 100%
- Pods crash
- Timeout errors
- Website down


SOLUTION:
---------
Kubernetes HPA
(Horizontal Pod Autoscaler)

Automatically creates more pods.

Example:
2 pods → 20 pods


FLOW:
-----
High CPU detected
      ↓
Kubernetes scales pods
      ↓
Load Balancer distributes traffic
      ↓
Application survives


TOOLS:
------
- Kubernetes HPA
- Load Balancer
- Redis cache
- CDN
- Cloudflare


INTERVIEW POINT:
----------------
Scaling manually is slow.
Autoscaling is critical.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* DATABASE OVERLOAD */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🐘 2) Database Overload</h3>

      <pre style={styles.code}>
{`
PROBLEM:
---------
Every request hits PostgreSQL.

Example:
Product page:
1 million users.

DB receives:
millions of SELECT queries.


RESULT:
--------
- Slow queries
- DB CPU high
- Connection exhaustion
- API timeout


SOLUTION:
---------
Use Redis cache.


FLOW:
-----
Frontend Request
      ↓
Backend checks Redis
      ↓
Cache HIT?
   YES → return instantly
   NO
      ↓
Query PostgreSQL
      ↓
Store in Redis
      ↓
Return response


BENEFIT:
--------
Response:
500ms → 20ms


REAL EXAMPLE:
-------------
Amazon product cache
Instagram feed cache
YouTube video metadata cache
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* ZERO DOWNTIME */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🚀 3) Zero Downtime Deployment</h3>

      <pre style={styles.code}>
{`
PROBLEM:
---------
Deploying new backend version.

Old approach:
Stop server → deploy → start.

RESULT:
--------
Users get:
503 Service Unavailable


SOLUTION:
---------
Rolling Deployment.


FLOW:
-----
Old Pods Running
      ↓
New Pods Created
      ↓
Traffic slowly shifts
      ↓
Old Pods removed


RESULT:
--------
No downtime.


KUBERNETES:
-----------
Deployment handles this automatically.


IMPORTANT:
-----------
Readiness probes ensure:
traffic only goes to healthy pods.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* CONTAINER CRASH */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>💥 4) Container Crash Recovery</h3>

      <pre style={styles.code}>
{`
PROBLEM:
---------
Node.js app crashes due to:
- memory leak
- uncaught error
- DB failure


WITHOUT KUBERNETES:
-------------------
Server stays down.


WITH KUBERNETES:
----------------
Kubernetes detects crash.

Automatically creates new pod.


FLOW:
-----
Container crashes
      ↓
Liveness probe fails
      ↓
Pod restarted automatically


BENEFIT:
--------
Self-healing system.


INTERVIEW KEYWORD:
------------------
Kubernetes desired state model.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* LOAD BALANCING */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>⚖️ 5) Load Balancing Problem</h3>

      <pre style={styles.code}>
{`
PROBLEM:
---------
Single backend server overloaded.

Need multiple backend servers.


SOLUTION:
---------
Load Balancer.


FLOW:
-----
User Requests
      ↓
NGINX / Ingress
      ↓
Traffic distributed:
- Pod 1
- Pod 2
- Pod 3


BENEFIT:
--------
No single server overload.


TOOLS:
------
- NGINX
- HAProxy
- Kubernetes Service
- Ingress Controller
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* SECRET MANAGEMENT */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🔐 6) Secret Management</h3>

      <pre style={styles.code}>
{`
PROBLEM:
---------
Hardcoding:
- DB password
- JWT secret
- API keys

inside code.


RISK:
-----
Code pushed to GitHub accidentally.


SOLUTION:
---------
Use:
- Kubernetes Secrets
- Environment variables
- Vault


BAD:
----
const password = "admin123"


GOOD:
-----
process.env.DB_PASSWORD


REAL TOOLS:
-----------
- AWS Secrets Manager
- Hashicorp Vault
- Kubernetes Secret
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* LOGGING */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>📜 7) Centralized Logging</h3>

      <pre style={styles.code}>
{`
PROBLEM:
---------
100 pods running.

Error occurs randomly.

Checking logs manually impossible.


SOLUTION:
---------
Centralized logging.


FLOW:
-----
Pods
 ↓
Fluentd / Logstash
 ↓
Elasticsearch
 ↓
Kibana Dashboard


BENEFIT:
--------
Search logs instantly.


STACK:
------
ELK Stack:
- Elasticsearch
- Logstash
- Kibana
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* MONITORING */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>📈 8) Monitoring & Alerts</h3>

      <pre style={styles.code}>
{`
PROBLEM:
---------
Server CPU becomes 99%.

Nobody notices.


RESULT:
--------
Production outage.


SOLUTION:
---------
Monitoring + Alerts.


TOOLS:
------
- Prometheus
- Grafana
- Datadog


FLOW:
-----
Collect Metrics
      ↓
Visualize dashboards
      ↓
Send alerts


ALERT EXAMPLE:
--------------
CPU > 90%
Send Slack alert.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* MICROSERVICES */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🔗 9) Microservice Communication</h3>

      <pre style={styles.code}>
{`
PROBLEM:
---------
Frontend calls:
- auth-service
- payment-service
- order-service

Need communication between services.


CHALLENGES:
-----------
- network failures
- retries
- timeout handling
- service discovery


SOLUTION:
---------
Kubernetes DNS.

Example:
http://auth-service


ADVANCED:
---------
Service mesh:
- Istio
- Linkerd
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* CICD */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>⚙️ 10) CI/CD Pipeline Challenge</h3>

      <pre style={styles.code}>
{`
PROBLEM:
---------
Manual deployment risky.

Developer may:
- forget steps
- deploy wrong version
- break production


SOLUTION:
---------
CI/CD pipeline.


FLOW:
-----
Developer Push
      ↓
GitHub Actions
      ↓
Run Tests
      ↓
Build Docker Image
      ↓
Push to DockerHub
      ↓
Deploy to Kubernetes


TOOLS:
------
- GitHub Actions
- Jenkins
- GitLab CI/CD
- ArgoCD
`}
      </pre>
    </div>

  </div>
</section>
<section style={styles.section}>
  <h2 style={styles.subTitle}>
    🏗️ Real Life DevOps Engineer Tasks & Challenges
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(500px,1fr))",
      gap: "20px",
    }}
  >

    {/* ================================================= */}
    {/* DAILY WORK */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>📅 1) Daily DevOps Engineer Work</h3>

      <pre style={styles.code}>
{`
Typical DevOps daily activities:

✅ Monitor production servers

✅ Check Kubernetes pods

✅ Investigate failed deployments

✅ Fix CI/CD pipeline issues

✅ Monitor CPU/RAM/traffic spikes

✅ Scale applications

✅ Handle outages

✅ Configure cloud services

✅ Manage secrets & environment vars

✅ Optimize Docker images

✅ Configure logging/monitoring

✅ Support developers


REALITY:
--------
DevOps is NOT only Docker.

It combines:
- development
- cloud
- networking
- Linux
- automation
- security
- monitoring
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* DEPLOYMENT */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🚀 2) Deployment Challenges</h3>

      <pre style={styles.code}>
{`
REAL PROBLEM:
-------------
New deployment breaks production.


EXAMPLE:
--------
Developer pushes bad code.

CI/CD automatically deploys.

Production API crashes.


CHALLENGES:
-----------
- downtime
- rollback difficulty
- version mismatch
- failed migrations


DEVOPS TASK:
------------
✅ Create rollback strategies

✅ Blue-Green deployment

✅ Rolling updates

✅ Health checks

✅ Canary deployments


REAL TOOLS:
-----------
- Kubernetes
- ArgoCD
- Jenkins
- GitHub Actions
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* INFRA */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>☁️ 3) Infrastructure Management</h3>

      <pre style={styles.code}>
{`
REAL TASK:
----------
Managing:
- servers
- cloud VMs
- networking
- Kubernetes clusters


CHALLENGES:
-----------
- server crashes
- high traffic
- scaling
- cloud billing
- security


DEVOPS ENGINEER DOES:
---------------------
✅ Create infrastructure

✅ Configure load balancers

✅ Setup auto scaling

✅ Setup backup systems

✅ Configure DNS

✅ Setup firewalls


CLOUD:
------
AWS
Azure
GCP
DigitalOcean
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* K8S */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>☸️ 4) Kubernetes Production Problems</h3>

      <pre style={styles.code}>
{`
REAL PROBLEMS:
--------------
Pods randomly crash.

Traffic suddenly increases.

Memory leak happens.

Node becomes unhealthy.


DEVOPS TASKS:
-------------
✅ Check pod logs

kubectl logs pod-name

✅ Debug events

kubectl describe pod

✅ Restart deployments

kubectl rollout restart

✅ Scale replicas

kubectl scale deployment


COMMON ERRORS:
--------------
CrashLoopBackOff
ImagePullBackOff
OOMKilled
Pending pods


REALITY:
--------
Debugging Kubernetes is hard.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* NETWORK */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🌐 5) Networking Challenges</h3>

      <pre style={styles.code}>
{`
REAL PROBLEM:
-------------
Frontend cannot communicate backend.


POSSIBLE ISSUES:
----------------
- wrong DNS
- CORS issue
- ingress issue
- firewall blocked
- SSL certificate expired


DEVOPS TASK:
------------
✅ Configure NGINX ingress

✅ Setup SSL certificates

✅ Setup DNS records

✅ Configure reverse proxy

✅ Fix load balancer rules


REAL TOOLS:
-----------
NGINX
Cloudflare
Ingress Controller
Route53
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* SECURITY */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🔐 6) Security Responsibilities</h3>

      <pre style={styles.code}>
{`
REAL CHALLENGES:
----------------
Secrets accidentally exposed.

Developers commit API keys.

Server ports publicly exposed.


DEVOPS ENGINEER:
----------------
✅ Setup secrets management

✅ Restrict access

✅ Configure IAM permissions

✅ Setup HTTPS

✅ Setup WAF/firewalls

✅ Rotate credentials


SECURITY TOOLS:
---------------
Vault
AWS IAM
Kubernetes Secrets
Cloudflare WAF


IMPORTANT:
----------
Security is major DevOps responsibility.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* COST */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>💰 7) Cloud Cost Optimization</h3>

      <pre style={styles.code}>
{`
REAL PROBLEM:
-------------
Cloud bill suddenly:
$500 → $20,000


CAUSES:
-------
- too many pods
- unused VMs
- large databases
- bad autoscaling


DEVOPS TASK:
------------
✅ Optimize infra

✅ Remove unused resources

✅ Reduce storage

✅ Optimize Kubernetes replicas

✅ Use spot instances


REALITY:
--------
Cloud cost optimization
is huge in companies.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* MONITOR */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>📊 8) Monitoring & Alert Fatigue</h3>

      <pre style={styles.code}>
{`
REAL PROBLEM:
-------------
Thousands of alerts daily.


RESULT:
--------
Engineers ignore alerts.


DEVOPS TASK:
------------
✅ Configure proper alerts

✅ Reduce false positives

✅ Create dashboards

✅ Setup observability


TOOLS:
------
Prometheus
Grafana
Datadog
NewRelic


IMPORTANT:
----------
Monitoring is not enough.

Meaningful alerts matter.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* DATABASE */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🐘 9) Database Challenges</h3>

      <pre style={styles.code}>
{`
REAL PROBLEMS:
--------------
- slow queries
- DB lock
- replication lag
- storage full
- backup failures


DEVOPS TASK:
------------
✅ Setup backups

✅ Setup replication

✅ Monitor DB health

✅ Configure Redis caching

✅ Optimize infra


TOOLS:
------
PostgreSQL
Redis
MongoDB
RDS
CloudSQL


IMPORTANT:
----------
Database outage =
entire product outage.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* INCIDENT */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🚨 10) Production Incident Handling</h3>

      <pre style={styles.code}>
{`
REAL INCIDENT:
--------------
Website suddenly down at 2AM.


DEVOPS ENGINEER:
----------------
✅ Investigates logs

✅ Checks Kubernetes cluster

✅ Checks database

✅ Checks ingress/load balancer

✅ Restarts services

✅ Performs rollback


CHALLENGES:
-----------
- pressure
- urgency
- debugging distributed systems


REALITY:
--------
Production incidents are stressful.


IMPORTANT SKILLS:
-----------------
- debugging
- calm thinking
- fast recovery
- communication
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* SOFT */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🤝 11) Communication Challenges</h3>

      <pre style={styles.code}>
{`
DEVOPS interacts with:
----------------------
- frontend teams
- backend teams
- QA teams
- security teams
- managers


REAL CHALLENGES:
----------------
Developer says:
'works on my machine'

DevOps says:
'fails in production'


RESPONSIBILITIES:
-----------------
✅ Coordinate deployments

✅ Explain infra issues

✅ Handle incidents

✅ Write documentation


REALITY:
--------
Communication is huge in DevOps.
`}
      </pre>
    </div>

    {/* ================================================= */}
    {/* MENTAL */}
    {/* ================================================= */}

    <div style={styles.card}>
      <h3>🧠 12) Biggest DevOps Reality</h3>

      <pre style={styles.code}>
{`
COMMON MISUNDERSTANDING:
------------------------
People think DevOps =
just Docker + Kubernetes.


REALITY:
--------
DevOps includes:

✅ Linux
✅ Networking
✅ Security
✅ Cloud
✅ CI/CD
✅ Monitoring
✅ Automation
✅ Scaling
✅ Incident response
✅ Databases
✅ Infrastructure
✅ Scripting


BIGGEST CHALLENGE:
------------------
Managing complexity at scale.


EXAMPLE:
--------
Millions of users.
Thousands of containers.
Hundreds of deployments daily.


THAT is real DevOps engineering.
`}
      </pre>
    </div>

  </div>
</section>
    </div>
    
      <ImageBanner />
    </>
  );
};

export default Kubernetes;