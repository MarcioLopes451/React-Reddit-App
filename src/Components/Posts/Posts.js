import React, {useState} from "react";


export const Posts = (props) => {
  const [comments, setComments] = useState(false);

  const openComments = () => {
    setComments(!comments)
  }

return (
    <div className="post-container">
    <h1 className="heading">{props.article.title}</h1>
    <div>
      {props.images && (
        <img alt="post"/>
      )}
    </div>
    <p>{props.article.public_description}</p>
    <div className="info">      
      <h4>{props.article.author}</h4>
      <h4>{props.article.created_utc}</h4>
      <h4 onClick={openComments}>{props.article.num_comments} Comments</h4>
      <p>{props.article.ups}</p>
      {
        comments && (
          <p></p>
        )
      }
    </div>
  </div>
);
};

