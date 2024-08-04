import React from 'react';
import './motivateme.css';

export default function MotivateMe({ onMotivate }) {
  return (
    <button className='motivateme' onClick={onMotivate}>Motivate Me!!</button>
  );
}

