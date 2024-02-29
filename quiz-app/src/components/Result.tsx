import { FunctionComponent } from "react";
import { AnswerObject } from "../QuizFunctions";

const Result:FunctionComponent<{result: AnswerObject}> = ({result}) => {
    const {question, questionNumber, answer, correctAnswer} = result;
  return (
    <div>
        <h3>Question: {questionNumber}</h3>
        <p> {question}</p>
        <span>Your Answer: {answer}</span>
        <span>Correct Answer: {correctAnswer}</span>
        <div></div>
    </div>
  )
}

export default Result;
