import React, { useEffect, useState } from 'react';

function UserCard({ userId, data, setData }) {

  useEffect(() => {
    // ✅ Step 1: create controller for this request
    const controller = new AbortController();

    async function fetchUser() {
      try {
        console.log("📡 Fetching user:", userId);

        // ✅ Step 2: pass controller.signal to fetch 
        // -- connect abort and fetch like controller.abort clicked this lets you know
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: controller.signal }
        );

        const response = await res.json();

        // ✅ Step 3: update state (only if not aborted)
        setData(response);

      } catch (err) {
        // ✅ Step 4: handle abort separately
        if (err.name === "AbortError") {
          console.log("🛑 Request Aborted");
        } else {
          console.log("❌ Error:", err);
        }
      }
    }

    fetchUser();

    // ✅ Step 5: cleanup (runs on unmount or userId change)
    return () => {
      controller.abort(); // cancel previous request
      console.log("🧹 Cleanup: Request Cancelled");
    };

  }, [userId, setData]); // runs when userId changes

  return (
    <div style={{ marginTop: "20px" }}>
      {data ? (
        <div>
          <h3>{data.name}</h3>
          <p>{data.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

// 👇 Parent component
const AbortControllerDemo = () => {
  const [userId, setUserId] = useState(1);
  const [data, setData] = useState(null);
  const [show, setShow] = useState(true);

  // 👇 If component unmounted
  if (!show) {
    return (
      <div style={{ padding: '20px' }}>
        <h3>Component Unmounted</h3>
        <button onClick={() => setShow(true)}>Mount</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>AbortController Example</h2>

<code style={{textAlign:'left'}}><pre>
  {`  useEffect(() => {
    // ✅ Step 1: create controller for this request
    const controller = new AbortController();

    async function fetchUser() {
      try {
        console.log("📡 Fetching user:", userId);

        // ✅ Step 2: pass controller.signal to fetch 
        // -- connect abort and fetch like controller.abort clicked this lets you know
        const res = await fetch('https://jsonplaceholder.typicode.com/users/${userId}',
          { signal: controller.signal }
        );

        const response = await res.json();

        // ✅ Step 3: update state (only if not aborted)
        setData(response);

      } catch (err) {
        // ✅ Step 4: handle abort separately
        if (err.name === "AbortError") {
          console.log("🛑 Request Aborted");
        } else {
          console.log("❌ Error:", err);
        }
      }
    }

    fetchUser();

    // ✅ Step 5: cleanup (runs on unmount or userId change)
    return () => {
      controller.abort(); // cancel previous request
      console.log("🧹 Cleanup: Request Cancelled");
    };

  }, [userId, setData]); // runs when userId changes
`}
  </pre></code>

      <UserCard userId={userId} data={data} setData={setData} />

      <button onClick={() => setUserId(prev => prev + 1)}>
        Next User
      </button>

      <button onClick={() => setShow(false)}>
        Unmount / Close
      </button>
    </div>
  );
};

export default AbortControllerDemo;