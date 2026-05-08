import { useEffect, useRef, useState } from "react";

const RefDebouncedSearch = () => {
    const sectionStyle = {
        marginBottom: "30px",
        textAlign: "left",
    };

    const codeStyle = {
        background: "#f4f4f4",
        padding: "12px",
        borderRadius: "8px",
        maxHeight: "300px",
        overflowY: "auto",
        overflowX: "auto",

        fontSize: "14px",
        marginTop: "10px",
        whiteSpace: "pre-wrap",
        lineHeight: "24px",
    };

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "10px",
        textAlign: "left",
        display: "block",
        maxHeight: "300px",
        overflowY: "auto",
    };

    const cellStyle = {
        border: "1px solid #ccc",
        padding: "10px",
    };

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  // persists timer between renders
  const timerRef = useRef(null);

  const debounceRef = useRef((func, delay) => {
    return (...args) => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  });

  const handleSearch = (value) => {
    setResult("searching for " + value);
  };

  const debouncedSearchRef = useRef(
    debounceRef.current(handleSearch, 1000)
  );

  useEffect(() => {
    debouncedSearchRef.current(text);

    return () => clearTimeout(timerRef.current);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>RefDebouncedSearch -- initializing ref with debounce function for not persisting through renders</div>
      <h3>Why can't we use usememo/useCallback</h3>
      {/* ===================================================== */}
        <section style={sectionStyle}>
        <span>✅ Why useRef is preferred for Debounce</span>

        <pre style={codeStyle}>
        {`const debounceRef = useRef((func, delay) => {
        return (...args) => {
            clearTimeout(timerRef.current);

            timerRef.current = setTimeout(() => {
            func(...args);
            }, delay);
        };
        });


        WHY useRef?
        ------------

        ✔ persists between renders

        ref.current survives rerenders.

        Debounce needs:
        - persistent timer
        - stable function storage



        ✔ updating ref does NOT rerender

        timerRef.current = setTimeout(...)

        Timers are mutable values,
        not UI state.



        ✔ avoids debounce recreation

        useCallback/useMemo may recreate
        debounce function when dependencies change.

        That can reset debounce behavior.



        ❌ useCallback

        const debounce = useCallback(() => {}, [deps])

        Best for:
        - stable function references
        - preventing child rerenders

        NOT ideal for:
        - timers
        - mutable async persistence



        ❌ useMemo

        const debounce = useMemo(() => {}, [deps])

        Best for:
        - expensive calculations
        - memoized computed values

        NOT ideal for:
        - timer persistence
        - mutable async storage



        ✔ avoids stale closures

        useMemo/useCallback can capture old state values.

        useRef always gives latest mutable value.



        MENTAL MODEL
        ------------

        useRef
        → mutable persistent box


        useCallback
        → memoized function reference


        useMemo
        → memoized computed value



        Debounce needs:
        - mutable timer
        - persistence
        - no rerender
        - stable async behavior

        So useRef fits best.
        `}
        </pre>
        </section>
        {/* ===================================================== */}
        <section style={sectionStyle}>
        <span>✅ Stale Closure Problem</span>

        <pre style={codeStyle}>
        {`// ❌ STALE CLOSURE

        const [count, setCount] = useState(0);

        const logCount = useCallback(() => {
        setTimeout(() => {
            console.log(count);
        }, 2000);
        }, []);


        // count gets captured from FIRST render only

        // Example:
        // count = 0

        // click button many times
        // after 2 sec still logs:
        // 0

        // because closure froze old value




        // ✅ FIX WITH useRef

        const countRef = useRef(count);

        useEffect(() => {
        countRef.current = count;
        }, [count]);

        const logCount = () => {
        setTimeout(() => {
            console.log(countRef.current);
        }, 2000);
        };


        // useRef always holds latest mutable value
        `}
        </pre>
        </section>

      <input
        value={text}
        onChange={handleChange}
        placeholder="Debounced search..."
      />

      <p>Text: {text}</p>

      <p>Result: {result}</p>
    </>
  );
};

export default RefDebouncedSearch;