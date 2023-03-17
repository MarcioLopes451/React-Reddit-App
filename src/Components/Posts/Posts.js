import React, {useState} from "react";


export const Posts = ({post : {title, body, imgUrl, username, comment}, index}) => {
  const [comments, setComments] = useState(false);

  const openComments = () => {
    setComments(!comments)
  }

return (
    <div className="post-container">
    <h1 className="heading">{title}</h1>
    <img className="image" src={imgUrl} alt="post" />
    <p>{body}</p>
    <div className="info">      
      <h4>{username}</h4>
      <h4>4 hours ago</h4>
      <h4 onClick={openComments}>Comments</h4>
      {
        comments && (
          <p>{comment}</p>
        )
      }
    </div>
  </div>
);
};

export const Posts1 = ({post : {title, body, username}, index}) => {
  return (
      <div className="post-container">
      <h1 className="heading">{title}</h1>
      <p>{body}</p>
      <div className="info">      
        <h4>{username}</h4>
        <h4>4 hours ago</h4>
        <h4>Comments</h4>
      </div>
    </div>
  );
  };
