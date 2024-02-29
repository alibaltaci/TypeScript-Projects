import { FunctionComponent } from "react";

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}
const QuestionCard: FunctionComponent<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
  return (
    <div>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {
                answers.map( el => (
                    <div key={el}>
                        <button disabled={userAnswer} onClick={callback}>
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