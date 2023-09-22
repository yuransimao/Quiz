import * as Types from "../Type"
import { InitialState, Stages } from "../InitialState"

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
                    CategoryCuren = questions.questions
                }
            })
            
            return{
                ...state,
                GameStages: Stages[2],
                questions: CategoryCuren
            }
        }
        
        case Types.NEXT_QUESTION:{
            let QuestionNext = state.CurrentQuestion++
            let end = false;

            if(!state.questions[QuestionNext]) end =true;
            
            
            return{
                ...state,
                CurrentQuestion: QuestionNext,
                GameStages : end ? Stages[3] : state.GameStages,
                AnswerSelects: false,
                

            }
        } 
        case Types.ALitorioQuestion:{
            
            const Alitorio =  state.questions.sort(() =>{
                return Math.random() - 0.5;
            })
           
            
            return{
                ...state,
                questions: Alitorio
            }
        }

        case Types.CORRECT_QUESTION:{

            if(state.AnswerSelects) return state;

            const answer = action.payload.answer;
            const option = action.payload.opction;
            
            let answerCorret =0;
            if(answer === option) answerCorret = 1;
            
            
            return{
                ...state,
                AnswerSelects : option,
                correctAnswer: state.correctAnswer + answerCorret,
            }
        }
        case Types.SETTIMERENICIAR:{
            return{
                ...state,
                GameStages : Stages[3]
            }
        }
        case Types.RECOMECAR:{
            return InitialState
        }
    }
}