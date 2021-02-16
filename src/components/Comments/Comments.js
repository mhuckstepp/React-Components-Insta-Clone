import React from "react";
import Comment from "./Comment";
import "./Comments.css";
import { useState } from "react";

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, addComment, value, setValue, post } = props;

  function handleChange(event) {
    setValue(event.target.value);
    console.log(value);
  }

  return (
    <div>
      {comments.map((elem) => (
        <Comment comment={elem} key={elem.id} />
      ))}
      <button onClick={addComment}> Post</button>
      <label>
        Comment:
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Comments;
