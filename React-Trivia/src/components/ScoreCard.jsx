import React from 'react';
import '../App.css';

function ScoreCard({ score, total }) {
  return (
    <div>
      <h2>Your Score</h2>
      <p>
        {score} / {total}
      </p>
    </div>
  );
}

export default ScoreCard;
