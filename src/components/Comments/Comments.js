import React from "react";
import Comment from "./Comment";
import "./Comments.css";
import { useState } from "react";

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  const [commentsUpd, setCommentsUpd] = useState(comments);
  const [value, setvalue] = useState("");

  function handleChange(event) {
    setvalue(event.target.value);
  }

  function handleSubmit(event) {
    setCommentsUpd([...commentsUpd, value]);
  }

  return (
    <div>
      {commentsUpd.map((elem) => (
        <Comment comment={elem} key={elem.id} />
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Comments;
