import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Start from './components/Start';
import Questions from './components/Questions';
import ScoreCard from './components/Scorecard';

const stateCapitals = [
  { state: 'Alabama', capital: 'Montgomery' },
  { state: 'Alaska', capital: 'Juneau' },
  { state: 'Arizona', capital: 'Phoenix' },
  { state: 'Arkansas', capital: 'Little Rock' },
  { state: 'California', capital: 'Sacramento' },
  { state: 'Colorado', capital: 'Denver' },
  { state: 'Connecticut', capital: 'Hartford' },
  { state: 'Delaware', capital: 'Dover' },
  { state: 'Florida', capital: 'Tallahassee' },
  { state: 'Georgia', capital: 'Atlanta' },
  { state: 'Hawaii', capital: 'Honolulu' },
  { state: 'Idaho', capital: 'Boise' },
  { state: 'Illinois', capital: 'Springfield' },
  { state: 'Indiana', capital: 'Indianapolis' },
  { state: 'Iowa', capital: 'Des Moines' },
  { state: 'Kansas', capital: 'Topeka' },
  { state: 'Kentucky', capital: 'Frankfort' },
  { state: 'Louisiana', capital: 'Baton Rouge' },
  { state: 'Maine', capital: 'Augusta' },
  { state: 'Maryland', capital: 'Annapolis' },
  { state: 'Massachusetts', capital: 'Boston' },
  { state: 'Michigan', capital: 'Lansing' },
  { state: 'Minnesota', capital: 'St. Paul' },
  { state: 'Mississippi', capital: 'Jackson' },
  { state: 'Missouri', capital: 'Jefferson City' },
  { state: 'Montana', capital: 'Helena' },
  { state: 'Nebraska', capital: 'Lincoln' },
  { state: 'Nevada', capital: 'Carson City' },
  { state: 'New Hampshire', capital: 'Concord' },
  { state: 'New Jersey', capital: 'Trenton' },
  { state: 'New Mexico', capital: 'Santa Fe' },
  { state: 'New York', capital: 'Albany' },
  { state: 'North Carolina', capital: 'Raleigh' },
  { state: 'North Dakota', capital: 'Bismarck' },
  { state: 'Ohio', capital: 'Columbus' },
  { state: 'Oklahoma', capital: 'Oklahoma City' },
  { state: 'Oregon', capital: 'Salem' },
  { state: 'Pennsylvania', capital: 'Harrisburg' },
  { state: 'Rhode Island', capital: 'Providence' },
  { state: 'South Carolina', capital: 'Columbia' },
  { state: 'South Dakota', capital: 'Pierre' },
  { state: 'Tennessee', capital: 'Nashville' },
  { state: 'Texas', capital: 'Austin' },
  { state: 'Utah', capital: 'Salt Lake City' },
  { state: 'Vermont', capital: 'Montpelier' },
  { state: 'Virginia', capital: 'Richmond' },
  { state: 'Washington', capital: 'Olympia' },
  { state: 'West Virginia', capital: 'Charleston' },
  { state: 'Wisconsin', capital: 'Madison' },
  { state: 'Wyoming', capital: 'Cheyenne' },
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

const selectedQuestions = shuffleArray(stateCapitals).slice(0, 20);

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScoreCard, setShowScoreCard] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScoreCard(false);
  };

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < selectedQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowScoreCard(true);
      setIsStarted(false);
    }
  };

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  return (
    <div className="app">
      <Header />
      {showScoreCard ? (
        <ScoreCard score={score} total={selectedQuestions.length} />
      ) : isStarted && currentQuestion ? (
        <Questions
          question={`What is the capital of ${currentQuestion.state}?`}
          correctAnswer={currentQuestion.capital}
          state={currentQuestion.state}
          onNext={handleNextQuestion}
        />
      
      ) : (
        <Start onStart={handleStart} />
      )}
      {/* Score Display Always Visible */}
      <div className="score">
        <p>Score: {score} / 20</p>
      </div>
    </div>
  );
}

export default App;
