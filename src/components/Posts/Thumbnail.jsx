import React from 'react'
import { useNavigate } from "react-router-dom";

import styles from "./Thumbnail.module.css"

export default function Thumbnail(props) {
    const navigate = useNavigate();

    function clickHandler(e) {
        const url = "/video/" + e.currentTarget.id;
        navigate(url);
    }

    return (
        <div onClick={clickHandler} id={props.id} className={styles.container}>
            <img src={props.src} alt="thumbnail" />
            <div className={styles.title} >
                {props.title.length > 20 ? props.title.slice(0, 17) + '...' : props.title}
            </div>
            <div className={styles.container2}>
                <img src={props.creatorImage} alt="creator image" />
                <div className={styles.creator} >
                    {props.creatorHandle.length > 15 ? props.creatorHandle.slice(0, 12) + "..." : props.creatorHandle}
                </div>
            </div>
        </div>
    )
}
