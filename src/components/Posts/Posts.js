import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, addComment, posts, value, setValue } = props;

  return (
    <div className="posts-container-wrapper">
      {posts.map((elem) => (
        <Post
          post={elem}
          likePost={likePost}
          key={elem.id}
          addComment={addComment}
          value={value}
          setValue={setValue}
        />
      ))}
    </div>
  );
};

export default Posts;
