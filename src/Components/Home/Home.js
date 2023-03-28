import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubredditPosts } from '../SearchBar/SearchBarSlice';
import { Posts } from '../Posts/Posts';

export default function Home() {
    const articles = useSelector(state => state.searchBar.article);
    const loading = useSelector(state=>state.searchBar.isLoading);
    const hasError = useSelector(state => state.searchBar.hasError);
    const currentSubreddit = useSelector(state => state.searchBar.currentSubreddit);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchSubredditPosts(currentSubreddit))
    }, [currentSubreddit])
    console.log(articles)

    if(loading){
        return <h1>Loading...</h1>
    }if(hasError){
        return <h1>Try Again</h1>
    } else {
        return (
            <div>
                {
                    articles != null ? articles.map((article,index) => 
                    <Posts key={index} article={article}/>) 
                    : <p>No Posts</p>
                }
            </div>
           
          )
    }
  
}
