import React, { useMemo, useRef, useState } from "react";

const InfiniteScrollRef = () => {
  const [scrollData, setScrollData] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      item: `Item ${i + 1}`,
    }))
  );

  const paragraph = `
  React is a JavaScript library used for building user interfaces.
  Infinite scrolling is commonly used in social media feeds, chats,
  blogs, notifications, product listings, and comment sections.

  Instead of rendering everything at once, we render small chunks
  of data and load more content only when the user reaches the bottom.

  This improves performance because the browser handles fewer DOM nodes
  initially. It also gives a smoother user experience for very large data.

  useRef is commonly used here because it helps access DOM properties
  like scrollTop, clientHeight, and scrollHeight without causing rerenders.

  scrollTop means how much the user has scrolled.
  clientHeight means visible height of container.
  scrollHeight means total scrollable content height.

  Platforms like Instagram, LinkedIn, Twitter, YouTube comments,
  and messaging applications use infinite scrolling heavily.

  Another important thing is stable keys.
  Avoid using index as key when data can reorder dynamically.
  React is a JavaScript library used for building user interfaces.
  Infinite scrolling is commonly used in social media feeds, chats,
  blogs, notifications, product listings, and comment sections.

  Instead of rendering everything at once, we render small chunks
  of data and load more content only when the user reaches the bottom.

  This improves performance because the browser handles fewer DOM nodes
  initially. It also gives a smoother user experience for very large data.

  useRef is commonly used here because it helps access DOM properties
  like scrollTop, clientHeight, and scrollHeight without causing rerenders.

  scrollTop means how much the user has scrolled.
  clientHeight means visible height of container.
  scrollHeight means total scrollable content height.

  Platforms like Instagram, LinkedIn, Twitter, YouTube comments,
  and messaging applications use infinite scrolling heavily.

  Another important thing is stable keys.
  Avoid using index as key when data can reorder dynamically.
  React is a JavaScript library used for building user interfaces.
  Infinite scrolling is commonly used in social media feeds, chats,
  blogs, notifications, product listings, and comment sections.

  Instead of rendering everything at once, we render small chunks
  of data and load more content only when the user reaches the bottom.

  This improves performance because the browser handles fewer DOM nodes
  initially. It also gives a smoother user experience for very large data.

  useRef is commonly used here because it helps access DOM properties
  like scrollTop, clientHeight, and scrollHeight without causing rerenders.

  scrollTop means how much the user has scrolled.
  clientHeight means visible height of container.
  scrollHeight means total scrollable content height.

  Platforms like Instagram, LinkedIn, Twitter, YouTube comments,
  and messaging applications use infinite scrolling heavily.

  Another important thing is stable keys.
  Avoid using index as key when data can reorder dynamically.
  React is a JavaScript library used for building user interfaces.
  Infinite scrolling is commonly used in social media feeds, chats,
  blogs, notifications, product listings, and comment sections.

  Instead of rendering everything at once, we render small chunks
  of data and load more content only when the user reaches the bottom.

  This improves performance because the browser handles fewer DOM nodes
  initially. It also gives a smoother user experience for very large data.

  useRef is commonly used here because it helps access DOM properties
  like scrollTop, clientHeight, and scrollHeight without causing rerenders.

  scrollTop means how much the user has scrolled.
  clientHeight means visible height of container.
  scrollHeight means total scrollable content height.

  Platforms like Instagram, LinkedIn, Twitter, YouTube comments,
  and messaging applications use infinite scrolling heavily.

  Another important thing is stable keys.
  Avoid using index as key when data can reorder dynamically.
  React is a JavaScript library used for building user interfaces.
  Infinite scrolling is commonly used in social media feeds, chats,
  blogs, notifications, product listings, and comment sections.

  Instead of rendering everything at once, we render small chunks
  of data and load more content only when the user reaches the bottom.

  This improves performance because the browser handles fewer DOM nodes
  initially. It also gives a smoother user experience for very large data.

  useRef is commonly used here because it helps access DOM properties
  like scrollTop, clientHeight, and scrollHeight without causing rerenders.

  scrollTop means how much the user has scrolled.
  clientHeight means visible height of container.
  scrollHeight means total scrollable content height.

  Platforms like Instagram, LinkedIn, Twitter, YouTube comments,
  and messaging applications use infinite scrolling heavily.

  Another important thing is stable keys.
  Avoid using index as key when data can reorder dynamically.
  React is a JavaScript library used for building user interfaces.
  Infinite scrolling is commonly used in social media feeds, chats,
  blogs, notifications, product listings, and comment sections.

  Instead of rendering everything at once, we render small chunks
  of data and load more content only when the user reaches the bottom.

  This improves performance because the browser handles fewer DOM nodes
  initially. It also gives a smoother user experience for very large data.

  useRef is commonly used here because it helps access DOM properties
  like scrollTop, clientHeight, and scrollHeight without causing rerenders.

  scrollTop means how much the user has scrolled.
  clientHeight means visible height of container.
  scrollHeight means total scrollable content height.

  Platforms like Instagram, LinkedIn, Twitter, YouTube comments,
  and messaging applications use infinite scrolling heavily.

  Another important thing is stable keys.
  Avoid using index as key when data can reorder dynamically.
  `;

  const allSentences = useMemo(() => {
    return paragraph
      .split(".")
      .map((item) => item.trim())
      .filter(Boolean);
  }, []);

  const [visibleParagraph, setVisibleParagraph] = useState(
    allSentences.slice(0, 5)
  );

  // REFS
  const listRef = useRef();
  const paragraphRef = useRef();

  const getBoxPosition = () => {
    const scrollTop = listRef.current.scrollTop;
    const clientHeight = listRef.current.clientHeight;
    const scrollHeight = listRef.current.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      loadMoreItems();
    }
  };

  const loadMoreItems = () => {
    setScrollData((prev) => [
      ...prev,
      ...Array.from({ length: 20 }, (_, i) => ({
        item: `Item ${i + prev.length + 1}`,
      })),
    ]);
  };

  const getParagraphPosition = () => {
    const scrollTop = paragraphRef.current.scrollTop;
    const clientHeight = paragraphRef.current.clientHeight;
    const scrollHeight = paragraphRef.current.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      loadMoreParagraph();
    }
  };

  const loadMoreParagraph = () => {
    setVisibleParagraph((prev) => {
      if (prev.length >= allSentences.length) return prev;

      return [
        ...prev,
        ...allSentences.slice(prev.length, prev.length + 5),
      ];
    });
  };

  return (

    <>
    <code>
        {`  scrollTop means how much the user has scrolled.
  clientHeight means visible height of container.
  scrollHeight means total scrollable content height.`}
    </code>
    <div
      style={{
        display: "flex",
        gap: "30px",
        padding: "20px",
        alignItems: "flex-start",
      }}
    >

      <div style={{ width: "40%" }}>
        <h2> Infinite Scroll</h2>

        <div
          ref={listRef}
          onScroll={getBoxPosition}
          style={{
            height: "300px",
            width: "300px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
            border: "1px solid black",
          }}
        >
          {scrollData.map((data, index) => (
            <span
              key={data.item + index}
              style={{
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              {data.item}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          width: "2px",
          background: "black",
          height: "400px",
        }}
      />

      <div style={{ width: "60%" }}>
        <h2>Paragraph Infinite Scroll</h2>

        <div
          ref={paragraphRef}
          onScroll={getParagraphPosition}
          style={{
            height: "300px",
            overflowY: "scroll",
            border: "1px solid black",
            padding: "20px",
            lineHeight: "30px",
          }}
        >
          {visibleParagraph.map((sentence, index) => (
            <p key={sentence + index}>{sentence}.</p>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default InfiniteScrollRef;