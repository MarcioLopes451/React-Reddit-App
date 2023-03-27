import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubredditPosts, fetchSearchResults } from '../SearchBar/SearchBarSlice';
import { Posts } from '../Posts/Posts';

export const Home = () => {
    const loading = useSelector(state=>state.searchBar.isLoading);
    const hasError = useSelector(state=>state.searchBar.hasError);
    const currentSubreddit = useSelector(state => state.searchBar.currentSubreddit);
    const article = useSelector(state => state.searchBar.article);
    const dispatch = useDispatch();
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('home');

    useEffect(() => {
      fetch("https://www.reddit.com/r/" + subreddit +".json").then(
        res => {
          if (res.status !== 200) {
            console.warn("Warning: Something is wrong with the api.");
            return;
          }
          res.json().then(data => {
            if (data != null)
            console.log(data)
              setArticles(data.data.children);
          });
        }
      )
    }, [subreddit]);


      useEffect(()=>{
        dispatch(fetchSubredditPosts(currentSubreddit))
    }, [currentSubreddit]);


      if(loading){
        return <h1>Loading...</h1>
      }if(hasError){
        return <h1>Try Again.</h1>
      }
      else {
        return (
            <div>
                {
                (article != null) ? article.map((article, index) => 
                <Posts key={index} article={article.data}/>) 
                : <p>No Posts</p>
                }
            </div>
          )
      }
  
}

