import { FunctionComponent } from "react";
import { AnswerObject } from "../App";

const Results: FunctionComponent<{ results: AnswerObject[] }>= ({results}) => {
    return(
        results.map(result => {
            const {question, questionNumber, answer, correctAnswer} = result;
            return (
                <div key={question}>
                    <h3>Question: {questionNumber}</h3>
                    <p> {question}</p>
                    <span>Your Answer: {answer}</span>
                    <span>Correct Answer: {correctAnswer}</span>
                    <div></div>
                </div>
            )
        })
    )
}

export default Results


