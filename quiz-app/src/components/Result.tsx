import { FunctionComponent } from "react";
import { AnswerObject } from "../QuizFunctions";
import { ResultWrapper } from "./Result.styles";

const Result:FunctionComponent<{result: AnswerObject}> = ({result}) => {
    const {question, questionNumber, answer, correctAnswer} = result;
  return (
    <ResultWrapper status={correctAnswer === answer}>
        <h3>Question: {questionNumber}</h3>
        <p> {question}</p>
        <span>Your Answer: {answer}</span>
        <span>Correct Answer: {correctAnswer}</span>
        <br/>
        <div></div>
    </ResultWrapper>
  )
}

export default Result;
