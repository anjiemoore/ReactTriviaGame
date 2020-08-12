import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from './API'
import { Difficulty } from './API'

const TOTAL_QUESTIONS = 10;


const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startGame = async () => {

  }
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }
  
  const nextQuestion = () => {
  
  }
  
  return (
    <div className="App">
      <h1>Trivia Game</h1>
      <button className="start" onClick={startGame}>Start</button>
      <h3 className="Score">Score: </h3>
      <h3>Loading Question</h3>
      {/* <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next Question</button>
      </div>
  );
}

export default App;
