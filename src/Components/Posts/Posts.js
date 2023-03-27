import React, {useState} from "react";
import { fromUnixTime, formatDistanceToNowStrict } from "date-fns";
import { Comments } from "../Comments/Comments";

export const Posts = (props) => {
  const [comments, setComments] = useState(false);

  const onToggleCommments =
        async (id) => {
        const response = await fetch(
            `https://www.reddit.com/comments/${id}.json`
        );
        const jsonResponse = await response.json();
        const comments = jsonResponse[1].data.children.map(comment=> comment.data)
        setComments(comments);
        
      };

  const openComments = () => {
    setComments(null)
  }

  const formatTimestamp=(timestamp)=>{
    const date = fromUnixTime(timestamp)
    const timeAgo = formatDistanceToNowStrict(date)
    return timeAgo
}

return (
    <div className="post-container">
    <h1 className="heading">{props.article.title}</h1>
    {props.article.thumbnail && props.article.post_hint === 'image' ? <img alt="" src={props.article.url} className='postImg'/> : ''}
    {props.article.post_hint === 'hosted:video' ?
    <video controls className='postImg'>
      <source src={props.article.media.reddit_video.fallback_url} type='video/mp4'/>
    </video> : ''} 
    <p>{props.article.public_description}</p>
    <div className="info">      
      <h4>{props.article.author}</h4>
      <div>{formatTimestamp(props.article.created_utc)} ago</div>
      <div className="comment-list">
       {comments ? <div><button onClick={()=>{openComments()}} className="clear-button"></button><Comments comments={comments}/></div> : <button 
    className="comments-button"
    onClick={()=>onToggleCommments(props.article.id)}
    >Comments<div className="line-divide"> | </div> {props.article.num_comments}
    </button>}
       
    </div>
    </div>
  </div>
);
};

