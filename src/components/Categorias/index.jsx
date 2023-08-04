import  { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'

import * as Type from '../../context/Type'

export const Categorias = () => {
    const [state, dispatch] = useContext(QuizContext)

    const HandleCategory = (category) =>{
       dispatch({type : Type.START_GAME, payload: category})
       dispatch({type : Type.ALitorioQuestion})
        
    }  
    return (
    <div>
        <h1>Selecione uma Categoria</h1>
       {state.questions.map((questions)=>(
             <button onClick={() => HandleCategory(questions.category)} key={questions.category}>{questions. category}</button>
       ))}
    </div>
  )
}
