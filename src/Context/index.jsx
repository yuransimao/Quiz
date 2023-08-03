import { createContext, useReducer } from "react";
import P from "prop-types";
import questions from "../data/questions"
export const QuizContext = createContext()

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameSTAGES :STAGES[0],
    questions
}

const QuizReducer = (state, action) =>{
   
    switch(action.type){
        case "CHANGE_STAGES":{
            return{
            ...state,
            gameSTAGES:STAGES[1]
            }
        }
        default: return state
    }
}

export const QuizProvide = ({children}) => {
    const value = useReducer(QuizReducer, initialState)
    return(
    <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>
    )
}



QuizProvide.propType ={
    children : P.node
}