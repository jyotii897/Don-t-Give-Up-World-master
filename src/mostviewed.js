// import React from 'react'
// import './mostviewed.css'

// export default function MostViewed() {
//   return (
//     <div className='mostviewed'>Most Viewed</div>
//   )
// }

import React from 'react';
import './mostviewed.css';

const MostViewed = () => {
  const mostViewedPosts = [
    {
      id: 1,
      title: 'Post 1',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 2,
      title: 'Post 2',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 3,
      title: 'Post 3',
      image: 'https://via.placeholder.com/50x50',
    },
  ];

  return (
    <div className="most-viewed">
      <h2>Most Viewed</h2>
      <ul>
        {mostViewedPosts.map((post) => (
          <li key={post.id}>
            <img src={post.image} alt={post.title} />
            <span>{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostViewed;
