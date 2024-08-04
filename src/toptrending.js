// import React from 'react'
// import './toptrending.css'

// export default function TopTrending() {
//   return (
//     <div className='toptrending'> TopTrending
//     </div>
//   )
// }


import React from 'react';
import './toptrending.css';

const TopTrending = () => {
  const trendingPosts = [
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
    {
      id: 4,
      title: 'Post 4',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 5,
      title: 'Post 5',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 6,
      title: 'Post 6',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 7,
      title: 'Post 7',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 8,
      title: 'Post 8',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 9,
      title: 'Post 9',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 10,
      title: 'Post 10',
      image: 'https://via.placeholder.com/50x50',
    },
  ];

  return (
    <div className="top-trending">
      <h2>Top Trending Posts</h2>
      <ul>
        {trendingPosts.map((post) => (
          <li key={post.id}>
            <img src={post.image} alt={post.title} />
            <span>{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTrending;
