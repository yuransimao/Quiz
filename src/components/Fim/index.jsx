import React, { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'
import { Button } from '../Button'
import * as Types from '../../context/Type'

export  function Fim() {
    const [state, dispatch] = useContext(QuizContext)
  return (
    <div>
    <h1>FIM DO JOGO</h1>
    <p>Você a certo {state.correctAnswer} das {state.questions.length}</p>
    <Button text="Reniciar"
    handleClick={() => dispatch({type: Types.RECOMECAR})}
    />
    </div>
  )
}
