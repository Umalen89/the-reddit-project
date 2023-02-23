import { configureStore } from "@reduxjs/toolkit";
import RedditReducer from '../components/reddit/redditSlice';

export default configureStore({ 
    reducer: {
        reddit: RedditReducer
    }
})