import React, { useState } from 'react';
//import '../App.css';
import './Start.css'

function Start({ onStart }) {
  return (
    <div>
      <button className="btn" onClick={onStart}>
        Start
      </button>
    </div>
  );
}

export default Start;