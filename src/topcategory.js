// import React from 'react'
// import './topcategory.css'

// export default function TopCategory() {
//   return (
//     <div className='topcategory'>Top Category</div>
//   )
// }

import React from 'react';
import './topcategory.css';

const TopCategory = () => {
  const categories = [
    {
      id: 1,
      name: 'Category 1',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 2,
      name: 'Category 2',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 3,
      name: 'Category 3',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 4,
      name: 'Category 4',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: 5,
      name: 'Category 5',
      image: 'https://via.placeholder.com/50x50',
    },
  ];

  return (
    <div className="top-category">
      <h2>Top Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCategory;
