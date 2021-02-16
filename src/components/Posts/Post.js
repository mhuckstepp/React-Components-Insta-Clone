import React from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

const Post = (props) => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost, addComment, value, setValue } = props;

  return (
    <div className="post-border">
      <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={post.imageUrl}
          onDoubleClick={() => likePost(post.id)}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection
        likePost={() => likePost(post.id)}
        numberOfLikes={post.likes}
        liked={post.liked}
      />
      {/* Comments also wants its props! */}
      <Comments
        comments={post.comments}
        addComment={() => addComment(post.id)}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};

export default Post;
