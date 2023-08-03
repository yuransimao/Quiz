import data from "../../data/questions_complete"

export const Stages = ["Start", "Category", "Playing", "End"]

export const InitialState ={
    GameStages: Stages[0],
    questions: data
}