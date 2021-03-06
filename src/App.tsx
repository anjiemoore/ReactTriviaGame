import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from './API';
import { QuestionsState, Difficulty } from './API';

import { Style } from './App.styles';
import { Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;


const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startGame = async (difficulty: Difficulty) => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      difficulty
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);

      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObj]);
    }
  }
  
  const nextQuestion = () => {
    const nextQuestion = number +1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }
  
  return (
    <>
    <Style />
    <Wrapper>
      <h1>Trivia Game</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <div>
        <button className="start easy" onClick={() => startGame(Difficulty.EASY)}>Easy</button>
        <button className="start med" onClick={() => startGame(Difficulty.MEDIUM)}>Medium</button>
        <button className="start hard" onClick={() =>startGame(Difficulty.HARD)}>Hard</button></div>) : null}
      {!gameOver ? <h3 className="score">Score: {score}</h3> : null}
      {loading && <h3>Loading Question</h3>}
      {!loading && !gameOver && (
        <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
      <button className="next" onClick={nextQuestion}>Next Question</button>
      ) : null}
      </Wrapper>
      </>
  );
}

export default App;
