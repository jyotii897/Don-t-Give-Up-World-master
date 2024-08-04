import React, { useState, useEffect } from 'react';
import './centreimage.css';
import Like from './like';
import Dislike from './dislike';

export default function CentreImage({ activeFilter, randomPhotoIndex }) {
  const [moodPhotos, setMoodPhotos] = useState([
    'images/happy/h1.jpeg',
    'images/happy/h2.jpeg',
    'images/happy/h3.jpeg',
    'images/happy/h4.jpeg',
    'images/sad/6.jpeg',
    'images/sad/7.jpeg',
    'images/angry/1.jpeg',
    'images/angry/2.jpeg',
    'images/angry/4.jpeg',
    'images/angry/5.jpeg'
  ]);
  const [currPhotoIndex, setCurrPhotoIndex] = useState(Math.floor(Math.random() * moodPhotos.length));

  useEffect(() => {
    setCurrPhotoIndex(Math.floor(Math.random() * moodPhotos.length));
  }, [randomPhotoIndex]);

  useEffect(() => {
    handleCardClick(activeFilter);
    setCurrPhotoIndex(Math.floor(Math.random() * moodPhotos.length));
  }, [activeFilter]);

  function handleCardClick(type) {
    let photos;
    if (type === "happy") {
      photos = [
        'images/happy/h1.jpeg',
        'images/happy/h2.jpeg',
        'images/happy/h3.jpeg',
        'images/happy/h4.jpeg'
      ];
    } else if (type === "sad") {
      photos = [
        'images/sad/6.jpeg',
        'images/sad/7.jpeg'
      ];
    } else if (type === "angry") {
      photos = [
        'images/angry/1.jpeg',
        'images/angry/2.jpeg',
        'images/angry/4.jpeg',
        'images/angry/5.jpeg'
      ];
    } else {
      photos = [
        'images/happy/h1.jpeg',
        'images/happy/h2.jpeg',
        'images/happy/h3.jpeg',
        'images/happy/h4.jpeg',
        'images/sad/6.jpeg',
        'images/sad/7.jpeg',
        'images/angry/1.jpeg',
        'images/angry/2.jpeg',
        'images/angry/4.jpeg',
        'images/angry/5.jpeg'
      ];
    }
    setMoodPhotos(photos);
  }

  return (
    <div className='centreimage'>
      <Dislike />
      <img src={moodPhotos[currPhotoIndex]} alt="mood" />
      <Like />
    </div>
  );
}
