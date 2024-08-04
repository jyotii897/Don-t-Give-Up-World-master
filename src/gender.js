// import React from 'react'
// import './gender.css'

// export default function Gender(props) {
//   return (
//     <div className='gender' onClick={e=>props.onClick('Gender')}>Gender
//       {props.isactive && <div className='gender_types'>
//     <div>Male</div>
//     <div>Female</div>
//     </div>}
//     </div>
//   )
// }

import React, { useState } from 'react';
import './gender.css';

export default function Gender(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    props.onClick('Gender');
  };

  const handleTypeClick = (type) => {
    setIsActive(false);
    props.onClicks(type);
  };

  return (
    <div className={`gender ${isActive ? 'gender_active' : ''}`} onClick={handleClick}>
      Gender
      <div className="gender_types">
        <ul>
        <li onClick={() => handleTypeClick('Male')}>Male</li>
  
        <li onClick={() => handleTypeClick('Female')}>Female</li>

      </ul>
      </div>
    </div>
  );
}
