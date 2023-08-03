import { QuizContext } from "./context";
import { initialState } from "./initialState";
import { useReducer } from "react";
import { Reducer } from "./reducer";

export const QuizProvider = ({children}) => {

    const value = useReducer(Reducer,initialState)
    
  return (
    <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>
  )
}
