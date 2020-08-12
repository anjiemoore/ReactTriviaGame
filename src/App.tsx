import React from 'react';
import QuestionCard from './components/QuestionCard';

const startGame = async () => {

}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  
}

const nextQuestion = () => {

}

const App = () => {
  return (
    <div className="App">
      <h1>Trivia Game</h1>
      <button className="start" onClick={startGame}>Start</button>
      <h3 className="Score">Score: </h3>
      <h3>Loading Question</h3>
      <QuestionCard/>
      <button className="next" onClick={nextQuestion}>Next Question</button>
      </div>
  );
}

export default App;
