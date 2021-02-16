/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import data from "./dummy-data";
import Posts from "./components/Posts/Posts";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(data);
  const [searchTerm, setSearchTerm] = useState(null);
  const [value, setValue] = useState("");

  const addComment = (postId) => {
    setPosts(
      posts.map((post) => {
        if (postId === post.id && value) {
          post.comments.push({
            id: Math.ceil(Math.random() * 10000),
            text: value,
            username: "KewlUser",
          });
          setValue("");
          return post;
        } else {
          return post;
        }
      })
    );
  };

  const likePost = (postId) => {
    /*
      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
    setPosts(
      posts.map((post) => {
        if (postId === post.id && !post.liked) {
          post.likes = post.likes + 1;
          post.liked = true;
          return post;
        } else {
          post.likes = post.likes - 1;
          post.liked = false;
          return post;
        }
      })
    );
  };

  return (
    <div className="App">
      <SearchBar />
      <Posts
        posts={posts}
        likePost={likePost}
        addComment={addComment}
        value={value}
        setValue={setValue}
      />
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
