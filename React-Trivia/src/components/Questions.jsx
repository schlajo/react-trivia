import React, { useState, useEffect } from 'react';
import '../App.css';

// Mapping of states to their respective cities
const stateCities = {
  Alabama: ["Birmingham", "Mobile", "Huntsville"],
  Alaska: ["Anchorage", "Fairbanks", "Sitka"], // Replace with valid city
  Arizona: ["Tucson", "Mesa", "Chandler"],
  Arkansas: ["Fayetteville", "Fort Smith", "Jonesboro"], // Replace with valid city
  California: ["Los Angeles", "San Francisco", "San Diego"],
  Colorado: ["Colorado Springs", "Aurora", "Boulder"], // Replace with valid city
  Connecticut: ["Bridgeport", "New Haven", "Stamford"], // Replace with valid city
  Delaware: ["Wilmington", "Middletown", "Newark"], // Replace with valid city
  Florida: ["Miami", "Orlando", "Tampa"], // Replace with valid city
  Georgia: ["Macon", "Savannah", "Augusta"],
  Hawaii: ["Pearl City", "Hilo", "Kailua"], // Replace with valid city
  Idaho: ["Meridian", "Idaho Falls", "Pocatello"], // Replace with valid city
  Illinois: ["Chicago", "Aurora", "Naperville"], // Correct spelling
  Indiana: ["Fishers", "Fort Wayne", "Evansville"], // Replace with valid city
  Iowa: ["Iowa City", "Cedar Rapids", "Davenport"], // Replace with valid city
  Kansas: ["Wichita", "Overland Park", "Kansas City"], // Replace with valid city
  Kentucky: ["Louisville", "Lexington", "Bowling Green"], // Replace with valid city
  Louisiana: ["New Orleans", "Baton Rouge", "Shreveport"], // Replace with valid city
  Maine: ["Portland", "Bangor", "Lewiston"], // Replace with valid city
  Maryland: ["Baltimore", "Frederick", "Rockville"], // Replace with valid city
  Massachusetts: ["Boston", "Worcester", "Springfield"],
  Michigan: ["Detroit", "Grand Rapids", "Ann Arbor"], // Replace with valid city
  Minnesota: ["Minneapolis", "Bloomington", "Rochester"], // Replace with valid city
  Mississippi: ["Biloxi", "Gulfport", "Southaven"], // Replace with valid city
  Missouri: ["Kansas City", "Saint Louis", "Springfield"],
  Montana: ["Billings", "Missoula", "Great Falls"], // Replace with valid city
  Nebraska: ["Omaha", "Kearney", "Bellevue"], // Replace with valid city
  Nevada: ["Las Vegas", "Reno", "Henderson"], // Replace with valid city
  "New Hampshire": ["Manchester", "Nashua", "Rochester"],
  "New Jersey": ["Newark", "Jersey City", "Paterson"],
  "New Mexico": ["Albuquerque", "Rio Rancho", "Las Cruces"], // Replace with valid city
  "New York": ["Buffalo", "Rochester", "Syracuse"],
  "North Carolina": ["Charlotte", "Durham", "Greensboro"],
  "North Dakota": ["Fargo", "Minot", "Grand Forks"],
  Ohio: ["Toledo", "Cleveland", "Cincinnati"],
  Oklahoma: ["Edmond", "Tulsa", "Norman"], // Replace with valid city
  Oregon: ["Portland", "Gresham", "Eugene"], // Replace with valid city
  Pennsylvania: ["Philadelphia", "Pittsburgh", "Allentown"], // Replace with valid city
  "Rhode Island": ["Pawtucket", "Cranston", "Warwick"], // Replace with valid city
  "South Carolina": ["Mount Pleasant", "Charleston", "Greenville"],
  "South Dakota": ["Sioux Falls", "Rapid City", "Aberdeen"], // Replace with valid city
  Tennessee: ["Chattanooga", "Memphis", "Knoxville"],
  Texas: ["Houston", "San Antonio", "Dallas"],
  Utah: ["St. George", "Provo", "West Valley City"], // Replace with valid city
  Vermont: ["Burlington", "Essex", "South Burlington"], // Replace with valid city
  Virginia: ["Virginia Beach", "Norfolk", "Chesapeake"], // Correct spelling
  Washington: ["Seattle", "Spokane", "Tacoma"],
  "West Virginia": ["Parkersburg", "Huntington", "Morgantown"],
  Wisconsin: ["Milwaukee", "Kenosha", "Green Bay"], // Replace with valid city
  Wyoming: ["Gillette", "Casper", "Laramie"],
};

// Helper function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Generate random answer choices, including the correct one
function generateOptions(correctAnswer, state) {
  const incorrectOptions = stateCities[state]
    .filter(city => city !== correctAnswer) // Get cities that are not the capital
    .sort(() => 0.5 - Math.random())
    .slice(0, 3); // Select 3 cities

  // Include the correct answer and shuffle the options
  return shuffleArray([...incorrectOptions, correctAnswer]);
}

function Questions({ question, correctAnswer, state, onNext }) {
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false); 

  // Reset options and states whenever the question changes
  useEffect(() => {
    const newOptions = generateOptions(correctAnswer, state);
    setOptions(newOptions);
    setSelectedAnswer(null);
    setShowNextButton(false); 
  }, [question, correctAnswer, state]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowNextButton(true); // Show Next button after an answer is selected
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
            disabled={selectedAnswer !== null} // Disable after choosing an answer
          >
            {option}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {selectedAnswer && (
        <p className={`feedback ${selectedAnswer === correctAnswer ? 'correct' : 'incorrect'}`}>
          {selectedAnswer === correctAnswer
            ? 'Correct!'
            : `Incorrect. The correct answer is ${correctAnswer}.`}
        </p>
      )}

      {/* Conditionally render the Next button only if an answer is selected */}
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
//     .slice(0, 3)
//     .map((q) => q.capital);

//   return shuffleArray([...incorrectOptions, correctAnswer]);
// }

// function Questions({ question, correctAnswer, allQuestions, onNext }) {
//   const [options, setOptions] = useState([]);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showNextButton, setShowNextButton] = useState(false);

//   useEffect(() => {
//     setOptions(generateOptions(correctAnswer, allQuestions));
//     setSelectedAnswer(null); // Reset selected answer
//     setShowNextButton(false); // Hide next button
//   }, [question]);

//   const handleAnswerClick = (answer) => {
//     setSelectedAnswer(answer); // Track selected answer
//     setShowNextButton(true); // Show next button
//   };

//   return (
//     <div className="questions">
//       <p>{question}</p>
//       <div className="options">
//         {options.map((option, index) => (
//           <button
//             key={index}
//             className={`btn-answers ${
//               selectedAnswer === option ? 'btn-selected' : ''
//             }`}
//             onClick={() => handleAnswerClick(option)}
//             disabled={selectedAnswer !== null} // Disable buttons after selecting an answer
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       {selectedAnswer && (
//         <p className="feedback">
//           {selectedAnswer === correctAnswer
//             ? 'Correct!'
//             : `Incorrect. The correct answer is ${correctAnswer}.`}
//         </p>
//       )}
//       {showNextButton && (
//         <button className="btn-next" onClick={onNext}>
//           Next
//         </button>
//       )}
//     </div>
//   );
// }

// export default Questions;

