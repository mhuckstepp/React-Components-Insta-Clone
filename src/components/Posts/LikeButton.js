import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const LikeButton = (props) => {
  const { isLiked } = props;

  //fed isLiked property down to turn the icon red if it was liked or not
  return (
    <div>
      <FontAwesomeIcon icon={faHeart} className={isLiked ? "heart" : ""} />
    </div>
  );
};

export default LikeButton;
