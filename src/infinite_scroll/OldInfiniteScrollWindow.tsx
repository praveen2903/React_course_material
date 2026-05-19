import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

//giving type
type PostType = {
    userId: number
    id: number
    title: string
    body: string
}


const InfiniteScrollWindow = () => {
    const [users, setUsers] = useState<PostType[]>([]);
    const [page, setPage] = useState<number>(1);

    const [loading, setLoading] = useState<boolean>(false);

    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchUsers = useCallback(async (): Promise<void> => {
        if (loading || !hasMore) return;
        try {
            setLoading(true);
            const response = await axios.get<PostType[]>(
                `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
            );
            console.log(response.data);   

             // If no data stop infinite scroll
            if (response.data.length === 0) {
                setHasMore(false);
                return;
            }

            // Append new data
            setUsers((prev) => [...prev,...response.data]);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [page, loading, hasMore]);


    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);


    const handleScroll = (): void => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if ( scrollTop + clientHeight >= scrollHeight - 100 && !loading && hasMore) {
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    }, [loading, hasMore]);


    return (
        <div
            style={{
                padding: '20px',
                textAlign: 'left'
            }}
        >

            <h1> Infinite Scroll using Window Scroll</h1>

            {
                users.map((user: PostType) => (

                    <div
                        key={user.id}
                        style={{
                            border: '1px solid gray',
                            marginBottom: '15px',
                            padding: '15px',
                            borderRadius: '10px'
                        }}
                    >

                        <h2>
                            {user.id}. {user.title}
                        </h2>

                        <p>
                            {user.body}
                        </p>

                    </div>
                ))
            }


            {/* ========================================= */}
            {/* LOADING */}
            {/* ========================================= */}

            {
                loading && (

                    <h2>
                        Loading More Data...
                    </h2>
                )
            }


            {/* ========================================= */}
            {/* NO MORE DATA */}
            {/* ========================================= */}

            {
                !hasMore && (

                    <h2>
                        No More Data Found
                    </h2>
                )
            }

        </div>
    )
}

export default InfiniteScrollWindow