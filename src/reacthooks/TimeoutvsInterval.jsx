import React, { useEffect, useRef, useState } from "react";

function TimeoutvsInterval() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");

  const intervalRef = useRef(null);

  /* =========================================================
     🔴 TRAP 1: setInterval + stale closure
     ========================================================= */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // ❌ BUG: always logs initial value (0)
      console.log("Stale count:", count);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, []); // ❌ missing dependency → stale closure

  //fix
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1); // ✅ always latest value
    }, 1000);

    return () => clearInterval(id);
  }, []);




  /* =========================================================
     🔴 TRAP 2: setInterval overlap issue
     ========================================================= */
  useEffect(() => {
    const id = setInterval(async () => {
      console.log("Fetching...");
      await new Promise((res) => setTimeout(res, 3000)); // slow task
      console.log("Done");
    }, 2000);

    // ❌ BUG: next interval starts before previous finishes

    return () => clearInterval(id);
  }, []);

  //fix
  useEffect(() => {
    let active = true;

    const safeLoop = async () => {
      console.log("Safe fetching...");
      await new Promise((res) => setTimeout(res, 3000));
      console.log("Safe done");

      if (active) {
        setTimeout(safeLoop, 2000); // next run AFTER completion
      }
    };

    safeLoop();

    return () => {
      active = false;
    };
  }, []);

  /* =========================================================
     🔴 TRAP 3: setTimeout without cleanup (debounce bug)
     ========================================================= */
  useEffect(() => {
    const id = setTimeout(() => {
      setDebounced(search);
    }, 500);

    // ✅ FIX: cleanup previous timeout
    return () => clearTimeout(id);
  }, [search]);

  /* =========================================================
     🔴 TRAP 4: memory leak (missing cleanup)
     ========================================================= */
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Memory leak if not cleared");
    }, 5000);

    return () => clearInterval(id); // ✅ MUST
  }, []);

  return (
    <div style={{ padding: "20px", textAlign:'left' }}>
      <h2>⏱️ setTimeout vs setInterval Demo</h2>
      <span> setTimeout:- run once after a delay like run once -- debouncing, Retry logic</span><br/>
      <span>setInterval:- run repeately (continuous repetiton) -- stopwatch, timer,polling, monitoring/logging data </span>

      <h3>Counter (Correct Implementation)</h3>
      <p>Count: {count}</p>

      <h3>Debounce Example (useCase)</h3>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to debounce..."
      />
      <p>Debounced Value: {debounced}</p>

      {/* ------------------ THEORY ------------------ */}
      <h3>🧠 Interview Traps Covered</h3>
      <ul>
        <li>❌ setInterval causes stale closure</li>
        <li>❌ setInterval can overlap async tasks</li>
        <li>❌ setTimeout needs cleanup (debounce)</li>
        <li>❌ Memory leaks if timers not cleared</li>
        <li>❌ setTimeout is not exact timing (event loop)</li>
      </ul>

      <h3>💼 Use Cases</h3>
      <ul>
        <li>setTimeout → debounce, delay actions</li>
        <li>setInterval → clocks, polling (carefully)</li>
        <li>recursive setTimeout → safe polling</li>
      </ul>

      <h3>🔥 Pro Interview Takeaway</h3>
      <p>
        Prefer <b>recursive setTimeout</b> over setInterval for async tasks to
        avoid overlapping and gain better control.
      </p>
    </div>
  );
}

export default TimeoutvsInterval;