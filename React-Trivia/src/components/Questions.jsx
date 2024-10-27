import React, { useState, useEffect } from 'react';
import '../App.css';

// Mapping of states to their respective cities
const stateCities = {
  Alabama: ["Birmingham", "Mobile", "Huntsville"],
  Alaska: ["Anchorage", "Fairbanks", "Sitka"],
  Arizona: ["Tucson", "Mesa", "Chandler"],
  Arkansas: ["Fayetteville", "Fort Smith", "Jonesboro"],
  California: ["Los Angeles", "San Francisco", "San Diego"],
  Colorado: ["Colorado Springs", "Aurora", "Boulder"],
  Connecticut: ["Bridgeport", "New Haven", "Stamford"],
  Delaware: ["Wilmington", "Middletown", "Newark"],
  Florida: ["Miami", "Orlando", "Tampa"], 
  Georgia: ["Macon", "Savannah", "Augusta"],
  Hawaii: ["Pearl City", "Hilo", "Kailua"], 
  Idaho: ["Meridian", "Idaho Falls", "Pocatello"], 
  Illinois: ["Chicago", "Aurora", "Naperville"],
  Indiana: ["Fishers", "Fort Wayne", "Evansville"], 
  Iowa: ["Iowa City", "Cedar Rapids", "Davenport"], 
  Kansas: ["Wichita", "Overland Park", "Kansas City"], 
  Kentucky: ["Louisville", "Lexington", "Bowling Green"], 
  Louisiana: ["New Orleans", "Lafayette", "Shreveport"], 
  Maine: ["Portland", "Bangor", "Lewiston"], 
  Maryland: ["Baltimore", "Frederick", "Rockville"], 
  Massachusetts: ["Cambridge", "Worcester", "Springfield"],
  Michigan: ["Detroit", "Grand Rapids", "Ann Arbor"], 
  Minnesota: ["Minneapolis", "Bloomington", "Rochester"], 
  Mississippi: ["Biloxi", "Gulfport", "Southaven"], 
  Missouri: ["Kansas City", "Saint Louis", "Springfield"],
  Montana: ["Billings", "Missoula", "Great Falls"], 
  Nebraska: ["Omaha", "Kearney", "Bellevue"], 
  Nevada: ["Las Vegas", "Reno", "Henderson"], 
  "New Hampshire": ["Manchester", "Nashua", "Rochester"],
  "New Jersey": ["Newark", "Jersey City", "Paterson"],
  "New Mexico": ["Albuquerque", "Rio Rancho", "Las Cruces"], 
  "New York": ["Buffalo", "Rochester", "Syracuse"],
  "North Carolina": ["Charlotte", "Durham", "Greensboro"],
  "North Dakota": ["Fargo", "Minot", "Grand Forks"],
  Ohio: ["Toledo", "Cleveland", "Cincinnati"],
  Oklahoma: ["Edmond", "Tulsa", "Norman"], 
  Oregon: ["Portland", "Gresham", "Eugene"], 
  Pennsylvania: ["Philadelphia", "Pittsburgh", "Allentown"], 
  "Rhode Island": ["Pawtucket", "Cranston", "Warwick"], 
  "South Carolina": ["Mount Pleasant", "Charleston", "Greenville"],
  "South Dakota": ["Sioux Falls", "Rapid City", "Aberdeen"], 
  Tennessee: ["Chattanooga", "Memphis", "Knoxville"],
  Texas: ["Houston", "San Antonio", "Dallas"],
  Utah: ["St. George", "Provo", "West Valley City"], 
  Vermont: ["Burlington", "Essex", "South Burlington"], 
  Virginia: ["Virginia Beach", "Norfolk", "Chesapeake"],
  Washington: ["Seattle", "Spokane", "Tacoma"],
  "West Virginia": ["Parkersburg", "Huntington", "Morgantown"],
  Wisconsin: ["Milwaukee", "Kenosha", "Green Bay"], 
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
  <button
    className="btn-next"
    onClick={() => onNext(selectedAnswer === correctAnswer)} // Pass true/false here
  >
    Next
  </button>
)}

    </div>
  );
}

export default Questions;

