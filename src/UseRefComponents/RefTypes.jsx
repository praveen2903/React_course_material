import React, {
  useEffect,
  useRef,
  useState,
} from "react";

const RefTypes = () => {
  return (
    <section
      style={{
        padding: "20px",
        textAlign: "left",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Complete useRef Cheat Sheet</h2>

      <pre
        style={{
          background: "#111",
          color: "#00ff90",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          lineHeight: "1.8",
        }}
      >
{`====================================================
1. ACCESSING DOM ELEMENT
====================================================
Used for:
- focus input
- scroll
- play video
- click button manually

const inputRef = useRef<HTMLInputElement | null>(null)
<input ref={inputRef} />
inputRef.current?.focus()

====================================================
2. PREVENTING RE-RENDER
====================================================

Changing ref DOES NOT re-render component
const countRef = useRef(0)
const increment = () => {
  countRef.current++
  console.log(countRef.current)
}

Unlike state:
- state -> re-render
- ref -> no re-render

====================================================
3. STORING PREVIOUS VALUE
====================================================
const [count, setCount] = useState(0)

const prevCount = useRef<number>(0)

useEffect(() => {
  prevCount.current = count
}, [count])

console.log(prevCount.current)

Useful for:
- previous state
- previous props

====================================================
4. setTimeout STORAGE
====================================================

const timerRef = useRef<NodeJS.Timeout | null>(null)

useEffect(() => {
  timerRef.current = setTimeout(() => {
    console.log("hello")
  }, 2000)

  return () => {
    clearTimeout(timerRef.current!)
  }
}, [])

Useful:
- debounce
- cleanup
- intervals

====================================================
5. setInterval STORAGE -- allows access to start and stop
====================================================
const intervalRef = useRef<NodeJS.Timeout | null>(null)

const start = () => {
  intervalRef.current = setInterval(() => {
      console.log("running")
    }, 1000)

}
const stop = () => {
  clearInterval(intervalRef.current!)
}

====================================================
6. AVOIDING STALE CLOSURE
====================================================
const latestValue = useRef(0)
useEffect(() => {
  latestValue.current = count
}, [count])

setTimeout(() => {
  console.log(latestValue.current)
}, 3000)

Useful:
- latest state inside timeout
- websocket callbacks
- event listeners

====================================================
7. AUTO FOCUS INPUT
====================================================
const inputRef = useRef<HTMLInputElement | null>(null)

useEffect(() => {
  inputRef.current?.focus()
}, [])
====================================================
8. SCROLL TO ELEMENT
====================================================
const divRef = useRef<HTMLDivElement | null>(null)

const scrollToDiv = () => {
    divRef.current?.scrollIntoView({behavior: "smooth"})
}

====================================================
9. PLAY / PAUSE VIDEO
====================================================
const videoRef = useRef<HTMLVideoElement | null>(null)

const playVideo = () => {
  videoRef.current?.play()
}
const pauseVideo = () => {
  videoRef.current?.pause()
}

====================================================
10. TRACK RENDER COUNT
====================================================
const renderCount = useRef(0)
useEffect(() => {
  renderCount.current++
})
console.log(renderCount.current)

====================================================
11. DRAG AND DROP POSITION
====================================================
const positionRef = useRef({x: 0, y: 0,})
positionRef.current.x = 100

Useful:
- mouse tracking
- dragging
- canvas

====================================================
12. STORE WEBSOCKET
====================================================
const socketRef = useRef<WebSocket | null>(null)

useEffect(() => {
  socketRef.current = new WebSocket("ws://localhost:3000")
  return () => {socketRef.current?.close()}
}, [])

====================================================
13. STORE API ABORT CONTROLLER
====================================================
const abortRef = useRef<AbortController | null>(null)

const fetchData = async () => {
  abortRef.current = new AbortController()
  await fetch("/api", {signal:abortRef.current.signal})
}
====================================================
14. DETECT FIRST RENDER
====================================================
const firstRender = useRef(true)
useEffect(() => {
  if (firstRender.current) {
    firstRender.current = false
    return
  }
  console.log("updated")
}, [])

====================================================
15. CLICK OUTSIDE MODAL  - like ref store div position of modal
====================================================

const modalRef = useRef<HTMLDivElement | null>(null)
useEffect(() => {
    const handleClick = (e: MouseEvent) => {
    if (!modalRef.current?.contains(e.target as Node)) {
      console.log("outside click")
    }
  }
  document.addEventListener("click",handleClick)
  return () => {document.removeEventListener("click",handleClick)}
}, [])

====================================================
16. CANVAS ACCESS
====================================================
const canvasRef = useRef<HTMLCanvasElement | null>(null)
useEffect(() => {
  const ctx = canvasRef.current?.getContext("2d")
  ctx?.fillRect(20, 20, 100, 100)
}, [])
====================================================
17. STORE MUTABLE VALUE
====================================================
const dataRef = useRef({
  name: "praveen",
  age: 23,
})
dataRef.current.age = 24
Useful:
- cache
- mutable objects
- temp values

====================================================
18. FORWARD REF
====================================================
Parent can access child DOM
const Child = forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} />
})
====================================================
19. useImperativeHandle
====================================================
Custom methods exposed to parent
useImperativeHandle(ref, () => ({
  focusInput() {
    inputRef.current?.focus()
  }
}))
====================================================
20. DIFFERENCE
====================================================
STATE
-----
- causes re-render
- updates UI

REF
---
- no re-render
- stores mutable value
- persists between renders

====================================================
21. COMMON REF TYPES
====================================================

HTMLInputElement
HTMLDivElement
HTMLButtonElement
HTMLFormElement
HTMLTextAreaElement
HTMLSelectElement
HTMLImageElement
HTMLVideoElement
HTMLAudioElement
HTMLCanvasElement
HTMLAnchorElement

====================================================
22. EVENT TYPES
====================================================

React.ChangeEvent<HTMLInputElement>
React.MouseEvent<HTMLButtonElement>
React.KeyboardEvent<HTMLInputElement>
React.FormEvent<HTMLFormElement>
React.DragEvent<HTMLDivElement>
React.ClipboardEvent<HTMLInputElement>

====================================================
23. BEST PATTERN
====================================================
const ref = useRef<Type | null>(null)

example:
const inputRef = useRef<HTMLInputElement | null>(null)
====================================================
24. IMPORTANT NOTES
====================================================
useRef persists value between renders
Changing ref.current DOES NOT trigger re-render
Ref survives component re-renders
Ref is mutable
Ref is mainly used for:
- DOM access
- timers
- previous values
- mutable storage
- avoiding stale closures
====================================================`}
      </pre>
    </section>
  );
};

export default RefTypes;