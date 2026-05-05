import { useRef, useState, useEffect } from "react";

const EventBatchingDemo = () => {
  // 👉 1. Queue to store clicks
  const queueRef = useRef([]);

  // 👉 2. Timer for delayed API call
  const timerRef = useRef(null);

  // 👉 3. Fake API call (replace with real API)
  const sendBatch = () => {
    if (queueRef.current.length === 0) return;

    console.log("🚀 API CALL (batched data):", queueRef.current);

    // clear queue after sending
    queueRef.current = [];
  };

  // 👉 4. Track clicks (THIS is the main function)
  const trackClick = (menu, submenu) => {
    const event = {
      menu,
      submenu,
      time: new Date().toLocaleTimeString()
    };

    console.log("👉 Click stored:", event);

    // add to queue
    queueRef.current.push(event);

    // ✅ Condition 1: if 5 clicks → send immediately
    if (queueRef.current.length >= 5) {
      sendBatch();
      return;
    }

    // ✅ Condition 2: otherwise wait 3 seconds
    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        sendBatch();
        timerRef.current = null;
      }, 3000);
    }
  };

  // 👉 5. Cleanup (send remaining data when leaving)
  useEffect(() => {
    return () => sendBatch();
  }, []);

  // 👉 6. UI (simple example with many buttons)
  const menus = [
    { name: "Home", items: ["Dashboard", "Activity", "Reports"] },
    { name: "Profile", items: ["Info", "Edit Profile"] }
  ];

  const [open, setOpen] = useState({});

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Batching (Simple Demo)</h2>

      {menus.map((menu) => (
        <div key={menu.name}>
          <button
            onClick={() =>
              setOpen((prev) => ({
                ...prev,
                [menu.name]: !prev[menu.name]
              }))
            }
          >
            {menu.name}
          </button>

          {open[menu.name] &&
            menu.items.map((item) => (
              <button
                key={item}
                onClick={() => trackClick(menu.name, item)}
                style={{ marginLeft: "10px" }}
              >
                {item}
              </button>
            ))}
        </div>
      ))}
    </div>
  );
};

export default EventBatchingDemo;