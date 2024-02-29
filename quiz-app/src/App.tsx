import { useState } from "react"
import QuestionCard from "./components/QuestionCard"
import { Difficulty, QuestionState, fetchQuizQuestions } from "./API"

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string; 
}

const TOTAL_QUESTIONS = 10

const App = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState<number>(0)
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
  const [score, setScore] = useState<number>(0)
  const [gameOver, setGameOver] = useState<boolean>(true)

  console.log(questions)

  const startTrivia = async() => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      
      <h1>React Quiz</h1>
      
      {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>Start</button>
      ): null};

      <p className="score">Score:</p>
      <p >Loading Questions...</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers} 
        callback={checkAnswer} 
        userAnswer={userAnswer? userAnswer[number] : undefined}
      /> */}
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default App
