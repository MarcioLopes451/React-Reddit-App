import React, { useEffect } from "react";
import logo from '../../images/Reddit-Logo.png';
import '../SearchBar/SearchBar.css';
import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu } from "../Subreddit/Subreddit";
import { fetchSearchResults, setSearchTerm, fetchSubredditPosts } from "./SearchBarSlice";
import { useSelector, useDispatch } from "react-redux";
import { Posts } from "../Posts/Posts";


export const SearchBar = () => {
    const {isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();
    const dispatch = useDispatch();
    const loading = useSelector(state=>state.searchBar.isLoading);
    const currentSubreddit = useSelector(state => state.searchBar.currentSubreddit);
    const searchTerm = useSelector(state=>state.searchBar.searchTerm);
    const articles = useSelector(state => state.searchBar.article);
    const hasError = useSelector(state => state.searchBar.hasError);


    useEffect(()=>{
        const results = () => {
            dispatch(fetchSubredditPosts(currentSubreddit))
        }
        return results
    }, [currentSubreddit])
    console.log(articles)


    const onHandleSubmit=(e)=>{
        document.querySelectorAll('input').value=''
        e.preventDefault();
        dispatch(fetchSearchResults(searchTerm));
    }
    

    return (
        <>
        <nav className="nav" href='/home'>
            <img src={logo} className="Logo" alt="logo" />
            <form onSubmit={onHandleSubmit}>
            <input 
            type='text'
            placeholder="Search"
            className="searchBar"
            value={searchTerm}
            onChange={(e)=> dispatch(setSearchTerm(e.target.value))}
            />
            </form>
            { isLoading && (
                <div>Loading...</div>
            )}
            {error && (
                <div>Oops... {error.message}</div>
            )}
            {isAuthenticated && (
                <button 
                className="loginBtn" 
                onClick={() => logout({returnTo : window.location.origin})}>
                    {user.name}
                </button>
            )}
            {!isAuthenticated && (
                <button
                className="loginBtn"
                onClick={() => loginWithRedirect()}>
                    Login
                </button>
            )}
        </nav>
        <div>
        <DropdownMenu />
        { loading ? <h1>Loading...</h1> 
        : hasError ? <h1>Try Again</h1> 
        : <> {
            (articles != null) ? articles.map((article,index) => 
            <Posts key={index} article={article}/>) 
            : <p>No Posts</p>
        }
        </> }
        </div>
        </>
        
    )
}