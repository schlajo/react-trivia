import React, { useState } from 'react'; // Added useState import
import '../App.css';

function Questions({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false); // State to show/hide the answer
  
    const handleShowAnswer = () => setShowAnswer(true);
  
    return (
      <div className="card">
        <p>{question}</p>
        {showAnswer ? <p>Answer: {answer}</p> : <button onClick={handleShowAnswer}>Show Answer</button>}
      </div>
    );
  }
  
export default Questions;




// const Questions = ({ question, onAnswerClick }) => {
//     const { question: qText, correct_answer, incorrect_answers } = question;

//     const shuffledAnswers = [...incorrect_answers, correct_answer].sort(
//         () => Math.random() - 0.5
//     );

//     return (
//         <div className="questions">
//             <h2 dangerouslySetInnerHTML={{ __html: qText }} />
//             <div className="answer-section">
//                 {shuffledAnswers.map((answer, index) => (
//                     <button
//                         key={index}
//                         onClick={() =>
//                             onAnswerClick(answer === correct_answer)
//                         }
//                         dangerouslySetInnerHTML={{ __html: answer }}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

