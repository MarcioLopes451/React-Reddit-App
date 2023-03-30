import React, {useState, createContext} from "react";
import { DropdownMenu } from "../Subreddit/Subreddit";
import { fetchSearchResults, setSearchTerm} from "./SearchBarSlice";
import { useSelector, useDispatch } from "react-redux";
import Home from "../Home/Home";
import ReactSwitch from "react-switch";


export const ThemeContext = createContext(null);

export const SearchBar = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state=>state.searchBar.searchTerm);
    const [theme, setTheme] = useState('light'); 
    const logo1 = require('../../images/Reddit-Logo.png');

    const onHandleSubmit=(e)=>{
        document.querySelectorAll('input').value=''
        e.preventDefault();
        dispatch(fetchSearchResults(searchTerm));
    }
    
    const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light')) }
    return (
        <>
        <ThemeContext.Provider value={{theme, setTheme}}>
        <div id={theme}>
        <nav className="nav" href='/home'>
            <img src={logo1} className="Logo" alt="logo" />
            <form onSubmit={onHandleSubmit}>
            <input 
            type='text'
            placeholder="Search"
            className="searchBar"
            value={searchTerm}
            onChange={(e)=> dispatch(setSearchTerm(e.target.value))}
            />
            </form>
            <div className="labs">
                <p>{theme === 'light' ? 'Light' : 'Dark'}</p>
                <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
            </div>
        </nav>
        <div className="App">
        <DropdownMenu />
        <Home />
        </div>
        </div>
        </ThemeContext.Provider>
        </>
        
    )
}