// import React from 'react'
// import './dislike.css'

// export default function Dislike() {
//   return (
//     <div>Dlike</div>
//   )
// }


import React, { useState } from 'react';
import './dislike.css';

export default function Dislike() {
  const [disliked, setDisliked] = useState(false);

  const handleClick = () => {
    setDisliked(!disliked);
  };

  return (
    <button className={`dislike-button ${disliked ? 'disliked' : ''}`} onClick={handleClick}>
      {disliked ? 'Disliked' : 'Dislike'}
    </button>
  );
}
