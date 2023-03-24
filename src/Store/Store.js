import { configureStore, combineReducers } from "@reduxjs/toolkit";
import SearchBarReducer from "../Components/SearchBar/SearchBarSlice";
import SubredditReducer from "../Components/Subreddit/SubredditSlice";

export default configureStore({
    reducer: combineReducers({
        searchBar:SearchBarReducer,
        subreddit: SubredditReducer
    })
})