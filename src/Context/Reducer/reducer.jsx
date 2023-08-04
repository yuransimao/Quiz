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
            const QuestionNext = state.CurrentQuestion +1
            let end = false;

            if(!state.questions[QuestionNext]) end =true;

            return{
                ...state,
                CurrentQuestion: QuestionNext,
                GameStages : end ? Stages[3] : state.GameStages
                

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
            const answer = action.payload.answer
            const option = action.payload.option
            let answerCorret =0;
            if(answer === option) answerCorret = 1;
            
            console.log(answerCorret)
            return{
                ...state,
                correctAnswer: state.correctAnswer + answerCorret,
                answerSelect : option
            }
        }
    }
}