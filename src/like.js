// import React from 'react'
// import './like.css'

// export default function Like() {
//   return (
//     <div>Llike</div>
//   )
// }


// import React, { useState } from 'react';
// import './like.css';
// import { AiFillThumbsUp } from 'react-icons/ai';

// export default function Like() {
//   const [isLiked, setIsLiked] = useState(false);

//   const handleClick = () => {
//     setIsLiked(!isLiked);
//   };

//   return (
//     <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleClick}>
//       <AiFillThumbsUp color={isLiked ? 'green' : 'black'} size="32" />
//     </button>
//   );
// }


import React, { useState } from 'react';
import './like.css';

export default function Like() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleClick}>
      {liked ? 'Liked' : 'Like'}
    </button>
  );
}