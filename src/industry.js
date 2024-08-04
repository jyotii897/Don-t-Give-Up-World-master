// import React from 'react'
// import './industry.css'

// export default function Industry(props) {
//   return (
//     <div className='industry' onClick={e=>props.onClick('Industry')}>Industry
//           {props.isactive && <div className='industry_types'>
//     <div>Industry 1</div>
//     <div>Industry 2</div>
//     </div>}
//     </div>
//   )
// }

import React, { useState } from 'react';
import './industry.css';

export default function Industry(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    props.onClick('Industry');
  };

  const handleTypeClick = (type) => {
    setIsActive(false);
    props.onClicks(type);
  };

  return (
    <div className={`industry ${isActive ? 'industry_active' : ''}`} onClick={handleClick}>
      Industry
      <div className="industry_types">
        <ul>
        <li onClick={() => handleTypeClick('ind1')}>Industry 1</li>
        
        <li onClick={() => handleTypeClick('ind2')}>Industry 2</li>
        
        <li onClick={() => handleTypeClick('ind3')}>Industry 3</li>
        
      </ul>
    </div>
    </div>
  );
}


