import React from 'react';
import fullScreenSVG from './brands.svg';
import './new.css'; // Assuming you have a CSS file for Brands component styles

export default function Brands() {
  const handleAreaClick = (areaId) => {
    console.log('Clicked area:', areaId);
    // Perform actions based on the clicked area
    // Example: show a modal, update state, etc.
  };

  return (
    <div className="full-screen-svg">
      <img src={fullScreenSVG} alt="Full Screen SVG" useMap="#image-map" className="svg-image" />
      <map name="image-map">
        <area
          alt="Clickable Area 1"
          title="Clickable Area 1"
          coords="47px,308px,525px,511px"
          shape="rect"
          onClick={() => handleAreaClick('area1')}
          className="clickable-area"
        />
        {/* Add more areas as needed */}
      </map>
    </div>
  );
}
