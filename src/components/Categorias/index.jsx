import  { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'
import { Button } from '../Button'
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
             <Button handleClick={() => HandleCategory(questions.category)} key={questions.category}
             text ={questions. category}
             />
       ))}
    </div>
  )
}
