import { Link } from "react-router-dom";
import { useState } from "react";

export function DropdownMenu(){
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }
    const handleOpen1 = () => {
        setOpen1(!open1)
    }
    const handleOpen2 = () => {
        setOpen2(!open2)
    }
    const handleOpen3 = () => {
        setOpen3(!open3)
    }

    return (
        <>
       <div className="dropdown">
            <h2 className="subreddit-title">Subreddit</h2>
             <button className='subreddit-btn' onClick={handleOpen}>Popular Communities</button>
             {open && (
                <ul className='menu'>
                <li className="menu-item">
                   <Link to='/'> mornn </Link>
                </li>
                <li className="menu-item">
                    <Link to='/twopost'>Hisdwd</Link>
                </li>
            </ul>
             )}
             <button className='subreddit-btn' onClick={handleOpen1}>Popular Communities</button>
             {open1 && (
                <ul className='menu'>
                <li className="menu-item">
                   <Link to='/'> mornn </Link>
                </li>
                <li className="menu-item">
                    <Link to='/twopost'>Hisdwd</Link>
                </li>
            </ul>
             )}
             <button className='subreddit-btn' onClick={handleOpen2}>Popular Communities</button>
             {open2 && (
                <ul className='menu'>
                <li className="menu-item">
                   <Link to='/'> mornn </Link>
                </li>
                <li className="menu-item">
                    <Link to='/twopost'>Hisdwd</Link>
                </li>
            </ul>
             )}
             <button className='subreddit-btn' onClick={handleOpen3}>Popular Communities</button>
             {open3 && (
                <ul className='menu'>
                <li className="menu-item">
                   <Link to='/'> mornn </Link>
                </li>
                <li className="menu-item">
                    <Link to='/twopost'>Hisdwd</Link>
                </li>
            </ul>
             )}
        </div>
        </>
    )
}