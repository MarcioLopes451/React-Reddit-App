import React from "react";
import logo from '../../images/Reddit-Logo.png';
import '../SearchBar/SearchBar.css';
import { useAuth0 } from "@auth0/auth0-react";


export const SearchBar = () => {
    const {isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="nav" href='/home'>
            <img src={logo} className="Logo" alt="logo" />
            <input 
            type='text'
            placeholder="Search"
            className="searchBar"
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
    )
}