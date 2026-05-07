import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");

  // 1️⃣ Runs on every render
  useEffect(() => {
    console.log("🔁 Runs on every render");
  });

  // 2️⃣ componentDidMount + componentWillUnmount
  useEffect(() => {
    console.log("✅ Component Mounted");

    const timer = setInterval(() => {
      console.log("⏰ Timer Running...");
    }, 2000);

    return () => {
      console.log("❌ Component Unmounted");
      clearInterval(timer);
    };
  }, []);

  // 3️⃣ componentDidUpdate when count changes
  useEffect(() => {
    console.log("📌 Count Updated:", count);
  }, [count]);

  // 4️⃣ Runs when text changes (Search API example)
  useEffect(() => {
    if (text) {
      console.log("🔍 Searching for:", text);
    }
  }, [text]);

  if (!show) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Component Removed</h1>
        <button onClick={() => setShow(true)}>Mount Again</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>useEffect Full Lifecycle Example- handles sideeffects component didmount, component didupdate, component unmount</h2>

      <div>Count: {count}</div>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setShow(false)}>
        Unmount Component
      </button>
    </div>
  );
}