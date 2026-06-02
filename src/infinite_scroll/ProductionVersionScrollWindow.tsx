import {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo
} from "react";
import axios from "axios";
// import {FixedSizeList as List} from "react-window";

const styles = {
  container: {
    padding: "20px",
    textAlign: "left" as const,
    maxWidth: "1200px",
    margin: "0 auto"
  },

  card: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    background: "#fff"
  },

  title: {
    marginBottom: "10px"
  },

  body: {
    color: "#555"
  },

  loading: {
    textAlign: "center" as const,
    padding: "20px"
  },

  noMore: {
    textAlign: "center" as const,
    color: "red",
    padding: "20px"
  },

  code: {
    background: "#111",
    color: "#00ff90",
    padding: "20px",
    borderRadius: "10px",
    overflowX: "auto" as const
  },
   subTitle: {
    textAlign: "left",
    marginBottom: "20px",
    color: "#00ff90",
    fontSize: "24px",
    fontWeight: "bold"
  },

  th: {
    border: "1px solid #444",
    padding: "12px",
    background: "#1e1e1e",
    color: "#00ff90",
    fontWeight: "bold"
  },

  td: {
    border: "1px solid #444",
    padding: "12px",
    verticalAlign: "top",
    lineHeight: "1.6"
  },

  pre: {
    background: "#000",
    color: "#00ff90",
    padding: "15px",
    borderRadius: "8px",
    overflowX: "auto",
    fontSize: "14px",
    lineHeight: "1.6",
    border: "1px solid #333"
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px"
  },

  grid3: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px",
    marginTop: "20px"
  },

  note: {
    background: "#1e293b",
    borderLeft: "5px solid #00ff90",
    padding: "15px",
    marginTop: "15px",
    borderRadius: "5px"
  },

  warning: {
    background: "#2b1818",
    borderLeft: "5px solid orange",
    padding: "15px",
    marginTop: "15px",
    borderRadius: "5px"
  },

  success: {
    background: "#102414",
    borderLeft: "5px solid #00ff90",
    padding: "15px",
    marginTop: "15px",
    borderRadius: "5px"
  }
};
type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostCard = memo(
  ({
    post,
    style
  }: {
    post: PostType;
    style: React.CSSProperties;
  }) => {
    return (
      <div
        style={{
          ...style,
          padding: "10px"
        }}
      >
        <div style={styles.card}>
          <h3>{post.id}. {post.title}</h3>

          <p>{post.body}</p>
        </div>
      </div>
    );
  }
);

function ProductionInfiniteScroll() {

  const [posts, setPosts] =useState<PostType[]>([]);

  const [page, setPage] =useState<number>(1);

  const [loading, setLoading] =useState<boolean>(false);

  const [hasMore, setHasMore] =useState<boolean>(true);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const fetchPosts =useCallback(async () => {
      if (loading || !hasMore) return;
      try {
        setLoading(true);
        const response =
          await axios.get<PostType[]>(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
        if (response.data.length === 0) {
          setHasMore(false);
          return;
        }
        setPosts(prev => [ ...prev,...response.data]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, [page, loading, hasMore]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && hasMore &&!loading) {
            setPage(prev => prev + 1);
          }
        },
        {threshold: 0.1}
      );
    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading, hasMore]);

  const Row = ({index,style}: {
    index: number;
    style: React.CSSProperties;
  }) => {
    return (
      <PostCard post={posts[index]} style={style}/>
    );
  };
  return (
    <div style={styles.container}>
<section>
  <h2>
    🚀 Production Infinite Scroll
  </h2>

  <table>
    <thead>
      <tr>
        <th style={styles.th}>Optimization</th>
        <th style={styles.th}>Purpose</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={styles.td}>
          IntersectionObserver
        </td>
        <td style={styles.td}>
          Avoid Scroll Events
        </td>
      </tr>

      <tr>
        <td style={styles.td}>
          React.memo
        </td>
        <td style={styles.td}>
          Prevent Card Re-renders
        </td>
      </tr>

      <tr>
        <td style={styles.td}>
          react-window
        </td>
        <td style={styles.td}>
          Render Only Visible Rows
        </td>
      </tr>

      <tr>
        <td style={styles.td}>
          useCallback
        </td>
        <td style={styles.td}>
          Prevent Function Recreation
        </td>
      </tr>
    </tbody>
  </table>

  <pre>
{`
User Scrolls
      ↓
IntersectionObserver Fires
      ↓
Fetch Next Page
      ↓
Append Posts
      ↓
react-window Renders
Only Visible Rows
      ↓
React.memo Prevents
Old Card Re-renders


import {FixedSizeList as List} from 'react-window
type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostCard = memo(({post, style}: {
    post: PostType;
    style: React.CSSProperties;
  }) => {
    return (
      <div style={{...style, padding: "10px"}}>
        <div style={styles.card}>
          <h3>{post.id}. {post.title}</h3>
          <p>{post.body}</p>
        </div>
      </div>
    );
  }
);

const [posts, setPosts] =useState<PostType[]>([]);
const [page, setPage] =useState<number>(1);
const [loading, setLoading] =useState<boolean>(false);
const [hasMore, setHasMore] =useState<boolean>(true);
const bottomRef = useRef<HTMLDivElement | null>(null);

const fetchPosts =useCallback(async () => {
    if (loading || !hasMore) return;
    try {
      setLoading(true);
      const response = await axios.get<PostType[]>(\`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=\${page}\`);
      if (response.data.length === 0) {
        setHasMore(false);
        return;
      }
      setPosts(prev => [ ...prev,...response.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

useEffect(() => {
  fetchPosts();
}, [fetchPosts]);

useEffect(() => {
  const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore &&!loading) {
          setPage(prev => prev + 1);
        }
      },
      {threshold: 0.1}
    );
  if (bottomRef.current) {
    observer.observe(bottomRef.current);
  }
  return () => {observer.disconnect();};
}, [loading, hasMore]);

const Row = ({index,style}: {
  index: number;
  style: React.CSSProperties;
}) => {
  return ( <PostCard post={posts[index]} style={style}/> );
};

return (
  <List height={700} width={"100%"} itemCount={posts.length} itemSize={160}>{Row}</List>)
)`}
  </pre>
</section>
      <h2>
        Production Infinite Scroll
      </h2>

      {/* <List
        height={700}
        width={"100%"}
        itemCount={posts.length}
        itemSize={160}
      >
        {Row}
      </List> */}

      {/* {loading && (
        <h3 style={styles.loading}>
          Loading...
        </h3>
      )}

      {!hasMore && (
        <h3 style={styles.noMore}>
          No More Data
        </h3>
      )}

      <div
        ref={bottomRef}
        style={{
          height: "20px"
        }}
      /> */}

    </div>
  );
}

export default ProductionInfiniteScroll;