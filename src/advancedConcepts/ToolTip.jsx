import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

function TooltipText({ text, title }) {
  const [expanded, setExpanded] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const maxLength = 300;

  text = text?.trim() ?? "";

  const lineCount = text.split("\n").length;

  // HUGE CONTENT => MODAL
  if (text.length > 1200 || lineCount > 14) {
    return (
      <>
        <div
          style={{
            fontSize: "12px",
            lineHeight: "1.7",
            color: "black",
            letterSpacing: "-0.1px",
          }}
        >
          {text.slice(0, 200)}...

          <span
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();

              e.preventDefault();

              setShowModal(true);
            }}
            style={{
              color: "blue",
              cursor: "pointer",
              marginLeft: "6px",
              padding: "2px 4px",
              borderRadius: "4px",
              fontSize: "12px",
              transition: "all 0.2s ease",
            }}
          >
            Show More ....
          </span>
        </div>

        {showModal &&
          createPortal(
            <div
              onClick={() => setShowModal(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.45)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 99999,
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "70%",
                  maxHeight: "80vh",
                  overflowY: "auto",
                  background: "white",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                  }}
                >
                  {title}
                </div>

                <div
                  style={{
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.8",
                    fontSize: "14px",
                  }}
                >
                  {text}
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    marginTop: "20px",
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "6px",
                    background: "black",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  close
                </button>
              </div>
            </div>,
            document.body
          )}
      </>
    );
  }

  const isLong = text.length > maxLength;

  const displayedText = isLong
    ? expanded
      ? text
      : text.slice(0, maxLength)
    : text;

  return (
    <div
      style={{
        fontSize: "12px",
        lineHeight: "1.7",
        color: "black",
        letterSpacing: "-0.1px",
      }}
    >
      {displayedText}

      {isLong && (
        <span
          onClick={(e) => {
            e.stopPropagation();

            setExpanded((prev) => !prev);
          }}
          style={{
            color: "blue",
            cursor: "pointer",
            marginLeft: "6px",
            padding: "2px 4px",
            borderRadius: "4px",
            fontSize: "12px",
            transition: "all 0.2s ease",
          }}
        >
          {expanded ? "showLess" : "Show More ...."}
        </span>
      )}
    </div>
  );
}

export default function ToolTip() {
  const tooltipTimeoutRef = useRef(null);

  const gridRefs = useRef({});

  const [activeTooltip, setActiveTooltip] = useState(null);

  // ONLY 5 CONTENT TYPES
  const tooltipContents = useMemo(
    () => [
      {
        type: "maximum",
        data: `
This is maximum tooltip content.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.

Lorem ipsum is standard placeholder or dummy text used in printing and typesetting industry.
        `,
      },

      {
        type: "more",
        data: `
This is more tooltip content.

React tooltip supports multiline text.

Hover and click both are supported.

This is medium large data.
        `,
      },

      {
        type: "medium",
        data: `
This is medium content.

Expandable tooltip works here.
        `,
      },

      {
        type: "normal",
        data: `
This is normal tooltip.
        `,
      },

      {
        type: "less",
        data: `Small tooltip.`,
      },
    ],
    []
  );

  // MEMOIZED DATA => NO RE-CREATION ON RE-RENDER  -- when no useMemo
  const data = useMemo(() => {
    return Array.from({ length: 15 }, (_, index) => {
      const content = tooltipContents[index % 5];

      return {
        id: index + 1,

        name: `User ${index + 1}`,

        age: Math.floor(Math.random() * 11) + 20,

        target:
          Math.ceil(Math.floor(Math.random() * 11) * 10),

        data: content.data,

        type: content.type,

        link: "https://google.com",
      };
    });
  }, [tooltipContents]);

  const handleInfoIconClick = (event, id) => {
    event.stopPropagation();

    if (activeTooltip === id) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(id);
    }
  };

  const getTooltipPosition = (element) => {
    if (!element) return "right";
    //first measure the whole grid length
    const rect = element.getBoundingClientRect();
    //total viewport/ monitor length
    const totalViewWidth = window.innerWidth;
    //measure how much space to right side to keep tooltip left/right
    const rightSpace = totalViewWidth - rect.right;

    return rightSpace < 320 ? "left" : "right";
  };

  const handleTooltipMouseEnter = (id) => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);

      tooltipTimeoutRef.current = null;
    }

    setActiveTooltip(id);
  };

  const handleTooltipMouseLeave = (id) => {
    if (activeTooltip === id) {
      tooltipTimeoutRef.current = setTimeout(() => {
        setActiveTooltip(null);
      }, 150);
    }
  };

  useEffect(() => {
    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  const getGridColor = (age) => {
    if (age >= 25) return "green";
    if (age >= 22 && age < 25) return "orange";
    return "red";
  };

  return (
    <>
      <div
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          padding: "20px",
        }}
      >
        Tooltip Positions -- Topics covered UseMemo like stopped getting new Data for every render, 
        e.stopPropogation() clicking http://google.com is not effecting parent, UseRef for finding and using positions of tooltip
        Mouse Enter and leave options neatly.
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "48px",
          padding: "20px",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            ref={(element) => {if (element) {gridRefs.current[item.id] = element;}}} //Callback ref
            style={{
              background: getGridColor(item.age),
              padding: "12px",
              borderRadius: "12px",
              position: "relative",
              color: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3>{item.name}</h3>

              <div
                onMouseEnter={() => handleTooltipMouseEnter(item.id)}
                onMouseLeave={() => handleTooltipMouseLeave(item.id)}
              >
                <span
                  style={{
                    fontSize: "24px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  onClick={(e) =>
                    handleInfoIconClick(e, item.id)
                  }
                >
                  ℹ️
                </span>
              </div>
            </div>

            <hr />

            <span
              style={{
                padding: "12px",
                display: "inline-block",
              }}
            >
              age : {item.age}
            </span>

            <progress
              value={item.target}
              max={100}
              style={{
                width: "100%",
              }}
            />

            <br />

            <span
              style={{
                padding: "12px",
                display: "inline-block",
              }}
            >
              {item.target}
            </span>

            {/* TOOLTIP */}
            <div
              onMouseEnter={() => handleTooltipMouseEnter(item.id)}
              onMouseLeave={() => handleTooltipMouseLeave(item.id)}
              style={{
                position: "absolute",
                top: "20px",
                left:getTooltipPosition(gridRefs.current[item.id]) === "left"? "-340px": "105%",
                visibility:activeTooltip === item.id? "visible": "hidden",
                opacity: activeTooltip === item.id ? 1 : 0,
                pointerEvents: activeTooltip === item.id? "auto": "none",

                transition:"all 0.25s cubic-bezier(0.3,0,0.2,1)",
                minWidth: "320px",
                wordBreak: "break-word",
                whiteSpace: "pre-wrap",
                fontSize: "12px",
                lineHeight: "1.8",
                zIndex: 10000,
                background: "white",
                color: "black",
                borderRadius: "12px",
                padding: "16px",
                boxShadow:"0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              {/* ARROW */}
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  left:getTooltipPosition(gridRefs.current[item.id]) === "left"? "100%": "-8px",
                  width: "16px",
                  height: "16px",
                  background: "white",
                  transform: "rotate(45deg)",
                }}
              />

              <TooltipText
                text={item.data}
                title={item.name}
              />

              <br />

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {item.link}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}