import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    page: 1
};

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        incrementPage(state){
            state.page++;
        },

        decrementPage(state){
            state.page--;
        },

        setPageNumber(state, action){
            state.page = action.payload;
        }
    }
})

const pageActions = pageSlice.actions;

export default pageSlice;
export {pageActions};