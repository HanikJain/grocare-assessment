import React, { useEffect, useRef } from 'react'
import styles from "./Posts.module.css"
import { useSelector, dispatch } from 'react-redux';
import useFetchData from "../../hooks/fetchData";
import Thumbnail from './Thumbnail';


export default function Posts() {
    const { isLoading, isError } = useFetchData();
    const posts = useSelector((state) => state.posts.posts);
    const scrollDiv = useRef();

    useEffect(() => {
        scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
    }, [posts])

    const renderPosts = (post) => {
        // console.log(post)
        return <Thumbnail
            id={post.postId}
            key={post.postId}
            src={post.submission.thumbnail}
            title={post.submission.title}
            creatorHandle={post.creator.handle}
            creatorImage={post.creator.pic}
        />
    }
    return (
        <>
            <div style={{ height: "1px", width: "100" }} ref={scrollDiv}></div>
            {!isError.error && <div className={styles.gridLayout}>
                {!isLoading && (posts.length > 0 ? posts.map(renderPosts) : "No post found")}
                {isLoading && "Loading..."}
            </div>}
            {isError.error && <div style={{ display: 'flex', justifyContent: "center", marginTop: "1rem" }}>
                {isError.message}
            </div>}

        </>
    )
}
