import React, { useRef, useEffect } from 'react'
import styles from "./Video.module.css"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsChevronDoubleUp } from "react-icons/bs"
import { useNavigate } from 'react-router'
import VideoFooter from "./VideoFooter"
import VideoSidebar from "./VideoSidebar"

export default function Video(props) {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const { data, showArrow } = props;


    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.muted = false; // UnMute the video
                    } else {
                        videoRef.current.muted = true; // mute the video
                    }
                }
            });
        };


        const observer = new IntersectionObserver(callback, options);
        observer.observe(videoRef.current);


        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };

    }, []);


    function clickHandler() {
        navigate("/")
    }


    return (
        <div className={styles.container}>
            <video
                autoPlay
                // controls
                loop
                poster={data.submission.thumbnail}
                src={data.submission.mediaUrl}
                autoFocus
                id={data.postId}
                ref={videoRef}
            ></video>

            <div className={styles.backBtn} onClick={clickHandler}>
                <AiOutlineArrowLeft size={20} />
            </div>

            <VideoFooter data={data} />
            <VideoSidebar data={data} />
            {showArrow && <div className={styles.recommendArrow} ><BsChevronDoubleUp size={20} /></div>}
        </div>
    )
}
