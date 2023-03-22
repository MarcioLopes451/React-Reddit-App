import React, {useState, useEffect} from "react";
import logo from '../../images/Reddit-Logo.png';
import '../SearchBar/SearchBar.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Posts } from "../Posts/Posts";
import { DropdownMenu } from "../Subreddit/Subreddit";


export const SearchBar = () => {
    const {isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('');

    useEffect(() => {
        fetch('https://www.reddit.com/'+ subreddit +'.json').then(res => {
            if(res.status !== 200) {
                console.log('error');
                return;
            }
            res.json().then(data => {
                if (data != null) {
                    setArticles(data.data.children);
                    console.log(data)
                }
            })
        })
    }, [subreddit]);

    return (
        <>
        <nav className="nav" href='/home'>
            <img src={logo} className="Logo" alt="logo" />
            <input 
            type='text'
            placeholder="Search"
            className="searchBar"
            value={subreddit}
            onChange={e => setSubreddit(e.target.value)}
            />
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
        {
      articles != null ? articles.map((article, index) => <Posts key={index} article={article.data}/>): ''
      }
        </div>
        </>
        
    )
}