import React, { useEffect } from 'react';
import './About.css';
import image from '../img/Image1.PNG';
import { Link } from 'react-router-dom';
import video from '../video/icebreaker-landing-video.mp4';

export default function About() {
  return (
    <div className="about-container2">
      <div className="about-box2">
        <div id="div1">
          <img className="home_image" src={image} alt=""></img>
        </div>
        <div id="div2">
          <iframe width="600" height="480"
            src="https://www.youtube.com/embed?v=5KthBze7T1U">
          </iframe>
        </div>
      </div>
    </div>
  );
}