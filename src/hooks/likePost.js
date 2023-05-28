import { useSelector, useDispatch } from 'react-redux'
import { postsActions } from "../store/posts"

export default function useLikePost() {
    const posts = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();

    const likePost = (id) => {
        let newArr = [];

        for (let post of posts) {
            let postId = post.postId.toString();
        
            if (postId === id) {
                let obj = structuredClone(post);
                obj.reaction.voted = true;
                obj.reaction.count = obj.reaction.count + 1;
                newArr.push(obj);
            }  else {
                newArr.push(post);
            }

    
        }

        dispatch(postsActions.addPosts(newArr));
    
    }

    const dislikePost = (id) => {
        let newArr = [];

        for (let post of posts) {
            let postId = post.postId.toString();
        
            if (postId === id) {
                let obj = structuredClone(post);
                obj.reaction.voted = false;
                obj.reaction.count = obj.reaction.count - 1;
                newArr.push(obj);
            }  else {
                newArr.push(post);
            }

    
        }

        dispatch(postsActions.addPosts(newArr));
    
    }


    return {
        likePost,
        dislikePost
    }

  
}
