import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Start from './components/Start'
import Questions from './components/Questions'

function App() {
  const [isStarted, setIsStarted] = useState(false); // Track if game has started
  const handleStart = () => {
    setIsStarted(true); // Update state to show the first trivia question
  };
  
  
  return (
    <div className="app">
      <Header />
      {isStarted ? (
        <Questions question="What is the capital of California?" answer="Sacramento" />
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
