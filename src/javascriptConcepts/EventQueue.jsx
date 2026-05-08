import { useEffect, useRef, useState } from "react";

const EventBatchingDemo = () => {
  const queueRef = useRef([]);
  const timerRef = useRef(null);

  // logs shown in UI
  const [logs, setLogs] = useState([]);

  // menu open state
  const [open, setOpen] = useState({});

  // send batched data
  const sendBatch = () => {
    if (queueRef.current.length === 0) return;

    const batch = [...queueRef.current];

    console.log("🚀 API CALL:", batch);

    setLogs((prev) => [
      {
        type: "api",
        message: `🚀 Sent ${batch.length} events to API`,
        data: batch,
      },
      ...prev,
    ]);

    // clear queue
    queueRef.current = [];

    // clear timer
    clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  // click tracking
  const trackClick = (menu, submenu) => {
    const event = {
      menu,
      submenu,
      time: new Date().toLocaleTimeString(),
    };

    // add to queue
    queueRef.current.push(event);

    setLogs((prev) => [
      {
        type: "click",
        message: `👉 ${menu} → ${submenu}`,
      },
      ...prev,
    ]);

    // send immediately if queue reaches 5
    if (queueRef.current.length >= 5) {
      sendBatch();
      return;
    }

    // otherwise wait 3 sec
    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        sendBatch();
      }, 3000);
    }
  };

  // cleanup
  useEffect(() => {
    return () => sendBatch();
  }, []);

  const menus = [
    {
      name: "Home",
      items: ["Dashboard", "Activity", "Reports"],
    },
    {
      name: "Profile",
      items: ["Info", "Edit Profile", "Settings"],
    },
    {
      name: "Products",
      items: ["Shoes", "Mobiles", "Laptops"],
    },
    {
      name: "Admin",
      items: ["Users", "Analytics", "Logs"],
    },
  ];

  return (
    <div
      style={{
        minHeight: "50vh",
        background: "#f5f7fb",
        padding: "30px",
        fontFamily: "sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Event Batching Demo
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "40px",
        }}
      >
        Event Batching (100 buttons on click you need to send a post call on each how do you handle)  - Demo shows Queue handles it
        store all clicks but Send 5 clicks at a time post an api call like wise in cycle reduce burden on cpu & some times post call may take
        more time we could use here promises too to parallely execute
      </p>
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            flex: 1,
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Menus</h2>

          {menus.map((menu) => (
            <div
              key={menu.name}
              style={{
                marginBottom: "20px",
              }}
            >
              <button
                onClick={() =>
                  setOpen((prev) => ({
                    ...prev,
                    [menu.name]: !prev[menu.name],
                  }))
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#2563eb",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                {menu.name}
              </button>

              {open[menu.name] && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "12px",
                  }}
                >
                  {menu.items.map((item) => (
                    <button
                      key={item}
                      onClick={() =>
                        trackClick(menu.name, item)
                      }
                      style={{
                        padding: "10px 14px",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        background: "white",
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: 1,
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            height: "300px",
            overflowY: "auto",
          }}
        >
          <h2>Queue Activity</h2>

          <div
            style={{
              marginBottom: "20px",
              padding: "12px",
              borderRadius: "10px",
              background: "#eef2ff",
            }}
          >
            <strong>Current Queue Size:</strong>{" "}
            {queueRef.current.length}
          </div>

          {logs.length === 0 && (
            <p style={{ color: "#777" }}>
              No events tracked yet...
            </p>
          )}

          {logs.map((log, index) => (
            <div
              key={index}
              style={{
                marginBottom: "14px",
                padding: "12px",
                borderRadius: "10px",
                background:
                  log.type === "api"
                    ? "#dcfce7"
                    : "#f8fafc",
                border:
                  log.type === "api"
                    ? "1px solid #22c55e"
                    : "1px solid #ddd",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "6px",
                }}
              >
                {log.message}
              </div>

              {log.data && (
                <pre
                  style={{
                    background: "white",
                    padding: "10px",
                    borderRadius: "8px",
                    overflowX: "auto",
                    fontSize: "13px",
                  }}
                >
                  {JSON.stringify(log.data, null, 2)}
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventBatchingDemo;