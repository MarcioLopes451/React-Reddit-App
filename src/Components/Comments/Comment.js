import React from "react";

export const Comment = ({comment}) => {
    return (
        <div className="commentBody">
            <p className="redditUsername">{comment.author}</p>
            <div className="commenting">
                {comment.body}
            </div>
        </div>
    )
}