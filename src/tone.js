// import React from 'react'
// import './tone.css'

// export default function Tone(props) {
//   return (
//     <div className='tone' onClick={e=>props.onClick('Tone')}>Tone
//         {props.isactive && <div className='tone_types'>
//     <div>Happy</div>
//     <div>Sad</div>
//     <div>Angry</div>
//     </div>}
//     </div>
//   )
// }

// import React, { useState } from 'react';
// import './tone.css';

// export default function Tone(props) {
//   const [isActives, setIsActives] = useState(false);

//   const handleClick = () => {
//     setIsActives(!isActives);
//     props.onClick('Tone');
//   };

//   const handleTypeClick = (type) => {
//     setIsActives(false);
//     props.onClicks(type);
//   };

//   return (
//     <div className={`tone ${isActives ? 'tone_active' : ''}`} onClick={handleClick}>
//       Tone
//       <div className="tone_types">
//         <ul>
//         <li onClick={() => handleTypeClick('Happy')}>Happy</li>
//         <hr></hr>
//         <li onClick={() => handleTypeClick('Sad')}>Sad</li>
//         <hr></hr>
//         <li onClick={() => handleTypeClick('Angry')}>Angry</li>
//         <hr></hr>
//       </ul>
//     </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import './tone.css';

export default function Tone(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    props.onClick('Tone');
  };

  const handleTypeClick = (type) => {
    setIsActive(false);
    props.onClicks(type);
  };

  return (
    <div className={`tone ${isActive ? 'tone_active' : ''}`} onClick={handleClick}>
      Tone
      <div className="tone_types">
        <ul>
        <li onClick={() => handleTypeClick('Happy')}>Happy</li>
     
        <li onClick={() => handleTypeClick('Sad')}>Sad</li>
      
        <li onClick={() => handleTypeClick('Angry')}>Angry</li>
       
      </ul>
      </div>
    </div>
  );
}