import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button.js'
import Card from './card.js';
import LikeDislike from './likeDislike.js';


function Chatbot() {
  const [moodType, setMoodType] = useState("");
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
  const [currPhotoIndex, setCurrPhotoIndex] = useState( Math.floor(Math.random() * moodPhotos.length))
 
  useEffect(() => {
    // Update the current photo index whenever the moodPhotos state changes
    setCurrPhotoIndex(Math.floor(Math.random() * moodPhotos.length));
    console.log(moodPhotos)
    console.log(moodPhotos.length)
    console.log(currPhotoIndex)
  }, [moodPhotos]);

  function showRandomPhoto() {
    setCurrPhotoIndex(  Math.floor(Math.random() * moodPhotos.length))
  }

  function handleCardClick(type) {
    console.log(type)
    if(type == "happy") {
      var photos = [
        'images/happy/h1.jpeg',
        'images/happy/h2.jpeg',
        'images/happy/h3.jpeg',
        'images/happy/h4.jpeg'
      ]
    }
    if(type == "sad") {
      var photos = [
        'images/sad/6.jpeg',
        'images/sad/7.jpeg'
      ]
    }
    if(type == "angry") {
      var photos = [
        'images/angry/1.jpeg',
        'images/angry/2.jpeg',
        'images/angry/4.jpeg',
        'images/angry/5.jpeg'
      ]
    }
    setMoodType(type)
    setMoodPhotos(photos)


  }
  return (
    <div className="App">
      <Button text="Motivate Me!" onClick={showRandomPhoto}></Button>
      <div className='card-container'>
      <Card text="Happy" image="images/happy/h1.jpeg" onClick={(e)=>handleCardClick("happy")}></Card>
      <Card text="Sad" image="images/sad/6.jpeg" onClick={(e)=>handleCardClick("sad")}></Card>
      <Card text="Angry" image="images/angry/1.jpeg" onClick={(e)=>handleCardClick("angry")}></Card>
      </div>
      <p>{moodType}</p>
      <LikeDislike > <Card image={moodPhotos[currPhotoIndex]}></Card></LikeDislike>
    </div>
  );
}

export default Chatbot;