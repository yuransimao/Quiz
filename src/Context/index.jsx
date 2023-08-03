import { createContext, useReducer } from "react";
import P from "prop-types";
import questions from "../data/questions"
export const QuizContext = createContext()

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameSTAGES :STAGES[0],
    questions,
    currentQuestion:0,
}

const QuizReducer = (state, action) =>{
   
    switch(action.type){
        case "CHANGE_STAGES":{
            return{
            ...state,
            gameSTAGES:STAGES[1]
            }
        }
        case "REORDER_QUESTION":{
            const REODERQuestion = questions.sort(() => {
              return  Math.random() - 0.5
            })
            console.log(REODERQuestion)
            return{
            ...state,
            questions:REODERQuestion 
            }
        }
        case "CHANGE_QUESTION":{
            const nextQuestion = state.currentQuestion++
            let endGamer = false

            if(!questions[nextQuestion]) endGamer = true

            return{
            ...state,
            currentQuestion: nextQuestion,
            gameSTAGES : endGamer ? STAGES[2] : state.gameSTAGES
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