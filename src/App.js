import React from "react";
import { useState } from "react";
import Searchbar from "./components/SearchBar/SearchBar";
import Posts from "./components/Posts/Posts";
import dummyData from "./dummy-data";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState("");
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const changeInput = (evt) => {
    const searchTerm = evt.target.value;
    setSearchTerm(searchTerm);
  };

  const likePost = (postId) => {
    setPosts(
      // Loop through every post
      posts.map((post) => {
        if (post.id === postId && post.userliked === false) {
          post.likes = post.likes + 1;
          post.userliked = true;
          return { ...post };
        } else {
          post.likes = post.likes - 1;
          post.userliked = false;
          return { ...post };
        }
      })
    );
  };

  return (
    <div className="App">
      <Searchbar changeInput={changeInput} />
      <Posts posts={posts} likePost={likePost} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
