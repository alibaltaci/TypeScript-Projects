import { FunctionComponent } from "react";
import Result from "./Result";
import { AnswerObject } from "../QuizFunctions";

const Results: FunctionComponent<{ results: AnswerObject[] }>= ({results}) =>( 
        results.map(result => <Result key={result.question} result={result} /> )
    )

export default Results


