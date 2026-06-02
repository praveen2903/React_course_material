import {
  useState,
  useEffect,
  useRef,
  useCallback
} from "react";

import axios from "axios";

    const styles = {
  section: {
    marginBottom: "40px",
    padding: "20px",
    border: "1px solid #333",
    borderRadius: "10px",
    background: "#111",
    color: "#fff",
    overflowX: "auto",
    textAlign:'left'
  },

  subTitle: {
    textAlign: "left",
    marginBottom: "20px",
    color: "#00ff90",
    fontSize: "24px",
    fontWeight: "bold"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    textAlign: "left"
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

  code: {
    color: "#00ff90"
  },

  card: {
    border: "1px solid #333",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
    background: "#1a1a1a"
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
  userId:number;
  id:number;
  title:string;
  body:string;
};

export default function ModernInfiniteScroll(){

  const [posts,setPosts] =useState<PostType[]>([]);

  const [page,setPage] =useState(1);
  const [loading,setLoading] =useState(false);

  const [hasMore,setHasMore] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);

  const fetchPosts = useCallback(async()=>{
      if(loading || !hasMore) return;
      try{
        setLoading(true);
        const response =
          await axios.get<PostType[]>(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
        if(response.data.length===0){
          setHasMore(false);
          return;
        }
        setPosts(prev=>[...prev,...response.data]);
      }finally{
        setLoading(false);
      }
    },
    [page,loading,hasMore]
  );
  useEffect(()=>{
    fetchPosts();
  },[fetchPosts]);

  useEffect(()=>{
    const observer = new IntersectionObserver(entries=>{
          if(entries[0].isIntersecting && hasMore && !loading){setPage(prev=>prev+1);}
        },{threshold:0.1}
      );

    if(bottomRef.current){
      observer.observe(bottomRef.current);
    }
    return ()=>{
      observer.disconnect();
    };

  },[loading,hasMore]);

  return(
    <>
    <section>
  <h2>
    🚀 Modern Infinite Scroll
  </h2>

  <pre style={{textAlign:'left'}}>
{`Bottom Div Visible
        ↓
Observer Fires
        ↓
Load Next Page

type PostType = {
  userId:number;
  id:number;
  title:string;
  body:string;
};

const [posts,setPosts] =useState<PostType[]>([]);
const [page,setPage] =useState(1);
const [loading,setLoading] =useState(false);
const [hasMore,setHasMore] = useState(true);
const bottomRef = useRef<HTMLDivElement>(null);
const fetchPosts = useCallback(async()=>{
    if(loading || !hasMore) return;
    try{
      setLoading(true);
      const response =
        await axios.get<PostType[]>(\`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=\${page}\`);
      if(response.data.length===0){
        setHasMore(false);
        return;
      }
      setPosts(prev=>[...prev,...response.data]);
    }finally{
      setLoading(false);
    }
  },
  [page,loading,hasMore]
);
useEffect(()=>{
  fetchPosts();
},[fetchPosts]);

useEffect(()=>{
  const observer = new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting && hasMore && !loading){setPage(prev=>prev+1);}
      },{threshold:0.1}
    );

  if(bottomRef.current){
    observer.observe(bottomRef.current);
  }
  return ()=>{
    observer.disconnect();
  };

},[loading,hasMore])`}
  </pre>

  <table>
    <tbody>
      <tr>
        <td style={styles.td}>Performance</td>
        <td style={styles.td}>✅ Excellent</td>
      </tr>

      <tr>
        <td style={styles.td}>Scroll Events</td>
        <td style={styles.td}>❌ None</td>
      </tr>

      <tr>
        <td style={styles.td}>Production Ready</td>
        <td style={styles.td}>✅ Yes</td>
      </tr>
    </tbody>
  </table>
</section>
      {/* {posts.map(post=>(
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      <div
        ref={bottomRef}
        style={{height:"20px"}}
      /> */}

      {loading && <h2>Loading...</h2>}
    </>
  );
}