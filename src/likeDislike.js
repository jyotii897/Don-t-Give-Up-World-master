import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'; // Assuming React Icons

const LikeDislike = (props) => {
  const [likeState, setLikeState] = useState({ liked: false, disliked: false });

  const handleLike = () => {
    setLikeState({ liked: true, disliked: false });
  };

  const handleDislike = () => {
    setLikeState({ liked: false, disliked: true });
  };

  const likeIcon = likeState.liked ? <FaThumbsUp /> : null;
  const dislikeIcon = likeState.disliked ? <FaThumbsDown /> : null;

  return (
    <div className="like-dislike-container">
      {props.children}
      <button onClick={handleLike} disabled={likeState.liked}>
        {likeIcon} Like
      </button>
      <button onClick={handleDislike} disabled={likeState.disliked}>
        {dislikeIcon} Dislike
      </button>
    </div>
  );
};

export default LikeDislike;