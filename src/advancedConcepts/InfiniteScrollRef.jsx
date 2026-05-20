import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";

const InfiniteScrollRef = () => {
  // ======================================================
  // NORMAL STATIC ITEMS
  // ======================================================

  const [scrollData, setScrollData] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      item: `Item ${i + 1}`,
    }))
  );

  // ======================================================
  // AXIOS API ITEMS
  // ======================================================

  const [apiItems, setApiItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // ======================================================
  // LONG PARAGRAPH
  // ======================================================

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

  // ======================================================
  // REFS
  // ======================================================

  const listRef = useRef();
  const paragraphRef = useRef();
  const apiRef = useRef();

  // ======================================================
  // NORMAL INFINITE SCROLL
  // ======================================================

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

  // ======================================================
  // AXIOS FETCHING
  // ======================================================

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );

      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setApiItems((prev) => [...prev, ...response.data]);
      }
    } catch (error) {
      console.log("Axios Fetch Error :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleApiScroll = () => {
    const box = apiRef.current;

    const scrollTop = box.scrollTop;
    const clientHeight = box.clientHeight;
    const scrollHeight = box.scrollHeight;

    // ======================================================
    // OTHER CASE
    // ======================================================

    if (
      scrollTop + clientHeight >= scrollHeight - 5 &&
      !loading &&
      hasMore
    ) {
      setPage((prev) => prev + 1);
    }
  };

  // ======================================================
  // PARAGRAPH SCROLL
  // ======================================================

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
      {/* ====================================================== */}
      {/* CODE SECTION */}
      {/* ====================================================== */}

      <code
        style={{
          display: "block",
          textAlign: "left",
          background: "#f4f4f4",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
          whiteSpace: "pre-wrap",
        }}
      >
        {`scrollTop means how much the user has scrolled.
clientHeight means visible height of container.
scrollHeight means total scrollable content height.`}
      </code>

      <pre
        style={{
          background: "#111",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto",
          textAlign:'left',
          marginBottom: "30px",
        }}
      >
        {`
const InfiniteScrollRef = () => {

  const [items, setItems] = useState(
      Array.from({ length: 20 }, (_, i) => \`Item \${i + 1}\`)
  );

  const boxRef = useRef(null);

  const loadMore = () => {

      setItems((prev) => [
          ...prev,
          ...Array.from({ length: 10 }, (_, index) => {
              return \`Item \${prev.length + index + 1}\`;
          }),
      ]);
  };

  const handleScroll = () => {

      const box = boxRef.current;

      if (!box) return;

      const scrollTop = box.scrollTop;
      const clientHeight = box.clientHeight;
      const scrollHeight = box.scrollHeight;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
          loadMore();
      }
  };

  return (
      <>
          <div ref={boxRef} onScroll={handleScroll}>
              {items.map((data, index) => (
                  <div key={index}>{data}</div>
              ))}
          </div>
      </>
  );
};
`}
      </pre>

      {/* ====================================================== */}
      {/* MAIN CONTAINER */}
      {/* ====================================================== */}

      <div
        style={{
          display: "flex",
          gap: "30px",
          padding: "20px",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* ====================================================== */}
        {/* NORMAL INFINITE SCROLL */}
        {/* ====================================================== */}

        <div
          style={{
            width: "30%",
            minWidth: "300px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Infinite Scroll</h2>

          <div
            ref={listRef}
            onScroll={getBoxPosition}
            style={{
              height: "300px",
              overflowY: "scroll",
              border: "1px solid black",
              padding: "20px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {scrollData.map((data, index) => (
              <div
                key={data.item + index}
                style={{
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                {data.item}
              </div>
            ))}
          </div>
        </div>

        {/* ====================================================== */}
        {/* AXIOS INFINITE SCROLL */}
        {/* ====================================================== */}

        <div
          style={{
            width: "30%",
            minWidth: "300px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            Axios Infinite Scroll
          </h2>

          <div
            ref={apiRef}
            onScroll={handleApiScroll}
            style={{
              height: "300px",
              overflowY: "scroll",
              border: "1px solid black",
              padding: "20px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {apiItems.map((post) => (
              <div
                key={post.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <h4
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  {post.id}. {post.title}
                </h4>

                <p
                  style={{
                    lineHeight: "24px",
                  }}
                >
                  {post.body}
                </p>
              </div>
            ))}

            {loading && (
              <p style={{ textAlign: "center" }}>
                Loading More Data...
              </p>
            )}

            {!hasMore && (
              <p style={{ textAlign: "center" }}>
                No More Data Found
              </p>
            )}
          </div>
        </div>


        <div
          style={{
            width: "30%",
            minWidth: "300px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            Paragraph Infinite Scroll
          </h2>

          <div
            ref={paragraphRef}
            onScroll={getParagraphPosition}
            style={{
              height: "300px",
              overflowY: "scroll",
              border: "1px solid black",
              padding: "20px",
              lineHeight: "30px",
              borderRadius: "10px",
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