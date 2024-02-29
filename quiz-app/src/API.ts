
// {
//     "type": "multiple",
//     "difficulty": "easy",
//     "category": "Animals",
//     "question": "How many legs do butterflies have?",
//     "correct_answer": "6",
//     "incorrect_answers": [
//         "2",
//         "4",
//         "0"
//     ]
// }

import { shuffleArray } from "./utils";

export type Question = {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

// extends
export type QuestionState  = Question & { answers: string[] }

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "Medium",
    HARD = "Hard",
}

// interface IFetchQuizQuestions {
//     amount: number;
//     difficulty: Difficulty;
// }

export const fetchQuizQuestions = async(amount: number, difficulty: Difficulty) => {

    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const data = await(await fetch(endpoint)).json();
    // console.log(data)

    return(
        data.results?.map( (question: Question) => ({
                ...question,
                answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }))
    )
}