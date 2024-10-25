import React, { useState } from 'react';
import '../App.css';

function Start({ onStart }) {
  return (
    <div>
      <button className="btn-start" onClick={onStart}>
        Start
      </button>
    </div>
  );
}

export default Start;