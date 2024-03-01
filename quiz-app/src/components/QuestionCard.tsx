import { FunctionComponent } from "react";
import { AnswerObject } from "../QuizFunctions";

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswers: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}
const QuestionCard: FunctionComponent<Props> = ({question, answers, callback, userAnswers, questionNr, totalQuestions}) => {
  return (
    <div>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {
                answers?.map( el => (
                    <div key={el}>
                        <button disabled={!!userAnswers} value={el} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: el}} />
                        </button>
                    </div>
                ) )
            }
        </div>
    </div>
  )
}

export default QuestionCard