import React, {useState, useEffect} from "react";
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
    const [articles, setArticles] = useState([]);
    const loading = useSelector(state=>state.searchBar.isLoading);
    const hasError = useSelector(state=>state.searchBar.hasError);
    const currentSubreddit = useSelector(state => state.searchBar.currentSubreddit);
    const searchTerm = useSelector(state=>state.searchBar.searchTerm);

    useEffect(() => {
        fetch("https://www.reddit.com/r/" + searchTerm +".json").then(
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
      }, [searchTerm]);

      useEffect(()=>{
        dispatch(fetchSubredditPosts(currentSubreddit))
    }, [currentSubreddit])

    const onHandleSubmit=(e)=>{
        e.preventDefault();
        dispatch(fetchSearchResults(searchTerm));
        setSearchTerm(null);
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
        { loading ? <h1>Loading...</h1> :  <> {
            (articles != null) ? articles.map((article, index) => 
            <Posts key={index} article={article.data}/>) 
            : <p>No Posts</p>
        }
        </>  }
        </div>
        </>
        
    )
}