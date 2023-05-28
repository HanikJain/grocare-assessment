import { configureStore } from '@reduxjs/toolkit';
import postsSlice from "./posts";
import pageSlice from "./pageNumber";


const store  = configureStore({
    reducer : {
        posts: postsSlice.reducer,
        page: pageSlice.reducer
    }
});

export default store;