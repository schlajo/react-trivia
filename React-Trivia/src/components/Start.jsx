import React, { useState } from 'react';
import '../App.css';
import './Start.css'

function Start({ onStart }) {
  return (
    <div className="btn-container">
      <button className="btn" onClick={onStart}>
        Start
      </button>
    </div>
  );
}

export default Start;