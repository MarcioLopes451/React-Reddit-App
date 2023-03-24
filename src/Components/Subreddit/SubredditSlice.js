import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSubreddit = createAsyncThunk('subreddits/getSubreddits', 
async() => {

    const response = await fetch('https://www.reddit.com/subreddits.json');
    const json = await response.json();
    return json.data.children.map(subreddit => subreddit.data)

});

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddit: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [fetchSubreddit.pending]:(state, action)=>{
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchSubreddit.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.hasError = false;
            state.subreddits = action.payload
        },
        [fetchSubreddit.rejected]: (state, action)=>{
            state.isLoading = false;
            state.hasError = true
        }
    }
});

export const subredditIcon = (state, currentSubreddit) => {
    for(let item of state.subreddits.subreddits){
        if(item.display_name === currentSubreddit){
            return item.icon_img
        }
    }
};

export default subredditSlice.reducer;