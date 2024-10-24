import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Start from './components/Start'
import Questions from './components/Questions'


// List of states and their capitals
const stateCapitals = [
  { state: "Alabama", capital: "Montgomery" },
  { state: "Alaska", capital: "Juneau" },
  { state: "Arizona", capital: "Phoenix" },
  { state: "Arkansas", capital: "Little Rock" },
  { state: "California", capital: "Sacramento" },
  { state: "Colorado", capital: "Denver" },
  { state: "Connecticut", capital: "Hartford" },
  { state: "Delaware", capital: "Dover" },
  { state: "Florida", capital: "Tallahassee" },
  { state: "Georgia", capital: "Atlanta" },
  { state: "Hawaii", capital: "Honolulu" },
  { state: "Idaho", capital: "Boise" },
  { state: "Illinois", capital: "Springfield" },
  { state: "Indiana", capital: "Indianapolis" },
  { state: "Iowa", capital: "Des Moines" },
  { state: "Kansas", capital: "Topeka" },
  { state: "Kentucky", capital: "Frankfort" },
  { state: "Louisiana", capital: "Baton Rouge" },
  { state: "Maine", capital: "Augusta" },
  { state: "Maryland", capital: "Annapolis" },
  { state: "Massachusetts", capital: "Boston" },
  { state: "Michigan", capital: "Lansing" },
  { state: "Minnesota", capital: "St. Paul" },
  { state: "Mississippi", capital: "Jackson" },
  { state: "Missouri", capital: "Jefferson City" },
  { state: "Montana", capital: "Helena" },
  { state: "Nebraska", capital: "Lincoln" },
  { state: "Nevada", capital: "Carson City" },
  { state: "New Hampshire", capital: "Concord" },
  { state: "New Jersey", capital: "Trenton" },
  { state: "New Mexico", capital: "Santa Fe" },
  { state: "New York", capital: "Albany" },
  { state: "North Carolina", capital: "Raleigh" },
  { state: "North Dakota", capital: "Bismarck" },
  { state: "Ohio", capital: "Columbus" },
  { state: "Oklahoma", capital: "Oklahoma City" },
  { state: "Oregon", capital: "Salem" },
  { state: "Pennsylvania", capital: "Harrisburg" },
  { state: "Rhode Island", capital: "Providence" },
  { state: "South Carolina", capital: "Columbia" },
  { state: "South Dakota", capital: "Pierre" },
  { state: "Tennessee", capital: "Nashville" },
  { state: "Texas", capital: "Austin" },
  { state: "Utah", capital: "Salt Lake City" },
  { state: "Vermont", capital: "Montpelier" },
  { state: "Virginia", capital: "Richmond" },
  { state: "Washington", capital: "Olympia" },
  { state: "West Virginia", capital: "Charleston" },
  { state: "Wisconsin", capital: "Madison" },
  { state: "Wyoming", capital: "Cheyenne" },

];


function App() {
  const [isStarted, setIsStarted] = useState(false); // Track if game has started
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null); // Store current question
  
  const handleStart = () => {
    setIsStarted(true); // Start the quiz
    setCurrentQuestionIndex(0); // Reset to the first question
  };
  
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => 
      (prevIndex + 1) % stateCapitals.length  // Loop back to the start if at the end
    );
  };

  const currentQuestion = stateCapitals[currentQuestionIndex];


  return (
    <div className="app">
      <Header />
      {isStarted && currentQuestion ? (
        <Questions
          question={`What is the capital of ${currentQuestion.state}?`}
          answer={currentQuestion.capital}
          onNext={handleNextQuestion} // Pass the next question handler
        />
        ) : (
        <Start onStart={handleStart} />
      )}
    </div>
  );
}


export default App;



// import React, { useState, useEffect } from 'react';
// import NavBar from './NavBar';
// import QuestionCard from './QuestionCard';
// import './App.css';

// const App = () => {
//     const [questions, setQuestions] = useState([]);
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [score, setScore] = useState(0);
//     const [showScore, setShowScore] = useState(false);

//     // Fetch questions from an API (Open Trivia Database API)
//     useEffect(() => {
//         fetch('https://opentdb.com/api.php?amount=5&type=multiple')
//             .then((response) => response.json())
//             .then((data) => setQuestions(data.results));
//     }, []);

//     const handleAnswerClick = (isCorrect) => {
//         if (isCorrect) setScore(score + 1);

//         const nextQuestion = currentQuestion + 1;
//         if (nextQuestion < questions.length) {
//             setCurrentQuestion(nextQuestion);
//         } else {
//             setShowScore(true);
//         }
//     };

//     return (
//         <div className="app">
//             <NavBar />
//             {showScore ? (
//                 <div className="score-section">
//                     You scored {score} out of {questions.length}
//                 </div>
//             ) : questions.length > 0 ? (
//                 <QuestionCard
//                     question={questions[currentQuestion]}
//                     onAnswerClick={handleAnswerClick}
//                 />
//             ) : (
//                 <p>Loading questions...</p>
//             )}
//         </div>
//     );
// };

// export default App;








  
//   // const [count, setCount] = useState(0)

//   // return (
//   //   <>
//   //     // {/* <div>
//   //     //   <a href="https://vitejs.dev" target="_blank">
//   //     //     <img src={viteLogo} className="logo" alt="Vite logo" />
//   //     //   </a>
//   //     //   <a href="https://react.dev" target="_blank">
//   //     //     <img src={reactLogo} className="logo react" alt="React logo" />
//   //     //   </a>
//   //     // </div>
//   //     // <h1>Country Capital Trivia</h1>
//   //     // <div className="card">
//   //     //   <button onClick={() => setCount((count) => count + 1)}>
//   //     //     count is {count}
//   //     //   </button>
//   //     //   <p>
//   //     //     Edit <code>src/App.jsx</code> and save to test HMR
//   //     //   </p>
//   //     // </div>
//   //     //  */}
//   //   </>
//   // )
