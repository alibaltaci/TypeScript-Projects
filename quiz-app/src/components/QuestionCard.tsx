import { FunctionComponent } from "react";
import { AnswerObject } from "../QuizFunctions";
import { ButtonWrapper, QuestionCardWrapper } from "./QuestionCard.styles";

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
    <QuestionCardWrapper>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {
                answers?.map( el => (
                    <ButtonWrapper 
                        key={el}
                        correct={userAnswers?.correctAnswer === el}
                        userClicked={userAnswers?.answer === el}
                    >
                        <button disabled={!!userAnswers} value={el} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: el}} />
                        </button>
                    </ButtonWrapper>
                ) )
            }
        </div>
    </QuestionCardWrapper>
  )
}

export default QuestionCard