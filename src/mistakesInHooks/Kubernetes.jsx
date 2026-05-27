import React from "react";

import deploymentImg from "../assets/deployment_walkthrough.jpeg";
import deploymentCloud from "../assets/gcp_cloud.png";
import kubernetesImg from "../assets/kubernetes.png";
import kubernetesSnippets from "../assets/kubernetes_snippets.jpeg";
import kubernetesDocker from "../assets/kubernetes_docker.png";
import cloudBackend from "../assets/cloud_in_backend.png";
import cloudServices from "../assets/cloud_services.png";
import cloudFlare from "../assets/clouldflare_usage.png";

function ImageBanner() {
  const images = [
    deploymentImg,
    deploymentCloud,
    kubernetesDocker,
    kubernetesImg,
    kubernetesSnippets,
    cloudBackend,
    cloudFlare,
    cloudServices,
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
    <div style={styles.page}>
      <h2 style={styles.title}>
        ☸️ Docker + Kubernetes + DevOps 
      </h2>

      <p>
        Complete DevOps deployment flow with
        Docker containers, Kubernetes,
        cloud deployment, pods, services,
        ingress, scaling and snippets.
      </p>

      <ImageBanner />

      {/* ========================================= */}
      {/* FLOW */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🚀 Complete Deployment Flow
        </h2>

        <pre style={styles.code}>
{`
Frontend React App
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
Service Exposes Pods
        ↓
Ingress / Load Balancer
        ↓
Users Access Website
`}
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
🐳 Docker

✅ Creates containers
✅ Packages app
✅ Runs isolated apps
✅ Lightweight VM alternative

Example:
React App
Node Backend
PostgreSQL

all run inside containers
`}
          </pre>

          <pre style={styles.code}>
{`
☸️ Kubernetes

✅ Manages containers
✅ Auto scaling
✅ Self healing
✅ Load balancing
✅ Rolling deployments

Docker creates containers
Kubernetes manages them
`}
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
{`
🐳 IMAGE

Blueprint/template

Example:
node:20
postgres:15

Contains:
OS + Runtime + Libraries
`}
          </pre>

          <pre style={styles.code}>
{`
📦 CONTAINER

Running instance of image

Image
   ↓
docker run
   ↓
Container
`}
          </pre>

          <pre style={styles.code}>
{`
📁 VOLUME

Persistent storage

Without volumes:
Container deleted
   ↓
Data lost

With volume:
Data survives
`}
          </pre>

          <pre style={styles.code}>
{`
🌍 PORT MAPPING

Container port exposed

Example:

5173:5173

localhost:5173
   ↓
container:5173
`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* DOCKERFILE */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          📄 Dockerfile
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]
`}
          </pre>

          <pre style={styles.code}>
{`
🔥 Explanation

FROM
→ base image

WORKDIR
→ inside container folder

COPY
→ copies files

RUN
→ executes commands

EXPOSE
→ opens port

CMD
→ start command
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
{`
# build image
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
{`
# see images
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
          ⚡ docker-compose.yml
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`
version: "3"

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

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ☸️ Kubernetes Important Concepts
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`
☸️ CLUSTER

Collection of machines

Contains:
Master Node
Worker Nodes
`}
          </pre>

          <pre style={styles.code}>
{`
📦 POD

Smallest deployable unit

Contains:
1 or more containers

Usually:
1 app container per pod
`}
          </pre>

          <pre style={styles.code}>
{`
⚙️ DEPLOYMENT

Manages pods

Features:
Auto healing
Scaling
Rolling updates
`}
          </pre>

          <pre style={styles.code}>
{`
🌍 SERVICE

Exposes pods

Without service:
Pods inaccessible
`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* POD YAML */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          📄 Pod YAML
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`
apiVersion: v1

kind: Pod

metadata:
  name: myapp-pod

spec:
  containers:
    - name: myapp

      image: myapp:latest

      ports:
        - containerPort: 5000
`}
          </pre>

          <pre style={styles.code}>
{`
🔥 Important

kind: Pod
→ creates pod

image:
→ docker image

containerPort:
→ app running port
`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* DEPLOYMENT */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ⚡ Deployment YAML
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`
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

          image: myapp:latest

          ports:
            - containerPort: 5000
`}
          </pre>

          <pre style={styles.code}>
{`
🔥 replicas: 3

Creates:

Pod 1
Pod 2
Pod 3

If one crashes:
Kubernetes auto recreates
`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* SERVICE */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🌍 Service YAML
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`
apiVersion: v1

kind: Service

metadata:
  name: backend-service

spec:
  selector:
    app: backend

  ports:
    - port: 80

      targetPort: 5000

  type: LoadBalancer
`}
          </pre>

          <pre style={styles.code}>
{`
🔥 targetPort

Container port

🔥 port

Public service port

🔥 LoadBalancer

Creates public IP
`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* KUBECTL */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🖥️ Important kubectl Commands
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`
# apply yaml
kubectl apply -f app.yml

# get pods
kubectl get pods

# get services
kubectl get svc

# get deployments
kubectl get deployments
`}
          </pre>

          <pre style={styles.code}>
{`
# pod logs
kubectl logs pod_name

# delete pod
kubectl delete pod pod_name

# describe pod
kubectl describe pod pod_name
`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* SCALING */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          📈 Auto Scaling
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`
Traffic increases
       ↓
Kubernetes detects load
       ↓
Creates more pods
       ↓
Traffic distributed
`}
          </pre>

          <pre style={styles.code}>
{`
Scale manually:

kubectl scale deployment
backend-deployment
--replicas=5
`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* ROLLING UPDATE */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🔄 Rolling Updates
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`
Old version running
       ↓
New pods created gradually
       ↓
Old pods removed slowly
       ↓
Zero downtime deployment
`}
          </pre>

          <pre style={styles.code}>
{`
kubectl set image
deployment/backend-deployment
backend=myapp:v2
`}
          </pre>
        </div>
      </section>

      {/* ========================================= */}
      {/* CLOUD */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          ☁️ Cloud Deployment Architecture
        </h2>

        <pre style={styles.code}>
{`
React Frontend
       ↓
Cloudflare CDN
       ↓
Load Balancer
       ↓
Kubernetes Cluster
       ↓
Backend Pods
       ↓
Redis Cache
       ↓
PostgreSQL Database
`}
        </pre>
      </section>

      {/* ========================================= */}
      {/* CLOUD SERVICES */}
      {/* ========================================= */}

      <section style={styles.section}>
        <h2 style={styles.subTitle}>
          🌍 Popular Cloud Services
        </h2>

        <div style={styles.grid}>
          <pre style={styles.code}>
{`
☁️ AWS

EC2
EKS
S3
RDS
CloudFront
`}
          </pre>

          <pre style={styles.code}>
{`
☁️ GCP

Compute Engine
GKE
Cloud Storage
Cloud SQL
`}
          </pre>

          <pre style={styles.code}>
{`
☁️ Azure

Virtual Machines
AKS
Blob Storage
Azure SQL
`}
          </pre>

          <pre style={styles.code}>
{`
☁️ Cloudflare

CDN
DNS
DDoS protection
Caching
SSL
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
{`
🔥 StatefulSet

Used for databases

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
  );
};

export default Kubernetes;