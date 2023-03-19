import React, {useState, useEffect} from 'react';
import { Posts } from '../../Components/Posts/Posts';

export const Search = () => {
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('');

    useEffect(() => {
        fetch('https://www.reddit.com/r/'+ subreddit +'.json').then(res => {
            if(res.status !== 200) {
                console.log('error');
                return;
            }
            res.json().then(data => {
                if (data != null) {
                    setArticles(data.data.children);
                }
            })
        })
    }, [subreddit]);

    return (
        <div>
        <input 
            type='text'
            placeholder="Search"
            className="searchBar"
            value={subreddit}
            onChange={e => setSubreddit(e.target.value)}
            />
            {
                articles != null ? articles.map((article, index) => <Posts key={index} article={article.data}/>): ''
            }
        </div>
        
    )
}