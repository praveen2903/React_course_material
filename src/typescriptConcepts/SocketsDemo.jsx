import React from 'react'

const SocketsDemo = () => {
    const styles = {
  th: {
    border: "1px solid #444",
    padding: "12px",
    textAlign: "left",
  },

  tdTitle: {
    border: "1px solid #444",
    padding: "12px",
    background: "#222",
    color: "#00ff90",
    fontWeight: "bold",
  },

  td: {
    border: "1px solid #444",
    padding: "12px",
    background: "#1a1a1a",
    color: "#fff",
  },
};
  return (
    <>
    <section
  style={{
    padding: "20px",
    textAlign: "left",
    fontFamily: "sans-serif",
  }}
>

<h1>Polling vs WebSocket vs Socket.IO</h1>

<div
  style={{
    overflowX: "auto",
    marginBottom: "20px",
  }}
>
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
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
        <th style={styles.th}>Polling</th>
        <th style={styles.th}>WebSocket</th>
        <th style={styles.th}>Socket.IO</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td style={styles.tdTitle}>Connection</td>
        <td style={styles.td}>New request every time</td>
        <td style={styles.td}>Single persistent connection</td>
        <td style={styles.td}>Persistent connection</td>
      </tr>

      <tr>
        <td style={styles.tdTitle}>Protocol</td>
        <td style={styles.td}>HTTP</td>
        <td style={styles.td}>ws:// or wss://</td>
        <td style={styles.td}>Built on WebSocket</td>
      </tr>

      <tr>
        <td style={styles.tdTitle}>Real Time</td>
        <td style={styles.td}>❌ Slow</td>
        <td style={styles.td}>✔ Yes</td>
        <td style={styles.td}>✔ Yes</td>
      </tr>

      <tr>
        <td style={styles.tdTitle}>Auto Reconnect</td>
        <td style={styles.td}>❌ No</td>
        <td style={styles.td}>❌ Manual</td>
        <td style={styles.td}>✔ Built In</td>
      </tr>

      <tr>
        <td style={styles.tdTitle}>Rooms</td>
        <td style={styles.td}>❌ No</td>
        <td style={styles.td}>❌ Manual</td>
        <td style={styles.td}>✔ Yes</td>
      </tr>

      <tr>
        <td style={styles.tdTitle}>Broadcasting</td>
        <td style={styles.td}>❌ No</td>
        <td style={styles.td}>Manual</td>
        <td style={styles.td}>✔ Built In</td>
      </tr>

      <tr>
        <td style={styles.tdTitle}>Fallback</td>
        <td style={styles.td}>N/A</td>
        <td style={styles.td}>❌ No</td>
        <td style={styles.td}>✔ Polling Fallback</td>
      </tr>

      <tr>
        <td style={styles.tdTitle}>Latency</td>
        <td style={styles.td}>High</td>
        <td style={styles.td}>Very Low</td>
        <td style={styles.td}>Very Low</td>
      </tr>

      <tr>
        <td style={styles.tdTitle}>Best Use</td>
        <td style={styles.td}>Simple dashboard</td>
        <td style={styles.td}>Trading / Gaming</td>
        <td style={styles.td}>Chat / Production Apps</td>
      </tr>

    </tbody>
  </table>
</div>

{/* ================================================= */}

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "15px",
  }}
>

{/* POLLING */}

<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "15px",
    borderRadius: "10px",
  }}
>

<h3>Polling</h3>

<pre>
{`useEffect(() => {
  const interval =setInterval(
      async () => {
        const res = await fetch("/messages")
        const data = await res.json()
        console.log(data)
      },5000)

  return () =>clearInterval(interval)
}, [])

--------------------
Client
  ↓
GET /messages
  ↓
Response
  ↓
5 Seconds
  ↓
GET Again

--------------------

Usage

✔ Dashboard

✔ Analytics

✔ Reports

✔ Rare Updates
`}
</pre>

</div>

{/* WEBSOCKET */}

<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "15px",
    borderRadius: "10px",
  }}
>

<h3>WebSocket</h3>

<pre>
{`const socket = new WebSocket("ws://localhost:5000")

socket.onopen =() => {
    socket.send("Hello")
  }

socket.onmessage = (event) => {
    console.log(event.data)
  }
--------------------

Client
   ↓
Handshake
   ↓
Open Connection
   ↓
Message
   ↓
Message
   ↓
Message

--------------------
Usage

✔ Trading
✔ Live Tracking
✔ Gaming
✔ Notifications
✔ Realtime Apps
`}
</pre>

</div>

{/* SOCKET.IO */}

<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "15px",
    borderRadius: "10px",
  }}
>

<h3>Socket.IO</h3>

<pre>
{`
const socket =io("http://localhost:5000")
socket.emit("message","Hello")
socket.on("message", (msg) => {
    console.log(msg)
  }
)

--------------------
socket.emit()
      ↓
socket.on()
      ↓
room.emit()
      ↓
broadcast()

--------------------
Usage
✔ Chat Apps
✔ Group Chat
✔ Teams Clone
✔ Slack Clone
✔ Notifications
✔ Production Apps`}
</pre>

</div>

</div>

{/* ================================================= */}

<div
  style={{
    marginTop: "20px",
    background: "#111",
    color: "#00ff90",
    padding: "15px",
    borderRadius: "10px",
  }}
>

<pre>
{`
INTERVIEW FLOW
==============

Polling
--------
Client asks repeatedly

Client → Server
Client → Server
Client → Server

==================================

WebSocket
----------
One connection stays alive

Client ←→ Server

==================================

Socket.IO
----------
WebSocket
     +
Rooms
     +
Reconnect
     +
Broadcast
     +
Fallback Polling

==================================

Socket.IO Internally

Browser
   ↓
Socket.IO Client
   ↓
WebSocket Preferred
   ↓
Fallback Polling
   ↓
Socket.IO Server

==================================
`}
</pre>

</div>

</section>

<section
  style={{
    padding: "20px",
    textAlign: "left",
    fontFamily: "sans-serif",
  }}
>

<h1>Polling vs WebSocket vs Socket.IO Traps</h1>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "16px",
  }}
>

{/* ===================================================== */}
{/* POLLING */}
{/* ===================================================== */}

<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "10px",
  }}
>

<h3>Polling Traps</h3>

<pre>
{`
====================================================
TOO MANY REQUESTS
====================================================

setInterval(() => {

  fetch("/messages")

}, 1000)

Trap:
------
1000 users
↓
1000 requests/sec

====================================================
OVERLAPPING REQUESTS
====================================================

setInterval(async () => {

  await fetch("/api")

}, 1000)

Trap:
------
Slow API

New request starts
before old request finishes

====================================================
DELAYED UPDATES
====================================================

Polling every:

5 sec

User sends message
at second 1

Receives at second 5

Trap:
------
Not truly realtime

====================================================
WASTED BANDWIDTH
====================================================

GET /messages

[]

GET /messages

[]

GET /messages

[]

Trap:
------
No new data
but requests continue

====================================================
MEMORY LEAK
====================================================

useEffect(() => {

  const id =
    setInterval(...)

}, [])

Trap:
------
No clearInterval()

Interval runs forever

====================================================
MULTIPLE INTERVALS
====================================================

useEffect(() => {

  setInterval(...)

})

Trap:
------
Runs every render

Creates many intervals

====================================================
BAD FOR CHAT APPS
====================================================

Chat
Gaming
Stocks

Trap:
------
High latency

====================================================
`}
</pre>

</div>

{/* ===================================================== */}
{/* WEBSOCKET */}
{/* ===================================================== */}

<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "10px",
  }}
>

<h3>WebSocket Traps</h3>

<pre>
{`
====================================================
NO RECONNECT
====================================================

const socket =
  new WebSocket(url)

Trap:
------
Internet disconnects

Connection lost

Must reconnect manually

====================================================
NO CLEANUP
====================================================

useEffect(() => {

  const socket =
    new WebSocket(url)

}, [])

Trap:
------
Socket remains open

Memory leak

====================================================
FIX
====================================================

return () => {

  socket.close()

}

====================================================
DUPLICATE CONNECTIONS
====================================================

Component renders

new WebSocket()

Trap:
------
Many open sockets

====================================================
NO HEARTBEAT
====================================================

Client disconnects

Server still thinks
client connected

Trap:
------
Ghost connections

====================================================
MESSAGE FLOODING
====================================================

socket.send(data)

inside loop

Trap:
------
Thousands of messages

Network overload

====================================================
NO AUTHENTICATION
====================================================

ws://server

Trap:
------
Anyone can connect

Need JWT validation

====================================================
NO ROOMS
====================================================

WebSocket only

Trap:
------
Need manual room logic

====================================================
NO BROADCAST API
====================================================

Need manual client tracking

const clients = []

Trap:
------
Extra code

====================================================
`}
</pre>

</div>

{/* ===================================================== */}
{/* SOCKET.IO */}
{/* ===================================================== */}

<div
  style={{
    background: "#111",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "10px",
  }}
>

<h3>Socket.IO Traps</h3>

<pre>
{`
====================================================
FORGETTING CLEANUP
====================================================

socket.on(
  "message",
  handler
)

Trap:
------
Listener survives

Multiple executions

====================================================
FIX
====================================================

return () => {

  socket.off(
    "message",
    handler
  )

}

====================================================
MULTIPLE EMITS
====================================================

useEffect(() => {

  socket.emit(
    "join"
  )

})

Trap:
------
Runs every render

====================================================
JOINING ROOM TWICE
====================================================

socket.join(
  "room1"
)

socket.join(
  "room1"
)

Trap:
------
Duplicate logic

====================================================
BROADCASTING EVERYTHING
====================================================

io.emit(
  "message",
  data
)

Trap:
------
All users receive it

====================================================
BETTER
====================================================

io.to(room)
  .emit(
    "message",
    data
  )

====================================================
NO REDIS ADAPTER
====================================================

Server 1

Server 2

Trap:
------
Messages stay inside
single server

====================================================
FIX
====================================================

Redis Adapter

Server1
   ↓
 Redis
   ↓
Server2

====================================================
LARGE PAYLOADS
====================================================

socket.emit(
  "message",
  hugeObject
)

Trap:
------
Slow transmission

====================================================
TOO MANY EVENTS
====================================================

socket.emit()

socket.emit()

socket.emit()

socket.emit()

Trap:
------
Network congestion

====================================================
TRUSTING CLIENT DATA
====================================================

socket.on(
  "message",
  data
)

Trap:
------
Client may send
malicious payload

Always validate

====================================================
`}
</pre>

</div>

</div>

{/* ===================================================== */}

<div
  style={{
    marginTop: "20px",
    background: "#111",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "10px",
  }}
>

<pre>
{`
====================================================
MOST ASKED INTERVIEW TRAPS
====================================================

Polling
--------
❌ Too many requests

❌ Delayed updates

❌ Wasted bandwidth

❌ Multiple intervals

=================================

WebSocket
----------
❌ No reconnect

❌ No rooms

❌ No broadcasts

❌ Manual scaling

❌ Manual auth

=================================

Socket.IO
----------
❌ Forgetting cleanup

❌ Multiple listeners

❌ Missing Redis adapter

❌ Broadcasting to everyone

❌ Large payloads

=================================

PRODUCTION RULE
=================================

Polling
--------
Simple dashboards

WebSocket
----------
Ultra lightweight realtime

Socket.IO
----------
Most enterprise applications

(Chat, Teams, Slack,
Notifications, Collaboration)

====================================================
`}
</pre>

</div>

</section>
    </>
  )
}

export default SocketsDemo