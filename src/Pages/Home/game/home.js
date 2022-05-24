import './style.css';
import React from 'react';
import Gameplay from './gameplay';

function Display() {
  return (
    <div className="Display">
      <h1>Memory Mini Game</h1>
      <Gameplay /> 
    </div>
  );
}

export default Display;