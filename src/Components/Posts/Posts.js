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
    <video controls className='videoImg'>
      <source src={props.article.media.reddit_video.fallback_url} type='video/mp4'/>
    </video> : ''} 
    <p>{props.article.public_description}</p>
    <div className="info">      
      <p className="redditUsername1">{props.article.author}</p>
      <p className="timeStamp">{formatTimestamp(props.article.created_utc)} ago</p>
      <button className="comments-button" onClick={()=>onToggleCommments(props.article.id)}>
        {props.article.num_comments} Comments
      </button>
    </div>
    {comments && (
      <div><button onClick={()=>{openComments()}} className="clear-button">Close Comments</button><Comments comments={comments}/></div>
    )}
  </div>

);
};
