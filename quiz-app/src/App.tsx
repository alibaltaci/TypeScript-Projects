import { useState } from "react"
import QuestionCard from "./components/QuestionCard"
import { Difficulty, QuestionState, fetchQuizQuestions } from "./API"
import Results from "./components/Results";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  questionNumber: number;
  correctAnswer: string; 
}

const TOTAL_QUESTIONS = 10

const App = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState<number>(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]) 
  const [score, setScore] = useState<number>(0)
  const [gameOver, setGameOver] = useState<boolean>(true)


  const startTrivia = async() => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false)
    console.log(newQuestions)

  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(userAnswers.length !== TOTAL_QUESTIONS ){

      const answer = e.currentTarget.value;
      
      const correct = questions[number].correct_answer === answer;
      
      if(correct) setScore(prev => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        questionNumber: number + 1,
        correctAnswer: questions[number].correct_answer,
      }

      setUserAnswers( prev => [...prev, answerObject]);
      nextQuestion()
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      setNumber(number + 1);
    }
  }

  return (
    <div className="App">
      
      <h1>Quizzy Hub</h1>
      
      { gameOver &&  <button className="start" onClick={startTrivia}>Start</button>}

      { questions.length > 0 && <p className="score">Score: {score}</p> }
      
      {loading && <p >Loading Questions...</p>}
      
      {!loading && !gameOver && (
        <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number]?.question}
        answers={questions[number]?.answers} 
        callback={checkAnswer} 
        userAnswers={userAnswers? userAnswers[number] : undefined}
        />
      )}

      { gameOver && <Results results={userAnswers} />}

      {/* {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (
        <button className="next" onClick={nextQuestion}>Next Question</button>
      )} */}

    </div>
  )
}

export default App
