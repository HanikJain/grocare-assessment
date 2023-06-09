import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: []
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts(state, action){
            state.posts = action.payload;
        },

        
    }
})

const postsActions = postsSlice.actions;

export default postsSlice;
export {postsActions};