import React from 'react';
import '../App.css';

function ScoreCard({ score, total }) {
  const isPerfectScore = score === total;

  return (
    <div className="final-score">
      <h2>
        {isPerfectScore
          ? `Congratulations! You scored a perfect ${score}/${total}!`
          : `Your Final Score: ${score} / ${total}`}
      </h2>
    </div>
  );
}

export default ScoreCard;







// import React from 'react';
// import '../App.css';

// function ScoreCard({ score, total }) {
//   return (
//     <div>
//       <h2>Your Score</h2>
//       <p>
//         {score} / {total}
//       </p>
//     </div>
//   );
// }

// export default ScoreCard;
