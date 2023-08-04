import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'
import { Opction } from '../Opction'
import * as Types  from '../../context/Type'
export const Questions = () => {

  const [state, dispatch] = useContext(QuizContext)
  const currentQuestions = state.questions[state.CurrentQuestion]
  
  const onSelectiOpction = (opction) => {
    
    dispatch({
      type: Types.CORRECT_QUESTION, 
      payload:{
      answer:currentQuestions.answer,
      opction
    }})

  }
  return (
    <div> 
      <h1>{currentQuestions.question}</h1>
      {currentQuestions.options.map((opction,index)=>(
        <Opction opction={opction} key={opction}
        position={index + 1}
        answer={opction.answer}
        SelectiOpction = {() => onSelectiOpction(opction)}
        />
      ))}
      <button onClick={() => dispatch({type: Types.NEXT_QUESTION})}>Continuar</button>
    </div>
  )
}
