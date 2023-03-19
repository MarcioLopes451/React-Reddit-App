import React, {useState} from "react";


export const Posts = (props) => {
  const [comments, setComments] = useState(false);

  const openComments = () => {
    setComments(!comments)
  }

return (
    <div className="post-container">
    <h1 className="heading">{props.article.title}</h1>
    <img className="image" alt="post" />
    <p>body</p>
    <div className="info">      
      <h4>username</h4>
      <h4>4 hours ago</h4>
      <h4 onClick={openComments}>Comments</h4>
      {
        comments && (
          <p>comment</p>
        )
      }
    </div>
  </div>
);
};

