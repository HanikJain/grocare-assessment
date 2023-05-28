import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from "./Video.module.css"
import Video from '../components/Posts/Video';




export default function VideoPage() {
    const { userId } = useParams();
    const posts = useSelector((state) => state.posts.posts);


    let video = [];
    let recommendations = [];

    for (let post of posts) {

        let postId = post.postId.toString();
        let id = userId.toString();

        if (postId === id) {
            video.push(post);
        } else {
            recommendations.push(post);
        }

    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderRecommendations = (post) => {
        return <Video data={post} showArrow={false} />
    }



    if (video.length === 0) {
        return <p>No video Found</p>
    }

    return (
        <div className={styles.container}>
            <Video data={video[0]} showArrow={true} />
            <div>
                {recommendations.map(renderRecommendations)}
            </div>
        </div>
    )
}
