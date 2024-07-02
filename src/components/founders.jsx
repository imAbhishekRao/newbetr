import React from 'react';
import fullScreenSVG2 from './lastpg.svg';
import './Brands.css'; // Assuming you have a CSS file for Brands component styles
import { Link } from 'react-router-dom';
export default function Brands() {
  const handleAreaClick = () => {
    console.log('Clicked Brands area');
    // Perform actions based on the clicked area
    // Example: show a modal, update state, etc.
  };

  return (
    <div className="full-screen-svg">
      <img src={fullScreenSVG2} alt="Full Screen SVG" useMap="#image-map" className="svg-image" />
      <map name="image-map">
        <Link to={'/'}>
        <area
          alt="Clickable Area Brands"
          title="Clickable Area Brands"
          coords="27px,108px,390px,280px"
          shape="rect"
          onClick={handleAreaClick}
          className="clickable-area"
        />
        </Link>
        {/* Add more areas as needed */}
      </map>
    </div>
  );
}
