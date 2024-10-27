import React from 'react';
import '../App.css';

function ScoreCard({ score, total, onRetakeQuiz }) {
  const isPerfectScore = score === total;

  return (
    <div className="final-score">
      <h2>
        {isPerfectScore
          ? `Congratulations! You scored a perfect ${score}/${total}!`
          : `Your Final Score: ${score} / ${total}`}
      </h2>
      <button className="btn-retake" onClick={onRetakeQuiz}>
        Retake Quiz
      </button>
    </div>
  );
}

export default ScoreCard;
