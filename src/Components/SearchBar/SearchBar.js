import React from "react";
import logo from '../../images/Reddit-Logo.png';
import '../SearchBar/SearchBar.css';
import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu } from "../Subreddit/Subreddit";
import { fetchSearchResults, setSearchTerm} from "./SearchBarSlice";
import { useSelector, useDispatch } from "react-redux";



export const SearchBar = () => {
    const {isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();
    const dispatch = useDispatch();
    const searchTerm = useSelector(state=>state.searchBar.searchTerm);

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
        </div>
        </>
        
    )
}