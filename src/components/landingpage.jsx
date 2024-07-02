import React from 'react';
import Firstpg from './firstpg.svg';
import './LandingPage.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const handleAreaClick = (areaId) => {
    console.log('Clicked area:', areaId);
    
    // Perform actions based on the clicked area
    // Example: show a modal, update state, etc.
  };
  const handleClick = () => {
  <Link to ></Link>
    
    // Perform actions based on the clicked area
    // Example: show a modal, update state, etc.
  };
  return (
    <div className="full-screen-svg">
       
      <img src={Firstpg} alt="Full Screen SVG" className="svg-image" useMap="#image-map" />
      <map name="image-map">
        <area
          alt="Clickable Area 1"
          title="Clickable Area 1"
          coords="0px,177px,142px,321px,336px,63px,311px,0px,0px,0px"
          shape="poly"
          onClick={() => handleAreaClick('area1')}
          onClick={() => handleClick()}
        />
        
        <Link to={'/founder'}><area
          alt="Clickable Area 2"
          title="Clickable Area 2"
          coords="300px,500px,490px,650px"
          shape="rect"
          onClick={() => handleAreaClick('area2')}
        />
        </Link>
        <Link to={'/brands'}><area
          alt="Clickable Area 3"
          title="Clickable Area 3"
          coords="565px,560px,780px,650px"
          shape="rect"
          onClick={() => handleAreaClick('area3')}
        />
        </Link>
        {/* Add more areas as needed */}
      </map>
    </div>
  );
}
