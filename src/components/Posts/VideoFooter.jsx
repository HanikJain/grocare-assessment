import React, { useState } from 'react'
import styles from "./VideoFooter.module.css"

export default function VideoFooter(props) {
    const { data } = props;
    const [showFullDescription, setShowFullDescription] = useState(false);

    function toggleDescription() {
        setShowFullDescription((state) => !state);
    }

    return (
        <div className={styles.hero}>
            <div className={styles.container1}>
                <img src={data.creator.pic} alt="creator image" />
                <div className={styles.creator} >
                    {data.creator.handle.length > 50 ? data.creator.handle.slice(0, 47) + "..." : data.creator.handle}
                </div>
            </div>
            <div className={styles.title}>
                {data.submission.title}
            </div>
            <div className={styles.description} onClick={toggleDescription}>
                {!showFullDescription && (data.submission.description.length > 50 ? data.submission.description.slice(0, 47) + "..." : data.submission.description)}
                <div className={`${showFullDescription ? styles.showdescription : styles.hidedescription}`}>
                    {showFullDescription && data.submission.description}
                </div>
            </div>
        </div>
    )
}
