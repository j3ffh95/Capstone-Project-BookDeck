import React from "react";
// import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='../videos/videoLibrary.mp4' autoPlay loop muted />
      <h1>Library Management Tool</h1>
      <p>Store your favorite books</p>
    </div>
  );
}

export default HeroSection;
