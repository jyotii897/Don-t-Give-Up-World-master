import React, { useState } from 'react';
import MotivateMe from './motivateme';
import CentreImage from './centreimage';
import Share from './share';
import './centreside.css';

export default function CentreSide(props) {
  const [randomPhotoIndex, setRandomPhotoIndex] = useState(0);

  function showRandomPhoto() {
    setRandomPhotoIndex(prevIndex => prevIndex + 1); // Increment to trigger re-render
  }

  return (
    <div className='centreside'>
      <CentreImage activeFilter={props.activeFilter} showRandomPhoto={showRandomPhoto} randomPhotoIndex={randomPhotoIndex} />
      <MotivateMe onMotivate={showRandomPhoto} />
      <Share />
    </div>
  );
}
