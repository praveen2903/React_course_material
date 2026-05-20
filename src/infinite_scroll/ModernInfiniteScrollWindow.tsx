import React, {useEffect,useState,useRef,useCallback,} from "react";

import axios from "axios";
type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


const ModernInfiniteScrollWindow = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const fetchPosts = useCallback(async (): Promise<void> => {
    if (loading || !hasMore) return;
    try {
      setLoading(true);
      const response = await axios.get<PostType[]>(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      if (response.data.length === 0) {
        setHasMore(false);
        return;
      }
      setPosts((prev) => [...prev, ...response.data]);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);


  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleScroll = (): void => {
    if (!bottomRef.current || loading || !hasMore) return;
    // Position of bottom div
    const rect = bottomRef.current.getBoundingClientRect();
    // Window Height
    const windowHeight = window.innerHeight;
    /*
      rect.top => distance from top of viewport

      If rect.top becomes smaller than window height,
      it means element entered viewport
    */

    if (rect.top <= windowHeight + 100) {
      setPage((prev) => prev + 1);
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore]);


  return (
    <div style={{padding: "20px", }}>

      <h2>Infinite Scroll using getBoundingClientRect</h2>
      <code style={{textAlign:'left'}}>
        <pre>
{` const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const fetchPosts = useCallback(async (): Promise<void> => {
    if (loading || !hasMore) return;
    try {
      setLoading(true);
      const response = await axios.get<PostType[]>(
        'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=page'
      );
      if (response.data.length === 0) {
        setHasMore(false);
        return;
      }
      setPosts((prev) => [...prev, ...response.data]);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);


  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleScroll = (): void => {
    if (!bottomRef.current || loading || !hasMore) return;
    // Position of bottom div
    const rect = bottomRef.current.getBoundingClientRect();
    // Window Height
    const windowHeight = window.innerHeight;
    /*
      rect.top => distance from top of viewport

      If rect.top becomes smaller than window height,
      it means element entered viewport
    */

    if (rect.top <= windowHeight + 100) {
      setPage((prev) => prev + 1);
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore]);


`}
        </pre>
      </code>
      {posts.map((post) => (
          <div key={post.id}
            style={{ border: "1px solid gray", marginBottom: "20px", padding: "20px", borderRadius: "10px",}} >
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
          </div>

        ))
      }


      {
        loading && (
          <h2>Loading More...</h2>
        )
      }

      {
        !hasMore && (
          <h2>No More Data</h2>
        )
      }

      <div ref={bottomRef} style={{height: "20px"}}/>

    </div>
  );
};

export default ModernInfiniteScrollWindow;