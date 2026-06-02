import { useState,useEffect,useCallback } from "react";
import axios from "axios";

type PostType = {
  userId:number;
  id:number;
  title:string;
  body:string;
};
    const styles = {

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
export default function OldInfiniteScroll(){
  const [posts,setPosts] = useState<PostType[]>([]);
  const [page,setPage] = useState(1);

  const [loading,setLoading] = useState(false);

  const [hasMore,setHasMore] = useState(true);

  const fetchPosts = useCallback(async()=>{
    if(loading || !hasMore) return;

    try{
    setLoading(true);
    const response = await axios.get<PostType[]>(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    if(response.data.length===0){
        setHasMore(false);
        return;
    }

    setPosts(prev=>[ ...prev, ...response.data]);
    }finally{
    setLoading(false);
    }

},[page,loading,hasMore]);

  useEffect(()=>{
    fetchPosts();
  },[fetchPosts]);

  const handleScroll = ()=>{
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if(scrollTop + clientHeight>= scrollHeight - 100 && !loading && hasMore){
      setPage(prev=>prev+1);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=>{window.removeEventListener("scroll",handleScroll);
    };
  },[loading,hasMore]);

  return (
    <>
    <section>
  <h2>
    📜 Old Infinite Scroll (Window Scroll)
  </h2>

  <pre style={{textAlign:'left'}}>
{`Scroll Event Fires Continuously
↓
Lots Of Calculations
↓
Can Become Slow

const [posts,setPosts] = useState<PostType[]>([]);
const [page,setPage] = useState(1);
const [loading,setLoading] = useState(false);
const [hasMore,setHasMore] = useState(true);

const fetchPosts = useCallback(async()=>{
  if(loading || !hasMore) return;

  try{
  setLoading(true);
  const response = await axios.get<PostType[]>(\`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=\${page}\`);
  if(response.data.length===0){
      setHasMore(false);
      return;
  }
  setPosts(prev=>[ ...prev, ...response.data]);
  }finally{
  setLoading(false);
  }
},[page,loading,hasMore]);

useEffect(()=>{
  fetchPosts();
},[fetchPosts]);

const handleScroll = ()=>{
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  if(scrollTop + clientHeight>= scrollHeight - 100 && !loading && hasMore){
    setPage(prev=>prev+1);
  }
};

useEffect(()=>{
  window.addEventListener("scroll",handleScroll);
  return ()=>{window.removeEventListener("scroll",handleScroll);
  };
},[loading,hasMore]);`}
  </pre>

  <table>
    <tbody>
      <tr>
        <td style={styles.td}>Performance</td>
        <td style={styles.td}>⚠️ Medium</td>
      </tr>

      <tr>
        <td style={styles.td}>Browser Work</td>
        <td style={styles.td}>High</td>
      </tr>

      <tr>
        <td style={styles.td}>Production Ready</td>
        <td style={styles.td}>❌ No</td>
      </tr>
    </tbody>
  </table>
</section>
      {posts.map(post=>(
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      {loading && <h2>Loading...</h2>}
    </>
  );
}