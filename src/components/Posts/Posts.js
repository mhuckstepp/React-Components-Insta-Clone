import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  const listItems = posts.map((post) => (
    <Post key={post.id} post={post} likePost={likePost} />
  ));

  return <div className="posts-container-wrapper">{listItems}</div>;
};

export default Posts;
