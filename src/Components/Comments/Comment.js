import React from "react";

export const Comment = ({comment}) => {
    return (
        <div>
            <p>{comment.author}</p>
            <div>
                {comment.body}
            </div>
        </div>
    )
}