import * as Types from "../Type"
import { Stages } from "../InitialState"

export const Reducer = (state, action) =>{
    switch(action.type){
        case Types.CHANGE_STAGES:{
            return{
                ...state,
                GameStages: Stages[1]
            }
        }
        case Types.START_GAME:{
            let CategoryCuren;

            state.questions.forEach((questions) =>{
                if(questions.category === action.payload){
                    CategoryCuren = questions
                }
            })
            console.log(CategoryCuren)
            return{
                ...state,
                GameStages: Stages[2],
                questions: CategoryCuren
            }
        }
        
    }
}