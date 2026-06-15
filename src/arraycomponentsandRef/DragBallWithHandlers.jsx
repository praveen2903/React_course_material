import React, { useState } from "react";

const DragBallWithHandlers = () => {
  const [position, setPosition] = useState({
    x: 200,
    y: 200,
  });

  const handleDragStart = (e) => {
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;

    e.dataTransfer.setData("text/plain", JSON.stringify({ offsetX, offsetY }));
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const data = JSON.parse(e.dataTransfer.getData("text/plain"));

    setPosition({
      x: e.clientX - data.offsetX,
      y: e.clientY - data.offsetY,
    });
  };

  return (
    <>
    <code style={{textAlign:'left'}}>
      <pre>
{`  const [position, setPosition] = useState({
    x: 200,
    y: 200,
  });

  const handleDragStart = (e) => {
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;

    e.dataTransfer.setData("text/plain", JSON.stringify({ offsetX, offsetY }));
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const data = JSON.parse(e.dataTransfer.getData("text/plain"));

    setPosition({
      x: e.clientX - data.offsetX,
      y: e.clientY - data.offsetY,
    });
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e)=>e.preventDefault()}
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        position: "relative",
      }}
    >
      <div
        draggable
        onDragStart={handleDragStart}
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
  );`}
      </pre>
    </code>
    <div
      onDrop={handleDrop}
      onDragOver={(e)=>e.preventDefault()}
      style={{
        width: "60vw",
        height: "100vh",
        background: "black",
        position: "relative",
      }}
    >
      <div
        draggable
        onDragStart={handleDragStart}
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

export default DragBallWithHandlers;