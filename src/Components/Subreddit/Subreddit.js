import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {setCurrentSubreddit} from '../SearchBar/SearchBarSlice';
import { fetchSubreddit } from "./SubredditSlice";

export function DropdownMenu(){

    const dispatch = useDispatch();
    const subreddits = useSelector(state => state.subreddit.subreddit);
    const currentSubreddit = useSelector(state => state.searchBar.currentSubreddit);

    useEffect(()=>{
      dispatch(fetchSubreddit())
  },[dispatch]);

    return (
      <div className="dropdown">
      <h2 className="subreddits-source-title">Popular Subreddits</h2>
        <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
            <li
              key={subreddit.id}
              className={`${
              currentSubreddit === subreddit.url && `selected-subreddit`
              }`}
            >
              <button
                className={subreddit.display_name === currentSubreddit ? 'current-subreddit' : 'subreddit-items'}
                type="button"
                onClick={() => dispatch(setCurrentSubreddit(subreddit.display_name))}
              >
                  <img
                  src={
                    subreddit.icon_img ||
                    `https://www.redditinc.com/assets/images/site/reddit-logo.png`
                  }
                  alt={`${subreddit.display_name}`}
                  className="subreddit-icon"
                  style={{ border: `3px solid ${subreddit.primary_color}` }}
                />
                {subreddit.display_name}
              </button>
            </li>
          ))}
        </ul>
        </div>
      )
}