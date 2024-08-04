// import React from 'react'
// import './mood.css'

// export default function Mood(props) {
//   return (
//     <div className='mood' onClick={e=>props.onClick('Mood')}>Mood
//     {props.isactive && <div className='mood_types'>
//     <div onClick={e=>props.onClicks('Happy')}>Happy</div>
//     <hr></hr>
//     <div onClick={e=>props.onClicks('Sad')}>Sad</div>
//     <hr></hr>
//     <div onClick={e=>props.onClicks('Angry')}>Angry</div>
//     <hr></hr>
//     </div>}
//     </div>
//   )
// }

import React, { useState } from 'react';
import './mood.css';

export default function Mood(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    props.onClick('Mood');
  };

  const handleTypeClick = (type) => {
    setIsActive(false);
    props.onClicks(type);
  };

  return (
    <div className={`mood ${isActive ? 'mood_active' : ''}`} onClick={handleClick}>
      Mood
      <div className="mood_types">
        <ul>
        <li onClick={() => handleTypeClick('Happy')}>Happy</li>
        
        <li onClick={() => handleTypeClick('Sad')}>Sad</li>
       
        <li onClick={() => handleTypeClick('Angry')}>Angry</li>
      
      </ul>
    </div>
    </div>
  );
}
