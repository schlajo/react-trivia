import React, { useState, useEffect } from 'react';
import '../App.css';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateOptions(correctAnswer, allQuestions) {
  const incorrectOptions = allQuestions
    .filter((q) => q.capital !== correctAnswer)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map((q) => q.capital);

  return shuffleArray([...incorrectOptions, correctAnswer]);
}

function Questions({ question, correctAnswer, allQuestions, onNext }) {
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    setOptions(generateOptions(correctAnswer, allQuestions));
    setSelectedAnswer(null); // Reset selected answer
    setShowNextButton(false); // Hide next button
  }, [question]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer); // Track selected answer
    setShowNextButton(true); // Show next button
  };

  return (
    <div className="questions">
      <p>{question}</p>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`btn-answers ${
              selectedAnswer === option ? 'btn-selected' : ''
            }`}
            onClick={() => handleAnswerClick(option)}
            disabled={selectedAnswer !== null} // Disable buttons after selecting an answer
          >
            {option}
          </button>
        ))}
      </div>
      {selectedAnswer && (
        <p className="feedback">
          {selectedAnswer === correctAnswer
            ? 'Correct!'
            : `Incorrect. The correct answer is ${correctAnswer}.`}
        </p>
      )}
      {showNextButton && (
        <button className="btn-next" onClick={onNext}>
          Next
        </button>
      )}
    </div>
  );
}

export default Questions;



// import React, { useState, useEffect } from 'react';
// import '../App.css';

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// function generateOptions(correctAnswer, allQuestions) {
//   const incorrectOptions = allQuestions
//     .filter((q) => q.capital !== correctAnswer)
//     .sort(() => 0.5 - Math.random())
//     .slice(0, 3) // Select 3 incorrect options
//     .map((q) => q.capital);

//   return shuffleArray([...incorrectOptions, correctAnswer]);
// }


// function Questions({ question, correctAnswer, allQuestions, onNext }) {
//   const [options, setOptions] = useState([]);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showNextButton, setShowNextButton] = useState(false);

//   useEffect(() => {
//     const newOptions = generateOptions(correctAnswer, allQuestions);
//     setOptions(newOptions);
//     setSelectedAnswer(null);
//     setIsCorrect(false);
//     setShowNextButton(false);
//   }, [question]);

//   const handleAnswerClick = (answer) => {
//     setSelectedAnswer(answer);
//     const correct = answer === correctAnswer;
//     setIsCorrect(correct);
//     setShowNextButton(true); // Show the Next button after selecting an answer
//   };

//   const handleNext = () => {
//     onNext(isCorrect); // Pass if the answer was correct to parent
//   };

//   return (
//     <div className="questions">
//       <p>{question}</p>
//       <div className="options">
//         {options.map((option, index) => (
//           <button
//             key={index}
//             className={`btn-answers ${
//               selectedAnswer === option
//                 ? isCorrect
//                   ? 'correct'
//                   : 'incorrect'
//                 : ''
//             }`}
//             onClick={() => handleAnswerClick(option)}
//             disabled={selectedAnswer !== null}
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       {selectedAnswer && (
//         <p className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
//           {isCorrect ? 'Correct!' : `Incorrect. The correct answer is ${correctAnswer}.`}
//         </p>
//       )}

//       {showNextButton && (
//         <button className="btn-next" onClick={handleNext}>
//           Next
//         </button>
//       )}
//     </div>
//   );
// }

// export default Questions;





