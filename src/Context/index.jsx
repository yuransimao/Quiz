import { QuizContext } from "./QuizContexts";
import { InitialState } from "./InitialState";
import { useReducer } from "react";
import { Reducer } from "./Reducer/reducer";

export const QuizProvider = ({children}) => {

    const value = useReducer(Reducer,InitialState)
    
  return (
    <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>
  )
}
