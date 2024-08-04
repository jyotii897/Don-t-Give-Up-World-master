// import React from 'react'
// import './age.css'

// export default function Age(props) {
//   return (
//     <div className='age' onClick={e=>props.onClick('Age')}>Age
//           {props.isactive && <div className='gender_types'>
//     <div>0-20</div>
//     <div>21-40</div>
//     </div>}
//     </div>
//   )
// }

import React, { useState } from 'react';
import './age.css';

export default function Age(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    props.onClick('Age');
  };

  const handleTypeClick = (type) => {
    setIsActive(false);
    props.onClicks(type);
  };

  return (
    <div className={`age ${isActive ? 'age_active' : ''}`} onClick={handleClick}>
      Age
      <div className="age_types">
        <ul>
        <li onClick={() => handleTypeClick('lessthan18')}>Below 18</li>
       
        <li onClick={() => handleTypeClick('18to25')}>18-25</li>
      
        <li onClick={() => handleTypeClick('morethan25')}>25+</li>
      
      </ul>
      </div>
    </div>
  );
}

