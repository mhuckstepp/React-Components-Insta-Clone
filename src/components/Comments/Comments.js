import React from "react";
import Comment from "./Comment";
import "./Comments.css";

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  const listItems = comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));

  return <div>{listItems}</div>;
};

export default Comments;
