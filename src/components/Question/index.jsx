import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'
import { Opction } from '../Opction'
import * as Types  from '../../context/Type'
export const Questions = () => {

  const [state, dispatch] = useContext(QuizContext)
  const currentQuestions = state.questions[state.CurrentQuestion]
  
  const onSelectiOpction = (opction) => {
    console.log(currentQuestions.answer )

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
      <p>Perguntas de {state.CurrentQuestion +1} á {state.questions.length}</p>
      {currentQuestions.options.map((opction,index)=>(
        <Opction opction={opction} key={opction}
        position={index + 1}
        answer={currentQuestions.answer}
        SelectiOpction = {() => onSelectiOpction(opction)}
        />
      ))}
      {state.AnswerSelects && <button onClick={() => dispatch({type: Types.NEXT_QUESTION})}>Continuar</button>}
    </div>
  )
}
