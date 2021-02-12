import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, searchTerm } = props;

  //loop through each post and feed the specific post to the Post component
  const listItems = posts
    .filter((post) => {
      if (searchTerm == "") {
        return post;
      } else if (
        post.username.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return post;
      }
    })
    .map((post) => <Post key={post.id} post={post} likePost={likePost} />);
  //return the array that the map above built
  return <div className="posts-container-wrapper">{listItems}</div>;
};

export default Posts;
