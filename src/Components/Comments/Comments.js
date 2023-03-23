import React from "react";
import { Comment } from "./Comment";

export const Comments = ({comments}) => {
    return (
        <div>
            {comments.map((comment, id) => {
                return <Comment key={id} comment={comment}/>
            })}
        </div>
    )
}