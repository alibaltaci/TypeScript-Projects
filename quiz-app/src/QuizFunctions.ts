import {useState} from "react"
import { Difficulty, QuestionState, fetchQuizQuestions } from "./API";
import { TOTAL_QUESTIONS } from "./constants";
import { delay } from "./utils";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  questionNumber: number;
  correctAnswer: string; 
}

export const useQuizFunctions = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [number, setNumber] = useState<number>(0)
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]) 
    const [score, setScore] = useState<number>(0)
    const [gameOver, setGameOver] = useState<boolean>(true)
  
  
    const startTrivia = async() => {
      setLoading(true);
      setGameOver(false);
      setScore(0);

      await delay(2000)
  
      const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  
      setQuestions(newQuestions);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false)
      // console.log(newQuestions)
  
    }
  
  
    const checkAnswer = async(e: React.MouseEvent<HTMLButtonElement>) => {
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
        await delay(1000)
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

    return {
      loading,
      questions,
      number,
      userAnswers,
      score,
      gameOver,
      startTrivia,
      checkAnswer,
      nextQuestion,
    };
}
