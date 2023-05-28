import React from 'react'
import styles from './VideoSidebar.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"
import { MdOutlineCommentsDisabled } from "react-icons/md"
import useLikePost from '../../hooks/likePost';



export default function VideoSidebar(props) {
    const { data } = props;
    const { likePost, dislikePost } = useLikePost()



    function likeHandler() {
        likePost(data.postId);
    }

    function dislikeHandler(e) {
        dislikePost(data.postId);
    }

    return (
        <div className={styles.videoSidebar}>
            <div className={styles.item} >
                {!data.reaction.voted && <span onClick={likeHandler}><AiOutlineHeart size={35} /></span>}
                {data.reaction.voted && <span onClick={dislikeHandler}><AiFillHeart size={35} fill={"#FF4433"} /></span>}
                <span>{data.reaction.count}</span>
            </div>
            <div className={styles.item}>
                {!data.comment.commentingAllowed && <MdOutlineCommentsDisabled size={35} fill={"#C5C6D0"} />}
                {data.comment.commentingAllowed && <BiCommentDetail size={35} />}
                <span>{data.comment.commentingAllowed && data.comment.count}</span>
            </div>
        </div>
    )
}
