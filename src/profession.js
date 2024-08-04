// import React from 'react'
// import './profession.css'

// export default function Profession(props) {
//   return (
//     <div className='profession' onClick={e=>props.onClick('Profession')}>Profession
//           {props.isactive && <div className='gender_types'>
//     <div>Profession 1</div>
//     <div>Profession 2</div>
//     </div>}
//     </div>
//   )
// }

import React, { useState } from 'react';
import './profession.css';

export default function Profession(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    props.onClick('Profession');
  };

  const handleTypeClick = (type) => {
    setIsActive(false);
    props.onClicks(type);
  };

  return (
    <div className={`profession ${isActive ? 'profession_active' : ''}`} onClick={handleClick}>
      Profession
      <div className="profession_types">
        <ul>
        <li onClick={() => handleTypeClick('Profession 1')}>Profession 1</li>
      
        <li onClick={() => handleTypeClick('Profession 2')}>Profession 2</li>
     
      </ul>
    </div>
    </div>
  );
}

