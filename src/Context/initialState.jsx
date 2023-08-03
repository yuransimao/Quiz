import data from "../data/questions_complete"

const Stages = ["Start", "Category", "Playing", "End"]

export const initialState ={
    GamesStages: Stages[0],
    questions: data
}