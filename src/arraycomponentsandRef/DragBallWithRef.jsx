import React, { useState, useRef } from "react";

const DragBallWithRef = () => {
  const [position, setPosition] = useState({
    x: 200,
    y: 200,
  });

  const dragging = useRef(false);

  const offset = useRef({ x: 0,y: 0,});

  const handleMouseDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;

    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  return (
    <>
    <h2>Dragging ball to required postion</h2>
    <code style={{textAlign:'left'}}>
        <pre>
{`const [position, setPosition] = useState({
    x: 200,
    y: 200,
    });

const dragging = useRef(false);

const offset = useRef({ x: 0,y: 0,});

const handleMouseDown = (e) => {
dragging.current = true;
offset.current = {
    x: e.clientX - position.x,
    y: e.clientY - position.y,
};
};

const handleMouseMove = (e) => {
if (!dragging.current) return;

setPosition({
    x: e.clientX - offset.current.x,
    y: e.clientY - offset.current.y,
});
};

const handleMouseUp = () => {
dragging.current = false;
};

return (
<div
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}
    style={{
    width: "100vw",
    height: "100vh",
    background: "black",
    position: "relative",
    overflow: "hidden",
    }}
>
    <div
    onMouseDown={handleMouseDown}
    style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "red",
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "grab",
    }}
    />
</div>
)`}   
        </pre>

    </code>
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "red",
          position: "absolute",
          left: position.x,
          top: position.y,
          cursor: "grab",
        }}
      />
    </div>
    </>
  );
};

export default DragBallWithRef;