import {data} from "../../data/questions_complete"

export const Stages = ["Start", "Category", "Playing", "End"]

export const InitialState ={
    GameStages: Stages[0],
    questions: data,
    CurrentQuestion: 0,
    AnswerSelects: false,
    correctAnswer:0,
    Countertime :30   
}